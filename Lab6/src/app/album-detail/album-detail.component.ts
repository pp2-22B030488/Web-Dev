import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { ALBUMS } from '../database';
import { Albums, Photos } from '../models';
import { AlbumServiceService } from '../album-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  photos!: Photos[];
  albums!: Albums;
  newTitle!: string;
  // loaded: boolean = false;
  constructor(private route: ActivatedRoute, 
              private albumService: AlbumServiceService, 
              private location: Location ){

  }
  ngOnInit(): void {
    this.getAlbums();
  }
  
  getAlbums(){
    this.route.paramMap.subscribe((params) => {
      const albumsId = Number(params.get('albumsId'));
      // this.loaded = false;
      this.albumService.getAlbum(albumsId).subscribe((albums) => {
        this.albums = albums;
        this.newTitle = albums.title;

        // this.loaded = true;
      });
      // this.albums = ALBUMS.find((albums) => albums.id === albumsId) as Albums;
    });
  }

  getPhotos(){
  this.albumService.getPhotos().subscribe((photos) => {
  this.photos = photos;
});
}

updateAlbum() {
  
  this.route.paramMap.subscribe((params) => {
    const albumsId = Number(params.get('albumsId'));
  this.albumService.updateAlbumTitle(albumsId, this.newTitle).subscribe((updated) => {
    alert('ss');
    this.albums.title = updated.title;
  });

  });
}
  goBack(): void {
    this.location.back();
  }
}
