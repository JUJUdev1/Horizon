import React, { useState } from 'react';

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: prompt,
        temperature: 0.5
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "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"
        }
      });
      setResponse(res.data);
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default Chat;
