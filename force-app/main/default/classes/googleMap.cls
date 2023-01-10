public with sharing class googleMap {
    @AuraEnabled(cacheable = true)
    public static List<Cake_Studio__c> getNearByCakeStudio(String areaName){
        IF(areaName != null && areaName !=''){
            String searchAdd = '%' + areaName + '%';
            return [SELECT Id,Name,Dealer_Name__c,Street__c,State__c,Postal_Code__c,Country__c,City__c FROM Cake_Studio__c WHERE Street__c LIKE :searchAdd OR City__c LIKE:searchAdd];
        }else{
            return null;
        }
    }
}
