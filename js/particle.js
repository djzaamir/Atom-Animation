class Particle {
    /**
     * color
     * Radius of the Ellipse to be drawn as electron
     * Orbital-Speed , rotational speed which will change the angle
     * Scale ,  will be used to put electrons at different shell levels
     * Start-angle ,  will be used to put electrons at different places in the same shell
     */
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