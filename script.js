// Mailto Link Generator - JavaScript Functions

// Main function to generate mailto link
function generateMailtoLink(validateInput = false) {
    // Get form values
    const to = document.getElementById('to').value.trim();
    const cc = document.getElementById('cc').value.trim();
    const bcc = document.getElementById('bcc').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const body = document.getElementById('body').value.trim();
    const linkText = document.getElementById('linkText').value.trim() || 'Send email';

    // Only validate when explicitly requested (button click)
    if (validateInput) {
        // Validate that at least 'to' field is filled
        if (!to) {
            alert('Please enter at least one email address in the "To" field');
            return;
        }

        // Validate email format only if not empty
        if (to && !isValidEmail(to)) {
            alert('Please enter a valid email address');
            return;
        }
    }

    // Skip generation if no 'to' field for real-time updates
    if (!validateInput && !to) {
        return;
    }

    // Build mailto link
    let mailtoLink = `mailto:${encodeURIComponent(to)}`;
    const params = [];

    if (cc && isValidEmail(cc)) {
        params.push(`cc=${encodeURIComponent(cc)}`);
    }

    if (bcc && isValidEmail(bcc)) {
        params.push(`bcc=${encodeURIComponent(bcc)}`);
    }

    if (subject) {
        params.push(`subject=${encodeURIComponent(subject)}`);
    }

    if (body) {
        params.push(`body=${encodeURIComponent(body)}`);
    }

    if (params.length > 0) {
        mailtoLink += '?' + params.join('&');
    }

    // Generate HTML code
    const htmlCode = `<a href="${mailtoLink}">${escapeHtml(linkText)}</a>`;

    // Display results - only scroll when button is clicked (validateInput = true)
    displayResults(mailtoLink, htmlCode, linkText, validateInput);
}

// Function to display results
function displayResults(mailtoLink, htmlCode, linkText, shouldScroll = false) {
    // Show results section
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';

    // Update content
    document.getElementById('mailtoLink').textContent = mailtoLink;
    document.getElementById('htmlCode').textContent = htmlCode;
    document.getElementById('previewText').textContent = linkText;
    document.getElementById('previewLink').href = mailtoLink;

    // Only scroll when explicitly requested (button click)
    if (shouldScroll) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Function to copy to clipboard
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;

    navigator.clipboard.writeText(text).then(function() {
        // Visual feedback
        const button = element.parentNode.querySelector('.copy-btn');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    }).catch(function(err) {
        console.error('Error copying: ', err);
        alert('Error copying to clipboard');
    });
}

// Function to handle donations
function donate(amount) {
    // Open PayPal donation page
    const paypalUrl = 'https://www.paypal.com/donate/?hosted_button_id=EMRHGW5FVTTBW';
    window.open(paypalUrl, '_blank');
}

// Event listeners when DOM is loaded
function initializeApp() {
    // Add event listener to form
    const form = document.getElementById('mailtoForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            generateMailtoLink(true); // Validate input on form submission
        });
    }

    // Add real-time generation on input change (without validation)
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (hasAnyInput()) {
                generateMailtoLink(false); // No validation for real-time updates
            }
        });
    });
}

// Check if any input has content
function hasAnyInput() {
    const inputs = document.querySelectorAll('#mailtoForm input, #mailtoForm textarea');
    return Array.from(inputs).some(input => input.value.trim() !== '');
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    console.log('Mailto Generator initialized successfully!');
});