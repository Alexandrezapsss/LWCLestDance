import { LightningElement, wire } from 'lwc';
import getOpp from '@salesforce/apex/lwcOppSOQL.getOpp';

const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Nome da Oportunidade', fieldName: 'Name' },
    { label: 'Amount', fieldName: 'Amount', type: 'currency' },
    { label: 'Stage Name', fieldName: 'StageName'},
    { label: 'Data de Criação', fieldName: 'CreatedDate', type: 'date' },
];
export default class lwcOpportunitiesTable extends LightningElement {
    error;
    columns = columns;

    @wire(getOpp)
    opps;
}