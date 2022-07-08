document.getElementById('nome').addEventListener('keyup', gerarLogin);
document.getElementById('formulario').addEventListener('submit', submeter);
document.getElementById('sobrenome').addEventListener('keyup', gerarLogin);

const cep = document.getElementById('cep');
cep.addEventListener('blur', pesquisarCep);

function gerarLogin(){
const nome = document.getElementById('nome').value;
const sobrenome = document.getElementById('sobrenome').value;
const login = nome + "." + sobrenome;
document.getElementById('login').value = login.toLowerCase();
}

async function pesquisarCep() {

	const cepDigitado = cep.value;

	if (cepDigitado.length != 8)
	{
		alert("erroS");
	}

    else
	{
		const url = `http://viacep.com.br/ws/${cepDigitado}/json/`;

		const retornoUrl = await fetch(url);

		const endereco = await retornoUrl.json();

		if(endereco.erro == "true")
		{
			alert("Cep Invalido")
		}
        else
		{
        document.getElementById('endereco').value = (endereco.logradouro);

        document.getElementById('complemento').value = (endereco.complemento);

        document.getElementById('bairro').value = (endereco.bairro);

        document.getElementById('cidade').value = (endereco.localidade);

        document.getElementById('estado').value = (endereco.uf);
        }
    }
}

function submeter(e){
	
	//previne o reload da página
    e.preventDefault();
	
	//remove a classe d-none da tabela que a impede de aparecer
    document.getElementById('tabela-dados').classList.remove('d-none');
	
	//preenche os campos da tabela com os valores do formulario
    document.getElementById("t-nome").innerHTML  = document.getElementById("nome").value;
	document.getElementById("t-sobrenome").innerHTML  = document.getElementById("sobrenome").value;
	document.getElementById("t-email").innerHTML  = document.getElementById("email").value;
	document.getElementById("t-login").innerHTML  = document.getElementById("login").value;
	document.getElementById("t-senha").innerHTML  = document.getElementById("senha").value;
	document.getElementById("t-cep").innerHTML  = document.getElementById("cep").value;
	document.getElementById("t-endereco").innerHTML  = document.getElementById("endereco").value;
	document.getElementById("t-complemento").innerHTML  = document.getElementById("complemento").value;
	document.getElementById("t-bairro").innerHTML  = document.getElementById("bairro").value;
	document.getElementById("t-cidade").innerHTML  = document.getElementById("cidade").value;
	document.getElementById("t-estado").innerHTML  = document.getElementById("estado").value;
	document.getElementById("t-github").innerHTML  = document.getElementById("perfil").value;
    document.getElementById("t-academia").innerHTML  = document.getElementById("academia").value;
    document.getElementById("t-professor").innerHTML  = document.getElementById("professor").value;
    var termos = "Não concorda";
    if(document.getElementById('termos').checked)
        termos = "Concordo";
    
    var info = "Não Deseja";
    if(document.getElementById('infoDeseja').checked)
        info = "Deseja";
    
    document.getElementById("t-termos").innerHTML  = termos;
    document.getElementById("t-info").innerHTML  = info
	
    alert ("Dados enviados com sucesso");

	//reseta o formulario
    document.getElementById('formulario').reset();

	//seta o focus para o campo Nome
    nome.focus();
}