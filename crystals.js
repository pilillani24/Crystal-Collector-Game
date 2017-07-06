 $(document).ready(function(){
    	var score = 0;
    	var goalNumber, rubyNumber, saphireNumber, topazNumber, emeraldNumber;
    	var wins = 0;
    	var losses = 0;

		(function() { 
			startGame();
		})();

    	function startGame(){
    		goalNumber = Math.floor((Math.random() * 100) + 1);
    			$('#goalNumber').text(goalNumber);
    		rubyNumber = Math.floor((Math.random() * 25) + 1);
    			$('#ruby').val(rubyNumber);
    			console.log(rubyNumber);
    		saphireNumber = Math.floor((Math.random() * 25) + 1);
    			$('#saphire').val(saphireNumber);
    			console.log(saphireNumber);
    		topazNumber = Math.floor((Math.random() * 25) + 1);
    			$('#topaz').val(topazNumber);
    			console.log(topazNumber);
    		emeraldNumber = Math.floor((Math.random() * 25) + 1);
    			$('#emerald').val(emeraldNumber);
    			console.log(emeraldNumber);
    		$('#score').text(score);
    	}

    	$("#ruby").on("click", function(){
    		score = score + rubyNumber;
    		$('#score').text(score);
    		getScore();			
    	});
    	$("#saphire").on("click", function(){
    		score = score + saphireNumber;
    		$('#score').text(score);
    		getScore();	
    	});
    	$("#topaz").on("click", function(){
    		score = score + topazNumber;
    		$('#score').text(score);
    		getScore();	
    	});
    	$("#emerald").on("click", function(){
    		score = score + emeraldNumber;
    		$('#score').text(score);
    		getScore();	
    	});

    	function getScore(){
			if (score === goalNumber){
				$("#win-lose").text("You win!");
				wins = wins + 1;
				$("#wins").text(wins);
				score = 0;
				$("#score").text(score);
				startGame();
			}
			else if(score > goalNumber){
				$("#win-lose").text("You lose!");
				losses = losses + 1;
				$("#losses").text(losses);
				score = 0;
				$("#score").text(score);
				startGame();  
			}
    	}

    });