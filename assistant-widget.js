const assistantPhrases = [
  "أهلًا، أنا رفيق أمان",
  "ابدأ الكلام بطريقتك وبدون تسجيل",
  "نقدر نساعدك تختار الخطوة المناسبة"
];

const assistantImages = {
  thinking: "assets/aman-assistant-thinking.png?v=4",
  writing: "assets/aman-assistant-writing.png?v=4",
  calm: "assets/aman-assistant-calm.png?v=4"
};

function setAssistantCharacter(widget, state = "calm") {
  const image = widget?.querySelector(".aman-assistant-character img");
  const src = assistantImages[state] || assistantImages.calm;

  if (!image) return;

  image.src = src;
  widget.dataset.assistantState = state;
}

window.setAssistantCharacter = setAssistantCharacter;

function setupAssistantWidgets() {
  document.querySelectorAll("[data-assistant-widget]").forEach((widget) => {
    const trigger = widget.querySelector(".aman-assistant-character");
    const bubble = widget.querySelector(".aman-assistant-bubble");
    const states = ["calm", "thinking", "writing"];
    let phraseIndex = 0;

    if (!trigger || !bubble) return;

    if (widget.dataset.assistantState) {
      setAssistantCharacter(widget, widget.dataset.assistantState);
    }

    trigger.addEventListener("click", () => {
      phraseIndex = (phraseIndex + 1) % assistantPhrases.length;
      bubble.textContent = assistantPhrases[phraseIndex];
      setAssistantCharacter(widget, states[phraseIndex] || "calm");
      widget.classList.toggle("bubble-open");
      trigger.setAttribute("aria-expanded", String(widget.classList.contains("bubble-open")));
    });

    widget.querySelectorAll("[data-assistant-say]").forEach((button) => {
      button.addEventListener("click", () => {
        bubble.textContent = button.dataset.assistantSay;
        setAssistantCharacter(widget, button.dataset.assistantState || "thinking");
        widget.classList.add("bubble-open");
        trigger.setAttribute("aria-expanded", "true");
      });
    });
  });
}

setupAssistantWidgets();
