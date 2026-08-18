// string.js
let s1 = 'En \' string kan indeholde "';
console.log(s1); // => En ' string kan indeholde "

let s2 = "En \" string kan indeholde '";
console.log(s2); // => En " string kan indeholde '

let s3 =
    `En \` string kan indeholde ', " og linjeskift
     samt udtryk: ${s1.length}`;
console.log(s3); // =>
// En ` string kan indeholde ', " og linjeskift
//      samt udtryk: 27