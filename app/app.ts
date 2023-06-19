import { Negociacao } from "./models/negociacao.ts";

const negociacao = new Negociacao(new Date());
console.log(negociacao.volume);

