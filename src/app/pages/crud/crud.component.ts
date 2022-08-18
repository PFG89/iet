import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { ListaObjectDto } from 'src/app/Dto/listaObjectDto';
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
    private crudService: CrudService,
  ) {}

  conferma: boolean = false;
  lista:ObjectDTO[];
  

  ngOnInit() {
    this.buildForm();

    this.crudService.listaOggetti().subscribe((resp)=>{this.lista = resp.list;})
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
      this.crudService
        .creaOggetto(
          this.formCrud.get('nome')!.value,
          this.formCrud.get('descrizione')!.value,
          this.formCrud.get('valore')!.value
        )
        .subscribe((resp) => {
          const object: ObjectDTO = resp;
          console.log(object);
          this.conferma = true;
          this.refresh();
          
        });
    }
  }

  //svuotaForm(){
   // this.formCrud.reset();
  //}



  get f() {
    return this.formCrud.controls;
  }

  refresh(): void {
    window.location.reload();
}
 

}

