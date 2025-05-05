class FilaAtendimento {
  constructor() {
    this.itens = [];
  }

  // Adiciona um item ao final da fila
  enfileirar(item) {
    this.itens.push(item);
    console.log(`📥 '${item}' entrou na fila.`);
  }

  // Remove o item do início da fila
  desenfileirar() {
    if (this.estaVazia()) {
      console.log('⚠️ A fila está vazia. Nenhum item para remover.');
      return null;
    }
    const removido = this.itens.shift();
    console.log(`🚪 '${removido}' saiu da fila.`);
    return removido;
  }

  // Mostra o primeiro da fila
  frente() {
    return this.itens[0];
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.itens.length === 0;
  }

  // Imprime a fila atual
  imprimir() {
    console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
  }
}

const filaatendimento = new Fila();
filaatendimento.enfileirar('Aluno A');
filaatendimento.enfileirar('Aluno B');
filaatendimento.enfileirar('Aluno C');
filaatendimento.enfileirar('Aluno D');
console.log('👀 Primeiro da fila:' + filaatendimento.frente());
filaatendimento.desenfileirar('Aluno A');
filaatendimento.imprimir();

class PilhaDocumentos {
  constructor() {
    this.itens = [];
  }

  empilhar(item) {
    this.itens.push(item);
    console.log(`✔️ Elemento '${item}' empilhado.`);
  }

  desempilhar() {
    if (this.estaVazia()) {
      console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
      return null;
    }
    const removido = this.itens.pop();
    console.log(`❌ Elemento '${removido}' desempilhado.`);
    return removido;
  }

  topo() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  imprimir() {
    console.log('Documentos pendentes:', this.itens.slice().reverse().join(' <- topo'));
  }
}

const pilhadocumentos = new PilhaDocumentos();
pilhadocumentos.empilhar('Documento A');
pilhadocumentos.empilhar('Documento B');
pilhadocumentos.desempilhar('Documento B');
pilhadocumentos.topo();
pilhadocumentos.imprimir();




