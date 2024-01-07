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

    // Initialize health status
    let result = 'Healthy';

    // Blood pressure ranges (systolic/diastolic)
    const normalBloodPressure = [120, 80];
    const highBloodPressure = [140, 90];

    // Example logic for health assessment (customize based on medical guidelines)
    if (parseInt(age) > 60) {
        result = 'Needs extra attention due to age';
    } else if (parseInt(weight) > 100) {
        result = 'Overweight';
    }

    // Blood pressure assessment
    const bpValues = bloodPressure.split('/').map(value => parseInt(value));
    if (bpValues.length === 2) {
        if (bpValues[0] > highBloodPressure[0] || bpValues[1] > highBloodPressure[1]) {
            result = 'High Blood Pressure';
        } else if (bpValues[0] < normalBloodPressure[0] || bpValues[1] < normalBloodPressure[1]) {
            result = 'Low Blood Pressure';
        }
    }

    // Temperature assessment
    const temp = parseFloat(bodyTemperature);
    if (temp >= 36.5 && temp <= 37.5) {
        result = 'Normal Temperature';
    } else if (temp === 38) {
        result = 'Acceptable Temperature';
    } else if (temp >= 38.1 && temp <= 39) {
        result = 'Seek Advice from Doctor (Temperature)';
    } else if (temp >= 39) {
        result = 'Need Medical Advice - Call Emergency Services (Temperature)';
    }

    // Pulse rate assessment
    const pulse = parseInt(pulseRate);
    if (pulse >= 40 && pulse <= 100) {
        result = 'Normal Pulse Rate';
    } else if (pulse >= 101 && pulse <= 109) {
        result = 'Acceptable Pulse Rate';
    } else if (pulse === 93 || pulse === 94) {
        result = 'Seek Advice from Doctor (Pulse Rate)';
    } else if (pulse <= 92) {
        result = 'Call Emergency Services (Pulse Rate)';
    }

    // Blood oxygen assessment
    const oxygen = parseInt(bloodOxygen);
    if (oxygen >= 96) {
        result = 'Normal Blood Oxygen';
    } else if (oxygen === 95) {
        result = 'Acceptable Blood Oxygen';
    } else if (oxygen >= 93 && oxygen <= 94) {
        result = 'Seek Advice from Doctor (Blood Oxygen)';
    } else if (oxygen <= 92) {
        result = 'Call Emergency Services (Blood Oxygen)';
    }

    // Blood sugar assessment
    const glucose = parseInt(bloodGlucose);
    if (glucose < 140) {
        result = 'Normal Blood Sugar';
    } else if (glucose >= 140 && glucose <= 180) {
        result = 'Pre-Diabetes';
    } else if (glucose > 200) {
        result = 'Diabetes';
    }

    // Display the result
    document.getElementById('result').innerText = `Health Status: ${result}`;
}
