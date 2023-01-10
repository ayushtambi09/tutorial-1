import { LightningElement, wire } from 'lwc';
import {createRecord}  from 'lightning/uiRecordApi';
import deleteAccount from '@salesforce/apex/AccountContactController.deleteAccount';
import {getObjectInfo, getPicklistValuesByRecordType} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBEJCT from '@salesforce/schema/Account'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
const actions=[
    {label:'View',name:'view'},
    {label:'Edit',name:'edit'},
    {label:'Delete',name:'delete'}
]
const col=[
    {label:'Id',fieldName:'Id'},,
    {label:'Name',fieldName:'Name'},
    {label:'Rating',fieldName:'Rating'},
    {label:'Industry',fieldName:'Industry'},
    {label:'Type',fieldName:'Type'},
    {label:'Ownership',fieldName:'Ownership'},
    {label:'Annual Revenue',fieldName:'AnnualRevenue'},
    {
        type:'action',
        typeAttributes:{
            rowActions:actions,
            menuAlignment:'right'
        }
    }



]

export default class LwcQuestion5 extends NavigationMixin (LightningElement) {

    columns=col

    
    fieldUpdate={
        Name:'',
        Rating:'',
        Industry:'',
        Type:'',
        Ownership:'',
        AnnualRevenue:''
    }
    
    changeHandler(event){
        const {name,value} = event.target ;
        if(name === 'Name'){
            this.fieldUpdate = {...this.fieldUpdate,'Name': value}
            
        }
        if(name === 'Rating'){
            this.fieldUpdate = {...this.fieldUpdate,'Rating': value}
            
        }

        if(name === 'Industry'){
            this.fieldUpdate = {...this.fieldUpdate,'Industry': value}
            
        }
        if(name === 'Type'){
            this.fieldUpdate = {...this.fieldUpdate,'Type': value}
            
        }
        if(name === 'Ownership'){
            this.fieldUpdate = {...this.fieldUpdate,'Ownership':value}
            
        }
        if(name === 'AnnualRevenue'){
            this.fieldUpdate = {...this.fieldUpdate,'AnnualRevenue':value}
            
        }

    }
    ratingOptions
    industryOptions
    typeOptions
    ownershipOptions
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBEJCT})
    objectInfo

    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBEJCT,recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    pickListHandler({data,error}){
        if(data){
            this.ratingOptions = this.getPicklistGenerator(data.picklistFieldValues.Rating);
            this.industryOptions =this.getPicklistGenerator(data.picklistFieldValues.Industry);
            this.typeOptions=this.getPicklistGenerator(data.picklistFieldValues.Type);
            this.ownershipOptions=this.getPicklistGenerator(data.picklistFieldValues.Ownership);
        }
        if(error){
            console.error(error);
        }
    }

    getPicklistGenerator(data){
        return data.values.map(item=>({
            "label":item.label, "value":item.value
        }))
    }

    newData=[];
    saveHandler(){
        const recordInput ={apiName:ACCOUNT_OBEJCT.objectApiName, fields:this.fieldUpdate}
        createRecord(recordInput).then(result=>{
            this.template.querySelector('.inputFields').reset();
            this.fieldUpdate={};
            this.newData.push(result);
            console.log(result)
        }).catch(error=>{
            console.log(error);
        })
    }

    




     
    onRowActionHandler(event){

        const actionName = event.detail.action.name;
        console.log('Event action',this.actionName);
        const row =event.detail.row;
        switch(actionName){
            case 'view':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId:row.Id,
                        actionName:'view',
                        objectApiName:'Account'
                    }
                })
            break;
            
            case 'edit':
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId:row.Id,
                        actionName:'edit',
                        objectApiName:'Account'
                    }
                })
            break;

            case 'delete':
                this.deleteAccount(row);
            break;
        }
    }

    deleteAccount(currentrow){

        deleteAccount({objaccount:currentrow})
            .then((result)=>{
                this.showToast('Deleted..!!',currentrow.Name+' Account is Deleted','success');
                console.log(result)
            }).catch((error)=>{
                this.showToast('Error..!!',currentrow.Name+' Account Cannot be Deleted','error');
                console.log(error)
            })
    }


    showToast(title,message,variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(event);
    }

}