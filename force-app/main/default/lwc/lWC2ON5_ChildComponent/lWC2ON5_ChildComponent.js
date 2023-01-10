import { LightningElement ,api} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class LWC2ON5_ChildComponent extends LightningElement {
    formField={}
    accId
    recordInput
    fieldHandler(event){
        const {name ,value} =event.target;
        this.formField[name] =value;
    }

    submitHanlder(event){
        event.preventDefault();

       console.log(newArr);

        const recordInput = {apiName:ACCOUNT_OBJECT.objectApiName,fields:this.formField}
        createRecord(recordInput).then(result=>{
            console.log('then result: ',result.id);
            this.accId = result.id;
            const event=new CustomEvent('newaccid',{
                detail:this.accId
            })
            this.dispatchEvent(event);

            this.template.querySelector('.ff').reset();
        }).catch(error=>{
            console.log(error.message.body);
        })
    }
}
/* const newArr = Array.from(this.template.querySelectorAll('lightning-input')).map(item=>{
            console.log(item.name);
            if(item.name == 'Rating'){
                if(!item.value.includes('Cold') || !item.value.includes('Hot') || !item.value.includes('Warm')){
                    item.setCustomValidity("Raing will be 'Hot','Cold','Warm'");
                }else{
                    item.setCustomValidity("");
                    
                }
                item.reportValidity();
            }
        })*/