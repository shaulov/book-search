import type { Book, TransformedBookData } from "./state.types";

export function transformBookData(data: Book): TransformedBookData {
  const { volumeInfo, etag } = data;
  return {
    id: etag,
    title: volumeInfo?.title || 'No title',
    authors: volumeInfo?.authors ? volumeInfo.authors?.join(', ') : 'Unknown authors',
    subtitle: volumeInfo?.subtitle || 'No subtitle',
    description: volumeInfo?.description || 'No description',
    pageCount: volumeInfo?.pageCount ? String(volumeInfo.pageCount) : 'N/A',
    thumbnail: volumeInfo?.imageLinks?.thumbnail || 'vite-react-boilerplate.png',
    smallThumbnail: volumeInfo?.imageLinks?.smallThumbnail || 'vite-react-boilerplate.png',
    genres: volumeInfo?.categories || [],
  };
}

export function transformBooksData(data: Array<Book>): Array<TransformedBookData> {
  return data.map(item => transformBookData(item));
}