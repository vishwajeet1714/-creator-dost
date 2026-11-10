
const tools = {
  caption: {
    title: "✍️ Caption Generator",
    description: "Create captions for your next Instagram post."
  },
  bio: {
    title: "💜 Bio Generator",
    description: "Create your own stylish Instagram bio."
  },
  hashtags: {
    title: "#️⃣ Hashtag Generator",
    description: "Find hashtags for your content."
  },
  reels: {
    title: "🎬 Reel Ideas Generator",
    description: "Discover ideas for your next viral reel."
  }
};

function showTool(type) {
  const tool = tools[type];

  if (!tool) return;

  document.getElementById("tool-title").textContent = tool.title;
  document.getElementById("tool-description").textContent = tool.description;

  const form = document.getElementById("tool-form");
  const result = document.getElementById("tool-result");

  result.innerHTML = "";

  form.innerHTML = `
    <input
      id="creator-input"
      type="text"
      placeholder="Enter your topic or niche..."
      maxlength="100"
      style="width:100%;padding:14px;margin:20px 0;
      background:#090914;color:white;border:1px solid #48316c;
      border-radius:10px;font-size:16px;"
    >

    <button onclick="generateContent('${type}')">
      Generate Now ✨
    </button>
  `;

  document.getElementById("workspace").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function generateContent(type) {
  const input = document.getElementById("creator-input");
  const result = document.getElementById("tool-result");
  const topic = input.value.trim();

  if (!topic) {
    result.textContent = "Please enter a topic first!";
    return;
  }

  let output = "";

  if (type === "caption") {
    output = [
      `✨ ${topic} — a moment worth remembering!`,
      `Life feels better when it's all about ${topic}. ❤️`,
      `Creating memories, one ${topic} at a time. 📸`,
      `Some moments need no words, just ${topic}. ✨`
    ];
  }

  else if (type === "bio") {
    output = [
      `✨ ${topic} enthusiast\n📸 Creating my own story\n❤️ Living one day at a time`,
      `🌸 ${topic} lover\n🚀 Dream big, create bigger\n✨ Welcome to my world`,
      `💜 Passionate about ${topic}\n📍 Making memories\n🎯 Just getting started`
    ];
  }

  else if (type === "hashtags") {
    const clean = topic.toLowerCase().replace(/[^a-z0-9]/g, "");
    output = [
      `#${clean} #${clean}lover #${clean}life #${clean}vibes #explore #instagood #contentcreator #reelsinstagram #trending #creator`
    ];
  }

  else if (type === "reels") {
    output = [
      `🎬 Make a day-in-my-life reel about ${topic}.`,
      `🎬 Show 3 things people don't know about ${topic}.`,
      `🎬 Create a before-and-after transformation featuring ${topic}.`,
      `🎬 Make a cinematic montage of ${topic}.`,
      `🎬 Share your personal story related to ${topic}.`
    ];
  }

  const selected = Array.isArray(output)
    ? output[Math.floor(Math.random() * output.length)]
    : output;

  result.innerHTML = `
    <div style="margin-top:25px;padding:20px;
    background:#211638;border:1px solid #6845a0;
    border-radius:12px;">
      <h3 style="margin-bottom:15px;color:#c5a3ff;">
        Your Result ✨
      </h3>
      <p id="generated-output"
      style="white-space:pre-line;line-height:1.8;color:white;"></p>
      <button id="copy-result" style="margin-top:18px;">
        📋 Copy Result
      </button>
    </div>
  `;

  document.getElementById("generated-output").textContent = selected;

  document.getElementById("copy-result").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(selected);
      document.getElementById("copy-result").textContent = "Copied! ✅";
    } catch {
      document.getElementById("copy-result").textContent =
        "Copy unavailable. Please select the text manually.";
    }
  });
}
