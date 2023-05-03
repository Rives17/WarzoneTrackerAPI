import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  async uploadFile(file: File, id: string) {

    try {
      const url = `${base_url}/upload/${id}`;
      const formData = new FormData();
      formData.append('imagen', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
    });

    const data = await resp.json();

    if (data) {
      return data.nameFile;

    } else {
      console.log(data.msg);
      return false;
      
    }
  }

    catch (error) {
      console.log(error);
      return false;
    }
  }
}
