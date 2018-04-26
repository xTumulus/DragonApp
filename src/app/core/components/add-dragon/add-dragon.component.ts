import { Component, OnInit } from '@angular/core';
import { DragonService } from '../../services';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-dragon',
	templateUrl: './add-dragon.component.html',
	styleUrls: ['./add-dragon.component.less']
})

export class AddDragonComponent implements OnInit {

	dragonForm: FormGroup;
	dragonTypes = ['Fire', 'Ice', 'Ground'];

	powerValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	constructor(public fb: FormBuilder, private dragonService: DragonService) {
		this.dragonForm = this.fb.group({
			name: ['', Validators.required],
			color: ['', Validators.required],
			type: ['', Validators.required],
			powerLevel: ['', Validators.required],
			hasWings: false,
			notes: '',
			imageURL: ['', Validators.required],
			owner: ['Logan', Validators.required],
			id: '',
		});
	}

	createDragon() {
		if (this.dragonForm.valid) {
			let dragon = this.dragonForm.value;
			dragon.id = this.generateId(dragon);
			this.dragonService.dragons.push(dragon);
			alert('Dragon successfully added');
			this.dragonForm.reset();
		}
	}

	generateId(dragon) {
		return (new Date).getTime();
	}

	ngOnInit() {

	}
}
