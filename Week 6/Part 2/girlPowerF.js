//bu islem bir sayı verdiğinizde onu kendisinin 
//yarısı ile toplayıp ( eger bu sayı 2ye tam bölünmüyorsa bucuklu olarak yazacak) 3 eklemektedir.

let girlsPowerToplami = x =>{ 
    x = x / 2 + 3;
    return x;
}

//bundan ayrı olarak girlsPower özel bir high order function olup 
//kendisine verilen arrayin tüm elemanlarına bu islemi uygulayip 
//yine bir array olarak donmelidir.
function girlsPowerFunc(arr){ 
    let result;
    arr.forEach(number => {
        result = arr.map(number => girlsPowerToplami(number)) 
    });
    return result;
}

let array1 =[6,9,1];
let array2=[8, 5, 6, 80];

console.log(array1,"girlsPowerFunc =>",girlsPowerFunc(array1));
console.log(array2,"girlsPowerFunc =>",girlsPowerFunc(array2));