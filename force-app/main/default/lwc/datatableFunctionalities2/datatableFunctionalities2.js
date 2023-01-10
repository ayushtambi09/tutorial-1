import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/DatatableSearchFunctionality.getAccountList';
import {NavigationMixin} from 'lightning/navigation';
import deleteAccounts from '@salesforce/apex/DatatableSearchFunctionality.deleteAccounts';
import {refreshApex} from '@salesforce/apex';
import { MessageContext,publish } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
const ACTIONS=[
    {label:'View' , name:'view'},
    {label:'Edit' , name:'edit'},
    {label:'Delete' , name:'delete'},

]

const COL =[
    {label:'Name' , fieldName:'Name'},
    {label:'Phone' , fieldName:'Phone'},
    {label:'Industry' , fieldName:'Industry'},
    {label:'Rating' , fieldName:'Rating'},

    {fieldName:'actions' , type:'action', typeAttributes:{rowActions:ACTIONS}}
    
]
export default class DatatableFunctionalities2 extends NavigationMixin(LightningElement) {

    columns=COL;
    data // for storing the account Data
    name   // input from search field
    wiredAccounts; // total account result
    selectedAccounts // all seected Accounts from the list

    // search Accounts Data and search Handler
    hanldeSearch(event){
        this.name = event.target.value;
        getAccountList({name:this.name}).then(result=>{
            this.data = result
        })
    }

    //Fetch All the Accounts with wire method
    @wire(getAccountList)
    wireAccountList(result){
        this.wiredAccounts = result;
        if(result.data){
            this.data = result.data;
        }else{
            console.log('No Accounts Available');
        }
    }

    // on row action Functionality  view,edit,delete
    //onRowAction 
    handlerRowAction(event){

        const actionName = event.detail.action.name;
      
        // const row =event.detail.row;

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
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        objectApiName:'Account',
                        recordId:event.detail.row.Id,
                        actionName:'edit'
                    }
                })
            break;

            case 'delete':
                this.deleteSelAccounts(event.detail.row.Id);
            break;

        }  
    }

    deleteSelAccounts(ids){
        deleteAccounts({accId : [ids]}).then(()=>{
            refreshApex(this.wiredAccounts);
        })
    }

    // on click of create Account
    handleCreateAccount(){

        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            }
        })
    }
    
    //delete multiple Accounts 
    handlerRowSelection(event){
        this.selectedAccounts = event.detail.selectedRows;
    }
    
    handleDeleteSelectedAccounts(){
        const accIds = this.selectedAccounts.map(row=>{return row.Id});
        deleteAccounts({accId : accIds}).then(()=>{
            refreshApex(this.wiredAccounts);
                   
        })
        this.template.querySelector('lightning-datatable').selectedRows = []
            this.selectedAccounts = undefined  
    }

    // show related Accounts Contacts with ***LMS***
    @wire(MessageContext)
    context


    handleShowContacts(){
        const accIds = this.selectedAccounts.map(row=>{return row.Id});
        publish(this.context,SAMPLEMC,accIds)
    }



}