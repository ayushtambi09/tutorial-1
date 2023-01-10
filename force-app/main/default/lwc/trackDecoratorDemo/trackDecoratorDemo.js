import { LightningElement, track } from 'lwc';
export default class TrackDecoratorDemo extends LightningElement {

    @track firstName
    @track lastName
    changeHandler(event){
        const {name, value} = event.target;
        if(name === 'firstName'){
            this.firstName =value;
        }
        if(name === 'lastName'){
            this.lastName =value;
        }
    }
}