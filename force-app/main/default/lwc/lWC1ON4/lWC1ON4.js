import { LightningElement, wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import getOptyAsPerStageName from '@salesforce/apex/trialApexClass.getOptyAsPerStageName';
const COL=[
    {label:'Name' , fieldName:'Name'},
    {label:'StageName' , fieldName:'StageName'},
    {label:'CloseDate' , fieldName:'CloseDate'},
    {label:'Account Name' , fieldName:'accountLink',type:'url',typeAttributes:{label:{fieldName:'AccountName'}}}
]


export default class LWC1ON4 extends LightningElement {
    columns=COL
    value
    options
    data


    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_OBJECT})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:STAGENAME_FIELD})
    stageNamePickList({data,error}){
        if(data){
            console.log(data);
            this.options = [...this.getPicklistValues(data)];
        }
        if(error)[
            console.log(error)
        ]
    }

    getPicklistValues(data){
        return data.values.map(item=>({
            label:item.label , value:item.value
        }))
    }

    stageNameHandler(event){
        this.value = event.target.value
        getOptyAsPerStageName({selectedStage:this.value}).then(result=>{         
            const arr = result.map(row=>{
                return this.myOpty(row);
            })
            this.data = arr;
            //console.log(result[0].Account.Name)
            
        })
    }
    
    myOpty(row){
        var accountName = '';
        var accountLink = '';
        if(row.AccountId != undefined){
            accountLink = `/${row.Account.Id}`
            accountName = row.Account['Name']
        }
        return{...row,
            accountLink: accountLink,
            AccountName: accountName,  
        }
    }


   

}