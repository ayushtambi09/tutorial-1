import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {
    formFields={}
    changeHandler(event){
        const {name, value} = event.target ;
        this.formFields[name] = value ;
    }

    saveHandler(){
        const recordInput = {apiName : CONTACT_OBJECT.objectApiName, fields : this.formFields } 
        createRecord(recordInput).then(result=>{
            this.toastEvent('SUCCESS..!!',`Contact Created ID :${result.id}`,'success');
            this.template.querySelector('.formClass').reset();
            this.formFields={};
        }).catch(error=>{
            this.toastEvent('Error Creating a Record',error.body.message,'error')
        })
    }

    toastEvent(title,message,variant){
       this.dispatchEvent( new ShowToastEvent ({
            title,
            message,
            variant
       }))
    }
}