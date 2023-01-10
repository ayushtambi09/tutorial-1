import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/DatatableSearchFunctionality.searchAccountList';
import {NavigationMixin} from 'lightning/navigation';
import deleteAccounts from '@salesforce/apex/DatatableSearchFunctionality.deleteAccounts';
import {refreshApex} from '@salesforce/apex';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

const ACTIONS=[
    {label:'View' , name:'view'},
    {label:'Edit' , name:'edit'},
    {label:'Delete', name:'delete'}
]

const COL=[
    {label:'Name' , fieldName:'Name'},
    {label:'Phone' , fieldName:'Phone'},
    {label:'Industry' , fieldName:'Industry'},
    {label:'Rating' , fieldName:'Rating'},
    {fieldName:'actions' , type:'action',typeAttributes:{rowActions:ACTIONS} }
]

export default class DatatableSearchFunctionality extends NavigationMixin(LightningElement) {

    columns = COL ;
    accountData
    wiredAccount;
    name
    accId
    selectedAccounts

    @wire(getAccountList)
    accList(result){
        this.wiredAccount = result;
        if(result.data){
            this.accountData = result.data ;
        }else if(result.error){
            console.log(result.error);
        }
    }

    searchHandler(event){
        getAccountList({name:event.target.value}).then(result=>{
            this.accountData = result;
        }).catch(error=>{
            console.log(error);
        })
    }

    handlerRowAction(event){
        const actionName = event.detail.action.name;
        
        switch(actionName){
            case 'view':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        objectApiName:'Account',
                        recordId:event.detail.row.Id,
                        actionName:'view'
                    }
                })
            break;
            case 'edit':
                this[Navigationmixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        objectApiName:'Account',
                        recordId:event.detail.row.Id,
                        actionName:'edit'
                    }
                })
            break;
            case 'delete':
                this.deleteAccount(event.detail.row.Id);
        }
    }

    deleteAccount(row){
        deleteAccounts({accId:row}).then(result=>{
            refreshApex(this.wiredAccount);
            this.showToast('Success' , 'Succesfully Deleted','success');
        }).catch(error=>{
            this.showToast('Error' , 'Cannot Deleted'+','+ error.body.message,'error');
        })
    }

    handlerRowSelection(event){
        this.selectedAccounts = event.detail.selectedRows;
        console.log(this.selectedAccounts);
    }

    handleDelete(){
        const idList = this.selectedAccounts.map(row =>{return row.Id})

        deleteAccounts({accId : idList}).then( () => {
            refreshApex(this.wiredAccount);
        })
        this.template.querySelector('lightning-datatable').selectedRows = [];
        this.selectedContacts= undefined;


        
    }


    showToast(title,message,variant){
        const eventNew = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(eventNew);
    }


    
}