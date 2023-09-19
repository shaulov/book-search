import { twMerge } from "tailwind-merge";
import type { FunctionComponent } from "../../../../common/types";
import { Input } from "../../../../components/forms/Input";
import { Select } from "../../../../components/ui/Select";

type SearchFormProps = {
  className?: string;
}

function SearchForm({ className }: SearchFormProps): FunctionComponent {
  return (
    <form className={twMerge(`grid grid-cols-1 md:grid-cols-2 gap-4`, className)} action="#">
      <label className="md:col-span-2 self-center">
        <span className="sr-only">Search books</span>
        <Input className="w-full" type="search" placeholder="Type book name" />
      </label>
      <label className="flex flex-wrap gap-x-3 gap-y-1 items-center">
        <span className="text-white">Categories</span>
        <Select 
          className="grow w-full xl:w-auto"
          options={[{value: 'fairytails', name: 'Сказки'}, {value: 'drama', name: 'Повесть'}]} 
          placeholder="Выберите категорию"
        />
      </label>
      <label className="flex flex-wrap gap-x-3 gap-y-1 items-center">
        <span className="text-white">Sorting by</span>
        <Select 
          className="grow w-full xl:w-auto"
          options={[{value: 'fairytails', name: 'Сказки'}, {value: 'drama', name: 'Повесть'}]} 
          placeholder="Сортировать по:"
        />
      </label>
    </form>
  );
}

export { SearchForm };