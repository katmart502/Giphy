 // Initial array of strings that will be assigned to buttons
    var Michael Jackson = $(this).attr ("data-MichaelJackson");

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topic+ "&api_key=dc6zaTOxFJmzC&limit=10";
      
  // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);
          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {
            // Creating and storing a div tag
            var MichaelJacksonDiv = $("<div>");
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);
            // Creating and storing an image tag
            var MichaelJacksonimage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            MichaelJacksonImage.attr("src", results[i].images.fixed_height.url);
            // Appending the paragraph and image tag to the animalDiv
            MichaelJacksonDiv.append(p);
            MichaelJacksonDiv.append(MichaelJacksonImage);
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-display-here").prepend(MichaelJacksonDiv);
          }
        });
    };

// Function for displaying data
      function renderButtons() {
        // Deleting the buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#Jackson-view").empty();
        // Looping through the array of movies
        for (var i = 0; i < topic.length; i++) {
          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("Jackson");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", topic[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(topic[i]);
          // Adding the button to the HTML
          $("#Jackson-view").append(a);
        }
      }
      // This function handles events where one button is clicked
      $("#add-Jackson").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        // This line will grab the text from the input box
        var topic = $("#Jackson-input").val().trim();
        // The movie from the textbox is then added to our array
        topic.push(movie);
        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();

      };