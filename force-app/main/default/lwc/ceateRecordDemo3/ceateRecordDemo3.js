import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CeateRecordDemo3 extends LightningElement {
    formFields ={};
    changeHandler(event){
        const {name,value} = event.target;
        this.formFields[name] = value;
       // console.log(this.formFields[name] = value)
    }

    saveHanlder(){
        const recordInput = {apiName:ACCOUNT_OBJECT.objectApiName , fields:this.formFields}
        createRecord(recordInput).then(result=>{
            this.toastEvent('Success..!!', `Record Crated Succesfully Id: ${result.id}`,'success');
            this.template.querySelector('.accountForm').reset();
            this.formFields ={};
        }).catch(error=>{
            this.toastEvent('Error Creating Record',error.body.message,'error');      
        })

    }

    toastEvent(title,message,variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(event);
    }


}