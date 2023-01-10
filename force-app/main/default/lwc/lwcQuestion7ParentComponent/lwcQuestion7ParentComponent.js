import { LightningElement } from 'lwc';

export default class LwcQuestion7ParentComponent extends LightningElement {

    spd

    displaySpeed(event){
        this.spd =event.detail ;
    }
}