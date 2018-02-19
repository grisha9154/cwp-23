let men = require('./mendeleev');

async function  mendeleevStringify(str){
    let value = await men(str);
    return (value.number+'. '+value.name+'/'+value.weight);
}

module.exports = mendeleevStringify;