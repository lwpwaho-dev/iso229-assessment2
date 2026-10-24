/**
 * ISO229 Web Design - Assessment 4
 * Integrated JavaScript Implementation
 * Topic: Vanimo Surf Lodge & Annual Surf Competition
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       FEATURE 1: Mobile Navigation Menu Toggle (Hamburger)
       ========================================================================== */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('nav-open');
        });
    }

    /* ==========================================================================
       FEATURE 2A: Interactive Surf Trip & Event Cost Calculator (services.html)
       ========================================================================== */
    const calcForm = document.getElementById('calcForm');
    if (calcForm) {
        const pkgSelect = document.getElementById('calc-pkg');
        const nightsInput = document.getElementById('calc-nights');
        const surfersInput = document.getElementById('calc-surfers');
        const boardHireCheck = document.getElementById('calc-board');
        const airportPickupCheck = document.getElementById('calc-pickup');
        const totalDisplay = document.getElementById('calcTotal');

        function calculateCost() {
            const pkgRate = parseFloat(pkgSelect.value) || 0;
            const nights = parseInt(nightsInput.value, 10) || 0;
            const surfers = parseInt(surfersInput.value, 10) || 0;

            let total = pkgRate * nights * surfers;

            // Add-ons
            if (boardHireCheck && boardHireCheck.checked) {
                total += (50 * nights * surfers); // PGK 50/day per surfer
            }
            if (airportPickupCheck && airportPickupCheck.checked) {
                total += (100 * surfers); // PGK 100 flat per surfer transfer
            }

            totalDisplay.textContent = `PGK ${total.toLocaleString()}`;
        }

        calcForm.addEventListener('input', calculateCost);
        calculateCost(); // Initial calculation
    }

    /* ==========================================================================
       FEATURE 2B: Client-Side Form Validation (contact.html)
       ========================================================================== */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('full-name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const serviceType = document.getElementById('service-type');
            const message = document.getElementById('message');
            const feedback = document.getElementById('formFeedback');

            let isValid = true;
            let errorMessages = [];

            // Reset field states
            [fullName, email, phone, serviceType, message].forEach(input => {
                if (input) input.classList.remove('input-error');
            });

            // Validate Full Name
            if (!fullName.value.trim()) {
                fullName.classList.add('input-error');
                errorMessages.push('Full Name is required.');
                isValid = false;
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) {
                email.classList.add('input-error');
                errorMessages.push('A valid email address is required.');
                isValid = false;
            }

            // Validate Phone
            if (!phone.value.trim() || phone.value.trim().length < 7) {
                phone.classList.add('input-error');
                errorMessages.push('A valid contact telephone/WhatsApp number is required.');
                isValid = false;
            }

            // Validate Primary Service Selection
            if (!serviceType.value) {
                serviceType.classList.add('input-error');
                errorMessages.push('Please select a Primary Request option.');
                isValid = false;
            }

            // Validate Message
            if (!message.value.trim()) {
                message.classList.add('input-error');
                errorMessages.push('Please enter travel dates or experience details.');
                isValid = false;
            }

            // Display Feedback
            if (isValid) {
                feedback.className = 'feedback-msg success';
                feedback.textContent = 'Thank you! Your booking enquiry / registration has been validated and submitted successfully.';
                bookingForm.reset();
            } else {
                feedback.className = 'feedback-msg error';
                feedback.innerHTML = '<strong>Please correct the following errors:</strong><ul><li>' + errorMessages.join('</li><li>') + '</li></ul>';
            }
        });
    }
});