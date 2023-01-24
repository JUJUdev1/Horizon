import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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'
});
const openai = new OpenAIApi(configuration);

const generateResponse = async (prompt) => {
  const { data } = await openai.createCompletion({
    engine: 'davinci',
    prompt,
    maxTokens: 5,
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
    stop: ['\n', ' Human:', ' AI:'],
  });
  return data.choices[0].text;
}







const Chat = () => {
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = e.target.elements.userInput.value;
    setResponse(await generateResponse(userInput));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userInput" />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default Chat;
