import { LightningElement, wire } from 'lwc';
import getContactsList from '@salesforce/apex/datatableApexClass.getContactsList';
//import searchContact from '@salesforce/apex/datatableApexClass.searchContact';
import deleteContact from '@salesforce/apex/datatableApexClass.deleteContact';
import {NavigationMixin} from 'lightning/navigation';
import {refreshApex} from '@salesforce/apex';

const ACTIONS=[
    {label:'View',name:'view'},
    {label:'Edit',name:'edit'},
    {label:'Delete',name:'delete'}
]

const COL =[
                {label:'Name' , fieldName:'link' , type:'url' , typeAttributes:{label:{fieldName:'FullName'}}},
                {label:'Email',fieldName:'Email'},
                {label:'Account Name',fieldName:'accountLink',type:'url',typeAttributes:{label:{fieldName:'AccountName'}}},
                {label:'Mailing Address',fieldName:'MailingAddress'},
                {fieldName:'actions', type:'action', typeAttributes:{rowActions: ACTIONS} }
]


export default class DatatableFunctionalities extends NavigationMixin(LightningElement) {
    columns = COL
    wiredContacts
    contacts
    selectedContacts;
    baseData

    get selectedContactsLen() {
        if(this.selectedContacts == undefined ) return 0 ;
        return this.selectedContacts.length
    }

    @wire(getContactsList)
    conListWire(result){
        this.wiredContacts = result;
        if(result.data){
            this.contacts = result.data.map((row)=>{
                return this.mapContacts(row)
            })
            this.baseData = this.contacts;
        }
        if(result.error){
            console.log(error);
        }
    }

    mapContacts(row){
        console.log(row);
        var accountName = '';
        var accountLink = '';
        if(row.AccountId != undefined){
            accountLink = `/${row.Account.Id}`
            accountName = row.Account['Name']
        }

        var street =row.MailingStreet
        if(row.MailingStreet == undefined){
            street  = '';
        }

        var city =row.MailingCity
        if(row.MailingCity == undefined){
            city  = '';
        }

        var state =row.MailingState
        if(row.MailingState == undefined){
            state  = '';
        }

        var country =row.MailingCountry
        if(row.MailingCountry == undefined){
            country  = '';
        }

        var postalCode =row.MailingPostalCode
        if(row.MailingPostalCode == undefined){
            postalCode = '' ;
        }

        return{...row,
            
            FullName : `${row.FirstName} ${row.LastName}`,
            link: `/${row.Id}`,

            accountLink: accountLink,
            AccountName: accountName,

            MailingAddress :`${street} ${city} ${state}  ${postalCode} ${country} `
        }
    }

    handlerRowSelection(event){
        this.selectedContacts = event.detail.selectedRows;
        console.log(this.selectedContacts.length)
    }


    // async handleSearch(event){
    //     if(event.target.value == ""){
    //         this.contacts = this.baseData
    //     }else if(event.target.value.length > 1){
    //         const searchContacts = await searchContact({searchString:event.target.value})

    //         this.contacts = searchContacts.map(row=>{
    //             return this.mapContacts(row);
    //         })

    //     }
    // }

    navigateToNewRecordPage(){

        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    //onRowAction 
    handleRowAction(event){

        const actionName = event.detail.action.name;
      
        // const row =event.detail.row;

        switch(actionName){
            case 'view':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        objectApiName:'Contact',
                        recordId:event.detail.row.Id,
                        actionName:'view'
                        
                    }
                })
            break;
            
            case 'edit':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        objectApiName:'Contact',
                        recordId:event.detail.row.Id,
                        actionName:'edit'
                    }
                })
            break;

            case 'delete':
                this.deleteContacts(event.detail.row.Id);
            break;

        }  
    }

    deleteContacts(ids){
        deleteContact({contactIds : [ids]}).then(()=>{
            refreshApex(this.wiredContacts);
        })
    }

    //on Row Selection
    deleteSelectedContacts(){
        const idList = this.selectedContacts.map(row =>{return row.Id})
        deleteContact({contactIds : idList}).then( () => {
            refreshApex(this.wiredContacts);
        })

        this.template.querySelector('lightning-datatable').selectedRows = [];
        this.selectedContacts= undefined;
    }

}








