import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Albums, Photos } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  // PHOTO_URL: string = ''
  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Albums[]>{
    return this.client.get<Albums[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id: number): Observable<Albums>{
    return this.client.get<Albums>(`${this.BASE_URL}/albums/${id}`);
  }
  createAlbum(newAlbum: Albums): Observable<Albums>{
    return this.client.post<Albums>(`${this.BASE_URL}/albums`, newAlbum);
  }
  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}`);
  }
  getPhotos(): Observable<Photos[]>{
    return this.client.get<Photos[]>(`${this.BASE_URL}/photos`);
  }
  getPhoto(id: number): Observable<Photos>{
    return this.client.get<Photos>(`${this.BASE_URL}/albums/${id}/photos`);
  }
  updateAlbumTitle(albumId: number, newTitle: string): Observable<Albums> {
    const url = `${this.BASE_URL}/albums/${albumId}`;
    const updatedAlbum = { title: newTitle } as Albums;
    return this.client.put<Albums>(url, updatedAlbum);
  }
}
