import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Albums } from '../models';
import { ALBUMS } from '../database';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumServiceService } from '../album-service.service';
import { timeStamp } from 'console';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Albums[];
  newAlbum: Albums;
  loaded: boolean = false;

  constructor(private albumService: AlbumServiceService,
              private route: ActivatedRoute){
    this.newAlbum = {
      userId: 100,
      id: 100,
      title: '',
      info: ''
      };
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album)
      this.newAlbum = {} as Albums;
    })
  }
  getAlbums(){
        // this.albums = ALBUMS;
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
    this.albums = albums;
    this.loaded = true;
    });
  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((p) => p.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {

    });
  }

}
