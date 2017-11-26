import { Component, OnChanges } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    rating: number = 4;
    starWidth: number;

    ngOnChanges(): void {
        console.log('inside onchanbges star');
        this.starWidth = this.rating * 86/5 ;
    }
}