import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    showChild=false ; 
    msg;
    showHandler(){
        this.showChild = true ;
    }

    closeHandler(event){
        this.msg = event.detail;
        this.showChild = false ; 
    }
}