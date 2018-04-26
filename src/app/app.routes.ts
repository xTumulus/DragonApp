import { Routes } from '@angular/router';

import {
	AddDragonComponent,
	DragonListComponent,
	BattleDragonsComponent,
} from './core';

export const routes: Routes = [
	{ path: 'dragons/add', component: AddDragonComponent},
	{ path: 'dragons', component: DragonListComponent},
	{ path: 'dragons/battle', component: BattleDragonsComponent},
	{ path: '**', redirectTo: 'dragons', pathMatch: 'full'}
];
