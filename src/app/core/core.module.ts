
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MTCCommonModule } from 'mtc-modules';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import {
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';

import {
	MatDialogModule,
	MatButtonModule,
	MatInputModule,
	MatRadioModule,
	MatSelectModule,
	MatAutocompleteModule,
	MatCheckboxModule,
	MatTableModule,
	MatMenuModule,
} from '@angular/material';

import {
	AddDragonComponent,
	DragonListComponent,
	DragonComponent,
	NotesModalComponent,
	BattleDragonsComponent,
} from './components';

import {
	DragonService
} from './services';

import {
	LowercasePipe
} from './pipes';

const dialogComponents = [
];

const components = [
	AddDragonComponent,
	DragonListComponent,
	DragonComponent,
	NotesModalComponent,
	BattleDragonsComponent,
	...dialogComponents
];

const directives = [
];

const pipes = [
	LowercasePipe
];

const services = [
	DragonService
];

const modules = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	MatDialogModule,
	MatButtonModule,
	MatInputModule,
	MatRadioModule,
	MatSelectModule,
	MTCCommonModule,
	MatAutocompleteModule,
	MatCheckboxModule,
	MatTableModule,
	FlexLayoutModule,
	RouterModule,
	MatMenuModule,
];

@NgModule({
	declarations: [components, directives, pipes,],
	imports: modules,
	providers: [services, pipes],
	exports: [components, directives, pipes],
	entryComponents: dialogComponents
})
export class CoreModule {

};