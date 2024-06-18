function example() {
  
  {
   
    var varX = 1;
    console.log("Внутри блока (var):", varX); // 1

 
    let letX = 2;
    console.log("Внутри блока (let):", letX); // 2

 
    const constX = 3;
    console.log("Внутри блока (const):", constX); // 3
  }

 
  console.log("Снаружи блока (var):", varX); // 1
  console.log("Снаружи блока (let):", letX); // Uncaught ReferenceError: letX is not defined
  console.log("Снаружи блока (const):", constX); // Uncaught ReferenceError: constX is not defined
}

example();