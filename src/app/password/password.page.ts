import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  passwordLength = 6;
  howManyResults = 1;
  uppercaseLetters = true;
  lowercaseLetters = false;
  showNumbers = false;
  specialChars = false;

  results = [];

  constructor() { }

  ngOnInit() {
  }

  junk() {
    console.log(`
      ${this.passwordLength}
      ${this.howManyResults}
      ${this.uppercaseLetters}
      ${this.lowercaseLetters}
      ${this.showNumbers}
      ${this.specialChars}
    `)
  }

  generatePassword() {
    let uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let specialChars = '!@#$%&'
    let passwordLength = this.passwordLength;

    var result           = '';

    var characters = 
      (this.uppercaseLetters ? uppercaseLetters : '') + 
      (this.lowercaseLetters ? lowercaseLetters : '') +
      (this.showNumbers ? numbers : '') +
      (this.specialChars ? specialChars : '')

    // var characters = uppercaseLetters+lowercaseLetters+numbers+specialCaracteres;
    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    this.results = []
    var charactersLength = characters.length;

    for ( var times = 0; times < this.howManyResults; times++ ) {
      for ( var i = 0; i < passwordLength; i++ ) {
        if(result.length == this.passwordLength){
          result = '';
        }
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      // console.log(result);
      this.results.push(result)
    }

    
    // return result;
 }

}
