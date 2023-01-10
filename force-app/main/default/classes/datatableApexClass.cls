public with sharing class datatableApexClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id,Name,Industry,Phone FROM Account];
    }

    // @AuraEnabled
    // public static String updateAccountDetails(Object accountData ){
    //     System.debug('accountData'+accountData );
    //     return 'done';
    // }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountListDatatable(Id  accId){
        return [SELECT Id,Name,Industry,Phone FROM Account WHERE Id =:accId];
    }


    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactsList(){
        return [SELECT Id,Email,FirstName,LastName,AccountId,
                Account.Name,MailingStreet,MailingCity,MailingState,
                MailingPostalCode,MailingCountry FROM Contact LIMIT 20];
    }

    // @AuraEnabled (cacheable = true)
    // public static List<Contact> searchContact(String searchString){
    //     List<List<SObject>> contacts= [FIND :searchString IN ALL FIELDS RETURNING Contact(Id,Email,FirstName,LastName,
    //                                     AccountId,Account.Name,MailingStreet,MailingCity,MailingState,
    //                                     MailingPostalCode,MailingCountry)];

    //    return(List<Contact>) contacts[0];       
    // }

    @AuraEnabled
    public static void deleteContact(List<Id> contactIds){
        System.debug(contactIds);
        if(contactIds.size() > 0){
            delete[SELECT Id FROM Contact WHERE Id IN:contactIds];
        }

    }

}
