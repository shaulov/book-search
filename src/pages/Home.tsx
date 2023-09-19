import type { FunctionComponent } from "../common/types";
import { Search } from "../features/search";

const Home = (): FunctionComponent => {
	return (
		<div>
			<header className="w-full"><Search /></header>
		</div>
	);
};

export default Home;
