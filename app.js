function checkHealth() {
    // Get user input
    const bloodPressure = document.getElementById('bloodPressure').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Perform health check logic (replace this with your actual logic)
    let result = 'Healthy'; // Default result

    // Example logic (you can customize this based on your health criteria)
    if (parseInt(age) > 60) {
        result = 'Needs extra attention';
    } else if (parseInt(weight) > 100) {
        result = 'Overweight';
    }

    // Display the result
    document.getElementById('result').innerText = `Health Status: ${result}`;
}
