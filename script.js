const questions = [
    { question: "Which of the following crops is classified as a Kharif crop?", options: ["Wheat", "Rice", "Barley", "Mustard"], answer: "Rice" },
    { question: "What is the ideal pH range of soil for most crops?", options: ["3.5 - 4.5", "5.5 - 7.5", "8.5 - 9.5", "10.0 - 11.0"], answer: "5.5 - 7.5" },
    { question: "Which of the following is a micronutrient essential for plant growth?", options: ["Nitrogen", "Potassium", "Zinc", "Phosphorus"], answer: "Zinc" },
    { question: "The Green Revolution in India was most effective in increasing the production of which crop?", options: ["Pulses", "Wheat", "Oilseeds", "Cotton"], answer: "Wheat" },
    { question: "Which fruit is known as the 'King of Fruits' in India?", options: ["Mango", "Banana", "Apple", "Grapes"], answer: "Mango" },
    { question: "What is the main purpose of grafting in horticulture?", options: ["Improving soil fertility", "Combining desirable traits from two plants", "Controlling pests", "Enhancing water retention"], answer: "Combining desirable traits from two plants" },
    { question: "What is the Minimum Support Price (MSP)?", options: ["The price at which consumers buy from the market", "The price set by the government to support farmers", "The market price of seeds", "The cost of irrigation equipment"], answer: "The price set by the government to support farmers" },
    { question: "Which of the following is an example of a cash crop?", options: ["Rice", "Cotton", "Wheat", "Maize"], answer: "Cotton" },
    { question: "Which breed of cattle is known for high milk production in India?", options: ["Gir", "Ongole", "Kangayam", "Deoni"], answer: "Gir" },
    { question: "What is the primary symptom of Foot and Mouth Disease in livestock?", options: ["Skin rash", "Blisters in the mouth and hooves", "Loss of fur", "Swollen joints"], answer: "Blisters in the mouth and hooves" },
    { question: "Contour plowing is practiced to:", options: ["Increase seed germination rates", "Prevent soil erosion", "Enhance water absorption", "Improve crop yield"], answer: "Prevent soil erosion" },
    { question: "Which irrigation method is most efficient for water conservation?", options: ["Flood irrigation", "Drip irrigation", "Furrow irrigation", "Sprinkler irrigation"], answer: "Drip irrigation" },
    { question: "Which of the following is the most common type of irrigation used in India?", options: ["Surface Irrigation", "Drip Irrigation", "Sprinkler Irrigation", "Flood Irrigation"], answer: "Surface Irrigation" },
    { question: "What is the primary purpose of crop rotation?", options: ["Increase crop yield", "Reduce soil fertility", "Control pests and diseases", "Improve water retention"], answer: "Control pests and diseases" },
    { question: "Which of the following is a legume crop?", options: ["Maize", "Rice", "Soybean", "Sugarcane"], answer: "Soybean" },
    { question: "What does the term 'hydroponics' refer to?", options: ["Soil-based farming", "Farming with minimal water", "Farming using synthetic fertilizers", "Soil-less farming using water and nutrients"], answer: "Soil-less farming using water and nutrients" },
    { question: "Which crop is commonly used for biofuel production?", options: ["Wheat", "Sugarcane", "Corn", "Cotton"], answer: "Sugarcane" },
    { question: "Which insect is primarily responsible for pollination of most crops?", options: ["Butterflies", "Moths", "Bees", "Ants"], answer: "Bees" },
    { question: "What is the common cause of the wilting of plants in a dry environment?", options: ["Excessive heat", "Insufficient water", "Increased light", "Excessive rainfall"], answer: "Insufficient water" },
    { question: "Which of the following is a major cereal crop grown in India?", options: ["Rice", "Cotton", "Tea", "Tobacco"], answer: "Rice" },
    { question: "What is the process of preparing land for planting crops called?", options: ["Plowing", "Harvesting", "Irrigating", "Fertilizing"], answer: "Plowing" },
    { question: "Which type of manure is derived from animal waste?", options: ["Compost", "Green manure", "Farmyard manure", "Chemical fertilizers"], answer: "Farmyard manure" },
    { question: "Which crop is known as the 'Queen of the Cereals'?", options: ["Rice", "Wheat", "Maize", "Millets"], answer: "Millets" },
    { question: "What is the process of removing weeds from the soil called?", options: ["Plowing", "Weeding", "Irrigating", "Fertilizing"], answer: "Weeding" },
    { question: "Which of the following is an example of organic farming?", options: ["Use of chemical fertilizers", "Use of genetically modified seeds", "Use of natural pesticides", "Use of chemical herbicides"], answer: "Use of natural pesticides" },
    { question: "What is the main reason for crop diseases?", options: ["Nutrient deficiency", "Pest infestation", "Climate change", "Poor irrigation"], answer: "Pest infestation" },
    { question: "Which of the following crops requires the most water for irrigation?", options: ["Wheat", "Cotton", "Rice", "Maize"], answer: "Rice" },
    { question: "What is the primary function of nitrogen in plants?", options: ["Improves root growth", "Enhances leaf growth", "Increases fruit yield", "Boosts flowering"], answer: "Enhances leaf growth" },
    { question: "Which of the following is a method used to control pests in organic farming?", options: ["Chemical pesticides", "Biological control", "Genetically modified organisms", "Synthetic herbicides"], answer: "Biological control" },
    { question: "Which farming technique involves growing two or more crops together in the same field?", options: ["Crop rotation", "Agroforestry", "Mixed cropping", "Monoculture"], answer: "Mixed cropping" },
    { question: "What is the process of converting crop residues into usable organic matter called?", options: ["Composting", "Fertilizing", "Irrigating", "Plowing"], answer: "Composting" },
    { question: "What type of fertilizer is made from plant and animal materials?", options: ["Synthetic fertilizer", "Organic fertilizer", "Chemical fertilizer", "Green manure"], answer: "Organic fertilizer" },
    { question: "Which of the following is an example of a perishable agricultural product?", options: ["Rice", "Wheat", "Tomatoes", "Cotton"], answer: "Tomatoes" },
    { question: "Which part of the plant primarily absorbs water?", options: ["Roots", "Leaves", "Stem", "Flowers"], answer: "Roots" },
    { question: "What is the most important factor influencing crop yield?", options: ["Water availability", "Soil fertility", "Sunlight", "Temperature"], answer: "Soil fertility" },
    { question: "Which of the following is an example of a non-renewable resource used in agriculture?", options: ["Water", "Soil", "Fossil fuels", "Sunlight"], answer: "Fossil fuels" },
    { question: "What is the common method used to preserve seeds for future use?", options: ["Drying", "Freezing", "Irrigating", "Fertilizing"], answer: "Drying" },
    { question: "Which of the following is a benefit of agroforestry?", options: ["Increased soil erosion", "Improved biodiversity", "Decreased water retention", "Increased chemical pesticide use"], answer: "Improved biodiversity" },
    { question: "Which of the following is an example of a perennial crop?", options: ["Tomatoes", "Cotton", "Apple", "Wheat"], answer: "Apple" },
    { question: "Which of the following crops is grown primarily for its fiber?", options: ["Rice", "Wheat", "Cotton", "Soybean"], answer: "Cotton" },
    { question: "Which of the following is a direct consequence of over-farming?", options: ["Soil erosion", "Increased crop yield", "Improved soil fertility", "More effective pest control"], answer: "Soil erosion" },
    { question: "What does 'GMOs' stand for in agriculture?", options: ["Genetically Modified Organisms", "Greenfield Modified Operations", "Giant Mechanical Organisms", "Great Multiplied Organisms"], answer: "Genetically Modified Organisms" }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuiz() {
    shuffleArray(questions);
    const selectedQuestions = questions.slice(0, 20); // Get 20 random questions

    const quizContainer = document.getElementById("questionsContainer");
    quizContainer.innerHTML = "";

    selectedQuestions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <input type="radio" name="q${index}" value="${q.options[0]}"> ${q.options[0]}<br>
            <input type="radio" name="q${index}" value="${q.options[1]}"> ${q.options[1]}<br>
            <input type="radio" name="q${index}" value="${q.options[2]}"> ${q.options[2]}<br>
            <input type="radio" name="q${index}" value="${q.options[3]}"> ${q.options[3]}<br>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore(event) {
    event.preventDefault();

    const form = event.target;
    let score = 0;
    const review = [];

    questions.slice(0, 20).forEach((q, index) => {
        const selectedAnswer = form[`q${index}`]?.value;
        if (selectedAnswer === q.answer) {
            score++;
        } else {
            review.push(`<p>Question ${index + 1}: Correct Answer: ${q.answer} <br>Your Answer: ${selectedAnswer || 'None'}</p>`);
        }
    });

    document.getElementById("score").textContent = score;
    document.getElementById("review").innerHTML = review.join("");
    document.getElementById("quizForm").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
}

document.getElementById("quizForm").addEventListener("submit", calculateScore);
window.onload = loadQuiz;
