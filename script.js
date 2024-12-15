// List of products categorized by type
const categories = {
    electronics: [
        { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop with 16GB RAM and 512GB SSD.' },
        { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest model with 128GB storage and excellent camera.' },
        { id: 3, name: 'Headphones', price: 199.99, description: 'Noise-canceling headphones for a premium audio experience.' },
        { id: 4, name: 'Smartwatch', price: 129.99, description: 'Fitness tracking smartwatch with heart rate monitor.' }
    ],
    fashion: [
        { id: 5, name: 'T-Shirt', price: 29.99, description: 'Comfortable cotton t-shirt in various sizes and colors.' },
        { id: 6, name: 'Jeans', price: 49.99, description: 'Stylish and durable denim jeans with a slim fit.' },
        { id: 7, name: 'Jacket', price: 89.99, description: 'Winter jacket with a warm lining and waterproof exterior.' },
        { id: 8, name: 'Sneakers', price: 59.99, description: 'Comfortable sneakers for daily wear, available in multiple sizes.' }
    ],
    homeGoods: [
        { id: 9, name: 'Couch', price: 499.99, description: 'Modern sectional sofa with comfortable seating.' },
        { id: 10, name: 'Coffee Table', price: 149.99, description: 'Wooden coffee table with a minimalist design.' },
        { id: 11, name: 'Lamp', price: 49.99, description: 'LED desk lamp with adjustable brightness.' },
        { id: 12, name: 'Rug', price: 89.99, description: 'Soft and durable area rug with a geometric pattern.' }
    ],
    beauty: [
        { id: 13, name: 'Face Cream', price: 29.99, description: 'Moisturizing cream with SPF 15, suitable for all skin types.' },
        { id: 14, name: 'Shampoo', price: 19.99, description: 'Gentle shampoo for dry and damaged hair.' },
        { id: 15, name: 'Lipstick', price: 15.99, description: 'Long-lasting matte lipstick available in various shades.' },
        { id: 16, name: 'Perfume', price: 59.99, description: 'Luxurious floral fragrance with a hint of musk.' }
    ]
};

// Function to display the chatbot messages
function displayMessage(message, sender = 'bot') {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle user input and response
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim()) {
        // Display user's message
        displayMessage(userInput, 'user');

        // Process the message
        processInput(userInput.toLowerCase());
    }
    document.getElementById('userInput').value = ''; // Clear input field
}

// Function to process the user input and generate a response
function processInput(input) {
    // Check for specific categories or general queries
    if (input.includes('electronics') || input.includes('tech')) {
        showProducts('electronics');
    } else if (input.includes('fashion') || input.includes('clothes')) {
        showProducts('fashion');
    } else if (input.includes('home') || input.includes('furniture')) {
        showProducts('homeGoods');
    } else if (input.includes('beauty') || input.includes('cosmetics')) {
        showProducts('beauty');
    } else if (input.includes('product') || input.includes('buy')) {
        showAllProducts();
    } else {
        displayMessage("Sorry, I didn't understand that. Try asking about electronics, fashion, home goods, or beauty products.", 'bot');
    }
}

// Function to display products in a specific category
function showProducts(category) {
    const products = categories[category];
    let productList = `Here are some ${category} products you can buy:\n`;
    
    products.forEach(product => {
        productList += `${product.name} - $${product.price}\n${product.description}\n\n`;
    });

    displayMessage(productList, 'bot');
}

// Function to display all products
function showAllProducts() {
    let productList = "Here are some products you can buy:\n";
    
    for (let category in categories) {
        categories[category].forEach(product => {
            productList += `${product.name} - $${product.price}\n${product.description}\n\n`;
        });
    }

    displayMessage(productList, 'bot');
}

// Initialize chatbot with a welcome message
displayMessage("Hi! I'm your shopping assistant. Ask me about products in electronics, fashion, home goods, or beauty.", 'bot');
