import { Route } from "@tanstack/router";
import { rootRoute } from "./RootRoute";
import { bookRoute } from "./BookRoute";
import Home from "../pages/Home";

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: Home,
});

IndexRoute.addChildren([bookRoute]);