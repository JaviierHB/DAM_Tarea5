import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
@Injectable()
export class MateriasRest {
  public materias: any;
  public materias_alumno:any= [];
  constructor(private http: Http) {

  }
  getMaterias(nc): void {
    this.http.get("http://127.0.0.1:8080/materias.json")
    .subscribe((res) => {
          this.materias = res.json();
          console.log(this.materias);
          this.materias_alumno= [];
          console.log(nc);
          this.materias.forEach((element) => {
              if(element.nc==nc){
                element.materias.forEach((element2) => {
                      this.materias = element2.json();
                      console.log(element2);
                      this.materias_alumno.push(element2);
                  });
             }
          });
    },
    (err) => {
      console.log(err);
    });

  }
}
