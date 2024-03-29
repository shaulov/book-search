import { useParams } from "@tanstack/router";
import type { FunctionComponent } from "../../../common/types";
import { useAppSelector } from "../../../hooks/use-app-selector";
import { getBooks } from "../../../store/books-slice/selectors";

function BookFullCard(): FunctionComponent {
	const { bookId } = useParams();
	const books = useAppSelector(getBooks);
	const currentBook = books.find((item) => item.id === bookId);

	return (
		<section className="grid grid-cols-2 gap-4 max-w-[1200px] m-auto px-10 pt-4 pb-12">
			<button
				className="justify-self-start p-1 underline"
				onClick={(): void => { window.history.back(); }}
			>
				&#8592; Go back
			</button>
			<h1 className="col-span-2 align mb-2 text-3xl">{currentBook?.title}</h1>
			<div className="col-span-2 md:col-span-1 flex justify-center items-center p-2 bg-sky-50 rounded">
				<img
					className="self-start sticky top-2 w-100 h-auto shadow-2xl"
					src={currentBook?.thumbnail}
					width={300}
					height={400}
					alt="Book cover"
				/>
			</div>
			<dl className="col-span-2 md:col-span-1 flex flex-col justify-start gap-2 p-2 bg-sky-50 rounded">
				<dt className="font-bold">Subtitle:</dt>
				<dd>{currentBook?.subtitle}</dd>
				<dt className="mt-2 font-bold">Authors:</dt>
				<dd>{currentBook?.authors}</dd>
				<dt className="mt-2 font-bold">Page count:</dt>
				<dd>{currentBook?.pageCount} pages</dd>
				<dt className="mt-2 font-bold">Description:</dt>
				<dd className="grow p-2 bg-blue-100 rounded">
					{currentBook?.description}
				</dd>
			</dl>
		</section>
	);
}

export { BookFullCard };
