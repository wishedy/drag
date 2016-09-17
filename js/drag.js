/**
 * Created by 萤火虫 on 2016/9/17.
 */

$(document).ready(
    function(){
        console.log("hello,world");

        function dragStart(ele,container){
            console.log(ele);
            var x = 0;
            var y = 0;
            var eleWidth = 0;
            var eleHeight = 0;
            var moveX = 0;
            var moveY = 0;
            ele.css({"position":"absolute"});
            ele.mousedown(function(e){
                console.log(e.pageX);
                console.log(e.pageY);
                console.log($(this).position().left);
                 x = e.pageX-$(this).position().left;
                 y = e.pageY-$(this).position().top;
                eleWidth = parseInt(ele.css("width"));
                eleHeight = parseInt(ele.css("height"));
                console.log(eleWidth);
                console.log(eleHeight);
                console.log(container.width());
                console.log(container.height());
                ele.mousemove(function(e){
                    moveX = e.pageX - x;
                    moveY = e.pageY - y;
                    if(moveX<0){
                        moveX = 0;
                    }
                    if(moveX>container.width()-eleWidth){
                        moveX =container.width()-eleWidth
                    }
                    if(moveY<0){
                        moveY = 0;
                    }
                    if(moveY>container.height() - eleHeight){
                        moveY = container.height() - eleHeight;
                    }
                    ele.css({
                        "left":moveX+"px",
                        "top":moveY+"px"
                    });

                    ele.mouseup(function(e){
                        ele.css({
                            "left":moveX+"px",
                            "top":moveY+"px"
                        });
                    });
                });

            });


        }
        var drag = new dragStart($("#dragEle"),$(window));
    }

);

