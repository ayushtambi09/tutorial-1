import { LightningElement } from 'lwc';

export default class LWC1ON8 extends LightningElement {

    selectedState
    selectedCity
    cityOptions

    stateHandler(event){
        this.selectedState = event.target.value;

        this.cityOptions = (this.selectedState == 'Maharashtra') ?  this.mhOptions :
                            (this.selectedState == 'Gujrat') ?  this.gjOptions :
                            (this.selectedState == 'Goa') ?  this.goaOptions : undefined

    }

        // if(this.selectedState == 'Maharashtra'){
        //     this.cityOptions = this.mhOptions;
        // }
        // if(this.selectedState == 'Gujrat'){
        //     this.cityOptions = this.gjOptions;
        // }
        // if(this.selectedState == 'Goa'){
        //     this.cityOptions = this.goaOptions;
        // }
    

    cityHandler(event){
        this.selectedCity = event.target.value;
    }


    stateOptions=[
        {label:'Maharashtra'    , value:'Maharashtra'   },
        {label:'Gujrat'         , value:'Gujrat'        },
        {label:'Goa'            , value:'Goa'           },
    ]

    mhOptions=[
        {label:'Mumbai' , value:'Mumbai'},
        {label:'Pune'   , value:'Pune'  },
        {label:'Nagpur' , value:'Nagpur'},
        {label:'Dhule'  , value:'Dhule' }
    ]

    gjOptions=[
        {label:'Ahemdabad'  , value:'Ahemdabad'  },
        {label:'Gandhinagar', value:'Gandhinagar'}
    ]

    goaOptions=[
        {label:'Panji', value:'Panji'},
        {label:'Ponda', value:'Ponda'}
    ]
}