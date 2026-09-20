# Desafio 11: Valores Falsy, Boolean() e NaN em JavaScript

## Diferença entre Truthy e Falsy
No JavaScript, um valor **falsy** é aquele avaliado como `false` quando convertido para um contexto booleano. Existem **8 valores falsy** principais na linguagem. Qualquer outro valor fora dessa lista é considerado **truthy** (verdadeiro):

1. `false` (o próprio booleano falso)
2. `0` (o número zero)
3. `-0` (zero negativo)
4. `0n` (BigInt zero)
5. `""` (string vazia — sem espaços)
6. `null` (ausência intencional de valor)
7. `undefined` (valor não atribuído)
8. `NaN` (Not-a-Number)

---

## O que a função `Boolean()` faz?
A função `Boolean()` realiza a **coerção explícita** de um valor para o tipo booleano (`true` ou `false`).

Ela avalia o valor passado dentro dos parênteses e verifica se ele pertence à lista de valores *falsy* ou se é *truthy*:
- `Boolean(0)` $\rightarrow$ `false`
- `Boolean("Texto")` $\rightarrow$ `true`

---

## Por que `NaN === NaN` retorna `false`?
O `NaN` significa *"Not-a-Number"* (Não é um Número) e indica que uma operação matemática gerou um resultado inválido ou irrepresentável. 

Pela especificação da linguagem, como duas operações que falharam podem ter falhado por motivos completamente diferentes, o **`NaN` não é considerado igual a nenhum outro valor, nem mesmo a outro `NaN`**.

---

## Como o `Number.isNaN()` resolve isso?
Como a comparação direta com `===` sempre retorna `false` ao checar um `NaN`, o método **`Number.isNaN()`** foi criado especificamente para isso. Ele serve para **detectar e confirmar de forma confiável se um valor é o `NaN`**.

```javascript
const contaInvalida = "texto" * 5;

console.log(contaInvalida === NaN);        // false (não funciona)
console.log(Number.isNaN(contaInvalida)); // true (forma correta)