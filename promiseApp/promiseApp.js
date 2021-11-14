//büyük uygulamalarda tercih sebebi => bakımı kolay, karmaşıklığı azaltıyor, daha kolay okunuyor
//bir process başlarken ne olursa olsun, olumlu ya da olumsuz bir response döndürme sözü
/*
resolve() => //çözümleme
reject() => //process tamamlandı, işlemde var olan sorunu bildirme
*/

//#region Example 1

/*
const promise1 = new Promise((resolve, reject) => {
    //resolve("User is Created!");
    reject("User is not Created!")
});

promise1
    .then((result) => {
    console.log("result", result);
    })
    .catch((err) => {
    console.log("err",err);
    });

console.log(promise1);
*/

//#region Example2

const cars = [];
cars.push({brand: "Audi", model: "A3"});
cars.push({brand: "BMW", model: "3.20"});
cars.push({brand: "Mercedes", model: "C200"});

const listCars = () => {
    cars.map((car) => {
        console.log("Brand: =>", car.brand);
    }); 
}; 

const addCar = (newCar) => {
    const promise1 = new Promise((resolve, reject) => {
        cars.push(newCar);

        const message = "Car added successfully!"
        resolve(message);
        //reject("Error: Car couldn't created!");
    });

    return promise1;
};

addCar({ brand: "Seat", model: "Ibiza"})
    .then((param) => {
        console.log("param", param);
        listCars();
    })
    .catch((err) => {
        console.log("err", err);
    });

//#endregion