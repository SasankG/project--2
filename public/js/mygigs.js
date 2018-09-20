$(document).ready(function() {
  var getUser = {
    id: sessionStorage.id
  };

  $.post("/api/jobs", getUser, function(user) {
    console.log("this is from the html " + user);
    $(".title").html("Welcome " + user.firstName);
  });
  // var jobs = JSON.parse(localStorage.getItem("Jobs"));
  // $(".myList").html((jobs));

  $.get("/api/posting/", function(job) {
    var chore = $("<div class='chore post-color'></div>");
    for (var i = 0; i < job.length; i++) {
      console.log(job);
      $(chore).append(
        "<p id='posting'>Posted by:  " +
          job[i].firstName +
          "<br>" +
          "Job Title:  " +
          job[i].task +
          " Payment:  " +
          job[i].price +
          " Location:  " +
          job[i].address +
          "<br> <br> </p> "
      );
    }
    console.log(chore);
    $(".list").append(chore);
  });
});
