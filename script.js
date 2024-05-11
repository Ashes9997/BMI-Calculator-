const weight = document.querySelector(".weight");
const unit = document.querySelector(".unit");
const feet = document.querySelector(".feet");
const inches = document.querySelector(".inches");
const result = document.querySelector(".result");
const BMIstatus = document.querySelector(".BMIstatus");

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
        status = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        status = "Normal";
    }
    else if (BMI >= 25.0 && BMI <= 39.9) {
        status = "OverWeight";
    }
    else if (BMI >= 40.0) {
        status = "Obese";
    }

    BMIstatus.textContent = status;
}