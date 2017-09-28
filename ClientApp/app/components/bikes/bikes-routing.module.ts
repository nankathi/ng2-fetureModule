import { NgModule} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { BikesComponent } from './bikes.component';

export const ROUTES: Routes = [
    { path: '', redirectTo:'bikes',pathMatch:'full' },
    { path: 'bikes', component: BikesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
})
export class BikesRoutingModule {
}