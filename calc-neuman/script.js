const btnConverter = document.getElementById('btnConverter');
const btnInverter = document.getElementById('btnInverter');
const inputDecimal = document.getElementById('decimalInput');
const inputBinario = document.getElementById('binarioInput');

let modoDecimalParaBinario = true;

function converterValor() {
  if (modoDecimalParaBinario) {
    const valorDecimal = inputDecimal.value.trim();

    if (valorDecimal === '') {
      alert("Por favor, insira um valor decimal para converter.");
      return;
    }

    const numeroDecimal = Number(valorDecimal);
    if (isNaN(numeroDecimal)) {
      alert("Insira um número decimal válido!");
      return;
    }

    const parteInteira = Math.floor(numeroDecimal);
    const parteDecimal = numeroDecimal - parteInteira;

    let binario = parteInteira.toString(2);

    if (parteDecimal > 0) {
      binario += ".";
      let decimal = parteDecimal;
      let count = 0;

      while (decimal !== 0 && count < 10) {
        decimal *= 2;
        const bit = Math.floor(decimal);
        binario += bit.toString();
        decimal -= bit;
        count++;
      }
    }

    inputBinario.value = binario;

  } else {
    const valorBinario = inputBinario.value.trim();

    if (valorBinario === '') {
      alert("Por favor, insira um valor binário para converter.");
      return;
    }

    if (!/^[01]+(\.[01]+)?$/.test(valorBinario)) {
      alert("Insira um número binário válido (apenas 0, 1 e ponto opcional)!");
      return;
    }

    let [parteInteira, parteDecimal] = valorBinario.split(".");
    let decimal = parseInt(parteInteira, 2);

    if (parteDecimal) {
      for (let i = 0; i < parteDecimal.length; i++) {
        decimal += parseInt(parteDecimal[i], 2) / Math.pow(2, i + 1);
      }
    }

    inputDecimal.value = decimal.toString();
  }
}

function inverterCampos() {
  modoDecimalParaBinario = !modoDecimalParaBinario;

  if (modoDecimalParaBinario) {
    inputDecimal.placeholder = "Valor Decimal";
    inputBinario.placeholder = "Valor Binário";
    inputDecimal.disabled = false;
    inputBinario.disabled = true;
  } else {
    inputDecimal.placeholder = "Valor Decimal";
    inputBinario.placeholder = "Valor Binário";
    inputDecimal.disabled = true;
    inputBinario.disabled = false;
  }

  inputDecimal.value = '';
  inputBinario.value = '';
}

if (modoDecimalParaBinario) {
  inputDecimal.disabled = false;
  inputBinario.disabled = true;
}

btnConverter.addEventListener('click', converterValor);
btnInverter.addEventListener('click', inverterCampos);
