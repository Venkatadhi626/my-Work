console.log ("first-line");
    getstudent(1, (student)=> {
    console.log("student", student);
    getsubjects(student.id, (subjects) => {
        console.log("subjects", subjects);
    });
});
    console.log("last-line");

    function getstudent(id, callback) {
        setTimeout(() => {
            console.log("getting student data from database");
            callback({name: "john", id: id});
        
        }, 3000);
    }

    function getsubjects(id,callback) {
        setTimeout(() => {
            console.log("getting subjects data from database",id);
            callback(["maths", "science"]);
        }, 3000);
    }
console.log("non blocking code")