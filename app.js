const services = [
  {
    icon: "ش",
    title: "اضطرابات الشخصية",
    description: "جلسات متخصصة لفهم أنماط التفكير وتوجيه السلوك نحو التوازن والاستقرار.",
    detail: "تساعدك الخدمة على فهم الأنماط المتكررة في العلاقات والانفعالات، مع خطة إرشادية تدريجية تدعم الوعي والاتزان.",
    keywords: ["شخصية", "اندفاع", "تقلب", "علاقات", "غضب", "فراغ", "حساسية"]
  },
  {
    icon: "ق",
    title: "القلق",
    description: "خطوتك للتخلص من التوتر والأفكار المجهدة، واستعادة هدوء يومك وراحة بالك.",
    detail: "نركز على تنظيم الأفكار، تهدئة الاستجابة الجسدية للتوتر، وبناء روتين عملي يساندك في المواقف اليومية.",
    keywords: ["قلق", "توتر", "خوف", "أرق", "تفكير", "نبض", "ضيق", "هلع", "اختناق"]
  },
  {
    icon: "ا",
    title: "الاكتئاب",
    description: "دعم مهني لتجاوز الحزن وفقدان الشغف، واسترداد طاقة حياتك وحيويتك.",
    detail: "توفر الجلسات مساحة آمنة لفهم المشاعر الثقيلة، ثم تحويلها إلى خطوات صغيرة قابلة للتطبيق واستعادة المعنى تدريجيا.",
    keywords: ["اكتئاب", "حزن", "بكاء", "تعب", "خمول", "شغف", "وحدة", "يأس", "نوم"]
  },
  {
    icon: "و",
    title: "الوسواس القهري",
    description: "برامج إرشادية للتحكم في الأفكار المزعجة والتحرر من السلوكيات القهرية.",
    detail: "نقدم توجيها نفسيا منظما لفهم دائرة الوسواس والاستجابة لها بمهارات تساعد على تقليل الضغط واستعادة السيطرة.",
    keywords: ["وسواس", "قهري", "تكرار", "نظافة", "تأكد", "تفقد", "أفكار مزعجة", "طقوس"]
  },
  {
    icon: "ر",
    title: "الرهاب الاجتماعي",
    description: "مساحة آمنة لبناء ثقتك بنفسك وتجاوز مخاوف التفاعل مع الآخرين.",
    detail: "تساعدك الخدمة على التدرج في مواجهة المواقف الاجتماعية، وتقوية مهارات التواصل بثقة وهدوء.",
    keywords: ["رهاب", "اجتماعي", "خجل", "ناس", "تجمع", "إحراج", "تواصل", "حديث", "مقابلة"]
  },
  {
    icon: "أ",
    title: "الإرشاد الأسري",
    description: "أدوات علمية لحل الخلافات وتقريب وجهات النظر لبناء أسرة متماسكة ومستقرة.",
    detail: "نساعد الأسرة على فهم مصادر التوتر وتحسين الحوار، مع خطوات عملية تراعي الاحترام والخصوصية.",
    keywords: ["أسرة", "عائلة", "أهل", "خلاف", "أب", "أم", "أولاد", "تربية", "بيت"]
  },
  {
    icon: "ز",
    title: "الإرشاد الزواجي",
    description: "جلسات سرية لتجاوز التحديات وتجديد المودة والاستقرار.",
    detail: "تقدم الجلسات مساحة مشتركة لفهم الاحتياجات، إدارة الخلاف، وبناء اتفاقات أكثر وضوحا بين الشريكين.",
    keywords: ["زواج", "زوج", "زوجة", "شريك", "طلاق", "غيرة", "خيانة", "علاقة", "تفاهم"]
  }
];

