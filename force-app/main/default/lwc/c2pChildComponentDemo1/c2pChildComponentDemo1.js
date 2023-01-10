import { LightningElement } from 'lwc';

export default class C2pChildComponentDemo1 extends LightningElement {

    // childHandler(){
    //     const event = new CustomEvent('show',{
    //         detail : 'Ayush Tambi'
    //     })
    //     this.dispatchEvent(event);
    // }

    childHandler(){
        const event = new CustomEvent('show',{
            detail : 'Ayush Tambi',
            bubbles:true
        
        })
        this.dispatchEvent(event);
    }


}