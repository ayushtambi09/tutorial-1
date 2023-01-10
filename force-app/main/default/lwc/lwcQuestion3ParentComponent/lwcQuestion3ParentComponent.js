import { LightningElement } from 'lwc';
import getInputAccountList from '@salesforce/apex/AccountContactController.getInputAccountList';
export default class LwcQuestion3ParentComponent extends LightningElement {
    showChild=false
    accData
    searchAcc

    searchHandler(event){
        this.searchAcc = event.target.value;

        getInputAccountList({searchAcc : this.searchAcc}).then(result=>{
            this.accData = result;
        }).catch(error=>{
            console.log(error);
        })
    }


    checkHandler(){
        this.showChild = !this.showChild ;
    }
}