import { LightningElement, wire } from 'lwc';
import getAllData from '@salesforce/apex/trialApexClass.getAllData';
 const CONCOL = [
    {label:'First Name', fieldName:'FirstName'},
    {label:'Last Name', fieldName:'LastName'},
    {label:'Phone Name', fieldName:'PhoneName'},
    {label:'Email Name', fieldName:'EmailName'}

]

const OPTYCOL = [
    {label:'Name', fieldName:'Name'},
    {label:'StageName', fieldName:'StageName'},
    {label:'Amount', fieldName:'Amount'},
    {label:'CloseDate', fieldName:'CloseDate'}
]
export default class LWC2ON2 extends LightningElement {

    contacts
    opportunities
    accName;
    contactColumns = CONCOL;
    optyColumns = OPTYCOL;

    
    searchHandler(event){
       const  myvar = setInterval(this.searchHandler, 1000 );
        this.accName = event.target.value;
        //console.log(event.target.value);
        clearInterval(myvar);
    }
    

    @wire(getAllData,{accName:'$accName'})
    wiredSearchData(result){

        if(result.data){
            console.log('Account  : ',result.data);
            const allData = result.data.map(item=>{
                console.log('Contacts : ',item.Contacts);
                this.contacts = item.Contacts;
                this.opportunities = item.Opportunities;
                //console.log('Opportunities : ', item.Opportunities);
            })

            //console.log('contacts',this.contacts);
            //console.log('opportunities: ',this.opportunities);
        }
        if(result.error){
            console.log(result.error);
        }
    }

}