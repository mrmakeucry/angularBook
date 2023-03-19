export interface Book {
    isbn: string;
    title: string;
    authors: string[];
    published?: string;
    subtitle?: string;
    thumbnailURL?: string;
    description?: string;
}
