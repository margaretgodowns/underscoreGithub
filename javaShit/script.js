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
    initEvents: function(event){
      $("#repoTab").click(function(event){
        event.preventDefault();
        $(".publicActs").addClass("hide");
        $(".repos").removeClass("hide");
        $(this).addClass("show");
        $(this).siblings().removeClass("show");

      });
      $("#paTab").click(function(event){
        event.preventDefault();
        $(".publicActs").removeClass("hide");
        $(".repos").addClass("hide");
        $(this).siblings().removeClass("show");
        $(this).addClass("show");
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
      gitProfile.render($("#activityTmplt").html(), dataActivity, $target);
    },

  };

  gitProfile.init();


















});
