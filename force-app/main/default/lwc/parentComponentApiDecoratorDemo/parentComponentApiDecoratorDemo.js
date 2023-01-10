import { LightningElement } from 'lwc';

export default class ParentComponentApiDecoratorDemo extends LightningElement {

  //   shopName="Balaji Traders"

  clickHandler(){
    this.template.querySelector('c-child-component-api-decorator-demo').changeHandler()
  }
}