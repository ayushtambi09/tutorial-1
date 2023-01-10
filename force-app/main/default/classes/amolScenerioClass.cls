public with sharing class amolScenerioClass {
@AuraEnabled 
public static List<Case> getCaseList(String caseId){
String key =  '%' + caseId + '%';

    List<Case> cases = [SELECT CaseNumber,Id,Description,Status,Priority FROM Case WHERE CaseNumber LIKE:key];

    If(!cases.isEmpty()){
        return cases;
    }
    return null;

}


@AuraEnabled
public static List<Case> updateStatus(String casesId){
    List<Case> neeCase=new List<Case>();
    String msg ;
    
    For(Case c:[SELECT Id,Status FROM Case WHERE Id =:casesId]){
        If(c.Status != 'Closed'){
            c.Status = 'Closed';
            neeCase.add(c);
            msg ='Successfully Closed';}


        try{
            update neeCase;
            }
        catch(Exception e){
            
        }
    
    
    

}




}
