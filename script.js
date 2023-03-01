const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели","число");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const   task1 = prompt('Один из просмотренных  фильмов',''),
        task2 = prompt('На сколько его оцените',''),
        task3 = +prompt('Один из просмотренных  фильмов',''),
        task4 = +prompt('На сколько его оцените','');

personalMovieDB.movies[task1] = task2;
personalMovieDB.movies[task3] = task4;



        // console.log(numberOfFilms[+'count']);
