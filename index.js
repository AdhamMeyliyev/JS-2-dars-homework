// let a=+prompt("Yoshingizni kiriting");

// if(a==" "){
//     prompt("Siz yoshingizni kiritmadingiz yoki siz 18 yoshdamisz. Agar shunday bo'ladigan bo'lsa yoshingizni kiriting va  OKni bosing ");
// }else if (a<18){
//     alert("Bu veb-sayt siz uchun taqiqlangan");
// }else{
//     alert("Yoshingiz yetarli OK tugmasini bosin");
// }

// let a=25;

// if(a%3==0 && a%5==0){
//     console.log("FIZZBUZZ");
// }else if (a%3==0){
//     console.log("FIZZ");
// }else{
//     console.log("BUZZ");
// }

// alert( null || 2 || undefined );//2
// alert( alert(1) || 2 || alert(3) ); //1, 2
// alert( 1 && null && 2 ) //null
// alert( alert(1) && alert(2) );//1, undefined
// alert( null || 2 && 3 || 4 );//3
// if (-1 || 0) alert( 'first' );//first
// if (-1 && 0) alert( 'second' );//0
// if (null || -1 && 1) alert( 'third' );//third+

// for(let i=2; i<=10; i++){

//     console.log(`${i} karra jadvali`)

//     for(let j=1; j<=10; j++){

//         console.log(`${i} * ${j} = ${i*j}`)

//     }

// }


// for (let i=2; i<10; i++){
//     console.log(`${i} karra `);

//     for(let l=1; l<=10; l++){
//         console.log(`${i} * ${l} = ${i*l}`);
//     }
// }

// let obj={
//     john: 500,
//     salim: 400,
//     alim: 200,
// }

// console.log(obj.john + obj.salim + obj.alim);

// let obj={
//         john: 500,
//         salim: 400,
//         alim: 200,
//     }

//     for( let key in obj){
//         console.log(obj[key]);
        
//     }


// JS 4-DARS HOMEWORK 1
// function calcMin(a,b){
//     if(a>b)
//         console.log(b);
//     else if(a==b)
//         console.log(`a = b = ${a || b}`);
//     else
//         console.log(a);

//         return calcMin;
// }

// console.log(calcMin(a=3,b=5));
// console.log(calcMin(a=3,b=-1));
// console.log(calcMin(a=1,b=1));




// JS 4-DARS HOMEWORK 2

// function calcPow(a=3){
//     let result = a**3;
//     console.log(result);
   
// }

// calcPow();


// JS 4-DARS HOMEWORK 3

// let salaries = {
//     Ann:200,
//     John:400,
//     Albert:500,
//     Jessica:100,
//     }


//     let a=0;

//     for(let key in salaries){
//         a +=salaries[key];
//     }

//     console.log(a);
    
    
////////////////////////////////////////////////////////////////////////////////////
// let arr = ["Apple", "Orange", "Pear"];
// for (let key in arr) {
// alert( arr[key] ); // Apple, Orange, Pear
// }

// let manzil = {
//     x: 10,
//     y: 20,
//     z: 'text', // bu son emas
//     a: 5,
//   };

// function sonlarniQosh(obyekt) {
//     let yigindi = 0;
  
//     for (let key in obyekt) {
//       if (typeof obyekt[key] === 'number') {
//         yigindi += obyekt[key];
//       }
//       else{
//         console.log(undefined);
//       }
//     }
  
//     return yigindi;
//   }
  
  // Misol uchun obyekt


// let a=1;
// let b=2;

// let result = a+b;

// console.log(result);

// console.log(`${a} + ${b} = ${a+b}`);
 