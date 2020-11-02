//Root reducer
import { combineReducers } from "redux";
import listMovieReducer from "../../containers/HomeTemplate/ListMoviePage/module/reducer";
import detailPageReducer from "../../containers/HomeTemplate/DetailPage/module/reducer";
import authReducer from "../../containers/AdminTemplate/AuthPage/module/reducer";

const rootReducer = combineReducers({
  // reducer con
  listMovieReducer,
  detailPageReducer,
  authReducer,
});

export default rootReducer;
