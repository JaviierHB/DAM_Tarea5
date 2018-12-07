import { Injectable } from "@angular/core";
import { Http } from "@angular/http"
import { dateSortValue } from "ionic-angular/umd/util/datetime-util";

@Injectable()
export class ApiRest {
  public alumnos: any;
  public materias: any;
  //recibe el parametro y crea el atributo
  constructor(private http: Http) {
    this.getUsers();
    this.getMaterias();
  }
  getMaterias() {
    this.http.get("http://127.0.0.1:8080/materias.json")
      .subscribe(
        (res) => { //Todo Ok
          this.materias = res.json();
          console.log("OK");
        },
        function (err) { //Error
          console.log("ERROR");
        }
      );
  }

  getUsers() {
    this.http.get("http://127.0.0.1:8080/users.json")
      .subscribe(
        (res) => { //Todo Ok
          this.alumnos = res.json();
          console.log("OK");
          console.log(this.alumnos);
        },
        function (err) { //Error
          console.log("ERROR");
          console.log(err);
        }
      );
  }
}
