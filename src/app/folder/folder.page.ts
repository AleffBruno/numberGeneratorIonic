import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  

  constructor(private activatedRoute: ActivatedRoute) { }

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

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rollThatDice() {
    var image = document.getElementById("dice");
    let diceFaces = [
      "https://bit.ly/dice-unknown",
      "https://bit.ly/dice-one",
      "https://bit.ly/dice-two",
      "https://bit.ly/dice-three",
      "https://bit.ly/dice-four",
      "https://bit.ly/dice-five",
      "https://bit.ly/dice-six"
    ];

    image.style.animation = "spindice 0.25s"
    setTimeout(() => {
      image.setAttribute("src", diceFaces[this.getRandomInt(1, 6)]);
                        }, 125);
    
    setTimeout(function(){ image.style.animation = "none"
                        }, 250);
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
