import { Component } from '@angular/core';
 
@Component({
  template: `
	<div>
	<div class="container text-center">
			<h1>Search: Using NG2</h1>
	</div>
	<div>
			<div class="container text-center">
				  </div>
				  <div class="container">
					<div class="row">
					  <div class="search-hero">
						<input class="form-control" type="text" name="search" [(ngModel)]="searchText" autocomplete="off" placeholder="&#61442;  Start searching for a hero by id or name or country">
					  </div>
					  <table class="table table-striped">
						<thead>
						<tr>
						  <th>Id</th>
						  <th>Hero Name</th>
						  <th>Country</th>
						</tr>
						</thead>
						<tbody>
						<tr *ngFor="let hero of heroes | filter:searchText">
						  <td>{{hero.id}}</td>
						  <td>{{hero.name}}</td>
						  <td>{{hero.country}}</td>
						</tr>
						</tbody>
					  </table>
					</div>
				  </div>
	</div>	  
</div>
  `
})
 
export class AppComponent {
	labels: any;
	searchText: any;
	heroes:any;
	constructor() {
		this.labels = {        
			
			portletNamespace: 'Porlet Namespace',
        	contextPath: 'Context Path',
			portletElementId: 'Portlet Element Id'
		}
		this.heroes = [
			{ id: 11, name: 'Mr. Nice', country: 'India' },
			{ id: 12, name: 'Narco' , country: 'USA'},
			{ id: 13, name: 'Bombasto' , country: 'UK'},
			{ id: 14, name: 'Celeritas' , country: 'Canada' },
			{ id: 15, name: 'Magneta' , country: 'Russia'},
			{ id: 16, name: 'RubberMan' , country: 'China'},
			{ id: 17, name: 'Dynama' , country: 'Germany'},
			{ id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
			{ id: 19, name: 'Magma' , country: 'South Africa'},
			{ id: 20, name: 'Tornado' , country: 'Sri Lanka'}
		  ];
	}
}