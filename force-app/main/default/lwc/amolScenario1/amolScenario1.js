import { LightningElement } from 'lwc';
import getsearchAccValuet from '@salesforce/apex/AccountContactController.getsearchAccValuet';
import getContactaccIds from '@salesforce/apex/AccountContactController.getContactaccIds';
import {NavigationMixin} from 'lightning/navigation';

const colAccount=[
    {label:'Name', fieldName:'Name'},
    {label:'Industry', fieldName:'Industry'}
]

export default class AmolScenario1 extends NavigationMixin (LightningElement) {
    accData
    accColumns = colAccount ;
    searchAccValue

    // after searching on below method will gwt called
    searchHandler(event){
        this.searchAccValue = event.target.value;
        getsearchAccValuet({searchAccValue :this.searchAccValue}).then(result=>{
            this.accData =result;
        }).catch(error=>{
            console.error(error);
        })
    }

    //to get the record Id on which i click
    accIds
    recordIdHandler(event){
        this.accIds = event.currentTarget.dataset.recordId;
        console.log(this.accIds)
    }

    contactData

    relatedContactHanlder(){
        getContactaccIds({accIds:this.accIds}).then(result=>{
            this.contactData =result
            console.log(this.contactData);
        }).catch(error=>{
            console.log(error);
        })
    }
    contactIds
    contactIdHandler(event){
        this.contactIds =event.currentTarget.dataset.recordId;
        console.log(this.contactIds)
    }

    detailPageHandler(){

        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.contactIds,
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }

    

}