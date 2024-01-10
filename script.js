const sensorButtons = [
    { label: 'Precis', date: '01/10/2023 - 30/11/2023', imageUrl: 'imgs/precis.png', chartUrl: 'chart1.html' },
    { label: 'EC', date: '01/10/2023 - 30/11/2023', imageUrl: 'imgs/ec.png', chartUrl: 'chart2.html' },
    // Add more sensor details as needed
    ];

    const sensorContainer = document.getElementById('sensorButtons');

    // Function to create sensor buttons
    function createSensorButtons() {
    sensorButtons.forEach(sensor => {
        const button = document.createElement('button');
        button.classList.add('sensor-button');
        const img = document.createElement('img');
        img.src = sensor.imageUrl;
        img.alt = sensor.label;
        img.classList.add('sensor-image');
        button.appendChild(img);
        const label = document.createElement('span');
        label.textContent = sensor.label;
        button.appendChild(label);
        const label2 = document.createElement('span');
        label2.textContent = sensor.date;
        button.appendChild(label2);
        sensorContainer.appendChild(button);

        button.addEventListener('click', () => {
        window.location.href = sensor.chartUrl;
        });
    });
    }

    // Call the function to create sensor buttons
    createSensorButtons();
