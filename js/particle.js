class Particle {

    constructor(color ,  radius , orbital_speed , scale , start_angle){
     this.x;
     this.y; 
     this.radius =  radius;
     this.angle = start_angle;
     this.scale = scale;
     this.orbital_speed = orbital_speed;
     this.color = color;
    }

    //particle method's
    draw(){
        //draw electron
        fill(this.color);
        ellipse(this.x , this.y , this.radius ,  this.radius);


        //calc radius of orbit
        //SOH
        let R = 10 * (1/this.x);
        stroke("white");
        noFill();
        //draw orbit
        ellipse(0,0 , R , R);
        
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

          //increment angle , for orbiral motion
          this.angle += this.orbital_speed;
    }
}