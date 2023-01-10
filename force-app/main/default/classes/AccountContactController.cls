public with sharing class AccountContactController {
    @AuraEnabled(cacheable =true)
    public static List<Account> getAccountList(){
        return [SELECT Id,Name,Rating,Industry,Ownership FROM Account];
    }

    @AuraEnabled
    public static List<Contact> getContactList(String accId){
       
        return [SELECT Id,AccountId,LastName,Phone,Email FROM Contact WHERE AccountId =:accId];
    }

    @AuraEnabled
    public static  List<Account> getSearchAccountList(String searchkey){
        String key = '%' + searchkey + '%';
        return [SELECT Id,Name,Rating,Industry,Ownership,AnnualRevenue,Phone FROM Account WHERE Name LIKE :key];
    }

    @AuraEnabled (cacheable=true)
    public static List<Opportunity>  getOpportunityList(String stage){
        return [SELECT Id,Name,StageName,Amount,CloseDate FROM Opportunity WHERE StageName =:stage ];
    }

    @AuraEnabled
    public static void deleteAccount(Account objaccount){
        try {
            delete objaccount;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static  List<Account> getInputAccountList(String searchAcc){
        String key = '%' + searchAcc + '%';
        return [SELECT Id,Name,Rating,Industry,Ownership,AnnualRevenue,Phone FROM Account WHERE Name LIKE :key];
    }
    
    @AuraEnabled (cacheable =true)
    public static  List<Account> getsearchAccValuet(String searchAccValue){
        String key = '%' + searchAccValue + '%';
        return [SELECT Id,Name,Rating,Industry,Ownership,AnnualRevenue,Phone FROM Account WHERE Name LIKE :key];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactaccIds(String accIdss){
        
        return [SELECT Id,AccountId,FirstName,LastName,Phone,Email FROM Contact WHERE AccountId =:accIdss];
    }

    @AuraEnabled (cacheable =true)
    public static  List<Account> getsearchAccValuett(String searchAccValue){
        String key = '%' + searchAccValue + '%';
        return [SELECT Id,Name,Rating,Industry,Ownership,AnnualRevenue,Phone FROM Account WHERE Name LIKE :key];
    }
}
