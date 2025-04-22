// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("🎉 You clicked the button!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "#aaf";
  });
  
  document.addEventListener("keydown", (event) => {
    document.getElementById("keypressLog").textContent = `You pressed: ${event.key}`;
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("😲 Secret double-click unlocked!");
  });
  
  // 2. Interactive Elements
  document.getElementById("changeBtn").addEventListener("click", () => {
    const btn = document.getElementById("changeBtn");
    btn.textContent = "🎨 Changed!";
    btn.style.backgroundColor = "#4caf50";
  });
  
  const images = [
    "https://via.placeholder.com/200?text=Image+1",
    "https://via.placeholder.com/200?text=Image+2",
    "https://via.placeholder.com/200?text=Image+3",
  ];
  let currentImg = 0;
  
  document.getElementById("nextImg").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentImg];
  });
  
  // 3. Form Validation
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email.includes("@")) {
      alert("❌ Invalid email format.");
      return;
    }
  
    if (password.length < 8) {
      alert("❌ Password must be at least 8 characters.");
      return;
    }
  
    alert("✅ Form submitted successfully!");
  });
  
  // Real-time Feedback
  document.getElementById("password").addEventListener("input", function () {
    const feedback = document.getElementById("feedback");
    feedback.textContent = this.value.length < 8
      ? "Password too short ❗"
      : "✅ Strong password!";
  });
  