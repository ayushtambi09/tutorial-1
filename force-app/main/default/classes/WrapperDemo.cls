public with sharing class WrapperDemo {
    @AuraEnabled(cacheable=true)
    public static List<AccountContactWrapperClass> getAccountContactData(){
        List<AccountContactWrapperClass> accountContactWrapper=new List<AccountContactWrapperClass>();

        FOR(Account acc:[SELECT Id,Name,Type,BillingStreet,BillingCity,BillingCountry,(SELECT Id FROM Contacts)FROM Account LIMIT 20]){
            accountContactWrapper.add(new AccountContactWrapperClass(acc,acc.Contacts.size()));
        }   
        
        return accountContactWrapper;
    }
    
    public Class AccountContactWrapperClass{
        @AuraEnabled
        public Account acc;
        @AuraEnabled
        public String accountName;
        @AuraEnabled
        public String billingAddress;
        @AuraEnabled
        public String accountType;
        @AuraEnabled
        public Integer totalContacts;
        @AuraEnabled 
        public String accountLink;

        public AccountContactWrapperClass(Account acc,Integer totalContacts){
            this.acc = acc;
            this.accountName = acc.Name;
            this.billingAddress = acc.BillingStreet + ' , ' + acc.BillingCity + ' , ' + acc.BillingCountry ;
            this.accountType = acc.Type;
            this.totalContacts = totalContacts;
            this.accountLink = '/' + acc.Id;
        }
    }

}
