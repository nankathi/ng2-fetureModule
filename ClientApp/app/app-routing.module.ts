import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesModule } from './components/bikes/bikes.module';
import { SharedModule } from './app.module.shared';
//import { AppNgMaterialModule } from './app-ngmaterial.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { AccessoriesComponent } from './components/accessories/accessories.component';
//import { BikesComponent } from './components/bikes/bikes.component';
//import { ClothingComponent } from './components/clothing/clothing.component';
//import { AWCComponentsComponent } from './components/awccomponents/awccomponents.component';
export const ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', loadChildren:()=>BikesModule },
    //{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
    imports: [
        SharedModule,
        //AppNgMaterialModule,
    //    RouterModule.forRoot([
    //    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //    { path: 'dashboard', component: DashboardComponent },
    //    { path: 'accessories', component: AccessoriesComponent },
    //    { path: 'bikes', component: BikesComponent },
    //    { path: 'clothing', component: ClothingComponent },
    //    { path: 'awccomponents', component: AWCComponentsComponent },
    //    { path: '**', redirectTo: 'dashboard' }
    //])],
        RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}