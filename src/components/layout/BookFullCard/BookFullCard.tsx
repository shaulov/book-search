import { useParams } from "@tanstack/router";
import type { FunctionComponent } from "../../../common/types";
import { useAppSelector } from "../../../hooks/use-app-selector";
import { getBooks } from "../../../store/books-slice/selectors";

function BookFullCard(): FunctionComponent {
  const { bookId } = useParams();
  const books = useAppSelector(getBooks);
  const currentBook = books.find(item => item.id === bookId);

  return (
    <section className="flex flex-col md:flex-row flex-wrap gap-2 max-w-[1200px] m-auto px-10 pt-4 pb-12">
      <h1 className="basis-full order-first">{currentBook?.fullTitle}</h1>
      <p className="shrink">{currentBook?.subtitle}</p>
      <p className="shrink">{currentBook?.fullAuthors}</p>
      <p className="shrink">Page count: {currentBook?.pageCount}</p>
      <p className="shrink">{currentBook?.description}</p>
      <img className="order-first h-max" src={currentBook?.thumbnail} width={300} height={400} alt="Book cover" />
    </section>
  );
}

export { BookFullCard };