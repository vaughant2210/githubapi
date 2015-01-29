(function(){
  'use strict';




  var githubUrl = "https://api.github.com/users/vaughant2210";



$(document).ready(function(){
  if(typeof window.token !== 'undefined'){
    $.ajaxSetup({
      headers: { 'Authorization': 'token ' + window.token }
    });
  }


  var $list = $('.mainContainer');


//function one

function output(r){
  console.log(r);

  var sidebarUpdate = renderTemplate('sidebar', {
    image: r.avatar_url,
    name: r.name,
    username: r.login,
    joined: moment(r.created_at).fromNow(),
  });

  $list.append(sidebarUpdate);      //append to the HTML the rendered info
}

//function two
var repoTemplate = _.template($('[data-template-name=repo]').text())
var $repositoriesUl = $('.repositories');


$.ajax(githubUrl + "/repos").done(function(repos){
    console.log(repos);
  _.each(repos, function(repo) {
    // var a={
    //   name: repo.name,
    //   html: repo.html_url,
    //   pushed_at: moment(repo.pushed_at).fromNow(),
    //   language: repo.language,
    //   stargazers_count: repo.stargazers_count,
    //   forks_count: repo.forks_count,
    //   stargazers_url: repo.stargazers_url,
    //   forks_url: repo.forks_url
    // };


    $repositoriesUl.append(repoTemplate(repo));
  });
});



//ajax calls

  $.ajax({
    url: githubUrl
  }).done(function(data){
    output(data);
    });



  // $.ajax({
  //   url: githubUrl + "/repos"
  // }).done(function(repos){
  //   console.log(repos);
  //
  // });





//Template

  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }



});
})();
