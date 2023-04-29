import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import NAME_FIELD from '@salesforce/schema/Lead.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Lead.LastName';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Lead.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Lead.Rating';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import MOBILE_FIELD from '@salesforce/schema/Lead.MobilePhone';

export default class CreateLeadForm extends NavigationMixin(LightningElement) {
  name = '';
  lastName = '';
  company = '';
  annualRevenue = '';
  rating = '';
  phone = '';
  mobile = '';

  handleNameChange(event) {
    this.name = event.target.value;
  }

  handleLastNameChange(event) {
    this.lastName = event.target.value;
  }

  handleCompanyChange(event) {
    this.company = event.target.value;
  }

  handleAnnualRevenueChange(event) {
    this.annualRevenue = event.target.value;
  }

  handleRatingChange(event) {
    this.rating = event.target.value;
  }

  handlePhoneChange(event) {
    this.phone = event.target.value;
  }

  handleMobileChange(event) {
    this.mobile = event.target.value;
  }
  createLead() {
    const fields = {};
    fields[NAME_FIELD.fieldApiName] = this.name;
    fields[LAST_NAME_FIELD.fieldApiName] = this.lastName;
    fields[COMPANY_FIELD.fieldApiName] = this.company;
    fields[ANNUAL_REVENUE_FIELD.fieldApiName] = this.annualRevenue;
    fields[RATING_FIELD.fieldApiName] = this.rating;
    fields[PHONE_FIELD.fieldApiName] = this.phone;
    fields[MOBILE_FIELD.fieldApiName] = this.mobile;

    const recordInput = { apiName: LEAD_OBJECT.objectApiName, fields };

    createRecord(recordInput)
      .then((lead) => {
        this[NavigationMixin.Navigate]({
          type: 'standard__recordPage',
          attributes: {
            recordId: lead.id,
            objectApiName: 'Lead',
            actionName: 'view'
          }
        });

        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Sucesso',
            message: 'Lead criado com sucesso!',
            variant: 'success'
          })
        );

        this.clearForm();
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Erro ao criar Lead',
            message: error.body.message,
            variant: 'error'
          })
        );
      });
  }

  clearForm() {
    this.name = '';
    this.lastName = '';
    this.company = '';
    this.annualRevenue = '';
    this.rating = '';
    this.phone = '';
    this.mobile = '';
  }
}