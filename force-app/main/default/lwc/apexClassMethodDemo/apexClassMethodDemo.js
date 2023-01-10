import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
const COLS = [
    {label:'Id', fieldName:'Id'},
    {label:'Name', fieldName:'Name'},
    {label:'Type', fieldName:'Type'},
    {label:'Industry', fieldName:'Industry'}
]
export default class ApexClassMethodDemo extends LightningElement {
    data;
    error;
    fields=COLS;
    selectedType='';
    @wire(getAccountList,{type:'$selectedType'})
    dataHandler({data,error}){
        if(data){
            this.data = data ;
        }
        if(error){
            this.error = error ; 
        }
    }

   get typeOptions(){
        return [
            {label:'Customer - Channel' , value :'Customer - Channel'},
            {label:'Customer - Direct' , value :'Customer - Direct'}

        ]
   }

   typeHandler(event){
    this.selectedType = event.target.value;
   }
}