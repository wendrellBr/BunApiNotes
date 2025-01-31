import { noteHandlers } from '../handlers/noteHandlers';

export const noteRoutes = {
	async fetch(request: Request) {
		const url = new URL(request.url);
		const method = request.method;
		const path = url.pathname;

		// GET /notes
		if (path === '/notes' && method === 'GET') {
			return noteHandlers.getAllNotes();
		}

		// GET /notes/:id
		if (path.startsWith('/notes/') && method === 'GET') {
			const id = Number.parseInt(path.split('/')[2]);
			return noteHandlers.getNoteById(id);
		}

		// POST /notes
		if (path === '/notes' && method === 'POST') {
			return noteHandlers.createNote(request);
		}

		// PUT /notes/:id
		if (path.startsWith('/notes/') && method === 'PUT') {
			const id = Number.parseInt(path.split('/')[2]);
			return noteHandlers.updateNote(id, request);
		}

		// DELETE /notes/:id
		if (path.startsWith('/notes/') && method === 'DELETE') {
			const id = Number.parseInt(path.split('/')[2]);
			return noteHandlers.deleteNote(id);
		}

		// Rota não encontrada
		return new Response('Not Found', { status: 404 });
	},
};
