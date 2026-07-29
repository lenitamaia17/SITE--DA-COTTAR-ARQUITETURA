/**
 * COTTAR ARQUITETURA — LÓGICA DO SITE
 * -----------------------------------------------------------------
 * Todo o conteúdo é lido de SITE_DATA (js/data.js) e renderizado aqui.
 * Seções: Header/Nav | Hero | Sobre | Portfólio + Filtros | Modal
 *         Contato + Mapa | Footer | Scroll reveal
 * -----------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderPortfolio();
  renderContact();
  renderFooter();

  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initContactForm();
  initModal();
  initLightbox();
});

/* --------------------------------------------------------------------
   HERO
-------------------------------------------------------------------- */
function renderHero() {
  const { hero } = SITE_DATA;

  const video = document.getElementById("hero-video");
  video.poster = hero.poster;
  video.setAttribute("aria-label", hero.videoLabel);
  document.getElementById("hero-video-source").src = hero.video;
  // Se o arquivo de vídeo ainda não existir (ex: assets/video/hero.mp4
  // não foi adicionado), o navegador mantém o poster como imagem estática.
  video.load();

  document.getElementById("hero-title").textContent = hero.title;
  document.getElementById("hero-slogan").textContent = hero.slogan;

  const cta = document.getElementById("hero-cta");
  cta.textContent = hero.ctaLabel;
  cta.href = hero.ctaTarget;
}

/* --------------------------------------------------------------------
   SOBRE / O ARQUITETO
-------------------------------------------------------------------- */
function renderAbout() {
  const { about } = SITE_DATA;

  const photo = document.getElementById("about-photo");
  photo.src = about.photo;
  photo.alt = about.photoAlt;

  document.getElementById("about-kicker").textContent = about.kicker;
  document.getElementById("about-name").textContent = about.name;

  const bioContainer = document.getElementById("about-bio");
  bioContainer.innerHTML = about.bio.map((p) => `<p>${escapeHTML(p)}</p>`).join("");

  document.getElementById("about-philosophy").textContent = `"${about.philosophy}"`;

  const valuesList = document.getElementById("about-values");
  valuesList.innerHTML = about.values.map((v) => `<li>${escapeHTML(v)}</li>`).join("");
}