const guidanceMemory = [
  {
    topic: "تنظيم القلق",
    cues: ["قلق", "توتر", "هلع", "خوف", "ضيق", "نبض", "أرق"],
    insight: "العلامات التي ذكرتها تميل إلى دائرة قلق: فكرة مقلقة، استجابة جسدية، ثم محاولة تجنب تزيد التوتر.",
    method: "من أحدث الأساليب المناسبة كبداية: تهدئة التنفس، تسمية الفكرة بدل تصديقها مباشرة، وتجزئة المشكلة إلى خطوة صغيرة خلال اليوم.",
    localContext: "في السياق المحلي الليبي نراعي ضغط الأسرة، الدراسة، العمل، وصعوبة طلب المساعدة أحيانا، لذلك نبدأ بخطوات عملية قابلة للتطبيق داخل البيت أو الجامعة."
  },
  {
    topic: "المزاج وفقدان الدافعية",
    cues: ["حزن", "اكتئاب", "تعب", "خمول", "وحدة", "شغف", "يأس", "نوم"],
    insight: "قد تكون المشكلة مرتبطة بانخفاض المزاج وفقدان الدافعية، خصوصا إذا استمرت الأعراض وأثرت على الدراسة أو العلاقات أو العناية بالنفس.",
    method: "يفيد هنا أسلوب التنشيط السلوكي: نشاط صغير، تواصل آمن مع شخص موثوق، وتقليل العزلة تدريجيا بدل انتظار تحسن المزاج أولا.",
    localContext: "نضع في الاعتبار أن التعب النفسي قد يفسر اجتماعيا كضعف، لذلك المساعد يستخدم لغة هادئة تحفظ كرامة الشخص وتدعوه لطلب دعم متخصص."
  },
  {
    topic: "الخلافات الأسرية والزواجية",
    cues: ["أسرة", "عائلة", "زوج", "زوجة", "خلاف", "طلاق", "بيت", "غيرة", "تفاهم"],
    insight: "وصفك يشير إلى احتياج لتنظيم الحوار وتحديد نمط الخلاف: هل المشكلة في سوء الفهم، الحدود، الثقة، أم تكرار نفس النقاش؟",
    method: "الأسلوب الأنسب كبداية هو الإصغاء المنظم: كل طرف يصف ما يشعر به دون اتهام، ثم تحديد طلب واحد واضح وقابل للتنفيذ.",
    localContext: "في الإرشاد المحلي نراعي خصوصية الأسرة الليبية وحساسية العلاقات، مع الحفاظ على السرية وتقليل التصعيد."
  },
  {
    topic: "الوسواس والأفكار المتكررة",
    cues: ["وسواس", "تكرار", "قهري", "تأكد", "نظافة", "أفكار مزعجة", "تفقد"],
    insight: "قد تكون المشكلة في حلقة وسواسية: فكرة مزعجة ثم فعل متكرر يعطي راحة قصيرة ويقوي الفكرة لاحقا.",
    method: "من الأساليب الحديثة: ملاحظة الفكرة دون تنفيذ الطقس مباشرة، وتأجيل الاستجابة لدقائق قصيرة، ثم زيادة المدة تدريجيا مع مختص.",
    localContext: "نشرح ذلك بلغة بسيطة حتى لا يشعر الزائر بالوصمة، ونوجهه لمختص لأن الوسواس يحتاج متابعة منظمة."
  },
  {
    topic: "الرهاب الاجتماعي والثقة",
    cues: ["رهاب", "خجل", "ناس", "تجمع", "إحراج", "حديث", "مقابلة", "تواصل"],
    insight: "يبدو أن القلق مرتبط بنظرة الآخرين أو الخوف من الإحراج، وهذا قد يدفع للتجنب ويقلل الثقة مع الوقت.",
    method: "البداية المناسبة هي التعرض التدريجي: موقف اجتماعي صغير وآمن، تدريب جملة قصيرة، ثم مراجعة التجربة بإنصاف.",
    localContext: "نراعي أن العلاقات الاجتماعية في ليبيا قريبة ومتشابكة، لذلك نقترح خطوات تحفظ الخصوصية ولا تضع الزائر تحت ضغط مفاجئ."
  }
];

