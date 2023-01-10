import { LightningElement, wire } from 'lwc';
import getOpportunityList from '@salesforce/apex/AccountContactController.getOpportunityList';
const col=[
    {label:"Name" ,fieldName:"Name"},
    {label:"StageName" ,fieldName:"StageName"},
    {label:"Amount" ,fieldName:"Amount"},
    {label:"Close Date" ,fieldName:"CloseDate"},
    {label:"None", fieldName:"None"}
]
export default class LwcQuestion4 extends LightningElement {
    stage
    columns =col

    typeHandler(event){
        this.stage = event.target.value;
    }

    @wire(getOpportunityList,{stage:'$stage'})
    optyList

    // StageName
    typeOptions=[
        {label:"None", value:"None"},
        {label:"Prospecting",value:"Prospecting"},
        {label:"Qualification",value:"Qualification"},
        {label:"Need Analysis",value:"Need Analysis"},
        {label:"Value Proposition",value:"Value Proposition"},
        {label:"Id.decision Makers",value:"Id. Decision Makers"},
        {label:"Perception Analysis",value:"Perception Analysis"},
        {label:"Proposal/Price Quote",value:"Proposal/Price Quote"},
        {label:"Negotiation/Review",value:"Negotiation/Review"},
        {label:"Closed Won",value:"Closed Won"},
        {label:"Closed Lost",value:"Closed Lost"}   
    ]

}