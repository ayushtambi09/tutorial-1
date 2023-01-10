import { LightningElement } from 'lwc';

export default class C2pChildComponentDemp2 extends LightningElement {

    reflectHandler(){
        const event = new CustomEvent('show',{
            detail:'Yash Pradhan',
            bubbles:true
        })
        this.dispatchEvent(event);
    }
}