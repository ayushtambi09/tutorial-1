import { LightningElement, wire } from 'lwc';
import getNearByCakeStudio from '@salesforce/apex/googleMap.getNearByCakeStudio';
export default class Google_Map_Demo extends LightningElement {
/*
    mapMarkers=[{
        location:{
            City,
            Country,
            PostalCode ,
            State ,
            Street,     
        },
        value ,
        title ,
        description,
        icon
    }]


    zoomLevel
    listView
    value

  changeHandler(event){
        this.value = event.target.value;
    }

    @wire(getNearByCakeStudio,{areaName:'$value'})
    getAllDealers(result){
        
        if(result.data){
            let arr = [];
            let lo={}
            const map = result.data.forEach(item=>{
                lo={
                    location:{
                        City        :item.City__c,
                        Country     :item.Country__c,
                        PostalCode  :item.Postal_Code__c,
                        State       :'MH',
                        Street      :item.Street__c
                    },
                    value       : item.Name,
                    title       : item.Dealer_Name__c,
                    description :'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties',
                    icon        :'standard:account'
                }
                //console.log(lo);
                arr.push(lo);
                console.log('arr  ==>  p',arr)
                this.mapMarkers = [...this.mapMarkers,arr];

            })
            
            console.log('mapMakers ==> ',this.mapMarkers);
            console.log(result.data)
        }
        if(result.error){
            console.log(result.error)
        }
    }
/*
    connectedCallback(){
        this.mapMarkers = [
            {
                location: {
                    City: 'San Francisco',
                    Country: 'USA',
                    PostalCode: '94105',
                    State: 'CA',
                    Street: 'The Landmark @ One Market, Suite 300',
                },
                value: 'location001',
                title: 'The Landmark Building',
                description:
                    'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
                icon: 'standard:account',
            },
            {
                location: {
                    City: 'Pune',
                    Country: 'India',
                    PostalCode: '411041',
                    State: 'MH',
                    Street: 'Vetal bua Chowk,Narhe',
                },
                value: 'location0001',
                title: 'Kiran Lonkar',
                description:
                    'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
                icon: 'standard:account',
            },
            {
                location: {
                    City: 'Aurangabad',
                    Country: 'India',
                    PostalCode: '431103',
                    State: 'MH',
                    Street: 'Main Road,Chikhalthan,tq.Kannad,Dist.Aurangabad',
                },
                value: 'location0001',
                title: 'Ayush Tambi',
                description:
                    'The Landmark is considered to be one of the city&#39;s most architecturally distinct and historic properties', //escape the apostrophe in the string using &#39;
                icon: 'standard:account',
            },
        ];
        this.zoomLevel = 10;
        this.listView = 'visible';
    }

    */
}