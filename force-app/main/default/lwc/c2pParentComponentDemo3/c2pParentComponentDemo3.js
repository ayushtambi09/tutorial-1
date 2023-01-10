import { LightningElement } from 'lwc';

export default class C2pParentComponentDemo3 extends LightningElement {
    CourseName

    constructor(){
        super()
        this.template.addEventListener('pass',this.courseHanlder.bind(this));
    }
    courseHanlder(event){
        this.CourseName = event.detail;
    }
}