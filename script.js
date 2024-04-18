let countDown = document.querySelector('.countDown');
let updatedMessage = document.querySelector('.updatedMessage');
let startCount = 0;
let intervalId;

// to start the timer
const startTimer = () => {
    intervalId = setInterval(() => {
        countDown.innerText = startCount++;
    }, 1000);
}

// to stop the timer
const stopTimer = () => {
    clearInterval(intervalId);
}

// to reset the timer
const resetTimer = () => {
    startCount = 0;
    countDown.innerText = startCount;
    clearInterval(intervalId);
}

// to get the updated timer
const getTime = () => {
    const newPara = document.createElement('p');
    newPara.classList.add('updatedValue');
    // try {
    //     newPara.innerText = `The timer stopped at ${startCount - 1} seconds.`;
    // } catch (error) {
    //     newPara.innerText = "Error";
    // }

    if(startCount==0){
        newPara.innerText = "Start the timer first...!";
    }else{
        newPara.innerText = `The timer stopped at ${startCount - 1} seconds.`;
    }

    updatedMessage.append(newPara);
}

// to clear the updated timer
const clear = () => {
    updatedMessage.innerHTML = "";
}


document.querySelector('.startTimer').addEventListener('click', startTimer);
document.querySelector('.stopTimer').addEventListener('click', stopTimer);
document.querySelector('.resetTimer').addEventListener('click', resetTimer);
document.querySelector('.getTime').addEventListener('click', getTime);
document.querySelector('.clear').addEventListener('click', clear);