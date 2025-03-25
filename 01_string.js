console.log("Hello");

let s = "karakterlanc \"Hello\"";
console.log(s);

let ujsor = "karakterlanc \n \"Hello\"";
console.log(ujsor);
console.log(ujsor.length);

let sz = "JavaScript";
for (let index = 0; index < sz.length; index++) 
    {
        console.log(sz[index]);
    }

let sz1 = "MySQL";
for (betu of sz1) 
    {
        console.log(betu);
    }

console.log(sz + sz1);
console.log(sz + " " + sz1);
console.log(`${sz} ${sz1}`);

let szovegosszefuzes = sz.concat(" ",  sz1);
console.log(szovegosszefuzes);
    
console.log(sz1.charAt(4));
console.log(sz1.charCodeAt(4));

console.log(sz1.startsWith("M"));

let hello = "Hello vilag";
console.log(hello.endsWith("vilag"));
console.log(hello.startsWith("vilag"));

let szam = "10";
console.log(szam.padEnd(5, "0"));
console.log(szam.padStart(5, "0"));
