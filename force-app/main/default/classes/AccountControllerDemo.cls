public with sharing class AccountControllerDemo {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id,Name,Phone,Industry,Type FROM Account LIMIT 5 ];
    }

    @AuraEnabled (cacheable=true)
    public static List<Account> getFilterAccountList(String type){
        return [SELECT Id,Name,Industry,Type FROM Account WHERE Type=:type LIMIT 5];
    }

    @AuraEnabled (cacheable=true)
    public static List<Account> getSearchAccountList(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT Id,Name FROM Account WHERE Name LIKE :key];
    }
}
