$(document).ready(function(){


  var myGitHubAddress = "https://api.github.com/users/vaughant2210";

  var githubUrl = myGitHubAddress + "?access_token=" + window.token;




  $.ajax({
    url: githubUrl
    
  });





















});
