import { LightningElement } from 'lwc';

export default class C2pChildComponentDemp3 extends LightningElement {

    courseHanlder(){
        this.dispatchEvent(new CustomEvent('pass',{
            detail:'Salesforce',
            bubbles:true
        }))

    }
}