$(document).ready(()=>{
$('header .nav li').each((i,e)=>{
  $(e).click(()=>{
    $('header .nav li').removeClass('active')
    $(e).addClass('active')
  })
})
  $('.slider').slick({
});
})
