const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 4000;

const { initAsciiArray } = require("./util");

app.use(cors());
app.use(bodyParser.json());

app.post("/encode", (req, res) => {
  const ASCII = initAsciiArray();

  const body = req.body;
  const inputString = body.encode;

  let outputString = "";
  let index = 5;
  let value = 0;
  let count = 0;
  let bytes = "";
  for (let i = 0; i < inputString.length; i++) {
    let charValue = inputString.charCodeAt(i);
    charValue -= 96;

    for (let j = 4; j >= 0; j--) {
      if (charValue & (1 << j)) {
        value += Math.pow(2, index);
        bytes += "1";
      } else bytes += "0";
      count++;
      index--;
      if (index === -1) index = 5;
      if (count % 6 === 0) {
        outputString += ASCII[value];
        value = 0;
        bytes = "";
      }
    }
  }
  if (value !== 0) {
    outputString += ASCII[value];
  }

  return res.json({ encodedString: outputString });
});

app.post("/decode", (req, res) => {
  const ASCII = initAsciiArray();

  const body = req.body;
  const inputString = body.decode;

  let outputString = "";
  let index = 4;
  let value = 0;
  let count = 0;
  let bytes = "";
  for (let i = 0; i < inputString.length; i++) {
    let charValue;
    for (let j = 0; j < ASCII.length; j++) {
      if (ASCII[j] === inputString[i]) charValue = j;
    }

    for (let j = 5; j >= 0; j--) {
      if (charValue & (1 << j)) {
        value += Math.pow(2, index);
        bytes += "1";
      } else {
        bytes += "0";
      }
      count++;
      index--;
      if (index === -1) index = 4;
      if (count % 5 === 0) {
        if (value + 96 >= 97 && value + 96 <= 122)
          outputString += String.fromCharCode(value + 96);
        value = 0;
        bytes = "";
      }
    }
  }
  if (value) {
    if (value + 96 >= 97 && value + 96 <= 122)
      outputString += String.fromCharCode(value + 96);
  }
  return res.json({ decodedString: outputString });
});

app.use(
  express.static(path.join(__dirname, "shorten-string-frontend", "build"))
);

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "shorten-string-frontend", "build", "index.html")
  );
});

app.listen(PORT, () => {
  console.log("Listening at port" + PORT);
});
