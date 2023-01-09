import React, { useState } from "react";
import "./chatgpt.css";
const { Configuration, OpenAIApi } = require("openai");

const Chatgpt = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const configuration = new Configuration({
    apiKey: " ", //  <----- put your API key here   //    visit and register at  (https://beta.openai.com/account/api-keys) for Api keys
  });
  const openai = new OpenAIApi(configuration);
  const handleSubmit = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("res", response.data.choices.values().next());
    setResponse(response.data.choices[0].text);
  };

  return (
    <div>
      <div className="gpt-container">
        <div className="gpt-text">Ask a Question to your AI friend</div>

        <div className="section-types"></div>
        <div className="section-inputs"></div>
        <div className="gpt-input">
          <input
            className="gpt-input-box"
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>

        <button
          className="gpt-btn"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
        <div className="gpt-response"> {response}.</div>
      </div>
    </div>
  );
};

export default Chatgpt;
