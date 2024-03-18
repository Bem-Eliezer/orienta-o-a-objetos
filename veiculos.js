function Veiculo(tipo) {
	this.tipo = tipo;
}

function Automovel(modelo, quantidadeRodas, quantidadePassageiro, ipva) {
	this.modelo = modelo;
	this.quantidadeRodas = quantidadeRodas;
	this.quantidadePassageiro = quantidadePassageiro;
	// this.ipva = ipva;
	
	let _ipva = ipva;

	this.getIpva = function() {
		return _ipva;
	}

	this.setIpva = function(valor) {
		if(typeof valor === 'number') {
			_ipva = valor;
		}
	}

	this.reajuste = function() {
		const novoValor = _ipva * 1.03;
		_ipva = novoValor;
	}
}

function Carro(modelo) {
	Automovel.call(this, modelo, 4, 5, 1000);

	this.reajuste = function() {
		const novoValor = this.getIpva() * 1.2;
		this.setIpva(novoValor);
	}
}

function Onibus(modelo) {
	Automovel.call(this, modelo, 6, 30, 10000);

	this.reajuste = function() {
		const novoValor = this.getIpva() * 1.8;
		this.setIpva(novoValor);
	}
}

const automovel1 = new Automovel("Motocicleta", 2, 2, 200);
const automovel2 = new Carro("Carro");
const automovel3 = new Automovel("Onibus", 6, 30, 10000);

automovel1.reajuste();
console.log(automovel1.getIpva());

automovel2.reajuste();
console.log(automovel2.getIpva());

automovel3.reajuste();
console.log(automovel3.getIpva());