/* --------------------------------------------------------------------
   PORTFÓLIO + FILTROS
-------------------------------------------------------------------- */
function renderPortfolio() {
  const { categories, projects } = SITE_DATA;

  const filtersContainer = document.getElementById("portfolio-filters");
  filtersContainer.innerHTML = categories
    .map(
      (cat, i) => `
      <button
        class="filter-btn ${i === 0 ? "is-active" : ""}"
        data-category="${cat.id}"
        role="tab"
        aria-selected="${i === 0}"
      >${escapeHTML(cat.label)}</button>`
    )
    .join("");

  const grid = document.getElementById("portfolio-grid");
  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card reveal" data-category="${project.category}" data-project-id="${project.id}" tabindex="0" role="button" aria-label="Ver detalhes do projeto ${escapeHTML(project.name)}">
        <div class="project-card__media">
          <img src="${project.cover}" alt="Foto de capa do projeto ${escapeHTML(project.name)}" loading="lazy" />
        </div>
        <div class="project-card__info">
          <h3 class="project-card__name">${escapeHTML(project.name)}</h3>
          <span class="project-card__category">${escapeHTML(project.categoryLabel)}</span>
        </div>
      </article>`
    )
    .join("");

  // Filtro por categoria
  filtersContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filtersContainer.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    const category = btn.dataset.category;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const matches = category === "all" || card.dataset.category === category;
      card.hidden = !matches;
      if (matches) {
        // Reobserva para reativar a animação de entrada
        card.classList.remove("is-visible");
        requestAnimationFrame(() => revealObserver.observe(card));
      }
    });
  });

  // Abrir modal ao clicar/Enter em um card
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (card) openProjectModal(card.dataset.projectId);
  });
  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".project-card");
    if (card) {
      e.preventDefault();
      openProjectModal(card.dataset.projectId);
    }
  });

  // Ativa a animação de entrada dos cards visíveis inicialmente
  grid.querySelectorAll(".project-card").forEach((card) => revealObserver && revealObserver.observe(card));
}

/* --------------------------------------------------------------------
   MODAL DE DETALHE DO PROJETO
-------------------------------------------------------------------- */
let lastFocusedElement = null;

function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");
  const backdrop = document.getElementById("modal-backdrop");

  const close = () => closeProjectModal();

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });
}

function openProjectModal(projectId) {
  const project = SITE_DATA.projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const body = document.getElementById("modal-body");

  // Galeria e plantas compartilham um único índice para o lightbox navegar
  // entre todas as imagens do projeto, na mesma ordem em que aparecem.
  const lightboxImages = [...project.gallery, ...project.floorPlans];

  const galleryHTML = project.gallery
    .map(
      (src, i) =>
        `<img src="${src}" alt="Foto ${i + 1} do projeto ${escapeHTML(project.name)}" loading="lazy" data-lightbox-index="${i}" />`
    )
    .join("");

  const plansHTML = project.floorPlans
    .map(
      (src, i) =>
        `<img src="${src}" alt="Planta baixa ${i + 1} do projeto ${escapeHTML(project.name)}" loading="lazy" data-lightbox-index="${project.gallery.length + i}" />`
    )
    .join("");

  const plansSectionHTML = project.floorPlans.length
    ? `<p class="modal-project__subheading">Plantas baixas</p>
       <div class="modal-project__plans">${plansHTML}</div>`
    : "";

  body.innerHTML = `
    <p class="modal-project__category">${escapeHTML(project.categoryLabel)}</p>
    <h3 id="modal-title" class="modal-project__title">${escapeHTML(project.name)}</h3>

    <div class="modal-project__meta">
      <span><strong>Local:</strong> ${escapeHTML(project.location)}</span>
      <span><strong>Ano:</strong> ${project.year}</span>
      <span><strong>Área:</strong> ${escapeHTML(project.area)}</span>
    </div>

    <p class="modal-project__description">${escapeHTML(project.description)}</p>

    <p class="modal-project__subheading">Galeria</p>
    <div class="modal-project__gallery">${galleryHTML}</div>

    ${plansSectionHTML}
  `;

  body.dataset.lightboxImages = JSON.stringify(lightboxImages);

  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

/* --------------------------------------------------------------------
   LIGHTBOX (visualização em tela cheia das fotos da galeria)
-------------------------------------------------------------------- */
let lightboxImages = [];
let lightboxIndex = 0;
let lightboxLastFocused = null;

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const modalBody = document.getElementById("modal-body");

  modalBody.addEventListener("click", (e) => {
    const img = e.target.closest("img[data-lightbox-index]");
    if (!img) return;
    const images = JSON.parse(modalBody.dataset.lightboxImages || "[]");
    openLightbox(images, Number(img.dataset.lightboxIndex));
  });

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-backdrop").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-prev").addEventListener("click", () => showLightboxAt(lightboxIndex - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => showLightboxAt(lightboxIndex + 1));

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxAt(lightboxIndex - 1);
    if (e.key === "ArrowRight") showLightboxAt(lightboxIndex + 1);
  });
}

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxLastFocused = document.activeElement;
  document.getElementById("lightbox").hidden = false;
  showLightboxAt(index);
}

function showLightboxAt(index) {
  const total = lightboxImages.length;
  lightboxIndex = (index + total) % total;

  const img = document.getElementById("lightbox-img");
  img.src = lightboxImages[lightboxIndex];
  img.alt = `Foto ${lightboxIndex + 1} de ${total}`;

  document.getElementById("lightbox-counter").textContent = `${lightboxIndex + 1} / ${total}`;

  const showNav = total > 1;
  document.getElementById("lightbox-prev").hidden = !showNav;
  document.getElementById("lightbox-next").hidden = !showNav;
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  if (lightboxLastFocused) lightboxLastFocused.focus();
}

/* --------------------------------------------------------------------
   CONTATO
-------------------------------------------------------------------- */
function renderContact() {
  const { contact } = SITE_DATA;

  const icons = {
    address:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>',
    email:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5.5" width="18" height="13" rx="1.2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>',
    whatsapp:
      '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6.5 17.5 4 20l2.6-2.4A8 8 0 1 1 9.8 19z"/></svg>',
  };

  const list = document.getElementById("contact-list");
  list.innerHTML = `
    <li>${icons.address}<span>${escapeHTML(contact.address)}</span></li>
    <li>${icons.whatsapp}<a href="https://wa.me/${escapeHTML(contact.phone.replace(/\D/g, ""))}" target="_blank" rel="noopener">${escapeHTML(contact.phone)} (Telefone / WhatsApp)</a></li>
    <li>${icons.email}<a href="mailto:${escapeHTML(contact.email)}">${escapeHTML(contact.email)}</a></li>
  `;

  document.getElementById("contact-map").src = contact.mapEmbedUrl;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const submitBtn = form.querySelector('button[type="submit"]');
  const { publicKey, serviceId, templateId } = SITE_DATA.emailjs;

  emailjs.init(publicKey);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      feedback.textContent = "Por favor, preencha os campos obrigatórios corretamente.";
      feedback.classList.add("is-error");
      return;
    }

    feedback.classList.remove("is-error");
    feedback.textContent = "Enviando mensagem...";
    submitBtn.disabled = true;

    emailjs
      .sendForm(serviceId, templateId, form)
      .then(() => {
        feedback.classList.remove("is-error");
        feedback.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
        form.reset();
      })
      .catch(() => {
        feedback.classList.add("is-error");
        feedback.textContent = "Não foi possível enviar agora. Tente novamente ou use o WhatsApp/e-mail ao lado.";
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });
}

/* --------------------------------------------------------------------
   FOOTER
-------------------------------------------------------------------- */
function renderFooter() {
  const { footer, contact, brand } = SITE_DATA;

  document.getElementById("footer-tagline").textContent = footer.tagline;
  document.getElementById("footer-copy").textContent =
    `© ${footer.year} ${brand.fullName}. Todos os direitos reservados.`;

  const socialIcons = {
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7.5" y1="10" x2="7.5" y2="17"/><circle cx="7.5" cy="6.8" r="0.5" fill="currentColor"/><path d="M11.5 17v-4.5a2.3 2.3 0 0 1 4.5 0V17"/><line x1="11.5" y1="10" x2="11.5" y2="17"/></svg>',
    pinterest:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9"/><path d="M9.5 18c1-3 1.5-5 1.5-6.5a2.5 2.5 0 0 1 5 0c0 1.8-1 4-2.8 4-.8 0-1.4-.4-1.6-1"/></svg>',
  };

  const socialContainer = document.getElementById("footer-social");
  socialContainer.innerHTML = Object.entries(socialIcons)
    .map(
      ([key, svg]) => `
      <a href="${contact[key]}" target="_blank" rel="noopener" aria-label="${key}">${svg}</a>`
    )
    .join("");
}

/* --------------------------------------------------------------------
   HEADER: fundo ao rolar
-------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  const toggle = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  toggle();
  window.addEventListener("scroll", toggle, { passive: true });
}

/* --------------------------------------------------------------------
   MENU MOBILE (HAMBÚRGUER)
-------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");

  const closeNav = () => {
    nav.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav__link").forEach((link) => link.addEventListener("click", closeNav));
}

/* --------------------------------------------------------------------
   SCROLL REVEAL (fade-in / slide-up)
-------------------------------------------------------------------- */
let revealObserver;

function initScrollReveal() {
  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

/* --------------------------------------------------------------------
   HELPERS
-------------------------------------------------------------------- */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}
