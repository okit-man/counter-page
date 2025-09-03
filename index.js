// set initial count
let count = 0

// select both value and buttons 
const countValue = document.querySelector('#value')
const btns =  document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        // console.log(e.currentTarget.classList);
        
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0
        }
        if (count > 0) {
            countValue.style.color = ('rgb(18, 28, 211)')
        }else if (count < 0) {
            countValue.style.color = (' rgb(200,25,25)')
        }
        else  {
            countValue.style.color = ('rgb(0,0,0')
        }
        countValue.textContent = count
       
    })
})