document.getElementById("healthForm").addEventListener("submit", function(e){
    e.preventDefault();

    const result = document.getElementById("result");
    const randomValue = Math.random();

    if(randomValue < 0.33){
        result.innerText = "🟢 Low Health Risk – Maintain a healthy lifestyle!";
        result.style.color = "green";
    }
    else if(randomValue < 0.66){
        result.innerText = "🟠 Medium Health Risk – Regular checkups advised.";
        result.style.color = "orange";
    }
    else{
        result.innerText = "🔴 High Health Risk – Please consult a doctor.";
        result.style.color = "red";
    }
});
