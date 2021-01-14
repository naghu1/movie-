function generateSelect(id, day, items) {

    htmlString = [];
    

    var options = items.map(x => {

        return `<button class='btn btn-success btn-sm time' value='${x}'>${x}</button>`;

    })


    htmlString.push(options.join(" "))
    


    return htmlString.join(" ");
}



$(function () {

    $('#movieListingBody').on('change', '.movieTimes', function() {

        var element = $(this).prop('id');
        var currentTimeChosen = $(this).val();
        var currentDayChosen = $(this).data('day');
        console.log('movie time have changed for id: ' + element);
        console.log('movie time is set for : ' + currentTimeChosen);
        console.log('movie day is set for : ' + currentDayChosen);
    })

    $(document).ready(function(){
         
     });


    //Add the button handler
    $('#btnLoadMovies').on("click", function () {
        $.getJSON('https://college-movies.herokuapp.com/', function (movies) {
            var htmlString = [];
			 
			$("#loading").hide();
            for (var i = 0; i < movies.length; i++) {

                var currentMovie = movies[i];
                htmlString.push("<tr>");
                htmlString.push("<td class='text-center' >");
                htmlString.push("<img class='thumbnail' src='img/"+(i+1)+".jpg'>");
                htmlString.push("<b>");
                htmlString.push(currentMovie.title);
                htmlString.push("</b></td>");

                var monday = currentMovie.runningTimes.mon;
                var mondayTxt = [];
               

                htmlString.push("</td>")
                htmlString.push("<td>");
                htmlString.push(generateSelect('Monday', 'Monday', currentMovie.runningTimes.mon));
                htmlString.push("</td>");
                htmlString.push("<td>");
                htmlString.push(generateSelect('Tuesday', 'Tuesday', currentMovie.runningTimes.tue));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('wedTimes', 'Wednesday', currentMovie.runningTimes.wed));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('thuTimes', 'Thursday', currentMovie.runningTimes.thu));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('friTimes', 'Friday', currentMovie.runningTimes.fri));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('satTimes', 'Saturday', currentMovie.runningTimes.sat));
                htmlString.push("</td>");

                htmlString.push("<td>");
                htmlString.push(generateSelect('sunTimes', 'Sunday', currentMovie.runningTimes.sun));
                htmlString.push("</td>");


                htmlString.push("</tr>");
            }

            var finalHTML = htmlString.join(" ")

            $('#movieListingBody').append(finalHTML);

        })

    })

})