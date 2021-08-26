
function cuadradoPromise(value){
    if(typeof value!=="number"){
      return Promise.reject(`Error,el valor ${value} ingresado  no es un número`);
    }

    return new Promise(
        (resolve,reject) => {
        setTimeout(
        ()=>{ 
            resolve({
                value,
                result:value*value
            });
        }
        ,
        0||Math.random()*1000
        );    
    }
    );
}

export async function functionAsincronaDeclarada(){
    try {
        console.log("inicio de fx asincrona");
        let obj=await cuadradoPromise(0);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(1);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(2);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(3);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(4);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(5);
        console.log(`Async function ${obj.value},${obj.result}`);
        
        console.log(`Fin Async function`);
         
    } catch (error) {
        console.error(error);
    }
}

export const fuctionAsincronaExpresada =async ()=>{
    try {
        console.log("inicio de fx asincrona");
        let obj=await cuadradoPromise(6);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(7);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(8);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(9);
        console.log(`Async function ${obj.value},${obj.result}`);
        obj=await cuadradoPromise(10);
        console.log(`Async function ${obj.value},${obj.result}`);
       
        console.log(`Fin Async function`);
         
    } catch (error) {
        console.error(error);
    }
};

 


