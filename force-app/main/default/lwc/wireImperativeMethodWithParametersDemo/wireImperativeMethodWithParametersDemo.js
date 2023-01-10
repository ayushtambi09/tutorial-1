import { LightningElement } from 'lwc';
import getSearchAccountList from '@salesforce/apex/AccountControllerDemo.getSearchAccountList';
export default class WireImperativeMethodWithParametersDemo extends LightningElement {
    searchKey=''
    accounts
    searchHandler(event){
        this.searchKey = event.target.value;
        console.log(this.searchKey)
        getSearchAccountList({searchKey:this.searchKey}).then(result=>{
            this.accounts = result ;
        }).catch(error=>{
            console.error(error);
        })
    }
}