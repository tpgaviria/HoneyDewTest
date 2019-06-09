console.log('js loaded');

$(document).ready(function () {
  $('.modal').modal();

  $('.sidenav').sidenav();

  var mySwiper = new Swiper('.swiper-container');

  if ($('.swiper-slide').attr('liked', 'false')) {
    $('.swiper-slide').dblclick(function () {
      event.preventDefault();
      var food_id = $(this).attr('value');
      console.log(food_id);
      console.log($(this).attr('liked'));
      $.ajax({
        method: "PUT",
        url: "/api/foods/liked/" + food_id
      }).then(function (data) {
        console.log('liked');
      })
    })
  };

  if ($('.swiper-slide').attr('liked', 'true')) {
    $('.swiper-slide').dblclick(function () {
      $(this).attr('liked', 'false');
      var food_id = $(this).attr('value');
      $.ajax({
        method: "PUT",
        url: "/api/foods/undo/" + food_id
      }).then(function (data) {
        console.log('unliked');
      })
    })
  }

});