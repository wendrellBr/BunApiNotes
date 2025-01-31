export interface CreateNoteDto {
	title: string;
	content: string;
}

export interface UpdateNoteDto {
	title?: string;
	content?: string;
}
