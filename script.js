document.getElementById('calculate-button').addEventListener('click', calculateBMI);

function calculateBMI() {
    const weightUnit = parseFloat(document.getElementsByClassName('weight_type')[0].value);
    const heightUnit = parseFloat(document.getElementsByClassName('height_type')[0].value);

    if (isNaN(weightUnit) || isNaN(heightUnit)) {
        alert("Please enter valid weight and height values.");
        return;
    }

    const heightInCm = heightUnit * 0.01;
    const finalBMI = weightUnit / (heightInCm * heightInCm);

    console.log(`Your BMI is ${finalBMI}`);
    const bmiResultElement = document.getElementById('bmi-result');
    bmiResultElement.textContent = `Your BMI is ${finalBMI.toFixed(2)}`;
}
