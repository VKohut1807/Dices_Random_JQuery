$(document).ready(function(){
			var throwDices = 1;
			$("#throwDicesButton").click(function(){
				
				$("#place").prepend("<div class='block'>" + "Throw №<br> " + throwDices++ + "</div>")
				switch (getNumber(1,6)){
				case 1:
					$("#place").prepend("<div class='block one'></div>");
				break;
				case 2:
					$("#place").prepend("<div class='block two'></div>");
				break;
				case 3:
					$("#place").prepend("<div class='block three'></div>");
				break;
				case 4:
					$("#place").prepend("<div class='block four'></div>");
				break;
				case 5:
					$("#place").prepend("<div class='block five'></div>");
				break;
				case 6:
					$("#place").prepend("<div class='block six'></div>");
				break;
				}
			});
			function getNumber(min, max){
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
		});