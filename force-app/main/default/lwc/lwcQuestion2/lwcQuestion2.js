import { LightningElement } from 'lwc';
import getSearchAccountList from '@salesforce/apex/AccountContactController.getSearchAccountList';
const col=[
    
    {label:"Name",fieldName:"Name"},
    {label:"Rating",fieldName:"Rating"},
    {label:"Industry",fieldName:"Industry"},
    {label:"Ownership",fieldName:"Ownership"},
    {label:"AnnualRevenue",fieldName:"AnnualRevenue"}
]
export default class LwcQuestion2 extends LightningElement {
    searchkey
    accounts
    columns = col;
    searchHandler(event){
        this.searchkey = event.target.value;
        getSearchAccountList({searchkey:this.searchkey}).then(result=>{
            this.accounts = result ;
            this.searchkey;
        }).catch(error=>{
            console.error(error);
        })
    }
}