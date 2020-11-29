require("dotenv").config();

module.exports = {
  port: process.env.PORT || 5000,
  isProduction: process.env.NODE_ENV === "production",
  apiVersion: process.env.API_VERSION || 1,
  keyGoogle: process.env.GOOGLEMAP_KEY,
  lineChannelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  lineChannelSecret: process.env.CHANNEL_SECRET,
  thaiPostUrl: process.env.THAIPOST_URL_AUTH,
  thaiPostTrack: process.env.THAIPOST_TRACK,
  thaipostKey: process.env.THAIPOST_KEY,
};
