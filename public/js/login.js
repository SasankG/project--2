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
        email: $("#email")
          .val()
          .trim(),
        password: $("#password").val()
      };
      console.log(userInput);

      $.post("/api/accounts", userInput, function(data) {
        console.log(data);
        if (data !== null) {
          sessionStorage.id = data.id;
          console.log(sessionStorage.id);
          window.location.href = "/home";
        } else {
          $("#result-modal").modal("toggle");
        }
        console.log(data);
      });
    } else {
      alert("Please Fill out the Form!!");
    }
  });
});
