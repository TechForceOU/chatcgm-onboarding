import { defineConfig } from '@tok/generation';
import ClosePage from './pages/ClosePage.vue';

export default defineConfig({
  definePresets: {
    close: ClosePage,
  },
  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/yoda_thinking.tgs'),
            size: 200,
          },
          shape: 'square',
          pagination: 'count',
          title: 'ChatGPT (GPT-4) now in Telegram!',
          description: "Most advanced AI powered by <a href='https://openai.com' target='_blank'>OpenAI</a>",
          button: 'Next',
        },

        // video 1
        {
          media: {
            type: 'video',
            src: import('./assets/videos/chatgpt_1.mp4'),
            poster: import('./assets/img/chatgpt_1_poster.webp'),
            style: 'aspect-ratio: 780/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Ask any questions',
          description: "Get instant smart answers",
          button: 'Next',
        },

        // video 2
        {
          media: {
            type: 'video',
            src: import('./assets/videos/chatgpt_2.mp4'),
            poster: import('./assets/img/chatgpt_2_poster.webp'),
            style: 'aspect-ratio: 780/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Send Voice Messages',
          description: "90+ languages are supported",
          button: {
            content: 'Send your first message!',
            to: '/close',
          },
        },
      ],
    },
    {
      path: '/close',
      extends: 'close'
    }
  ],
});
