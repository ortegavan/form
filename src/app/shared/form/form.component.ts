import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList,
    ViewChildren,
    inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    ReactiveFormsModule,
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IMask } from 'angular-imask';
import { Campo } from '../../models/campo';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
})
export class FormComponent implements OnInit, AfterViewInit {
    @Input() titulo!: string;
    @Input() subtitulo!: string;
    @Input({ required: true }) campos!: Campo[];
    @Output() submit = new EventEmitter<object>();
    @ViewChildren('controle') controles!: QueryList<ElementRef>;
    form!: FormGroup;
    fb = inject(FormBuilder);

    ngOnInit(): void {
        if (this.campos) {
            this.form = this.fb.group({});
            this.campos.forEach((campo) => {
                let validators = [];
                if (campo.obrigatorio) {
                    validators.push(Validators.required);
                }
                if (campo.tipo == 1) {
                    validators.push(Validators.email);
                }
                this.form.addControl(
                    campo.nome,
                    this.fb.control('', validators)
                );
            });
        }
    }

    ngAfterViewInit(): void {
        this.controles.forEach((controle, index) => {
            if (this.campos[index].mascara) {
                IMask(controle.nativeElement, {
                    mask: this.campos[index].mascara,
                });
            }
        });
    }

    onSubmit(): void {
        if (this.form.valid) {
            this.submit.emit(this.form.value);
        }
    }
}
