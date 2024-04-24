import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: "https://epubkit.app",
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	integrations: [tailwind()],
});
