import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../common/store.types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;