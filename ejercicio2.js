const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
];

// Añade tu código de bucle aquí

let pre2K = [];
let post2K = [];
for (const movie of movies) {
    if (movie.releaseYear < 2000) {
        pre2K.push(movie)
    } else {
        post2K.push(movie)
    }
}
console.log("Peliculas antes de 2000: ")
console.log(pre2K)
console.log("Peliculas despues de 2000: ", post2K)