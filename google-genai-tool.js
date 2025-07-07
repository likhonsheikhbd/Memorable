// This file implements a Google GenAI tool using the @google/genai library
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';
import { promises as fs } from 'fs';
import path from 'path';

async function main() {
  try {
    // Read the system prompt from Memorable.md
    const systemPromptContent = await fs.readFile(path.resolve('Memorable.md'), 'utf-8');

    // Initialize the Google GenAI client with API key
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    // Configure the model and tools
    const tools = [
      { urlContext: {} },
    ];

    const config = {
      thinkingConfig: {
        thinkingBudget: 32768,
      },
      tools,
      responseMimeType: 'text/plain',
      systemInstruction: [
        {
          text: systemPromptContent,
        },
      ],
    };

    // Use Gemini Pro model for text generation
    const model = 'gemini-2.5-pro';

    // Prepare the input contents
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: 'INSERT_INPUT_HERE',
          },
        ],
      },
    ];

    console.log('Generating content with system instruction...');

    // Generate content stream using Gemini Pro
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    // Process and output the response chunks
    let fullResponse = '';
    for await (const chunk of response) {
      const chunkText = chunk.text;
      fullResponse += chunkText;
      process.stdout.write(chunkText);
    }
    console.log('\n\n--- End of Stream ---');

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();