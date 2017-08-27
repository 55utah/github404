angular.module('myapp',[])
.controller("con1",function($scope,$document){
    function $(id){
    	return document.querySelector(id);
    }
    function set(elem,top,left,posX,posY,bool){
    	if(bool){
	    	elem.style.top = posY+top +'px';
	    	elem.style.left = posX+left +'px';
    	}else{
    		elem.style.top = top - posY +'px';
	    	elem.style.left = left - posX +'px';
    	}
    	
    }
	let bgdiv = $('#bg-div'),
	    img0 = $('#img0'),
	    img1 = $('#img1'),
	    img2 = $('#img2'),
	    img3 = $('#img3'),
	    img4 = $('#img4'),
	    img5 = $('#img5');
	function main(posX,posY){
	   bgdiv.style.height = 100 - posY + 'px';
	   set(img0,67,62,posX,posY,true);
	   set(img1,90,350,posX,posY,true);
	   set(img2,145,427,posX,posY,true);
	   set(img3,292,366,posX,posY,true);
	   set(img4,127,800,posX,posY,false);
	   set(img5,82,492,posX,posY,false);
	}
	main(0,0);
	$document.on('mousemove',function(e){
	   let posY = e.clientY/40;
	   let posX = e.clientX/40;
	   main(posX,posY);
	});

})