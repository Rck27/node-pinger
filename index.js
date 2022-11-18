var ping = require("ping");
const fs = require("fs/promises");
let n = 10;
let h = 10;
let pass = [
    '3', '2', '6'
];
let list = [];
fs.rm('./tes.txt');
async function main(network, host){
    //console.log(`192.168.${network}.${host}`);
    let res = await ping.promise.probe(`192.168.${network}.${host}`);
  //  setTimeout(200);
  if(res.alive == true){
    console.log(res.host);
    await fs.appendFile('./tes.txt', res.host+'\n');
    // let length = list.push(res.host);
    // console.log(length);
    // console.log(list);
  }
    //console.log(res);
    
}

while(n >= 1){
    pass.forEach(element => {
        if(element == n){
            n -= 1
        }
    });
    while(h > 1){
        main(n, h);
        console.log(n, h)
        h-=1;
    }
    n-=1;
    h = 10;
    

}

