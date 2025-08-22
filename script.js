let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            let expression = string.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
            string = eval(expression);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if (e.target.innerHTML == '%') {
            if (string) {
                string = (parseFloat(string) / 100).toString(); // Calculate percentage of current value
                input.value = string;
            }
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
//By Naren S.J
//narensonu1520@gmail.com