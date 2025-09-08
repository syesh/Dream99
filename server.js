const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const companies = [
  "Google", "Amazon", "Apple", "Microsoft", "Meta",
  "Netflix", "Tesla", "Adobe", "IBM", "Intel",
  "Oracle", "Salesforce", "Spotify", "Uber", "Airbnb",
  "PayPal", "Samsung", "Sony", "Dell", "HP",
  "Twitter", "Pinterest", "Snapchat", "Dropbox", "Zoom",
  "Slack", "Reddit", "eBay", "LinkedIn", "TikTok",
  "Nvidia", "AMD", "Qualcomm", "Cisco", "Xiaomi",
  "LG", "Motorola", "Asus", "Lenovo", "Toshiba",
  "Siemens", "Philips", "Panasonic", "Foxconn", "Alibaba",
  "Baidu", "Tencent", "Huawei", "ZTE", "Vivo"
];

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// endpoint to get companies
app.get("/api/companies", (req, res) => {
  res.json(companies);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
