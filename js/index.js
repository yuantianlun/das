var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));


setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {

    $(".zx_pop").css("display","block");
  });
});


    $(".close").on('click', function() {
      $(".zx_pop").css("display","none");
    });
