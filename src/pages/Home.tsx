import type { FunctionComponent } from "../common/types";
import { Search } from "../features/search";
import { Books } from "../features/book-list";

const Home = (): FunctionComponent => {
	return (
		<>
			<header className="w-full">
				<Search />
			</header>
			<main>
				<Books />
			</main>
		</>
	);
};

export default Home;
