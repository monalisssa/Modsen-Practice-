function runAsyncOperations() {
  return new Promise((resolve, reject) => {
    // Первая асинхронная операция
    setTimeout(() => {
      console.log("Первая операция завершена");
      resolve(); 
    }, 2000);
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      // Вторая асинхронная операция
      setTimeout(() => {
        console.log("Вторая операция завершена");
        resolve(); 
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      // Третья асинхронная операция
      setTimeout(() => {
        console.log("Третья операция завершена");
        resolve(); 
      }, 3000);
    });
  })
  .then(() => {
    console.log("Все операции выполнены успешно");
  })
  .catch((error) => {
    console.error("Произошла ошибка:", error);
  });
}

runAsyncOperations();