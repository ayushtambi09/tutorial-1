import { LightningElement, wire } from 'lwc';
import getAccountContactData from '@salesforce/apex/WrapperDemo.getAccountContactData'
const COL = [
    {label:'Account Name' , fieldName:'accountLink' , type:'url', typeAttributes:{label:{fieldName:'accountName'}}},
    {label:'Total Contacts' , fieldName:'totalContacts'},
    {label:'Billing Address',fieldName:'billingAddress'},
    {label:'Type',label:'accountType'}
]
export default class WrapperClassDemo extends LightningElement {
    data
    columns = COL;
    wireData
    @wire(getAccountContactData)
    getAccCon(result){
        this.wireData = result;
        if(result.data){
            this.data = result.data
        }
        if(result.error){
            console.log(result.error)
        }
    }

}