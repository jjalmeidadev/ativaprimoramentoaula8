class FilaAtendimento {
  constructor() {
    this.itens = [];
  }

  enfileirar(item) {
    this.itens.push(item);
    console.log(`'${item}' foi adicionado à fila.`);
  }

  desenfileirar() {
    if (this.vazia()) {
      console.log('A fila está vazia.');
      return null;
    }
    const removido = this.itens.shift();
    console.log(`'${removido}' foi removido da fila.`);
    return removido;
  }

  frente() {
    return this.itens[0];
  }

  vazia() {
    return this.itens.length === 0;
  }

  escrever() {
    console.log('Fila:', this.itens.join(' -> ') || 'vazia');
  }
}

const filaatendimento = new Fila();
filaatendimento.enfileirar('Aluno A');
filaatendimento.enfileirar('Aluno B');
filaatendimento.enfileirar('Aluno C');
filaatendimento.enfileirar('Aluno D');
console.log('Primeiro da fila:' + filaatendimento.frente());
filaatendimento.desenfileirar('Aluno A');
filaatendimento.escrever();

class PilhaDocumentos {
  constructor() {
    this.itens = [];
  }

  empilhar(item) {
    this.itens.push(item);
    console.log(`'${item}' foi empilhado.`);
  }

  desempilhar() {
    if (this.vazia()) {
      console.log('A pilha está vazia.');
      return null;
    }
    const removido = this.itens.pop();
    console.log(`'${removido}' foi desempilhado.`);
    return removido;
  }

  topo() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  vazia() {
    return this.itens.length === 0;
  }

  escrever() {
    console.log('Documentos pendentes:', this.itens.slice().reverse().join(' <- topo'));
  }
}

const pilhadocumentos = new PilhaDocumentos();
pilhadocumentos.empilhar('Documento A');
pilhadocumentos.empilhar('Documento B');
pilhadocumentos.desempilhar('Documento B');
pilhadocumentos.topo();
pilhadocumentos.escrever();




