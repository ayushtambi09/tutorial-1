public with sharing class LeadController {
    @AuraEnabled (cacheable=true)
    public static List<Lead> getLeadList(String status){
        return [SELECT Id,Name,Status,Company FROM Lead WHERE Status=:status LIMIT 5];
    }
}
