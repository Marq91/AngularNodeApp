/* Realizar un get request. Para hacer esto se crea un 
servicio para obtener los datos y luego se desplegara los datos
*/ 
import{ Http} from '@angular/http'
import{ Injectable } from '@angular/core'

//Crear clase. Necesitaremos un constructor para inyectar Http
@Injectable()
export class ApiService{
    constructor(private http: Http){}
    
    /*//Se debe obtener la url del servidor http://localhost:3000/posts. 
    Luego subscribe para recibir los datos una vez q entran y esperamos q se transmita una respuesta
     */
    getMessages(){
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            console.log(res);
        })
    }
}

