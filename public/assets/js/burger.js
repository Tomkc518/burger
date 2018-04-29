// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newburger");
      console.log(id);
      console.log(newBurger);
      var eaten = {
        devoured: newBurger
      };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          console.log("changed devoured to", eaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var addBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
      console.log(addBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: addBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  