import { Route } from "@tanstack/router";
import { rootRoute } from "./RootRoute";
import Home from "../pages/Home";

export const IndexRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/",
	component: Home,
});