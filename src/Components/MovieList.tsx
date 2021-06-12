import "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import Container from "@material-ui/core/Container";

const MovieList = (props: any) => {
  const movieRef = useFirestore().collection("movies");
  const movieQuery = movieRef.orderBy("title");
  const { status, data } = useFirestoreCollectionData(movieQuery);

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  return (
    <div>
      {data.map((movie) => {
        return (
          <Container key = {movie.title as string}>
            {movie.title as string}
          </Container>
        );
      })}
    </div>
  );
};

export default MovieList;