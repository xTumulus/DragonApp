import { Component, OnInit, Input } from '@angular/core';
import { DragonService } from '../../services';
import { Dragon } from '../../models/dragon.model';
import { SimpleConfirmationComponent } from 'mtc-modules';
import { MatDialog } from '@angular/material';


@Component({
	selector: 'app-dragon',
	templateUrl: './dragon.component.html',
	styleUrls: ['./dragon.component.less']
})
export class DragonComponent implements OnInit {
	@Input() dragonInfo:Dragon;
	modalIsOpen = false;
	editing = false;

	constructor(private dragonService: DragonService, private dialog: MatDialog) { }

	ngOnInit() {
	}

	updateDragon() {
		this.editing = false;
		this.dragonService.updateDragon(this.dragonInfo);
	}

	onDeleteClicked() {
		const index = this.dragonService.dragons.findIndex(dragonIndex => dragonIndex.name === this.dragonInfo.name);
		this.dragonService.dragons.splice(index, 1);
	}

	openDeleteDragonDialog () {
		this.dialog.open(SimpleConfirmationComponent, {
			data: {
				cancelButtonText: 'Cancel',
			confirmationButtonText: 'Yes',
			title: 'Delete',
			content: `Are you sure you want to delete ${this.dragonInfo.name}?`,
			},
			width: '450px',
		}).afterClosed().subscribe((response) => {
			if (response) {
				this.onDeleteClicked();
			}
		});
	}

	updateNotes(data: string) {
		this.dragonInfo.notes = data;
		this.updateDragon();
	}
}
