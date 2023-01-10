import { LightningElement ,wire} from 'lwc';
import getAllCases from '@salesforce/apex/Salesforce_As_A_Client.getAllCases';
const COL=[
    {label:'CaseNumber',fieldName:'CaseNumber'  },
    {label:'Status'    ,fieldName:'Status'      },
    {label:'Origin'    ,fieldName:'Origin'      },
    {label:'Priority'  ,fieldName:'Priority'    },
    {label:'Subject'   ,fieldName:'Subject'     }
]
export default class Integration_ShowCases extends LightningElement{
    data
    columns=COL
    //id
    caseNumber
    
    changeHandler(event){
        this.caseNumber = event.target.value;
        console.log('caseNumber : ', event.target.value);
    }

    /*changeHandler(event){
        this.id = event.target.value;
        console.log('caseNumber : ', event.target.value);
        getAllCases({})
    }*/

    @wire(getAllCases,{caseNum:'$caseNumber'})
    getCaseList({data,error}){
        if(data){
            console.log('Data from Org: ',data)
            this.data = data;
        }
        if(error){
            console.log(error);
        }
    }

    

}