# JavaScript: introdução a Orientação a Objetos

Esse README é um compilado dos assuntos que julguei serem mais importantes ao fazer o curso [JavaScript: introdução a Orientação a Objetos](https://www.alura.com.br/curso-online-javascritpt-orientacao-objetos) da **Alura**. Esse arquivo serve para fixar um pouco do que entendi e para uma futura consulta.

## Configurações do Node

Utilizando o node como pré requisito para o curso é preciso criar o arquivo **package.json** (`npm init -y`) responsável pelas configurações do node.

Vamos utilizar o sistema de módulos do javascript moderno, para isso precisamos acresentar `"type": "module"` em **package.json**.

```json
{
  "name": "javascript-orientado-a-objetos",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node --experimental-modules index.js"
  },
  "keywords": [],
  "author": "Bruno Ferreira",
  "license": "ISC",
  "type": "module"
}
```

> O node na sua versão 13+ já entende o sistemas de módulos de forma experimental. Como utilizei a versão 12.16.3, a mais estável atualmente, precisei utilizar a flag `--experimental-modules` na execução do arquivo **index.js**

## Atributo privado... por convensão

Um atributo privado só pode ser acessado pela classe que o criou. Por convensão o método privado no javascript é identificado pelo \_ (_undescore_) antecedendo o nome.

```javascript
export class ContaCorrente {
  agencia;
  _saldo;
  _cliente;
```

Exemplo de uso em um método

```javascript
export class ContaCorrente {
  agencia;
  _saldo;
  _cliente;

  depositar(valor) {
    if (valor >= 0) return;

    this._saldo += valor;

    return valor;
  }
```

## Atributo estático

O atributo estático se referencia à própria classe e não à instância. A palavra reservada `static` antecede o nome

```javascript
export class ContaCorente {
  agencia;
  _saldo;
  _cliente;

  static numeroDeContas = 0;
```

Neste exemplo o número de contas irá incrementar ao se instanciar um objeto da classe **ContaCorrente**.

```javascript
export class ContaCorente {
  agencia;
  _saldo;
  _cliente;

  static numeroDeContas = 0;

  constructor() {
    ContaCorrente.numeroDeContas++;
  }
```

Instanciando um objeto da classe **ContaCorrente**

```javascript
const fulano = new Cliente();
```

## Métodos assessores

Para garantir que um atributo privado não tenha seu valor modificado fora da clase que o criou é possível utilizar os métodos assessores `get` e `set`

```javascript
export class ContaCorrente {
  agencia;
  _saldo;
  _cliente;

  get saldo() {
    return this._saldo;
  }
```

Dessa forma se houver a tentativa de inserir um valor para o atributo privado **saldo** fora da classe ocorrerá um erro.

```javascript
const fulano = new Cliente("Fulano da Silva", 11122233309);

const contaCorrente1 = new ContaCorrente(123, fulano, 500);

contaCorrente1.saldo = 0;

/* SAÍDA
TypeError: Cannot set property saldo of #<ContaCorrente> which has only a getter
*/
```
