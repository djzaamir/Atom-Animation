class Particle {
    /**
     * color
     * Radius of the Ellipse to be drawn as electron
     * Orbital-Speed , rotational speed which will change the angle
     * Scale ,  will be used to put electrons at different shell levels
     * Start-angle ,  will be used to put electrons at different places in the same shell
     */
    constructor(color ,  radius , orbital_speed , shell_offset , start_angle){
     this.x;
     this.y; 
     this.radius =  radius;
     this.angle = start_angle;
     this.shell_offset = shell_offset;
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
          this.x =  this.shell_offset * Math.sin(this.angle);
          this.y =  this.shell_offset * Math.cos(this.angle);

         //scale it up a little bit

        //  this.x *= this.shell_offset;
        //  this.y *= this.shell_offset;

          //increment angle , for orbiral motion
          this.angle += this.orbital_speed;
    }
}