import { View } from "./view";

export class MensagemView extends View {
  
  template(model: string): string{
    return `
      <p class="alert alert-info">${model}</p>
    `
  }

  update(model: string): void{
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
// import { Negociacoes } from "../models/negociacoes.js";

// export class NegociacoesView {
//   private elemento: HTMLElement;

//   constructor(seletor: string){
//     this.elemento = document.querySelector(seletor);
//   }

//   template(model: Negociacoes): string{
//     return `
//       <table class="table table-hover table-bordered">
//         <thead>
//           <tr>
//             <th>DATA</th>
//             <th>QUANTIDADE</th>
//             <th>VALOR</th>
//           </tr>
//         </thead>
//         <tbody>
//             ${model.listar().map(negociacao => {
//               return `
//                 <tr>
//                   <td>${new Intl.DateTimeFormat()
//                       .format(negociacao.data)}
//                   </td>
//                   <td>${negociacao.quantidade}</td>
//                   <td>${negociacao.valor}</td>
//                 </tr>
//               `
//             }).join('')}
//         </tbody>
//       </table>
//     `
//   }

//   update(model: Negociacoes): void{
//     const template = this.template(model);
//     console.log(template)
//     this.elemento.innerHTML = template;
//   }
// }