function kisiOlustur() {
    console.log("Bahadır Furkan Akgül Created");
}

function ikametOlustur() {
    console.log("Bahadır Furkan için Ankara İkamet Bilgisi Created");
}

ikametOlustur();
kisiOlustur();

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