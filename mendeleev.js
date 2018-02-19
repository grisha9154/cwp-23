
async function mendeleev(string) {
    let element = [{name:'H',number:1,weight:1.008},{name:'He',number:2,weight:4.0026},{name:'Li',number:3,weight:6.94},{name:'Be',number:4,weight:9.0122}];
    let retValue;
   await element.forEach(await ((element)=>{
       if(element.name==string)
           retValue = element;
    }));
    return retValue;
}

module.exports = mendeleev;