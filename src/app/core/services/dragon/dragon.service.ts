import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/RX';
import { Dragon } from '../../models/dragon.model';

@Injectable()
export class DragonService {
	dragons = [
		{
			name:'ChariZard',
			color:'red',
			type:'Fire',
			powerLevel:7,
			hasWings:true,
			notes:'Charizard is famous for being rebellious against Ash because he was such a high level and Ash hadn\'t reached the right gym yet to control him',
			imageUrl:'https://images-na.ssl-images-amazon.com/images/I/611cdPVaaaL._SL1100_.jpg',
			owner:'Ash Ketchum',
			id: 1010000,
		},
		{
			name:'TroGdor',
			color:'green',
			type:'Fire',
			powerLevel:9,
			hasWings:true,
			notes:'If you are a peasant, watch out!  He will burninate you, your town, and the whole countryside',
			imageUrl:'http://blerg.com.au/wp-content/uploads/2015/06/trogdor_the_burninator_by_blitzgraphics-1024x640.jpg',
			owner:'Strongbad',
			id: 10020000,
		},
		{
			name:'SapHira',
			color:'blue',
			type:'Ice',
			powerLevel:7,
			hasWings:true,
			notes:'Hatching from one of the last dragon eggs that Galbatorix stole from the dragon riders, Saphira was found and raised by Eragon',
			imageUrl:'http://vignette2.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620',
			owner:'Eragon',
			id: 10030000,
		},
		{
			name:'ToothLess',
			color:'black',
			type:'Night',
			powerLevel:8,
			hasWings:true,
			notes:'Toothless is the last of the nightwings.  Hiccup caught and trained him making him the first viking to train a dragon.',
			imageUrl:'http://wm.schoolofdragons.com/SoD/Joomla/templates/schoolofdragons/images/DTV_cg_toothless_04.png?v2',
			owner:'Hiccup',
			id: 10040000,
		},
		{
			name:'SmaUg',
			color:'green',
			type:'Fire',
			powerLevel:9,
			hasWings:true,
			notes:'',
			imageUrl:'https://cdn0.vox-cdn.com/thumbor/_wThyTLlHbfgLyrPDwEnycE-cx0=/0x0:1920x1080/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/45818832/the_hobbit_the_desolation_of_smaug_1920x1080_by_sachso74-d7sr1wl.0.0.jpg',
			owner:'Smaug',
			id: 10050000,
		},
		{
			name:'ZaPpy',
			color:'yellow',
			type:'Lightning',
			powerLevel:4,
			hasWings:false,
			notes:'Although zappy is pretty cool and menacing looking, his suprisingly kind nature makes him not very powerful',
			imageUrl:'http://vignette1.wikia.nocookie.net/naruto/images/d/da/Lightning_Dragon_Tornado2.png/revision/latest?cb=20150424174449',
			owner:'Zack Porter',
			id: 10060000,
		}
	];
	private subject:Subject<any> = new Subject<any>();

	constructor() { }

	public getDragons(){
		const source = Observable
			.interval(500)
			.timeInterval()
			.take(1);
		source.subscribe(() => {
			this.subject.next(this.dragons);
		});
		return this.subject.asObservable();
	}

	addDragon(dragon) {
		this.dragons.push(dragon);
		this.subject.next(this.dragons);
	}

	updateDragon(dragon:Dragon) {
		const index = this.dragons.findIndex(o => o.id === dragon.id);
		this.dragons[index] = dragon;
	}

}
