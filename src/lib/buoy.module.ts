import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';

@NgModule({
    imports: [
        CommonModule,
        ApolloModule,
        HttpClientModule
    ],
    exports: [
        ApolloModule // TODO: Only necessary when overwriting the Buoy service.
    ]
})
export class BuoyModule {
    constructor() { }
}
