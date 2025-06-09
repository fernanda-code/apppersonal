import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class ContactComponent {

  nome: string = '';
  email: string = '';
  mensagem: string = '';

  constructor(private toastController: ToastController) {}

  async enviarMensagem() {
    if (this.nome && this.email && this.mensagem) {
      this.nome = '';
      this.email = '';
      this.mensagem = '';

      const toast = await this.toastController.create({
        message: 'Mensagem enviada com sucesso!',
        duration: 2000,
        position: 'bottom',
        color: 'success'
      });

      await toast.present();
    }
  }
}
