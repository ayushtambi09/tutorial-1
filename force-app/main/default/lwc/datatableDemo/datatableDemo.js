import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/datatableApexClass.getAccountList';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import updateAccountDetails from '@salesforce/apex/datatableApexClass.updateAccountDetails';

const columns = [
    { label: "Account Name", fieldName: 'Name', editable: true },
    { label: "Email", fieldName: "Email", editable: true },
    { label: "Industry", fieldName: "Industry", editable: true }
]
export default class DatatableDemo extends LightningElement {

    
    columns = columns

    // Accounts data from apex class for datatable
    @wire(getAccountList)
    accounts

    saveHandler(event) {

       
        console.log(JSON.stringify(event.detail.draftValues));

        const recordInputs = event.detail.draftValues.map(draft => {
            const fields = {...draft}
            return { fields: fields }
        })

        const promises = recordInputs.map(recordInput => (updateRecord(recordInput)));

        Promise.all(promises).then(() => {
            this.draftValues =[ ];
            this.showToast('Updated..!!', 'Record Updated Successfully', 'success');
            
        }).catch(error => {
            this.showToast('Faild..!!', 'Eror While Updating Record', 'error');
        })

    }

    showToast(title, message, variant) {
        const eventN = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(eventN);
    }





}