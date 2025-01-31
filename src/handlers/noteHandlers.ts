import { noteRepository } from '../repositories/noteRepository';
import type { CreateNoteDto, UpdateNoteDto } from '../dtos/noteDto';

export const noteHandlers = {
	async getAllNotes() {
		const notes = await noteRepository.findAll();
		return new Response(JSON.stringify(notes), {
			headers: { 'Content-Type': 'application/json' },
		});
	},

	async getNoteById(id: number) {
		const note = await noteRepository.findById(id);
		if (!note) {
			return new Response('Not Found', { status: 404 });
		}
		return new Response(JSON.stringify(note), {
			headers: { 'Content-Type': 'application/json' },
		});
	},

	async createNote(request: Request) {
		const body: CreateNoteDto = await request.json();
		const newNote = await noteRepository.create(body);
		return new Response(JSON.stringify(newNote), {
			headers: { 'Content-Type': 'application/json' },
			status: 201,
		});
	},

	async updateNote(id: number, request: Request) {
		const body: UpdateNoteDto = await request.json();
		const updatedNote = await noteRepository.update(id, body);
		return new Response(JSON.stringify(updatedNote), {
			headers: { 'Content-Type': 'application/json' },
		});
	},

	async deleteNote(id: number) {
		await noteRepository.delete(id);
		return new Response(null, { status: 204 });
	},
};
