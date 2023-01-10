import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import {ShowToastEvent} from '@lightning/platformShowToastEvent'
export default class CreateRecordDemo3 extends LightningElement {
    formFields ={}
    changeHandler(event){
        const {name, value} = event.target;
        this.formFields [name] = value ;
    }

    createHandler(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName ,fields:formFields}
        createRecord(recordInput).then(result=>{
            this.fun('Success',`Account is Created+${result.id}`,'success')
            this.template.querySelector('.formFields').reset();
            this.formFields = {}
        }).catch(error=>{
            this.fun('Error','Account is not created'+error.body.message,'error')
        })

    }

    fun(title,message,variant){
       const eb= new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(eb);
    }
}