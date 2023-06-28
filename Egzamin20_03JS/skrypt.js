function skrypt(){
		//wartosc odbieraz z html
		var ksztalt = document.getElementById("ksztalt").value;
		//wartosc wysyla do html
		var wynik = document.getElementById("wynik");
		
		var R = document.getElementById("R").value;
		var G = document.getElementById("G").value;
		var B = document.getElementById("B").value;
		var przycisk = document.getElementById("przycisk");
		
		
		
		var text = "Twoje zamowienie to cukierek ";
	
		if(ksztalt==1){
			text+="cytryna";
	
		} else if(ksztalt==2){
			text+="liść";
			
		}else if(ksztalt==3){
			text+="banan";
		} else {
			text+="inny";
		}
		
		wynik.innerHTML= text;
		
		przycisk.style.backgroundColor = "rgb(" +R +","+G+","+B+" )";
}
