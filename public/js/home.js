$(document).ready(function() {
  var getUser = {
    id: sessionStorage.id
  };
  var updateUser = {
    userID: sessionStorage.id
  };
  var buttons = $(".job-button");
  console.log(getUser.id);
  console.log(updateUser.UserID);
  $.post("/api/jobs", getUser, function(user) {
    console.log("this is from the html " + user);
    $(".title").html("Welcome " + user.firstName);
  });

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
          "</p> "
      );
      var a = $(
        "<button id='addbtn' class='btn btn-primary'>Add Job :" +
          job[i].task +
          "</button>"
      );
      a.append(job[i].task);
      buttons.append(a);
    }
    $(document).on("click", "#addbtn", function() {
      alert("Job Added!");
    });
    console.log(chore);
    $(".list").append(chore);
  });

  ScrollReveal().reveal(".chore");
});
