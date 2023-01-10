import { LightningElement, wire } from 'lwc';
import { MessageContext,subscribe,APPLICATION_SCOPE } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import getRelatedContacts from '@salesforce/apex/DatatableSearchFunctionality.getRelatedContacts';

const ACTIONS=[
    {label:'View' ,name:'view'},
    {label:'Edit', name:'edit'},
    {label:'Delete', name:'delete'}
]

const COL = [
    {label:'Name' , fieldName:'Name'},
    {label:'Account Name' , fieldName:'AccountId'},
    {fieldName:'actions', type:'action' , typeAttributes:{rowActions:ACTIONS}}
]


export default class ContactDatafromLms extends LightningElement {
    columns=COL;
    data;




    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage =subscribe(this.context ,SAMPLEMC ,
            (accIds)=>{this.handleMessage(accIds)},{scope:APPLICATION_SCOPE})

    }

    handleMessage(accIds){
       
        console.log(accIds);
        getRelatedContacts({accId:accIds}).then(result=>{
            this.data = result
        })
    }






}