import { LightningElement } from 'lwc';

export default class LwcQuestion7 extends LightningElement {
    distance
    time
    speed
    disHandler(event){
        this.distance = event.target.value;
    }

    timeHandler(event){
        this.time = event.target.value;
    }

    speedHandler(){
        this.speed = this.distance / this.time ;

        const event =new CustomEvent('dispaly',{
            detail:this.speed.toFixed(2)
        })
        this.dispatchEvent(event);
    }



    
}