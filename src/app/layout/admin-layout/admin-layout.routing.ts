import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { MascotaComponent } from "src/app/components/mascota/mascota.component";
import {  RouterModule } from '@angular/router';
import { MascotanuevoComponent } from "src/app/components/mascota/mascotanuevo/mascotanuevo.component";
//export 
const AdminLayoutRoutes:Routes=[
    {
        path:'mascota',
        component:MascotaComponent
    },
    {
        path:'mascotaform',
        component:MascotanuevoComponent
    },
    {
        path:'mascotaform/:id',
        component:MascotanuevoComponent
    },


]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}