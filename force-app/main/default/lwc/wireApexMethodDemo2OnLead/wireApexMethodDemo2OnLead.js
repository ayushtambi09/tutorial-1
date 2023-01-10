import { LightningElement, wire } from 'lwc';
import getLeadList from '@salesforce/apex/LeadController.getLeadList';
export default class WireApexMethodDemo2OnLead extends LightningElement {
    status;
    @wire(getLeadList,{status:'$status'})
    leads;

    changeHandler(event){
        this.status = event.target.value;
    }

    get statusOptions(){
        return [
            {label:'Open - Not Contacted',value:'Open - Not Contacted'},
            {label:'Working - Contacted',value:'Working - Contacted'},
            {label:'Closed - Converted',value:'Closed - Converted'},
            {label:'Closed - Not Converted',value:'Closed - Not Converted'}
        ]
    }

    
}