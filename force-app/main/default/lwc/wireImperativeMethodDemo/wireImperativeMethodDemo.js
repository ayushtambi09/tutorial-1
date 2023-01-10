import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerDemo.getAccountList';
export default class WireImperativeMethodDemo extends LightningElement {
    accounts
    clickHandler(){
        getAccountList().then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error);
        })
    }
}