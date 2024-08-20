// Add JavaScript Code here
// Home Page: Display company information
function displayHomeInfo() {
    const homeElement = document.getElementById('home');
    if (homeElement) {
        homeElement.innerHTML = "<h1>Welcome to AutoMob-Mechanic</h1><p>Your trusted automobile service/repair company.</p>";
    }
}

// Login: Validate username and password
function validateLogin() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageElement = document.getElementById('login-message');
            if (username === 'user' && password === 'password') {
                messageElement.textContent = 'Login successful!';
                window.location.href = 'home.html';
            } else {
                messageElement.textContent = 'Invalid username or password!';
            }
        });
    }
}

// Reports: Display booking information
function displayReports() {
    const reportsElement = document.getElementById('reports');
    if (reportsElement) {
        fetch('js/users.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                let reportHtml = '<h2>Booking Reports</h2><ul>';
                data.bookings.forEach(booking => {
                    reportHtml += `<li>${booking.name} - ${booking.service} on ${booking.date}</li>`;
                });
                reportHtml += '</ul>';
                reportsElement.innerHTML = reportHtml;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                reportsElement.innerHTML = '<p>Error loading reports.</p>';
            });
    }
}


// Services: Display services provided by the company
function displayServices() {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
        servicesElement.innerHTML = `
            <ul>
                <li><a href="preventive-maintenance-service.html">Preventive Maintenance Service</a></li>
                <li><a href="body-repair-service.html">Body Repair Service</a></li>
                <li><a href="car-care-service.html">Car Care Service</a></li>
            </ul>
        `;
    }
}

// Preventive Maintenance Service: Display details
function displayPreventiveMaintenanceService() {
    const pmsElement = document.getElementById('pms');
    if (pmsElement) {
        pmsElement.innerHTML = "<h2>Preventive Maintenance Service</h2><p>Details about preventive maintenance service...</p>";
    }
}

// Body Repair Service: Display details
function displayBodyRepairService() {
    const brsElement = document.getElementById('brs');
    if (brsElement) {
        brsElement.innerHTML = "<h2>Body Repair Service</h2><p>Details about body repair service...</p>";
    }
}

// Car Care Service: Display details
function displayCarCareService() {
    const ccsElement = document.getElementById('ccs');
    if (ccsElement) {
        ccsElement.innerHTML = "<h2>Car Care Service</h2><p>Details about car care service...</p>";
    }
}

// Booking: Handle form submission
function handleBooking() {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            alert('Booking successful for ' + service + ' on ' + date + '!');
            window.location.href = 'booking-success.html';
        });
    }
}

// Booking Success: Display confirmation message
function displayBookingSuccess() {
    const successElement = document.getElementById('booking-success');
    if (successElement) {
        successElement.innerHTML = "<h2>Booking Confirmed</h2><p>Thank you for booking your service with us!</p>";
    }
}

// Logout: Handle user logout
function handleLogout() {
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            alert('You have been logged out.');
            window.location.href = 'login.html';
        });
    }
}

// Initialize the app based on the page
function initializeApp() {
    displayHomeInfo();
    validateLogin();
    displayReports();
    displayServices();
    displayPreventiveMaintenanceService();
    displayBodyRepairService();
    displayCarCareService();
    handleBooking();
    displayBookingSuccess();
    handleLogout();
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);
