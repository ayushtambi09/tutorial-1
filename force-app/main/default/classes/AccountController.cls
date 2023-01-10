public with sharing class AccountController {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(String type){
        return [SELECT Id, Name, Industry, Type from Account where Type =: type limit 10];
    }
}
