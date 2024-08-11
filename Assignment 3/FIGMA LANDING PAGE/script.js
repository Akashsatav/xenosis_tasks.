// Search Functionality
        document.querySelector('.fa-magnifying-glass').addEventListener('click', function() {
            let searchQuery = prompt('Enter your search query:');
            if (searchQuery) {
                alert('You searched for: ' + searchQuery);
                // Add search functionality here
            }
        });

        // Cart Click Event
        document.querySelector('.fa-cart-shopping').addEventListener('click', function() {
            alert('Your cart is currently empty.');
        });

        // Sign in Button Event
        document.querySelector('.search-section button a').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link action
            alert('Sign-in functionality will be implemented here.');
        });



         // Search Functionality
        document.querySelector('.fa-magnifying-glass').addEventListener('click', function() {
            let searchQuery = prompt('Enter your search query:');
            if (searchQuery) {
                alert('You searched for: ' + searchQuery);
                // Add search functionality here
            }
        });

        // Cart Click Event
        document.querySelector('.fa-cart-shopping').addEventListener('click', function() {
            alert('Your cart is currently empty.');
        });

        // Sign in Button Event
        document.querySelector('.search-section button a').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link action
            alert('Sign-in functionality will be implemented here.');
        });

        // Send Button Event
        document.querySelector('.send-button').addEventListener('click', function() {
            let message = document.querySelector('.message-input').value;
            if (message.trim()) {
                alert('Your message: ' + message);
                document.querySelector('.message-input').value = ''; // Clear the input field
            } else {
                alert('Please enter a message before sending.');
            }
        });