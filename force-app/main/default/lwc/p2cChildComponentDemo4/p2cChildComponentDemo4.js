import { LightningElement,api } from 'lwc';

export default class P2cChildComponentDemo4 extends LightningElement {

   @api name;
   @api childMethodName(){
        this.name = 'Sagar Kille';
   }

}