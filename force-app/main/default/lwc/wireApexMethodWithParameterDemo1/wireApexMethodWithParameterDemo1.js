import { LightningElement, wire } from 'lwc';
import getFilterAccountList from '@salesforce/apex/AccountControllerDemo.getFilterAccountList';
export default class WireApexMethodWithParameterDemo1 extends LightningElement {
    selectedValue
    @wire(getFilterAccountList,{type:'$selectedValue'})
    accounts


    get typeOptions(){
        return [
            {label:'Customer - Direct', value:'Customer - Direct'},
            {label:'Customer - Channel', value:'Customer - Channel'},
            {label:'None',value:null}
        ]
    }

    typeHandler(event){
        this.selectedValue = event.target.value;
    }
}