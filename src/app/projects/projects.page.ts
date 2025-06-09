import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], 
})
export class ProjectsPage {
  projetos = [
    
    {
      titulo: 'APP PWA',
      descricao: 'App em pwa sobre animaizinhos.',
      detalhes: 'Este projeto é um Progressive Web App desenvolvido com HTML, CSS (via Bootstrap) e JavaScript, com foco em responsividade e usabilidade. O AppPwa permite que usuários cadastrem seus animaizinhos, enviem fotos e preencham um formulário com informações importantes. A proposta é oferecer uma experiência simples e rápida diretamente do navegador, com suporte para instalação no celular.',
      link: 'https://github.com/fernanda-code/apppwa'
    },
    {
      titulo: 'APP Todo List',
      descricao: 'App de lista de tarefas com ionic.',
      detalhes: 'Este projeto é uma aplicação de lista de tarefas (TodoList) desenvolvida com Ionic e Angular. Ele permite que os usuários adicionem, editem e excluam tarefas com imagens e descrições. A interface é responsiva e moderna, com suporte a ações por botão flutuante e ícones intuitivos. Conta também com tela de login e modal para detalhamento das tarefas. Ideal para praticar a organização pessoal e o controle de atividades diárias.',
      link: 'https://github.com/fernanda-code/apptodolist'
    },
    {
      titulo: 'APP de Apresentação Pessoal',
      descricao: 'Aplicativo pessoal com informações, habilidades e projetos.',
      detalhes: 'Este aplicativo foi desenvolvido com o framework Ionic + Angular com foco em apresentar informações pessoais de forma organizada, responsiva e estilizada. A aplicação conta com telas como “Sobre Mim”, “Habilidades”, “Projetos” e “Contato”, cada uma delas com navegação funcional, menu lateral e design agradável com cores suaves. O projeto também inclui o uso de animações simples, barra de progresso e envio de formulário com feedback por toast, representando uma integração completa entre layout e funcionalidades modernas.',
      link: 'https://github.com/fernanda-code/apppersonal'
    }
  ];

  constructor(private modalController: ModalController) {}

  async abrirProjeto(projeto: any) {
    const modal = await this.modalController.create({
      component: ProjectDetailsComponent,
      componentProps: { projeto }
    });
    await modal.present();
  }
}

