import { defineConfig } from 'tinacms';

const branch = process.env.GITHUB_BRANCH || process.env.HEAD || 'main';
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : 'doku';

export default defineConfig({
	branch,
	clientId: process.env.TINA_PUBLIC_CLIENT_ID || process.env.PUBLIC_TINA_CLIENT_ID || '',
	token: process.env.TINA_TOKEN || '',
	build: {
		basePath,
		outputFolder: 'admin',
		publicFolder: 'static'
	},
	media: {
		tina: {
			mediaRoot: 'images',
			publicFolder: 'static'
		}
	},
	schema: {
		collections: [
			{
				name: 'docs',
				label: 'Docs',
				path: 'content/docs',
				ui: {
				allowedActions: {
						create: true,
						delete: true,
						createNestedFolder: false,
					},
				},
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
