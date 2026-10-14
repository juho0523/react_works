function displayA() {
  console.log('A');
}

function displayB(callBack) {
  setTimeout(() => {
    console.log('B');
    callBack();
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);