import { LightningElement } from 'lwc';

export default class LWC2ON3 extends LightningElement {
    showFirstName
    showLastName
    ShowEmail
    showPhone
    showEducation
    showAddress
    showCompanyName
    showSalary
    showPanCardNumber
    showAadharCarNumber
    value = [];
    showForm
    
    get options() {
        return [
            { label: 'First Name', value: 'FirstName' },
            { label: 'Last Name', value: 'LastName' },
            { label: 'Email', value: 'Email' },
            { label: 'Phone', value: 'Phone' },
            { label: 'Education', value: 'Education' },
            { label: 'Address', value: 'Address' },
            { label: 'Company Name', value: 'CompanyName' },
            { label: 'Salary', value: 'Salary' },
            { label: 'Pan Card Number', value: 'PanCardNumber' },
            { label: 'Aadhar Car Number', value: 'AadharCarNumber' }
        ];
    }

    clickHandler(){
        this.showForm = true 
    }

    handleChange(event) {
        //console.log('1',event);
        //console.log('2',event.detail);
        //console.log('3',event.detail.value);
        this.value = event.detail.value;

        event.detail.value.includes('FirstName')        ?  this.showFirstName           =true : this.showFirstName          =false
        event.detail.value.includes('LastName')         ?  this.showLastName            =true : this.showLastName           =false
        event.detail.value.includes('Email')            ?  this.ShowEmail               =true : this.ShowEmail              =false
        event.detail.value.includes('Phone')            ?  this.showPhone               =true : this.showPhone              =false
        event.detail.value.includes('Education')        ?  this.showEducation           =true : this.showEducation          =false
        event.detail.value.includes('Address')          ?  this.showAddress             =true : this.showAddress            =false
        event.detail.value.includes('CompanyName')      ?  this.showCompanyName         =true : this.showCompanyName        =false
        event.detail.value.includes('Salary')           ?  this.showSalary              =true : this.showSalary             =false
        event.detail.value.includes('PanCardNumber')    ?  this.showPanCardNumber       =true : this.showPanCardNumber      =false
        event.detail.value.includes('AadharCarNumber')  ?  this.showAadharCarNumber     =true : this.showAadharCarNumber    =false
    }

}

 