public with sharing class DatatableSearchFunctionality {


    @AuraEnabled (cacheable=true)
    public static List<Account> searchAccountList(String name){
        if(name != null && name != ''){
            String searchName= '%'+ name + '%';
            return[SELECT Id,Name,Phone,Industry,Rating FROM Account WHERE Name LIKE:searchName];
        }
        else{
            return [SELECT Id,Name,Phone,Industry,Rating FROM Account];
        }
        
    }

    @AuraEnabled
    public static void deleteAccounts(List<Id> accId){
        if(accId.size()> 0){
            Delete [SELECT Id FROM Account WHERE Id =:accId];
        }
       
    }


    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountList(String name){
        if(name != null && name != ''){
            String accName = '%' +name + '%';
            return [SELECT Id,Name,Industry,Phone,Rating FROM Account WHERE Name LIKE :accName];
        }else{
            return [SELECT Id,Name,Phone,Rating,Industry FROM Account];
        }
    }

    @AuraEnabled 
    public static List<Contact> getRelatedContacts(List<String> accId){
        return [SELECT Id,Name,AccountId FROM Contact WHERE AccountId IN:accId];
    }

}
