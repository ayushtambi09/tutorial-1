import { LightningElement, api } from 'lwc';

export default class ChildCompo extends LightningElement {
    
    // @api accountName = "Ayush Tambi"

    // @api account;

    // @api inputField;

    @api childMethod
    @api childHandler(){
        this.childMethod = "This is the method from child Component";
    }
}