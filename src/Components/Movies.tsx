import { useState } from "react";
import "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

const Movies = () => {
  const movieRef = useFirestore().collection("movies");
  const movieQuery = movieRef.orderBy("title");
  const { status, data } = useFirestoreCollectionData(movieQuery);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieGenre, setMovieGenre] = useState("");

  const handleTitle = (e: any) => {
    setMovieTitle(e.target.value);
  };

  const handleGenre = (e: any) => {
    setMovieGenre(e.target.value);
  };

  const deleteMovie = async (id: string) => {
    await movieRef.doc(id).delete();
  };

  const addMovie = (e: any) => {
    e.preventDefault();
    movieRef.add({ title: movieTitle, genre: movieGenre });
    setMovieTitle("");
    setMovieGenre("");
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((movie) => {
        return (
          <div>
            <p key={movie.NO_ID_FIELD as string}>{movie.title as string}</p>
            {movie.id as string}
            <button
              key={movie.title as string}
              onClick={() => deleteMovie(movie.NO_ID_FIELD as string)}
            >
              Watched!
            </button>
          </div>
        );
      })}

      <form onSubmit={addMovie}>
        <input
          required
          type="text"
          onChange={(e) => handleTitle(e)}
          value={movieTitle}
          placeholder="Enter Movie Title"
        />
        <input
          required
          type="text"
          onChange={(e) => handleGenre(e)}
          value={movieGenre}
          placeholder="Enter Genre"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Movies;