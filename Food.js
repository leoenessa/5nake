function Food(){

	this.active_food = false;
	this.food_position = (0,0);
	this.size = 10;
	this.randomx = ((width-this.size)/this.size);
	this.randomy = ((height-this.size)/this.size);
	this.score = 0;
	
	this.setSize = function(tamanho){
		this.size=tamanho;
	}

	this.show = function(){
		fill(255,0,0);
		rect(this.food_position.x,this.food_position.y,this.size,this.size);
	}

	this.generate = function(snake_positions){
		var match = true;		

		if(!this.active_food){
			while(match){
				match=false;
				this.food_position = createVector(floor(random(1,this.randomx))*this.size,floor(random(1,this.randomy))*this.size);
				for(var i=0;i<snake_positions.length;i++){
					if(snake_positions[i].x==this.food_position.x && snake_positions[i].y==this.food_position.y){
						match=true;
						break;
					}
				}
			}
		}
		this.active_food = true;
	}	

	this.eated = function(){
		this.active_food = false;
		this.score++;
	}

	this.getPosition = function(){
		return(this.food_position);}

	this.getScore = function(){
		return(this.score);}

	this.resetScore = function(){
		this.score=0;
	}

}