import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class TaostEvent extends LightningElement {



    clickHandler(){
        this.toastEvent('Error', 'Ayush Tambi','error');
    }
     
    toastEvent(title,message,variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(event);
    }

}