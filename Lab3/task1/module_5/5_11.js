let now = new Date();
alert(now); // shows current date/time

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert(Dec31_1969);

let date = new Date("2017-01-26");
alert(date);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

// let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date); // 1.01.2011, 02:03:04.567

// current date
// let date = new Date();

// the hour in your current time zone
alert(date.getHours());

// the hour in UTC+0 time zone (London time without daylight savings)
alert(date.getUTCHours());

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
alert(new Date().getTimezoneOffset());

let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

// let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert(date); // 1 Mar 2016

// let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
alert(date);

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert(date); // 31 Dec 2015

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
   let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert(`The loop took ${end - start} ms`);