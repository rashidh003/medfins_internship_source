// document.getElementById('queryForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const deviceName = document.querySelector('input[name="deviceName"]').value;
//     const panel = document.querySelector('select[name="panel"]').value;

//     const queryParams = `?deviceName=${encodeURIComponent(deviceName)}&panel=${encodeURIComponent(panel)}`;
//     const redirectUrl = `device-information.html${queryParams}`;

//     window.location.href = redirectUrl;
// });



document.getElementById('queryForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const deviceName = document.querySelector('input[name="deviceName"]').value;
    const panel = document.querySelector('select[name="panel"]').value;

    // Construct the URL with query parameters
    const queryParams = `?deviceName=${encodeURIComponent(deviceName)}&panel=${encodeURIComponent(panel)}`;
    const redirectUrl = `device-information.html${queryParams}`;

    // Redirect to the new page with the search parameters
    window.location.href = redirectUrl;
});
