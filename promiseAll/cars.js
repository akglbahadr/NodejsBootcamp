/*
const func = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("İşlem Tamamlandı!");
        }, 5000);
    });
    let result = await promise;

    console.log("result", result);
};

function().then((res) => {
    console.log(res);
});
*/

const func = async () => {
    
    const cars = [
        {brand : "Audi", name: "A3"},
        {brand : "BMW", name: "3.20"},
        {brand : "Mercedes", name: "C200"},
    ];

    return cars;
};

const listCars = async () => {
    const cars = await func();

    cars.map((car) => {
        console.log("car =>", car.name);
    });
};

listCars().then((res)) =>{

} 
