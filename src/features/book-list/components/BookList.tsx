import type { FunctionComponent } from "../../../common/types";
import { Card } from "../../../components/ui/Card";
import type { TransformedBookData } from "../../../common/state.types";

type BookListProps = {
  data: Array<TransformedBookData>;
}

function BookList({ data }: BookListProps): FunctionComponent {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {data.map(item => (
        <li key={item.id}>
          <Card data={item} />
        </li>
      ))}
    </ul>
  );
}

export { BookList }