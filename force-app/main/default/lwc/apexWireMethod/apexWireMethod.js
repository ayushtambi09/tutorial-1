import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerDemo4.getAccountList';
import getSearchAccountList from '@salesforce/apex/AccountControllerDemo4.getSearchAccountList';
import {NavigationMixin} from 'lightning/navigation';
export default class ApexWireMethod extends LightningElement {
    searchName
    @wire(getAccountList)
    accounts;
    accountList
    
    searchHandeler(event){
        this.searchName = event.target.value ; 
        getSearchAccountList({searchName:this.searchName}).then(result=>{
            this.accountList = result ;             
        }).catch(error=>{
            console.error(error);
        })
    }

    // viewHandler(event){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId:event.target.recorId,
    //             objectApiName:'Account',
    //             actionName:'view'
    //         }
    //     });
    // }

}