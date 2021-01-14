function generateSelect(id, day, items) {

    htmlString = [];

    var options = items.map(x => {

        return `<td><button class='btn btn-danger time' value='${x}'>${x}</button></td>`;

    })


    htmlString.push(options.join(" "))



    return htmlString.join(" ");
}



$(function () {

    $('#movieListingBody').on('change', '.movieTimes', function () {

        var element = $(this).prop('id');
        var currentTimeChosen = $(this).val();
        var currentDayChosen = $(this).data('day');
        console.log('movie time have changed for id: ' + element);
        console.log('movie time is set for : ' + currentTimeChosen);
        console.log('movie day is set for : ' + currentDayChosen);
    })


    //Add the button handler
    $('#btnLoadMovies').on("click", function () {
        $.getJSON('https://college-movies.herokuapp.com/', function (movies) {
            var htmlString = [];
            for (var i = 0; i < movies.length; i++) {

                var currentMovie = movies[i];
				htmlString.push("<tr class='movie-details'>");
				htmlString.push("<td>");
				htmlString.push("<div>");
				
				htmlString.push('<img class="mt-3 movie-img" src="img/'+(i+1)+'.jpg" />');
				htmlString.push("<h4 class='name'>"+currentMovie.title+"</h4>");				
				htmlString.push("</div>");				
				htmlString.push("</td>");
				htmlString.push("</tr>");
					
           

                htmlString.push("<tr class='"+currentMovie.title+"' ><td>Monday</td>");
                htmlString.push("<td class='"+(i+1)+"' >");
                htmlString.push(generateSelect('monTimes', 'monday', currentMovie.runningTimes.mon));
                htmlString.push("</td></tr>");

                htmlString.push("<tr class='"+currentMovie.title+"' ><td>Tuesday</td>");
                htmlString.push("<td class='"+(i+1)+"' >");
                htmlString.push(generateSelect('tueTimes', 'Tuesday', currentMovie.runningTimes.tue));
                htmlString.push("</td></tr>");

                htmlString.push("<tr class='"+currentMovie.title+"' ><td>Wednesday</td>");
                htmlString.push("<td class='"+(i+1)+"' >");
                htmlString.push(generateSelect('wedTimes', 'Wednesday', currentMovie.runningTimes.wed));
                htmlString.push("</td></tr>");

                htmlString.push("<tr class='"+currentMovie.title+"' ><td>Thursday</td>");
                htmlString.push("<td class='"+(i+1)+"' >");
                htmlString.push(generateSelect('thuTimes', 'Thursday', currentMovie.runningTimes.thu));
                htmlString.push("</td></tr>");

                htmlString.push("<tr class='"+currentMovie.title+"' ><td>Friday</td>");
                htmlString.push("<td class='"+(i+1)+"' >");
                htmlString.push(generateSelect('friTimes', 'Friday', currentMovie.runningTimes.fri));
                htmlString.push("</td></tr>");

                htmlString.push("<tr class='"+currentMovie.title+"' ><td>Saturday</td>");
                htmlString.push("<td class='"+(i+1)+"' >");
                htmlString.push(generateSelect('satTimes', 'Saturday', currentMovie.runningTimes.sat));
                htmlString.push("</td></tr>");

                htmlString.push("<tr  class='"+currentMovie.title+" line'   ><td>Sunday</td>");
                htmlString.push("<td class='"+(i+1)+"' >");
                htmlString.push(generateSelect('sunTimes', 'Sunday', currentMovie.runningTimes.sun));
                htmlString.push("</td>");							
				
				
                htmlString.push("</tr>");
                
				
				
            }

            var finalHTML = htmlString.join(" ")

            $('#movieListingBody').append(finalHTML);
			
			$("#loading").hide();

        })

    })

})