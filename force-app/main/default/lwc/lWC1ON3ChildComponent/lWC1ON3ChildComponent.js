import { LightningElement,api } from 'lwc';
import trialApexClass from '@salesforce/apex/trialApexClass.getSearchAccounts';
const COL=[
    {label:'Name' , fieldName:'Name'},
    {label:'Industry' , fieldName:'Industry'},
    {label:'Rating' , fieldName:'Rating'},
    {label:'Phone' , fieldName:'Phone'}
]

export default class LWC1ON3ChildComponent extends LightningElement {
    columns=COL
    @api searchAccName
     accountData

    connectedCallback(){
        trialApexClass({accName:this.searchAccName}).then(result=>{
            console.log(result);
            this.accountData = result;
        })
    }


}