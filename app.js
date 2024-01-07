function checkHealth() {
    // Get user input
    const bloodPressure = document.getElementById('bloodPressure').value;
    const pulseRate = document.getElementById('pulseRate').value;
    const heartRatez = document.getElementById('heartRate').value;
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

    // Body temperature assessment
    const temperature = parseFloat(bodyTemperature);

    if (temperature < 35.8) {
        results.push('Low Temperature');
    } else if (temperature >= 35.9 && temperature <= 37.0) {
        results.push('Normal Temperature');
    } else if (temperature >= 37.1 && temperature <= 37.5) {
        results.push('Increased Temperature');
    } else if (temperature >= 37.6 && temperature <= 38.0) {
        results.push('Light Fever');
    } else if (temperature >= 38.1 && temperature <= 38.5) {
        results.push('Moderate Fever');
    } else if (temperature >= 38.6 && temperature <= 39.5) {
        results.push('High Fever');
    } else if (temperature >= 39.6 && temperature <= 42.0) {
        results.push('Very High Fever');
    }
    
    // Pulse rate assessment
    const pulse = parseInt(pulseRate);

    const athleteRanges = {
        'male': [[18, 25], [26, 35], [36, 45], [46, 55], [56, 65], [65, 150]],
        'female': [[18, 25], [26, 35], [36, 45], [46, 55], [56, 65], [65, 150]]
    };

    let category;

    const ageRanges = athleteRanges[sex];
    
    if (Array.isArray(ageRanges)) {
        for (const [minAge, maxAge] of ageRanges) {
            if (age >= minAge && age <= maxAge) {
                switch (true) {
                    case (pulse >= 49 && pulse <= 55): category = 'Athlete'; break;
                    case (pulse >= 56 && pulse <= 61): category = 'Excellent'; break;
                    case (pulse >= 62 && pulse <= 65): category = 'Good'; break;
                    case (pulse >= 70 && pulse <= 73): category = 'Average'; break;
                    case (pulse >= 74 && pulse <= 81): category = 'Below Average'; break;
                    case (pulse >= 82): category = 'Poor'; break;
                }
                break;
            }
        }
    } else {
        // Handle the case when athleteRanges[sex] is not an array
        console.error('Invalid athleteRanges format for the provided sex:', sex);
    }

    results.push(`Resting Heart Rate: ${category}`);

    // Blood sugar assessment
    const glucose = parseInt(bloodGlucose);

    if (glucose >= 50 && glucose <= 79) {
        results.push('Low Blood Sugar');
    } else if (glucose >= 72 && glucose <= 108) {
        results.push('Normal Blood Sugar');
    } else if (glucose >= 120 && glucose <= 180) {
        results.push('Borderline Blood Sugar');
    } else if (glucose >= 215) {
        results.push('High Blood Sugar');
    }

    // Blood pressure assessment
    const bpValues = bloodPressure.split('/').map(value => parseInt(value));

    if (bpValues.length === 2) {
        const systolic = bpValues[0];
        const diastolic = bpValues[1];

        if (systolic < 120 && diastolic < 80) {
            results.push('Normal Blood Pressure');
        } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
            results.push('Elevated Blood Pressure');
        } else if (systolic >= 130 && systolic <= 139 && diastolic >= 80 && diastolic <= 89) {
            results.push('High Blood Pressure (Stage 1)');
        } else if (systolic >= 140 && diastolic >= 90) {
            results.push('High Blood Pressure (Stage 2)');
        } else if (systolic > 180 || diastolic > 120) {
            results.push('Hypertensive Crisis');
        }
    }

    // Blood oxygen assessment
    const oxygen = parseInt(bloodOxygen);

    if (oxygen >= 97) {
        results.push('Normal Blood Oxygen');
    } else if ((age <= 18 && oxygen >= 95) || (age > 18 && age <= 70 && oxygen >= 95) || (age > 70 && oxygen >= 95)) {
        results.push('Normal Blood Oxygen');
    } else if (oxygen >= 91 && oxygen <= 95) {
        results.push('Below Normal Blood Oxygen');
    } else if (oxygen < 91 && oxygen >= 90) {
        results.push('Low Blood Oxygen');
    } else if (oxygen < 90 && oxygen >= 80) {
        results.push('Very Low Blood Oxygen');
    } else if (oxygen < 80) {
        results.push('Cyanosis');
    }

     // Heart rate assessment
    const heartRate = parseInt(heartRatez);

    if ((age >= 18 && age <= 25 && ((sex === 'male' && heartRate >= 62 && heartRate <= 73) || (sex === 'female' && heartRate >= 64 && heartRate <= 80))) ||
        (age >= 26 && age <= 35 && ((sex === 'male' && heartRate >= 62 && heartRate <= 73) || (sex === 'female' && heartRate >= 64 && heartRate <= 81))) ||
        (age >= 36 && age <= 45 && ((sex === 'male' && heartRate >= 63 && heartRate <= 75) || (sex === 'female' && heartRate >= 65 && heartRate <= 82))) ||
        (age >= 46 && age <= 55 && ((sex === 'male' && heartRate >= 64 && heartRate <= 76) || (sex === 'female' && heartRate >= 66 && heartRate <= 83))) ||
        (age >= 56 && age <= 65 && ((sex === 'male' && heartRate >= 62 && heartRate <= 75) || (sex === 'female' && heartRate >= 64 && heartRate <= 82))) ||
        (age > 65 && ((sex === 'male' && heartRate >= 62 && heartRate <= 73) || (sex === 'female' && heartRate >= 64 && heartRate <= 81)))) {
        results.push('Normal Heart Rate');
    } else {
        results.push('Abnormal Heart Rate');
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
