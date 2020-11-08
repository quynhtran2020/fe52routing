import React, { useEffect } from "react";
import Movie from "../../../components/Movie";
import Loader from "../../../components/Loader";
import { actListMovieApi } from "../ListMoviePage/module/action";
import { connect } from "react-redux";

function HomePage(props) {
  useEffect(() => {
    props.listMovieApi();
  }, []);

  const renderListMovie = () => {
    const { listMovie, loading } = props;
    if (loading) return <Loader />;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie, index) => {
        return <Movie key={index} movie={movie} />;
      });
    }
  };

  return (
    <div className="container">
      <h1>HomePage</h1>
      <div className="row">{renderListMovie()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    listMovie: state.listMovieReducer.data,
    err: state.listMovieReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actListMovieApi());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
