public with sharing class trialApexClass {
    @AuraEnabled
    public static List<Account> getAccounts(String accIds){
        IF(accIds != null && accIds !=''){
            return [SELECT Id,Name,Industry,Rating,Ownership FROM Account WHERE Id =:accIds];
        }else{
            return [SELECT Id,Name FROM Account];
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accIds){
        return[SELECT Id,Name,Phone,Email FROM Contact WHERE AccountId =:accIds];
        
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunity(String accIds){
        return[SELECT Id,Name,StageName,CloseDate FROM Opportunity WHERE AccountId =:accIds];
    }
    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(String accIds){
        return[SELECT Id,CaseNumber,Origin,Status FROM Case WHERE AccountId =:accIds];
    }

    //LWC 1 ON 2  ||LWC 1 ON 3
    @AuraEnabled
    public static List<Account> getSearchAccounts(String accName){
        String searchName = '%' + accName + '%';
        return [SELECT Id,Name,Industry,Rating,Ownership,AnnualRevenue FROM Account WHERE Name LIKE:searchName];
    }

    //LWC 1 ON 4
    @AuraEnabled 
    public static List<Opportunity> getOptyAsPerStageName(String selectedStage){
        return [SELECT Id,Name,StageName,CloseDate,AccountId,Account.Name FROM opportunity WHERE StageName LIKE :selectedStage];
    }

    // LWC 2 ON 1
    @AuraEnabled(cacheable=true)
    public static List<User_Subscription_Detail__c> getUserSubList(String phn){
        
        List<User_Subscription_Detail__c> details=[SELECT Id,Subscription_End_Date__c,Mobile_Number__c 
                                                   FROM User_Subscription_Detail__c WHERE Mobile_Number__c LIKE :phn];
        
       
                                                   return details;
                                                 
        
    }

    // LWC 2 ON 2
    @AuraEnabled(cacheable=true)
    public static List<Sobject> getAllData(String accName){
        IF(accName != null && accName != ''){
            String accountName = '%' + accName + '%';
            return [SELECT Id,Name,(SELECT Id,FirstName,LastName,Email,Phone FROM Contacts),(SELECT Id,Name,Amount,StageName,CloseDate FROM Opportunities) FROM Account WHERE Name Like :accountName LIMIT 1];
        }else{
            return null;
        }
    }

    // LWC 2 ON 5
    @AuraEnabled(cacheable=true)
    public static List<Account> getNewCreatedAcc(List<Id> accIds){
        if(accIds != null){
            return [SELECT Id,Name,Industry,Ownership,AnnualRevenue,Rating FROM Account WHERE Id IN:accIds];
        }else{
            return null;
        }
    }

}
