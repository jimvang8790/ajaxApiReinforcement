// getting document ready when page is loaded
$(document).ready(docReady);

function docReady() {
  console.log('doc is Ready'); // testing to see if document will load

  $.ajax({
      url: 'http://www.omdbapi.com/?t=the+dark+knight', // requesting data from OMDb on the movie
      // adding anything as a parameter (response)
      // when the OMDb response back, then run the success function
      success: function(response) {
        // logging the object from OMDb when response is called
        console.log('this is the response from OMDb', response);

        // logging to see a more specific object is requested
        console.log('this is the movie title', response.Title);

        // will append the movie title requested to the DOM b/c id(movies) is the div *NOTE must capitalize Title b/c OMPb has it capitalize!!!
        var $newDiv = $('<div class="title"></div>'); // to append vertically to the DOM
        $newDiv.append(response.Title); // to append vertically to the DOM
        $('#movies').append($newDiv);

      } // end of the success function(response)
  }); // end of the first $.ajax

  // beginning of second $.ajax b/c only one response per ajax
  $.ajax({
      url: 'http://www.omdbapi.com/?t=the+dark+knight',
      success: function(responseSec) {
        console.log('this is the movie poster img link', responseSec.Poster);
        // adding an img element to append to the div and giving it a source that will request the poster URL from OMDb sever
        var $newDiv = $('<div></div>'); // to append vertically to the DOM
        $newDiv.append('<img src="'+ responseSec.Poster +'">'); //creating a img tag and sorcing from OMDb server but concatating it
        $('#movies').append($newDiv);
      } // end of the success function(responseSec)
  }); // end of the second $.ajax


  $.ajax({
    url: 'http://www.omdbapi.com/?t=the+dark+knight',
    success: function(responseThird) {
      console.log('this is the movie relase date', responseThird.Plot);
      var $newDiv = $('<div></div>'); // to append vertically to the DOM
      $newDiv.append(responseThird.Plot);
      $('#movies').append($newDiv);
    } // end of success function(responseThird)
  }); // end of third $.ajax

  $.ajax({
    url: 'http://www.omdbapi.com/?t=the+dark+knight',
    success: function(responseForth) {
      console.log('this is the writer of the movie', responseForth.Writer);
      var $newDiv = $('<div></div>'); // to append vertically to the DOM
      $newDiv.append(responseForth.Writer);
      $('#movies').append($newDiv);
    } // end of success function(responseForth)
  }); // end of forth $.ajax

  $.ajax({
    url: 'http://www.omdbapi.com/?t=the+dark+knight',
    success: function(responseFifth) {
      console.log('these are the actors in the movie', responseFifth.Actors);
      var $newDiv = $('<div></div>'); // to append vertically to the DOM
      $newDiv.append(responseFifth.Actors);
      $('#movies').append($newDiv);
    } // end of success function(responseForth)
  }); // end of forth $.ajax

} // end of the docReady function

console.log('testing git hub');
