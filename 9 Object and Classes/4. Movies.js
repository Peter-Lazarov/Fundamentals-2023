function movies(linesAll){

    let moviesAllArray = [];

    linesAll.forEach(line => {
        if (line.startsWith("addMovie")) {
            let movieName = line.replace("addMovie ", "");
            let movie = {
                name:movieName,
                director:"",
                date:""
            }

            moviesAllArray.push(movie);

        }else if(line.includes("directedBy")) {
            let movieAndDirector = line.split(" directedBy ");
            let movieName = movieAndDirector[0];
            let movieDirector = movieAndDirector[1];

            let searchedMovie = moviesAllArray.find(m => m.name == movieName);
            if(searchedMovie){
                searchedMovie.director = movieDirector;
                //moviesAllArray.push(searchedMovie);
            }

        }else if(line.includes("onDate")){
            let movieAndDate = line.split(" onDate ");
            let movieName = movieAndDate[0];
            let movieDate = movieAndDate[1];

            let searchedMovie = moviesAllArray.find(m => m.name == movieName)
            if(searchedMovie){
                searchedMovie.date = movieDate;
            }
        }

        //console.log(Object.values(moviesAllArray));
    });

    //console.table(moviesAllArray);

    for (const element of moviesAllArray) {
        if(element.director != ""){
            console.log(JSON.stringify(element));
        }
    }
}

movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);

movies(['addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']);
