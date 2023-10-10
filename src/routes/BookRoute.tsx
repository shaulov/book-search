import { Route } from "@tanstack/router";
import { IndexRoute } from "./IndexRoute";
import Book from "../pages/Book";

export const bookRoute = new Route({
  getParentRoute: (): typeof IndexRoute => IndexRoute,
  path: '$bookId',
  component: Book,
});