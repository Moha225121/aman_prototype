const assistantPhrases = [
  "أهلًا، أنا رفيق أمان",
  "ابدأ الكلام بطريقتك وبدون تسجيل",
  "نقدر نساعدك تختار الخطوة المناسبة"
];

function setupAssistantWidgets() {
  document.querySelectorAll("[data-assistant-widget]").forEach((widget) => {
    const trigger = widget.querySelector(".aman-assistant-character");
    const bubble = widget.querySelector(".aman-assistant-bubble");
    let phraseIndex = 0;

    if (!trigger || !bubble) return;

    trigger.addEventListener("click", () => {
      phraseIndex = (phraseIndex + 1) % assistantPhrases.length;
      bubble.textContent = assistantPhrases[phraseIndex];
      widget.classList.toggle("bubble-open");
      trigger.setAttribute("aria-expanded", String(widget.classList.contains("bubble-open")));
    });

    widget.querySelectorAll("[data-assistant-say]").forEach((button) => {
      button.addEventListener("click", () => {
        bubble.textContent = button.dataset.assistantSay;
        widget.classList.add("bubble-open");
        trigger.setAttribute("aria-expanded", "true");
      });
    });
  });
}

setupAssistantWidgets();
