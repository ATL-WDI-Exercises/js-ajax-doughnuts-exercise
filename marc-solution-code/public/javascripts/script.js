console.log("it works");

$(function(){

	var url = 'https://api.doughnuts.ga/doughnuts/';

  function getDoughnuts(){
    var ajax = $.get(url, function(doughnuts){
      $.each(doughnuts, function(i, doughnut){
        updateList(doughnut);
      });  
    });
  };

  function createDoughnut(event){
    var newDoughnut = {
      "flavor": $('#doughnut-flavor').val(),
      "style": $('#doughnut-style').val(),
    };

    $.post(url, newDoughnut, function(){
      console.log(newDoughnut);
      updateList(newDoughnut);
    });

    event.preventDefault();
  };

  function updateList(doughnut){
    $('#doughnuts').append("<li>" + doughnut.flavor + " - <em>" + doughnut.style + "</em></li>");
  }

  $('form').submit(function(event){
    createDoughnut(event);
  });

  getDoughnuts();    

});