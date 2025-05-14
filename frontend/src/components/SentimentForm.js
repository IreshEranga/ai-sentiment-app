import React, { useState } from "react";
import api from "../api";

const SentimentForm = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/sentiment", { text });
      setResult(res.data.sentiment);
    } catch (err) {
      setResult("Error analyzing sentiment.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text..."
          rows="4"
          style={{ width: "100%", padding: "10px" }}
        />
        <button type="submit">Analyze</button>
      </form>
      {result && <h3>Sentiment: {result}</h3>}
    </div>
  );
};

export default SentimentForm;
