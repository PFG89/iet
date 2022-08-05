import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ObjectDTO } from 'src/app/Dto/object-dto';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  public formCrud: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService
  ) {}

  conferma:boolean=false;

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.formCrud = this.formBuilder.group({
      nome: ['', Validators.required],
      descrizione: ['', Validators.required],
      valore: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.formCrud.valid) {
      
      this.crudService.creaOggetto(
        this.formCrud.get('nome')!.value,
        this.formCrud.get('descrizione')!.value,
        this.formCrud.get('valore')!.value
      ).subscribe((resp)=>{const object:ObjectDTO = resp;
   console.log(object);
   this.conferma=true;
   this.buildForm;
   
    });
    }
  }
}
