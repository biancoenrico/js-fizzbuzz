// Scrivi un programma che stampi i numeri da 1 a 100,
//  ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//   Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.





// ciclo for per far contare la mcchina fino a 100
for (var i = 1; i <= 100; i++) {

    // dichiarazione variabili
    var numero = i

    // per far si che vengano selezionati solo i multipli di 3 e di 5
    if(numero % 3 == 0 && numero % 5 == 0){
        console.log('fizzbuzz');

        // per far si che vengano selezionati solo i multipli di 5
    }else if(numero % 5 == 0){
        console.log('buzz');        

        // per far si che vengano selezionati solo i multipli di 3
    }else if(numero % 3 == 0){
        console.log('fizz');        
    }else{

        // per stampare nel log i numeri fuori dall'if
        console.log(numero);
    }

}
