import { serve } from 'bun';
import { noteRoutes } from './routes/noteRoutes';
const port = process.env.PORT || 3000;

const server = serve({
	port: port,
	async fetch(request) {
		return noteRoutes.fetch(request);
	},
});

console.log('Server running at http://localhost:', server.port);
