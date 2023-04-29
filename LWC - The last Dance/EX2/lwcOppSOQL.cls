public with sharing class lwcOppSOQL {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpp(){
        return [SELECT id, Name, Amount, StageName, CreatedDate FROM Opportunity ORDER BY CreatedDate DESC LIMIT 5];
    }
}