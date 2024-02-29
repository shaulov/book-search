import { Route } from "@tanstack/router";
import { rootRoute } from "./RootRoute";
import Home from "../pages/Home";
import type { searchParameters } from "../common/types";

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: Home,
	validateSearch: (search: searchParameters): searchParameters => {
    return {
			term: (search.term as string) || '',
			subject: (search.subject as string) || '',
			orderBy: (search.orderBy as string) || 'relevance',
			startIndex: (search.startIndex as string) || '0',
		}
  },
});