//Root reducer
import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/module/reducer";
import detailPageReducer from "../../containers/HomeTemplate/DetailPage/module/reducer";

const rootReducer = combineReducers({
  // reducer con
  listMovieReducer,
  detailPageReducer,
});

export default rootReducer;
