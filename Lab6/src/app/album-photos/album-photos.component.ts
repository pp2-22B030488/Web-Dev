import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Photos } from '../models';
import { AlbumServiceService } from '../album-service.service';
import { PHOTOS } from '../database';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  // photos!: Photos;
  photos!: Photos[];
  loaded: boolean = false;
  albumsId!: number;

  constructor(private location: Location,
              private route: ActivatedRoute, 
              private albumService: AlbumServiceService, ){

}
ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    this.albumsId = Number(params.get('albumsId'));
    this.getPhotos();
  });
}
  getPhotos(){
  this.loaded = false;
  this.albumService.getPhotos().subscribe((allphotos) => {
  this.photos = allphotos.filter((photo) => photo.albumId === this.albumsId);
  this.loaded = true;
});
}
// getPhotos(){
//   this.route.paramMap.subscribe((params) => {
//     const photosId = Number(params.get('potosId'));
//     // this.loaded = false;
//     this.albumService.getPhoto(photosId).subscribe((photos) => {
//       this.photos = photos;
//       // this.loaded = true;
//     });
//     // this.albums = ALBUMS.find((albums) => albums.id === albumsId) as Albums;
//   });
// }
  goBack(): void {
    this.location.back();
  }

}
