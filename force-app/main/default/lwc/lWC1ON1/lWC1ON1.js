import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/trialApexClass.getAccounts';
import getContacts from '@salesforce/apex/trialApexClass.getContacts';
import getOpportunity from '@salesforce/apex/trialApexClass.getOpportunity';
import getCases from '@salesforce/apex/trialApexClass.getCases';



const CONCOL=[
    {label:'Name' ,     fieldName:'Name'},
    {label:'Phone' , fieldName:'Phone'},
    {label:'Email' ,   fieldName:'Email'},

]
const OPPOCOL=[
    {label:'Name' ,         fieldName:'Name'},
    {label:'Close Date' ,   fieldName:'CloseDate'},
    {label:'Stage Name' ,   fieldName:'StageName'},

]
const CASECOL=[
    {label:'Case Number' ,  fieldName:'CaseNumber'},
    {label:'Origin' ,       fieldName:'Origin'},
    {label:'Status' ,       fieldName:'Status'},
]
export default class LWC1ON1 extends LightningElement {
    accName;accRating;accIndustry;accOwnership
    conColumns = CONCOL; OppColumns = OPPOCOL; caseColumns = CASECOL;
    contactData
    opportunityData
    caseData
    

    accOptions= [];
    accId


    get options(){
        return this.accOptions;
    }
    
    connectedCallback(){
        getAccounts().then(result=>{
            let arr= [];
            for(var i=0 ; i< result.length ; i++){
                arr.push({label : result[i].Name , value : result[i].Id})
            }
            this.accOptions = arr ;
        })
        
        console.log(this.accOptions);
    }

    accountHandler(event){
         this.accId = event.target.value;
        getAccounts({accIds:this.accId}).then(result=>{
            this.accName        = result[0].Name;
            this.accIndustry    = result[0].Industry;
            this.accRating      = result[0].Rating;
            this.accOwnership   = result[0].Ownership;          
        })

        getContacts({accIds:this.accId}).then(result=>{
            this.contactData = result;
            console.log(result);
        })
        getOpportunity({accIds:this.accId}).then(result=>{
            this.opportunityData = result
            console.log(result);
        })
        getCases({accIds:this.accId}).then(result=>{
            this.caseData = result
            console.log(result);
        })
    }

 









}