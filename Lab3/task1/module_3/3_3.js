function showPrimes(n) {

   for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;

      alert(i);
   }
}

function isPrime(n) {
   for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
   }

   return true;
}

function showPrimes(n) {
   nextPrime:
   for (let i = 2; i < n; i++) {

      // check if i is a prime number
      for (let j = 2; j < i; j++) {
         if (i % j == 0) continue nextPrime;
      }

      alert(i);
   }
}

function showPrimes(n) {

   for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;

      alert(i);
   }
}

function isPrime(n) {
   for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
   }

   return true;
}

addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
   for (let i = 0; i < 10; i++) {
      let drop = getWhiskey();
      //...
   }
}

function addJuice(container) {
   for (let t = 0; t < 3; t++) {
      let tomato = getTomato();
      //...
   }
}