import { LightningElement } from 'lwc';
import getUserSubList from '@salesforce/apex/trialApexClass.getUserSubList';
export default class LWC2ON1 extends LightningElement {
    showRenewButton=false
    showCreateSubscription = false
    showChechMembershipButton = true
    show = false
    message
    phone
    current = new Date();
    cDate = this.current.getFullYear() + '-' + (this.current.getMonth() + 1) + '-' + this.current.getDate(); cTime = this.current.getHours() + ":" + this.current.getMinutes() + ":" + this.current.getSeconds();
    dateTime = this.cDate + ' ' + this.cTime;

    mobileHanlder(event){
        this.phone = event.target.value;
    }
    
    membershipHandler(){
        getUserSubList({phn : this.phone}).then(result=>{
            result[0].Subscription_End_Date__c
            const alldata = result.map(item=>{
                if(item.Subscription_End_Date__c < this.dateTime){
                    this.message = `Your Lenskart Subscrption has been expired on ${item.Subscription_End_Date__c}`
                    this.showRenewButton=true
                    showChechMembershipButton=false
                    
                }else{
                    this.message = `You have active Lenskart Subscription .Your Lenskart Subscrption has been expired on ${item.Subscription_End_Date__c}`
                    this.showChechMembershipButton=false
                    this.show = true
                }
            })

            if(result.length == 0){
                this.message = 'You have not registered for Lenskart Subscription till now.';
                this.showCreateSubscription = true;
                showChechMembershipButton = false
            }
        }).catch(error=>{
            console.log(error);
        })
    }

    recheckHandler(){
        this.phone ='';
        this.message = '';
        this.showRenewButton=false
        this.showCreateSubscription =false
        showChechMembershipButton =true
    }

    recheckHandler1(){
        this.showChechMembershipButton =true;
        this.show =false;
        this.phone ='';
        this.message = '';
    }


}