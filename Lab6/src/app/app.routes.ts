import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'albums', component: AlbumsComponent, title: 'Albums'},
    {path: 'albums/:albumsId', component: AlbumDetailComponent, title: 'Album-detail'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'albums/:albumsId/photos', component: AlbumPhotosComponent, title: 'Album-photos'},
    {path: '**', component: NotFoundComponent, title: 'Not Found'}
];
