import {Card, CardMedia, Grid} from "@mui/material";
import "../css/bookList.scss";

const booksList = [
    {
        portraitImage: "arrival.jpg",
        name: "Arrival"
    },
    {
        portraitImage: "dune.jpg",
        name: "Dune"
    },
    {
        portraitImage: "eot.jpg",
        name: "Edge Of Tomorrow"
    },
    {
        portraitImage: "ff7.jpg",
        name: "Fast And Furious 7"
    },
    {
        portraitImage: "inception.jpg",
        name: "Inception"
    },
    {
        portraitImage: "free-guy.jpg",
        name: "Free guy"
    },
    {
        portraitImage: "interstellar.jpg",
        name: "Interstellar"
    },
    {
        portraitImage: "pk.jpg",
        name: "PK"
    },
    {
        portraitImage: "dune.jpg",
        name: "Dune"
    },
    {
        portraitImage: "eot.jpg",
        name: "Edge Of Tomorrow"
    },
    {
        portraitImage: "ff7.jpg",
        name: "Fast And Furious 7"
    },
    {
        portraitImage: "inception.jpg",
        name: "Inception"
    },
    {
        portraitImage: "arrival.jpg",
        name: "Arrival"
    },
    {
        portraitImage: "free-guy.jpg",
        name: "Free guy"
    },
    {
        portraitImage: "pk.jpg",
        name: "PK"
    },

    {
        portraitImage: "endgame.jpg",
        name: "Avengers: Endgame"
    },
    {
        portraitImage: "matrix.jpg",
        name: "Matrix"
    },
    {
        portraitImage: "ironman.png",
        name: "Iron Man"
    },
    {
        portraitImage: "arrival.jpg",
        name: "Arrival"
    },
    {
        portraitImage: "free-guy.jpg",
        name: "Free guy"
    },
    {
        portraitImage: "interstellar.jpg",
        name: "Interstellar"
    },
];

export default function BooksList() {

    return (
        <div className="book-list-main-div">
            <Grid container spacing={5} justifyContent="center">
                {booksList.map((book, index) => {
                    return (
                        <Grid item key={index} className={"book-grid"}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={"/assets/moviePosters/" + book.portraitImage}
                                    alt={book.name}
                                    className={"card-image"}
                                />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}