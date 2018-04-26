import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-notes-modal',
	templateUrl: './notes-modal.component.html',
	styleUrls: ['./notes-modal.component.less']
})
export class NotesModalComponent implements OnInit {

	@Input() dragonNotes: string;
	@Output() updateDragonNotes = new EventEmitter<string>();
	@Output() closeModal = new EventEmitter<string>();
	editing = false;

	constructor() { }

	ngOnInit() {
	}

	editNote() {
		this.editing = true;
	}

	saveNoteChanges() {
		this.editing = false;
		this.updateDragonNotes.emit(this.dragonNotes);
	}

}
