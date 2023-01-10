import { LightningElement } from 'lwc';

export default class C2pParentComponentDemo2 extends LightningElement {



    name;
    constructor(){
       super()
        this.template.addEventListener('show', this.methodName.bind(this));
        
    }
    methodName(event){
        this.name = event.detail ;
    }
}