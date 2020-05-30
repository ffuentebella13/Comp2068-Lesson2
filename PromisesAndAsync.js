console.clear();

//Callback
const washUp = () => {
    console.log("Wash your hands!!!");
}
const callMe = async name => {
    await new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('Time for dinner, ' + name + '!!!');
    return resolve();
    },2000);
})
}
// setTimeout(name => {
//     console.log("Done like dinner");

//     callMe(name);
// }, 2000, 'Shaun Mckinnon');
// //Promises
// new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Done like Dinner");
//         resolve();
//     }, 2000);
// })
// .then(callMe('Shaun Mckinnon'));

//Async/Await
const asyncFunc = async (name) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Done like dinner");
        return resolve();
        });
    });

    await callMe(name);
    washUp(); 
};

asyncFunc('Shaun Mckinnon');

(async() => {
    console.log("I'm iffy about IFFEs");
})();