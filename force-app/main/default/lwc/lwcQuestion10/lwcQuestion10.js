import { LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import RATING_FIELD from '@salesforce/schema/Account.Rating'

import CONTACT_OBJECT from '@salesforce/schema/Contact'
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import NAMEE_FIELD from '@salesforce/schema/Opportunity.Name'
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate'
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName'


export default class LwcQuestion10 extends LightningElement {
    acc=false;
    con=false;
    opty=false;

    accObject=ACCOUNT_OBJECT
    accFields=[NAME_FIELD,INDUSTRY_FIELD,RATING_FIELD]

    conObject=CONTACT_OBJECT
    conFields=[LASTNAME_FIELD,PHONE_FIELD]

    optyObject=OPPORTUNITY_OBJECT
    optyFields=[NAMEE_FIELD,CLOSEDATE_FIELD,STAGENAME_FIELD]
    

    selectedObject
    objectOptions=[
        {label:'Account' , value:'Account'},
        {label:'Contact' , value:'Contact'},
        {label:'Opportunity' , value:'Opportunity'}
    ]

    objectHandler(event){
        this.selectedObject =event.target.value;

        if(this.selectedObject === 'Account'){
            this.acc =true
            this.con = false
            this.opty = false
        }
        if(this.selectedObject === 'Contact'){
            this.con = true
            this.opty = false
            this.acc =false
        }
        if(this.selectedObject === 'Opportunity'){
            this.opty = true
            this.acc =false
            this.con = false
        }
    }

    successHandler(){
        const event=new ShowToastEvent({
            title:'Sueccess..!!',
            message:'Record is Created',
            variant:'success'
        })
        this.dispatchEvent(event);
    }


}