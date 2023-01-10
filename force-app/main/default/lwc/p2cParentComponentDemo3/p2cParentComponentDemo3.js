import { LightningElement } from 'lwc';

export default class P2cParentComponentDemo3 extends LightningElement {

    parentName='Ayush Tambi';
    newFirstName='Ayush';
    newTrueValue = false;



    AccountList=[
        {
            id:1,
            Name:'Sagar Kille',
            standard:10
        },
        {
            id:2,
            Name:'Mayur Kille',
            standard:12
        },
        {
            id:3,
            Name:'Tushar Kille',
            standard:9
        },
        {
            id:4,
            Name:'Sagar Anil Kille',
            standard:15
        }
    ]
}