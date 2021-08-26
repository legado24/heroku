

export  function _$(a){
    return document.getElementById(a);
}

export  function print(...args){
    args.forEach(element => {
        console.log(element);
    });
}