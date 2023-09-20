import type { FunctionComponent } from "../../../common/types";

type CardProps = {
  name: string;
  author: string;
  img: string;
  genres: Array<string>;
}

function Card({ name, author, img, genres }: CardProps): FunctionComponent {
  return (
    <article className="relative grid grid-cols-1 gap-1 p-4 bg-blue-100 rounded">
      <h3 className="text-neutral-900 font-bold">
        <a 
          className="
            before:absolute before:inset-0 
            before:block before:w-full before:h-full
          " 
          href="#"
        >
          {name}
        </a>
      </h3>
      <p className="text-neutral-400">{author}</p>
      <ul className="row-start-2 flex gap-1 mb-1">
        {genres.map(genre => (
          <li className="text-neutral-400 underline" key={genre}>{genre}</li>
        ))}
      </ul>
      <img className="row-start-1" src={img} width={150} height={200} alt="Book cover" />
    </article>
  );
}

export { Card };