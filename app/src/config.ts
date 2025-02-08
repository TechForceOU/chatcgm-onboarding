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
        // {
        //   media: {
        //     type: 'sticker',
        //     src: import('./assets/stickers/yoda_heart.tgs'),
        //     size: 200,
        //   },
        //   shape: 'square',
        //   pagination: 'count',
        //   title: 'Welcome to ChatCGM',
        //   description: "Most advanced AI for the efficient diabetes management",
        //   button: 'Next',
        // },

        // video 1
        {
          media: {
            type: 'video',
            src: import('./assets/videos/carb_estimation.mp4'),
            poster: import('./assets/img/food_photo_poster.webp'),
            style: 'aspect-ratio: 780/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Scan Food, Know Carbs',
          description: "AI-powered carb counting at your fingertips",
          button: 'Next',
        },
        {
          media: {
            type: 'video',
            src: import('./assets/videos/estimation_correction.mp4'),
            poster: import('./assets/img/empty_chat_poster.webp'),
            style: 'aspect-ratio: 780/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Adjust on the way',
          description: "Make corrections to the estimation by specifying ingridients or cooking method",
          button: 'Next',
        },
        // video 3
        {
          media: {
            type: 'video',
            src: import('./assets/videos/voice_message.mp4'),
            poster: import('./assets/img/empty_chat_poster.webp'),
            style: 'aspect-ratio: 780/936',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'The easiest way to track your meals, insulin and excercise',
          description: "Send voice or text command to add records directly to your Nightscout",
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
