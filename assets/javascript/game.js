$(document).ready(function(){


	// var randomNumber = ;
	// var counter = 0;


			// function startFunction(){
			var randomNumber = Math.floor(Math.random() * 120) + 20;
			$("#randomNum").html(randomNumber);

			var counter = 0;
			$("#totalSum").html(counter);

			var globalcounter = 0;
			// }

			// startFunction();

			

			var crystalA = $("#gemA");
			var crystalB = $("#gemB");
			var crystalC = $("#gemC");
			var crystalD = $("#gemD");

			

			function createRanNumbers (){

				crystalA = Math.floor(Math.random() * 12) + 1;
				crystalB = Math.floor(Math.random() * 12) + 1;
				crystalC = Math.floor(Math.random() * 12) + 1;
				crystalD = Math.floor(Math.random() * 12) + 1;
				console.log(crystalA, crystalB, crystalC, crystalD);
			};

			// createRanNumbers();


			var valueA;
			var valueB;
			var valueC;
			var valueD;

			$("#gemA").on("click", function(){
			valueA = crystalA;	
    		counter += valueA;
			$("#totalSum").html(counter);
			});

			
			


			$("#gemB").on("click", function(){
			valueB = crystalB;	
    		counter += valueB;
			$("#totalSum").html(counter);

			});
			

			$("#gemC").on("click", function(){
			valueC = crystalC;	
    		counter += valueC;
			$("#totalSum").html(counter);

			});

		

			$("#gemD").on("click", function(){
			valueD = crystalD;	
    		counter += valueD;
			$("#totalSum").html(counter);

			});

			// i realize that my counter has value within the function, but I need the global counter 
			// to be updated as well. I think I need to reiew scope and how to call on an element that is within 
			// a function

			// I will work on this ASAP. I also want to work on condensing my code.


			

			var totalValue = parseInt(counter);


			function numChecker (num1, num2){
				if (num1 === num2){
					alert("YOU WIN!!");
				} 

				if (num1 >= num2){
					alert("You went too high");
				}
			};


			// startFunction();
			createRanNumbers();
			numChecker(totalValue, randomNumber);	


})

