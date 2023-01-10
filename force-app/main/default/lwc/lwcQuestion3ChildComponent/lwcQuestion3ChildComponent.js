import { LightningElement ,api} from 'lwc';


const col=[
    {label:"Name",fieldName:"Name"},
    {label:"Industry",fieldName:"Industry"}
]
export default class LwcQuestion3ChildComponent extends LightningElement {
    @api accountData;
    columns =col;

}