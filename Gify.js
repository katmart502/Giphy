 // Initial array of strings that will be assigned to buttons
          var topic = [   
     "moonwalk", "The Jacksons", "Jackson Five ", "King of Pop", "Jackson Family", "Thriller",
    "Bad", "The Wiz", "Off The Wall", "Motown 25", "This is It",
    "Smooth criminal", "Remember The Time", "", "", "",
    "moonwalker", "Jackson brothers", "Dancing Machine", "I want you back", "ABC"
];

  // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }
  }
  $(document).on("click", ".animal-button", function() {
    $("#animals").empty();
    $(".animal-button").removeClass("active");
    $(this).addClass("active");
    var type = $(this).attr("data-type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
  
.done(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div class=\"Jackson-item\">");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var animated = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;
        var animalImage = $("<img>");
        MichaelJacksonImage.attr("src", still);
        MichaelJacksonImage.attr("data-still", still);
        MichaelJacksonImage.attr("data-animate", animated);
        MichaelJacksonImage.attr("data-state", "still");
        MichaelJacksonImage.addClass("Jackson-image");
        MichaelJacksonDiv.append(p);
        MichaelJacksonDiv.append(animalImage);
        $("#Jackson").append(Micahel JacksonDiv);
      }
    });
  });
  $(document).on("click", ".Jackson-image", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  $("#add-Jackson").on("click", function(event) {
    event.preventDefault();
    var newMichaelJackson = $("input").eq(0).val();
    if (newMichaelJackson.length > 2) {
      Jacksons.push(newMichaelJackson);
    }
    populateButtons(Jacksons, "Jackson-button", "#Jackson-buttons");
  });
  populateButtons(animals, "Jackson-button", "#Jackson-buttons");
});

    

    