import { generateText } from "ai";
import { google } from "@ai-sdk/google";

async function main() {
  const { text } = await generateText({
    model: google("models/gemini-2.0-flash-exp"),
    prompt: "What is love?",
  });

  console.log(text);
}

main();