const quickReplies = [
  { label: "أشعر بالقلق", text: "أشعر بقلق وتوتر وأفكار كثيرة ولا أعرف من أين أبدأ" },
  { label: "مشاكل أسرية", text: "لدي خلافات أسرية متكررة وأحتاج طريقة أفضل للحوار" },
  { label: "أحتاج حجز جلسة", text: "أريد حجز جلسة مع مرشد مناسب" },
  { label: "لا أعرف مشكلتي", text: "لا أعرف بالضبط ما المشكلة لكني متعب وأحتاج من يوجهني" }
];

const crisisWords = ["انتحار", "أقتل نفسي", "أؤذي نفسي", "إيذاء نفسي", "موت", "أنهي حياتي"];

const serviceGrid = document.querySelector("#serviceGrid");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");
const navItems = document.querySelectorAll(".nav-link");
const serviceModal = document.querySelector("#serviceModal");
const bookingModal = document.querySelector("#bookingModal");
const serviceModalTitle = document.querySelector("#serviceModalTitle");
const serviceModalText = document.querySelector("#serviceModalText");
const specialistInput = document.querySelector("#specialistInput");
const bookingForm = document.querySelector("#bookingForm");
const formMessage = document.querySelector("#formMessage");
const backToTop = document.querySelector(".back-to-top");
const chatFab = document.querySelector(".chat-fab");
const floatingChat = document.querySelector(".floating-chat");

