import { LightningElement } from 'lwc';

export default class PDFGenerationDemo extends LightningElement {

    invoiceData={

        invoiceNo:'111',
        invoiceCreated:'Jan 1,2019',
        invoiceData:'Jan 10,2020',
        companyName:'Sparksuite, Inc',
        address:'1234 Suny Road',
        address:'Team Buildiling Home'
    }

    clientData={
        client:'Acme Corp',
        userName:'John Doe',
        email:'john@gamil.com'
    }

    services=[
        {name:'Consutant Fee',amount:100000},
        {name:'Website Design',amount:3000},
        {name:'Hosting (3 months)',amount:78}
    ]

}