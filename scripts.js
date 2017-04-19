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
        $('#movies').append(response.Title);

      } // end of the success function(response)
  }); // end of the first $.ajax

  // beginning of second $.ajax b/c only one response per ajax
  $.ajax({
      url: 'http://www.omdbapi.com/?t=the+dark+knight',
      success: function(responseSec) {
        console.log('this is the  second response from OMDb', responseSec);
        console.log('this is the movie poster img link', responseSec.Poster);
        // adding an img element to append to the div and giving it a source that will request the poster URL from OMDb sever
        $('#movies').append( '<img src="'+ responseSec.Poster +'">');
      } // end of the success function(responseSec)
  }); // end of the second $.ajax

} // end of the docReady function

// $('#moveies').append('<img src="">');
