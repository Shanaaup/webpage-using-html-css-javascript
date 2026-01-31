function scrollToPredict() {
    document.getElementById("predict").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("predictForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Dummy prediction (replace with backend later)
    let prediction = Math.random() > 0.5 ? "Positive" : "Negative";

    document.getElementById("result").innerText =
        "Prediction Result: " + prediction;
});
