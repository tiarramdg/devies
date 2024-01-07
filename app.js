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

    // Pulse rate assessment
    if (parseInt(pulseRate) > 100 || parseInt(pulseRate) < 60) {
        result = 'Abnormal Pulse Rate';
    }

    // Body temperature assessment
    if (parseInt(bodyTemperature) > 37.5) {
        result = 'Fever';
    }

    // Blood oxygen assessment
    if (parseInt(bloodOxygen) < 95) {
        result = 'Low Blood Oxygen';
    }

    // Blood glucose assessment
    if (parseInt(bloodGlucose) > 125) {
        result = 'High Blood Glucose (Possible Diabetes)';
    }

    // Display the result
    document.getElementById('result').innerText = `Health Status: ${result}`;
}
