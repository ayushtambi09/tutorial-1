import { LightningElement } from 'lwc';
import getCaseList from '@salesforce/apex/amolScenerioClass.getCaseList';
import updateStatus from '@salesforce/apex/amolScenerioClass.updateStatus';
import {refreshApex} from '@salesforce/apex';
export default class AmolScenerio3 extends LightningElement {
    CloseLabel /// Button Label
    cases
    caseId
    closeCaseId
    showData = false

    handleSearch(event){
        
        this.caseId = event.target.value;
        console.log(this.caseId);
        console.log(event.target.value.length);
        if(event.target.value.length > 0){
            this. showData = true;
            getCaseList({caseId:this.caseId}).then(result=>{
                console.log(result);
                this.cases = result
                this.cases.forEach(item=>{
                    if(item.Status === "Closed"){
                        this.CloseLabel = false
                    }else{
                        this.CloseLabel = true
                    }
                })
            }).catch(error=>{
                console.log(error)
            })

        }else{
            this. showData = false;
        }
        
    }

    handleCaseClosed(event){
        this.closeCaseId = event.currentTarget.dataset.recordId;
       
        updateStatus({casesId:this.closeCaseId}).then(result=>{
            
            
        }).catch(error=>{
            console.log('Failds')
        })

        return refreshApex(this.cases)
    }


}