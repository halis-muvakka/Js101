console.log("Merhaba from script")

// alert("Sayfada uyarı mesajı")

document.write("<p>merhaba</p>")
// window.alert("Sayfada uyarı mesajı")

var firstname="Mehmet"; //artık kullanılmıyor
let lastname="türk"; //tekrar atama yapılabiliyor
const age= 46; //tek atama yapılıyor

// console.log("Mehmet 46 yaşında")
console.log(firstname, age, "yaşında")

//PascalCase
let FirstName= "Mehmet"; //React (Geçerli)

//Camel Case
let firstName= "Mehmet"; //Js (Tavsiye)

//Snake Case
let first_name= "Mehmet"; //Database (Geçerli)

//Kebap Case
//let first-name= "Mehmet" // Css'de kullanıyoruz

console.log(FirstName, firstName, first_name);

let isMarried = true; // false;

let ageIsOver18 = true;

let team1="şahin", team2="doğan", team3="kartal", team4="atmaca"
console.log(team1, team2, team3, team4)
console.log(team1 + team2 + team3 + team4)
console.log("merha"+"ba")
console.log(age+5); //47
console.log(age+"5"); //475

//String

let dataString1="Merhaba";
let dataString2='Merhaba'+" "+age+" "+"Yaşındaki"+" "+firstName;
let dataString3=`Merhaba ${age} yaşındaki ${firstName}`;
console.log(dataString1)
console.log(dataString2)
console.log(dataString3)

//Number


let numberValue1=5;
let numberValue2=5.5;
console.log(numberValue1,numberValue2)


//Boolean

let isMarried=true;
let ageIsOver18=false;

//undefined
let telefon;
console.log(telefon)

//Null
let nullValue="";
console.log(nullValue)

//Yukarısı Global Scope

//Burası local scope
function name(params) {
    let test="fonksiyon içi"
    console.log(test);
    console.log(firstName) //local scope , global scope'a erişebilir
}
//local scope bitti

nameFunc()

console.log(test); //rest local scope olduğu için çalışmaz

