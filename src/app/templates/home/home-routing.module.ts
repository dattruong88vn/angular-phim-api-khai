import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: '', loadChildren: './../../pages/trang-chu/trang-chu.module#TrangChuModule'},
    {path: 'phim', loadChildren: './../../containers/danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule'},
    {path: 'phim/:id', loadChildren: './../../pages/chi-tiet-phim/chi-tiet-phim.module#ChiTietPhimModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
