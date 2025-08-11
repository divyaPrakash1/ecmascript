import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'ecmspt-multiline-string',
    templateUrl: './multiline-string.component.html',
    styleUrl: './multiline-string.component.scss'
})
export class MultilineStringComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        console.log('sdfsdfdsfSFSDF');
        this.mainMethod();
        let str = 'This is line one \
    This is line two \
    This is line three';

        const multiline = `
    This is line one.
    This is line two.
        This is line three.
`;

        console.log(this.getSingleLine(str));
        console.log(this.getSingleLine(multiline));
    }

    mainMethod() {
        let str = 'Hello \
       Kashish';
        console.log('string line 1', str.trim());

        console.log('string line 2', 'Hello' + " " +
            'Kashish');

        console.log('It\'s good');
    }

    getSingleLine(str: string): string {
        return str
            .split('\n')
            .map(line => line.trim())
            .join(' ');
    }


    getInSingleLine(str: string) {
        return str.split('\n').map(line => line.trim()).join(' ');
    }


}
