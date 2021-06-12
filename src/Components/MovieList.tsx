import "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const MovieList = () => {
  const movieRef = useFirestore().collection("movies");
  const movieQuery = movieRef.orderBy("title");
  const { status, data } = useFirestoreCollectionData(movieQuery);

  const deleteMovie = async (id: string) => {
    await movieRef.doc(id).delete();
  };

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  return (
    <TableContainer component={Paper} className="movie-table">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Movie Title</TableCell>
            <TableCell>Movie Genre</TableCell>
            <TableCell>Remove?</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((movie) => {
            return (
              <TableRow key={movie.title as string}>
                <TableCell component="th" scope="row">
                  {movie.title as string}
                </TableCell>
                <TableCell>{movie.genre as string}</TableCell>
                <TableCell>
                  <DeleteForeverIcon
                    className="deleteIcon"
                    onClick={() => deleteMovie(movie.NO_ID_FIELD as string)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieList;
