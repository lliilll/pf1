$(document).ready(function(){
    $("ul.gnb>li").hover( //대메뉴 - 서브메뉴처리
        function(){ 
            $("ul.submenu").removeClass("submenuup");
            // $(this).find("ul.submenu").addClass("submenushow");
            // $(this).siblings().find("ul.submenu").removeClass("submenushow");  

        //(처음오버시에만 작동되야함) 서브메뉴 애니실행           
            if($("ul.submenu").hasClass("submenuani")==0){
                $(this).find("ul.submenu").addClass("submenuani");//서브메뉴 애니메이션되게 submenuani클래스붙임
                $(this).siblings().find("ul.submenu").removeClass("submenuani");
                $(this).find("ul.submenu").addClass("submenushow"); // 서브메뉴가 보이게 submenushow클래스 붙임
                $(this).siblings().find("ul.submenu").removeClass("submenushow");
                console.log("1-if");
            }
        // 다른 서브메뉴에 오버시 서브메뉴 보임(애니는 안되게)
            else{ 
                //(처음 올린) 서브메뉴에 다시 마우스올린 경우
                if($(this).find("ul.submenu").hasClass("submenuani")==1){//submenuani클래스를 가진 메뉴에 마우스올린경우
                   $(this).find("ul.submenu").removeClass("submenuani");//애니메이션안되게 submenuani제거
                   $(this).find("ul.submenu").addClass("submenushow"); // 서브메뉴가 보이게
                   $(this).siblings().find("ul.submenu").removeClass("submenushow"); // 다른 서브메뉴 안보이게
                   $(this).siblings().find("ul.submenu").addClass("submenuani"); // 다른 서브메뉴에 submenuani클래스붙여서 처음if문으로 가지 않게.가면 다시 애니시작되기에,이미 서브메뉴가 보인상태에서는 클래스가 붙어도 애니가 되지 안ㄶ는다.  
                   console.log("2-else>if"); 
                }else{
                    $(this).find("ul.submenu").addClass("submenushow");
                    $(this).siblings().find("ul.submenu").removeClass("submenushow");
                    console.log("3-else>else");
                }
                
                
                
            }
            $("button.close").remove();
            $("ul.submenu").append("<button class='close'>닫기</button>");
            
            $("button.close").click(
                function(){
                    //submenu를 안보이게..
                    $(".submenu").removeClass("submenuani submenushow");
                    $(this).parent("ul.submenu").addClass("submenuup");
                }
            ); 
        },
        function(){ //마우스나갔을때 mouseleave이벤트
            // $("ul.submenu").find(".close").remove();
            // $(this).find(".submenu").removeClass("submenuani submenushow");
        }
    );
    // 서브메뉴를 div로 둘러싸고 닫기버튼 배치하기
    // $("ul.submenu").wrap("<div class='wsubmenu'></div>");
    // $("div.wsubmenu").append("<button class='close'>닫기</button>");
//메인내용중 전문만 남기고 나머지 감추기
    //$("#governance section article:not(:first-of-type)").hide(); 
    $("#governance section article").not(":first-of-type").hide(); 

//목록클릭시 해당 메인이 보이게 하기
   
    $(".navtab li a").click(
        function(){

            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current blue");
            $(this).parent().siblings().children("a").removeClass("blue");

            $(".navlist:nth-of-type("+($(this).parent().index()+1)+")").show();
            $(".navlist").not(".navlist:nth-of-type("+($(this).parent().index()+1)+")").hide();

            console.log($(this).parent().index());
            return false;
        }
    ); 
   /*
    $("#governance section div ul li:nth-child(1) a").click(
        function(){
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            $("article:nth-of-type(1)").show();
            //$("article:nth-of-type(1)").siblings().hide();
            $("article").not("article:nth-of-type(1)").hide();
            return false;
        }
    );
    $("#governance section div ul li:nth-child(2) a").click(
        function(){
            $(this).parent().addClass("current");
            $(this).parent().siblings().removeClass("current");
            $("article:nth-of-type(2)").show();
            //$("article:nth-of-type(2)").siblings().hide();
            $("article").not("article:nth-of-type(2)").hide();
            return false;
        }
    ); 
    */
//영역에서 벗어나면(마우스가 떠나면) 서브메뉴가 닫히게 처리
    $("ul.gnb > li").mouseleave(function(){
        $("ul.submenu").removeClass("submenushow");
        $(this).children("ul.submenu").addClass("submenuup");
    });
    
});
