import { environment } from "src/environments/environment";

const base_url = environment.baseUrl

export class Usuario {
   
    constructor(
        
        public username: string,
        public email: string,
        public password?: string,
        public img?: string,
        public google?: boolean,
        public role?: string,
        public uid?: string
    ) {}

    get imagenUrl() {
        if (this.img?.includes('https')) {
            return this.img;
        }

        if(this.img) {
            return `${base_url}/upload/${this.img}`
        } else {
            return `${base_url}/upload/no-image`;
        }
    }
}