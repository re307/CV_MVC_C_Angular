import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import SweetAlet from 'sweetalert2'
import { jq } from 'jquery';
import { CVService } from '../service/cv.service';

//material-dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({

  selector: 'td-app',
  templateUrl: './componente-td.component.html',
  styleUrls: ['./componente-td.component.css']

})
export class tdComponent implements OnInit{

  gustoControl = new FormControl('');

  @Input() dato: string;

  @Input() datosPdre: any[];
  @Input() IdElement: any[];
  @Input() NomHeder: any[];
  private dataPadre: any[];
  private Keys: string[];
  animal: string = "";
  name: string = "";

  constructor(protected cvService: CVService, public dialog: MatDialog) {
  }
  ngOnInit() {
    this.dataPadre = this.datosPdre;
    //console.log(this.datosPdre);
    //console.log("Los datos padres son de "+this.dato);
  }
  mensaje() {
    console.log(this.dato);
    console.log(this.datosPdre);
    console.log(this.IdElement);
    console.log(this.NomHeder);
    let htmlDatos = "<div calss='container'><div class='row'>";
    this.Keys = Object.keys(this.dataPadre);
    console.log(this.Keys);
    this.Keys.forEach((value) => {
      htmlDatos = htmlDatos + "<div class='col-4'>" + this.dataPadre[value]+"</div>";
    });
    htmlDatos = htmlDatos + "</div></div>";
    //alert("Hola");
    SweetAlet.fire({
      title: "Datos de la fila",
      //text: "Hola Mundo",
      icon: "success",
      html:htmlDatos
      //type: "succes"
    });
  }
  TomarDesicion() {
    console.log(this.dato);
    console.log(this.datosPdre);
    console.log(this.IdElement);
    console.log(this.NomHeder);
    SweetAlet.fire({
      title: "Desaa Editar",
      text: "Editaria " + this.NomHeder + " del Id " + this.dataPadre.id,
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText:"Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      preConfirm: (result) => {
        console.log("TomarDesicion() preConfirm: result");
        console.log(result);
        if (result) {
          this.Editar();
        }
      }
      //html: htmlDatos
      //type: "succes"
    }).then((result) => {
      //console.log("TomarDesicion() then: result");
      //console.log(result);
      //if (result.isConfirmed) {
      //  this.Editar();
      //}
      //if (!result.isConfirmed) {
      //  this.Eliminar();
      //}
    });

  }
  Editar() {
    console.log("Editar dato");
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }
  //Eliminar() {

  //  alert('Listo para eliminar');

  //}
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData)
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

