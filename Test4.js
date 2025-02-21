 var citychararray=["N","S","N","T","A","U","A","E",
                    "E","S","I","I","A","U","A","K",
                    "P","I","l","T","r","I","N","R",
                    "U","S","N","D","A","U","A","R",
                    "N","E","H","K","A","L","K","K",
                    "P","S","N","r","N","U","A","R",
                    "N","S","N","E","A","U","A","R",
                    "P","S","N","T","A","L","A","R"];
					
	var city =["PUNE","DELHI","kolhapur","NASHIK"];	
	
 function printdiv(){
	 var audio=new Audio('C:\Users\ADMIN\Downloads\1.MainTheme-320bit(chosic.com).mp3');
	 audio.play();
for(var i=0;i<64;i++){
$("#pointmeandiv").append('<div id="'+i+'" class="innerdiv" onclick=changecolor('+i+')>'+citychararray[i]+'</div>');
}
for(var i=0;i<4;i++){
	$("#pointdiv").append('<label id="'+i+'" class="cityname">'+city[i]+'</label><br><br><br>');
	}
}
var cityname="";
function changecolor(id){
	
   for(var i=1;i<=64;i++){
		if(cityname.includes(citychararray[i])){
		
		}
		else{
		   if(id == i){
			  cityname += citychararray[i];
		   }
			document.getElementById(id).style.backgroundColor="blue";
	   }
	   
   }
   alert(cityname);
}
function resetgame(){
	alert("reset");
	location.reload();
}

function submit(){
	for(var i=0;i<4;i++){
		if(cityname == city[i]){
			document.getElementById(i).style.color="red";
			cityname="";
		}
		else{
			
		}
	}
}