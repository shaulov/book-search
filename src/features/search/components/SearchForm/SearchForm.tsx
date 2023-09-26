import { useState, type FormEvent, type ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";
import { useAppDispatch } from "../../../../hooks/use-app-dispatch";
import { fetchBooksBySearchAction } from "../../../../store/api-actions";
import { setSearch } from "../../../../store/search-slice";
import type { FunctionComponent, searchParameters } from "../../../../common/types";
import { Input } from "../../../../components/forms/Input";
import { Select } from "../../../../components/ui/Select";
import { SortingOptions, FilterOptions, MaxResult } from "../../../../common/const";

type SearchFormProps = {
  className?: string;
}

type FormSubmitEvent = FormEvent<HTMLFormElement>;
type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

function SearchForm({ className }: SearchFormProps): FunctionComponent {
  const [parameters, setParameters] = useState<searchParameters>({
    term: '',
    subject: 'all',
    orderBy: 'relevance',
    startIndex: '0',
  });
  const dispatch = useAppDispatch();

  const handleChange = (event_: FormChangeEvent): void => {
    const name = event_.target.name;
    const value = event_.target.value;

    setParameters({
      ...parameters,
      [name]: value,
    });
  }

  const handleSubmit = (event_: FormSubmitEvent): void => {
    event_.preventDefault();
    
    const parameters_ = {
      ...parameters,
      maxResults: String(MaxResult),
    }
    dispatch(setSearch(parameters_));
    void dispatch(fetchBooksBySearchAction(parameters_));
  }

  return (
    <form 
      className={twMerge(`grid grid-cols-1 md:grid-cols-2 gap-4`, className)} 
      action="#"
      onSubmit={handleSubmit}
    >
      <label className="md:col-span-2 self-center">
        <span className="sr-only">Search books</span>
        <Input 
          className="w-full" 
          type="search" 
          name="term"
          placeholder="Type book name" 
          value={parameters.term}
          onChange={handleChange}
          required
        />
      </label>
      <label className="flex flex-wrap gap-x-3 gap-y-1 items-center">
        <span className="text-white">Categories</span>
        <Select 
          className="grow w-full xl:w-auto"
          options={FilterOptions}
          name="subject"
          value={parameters.subject}
          onChange={handleChange}
        />
      </label>
      <label className="flex flex-wrap gap-x-3 gap-y-1 items-center">
        <span className="text-white">Sorting by</span>
        <Select 
          className="grow w-full xl:w-auto"
          options={SortingOptions}
          name="orderBy"
          value={parameters.orderBy}
          onChange={handleChange}
        />
      </label>
      <button className="md:col-span-2 w-full mt-2 p-1 text-center bg-gradient-to-r from-red-100 to-stone-200 rounded">
        Поиск
      </button>
    </form>
  );
}

export { SearchForm };