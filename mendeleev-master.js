let men = require('./mendeleev-stringify');
let fs = require('fs');

async function mendeleevMaster(str) {
    fs.readFile(str,"utf-8", (err,data)=>{
            let value = data.split('\n');
            value.forEach((element)=>{
                (async()=>{
                   console.log(await men(element));
               })();
            });
  });

}

module.exports = mendeleevMaster;