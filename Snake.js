function Snake(){   
    this.x = width/2;
    this.y = height/2;
    
    this.corpo = [];
    this.corpo.push(createVector(this.x,this.y));

    this.lado = 10;
    
    this.xdirection = 1;
    this.ydirection = 1;

    this.xgoing = true;

    this.setSize = function(tamanho){
        this.lado=tamanho;
    }

    this.move = function(){
        if(keyIsDown(UP_ARROW)){
            if(!this.xgoing && this.ydirection==1){}
            else{
                this.xgoing=false;
                this.ydirection=-1;
            }
        }
        if(keyIsDown(DOWN_ARROW)){
            if(!this.xgoing && this.ydirection==-1){}
            else{
                this.xgoing=false;
                this.ydirection=1;
            }
        }
        if(keyIsDown(LEFT_ARROW)){
            if(this.xgoing && this.xdirection==1){}
            else{
                this.xgoing=true;
                this.xdirection=-1;
            }
        }
        if(keyIsDown(RIGHT_ARROW)){
            if(this.xgoing && this.xdirection==-1){}
            else{
                this.xgoing=true;
                this.xdirection=1;
            }
        }
    }

    this.walk = function(){
        if(this.xgoing==true){
            if(this.x>width){this.x=0;}
            if(this.x<0){this.x=width;}
            this.x+=this.lado*this.xdirection;
        }else{
            if(this.y<0){this.y=height;}
            if(this.y>height){this.y=0;}
            this.y+=this.lado*this.ydirection;
        }

        var ponto = createVector(this.x,this.y);
        this.corpo.push(ponto);
        this.corpo.splice(this.corpo[0],1);
        /*
        if(this.corpo.length>=30){
            this.corpo.splice(this.corpo[0],1);
        }
        */
    }

    this.show = function(){
        for(var i=0;i<=this.corpo.length-1;i++){
            fill(255,255,255);
            //console.log(this.corpo.length);    
            rect(this.corpo[i].x,this.corpo[i].y, this.lado,this.lado);
        }
    }

    this.selfcolision = function(){
        for(var i=1;i<=this.corpo.length-1;i++){
            if((dist(this.corpo[0].x,this.corpo[0].y, this.corpo[i].x,this.corpo[i].y)<this.lado)){
                return true;
            }
        }
    }

    this.colision = function(objeto){
        if(dist(this.corpo[0].x,this.corpo[0].y,objeto.x,objeto.y)<this.lado){
            return true;
        }
        return false;
    }

    this.eat = function(){
        var last = this.corpo.length;
        var ponto = createVector(this.corpo,this.y); 
        this.corpo.push(ponto);
    }

    this.getSnakePositions = function(){
        return this.corpo;
    }

    this.getSize = function(){
        return this.lado;
    }

    this.resetSnake = function(){
        this.corpo.splice(0,this.corpo.length);
        this.corpo.push(createVector(this.x,this.y));

    }
}