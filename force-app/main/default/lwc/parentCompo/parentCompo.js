import { LightningElement } from 'lwc';

export default class ParentCompo extends LightningElement {

    // accName="Killer Sagar"
    // AcList=["Ayush", "Sagar", "Yash","Ritesh"];

    // input;
    // inputHandler(event){
    //     this.input = event.target.value;
    // }
        

    parentField="This is from Parent Component";

    clickHanlder(){
        this.template.querySelector('c-child-compo').childHandler();
    }
    
    
}