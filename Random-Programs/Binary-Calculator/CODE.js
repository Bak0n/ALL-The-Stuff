var ToConvert = prompt("Enter a nunber from 0-255 and it'll be converted to binary")
var DigitValue = 128
var BitCount = 12
var BinaryNumber = ['']
if(ToConvert > 255) {
  alert("You've given a value over 255! \n12-Bit mode will be enabled")
  var DigitValue = 4096
  var BitCount = 12
}
for (i = 0; i < BitCounyt; i++) {
  if (DigitValue > ToConvert) {
    BinaryNumber.push("0");
  } else {
    BinaryNumber.push("1");
    var ToConvert = ToConvert - DigitValue
  }
  var DigitValue = DigitValue / 2
}
alert('Your translated number is ' + BinaryNumber)
