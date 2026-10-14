async function displayA(){
    console.log('A')
}
async function displayB(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('B')
            resolve();
        }, 2000)
    })
}
async function displayC(){
    console.log('C')
}

async function runSequence() { // async 함수로 변경
    displayA();
    await displayB();  // displayB가 완료될 때까지 기다림
    await displayC();  // displayC가 완료될 때까지 기다림
}

runSequence(); 

displayA();
displayB();
displayC();


