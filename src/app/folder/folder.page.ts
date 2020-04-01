import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  goToDice(){
    this.router.navigate(['/dice'])
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.randomNumbers();
  }

  randomNumbers() {
    let randomNumbers = []

    let min = 1;
    let max = 10;
    let howMuchTimes = 10;
    let canRepeatValues = false;
    if(!canRepeatValues && howMuchTimes > max) {
      alert("nao PODE SER maior")
      return false;
    }
    for (let index = 0; index < howMuchTimes; index++) {
      let randNumber = Math.floor(Math.random() * max) + min;
      if(canRepeatValues) {
        randomNumbers.push(randNumber)
      }
      if(!canRepeatValues) {
        while (randomNumbers.includes(randNumber)) {
          randNumber = Math.floor(Math.random() * max) + min;
        }
        randomNumbers.push(randNumber)
      }

    }

    console.log(randomNumbers)
  }

  rollThatDiceJUNK() {
    console.log("aaa")
  }

  

  //_________________

  makeid() {
    let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowwercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let specialCaracteres = '!@#$%&'
    let howMuchLength = 5;

    var result           = '';
    var characters = uppercaseLetters+lowwercaseLetters+numbers+specialCaracteres;
    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < howMuchLength; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 junk() {
  console.log(this.makeid());
 }

 

}
