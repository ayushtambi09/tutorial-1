import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {

    clickHandler(){
        const event = new CustomEvent('hide',{
            detail:"Child Closed Successfully...!!"
        })
        this.dispatchEvent(event);
    }
    
}