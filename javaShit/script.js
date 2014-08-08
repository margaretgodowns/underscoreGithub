$(document).ready(function(){
  var gitProfile = {

    init: function(){
      gitProfile.initStyling();
      gitProfile.initEvents();
    },
    initStyling: function(){
      gitProfile.renderProfile($("aside"));
      gitProfile.renderRepo($(".repos"));
      gitProfile.renderActivity($(".publicActs"));
    },
    initEvents: function(){
      $(".reposNav").click(function(event){
        event.preventDefault();
      });
      $(".publicActsNav").click(function(event){
        event.preventDefault();
      });
    },
    render: function(template, data, $target){
      var tmplt = _.template(template, data);
      $target.append(tmplt);
    },
    renderProfile: function($target){
      gitProfile.render($("#profileTmplt").html(), dataProfile, $target);
    },
    renderRepo: function($target){
      gitProfile.render($("#repoTmplt").html(), dataRepo, $target);
    },
    renderActivity: function($target){
      gitProfile.render($("#activityTmple").html(), dataActivity, $target);
    },

  };

  gitProfile.init();


















});
