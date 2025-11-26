function printData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("inside promise");
            resolve("success");
        }, 3000);
    });
}

let data = printData();

data.then(() => {
    console.log("success1");
    let data1 = printData();
    data1.then(() => {
        console.log("second print data");
    });
});

