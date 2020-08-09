class Form{
    constructor(){
        this.input = createInput("Name");
       this.button = createButton('Play');
       this.title= createElement('h2');
       this.greeting = createElement('h2');
      }

       hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    
       }
    


    
    display(){
        this.button.mousePressed(()=>{
            this.greeting.html("Hello");
            form.hide();
            gameState=PLAY;
            
           });
        this.title.html("game instructions=press space bar to jump collect the checkpoint flags to gain points Do not hit the aliens");
        this.title.position(200,100);
        this.input.position(200,200);
        this.button.position(200,300);
        
       
    }
}
/*game story=>You are lost in a planet and want to get back to your space ship to reach earth.
You encounter different aliens who suspect you as you are an outsider.They want to kill you.
RUN! Save yourself from the aliens and earn flags to reach your space ship.

game instructions=>press space bar to jump.
collect the checkpoint flags to gain points.
Do not hit the aliens.*/
//https://www.remove.bg/upload for uploading bg without outline


