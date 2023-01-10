import { LightningElement, api } from 'lwc';

export default class ChildComponentApiDecoratorDemo extends LightningElement {

    @api companyName = "Salesforce Chanakya"

    @api changeHandler(){
        this.companyName="Salesforce Noob"
    }
}