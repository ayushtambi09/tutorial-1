import { LightningElement ,wire} from 'lwc';
import getAccountListDatatable from '@salesforce/apex/datatableApexClass.getAccountListDatatable';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import OWNERSHIP_FIELD from '@salesforce/schema/Account.Ownership'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class LwcQuestions5 extends LightningElement {
    
    accountDataList=[]
    accountObj = ACCOUNT_OBJECT;
    fields = [NAME_FIELD,RATING_FIELD,INDUSTRY_FIELD,TYPE_FIELD,OWNERSHIP_FIELD,ANNUAL_REVENUE_FIELD];

    
    recordId
    successHandler(event){
       this. recordId = event.detail.id;
       console.log(this.recordId); 
       getAccountListDatatable({accId :this.recordId}).then(result=>{
            const newRec = result.forEach(item=>{return item})
            this.accountDataList = [...this.accountDataList,newRec]
            console.log(this. this.accountDataList);
            

            
       }).catch(error=>{
        console.log(error);
       })

         this.template.querySelectorAll('lightning-input-field').forEach(item=>{item.reset()})
        
    }

    // resethandler(){
        
    //     this.template.querySelectorAll('lightning-input-field').forEach(item=>{item.reset()})
    // }

}