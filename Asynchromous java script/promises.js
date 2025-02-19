new Promise(resolve, reject) => {
    setTimeout(() => {
        const student={id:1, name:"john"}
        resolve(student)
    },2000)
}
promise.then(result) => console.log(result);
 {