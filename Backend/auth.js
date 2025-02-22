const { google } = require("googleapis");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

app.get("/fit-data", async (req, res) => {
  try {
    oauth2Client.setCredentials({ access_token: req.query.access_token });

    const fitness = google.fitness({ version: "v1", auth: oauth2Client });

    const response = await fitness.users.dataset.aggregate({
      userId: "me",
      requestBody: {
        aggregateBy: [{ dataTypeName: "com.google.step_count.delta" }],
        bucketByTime: { durationMillis: 86400000 }, // 1 day
        startTimeMillis: Date.now() - 7 * 24 * 60 * 60 * 1000, // Last 7 days
        endTimeMillis: Date.now(),
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));