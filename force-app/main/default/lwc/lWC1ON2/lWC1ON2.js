import { LightningElement } from 'lwc';
import getSearchAccounts from '@salesforce/apex/trialApexClass.getSearchAccounts';
const COL=[
    {label:'Account Name' , fieldName:'Name' },
    {label:'Rating' , fieldName:'Rating' },
    {label:'Industry' , fieldName:'Industry' },
    {label:'Ownership' , fieldName:'Ownership' },
    {label:'AnnualRevenue' , fieldName:'Annual Revenue' },
]
export default class LWC1ON2 extends LightningElement {
    accName
    columns = COL
    data
    searchHandler(event){
        this.accName = event.target.value;
        getSearchAccounts({accName:this.accName}).then(result=>{
            this.data = result;
        })
    }
}