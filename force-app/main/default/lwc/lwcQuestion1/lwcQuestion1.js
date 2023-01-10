import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountContactController.getAccountList';
import getContactList from '@salesforce/apex/AccountContactController.getContactList';
const col=[
    {label:"Id" , fieldName:"Id"},
    {label:"LastName", fieldName:"LastName"},
    {label:"Phone", fieldName:"Phone"},
    {label:"Email", fieldName:"Email"}
]
export default class LwcQuestion1 extends LightningElement {
    columns =col
    accId
    accounts
    contacts;
    contactsData=false;
    @wire(getAccountList)
    accountListHandler({data,error}){
        if(data){
            console.log(data);
            this.accounts = data
            
        }
        if(error){
            console.error(error);
        }
    } 
    //div handler for record Id
    recordIdHandler(event){
        this.accId = event.currentTarget.dataset.recordId;
        console.log(this.recordId);

        getContactList({accId :this.accId}).then(result=>{
            this.contacts =result;
            console.log(this.contacts);
        }).catch(error=>{
            console.error(error);
        })
    }
    
    showContacts(){
        this.contactsData = true;
    }
    
}