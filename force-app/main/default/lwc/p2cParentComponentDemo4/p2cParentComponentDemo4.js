import { LightningElement } from 'lwc';

export default class P2cParentComponentDemo4 extends LightningElement {

    name = 'Ayush Tambi';

    clickHandler(){
        this.template.querySelector('c-p2c-child-component-demo4').childMethodName();
    }
}