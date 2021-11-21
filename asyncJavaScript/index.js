/* region #1 start

console.log("Merhaba Dünya");

var moment = require("moment");

console.log("moment=>", moment().format());

region #1 ended */

var moment = require("moment")


console.time();

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("one");
        resolve("res one");
    },1000);
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("two");
        reject("res two");
    },2000);
});

var p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("three");
        resolve("res three");
    },3000);
});

var p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("four");
        resolve("res four");
    },4000);
});

var p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("five");
        resolve("res five");
    },1000);
});

var promises=[];
promises.push(p1);
promises.push(p2);
promises.push(p3);
promises.push(p4);
promises.push(p5);

Promise.all(promises)
    .then((response) => {
        console.timeEnd();
        console.log("response =>", response);
    })
    .catch((err) => {
        console.error("err=>", err);
    });

const cars = [
    {brand : "Mercedes"},
    {brand : "BMW"},
    {brand : "Audi"},
    {brand : "Seat"},
    {brand : "Skoda"},
    {brand : "Tesla"},
];
