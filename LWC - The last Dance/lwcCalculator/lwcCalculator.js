import { LightningElement, track } from 'lwc';//esqueci de importar o track ele é igual ao wire e api se Prestar atenção na proximaS

export default class Calculator extends LightningElement {
    @track value1;//@track ele capta as alterações nas variaveis marcadas
    @track value2;
    @track result;//vai armazenar os resultados das inhas operações
//fazer a captação dos valores
    handleValue1Change(event) {
        this.value1 = event.target.value;
    }

    handleValue2Change(event) {
        this.value2 = event.target.value;
    }
//finalizar a captação dos valores
//funções de operações aritimeticas basicas so que pra minha pessoa não é
    handleAddition() {
        this.result = parseFloat(this.value1) + parseFloat(this.value2);
    }

    handleSubtraction() {
        this.result = parseFloat(this.value1) - parseFloat(this.value2);
    }

    handleMultiplication() {
        this.result = parseFloat(this.value1) * parseFloat(this.value2);
    }

    handleDivision() {
        if(this.value2 == 0) { //verifica se o meu valor 2 é zero se for não pda para dividir
            alert("Não é positivo! Não da para dividir essa budega bobão por 0");
        }
        else{
            this.result = parseFloat(this.value1) / parseFloat(this.value2);
        }
    }
//com o @track ele capta a situação do valor atual posso simplesmente zerar esses valores atraves de uma função
    handleClear() {
        this.value1 = '';
        this.value2 = '';
        this.result = '';
    }
}