function renderServices() {
  serviceGrid.innerHTML = services.map((service, index) => `
    <article class="card reveal">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <button class="btn card-btn service-more" type="button" data-index="${index}">اعرف أكثر</button>
    </article>
  `).join("");
}

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModals() {
  document.querySelectorAll(".modal.open").forEach((modal) => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("modal-open");
}

function openBooking(specialist = "فريق أمان") {
  specialistInput.value = specialist;
  bookingForm.reset();
  specialistInput.value = specialist;
  formMessage.textContent = "";
  formMessage.className = "form-message";
  bookingForm.querySelectorAll(".invalid").forEach((field) => field.classList.remove("invalid"));
  openModal(bookingModal);
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FFa-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countMatches(text, keywords) {
  const normalized = normalizeText(text);
  return keywords.reduce((score, keyword) => {
    return normalized.includes(normalizeText(keyword)) ? score + 1 : score;
  }, 0);
}

function detectCrisis(text) {
  return crisisWords.some((word) => normalizeText(text).includes(normalizeText(word)));
}

function analyzeGuestMessage(text) {
  if (detectCrisis(text)) {
    return {
      service: "فريق أمان",
      topic: "دعم عاجل",
      confidence: "عالية",
      response: "أفهم أن كلامك يحمل ألما شديدا. سلامتك الآن هي الأولوية: تواصل فورا مع شخص قريب وموثوق، ولا تبق وحدك إذا كان هناك خطر عليك. المساعد هنا للتوجيه الأولي فقط، والحالة تحتاج دعما مباشرا من مختص أو جهة طوارئ محلية.",
      actionLabel: "اطلب تواصل عاجل"
    };
  }

  const rankedServices = services
    .map((service) => ({ ...service, score: countMatches(text, service.keywords) }))
    .sort((a, b) => b.score - a.score);

  const rankedMemory = guidanceMemory
    .map((item) => ({ ...item, score: countMatches(text, item.cues) }))
    .sort((a, b) => b.score - a.score);

  const bestService = rankedServices[0].score > 0 ? rankedServices[0] : services[1];
  const bestMemory = rankedMemory[0].score > 0 ? rankedMemory[0] : {
    topic: "تحديد الاحتياج",
    insight: "من كلامك يبدو أن هناك ضغطا يحتاج ترتيبا قبل اختيار الخدمة. قد نبدأ بسؤالين: متى بدأت المشكلة؟ وما أكثر شيء تؤثر عليه الآن؟",
    method: "الخطوة العملية هي كتابة ثلاثة أمور: الشعور الأقوى، الموقف المتكرر، وما الذي ترغب أن يتغير أولا.",
    localContext: "نحافظ على السرية ونوجهك بهدوء للخدمة الأقرب دون إطلاق تشخيص نهائي."
  };

  const confidence = rankedServices[0].score >= 2 || rankedMemory[0].score >= 2 ? "متوسطة" : "أولية";
  const response = `من منظور المساعد الذكي، أقرب موضوع لوصفك هو: ${bestMemory.topic}. ${bestMemory.insight} ${bestMemory.method} وبالاستناد إلى ذاكرة أمان الإرشادية المحلية: ${bestMemory.localContext} أنسب مكان تبدأ منه داخل المنصة هو خدمة ${bestService.title}.`;

  return {
    service: bestService.title,
    topic: bestMemory.topic,
    confidence,
    response,
    actionLabel: "احجز مع مرشد مناسب"
  };
}

function addMessage(chat, text, type = "bot", options = {}) {
  const messages = chat.querySelector(".chat-messages");
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;

  if (options.meta) {
    const meta = document.createElement("span");
    meta.className = "message-meta";
    meta.textContent = options.meta;
    message.appendChild(meta);
  }

  if (options.withAction) {
    const action = document.createElement("button");
    action.className = "mini-action";
    action.type = "button";
    action.textContent = options.actionLabel || "احجز مع مرشد";
    action.addEventListener("click", () => openBooking(options.actionService || "فريق أمان"));
    message.appendChild(action);
  }

  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function respondToGuest(chat, text) {
  const analysis = analyzeGuestMessage(text);
  const meta = `ترشيح أولي: ${analysis.service} | مستوى الثقة: ${analysis.confidence}`;
  window.setTimeout(() => {
    addMessage(chat, analysis.response, "bot", {
      meta,
      withAction: true,
      actionService: analysis.service,
      actionLabel: analysis.actionLabel
    });
  }, 320);
}

function setupChat(chat) {
  const messages = chat.querySelector(".chat-messages");
  const replies = chat.querySelector(".quick-replies");
  const form = chat.querySelector(".chat-form");
  const input = chat.querySelector(".chat-input");
  messages.innerHTML = "";
  replies.innerHTML = "";

  addMessage(chat, "اهلا بيك في امان ..\nتقدر تحكي معايا كضيف بدون تسجيل دخول ، نعطيك كل معلومة بذاكرة ارشادية من ابحاث ليبية ، و تذكر هذا توجيه اولي بس ، مش تشخيص المختص ..");

  quickReplies.forEach((reply) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = reply.label;
    button.addEventListener("click", () => {
      addMessage(chat, reply.text, "user");
      respondToGuest(chat, reply.text);
    });
    replies.appendChild(button);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addMessage(chat, text, "user");
    input.value = "";
    respondToGuest(chat, text);
  });
}

function validateBooking() {
  let valid = true;
  const requiredFields = bookingForm.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    const isEmpty = !field.value.trim();
    field.classList.toggle("invalid", isEmpty);
    if (isEmpty) valid = false;
  });

  const phone = bookingForm.elements.phone;
  const phoneValid = /^(\+?218|0)?9[1-9]\d{7}$/.test(phone.value.trim());
  if (phone.value.trim() && !phoneValid) {
    phone.classList.add("invalid");
    formMessage.textContent = "يرجى إدخال رقم هاتف ليبي صحيح.";
    return false;
  }

  if (!valid) {
    formMessage.textContent = "يرجى تعبئة الحقول المطلوبة قبل تأكيد الحجز.";
    return false;
  }

  return true;
}

