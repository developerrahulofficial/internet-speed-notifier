// lib/sendWhatsapp.js

const https = require("https");
const qs = require("querystring");

const INSTANCE_ID = 'instance87646'; // Replace with your UltraMsg instance ID
const TOKEN = 'vcmf7dnz1tzup1ba'; // Replace with your UltraMsg token
const PHONE_NUMBER = '+918178743286'; // Replace with the phone number you want to send to

export function sendWhatsappMessage(message) {
  const options = {
    method: "POST",
    hostname: "api.ultramsg.com",
    port: null,
    path: `/${INSTANCE_ID}/messages/chat`,
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  };

  const postData = qs.stringify({
    token: TOKEN,
    to: PHONE_NUMBER,
    body: message
  });

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let chunks = [];

      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        const body = Buffer.concat(chunks).toString();
        resolve(body);
      });

      res.on("error", (err) => {
        reject(err);
      });
    });

    req.write(postData);
    req.end();
  });
}
