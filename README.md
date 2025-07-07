# Memorable

Memorable is a software solution that predicts the memorability and saliency of images and videos, as well as elements within them. Developed at MIT, Memorable increases ROI for marketing and design professionals, especially in the awareness space, where predictive solutions are very scarce.

## Features

- Predicts memorability and saliency for images and videos
- AI-powered assistant using Google Gemini Pro and Vercel AI SDK
- Responsive UI built with Next.js and shadcn/ui
- Modern, production-ready codebase

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Google Gemini API key (set as `GEMINI_API_KEY` in your environment)

### Installation

```bash
npm install @google/genai mime
npm install -D @types/node
```

### Usage

1.  Place your system prompt in `Memorable.md`.
2.  Run the tool:

    ```bash
    node google-genai-tool.js
    ```

### UI

The UI is built with Next.js and shadcn/ui for a modern, responsive experience. To run the UI:

```bash
cd ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Vercel AI SDK

The UI is designed to integrate with the Vercel AI SDK for Gemini and other models. See `ui/ai.ts` for integration details.

## Technologies Used

- Google Gemini Pro (via @google/genai)
- Vercel AI SDK
- Next.js
- shadcn/ui

## License

MIT