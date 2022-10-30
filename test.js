(async () => {
  const browser = await pupetteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(process.env.url, { waitUntil: "networkidle2" });

  await page.waitForSelector("input[name=Username]");

  await page.type("input[name=Username]", process.env.ieltsUsername);
  await page.type("input[name=Password]", process.env.ieltsPassword);
  await page.keyboard.press("Enter");
})();

var axios = require("axios");
var data = JSON.stringify({
  districtIds: [547],
  dates: [
    {
      year: 2022,
      months: [10, 11, 12],
    },
    {
      year: 2023,
      months: [1, 2, 3, 4, 5, 6],
    },
  ],
  ieltsModule: "AC",
  examOption: "IELTSUKVI",
  daysToNearestPbExam: 0,
  daysToNearestCdExam: 0,
});

var config = {
  method: "post",
  url: "https://ieltsukviregistration.britishcouncil.org/api/districtexams?",
  headers: {
    "Content-Type": "application/json",
    Cookie:
      "ak_bmsc=C36A8ACA8DFFE728A33D219F2DFEF4CC~000000000000000000000000000000~YAAQPmwQAhO4RMGDAQAAL2sS3xGFT9iFLorTJNzXopFpT9ovO9N0705wuY/BifjeKJA4uIbUTbGxfjXW/jAeQYS8vFq1D6kDzX0gis7cUXdPf3j5HeIaDQwBbMtiAkJ9KOTw8+ki9vJuanKqS8sWcCMi36Rj1GLhpKnD4GGy2Falg7rcxPf2EnPwYNj+KSQ6peh7l256dj0KZBz3JRlrqm8j91DJP+RopB45GmN98iWA5j17SmSLAGG6R1utQdUC+Kj4SBho6j1ST0cGRlibduKVK6hQvnTgX0CjVNtV1BE3YP6GWF5PJAlMj21obAv4U8lxtV874sDclq8iq31YZuVR+3v63BvmKiulmFWaZ26dk3yjMSujRaxfWKT3hdc5XIsMg6JmKef37bmkIJA=; bm_sv=618CFD5540144EB0105D346911B70EC7~YAAQPmwQAhS4RMGDAQAAL2sS3xEWeHYtbybnovrLztB08uNpS8NEcBWQPb+sDtTu8UIMAhBR7Uz1LQobE/JYq3gqKeJt2m7j4XcSCPMhYXG5jNUxosK5rAx5WBT6N0zo9fVHEDdTziMXhlv0QVCaa/jE65U9UkJhBZiR0WgjUWISqF8IkeVq32rgbHUOujxRS16q13Dve0vTFV1MI+/6rA22fCBx/eoh56Guh1OfIFYnY7b/xj3FzQ8vr31r+F6Sg3bfuXkMCCU=~1; ApplicationGatewayAffinity=1ecb1fdb5df1e5c13a7e5ef1916cda6a; ApplicationGatewayAffinityCORS=1ecb1fdb5df1e5c13a7e5ef1916cda6a",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
