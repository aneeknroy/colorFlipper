
// Set Initial Count
let count = 0;


// Select Value and Buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        if (styles.contains('increase')){
            count++;
        }
        if (styles.contains('reset')){
            count = 0;
        }
        value.textContent = count;
    })
});




// function decreaseCounter() {
//     let temp = document.getElementById("value").innerText;
//     temp -=1;
//     document.getElementById("counter").innerText = temp;
// }

// function resetCounter() {
//     document.getElementById("value").innerText = 0;
// }

// function increaseCounter()  {
//     let temp = document.getElementById("counter").innerText;
//     temp += 1;
//     document.getElementById("counter").innerText += 1;
// }