// module - 

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}


module.exports ={
    addFn:add, sunFn: sub,
}

module.exports ={
    add,  sub,
}

// module.exports overriddes the value


//using export function - ananomous function

exports.add = (a,b)=>a+b;
exports.sub= (a,b)=>a-b;