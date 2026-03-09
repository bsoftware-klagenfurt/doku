import { defineConfig } from 'tinacms';

const branch = process.env.GITHUB_BRANCH || process.env.HEAD || 'main';

export default defineConfig({
	branch,
	clientId: process.env.TINA_PUBLIC_CLIENT_ID || '',
	token: process.env.TINA_TOKEN || '',
	build: {
		outputFolder: 'admin',
		publicFolder: 'static'
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'static'
		}
	},
	schema: {
		collections: [
			{
				name: 'docs',
				label: 'Docs',
				path: 'content/docs',
				format: 'md',
				fields: [
					{ name: 'title', label: 'Title', type: 'string', required: true },
					{ name: 'description', label: 'Description', type: 'string' },
					{ name: 'body', label: 'Body', type: 'rich-text', isBody: true }
				]
			}
		]
	}
});
