document.addEventListener("DOMContentLoaded", () => {
    const messagesDiv = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Predefined responses
    const botResponses = {
        hello: "Hi there! How can I assist you?",
        help: "Sure! What do you need help with?",
        goodbye: "Goodbye! Have a great day!",
        "what is your name": "My Name is Chandrakant",
        "how are you": "I'm just a bot, but I'm here to help you!",
        "what do you do": "I am a chatbot designed to assist with your queries.",
        "where do you live": "I live in the cloud, ready to assist you anytime!",
        "tell me a joke": "Why don't programmers like nature? Too many bugs!",
        "favorite color": "I like all colors equally because I am a bot!",
        "what is the time": "I don't keep track of time, but your device does!",
        default: "I'm sorry Chandrakant, I didn't understand that. Can you try again?",
    };

    // Add a message to the chat
    const addMessage = (message, sender) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    };

    // Handle user input
    const handleInput = () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");

            // Generate bot response
            const botMessage =
                botResponses[userMessage.toLowerCase()] || botResponses.default;
            setTimeout(() => addMessage(botMessage, "bot"), 500);

            userInput.value = ""; // Clear input field
        }
    };

    // Event listeners
    sendButton.addEventListener("click", handleInput);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            handleInput();
        }
    });
});
