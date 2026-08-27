const SITE_CONFIG = {
  name: "Goobaa Client",
  version: "1.0.0",
  minecraftVersion: "1.21.11",
  discordUrl: "https://discord.gg/goobaa",
  downloadUrl: "https://github.com/zav001/D3et2t23y3/releases/download/v1/GoobaaClient.1.21.11.jar"
};

const FEATURES = [
  ["↯","Performance","Optimized for smooth gameplay on DonutSMP."],
  ["▣","Custom HUD","Build a HUD that fits your playstyle."],
  ["◉","Visuals","Useful visual customization and overlays."],
  ["✚","Mod Support","Designed to work cleanly with the Fabric ecosystem."],
  ["☷","Configurable","Customize features and settings to your preferences."],
  ["⌁","DonutSMP Focused","Built specifically around the DonutSMP experience."]
];

const FAQS = [
  ["What is Goobaa Client?","Goobaa Client is a focused Minecraft client for DonutSMP built around the Fabric ecosystem and Minecraft 1.21.11."],
  ["Which Minecraft version is supported?","The current site configuration targets Minecraft 1.21.11. Update SITE_CONFIG in script.js when the supported version changes."],
  ["Does Goobaa Client require Fabric?","Yes. Goobaa is presented as a Fabric-based client, so install the matching Fabric Loader and Fabric API before launching."],
  ["How do I install Goobaa Client?","Download the JAR, install Fabric for Minecraft 1.21.11, place the Goobaa JAR in your .minecraft/mods folder, then launch the matching Fabric profile."],
  ["Where can I download Goobaa Client?","Use any of the Download Goobaa buttons on this page. They point to the configured GitHub release asset."],
  ["Where can I get help?","Use the project's normal community or repository support channel. Add a Discord or issue-tracker link here if you have one."]
];

function renderFeatures(){
  document.querySelector("#feature-grid").innerHTML = FEATURES.map(([icon,name,description]) => `
    <article class="feature-card reveal">
      <div class="feature-icon">${icon}</div>
      <h3>${name}</h3>
      <p>${description}</p>
    </article>
  `).join("");
}

function renderFaq(){
  document.querySelector("#faq-list").innerHTML = FAQS.map(([q,a]) => `
    <div class="accordion-item">
      <button class="accordion-button" type="button" aria-expanded="false">
        <span>${q}</span><span>+</span>
      </button>
      <div class="accordion-answer"><p>${a}</p></div>
    </div>
  `).join("");

  document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.querySelector("span:last-child").textContent = open ? "+" : "−";
      answer.style.maxHeight = open ? null : `${answer.scrollHeight}px`;
    });
  });
}

function setConfig(){
  document.querySelectorAll("[data-site-version]").forEach(el => el.textContent = SITE_CONFIG.version);
  document.querySelectorAll("[data-mc-version]").forEach(el => el.textContent = SITE_CONFIG.minecraftVersion);
  document.querySelectorAll('a[download]').forEach(a => {
    a.href = SITE_CONFIG.downloadUrl;
  });
}

function init(){
  setConfig();
  renderFeatures();
  renderFaq();

  const nav = document.querySelector(".nav-wrap");
  const menu = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");

  menu.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }, {passive:true});

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", init);
