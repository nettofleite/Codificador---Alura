/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

const entradaTexto = document.querySelector("#inTexto");
const saidaTexto = document.querySelector("#outTexto")
var criptografar = document.querySelector("#cripButton");
var descriptografar = document.querySelector("#deCripButton"); 
var copiar = document.querySelector("#copy");
var novoTexto1 = "";
var novoTexto2 = "";
var novoTexto3 = "";
var novoTexto4 = "";
var novoTexto5 = "";



function crip(){

	var	novoTexto1 = entradaTexto.value.replaceAll("e", "enter")
	var	novoTexto2 = novoTexto1.replaceAll("i", "imes")
	var	novoTexto3 = novoTexto2.replaceAll("a", "ai")
	var	novoTexto4 = novoTexto3.replaceAll("o", "ober")
	var	novoTexto5 = novoTexto4.replaceAll("u", "ufat")
		
	var resultado = novoTexto5;
	return saidaTexto.textContent = resultado;
}


function de_crip(){

	var	novoTexto1 = entradaTexto.value.replaceAll("enter", "e")
	var	novoTexto2 = novoTexto1.replaceAll("imes", "i")
	var	novoTexto3 = novoTexto2.replaceAll("ai", "a")
	var	novoTexto4 = novoTexto3.replaceAll("ober", "o")
	var	novoTexto5 = novoTexto4.replaceAll("ufat", "u")
		
	var resultado = novoTexto5;
	return saidaTexto.textContent = resultado;
}

function copiarTexto() {
        let textoCopiado = document.querySelector("#outTexto");
        textoCopiado.select();
        document.execCommand("copy");
        alert("Texto copiado para área de transferência.");
    }





criptografar.onclick = crip;
descriptografar.onclick = de_crip;
copiar.onclick = copiarTexto;
