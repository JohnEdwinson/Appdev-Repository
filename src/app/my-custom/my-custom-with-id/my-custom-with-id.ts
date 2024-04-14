import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component ({
    templateUrl: 'my-custom-with-id.html'
})
export class MyCustomPageWithId implements OnInit {
    id: any;

    constructor (private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
    }

}