import { LightningElement } from 'lwc';

export default class SlotChildComponent extends LightningElement {

    handlerFooterChange(){
        const fetch = this.template.querySelector('.slds-card__footer')
        if(fetch){
            fetch.classList.remove('slds-hide');
        }
    }

}