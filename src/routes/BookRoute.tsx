import { Route } from "@tanstack/router";
import { rootRoute } from "./RootRoute";
import Book from "../pages/Book";

export const bookRoute = new Route({
  getParentRoute: (): typeof rootRoute => rootRoute,
  path: '/$bookId',
  component: Book,
});