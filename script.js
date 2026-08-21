/* Gooba Client — centralized project configuration */
const SITE_CONFIG = {
  name: "Gooba Client",
  version: "YOUR_VERSION",
  minecraftVersion: "1.21.11",
  // Direct GitHub release asset. Example:
  // https://github.com/USERNAME/REPOSITORY/releases/download/v1.0.0/gooba-client.jar
  downloadUrl: "https://github.com/zav001/D3et2t23y3/releases/download/v1/GoobaaClient.1.21.11.jar",
  // Repository homepage. Example:
  // https://github.com/USERNAME/REPOSITORY
  githubUrl: "https://github.com/zav001/D3et2t23y3",
  openSource: true
};

const FEATURES = [
  { icon: "↯", name: "Performance", description: "Optimized for a smooth Minecraft experience." },
  { icon: "⌗", name: "Custom HUD", description: "Build a HUD that fits your playstyle." },
  { icon: "◈", name: "Visuals", description: "Useful visual customization and overlays." },
  { icon: "◇", name: "Mod Support", description: "Designed to work cleanly with the Fabric ecosystem." },
  { icon: "⚙", name: "Configurable", description: "Customize features and settings to your preferences." },
  { icon: "○", name: "Lightweight", description: "Keep unnecessary overhead to a minimum." }
];

const FAQS = [
  ["What is Gooba Client?", "Gooba Client is a planned modern, lightweight Minecraft client for the Fabric ecosystem. Update this answer with the project's exact shipped functionality before publishing."],
  ["Which Minecraft versions are supported?", "The supported version is controlled by SITE_CONFIG.minecraftVersion in script.js. Replace the placeholder with the actual supported version or version range."],
  ["Does Gooba require Fabric?", "The site is written for a Fabric-based client. Confirm the exact Fabric Loader and Fabric API requirements for the release before publishing."],
  ["How do I install Gooba?", "Download the configured release JAR, install the required Fabric setup, place Gooba in the appropriate mods directory, and launch the matching Fabric profile."],
  ["Where can I download Gooba?", "Use the Download Gooba buttons after setting SITE_CONFIG.downloadUrl to the direct GitHub release asset URL. The template intentionally does not invent a repository or release."],
  ["Where is the source code?", "Set SITE_CONFIG.githubUrl to the real public repository. If the project is not public, keep openSource false and remove the GitHub source-code claim."],
  ["How do I report a bug?", "Once the GitHub repository is configured, use its Issues area for bug reports. Add a direct issue URL here if your project uses a different tracker."]
];

const setConfig = () => {
  document.querySelectorAll("[data-site-version]").forEach(el => el.textContent = SITE_CONFIG.version);
  document.querySelectorAll("[data-mc-version]").forEach(el => el.textContent = SITE_CONFIG.minecraftVersion);
  document.querySelectorAll(".download-link").forEach(el => {
    el.href = SITE_CONFIG.downloadUrl;
    if (SITE_CONFIG.downloadUrl.startsWith("YOUR_")) el.classList.add("is-placeholder");
  });
  document.querySelectorAll(".github-link").forEach(el => {
    el.href = SITE_CONFIG.githubUrl;
    if (SITE_CONFIG.githubUrl.startsWith("YOUR_")) el.classList.add("is-placeholder");
  });
  if (SITE_CONFIG.openSource) {
    document.querySelector("#open-source-stat").innerHTML = "<strong>Open Source</strong><span>Source available on GitHub</span>";
  }
};

const renderFeatures = () => {
  document.querySelector("#feature-grid").innerHTML = FEATURES.map(f => `
    <article class="feature-card reveal">
      <div class="feature-icon">${f.icon}</div>
      <h3>${f.name}</h3>
      <p>${f.description}</p>
    </article>`).join("");
};

const renderFaq = () => {
  document.querySelector("#faq-list").innerHTML = FAQS.map(([q,a], i) => `
    <div class="accordion-item">
      <button class="accordion-button" type="button" aria-expanded="false">
        <span>${q}</span><span>+</span>
      </button>
      <div class="accordion-answer"><p>${a}</p></div>
    </div>`).join("");
  document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.querySelector("span:last-child").textContent = open ? "+" : "−";
      answer.style.maxHeight = open ? null : `${answer.scrollHeight}px`;
    });
  });
};

const init = () => {
  setConfig();
  renderFeatures();
  renderFaq();

  const nav = document.querySelector(".nav-wrap");
  const menu = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  const toggle = () => {
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  };
  menu.addEventListener("click", toggle);
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 8), { passive: true });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
};

document.addEventListener("DOMContentLoaded", init);
