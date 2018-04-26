import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { MTCCommonModule, MTCCoreModule, SimpleConfirmationComponent } from 'mtc-modules';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		CoreModule,
		MTCCommonModule,
		MTCCoreModule,
		RouterModule.forRoot(routes, {useHash: true}),
		ClickOutsideModule,
	],
	providers: [SimpleConfirmationComponent],
	entryComponents: [SimpleConfirmationComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
