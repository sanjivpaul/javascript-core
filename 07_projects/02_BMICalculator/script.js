// how to get inputs from form


const form = document.querySelector("form");
// console.log(form);
// if we load inputs then inputs are empty
// const height = parseInt(document.querySelector("#height").value) // empty

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value) // convert value into integer
    // console.log(height);
    const weight = parseInt(document.querySelector("#weight").value)
    // console.log(weight);
    const results = document.querySelector("#results")
    const message = document.querySelector("#message")

    if (height === "" || height < 0 || isNaN(height)) {
        results.style.color = "red";
        results.innerHTML = `Please given a valid height ${height}`
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        results.style.color = "red";
        results.innerHTML = `Please given a valid weight ${height}`
    }else{
        const bmi = (weight / ((height * height)/ 10000)).toFixed(2);
        results.style.color = "green";
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`

        if(bmi < 18){
            message.style.color = "orange";
            message.innerHTML = `You are Under Weight`
        }else if(bmi< 24.9){
            message.style.color = "blue";
            message.innerHTML = `Normal Range`
        }else{
            message.style.color = "orange";
            message.innerHTML = `OverWeight`
        }
    }

})