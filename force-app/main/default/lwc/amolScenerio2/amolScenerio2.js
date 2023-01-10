import { LightningElement } from 'lwc';
// import CONTACT_OBEJCT from '@salesforce/schema/Contact';
import getContactaccIds from '@salesforce/apex/AccountContactController.getContactaccIds'
import getsearchAccValuett from '@salesforce/apex/AccountContactController.getsearchAccValuett';
// import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';
export default class AmolScenerio2 extends LightningElement {
    // conObject=
    // ACCOUNTID =ACCOUNTID_FIELD;
    hideAccounts=true
    accIds
    contacts
    searchAccValue
    accData
    name
    searchHandler(event){
        
        this.searchAccValue = event.target.value;
        getsearchAccValuett({searchAccValue: this.searchAccValue}).then(result=>{
            this.accData = result
        }).catch(error=>{
            console.error(error);
        })
    }

 
    accIdHandler(event){
        
        this.accIds = event.currentTarget.dataset.recordId;
        this.name = event.currentTarget.dataset.Name;
        console.log(this.accIds)
        getContactaccIds({accIds:this.accIds}).then(result=>{
            this.contacts = result;
        }).catch(error=>{
            console.log(error);
        })
        hideAccounts=true
    }


}