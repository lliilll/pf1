$(document).ready(function(){
    // 이미지클릭시 팝업이미지 처리
    let i;
     $(".download figure").click(function(){
         $(".wdown").remove();
         $(this).parent().parent(".downloadlist").append('<div class="wdown"></div>');
         $(this).parent().clone().appendTo('.wdown');
         i=$(this).parent().index()+1;
         console.log(i);
         $(".wdown").find("img").attr("src","img/life_img"+i+".jpg");
         $(".wdown figure").append('<button class="close">닫기</button>');
         $(".wdown,.wdown .close").click(function(){
             $(".wdown").fadeOut();
         });
     });    
 });