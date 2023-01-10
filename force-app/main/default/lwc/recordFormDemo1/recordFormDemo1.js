import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class RecordFormDemo1 extends LightningElement {
    objectName = ACCOUNT_OBJECT ; 
    fieldName = {
        accountName :NAME_FIELD,
        accountIndustry :INDUSTRY_FIELD,
        accountPhone :PHONE_FIELD
    }




    successHandler(event){
        this.trial('Suucess..!!','Succesfully Creating Record' + event.detail.id,'success');
    }

    trial(title,message,variant){

        const newEvent = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(newEvent)
    }
     


}