import type { Book, TransformedBookData } from "./state.types";
import { TitleSizeRestriction } from "./const";

export function transformBookData(data: Book): TransformedBookData {
  const { volumeInfo, etag } = data;
  return {
    id: etag,
    title: volumeInfo?.title ? `${volumeInfo.title.slice(0, TitleSizeRestriction)}...` : 'No title',
    fullTitle: volumeInfo?.title || 'No title',
    authors: volumeInfo?.authors ? `${volumeInfo.authors?.join(', ')?.slice(0, TitleSizeRestriction)}...` : 'Unknown authors',
    subtitle: volumeInfo?.subtitle || 'No subtitle',
    description: volumeInfo?.description || 'No description',
    pageCount: volumeInfo?.pageCount ? String(volumeInfo.pageCount) : 'N/A',
    thumbnail: volumeInfo?.imageLinks?.thumbnail || 'public/vite-react-boilerplate.png',
    smallThumbnail: volumeInfo?.imageLinks?.smallThumbnail || 'public/vite-react-boilerplate.png',
    genres: volumeInfo?.categories || [],
  };
}

export function transformBooksData(data: Array<Book>): Array<TransformedBookData> {
  return data.map(item => transformBookData(item));
}