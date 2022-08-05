import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Oggetti } from 'src/app/command/oggetti';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { 
  }
  
   creaOggetto(nome:string, descrizione:string, valore:number){ //funzione che preleva i dati nome, descrizione, valore dal form per passarli nel Model (oggettoModel) con struttura command e inviarli tramite questo al BE
     
    const oggettoModel = new Oggetti(); //creo un oggetto "oggettoModel" di tipo command (Oggetti) per inviare al BE i dati nome, descrizione, valore
     oggettoModel.nome = nome; //mette il valore di nome nel campo nome dell'oggetto oggettoModel;
     oggettoModel.descrizione = descrizione;
     oggettoModel.valore = valore;

   return this.http.post<any>('http://localhost:8080/Item', oggettoModel); //chiamati di tipo post all'indirizzo be passando i dati dell'oggettoModel 

  }
}
