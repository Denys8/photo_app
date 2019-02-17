import { combineReducers } from "redux";
import Photos from "./photos";
import Favorites from "./favorites";

export default combineReducers({
  Photos,
  Favorites
});
