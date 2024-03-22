const http = require("http");
const fs = require("fs");
const url = require("url");

const cities = [
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Sydney", lat: -33.8651, lng: 151.2099 },
  { name: "Rome", lat: 41.9028, lng: 12.4964 },
  { name: "Cairo", lat: 30.0444, lng: 31.2357 },
  { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Rabat", lat: 34.0209, lng: -6.8416 },
];

// fs.writeFile("input.txt", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("writing succ");
//   }
// });
function readCity() {
  try {
    let dataCity = fs.readFileSync("input.txt", "utf-8");
    let cityName = dataCity.toString();
    let city = cities.filter((cityname) => cityname.name === cityName)[0];
    return city;
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchData() {
  try {
    const { name, lat, lng } = readCity();
    const link = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;
    const response = await fetch(link);
    const res = await response.json();

    const temp = res.current_weather.temperature;
    const temp_unit = res.current_weather_units.temperature;
    return `Current Temperature In : ' ${name}  ' And weather is => ${temp}, ${temp_unit}`;
  } catch (error) {
    console.error(error.message);
  }
}

async function tempFunction() {
  fs.unlink("cityname.txt", (err) => {
    if (err) {
      console.log(err.message);
    }
  });
  fs.writeFileSync("cityname.txt", await fetchData());
  try {
    console.log("File writed succ");
  } catch (error) {
    console.error(error.message);
  }
}

tempFunction();

const server = http.createServer(async (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const query = parseUrl.query;

  if (path === "/weather") {
    try {
      // Handle Weather Endpoint.
      const city = readCity();
      const temperature = await fetchData(city);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Weather in ${city.name}: Temperature: ${temperature}`);
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else {
    // Handle Unknown
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
