import { LightningElement, api } from 'lwc';//não esquecer de passar a API que é chamada no record form
import { ShowToastEvent } from 'lightning/platformShowToastEvent';//importa todos as funcionalidade de Show Toast -> Mensagem de evento de record
//começo de importar os campos do objeto que seram exibidos no record form
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';//criamos uma variavel que vai importar o campo do obejto em questão que é Account
import CloseDate_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import StageName_FIELD from '@salesforce/schema/Opportunity.StageName';
//fim de importar campos

export default class RecordFormCreateExample extends LightningElement {
    // objectApiName is "Account" when this component is placed on an account record page
    @api objectApiName;//essa API vai receber o valor do objeto que vamos criar o registro no record formulario NÂO ESQUECER

    fields = [NAME_FIELD, CloseDate_FIELD, StageName_FIELD];//pegamos os campos importados e colocamos em uma lista para instaciar no elemento FILD em record form

    handleSuccess(event) {//função padrão de handleSuccess repare que ele chama um novo evento ShowToastEvent que foi importado logo no começo do documento
        const evt = new ShowToastEvent({
            title: 'Oportunidade Criada meu amigo!!!',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}//MAIS IMPORTANTE VER COMO RESETAR CAMPOS APOS UM REGISTRO, MENSAGEM DE ERRO AO USUÁRIO ICONES DE INOFRMAÇÕES DE DETALHES DO CAMPO