import React from "react";
import "../App.css";
import { BASE_URL } from "../fetch_base";

function Decode() {
  const [inputString, setinputString] = React.useState("");
  const [outputString, setOutputString] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const generateOriginalStringHandler =async () => {
    const res = await fetch(BASE_URL + "/decode", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ decode: inputString }),
    });
    const resMessage = await res.json();
    setOutputString(resMessage.decodedString);
};

  const onChangeStringHandler = (inputString) => {
    let isValidString = true;
    for (let i = 0; i < inputString.length; i++) {
      if (
        (inputString[i] < "a" || inputString[i] > "z") &&
        (inputString[i] < "0" || inputString[i] > "9")
      ) {
        isValidString = false;
      }
    }
    setIsError(!isValidString);
    isValidString && setinputString(inputString);
  };

  return (
    <section className="Decode">
      <h1>Decode</h1>
      <div className="input-container">
          <p className="type-error">{isError && "Please Enter a valid Encoded string"}
        </p>
          <input
          id="encodedString"
          type="text"
          onChange={(e) => onChangeStringHandler(e.target.value)}
          placeholder="Encoded String"
        />
        <label htmlFor="encodedString">Encoded String</label>
      </div>
      <div>
        <button onClick={generateOriginalStringHandler}>
          Generate Original String
        </button>
        <p className="output">{outputString}</p>
      </div>
    </section>
  );
}

export default Decode;
