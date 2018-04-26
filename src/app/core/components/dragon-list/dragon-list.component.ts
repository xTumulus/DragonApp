import { Component, OnInit } from '@angular/core';
import { DragonService } from '../../services';

@Component({
	selector: 'app-dragon-list',
	templateUrl: './dragon-list.component.html',
	styleUrls: ['./dragon-list.component.less']
})
export class DragonListComponent implements OnInit {

	listFilters = [
		{displayValue: 'Name', value: 'name'},
		{displayValue: 'Color', value: 'color'},
		{displayValue: 'Type', value: 'type'},
		{displayValue: 'Power', value: 'power'},
		{displayValue: 'Wings', value: 'wings'},
		{displayValue: 'Notes', value: 'notes'},
		{displayValue: 'Owner', value: 'owner'},
	];

	columnsToDisplay = ['image','name','color','type','power','wings','notes','owner',];

	dragonData = [];
	displayDragons = [];
	filterType: string;
	filterQuery: string;

	constructor(private dragonService: DragonService) {}

	ngOnInit() {
		this.dragonService.getDragons().subscribe((dragons) => {
			this.dragonData = dragons.sort((a,b) => {
				return 	a.name < b.name ? -1 :
						a.name > b.name ? 1 :
						0;
			});
			this.displayDragons = this.dragonData;
		});
	}

	filterDragons() {
		this.displayDragons = this.dragonData.filter((dragon) => {
			return dragon[this.filterType].toLowerCase().includes(this.filterQuery.toLowerCase());
		});
	}
}

