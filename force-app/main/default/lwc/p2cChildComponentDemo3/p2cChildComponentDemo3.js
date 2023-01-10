import { LightningElement ,api} from 'lwc';

export default class P2cChildComponentDemo3 extends LightningElement {

    @api name;
    @api firstName;
    @api isTrue;


    @api accList;
}