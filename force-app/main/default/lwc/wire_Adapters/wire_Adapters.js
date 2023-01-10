import { LightningElement ,api, wire } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class Wire_Adapters extends LightningElement {

    formFields = {}
    changeHandler(event){
        const {name , value} = event.target;
        this.formFields[name]=value;
    }

    clickHandler(){
        const recordInput={apiName:CONTACT_OBJECT.objectApiName,fields:this.formFields}
        createRecord(recordInput).then(result=>{
            console.log('Record Created Successfully',result.id);
            this.template.querySelector('form').reset();
        }).catch(error=>{
            console.log(error);
        })
    }


}