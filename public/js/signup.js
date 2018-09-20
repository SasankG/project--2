$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();

    function checkform() {
      var vaild = true;
      $(".form-control ").each(function() {
        if ($(this).val() === "") {
          vaild = false;
        }
      });
      return vaild;
    }

    if (checkform()) {
      var userInput = {
        firstName: $("#firstName")
          .val()
          .trim(),
        lastName: $("#lastName")
          .val()
          .trim(),
        email: $("#email")
          .val()
          .trim(),
        password: $("#password")
          .val()
          .trim()
      };

      console.log(userInput);

      $.post("/api/signup", userInput, function(data) {
        console.log(data);
        window.location.href = "/";
      });
    } else {
      alert("Please Fill out the Form!!");
    }
  });
});
