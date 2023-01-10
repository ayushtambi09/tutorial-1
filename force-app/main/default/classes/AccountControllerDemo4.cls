public with sharing class AccountControllerDemo4 {
    @AuraEnabled (cacheable =true)
    public static  List<Account> getAccountList(){
        return [SELECT ID,Name,Industry,Phone FROM Account LIMIT 5];
    }

   @AuraEnabled (cacheable = true)
   public static List<Account> getSearchAccountList (String searchName){
    String key = '%'+ searchName + '%';
    return [SELECT Id,Name,Phone,Industry FROM Account WHERE Name LIKE :key];

   }
}
