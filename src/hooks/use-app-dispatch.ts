import { useDispatch } from "react-redux";
import type { AppDispatch } from "../common/store.types";

export const useAppDispatch: () => AppDispatch = useDispatch;