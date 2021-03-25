import React from "react";
import { BASE_URL } from "../fetch_base";

function Encode() {
  const [inputString, setinputString] = React.useState("");
  const [outputString, setOutputString] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const generatEncodedStringHandler = async () => {
    const res = await fetch(BASE_URL + "/encode", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ encode: inputString }),
    });
    const resMessage = await res.json();
    setOutputString(resMessage.encodedString);
  };

  const onChangeStringHandler = (inputString) => {
    let isValidString = true;
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] < 'a' || inputString[i] > 'z') isValidString = false;
    }
    setIsError(!isValidString);
    isValidString && setinputString(inputString);
  };

  return (
    <section className="Encode">
      <h1>Encode</h1>
      <div className="input-container">
        <p className="type-error">
          {isError && "Please Enter only strings of small case only"}
        </p>
        <input
          id="originalString"
          type="text"
          onChange={(e) => onChangeStringHandler(e.target.value)}
          placeholder="Original String"
        />
        <label htmlFor="originalString">Original String</label>
      </div>

      <div>
        <button onClick={generatEncodedStringHandler}>
          Generate Encoded String
        </button>
        <p className="output">{outputString}</p>
      </div>
    </section>
  );
}

export default Encode;
