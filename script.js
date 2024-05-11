const weight = document.querySelector(".weight");
const unit = document.querySelector(".unit");
const feet = document.querySelector(".feet");
const inches = document.querySelector(".inches");
const result = document.querySelector(".result");
const BMIstatus = document.querySelector(".BMIstatus");

// function for validation 

function validate() {

    if (weight.value <=1) {
        alert("Please enter a valid Weight");
        weight.focus();
    }
    if (feet.value ==0 && inches.value == 0) {
        alert("Please enter a valid height");
        feet.focus();
    }
    else{
        calculateBMI()

    }
  
    
    
  }


function calculateBMI() {
    let convertedWeight = weight.value;
    let status;

    // Conversion of weight from lb to kg 
    if (unit.value === "LB") {
        convertedWeight = weight.value * 0.453592;
    }

    // Conversion of height from feet and inches to meters 
    const totalHeight = feet.value * 0.3048 + inches.value * 0.0254;

    // Calculation of BMI ratio
    const BMI = convertedWeight / totalHeight**2;
    result.textContent = BMI.toFixed(2);

    // Showing the BMI status
    if (BMI <= 18.4) {
        result.textContent = `your BMI value is ${BMI.toFixed(2)} which means you are Underweight`

        // status = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        result.textContent = `your BMI value is ${BMI.toFixed(2)} which means you are Normal`
        // status = "Normal";
    }
    else if (BMI >= 25.0 && BMI <= 39.9) {
        result.textContent = `your BMI value is ${BMI.toFixed(2)} which means you are Overweight`
        // status = "OverWeight";
    }
    else if (BMI >= 40.0) {
        result.textContent = `your BMI value is ${BMI.toFixed(2)} which means you are Obese`
        // status = "Obese";
    }

    // BMIstatus.textContent = result;
}