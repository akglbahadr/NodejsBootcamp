/*
//#region Example1
function kisiOlustur() {
    console.log("Bahadır Furkan Akgül Created");
}

function ikametOlustur() {
    console.log("Bahadır Furkan için Ankara İkamet Bilgisi Created");
}

ikametOlustur();
kisiOlustur();

//region Example2 
console.log("CallBack Func Örneği")

let sayi = 0;

function func1(){
    sayi = sayi + 10;
   func2();
}

function func2(){ //2 saniye bekler ve 30 basar
    setTimeout(() => {
        sayi = sayi + 10;
        func3(); 
    }, 2000);

 
}

function func3(){
    sayi = sayi + 10;
    console.log("sayi=>", sayi)
}

func1()
//func2()
//func3()

*/
//#region Example 3


const cars = [];
cars.push({brand: "Audi", model: "A3"});
cars.push({brand: "BMW", model: "3.20"});
cars.push({brand: "Mercedes", model: "C200"});

const listCars = () => { 
    //matematiksel işlemler, anlık işlemler
    
    cars.map((car) => {
        console.log("car object =>", car.brand);
    }); 
    //return ettiği değerlerle yeni bir array döndürür, brandi iterate ediyor
};

const addCar = (newCar, callback) => {
    setTimeout(() => {
        cars.push(newCar);
        console.log("-----\n")
        callback();
    }, 2000)

    callback();
};

addCar({brand: "Seat", model: "Ibiza"}, listCars);

/*
function name(params){//veri ekle, ağır işlemler, uzun süreçler gerektiren kısımlar için dicrelation funcs is used
}
*/

//console.log("cars", cars);


//#endregion