import { LightningElement } from 'lwc';

export default class LwcQuestion8 extends LightningElement {
    cityOptions
    // mh=false
    // gj=false;
    // goa=false;
    selectedState

    stateOptions=[
        {label:"Maharashtra",value:"Maharashtra"},
        {label:"Gujrat",value:"Gujrat"},
        {label:"Goa",value:"Goa"}
    ]

    stateHandler(event){
        this.selectedState = event.target.value ;

        if(this.selectedState === 'Maharashtra'){
              this.cityOptions = this.mhOptions
         }
 
         if(this.selectedState === 'Gujrat'){
              this.cityOptions = this.gjOptions
         }
 
         if(this.selectedState === 'Goa'){
               this.cityOptions = this.goaOptions
         }
    }


    mhOptions=[
        {label:"Mumbai",value:"Mumbai"},
        {label:"Pune",value:"Pune"},
        {label:"Nagar",value:"Nagar"},
        {label:"Dhule",value:"Dhule"}
    ]

    gjOptions=[
        {label:"Ahemdabad",value:"Ahemdabad"},
        {label:"Gandhinagar",value:"Gandhinagar"}
    ]

    goaOptions=[
        {label:"Panji",value:"Panji"},
        {label:"Ponda",value:"Ponda"} 
    ]


    get cityOptions(){

         console.log(this.selectedState)

        if(this.selectedState === 'Maharashtra'){
           return  this.cityOptions = this.mhOptions
        }

        if(this.selectedState === 'Gujrat'){
            return this.cityOptions = "gjOptions"
        }

        if(this.selectedState === 'Goa'){
            return  this.cityOptions = "goaOptions"
        }
    }



}