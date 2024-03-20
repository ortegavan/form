import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TipoCampo } from '../../enums/tipo-campo';
import { FormComponent } from '../../shared/form/form.component';

@Component({
    selector: 'app-exemplo',
    standalone: true,
    templateUrl: './exemplo.component.html',
    styleUrl: './exemplo.component.css',
    imports: [MatButtonModule, FormComponent],
})
export class ExemploComponent {
    campos = [
        {
            nome: 'nome',
            titulo: 'Nome',
            tipo: TipoCampo.texto,
            obrigatorio: true,
        },
        {
            nome: 'email',
            titulo: 'E-mail',
            tipo: TipoCampo.email,
            obrigatorio: true,
        },
        {
            nome: 'telefone',
            titulo: 'Telefone',
            tipo: TipoCampo.texto,
            obrigatorio: false,
            mascara: '(00) 00000-0000',
        },
        {
            nome: 'nascimento',
            titulo: 'Data de nascimento',
            tipo: TipoCampo.data,
            obrigatorio: false,
            mascara: '00/00/0000',
        },
    ];

    onSubmit(value: object): void {
        console.log(value);
    }
}
