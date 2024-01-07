function checkHealth() {
    // Get user input
    const bloodPressure = document.getElementById('bloodPressure').value;
    const pulseRate = document.getElementById('pulseRate').value;
    const heartRate = document.getElementById('heartRate').value;
    const bodyTemperature = document.getElementById('bodyTemperature').value;
    const bloodOxygen = document.getElementById('bloodOxygen').value;
    const bloodGlucose = document.getElementById('bloodGlucose').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;

    // Initialize an array to store health results
    let results = [];

    // Blood pressure ranges (systolic/diastolic)
    const normalBloodPressure = [120, 80];
    const highBloodPressure = [140, 90];

    // Example logic for health assessment (customize based on medical guidelines)
    if (parseInt(age) > 60) {
        results.push('Needs extra attention due to age');
    } else if (parseInt(weight) > 100) {
        results.push('Overweight');
    }

    // Blood pressure assessment
    const bpValues = bloodPressure.split('/').map(value => parseInt(value));
    if (bpValues.length === 2) {
        if (bpValues[0] > highBloodPressure[0] || bpValues[1] > highBloodPressure[1]) {
            results.push('High Blood Pressure');
        } else if (bpValues[0] < normalBloodPressure[0] || bpValues[1] < normalBloodPressure[1]) {
            results.push('Low Blood Pressure');
        }
    }

    // Temperature assessment
    const temp = parseFloat(bodyTemperature);
    if (temp >= 36.5 && temp <= 37.5) {
        results.push('Normal Temperature');
    } else if (temp === 38) {
        results.push('Acceptable Temperature');
    } else if (temp >= 38.1 && temp <= 39) {
        results.push('Seek Advice from Doctor (Temperature)');
    } else if (temp >= 39) {
        results.push('Need Medical Advice - Call Emergency Services (Temperature)');
    }

    // Pulse rate assessment
    const pulse = parseInt(pulseRate);
    if (pulse >= 40 && pulse <= 100) {
        results.push('Normal Pulse Rate');
    } else if (pulse >= 101 && pulse <= 109) {
        results.push('Acceptable Pulse Rate');
    } else if (pulse === 93 || pulse === 94) {
        results.push('Seek Advice from Doctor (Pulse Rate)');
    } else if (pulse <= 92) {
        results.push('Call Emergency Services (Pulse Rate)');
    }

    // Blood oxygen assessment
    const oxygen = parseInt(bloodOxygen);
    if (oxygen >= 96) {
        results.push('Normal Blood Oxygen');
    } else if (oxygen === 95) {
        results.push('Acceptable Blood Oxygen');
    } else if (oxygen >= 93 && oxygen <= 94) {
        results.push('Seek Advice from Doctor (Blood Oxygen)');
    } else if (oxygen <= 92) {
        results.push('Call Emergency Services (Blood Oxygen)');
    }

    // Blood sugar assessment
    const glucose = parseInt(bloodGlucose);
    if (glucose < 140) {
        results.push('Normal Blood Sugar');
    } else if (glucose >= 140 && glucose <= 180) {
        results.push('Pre-Diabetes');
    } else if (glucose > 200) {
        results.push('Diabetes');
    }

    // Display the results
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<h2>Health Status:</h2>';
    
    if (results.length === 0) {
        resultContainer.innerHTML += '<p>No significant health issues detected. Consult with a healthcare professional for a thorough assessment.</p>';
    } else {
        results.forEach(result => {
            resultContainer.innerHTML += `<p>${result}</p>`;
        });
    }
}
