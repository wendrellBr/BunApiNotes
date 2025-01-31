import { PrismaClient } from '@prisma/client';
import type { CreateNoteDto, UpdateNoteDto } from '../dtos/noteDto';

const prisma = new PrismaClient();

export const noteRepository = {
	async findAll() {
		return prisma.note.findMany();
	},

	async findById(id: number) {
		return prisma.note.findUnique({ where: { id } });
	},

	async create(data: CreateNoteDto) {
		return prisma.note.create({ data });
	},

	async update(id: number, data: UpdateNoteDto) {
		return prisma.note.update({ where: { id }, data });
	},

	async delete(id: number) {
		return prisma.note.delete({ where: { id } });
	},
};
