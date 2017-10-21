class Orbital_path {
    /*
     Orbital_Radius , how far orbital paths should be drawn
     color 
    */ 
    constructor(orbital_radius , color){
        this.orbit_radius = orbital_radius;
        this.color = color;
    }

    draw(){
        stroke(this.color);
        noFill();
        ellipse(0 , 0 , this.orbit_radius , this.orbit_radius);
    }
}