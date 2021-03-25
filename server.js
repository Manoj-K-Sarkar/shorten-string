const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.post("/encode", (req, res) => {
  const body = req.body;
  const inputString = body.encode;
  const n = inputString.length;
  let currOutputString = "";
  for (let i = 0; i < n; i++) {
    // Count occurrences of current character
    let count = 1;
    while (i < n - 1 && inputString[i] === inputString[i + 1]) {
      count++;
      i++;
    }

    // Store character and its count
    if (count === 1) count = "";
    currOutputString += count + inputString[i];
  }
  return res.json({ encodedString: currOutputString });
});

app.post("/decode", (req, res) => {
  const body = req.body;
  const inputString = body.decode;

  let currOutputString = "";
  for (let i = 0; i < inputString.length; i++) {
    let count = 0;
    const character = inputString[i];
    while (
      i + 1 < inputString.length &&
      inputString[i] >= 0 &&
      inputString[i] <= 9
    ) {
      count = count * 10 + (inputString[i++] - 0);
    }
    if (!count) currOutputString += character;
    while (count--) currOutputString += inputString[i];
  }
  return res.json({ decodedString: currOutputString });
});

app.use(express.static(path.join(__dirname, "shorten-string-frontend", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "shorten-string-frontend", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Listening at port" + PORT);
});
