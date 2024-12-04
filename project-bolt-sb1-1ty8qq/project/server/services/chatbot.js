import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const setupChatbot = (io) => {
  io.on('connection', (socket) => {
    socket.on('chatbot_message', async (data) => {
      try {
        const response = await generateResponse(data.message);
        socket.emit('chatbot_response', {
          message: response,
          timestamp: new Date()
        });
      } catch (error) {
        console.error('Chatbot error:', error);
        socket.emit('chatbot_error', {
          message: 'Sorry, I encountered an error. Please try again.'
        });
      }
    });
  });
};

async function generateResponse(message) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a helpful assistant for FreeDev, a software development company. Help users understand our services and guide them to the right solutions."
      }, {
        role: "user",
        content: message
      }],
      max_tokens: 150
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate response');
  }
}