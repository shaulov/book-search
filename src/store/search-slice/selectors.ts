import type { RootState } from "../../common/store.types";
import { NameSpace } from "../../common/const";
import type { searchParameters } from "../../common/types";

export const getSearch = (state: RootState): searchParameters => state[NameSpace.Search];