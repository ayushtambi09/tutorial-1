import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    ContactInfo = "Contact Info Not Available";
    Account = ["Ayush","Sagar","Ritesh","Kiran","Yash"];

    clickHandler(){
        const ele =this.template.querySelector('.class1');
        ele.style.border = "1px solid red"

        const list=this.template.querySelectorAll('.accInfo');
        Array.from(list).forEach(item=>{
            item.style.color = "Red"
            item.setAttribute("title",item.innerHTML);
        })

        const blank=this.template.querySelector('.blank');
        blank.innerHTML = 'Hey now I am Not Blank'
    }
}