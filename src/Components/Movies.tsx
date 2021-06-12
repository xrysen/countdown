import "firebase/firestore";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

const Movies = () => {

  return (
    <div>
      <MovieList />
      <MovieForm />
    </div>
  );
};

export default Movies;