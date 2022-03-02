import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  lista:Mascota[] = [];
  constructor(private Mascota:MascotaService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Mascota.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              nombre:item.payload.doc.data().nombre,
              sexo:item.payload.doc.data().sexo,
              raza:item.payload.doc.data().raza,
              tamano:item.payload.doc.data().tamano,
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Mascota){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de Borrar?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    })
  }
  buscar(){
    this.Mascota.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              nombre:item.payload.doc.data().nombre,
              sexo:item.payload.doc.data().sexo,
              raza:item.payload.doc.data().raza,
              tamano:item.payload.doc.data().tamano,

              
            }
          );

        })
      });
  }

}
