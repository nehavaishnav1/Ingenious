function getBotResponse(input) {

    if (input == "How should I prepare") {
        return "Understand the format, study thoroughly, practice with samples, manage time efficiently ";
    } else if (input == "How to manage exam stress?") {
        return "Relaxation techniques, healthy lifestyle, seeking support if needed.";

    }

    
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}