$('.bar span').each(function(){
  let gauge = $(this); 
  let per = gauge.text();
  gauge.css({"width":per + "%"}); 
})
$('.portfolio>li').on('click',function(){
  $('.portfolio>li').removeClass('active');
  $(this).addClass('active');
})
$(window).scroll(function(){
  let introT = $('#intro').offset().top;
  let portT = $('#port').offset().top;
  let contT = $('#contact').offset().top;
  let scT = $(window).scrollTop();
  let innH = $(document).height();
  let scH = $(window).height();
  let per = (scT / (innH - scH)) * 100;
  console.log(per);
  if(scT < portT && scT >= introT){
    removH();
    $('.nav li:nth-child(1) a').addClass('scroll');
  }else if(scT >= portT && scT < contT && per < 92){
    removH();
    $('.nav li:nth-child(2) a').addClass('scroll');
  }else if(scT >= portT || per >= 92){
    removH();
    $('.nav li:nth-child(3) a').addClass('scroll');
  }else if(scT < introT){
    removH();
  }
})
function removH(){
  $('.nav li a').removeClass('scroll');
}  