function setupInteractions() {
  function activateInterface(shell, target) {
    shell.querySelectorAll(".interface-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.interface === target);
    });
    shell.querySelector(".interface-preview").dataset.activeInterface = target;
    shell.querySelectorAll(".interface-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === target);
    });
  }

  document.addEventListener("click", (event) => {
    const serviceButton = event.target.closest(".service-more");
    const bookingButton = event.target.closest(".open-booking");
    const closeButton = event.target.closest("[data-close-modal]");
    const interfaceTab = event.target.closest(".interface-tab");
    const jumpInterface = event.target.closest("[data-jump-interface]");
    const mockConfirm = event.target.closest(".mock-confirm-booking");
    const mockCase = event.target.closest(".mock-list button");
    const mockStat = event.target.closest(".mock-stat");

    if (serviceButton) {
      const service = services[Number(serviceButton.dataset.index)];
      serviceModalTitle.textContent = service.title;
      serviceModalText.textContent = service.detail;
      openModal(serviceModal);
    }

    if (bookingButton) {
      closeModals();
      openBooking(bookingButton.dataset.specialist || "فريق أمان");
    }

    if (closeButton) {
      closeModals();
    }

    if (interfaceTab) {
      activateInterface(interfaceTab.closest(".interface-shell"), interfaceTab.dataset.interface);
    }

    if (jumpInterface) {
      const shell = jumpInterface.closest(".interface-shell");
      activateInterface(shell, jumpInterface.dataset.jumpInterface);
    }

    if (mockConfirm) {
      const panel = mockConfirm.closest(".interface-panel");
      const status = panel.querySelector(".mock-booking-status");
      status.textContent = "تم إنشاء طلب حجز تجريبي، وسيظهر الآن في واجهة المرشد.";
      status.classList.add("success");
      mockConfirm.textContent = "تم تأكيد الطلب";
      window.setTimeout(() => activateInterface(panel.closest(".interface-shell"), "counselor"), 700);
    }

    if (mockCase) {
      const list = mockCase.closest(".mock-list");
      list.querySelectorAll("button").forEach((button) => button.classList.toggle("active", button === mockCase));
      list.querySelector(".mock-case-note").textContent = `تم اختيار: ${mockCase.querySelector("b").textContent}. يمكنك متابعة تفاصيل الحالة داخل لوحة المرشد.`;
    }

    if (mockStat) {
      const detail = mockStat.closest(".mock-admin-grid").querySelector(".mock-admin-detail");
      detail.textContent = "عرض تفصيلي تجريبي: الطلبات موزعة حسب نوع الاستشارة، مستوى الأولوية، ووقت الحجز.";
    }
  });

  document.querySelectorAll(".mock-chat-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      const text = input.value.trim();
      if (!text) return;
      const log = form.closest(".mock-chat-screen").querySelector(".mock-chat-log");
      const userBubble = document.createElement("div");
      userBubble.className = "mock-bubble user";
      userBubble.textContent = text;
      const botBubble = document.createElement("div");
      botBubble.className = "mock-bubble bot";
      botBubble.textContent = analyzeGuestMessage(text).response;
      log.append(userBubble, botBubble);
      input.value = "";
      log.scrollTop = log.scrollHeight;
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModals();
      floatingChat.classList.remove("open");
      floatingChat.setAttribute("aria-hidden", "true");
    }
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });

  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".accordion-item").forEach((other) => {
        if (other !== item) other.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!validateBooking()) return;

    formMessage.textContent = "تم إرسال طلب الحجز بنجاح، سيتواصل معك فريق أمان قريبا.";
    formMessage.className = "form-message success";
    bookingForm.querySelector(".submit-btn").textContent = "تم إرسال الطلب";
    window.setTimeout(() => {
      closeModals();
      bookingForm.querySelector(".submit-btn").textContent = "تأكيد الحجز";
    }, 1700);
  });

  chatFab.addEventListener("click", () => {
    const isOpen = floatingChat.classList.toggle("open");
    floatingChat.setAttribute("aria-hidden", String(!isOpen));
  });

  document.querySelector(".close-floating").addEventListener("click", () => {
    floatingChat.classList.remove("open");
    floatingChat.setAttribute("aria-hidden", "true");
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupScrollEffects() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navItems.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 580);
  }, { passive: true });
}

renderServices();
setupInteractions();
document.querySelectorAll(".chat-widget").forEach(setupChat);
setupScrollEffects();
