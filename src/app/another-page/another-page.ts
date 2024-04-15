import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './Another-Page.html',
})
export class AnotherPage implements OnInit{

  constructor(private authorizationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.authorizationService.canProceed = false;
  }
  ionViewWillEnter(){
    console.log("You will now enter another page.")
  }
  ionViewDidEnter(){
    console.log("You did enter another page.")
  }
  ionViewWillLeave(){
    console.log("You will now leave another page.")
  }
  ionViewDidLeave(){
    console.log("You did leave another page.")
  }

  goWithAuthorization(){
    this.authorizationService.canProceed = true;
  }
  goToNextPage(){
    this.router.navigate(["new-component"])
  }
}