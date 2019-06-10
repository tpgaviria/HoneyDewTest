console.log('js loaded');

$(document).ready(function () {
  $('.modal').modal();
  
  $('.sidenav').sidenav();
  
  var mySwiper = new Swiper('.swiper-container');

  $('.liked').dblclick(function () {

    var food_id = $(this).attr('value');

    $.ajax({
      method: "PUT",
      url: "/api/foods/undo/" + food_id
    }).then(function (data) {
      console.log('unliked');
    })
  
    $(this).toggleClass('liked');
  })
  
  $('.swiper-slide').dblclick(function () {
    var food_id = $(this).attr('value');
    console.log(food_id);
    $.ajax({
      method: "PUT",
      url: "/api/foods/liked/" + food_id
    }).then(function (data) {
      console.log('liked');
    })

    $(this).toggleClass('liked');    
  });


  
  
});
