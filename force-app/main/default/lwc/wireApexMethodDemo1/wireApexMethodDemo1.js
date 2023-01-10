import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerDemo.getAccountList'
export default class WireApexMethodDemo1 extends LightningElement {

    @wire(getAccountList)
    account

    accountList ;
    // we use the wire as the function when we have to transform the data

    @wire(getAccountList)
    accountHandler({data,error}){
        if(data){
            this.accountList=data.map(item=>{
                const newType = item.Type === 'Customer - Direct' ? 'Direct' :
                                item.Type === 'Customer - Channel' ? 'Channel' : '----'
                return {...item,newType}
            })
        }
        if(error){
            console.error(error);
        }
    }
}