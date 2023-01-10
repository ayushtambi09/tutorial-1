import { LightningElement } from 'lwc';
// import trialApexClass from '@salesforce/apex/trialApexClass.getSearchAccounts';
export default class LWC1ON3 extends LightningElement {
    showChild=false;
    searchName
    accData
    searchHandler(event){
        this.searchName = event.target.value;
        // trialApexClass({accName:this.searchName}).then(result=>{
        //     console.log(result);
        //     this.accData = result;
            
        // })
    }

    checkboxHandler(){
        this.showChild = !this.showChild;
    }

}