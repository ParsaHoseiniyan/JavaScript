// in this file I explain switch case
// https://javascript.info/switch

var num1 = 3;
var num2 = 4;

var num3 = num1 * num2;

switch (num3) {
  case 10:
    alert("نام3 برابره با 10");
    break;
  case 11:
    alert("نام3 برابره با 11");
    break;
  case 12: // true
  case 15:
    alert("نام3 برابره با 12 یا 15");
    break;
  case 13:
    alert("نام3 برابره با 13");
    break;
  case 14:
    alert("نام3 برابره با 14");
    break;
  default:
    alert("نام3 برابر با هیچکدومش نیست :(");
    break;
}