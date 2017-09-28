import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AppNgMaterialModule } from './app-ngmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        //AppNgMaterialModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    exports: [
        CommonModule,
        //AppNgMaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
}
