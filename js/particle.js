class Particle {

    constructor(color ,  radius , orbital_speed , scale){
     this.x;
     this.y; 
     this.radius =  radius;
     this.angle = 0;
     this.scale = scale;
     this.orbital_speed = orbital_speed;
     this.color = color;
    }

    //particle method's
    draw(){
        fill(this.color);
        ellipse(this.x , this.y , this.radius ,  this.radius);
    }

    //updater
    update(){

        //we are going to use some trignomentry functions to revolve electron's
          //calc Y 
          this.x =  this.radius * Math.sin(this.angle);
          this.y =  this.radius * Math.cos(this.angle);

         //scale it up a little bit

         this.x *= this.scale;
         this.y *= this.scale;

          console.log(this.x +" :  "+ this.y);
          //increment angle , for orbiral motion
          this.angle += this.orbital_speed;
    }
}