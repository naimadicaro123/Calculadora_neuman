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

    const decimal = parseInt(valorDecimal, 10);
    if (isNaN(decimal)) {
      alert("Insira um número decimal válido!");
      return;
    }

    inputBinario.value = decimal.toString(2);
  } else {
    const valorBinario = inputBinario.value.trim();

    if (valorBinario === '') {
      alert("Por favor, insira um valor binário para converter.");
      return;
    }

    if (!/^[01]+$/.test(valorBinario)) {
      alert("Insira um número binário válido (apenas 0 e 1)!");
      return;
    }

    inputDecimal.value = parseInt(valorBinario, 2);
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
