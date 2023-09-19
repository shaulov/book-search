import type { FunctionComponent } from "../../../../common/types";
import { SearchForm } from "../SearchForm/SearchForm";

function Search(): FunctionComponent {
  return (
    <section className="w-full px-10 py-8 bg-gradient-to-r from-sky-900 to-indigo-900">
      <h1 className="mb-6 text-3xl text-white text-center">Search for books</h1>
      <SearchForm className="w-[90%] md:w-[50%] mx-auto" />
    </section>
  );
}

export { Search };