import { LightningElement } from 'lwc';

export default class LwcQuestion9ParentComponent extends LightningElement {
    showChild=false;
    firstName
    middleName
    lastName
    gender
    title

    firstNameHandler(event){
        this.firstName = event.target.value
        console.log(this.firstName);
    }

    middleNameHandler(event){
        this.middleName = event.target.value
        console.log(this.middleName);
    }

    lastNameHandler(event){
        this.lastName = event.target.value
        console.log(this.lastName);
    }

    genderHandler(event){
        this.gender = event.detail.value
        console.log(this.gender);

        if(this.gender === 'Male'){
            this.title = 'Mr.'
        }

        if(this.gender === 'Female'){
            this.title = 'Miss.'
        }
    }

    saveHandler(){
        this.showChild =true;
    }

    genderOptions=[
        {label:'Male',value:'Male'},
        {label:'Female',value:'Female'}

    ]

}