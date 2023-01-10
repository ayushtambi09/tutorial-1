import { LightningElement } from 'lwc';

export default class LwcQuestion6 extends LightningElement {

    msg
    bmi
    weightInKg
    heightInMe

    weightChangeHandler(event){
        this.weightInKg =event.target.value ;
    }

    heightChangeHandler(event){
        this.heightInMe =event.target.value ;
    }

    calculateHandler(){
         this.bmi = this.weightInKg / (this.heightInMe*this.heightInMe);
         console.log(this.bmi);

         if(this.bmi < 18.5){
            this.msg = ' Under 18.5 - You are very Underwight.'
        }
        if(18.5 < this.bmi &&  this.bmi < 24.9){
            this.msg = ' You have a Healthy Weight.'
        }
        if(25 < this.bmi && this.bmi <29.9 ){
            this.msg = ' You are Overweight.'
        }
        if(this.bmi > 30){
            this.msg = ' You are Obese.'
        }
    }

}