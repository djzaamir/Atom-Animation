//write complex structure for multiple shells 
// Each shell will have electrons moving at different speed's

let shell_count = 3;
let electron_structure = [
    10,10,10  //Numbers of electrons at each shell  
];
let electron_container = []; //Main array which will contain electrons

//Useful in electron proper positioning and speed
let original_shell_offset = 70; //So we can offset paths and then electrons properly
let shell_offset = original_shell_offset;
let orbital_speed = 0.03;


//Orbital Paths
let orbital_paths = [];


function setup(){

  color("black");
  createCanvas(window.innerWidth ,window.innerHeight);
  
  //Setting up orbital paths
  {
    for(let i = 0 ; i < shell_count ; i++){
      orbital_paths.push(new Orbital_path(shell_offset , "white"));
      shell_offset += shell_offset;
    }
    //reset shell offset for electrons
    shell_offset = original_shell_offset;
  }

  //Setting up electron structure
  {
    //for each shell
   for (var i = 0; i < shell_count; i++) {
    
         let start_angle = 0;
          //put appropriate no of electrons
          for(let j = 0 ; j < electron_structure[i] ; j++){
    
            electron_container.push(new Particle("white" , 30 , orbital_speed ,shell_offset , start_angle));
            start_angle += 10; //loc change for next particle
          }
          
          orbital_speed -= 0.01;
          shell_offset += shell_offset;
       }
  }
}

function draw(){
    background("black");
   
      //Render Orbital paths
      orbital_paths.forEach(function(path){
        push();
        translate(width/2 , height/2);
        path.draw();
        pop();
      });

      //Render electrons
      electron_container.forEach(function(p){
        push();
        translate(width/2, height/2);
        p.update();
        p.draw();
       pop();
      });

  }
