//normal for

//while

function discountPrices (prices, discount) {
    let discounted = []
  
    for (let i = 0; i < prices.length; i++) {
      let discountedPrice = prices[i] * (1 - discount)
      let finalPrice = Math.round(discountedPrice * 100) / 100
      discounted.push(finalPrice)
    }
  
    console.log(i) // 3
    console.log(discountedPrice) // 150
    console.log(finalPrice) // 150
  
    return discounted
  }
  i=5
while(i<10){
text+="El numero es" + 
i++

}

  //aqui se podria imprimir el valor de var,pero si fuera let no porque solo esta dentro del scope


//foreEach function

//For-in-loop

//For-of-loop

//iterate over the value
abecedario=['a', 'b', 'c']
for (const letra of abecedario ) {
    console.log(letra);
}
    //get the index as well, using `entries()`
    for (const [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(index) //index
    console.log(value) //value
    }
/* Notice the use of const . This loop creates a new scope in every iteration, so we can safely
use that instead of let .
The difference with for...in is:
for...of iterates over the property values
for...in iterates the property names */