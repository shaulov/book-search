type BookPrice = {
  amount: number;
  currencyCode: string;
}

type BookOffersPrice = {
  amountInMicros: number;
  currencyCode: string;
}

type BookSaleInfo = {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice: BookPrice;
  retailPrice: BookPrice;
  buyLink: string;
  offers: Array<{
    finskyOfferType: number;
    listPrice: BookOffersPrice;
    retailPrice: BookOffersPrice;
  }>;
};

type BookAccessInfo = {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: {
    isAvailable: boolean;
  },
  pdf: {
    isAvailable: boolean;
    acsTokenLink: string;
  },
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

type BookSearchInfo = {
  textSnippet: string;
}

export type BookVolumeInfo = {
  title: string;
  subtitle: string;
  authors: Array<string>;
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: Array<{
    type: string;
    identifier: string;
  }>;
  readingModes: {
    text: boolean;
    image: boolean;
  },
  pageCount: number;
  printType: string;
  categories: Array<string>;
  maturityRating: string;
  allowAnonLogging: boolean,
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean,
    containsImageBubbles: boolean
  },
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  },
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export type Book = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: BookVolumeInfo;
  saleInfo: BookSaleInfo;
  accessInfo: BookAccessInfo;
  searchInfo: BookSearchInfo;
}

export type Books = {
  kind: string;
  items: Array<Book>;
  totalItems: number;
}

export type TransformedBookData = {
  title: string;
  fullTitle: string;
  authors: string;
  subtitle: string;
  description: string;
  pageCount: string;
  thumbnail: string;
  smallThumbnail: string;
  genres: Array<string>;
}

export type BooksData = {
  books: Array<TransformedBookData>;
  totalBooks: number;
  isBooksLoading: boolean;
}