const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";
const REDIRECT_URI = "http://localhost:3000"; // Change as needed
const AUTH_URL = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/fitness.activity.read`;

const loginWithGoogleFit = () => {
  window.location.href = AUTH_URL;
};

return (
  <button onClick={loginWithGoogleFit}>Connect to Google Fit</button>
);