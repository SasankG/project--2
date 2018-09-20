$(document).ready(function() {
  var getUser = {
    id: sessionStorage.id
  };

  $.post("/api/jobs", getUser, function(user) {
    console.log("this is from the html " + user);
    $(".title").html("Welcome " + user.firstName);
  });

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
        firstName: $(".fname").val(),
        task: $(".jobtitle").val(),
        description: $(".description").val(),
        price: $(".number").val(),
        address: $(".address").val()
      };

      console.log(userInput);

      $.post("/api/posting/", userInput, function(user) {
        console.log(user);
        $("#result-modal").modal("toggle");
      });
    } else {
      alert("Please Fill out the Form!!");
    }
  });
});
