import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  email: string = 'promucha@gmail.com';
  copyEmail() {
    navigator.clipboard
      .writeText(this.email)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((err) => console.error(err));
  }
}
