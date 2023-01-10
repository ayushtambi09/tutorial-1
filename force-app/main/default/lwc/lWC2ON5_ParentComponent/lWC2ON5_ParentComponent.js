import { LightningElement, wire } from 'lwc';
import getNewCreatedAcc from '@salesforce/apex/trialApexClass.getNewCreatedAcc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
const COL=[
    {label:'Name',fieldName:'Name'},
    {label:'Industry',fieldName:'Industry'},
    {label:'Annual Revenue',fieldName:'AnnualRevenue'},
    {label:'Ownership',fieldName:'Ownership'},
    {label:'Rating',fieldName:'Rating'}
]
export default class LWC2ON5_ParentComponent extends LightningElement {
    columns=COL
    data
    accId
    accIdArray=[];
    wiredAccounts
    accIdHandler(event){
        if(event.detail != null || event.detail != undefined){
                this.showToast('Success','Record is Successfully Created with recordId :' +event.detail,'success');
        }else{
            this.showToast('Failed','Error while creating record..!!','error');
        }
        
        console.log(event.detail);
        this.accId = event.detail;
        this.accIdArray=[...this.accIdArray,event.detail]
        
    }

    @wire(getNewCreatedAcc,{accIds:'$accIdArray'})
    getaccList(result){
        this.wiredAccounts=result;
        if(result.data){
            console.log('result.data =>', result.data);
            this.data=result.data;
            //this.showToast('Success','Record is Successfully Created with recordId :' +this.accId,'success' )
        }
        if(result.error){
            console.log('result.error ==>',result.error);
            //this.showToast('Failed','Error while creating record','error' )
        }
    }

    showToast(title,message,variant){
        const event=new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(event);
    }

}