//set up Jqueryu
$(function () {

    console.log("jquery is loaded");

    //Add the button handler
    $('#btnLoadMovies').on("click", function () {


        var movies = [
            { title: "Movie 1" },
            { title: "Movie 2" },
            { title: "Movie 3" },
            { title: "Movie 4" },


        ]

        var htmlString = [];
        htmlString.push("<ol>");
        for (var i = 0; i < movies.length; i++) {

            var currentMovie = movies[i];
            htmlString.push("<li>");
            htmlString.push(currentMovie.title);
            htmlString.push("</li>");
        }
        htmlString.push("</ol>");
        var finalHTML = htmlString.join(" ")

        $('#messagePanel').html(finalHTML);

    })



})