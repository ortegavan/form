import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
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
export class FormComponent implements OnInit {
    @Input() titulo!: string;
    @Input() subtitulo!: string;
    @Input({ required: true }) campos!: Campo[];
    @Output() submit = new EventEmitter<object>();
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

    onSubmit(): void {
        this.submit.emit(this.form.value);
    }
}
