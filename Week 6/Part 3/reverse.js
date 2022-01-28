//Method 1 - Built-in-Functions
const reverseStr1 = (str) => {
    return str.split("").reverse().join(""); // split ile harfleri ayirip, reverse ile 
                                            //  yerlerini degistirip join ile birlestiriyoruz.
}
console.log(reverseStr1("meryem")); //output "meyrem"



//Method 2 - Reduce

const reverseStr2 = (str) => {
    return str.split("").reduce((rev, char)=> char + rev, ''); 
  }
  console.log(reverseStr2("california")); // output ainrofilac




//Method 3- For Loop

const reverseStr3 = (str) => {
    var newStr = "";  
    for (var i = str.length - 1; i >= 0; i--) { // string 0'dan fazla oldugu surece devam edecek bir loop
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseStr3('sevval'));   //output "lavves"





//Method 4 - Recursion Functions

const reverseStr4 = (str) => {
    if (str === "")   //string bos ise bos doner
      return "";
    else
      return reverseStr4(str.substr(1)) + str.charAt(0); //substr ile belirlenen yerler doner
  }
  console.log(reverseStr4("ar"));   //output ra



  