import { Link } from "@tanstack/router";
import type { FunctionComponent } from "../../../common/types";
import type { TransformedBookData } from "../../../common/state.types";

type CardProps = {
  data: TransformedBookData;
}

function Card({ data }: CardProps): FunctionComponent {
  const { id, title, authors, smallThumbnail, genres } = data;

  return (
    <article className="relative grid grid-cols-1 gap-1 h-full p-4 bg-blue-100 rounded">
      <h3 className="self-end text-neutral-900 font-bold">
        <Link 
          className="
            line-clamp-1
            before:absolute before:inset-0 
            before:block before:w-full before:h-full
          " 
          to="/$bookId"
          params={{ bookId: id }}
        >
          {title}
        </Link>
      </h3>
      <p className="self-end text-neutral-400 line-clamp-1">{authors}</p>
      <ul className="row-start-2 self-end flex gap-1 mb-1">
        {genres.map(genre => (
          <li className="text-neutral-400 underline" key={genre}>{genre}</li>
        ))}
      </ul>
      <img className="row-start-1 justify-self-center h-[200px]" src={smallThumbnail} width={150} height={200} alt="Book cover" />
    </article>
  );
}

export { Card };