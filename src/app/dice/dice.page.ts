import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.page.html',
  styleUrls: ['./dice.page.scss'],
})
export class DicePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.rollThatDice();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rollThatDice() {
    var image = document.getElementById("dice");
    let diceFaces = [
      "../../assets/imgs/unknown.png",
      "../../assets/imgs/1.png",
      "../../assets/imgs/2.png",
      "../../assets/imgs/3.png",
      "../../assets/imgs/4.png",
      "../../assets/imgs/5.png",
      "../../assets/imgs/6.png",
    ];

    image.style.animation = "spindice 0.25s"
    setTimeout(() => {
      image.setAttribute("src", diceFaces[this.getRandomInt(1, 6)]);
                        }, 125);
    
    setTimeout(function(){ image.style.animation = "none"
                        }, 250);
  }

}
