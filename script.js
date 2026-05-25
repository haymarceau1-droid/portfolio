const header = document.querySelector("[data-header]");
const loader = document.querySelector("[data-loader]");
const loaderProgress = document.querySelector("[data-loader-progress]");
const loaderPercent = document.querySelector("[data-loader-percent]");
const revealItems = document.querySelectorAll(".reveal");
const langButtons = document.querySelectorAll("[data-lang]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const themeIcon = document.querySelector("[data-theme-icon]");
const backToTop = document.querySelector("[data-back-to-top]");
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorRing = document.querySelector("[data-cursor-ring]");
const localTime = document.querySelector("[data-local-time]");
const megaMenu = document.querySelector("[data-mega-menu]");
const megaTrigger = document.querySelector("[data-mega-trigger]");
const cookieBanner = document.querySelector("[data-cookie-banner]");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const cookieDecline = document.querySelector("[data-cookie-decline]");
const isHomePage = Boolean(document.querySelector("#work"));
const writeTitleNodes = document.querySelectorAll("[data-write-title]");

if (loader) {
  document.body.classList.add("is-loading");
}

const prepareWriteTitleAnimations = () => {
  writeTitleNodes.forEach((node) => {
    if (node.dataset.writeTitleReady === "true") {
      return;
    }

    const title = node.textContent.trim();
    const fragment = document.createDocumentFragment();

    node.setAttribute("aria-label", title);
    node.dataset.writeTitleReady = "true";
    node.textContent = "";

    [...title].forEach((char, index) => {
      const charNode = document.createElement("span");
      charNode.className = "write-title-char";
      charNode.setAttribute("aria-hidden", "true");
      charNode.style.setProperty("--char-index", index);
      charNode.textContent = char === " " ? "\u00a0" : char;
      fragment.append(charNode);
    });

    node.append(fragment);
  });
};

const playWriteTitleAnimations = () => {
  if (!writeTitleNodes.length) {
    return;
  }

  document.body.classList.add("is-write-title-ready");
};

prepareWriteTitleAnimations();


const translations = {
  en: {
    "meta.title": "Marceau Hay - UX/UI Creator & Web Creator",
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.blog": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Let&rsquo;s talk",
    "theme.light": "Light",
    "theme.night": "Night",
    "cookies.title": "Cookies",
    "cookies.text": "This site only uses essential cookies and local preferences to remember language and theme.",
    "cookies.accept": "Accept",
    "cookies.decline": "Decline",
    "availability.text": "Open to freelance work on your projects",
    "hero.role": "I shape and develop web projects built to be clear, useful, and durable.",
    "hero.text": "I shape interfaces, websites, and digital experiences that feel clear, useful, and intentional. Between UX, visual direction, product thinking, and web development, I like turning ideas into concrete digital experiences.",
    "hero.primary": "View work",
    "hero.secondary": "Contact me",
    "hero.based": "Based in France",
    "hero.scope": "Working across UX, websites, and digital products",
    "work.eyebrow": "Selected work",
    "work.title": "Interfaces, websites, and digital products shaped with restraint.",
    "label.role": "Role",
    "label.category": "Category",
    "project.visit": "View live site",
    "project.ifeap.title": "UX/UI refit, WordPress development, Dendreo integration",
    "project.ifeap.desc": "For IFEAP, an organization dedicated to training, support, and consulting, I handled the complete website refit: clearer UX, a more modern interface, WordPress development, and Dendreo integration for training management.",
    "project.ifeap.role": "UX/UI / WordPress / Dendreo",
    "project.ifeap.category": "Training organization website",
    "project.ifeap.m1": "UX/UI conception",
    "project.ifeap.m2": "Global refit",
    "project.ifeap.m3": "WordPress development",
    "project.ifeap.m4": "Dendreo integration",
    "project.ifeap.m5": "Custom WordPress plugins",
    "project.templiers.title": "Showcase website for an artisan",
    "project.templiers.desc": "Creation of a showcase website for L&rsquo;Atelier des Templiers, with a direction focused on craft, clarity, and credibility. The work covered visual direction, content structure, and responsive integration.",
    "project.templiers.role": "Interface conception / Web integration",
    "project.templiers.category": "Artisan showcase website",
    "project.templiers.m1": "Interface conception",
    "project.templiers.m2": "Web integration",
    "project.templiers.m3": "Craft activity presentation",
    "project.templiers.m4": "Responsive showcase website",
    "project.noria.title": "WooCommerce ecommerce refit",
    "project.noria.desc": "For Noria du Soleil, I worked on the refit and integration of a WooCommerce ecommerce website. The goal was to create an elegant, immersive, and functional online store for perfume collections, key products, and the brand universe.",
    "project.noria.role": "WooCommerce / Ecommerce interface",
    "project.noria.category": "Perfume ecommerce",
    "project.noria.m1": "Web refit",
    "project.noria.m2": "WooCommerce integration",
    "project.noria.m3": "Shopping experience optimization",
    "project.noria.m4": "Product page structure",
    "project.noria.m5": "Ecommerce interface",
    "project.talaria.title": "Landing page and mobile app interface",
    "project.talaria.desc": "Talaria is an app built to simplify group travel organization: planning, shared budget, activity choices, and comparison of flights, stays, and experiences. I worked on the landing page and mobile app interface with a modern, product-oriented visual direction.",
    "project.talaria.role": "UX/UI / Landing page / Mobile app",
    "project.talaria.category": "Collaborative travel product",
    "project.talaria.m1": "UX/UI conception",
    "project.talaria.m2": "Landing page",
    "project.talaria.m3": "Mobile app interface",
    "project.talaria.m4": "Clear UX for a collaborative digital product",
    "about.eyebrow": "About",
    "about.p1": "I&rsquo;m Marceau Hay, a French UX/UI creator and web creator currently completing a master&rsquo;s degree in UX/UI after earning a bachelor&rsquo;s degree in web conception. I work at the intersection of interface conception, digital clarity, and execution. What I enjoy most is shaping ideas into experiences that are both aesthetically strong and strategically useful.",
    "about.p2": "My background combines freelance work, interface studies, web development, and entrepreneurial projects. This hybrid approach helps me think beyond visuals alone, from structure and messaging to user experience and final implementation.",
    "services.eyebrow": "What I do",
    "services.title": "Clear digital work from structure to interface, development, and launch.",
    "services.ux.title": "UX/UI Conception",
    "services.ux": "User flows, structure, wireframes, interface systems, user experience.",
    "services.web.title": "Web Conception",
    "services.web": "Landing pages, showcase websites, high-conversion layouts.",
    "services.build.title": "Build",
    "services.build": "WordPress, Elementor, custom HTML/CSS, responsive integration, production-ready pages.",
    "services.product.title": "Product Thinking",
    "services.product": "Offer structure, positioning, conversion logic, digital business ideas.",
    "mega.eyebrow": "Services",
    "mega.title": "Focused digital support from audit to build.",
    "mega.note": "Choose a focused entry point, then scale the work from diagnosis to polished execution.",
    "mega.audit.title": "UX / Website Audit",
    "mega.audit.text": "Clarity, structure, conversion, UX friction, and actionable recommendations.",
    "mega.design.title": "UX/UI & Web Conception",
    "mega.design.text": "Wireframes, interfaces, landing pages, visual systems, and refined layouts.",
    "mega.designbuild.title": "Conception + Development",
    "mega.designbuild.text": "From visual direction to responsive implementation and launch-ready pages.",
    "mega.product.title": "Product & Positioning",
    "mega.product.text": "Offer structure, messaging, conversion logic, and digital product thinking.",
    "mega.feature.title": "Not sure where to start?",
    "mega.feature.text": "Send the context. I can help define the right format before we build.",
    "background.eyebrow": "Background",
    "background.title": "A compact path across UX, web, and independent creation.",
    "background.item1": "Master&rsquo;s degree in UX/UI conception",
    "background.item2": "Bachelor&rsquo;s degree in web conception",
    "background.item3": "3 years of apprenticeship / alternating work-study",
    "background.item4": "Freelance projects across multiple sectors",
    "background.item5": "Independent digital product exploration",
    "skills.eyebrow": "Skills",
    "skills.title": "A focused skill set across product strategy, web, and implementation.",
    "blog.eyebrow": "Blog",
    "blog.title": "Notes on interfaces, web development, and digital products.",
    "blog.read": "Read note",
    "faq.eyebrow": "FAQ",
    "faq.title": "A few direct answers before we talk.",
    "faq.q1": "What kind of projects do you work on?",
    "faq.a1": "I work on UX/UI conception, landing pages, showcase websites, digital products, and product-oriented web experiences.",
    "faq.q2": "Can you shape and build the same project?",
    "faq.a2": "Yes. Depending on the scope, I can work from structure and interface conception through to WordPress, Elementor, or custom HTML/CSS implementation.",
    "faq.q3": "Do you work with freelance clients?",
    "faq.a3": "Yes. I work with local businesses, independent founders, agencies, and collaborators who need clear, polished digital execution.",
    "faq.q4": "Where are you based?",
    "faq.a4": "I am based in Angers, France, and can collaborate remotely on projects in France and abroad.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let&rsquo;s build something clear and ambitious.",
    "contact.text": "Whether you need an interface specialist, a freelance collaborator, or someone who can shape and execute a digital experience from idea to interface, I&rsquo;d be happy to connect.",
    "contact.primary": "Get in touch",
    "contact.secondary": "View LinkedIn",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.france": "France",
    "service.audit.kicker": "Service / Audit",
    "service.audit.title": "UX and website audit for clearer digital decisions.",
    "service.audit.lead": "A focused diagnosis of your website or interface, built to identify friction, sharpen messaging, and define practical improvements before investing in a refit or development.",
    "service.audit.primary": "Request an audit",
    "service.audit.best": "Existing websites, landing pages, funnels",
    "service.audit.output": "Prioritized recommendations",
    "service.audit.focus": "Clarity, UX, conversion, trust",
    "service.audit.section1.eyebrow": "What I review",
    "service.audit.section1.title": "From first impression to final action.",
    "service.audit.card1.title": "Structure",
    "service.audit.card1.text": "Navigation, section order, content hierarchy, page rhythm, and whether the experience is easy to understand quickly.",
    "service.audit.card2.title": "UX friction",
    "service.audit.card2.text": "Confusing flows, weak affordances, unclear actions, missing states, and details that slow users down.",
    "service.audit.card3.title": "Messaging",
    "service.audit.card3.text": "Positioning, offer clarity, value proposition, credibility signals, and whether the page answers the right questions.",
    "service.audit.card4.title": "Conversion",
    "service.audit.card4.text": "CTA logic, trust moments, layout focus, form friction, and improvements that can move users toward action.",
    "service.audit.section2.title": "Clear findings, not vague feedback.",
    "service.audit.item1": "Audit summary with key issues and opportunities",
    "service.audit.item2": "Prioritized recommendations by impact and effort",
    "service.audit.item3": "UX, messaging, and visual hierarchy notes",
    "service.audit.item4": "Next-step roadmap for interface or implementation",
    "service.audit.cta.title": "Need a sharper view of what is holding your website back?",
    "service.audit.cta.text": "Send me the page, the context, and what you want it to achieve. I&rsquo;ll help identify where clarity and performance can improve.",
    "service.common.back": "Back to services",
    "service.common.deliverables": "Deliverables",
    "service.common.contact": "Get in touch",
    "service.design.kicker": "Service / Conception",
    "service.design.title": "UX/UI and web conception with structure, restraint, and precision.",
    "service.design.lead": "I conceive interfaces and websites that feel clear, intentional, and usable. The work covers structure, visual direction, interaction patterns, responsive layouts, and the details that make a digital experience credible.",
    "service.design.primary": "Start an interface project",
    "service.design.best": "Landing pages, portfolios, SaaS screens",
    "service.design.output": "High-fidelity responsive interface",
    "service.design.focus": "UX, hierarchy, visual systems",
    "service.design.section1.eyebrow": "Conception scope",
    "service.design.section1.title": "A complete interface direction.",
    "service.design.card1.title": "UX structure",
    "service.design.card1.text": "User flows, information architecture, content order, and wireframes before visual decisions.",
    "service.design.card2.title": "Visual direction",
    "service.design.card2.text": "Typography, spacing, layout, contrast, components, and a direction that fits the project.",
    "service.design.card3.title": "Responsive layouts",
    "service.design.card3.text": "Desktop, tablet, and mobile screens conceived with real constraints and usage in mind.",
    "service.design.card4.title": "Interface system basics",
    "service.design.card4.text": "Reusable styles and components so the interface can scale without becoming inconsistent.",
    "service.design.section2.title": "Everything needed to move into build.",
    "service.design.item1": "UX direction and wireframe structure",
    "service.design.item2": "High-fidelity interface screens",
    "service.design.item3": "Responsive desktop and mobile layouts",
    "service.design.item4": "Component and style guidelines",
    "service.design.cta.title": "Need an interface that feels clearer and more credible?",
    "service.design.cta.text": "Tell me what you are building, who it is for, and what it needs to communicate.",
    "service.common.viewwork": "View work",
    "service.build.kicker": "Service / Conception + Development",
    "service.build.title": "From polished visual direction to a responsive live website.",
    "service.build.lead": "A combined offer for projects that need both taste and execution. I shape the structure, conceive the interface, then build production-ready pages with clean responsive implementation.",
    "service.build.primary": "Build a project",
    "service.build.best.label": "Best for",
    "service.build.best.value": "Websites, landing pages, launches",
    "service.build.output.label": "Output",
    "service.build.output.value": "Conceived and implemented pages",
    "service.build.focus.label": "Stack",
    "service.build.focus.value": "HTML/CSS, WordPress, Elementor",
    "service.build.best": "Websites, landing pages, launches",
    "service.build.output": "Conceived and implemented pages",
    "service.build.focus": "HTML/CSS, WordPress, Elementor",
    "service.build.section1.eyebrow": "How it works",
    "service.build.section1.title": "One continuous workflow.",
    "service.build.card1.title": "Strategy first",
    "service.build.card1.text": "Define the offer, page purpose, audience, hierarchy, and conversion logic before creating screens.",
    "service.build.card2.title": "Interface system",
    "service.build.card2.text": "Create the visual language, layout rules, sections, components, and responsive behavior.",
    "service.build.card3.title": "Development",
    "service.build.card3.text": "Build clean, responsive pages using the right setup for the project and its future maintenance.",
    "service.build.card4.title": "Launch polish",
    "service.build.card4.text": "Final spacing, mobile QA, interaction states, performance basics, and content adjustments.",
    "service.build.section2.title": "Interface quality with implementation clarity.",
    "service.build.item1": "Page strategy and content structure",
    "service.build.item2": "Responsive interface conception",
    "service.build.item3": "HTML/CSS or WordPress implementation",
    "service.build.item4": "Launch-ready QA and final refinements",
    "service.build.cta.title": "Need someone who can shape and ship the page?",
    "service.build.cta.text": "This is the best fit when you want one coherent direction from idea to implementation.",
    "service.product.kicker": "Service / Product & Positioning",
    "service.product.title": "Sharper offers, clearer messaging, and better digital structure.",
    "service.product.lead": "For early-stage ideas, service offers, and digital products that need clearer positioning before interface work. I help organize the message, the value, and the conversion logic behind the interface.",
    "service.product.primary": "Clarify an offer",
    "service.product.best.label": "Best for",
    "service.product.best.value": "Offers, products, landing pages",
    "service.product.output.label": "Output",
    "service.product.output.value": "Positioning and page logic",
    "service.product.focus.label": "Focus",
    "service.product.focus.value": "Clarity, trust, conversion",
    "service.product.best": "Offers, products, landing pages",
    "service.product.output": "Positioning and page logic",
    "service.product.focus": "Clarity, trust, conversion",
    "service.product.section1.eyebrow": "What we clarify",
    "service.product.section1.title": "The thinking before the interface.",
    "service.product.card1.title": "Offer",
    "service.product.card1.text": "What is being sold, who it is for, why it matters, and how it should be packaged.",
    "service.product.card2.title": "Positioning",
    "service.product.card2.text": "The angle, differentiation, proof points, objections, and credibility needed to make the offer understandable.",
    "service.product.card3.title": "Page logic",
    "service.product.card3.text": "How sections should be ordered to move from attention to trust to action without adding noise.",
    "service.product.card4.title": "Product thinking",
    "service.product.card4.text": "How the idea can become a clearer experience, service, tool, landing page, or digital product.",
    "service.product.section2.title": "Clarity before production.",
    "service.product.item1": "Offer and audience clarification",
    "service.product.item2": "Messaging hierarchy and core narrative",
    "service.product.item3": "Landing page or product structure",
    "service.product.item4": "Recommendations for interface and execution",
    "service.product.cta.title": "Have an idea that needs a clearer shape?",
    "service.product.cta.text": "Send the context and what you are trying to achieve. I can help turn it into a sharper digital direction."
  },
  fr: {
    "meta.title": "Marceau Hay - Concepteur UX/UI & Concepteur Web",
    "nav.work": "Projets",
    "nav.services": "Services",
    "nav.blog": "Compétences",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.cta": "Discutons",
    "theme.light": "Jour",
    "theme.night": "Nuit",
    "cookies.title": "Cookies",
    "cookies.text": "Ce site utilise uniquement des cookies essentiels et des préférences locales pour mémoriser la langue et le thème.",
    "cookies.accept": "Accepter",
    "cookies.decline": "Refuser",
    "availability.text": "Disponible en freelance pour vos projets",
    "hero.role": "Je con&ccedil;ois et d&eacute;veloppe des projets web pens&eacute;s pour &ecirc;tre clairs, utiles et durables.",
    "hero.text": "Je conçois et développe des interfaces, des sites web et des expériences digitales simples à comprendre, agréables à utiliser et construites avec intention. Mon terrain de jeu se situe entre UX, direction visuelle, stratégie produit et développement web.",
    "hero.primary": "Voir les projets",
    "hero.secondary": "Me contacter",
    "hero.based": "Basé en France",
    "hero.scope": "UX, sites web et produits digitaux",
    "work.eyebrow": "Projets sélectionnés",
    "work.title": "Des interfaces, sites web et produits digitaux avec une approche claire et mesurée.",
    "label.role": "Role",
    "label.category": "Catégorie",
    "project.visit": "Voir le site",
    "project.ifeap.title": "Refonte UX/UI, développement WordPress, intégration Dendreo",
    "project.ifeap.desc": "Pour l&rsquo;IFEAP, organisme dédié à la formation, l&rsquo;accompagnement et le conseil, j&rsquo;ai pris en charge la refonte complète du site web : expérience utilisateur plus claire, interface modernisée, développement WordPress et intégration de Dendreo pour la gestion des formations.",
    "project.ifeap.role": "UX/UI / WordPress / Dendreo",
    "project.ifeap.category": "Site d&rsquo;organisme de formation",
    "project.ifeap.m1": "Conception UX/UI",
    "project.ifeap.m2": "Refonte globale",
    "project.ifeap.m3": "Développement WordPress",
    "project.ifeap.m4": "Intégration Dendreo",
    "project.ifeap.m5": "Plugins WordPress sur mesure",
    "project.templiers.title": "Site vitrine pour artisan",
    "project.templiers.desc": "Création d&rsquo;un site vitrine pour L&rsquo;Atelier des Templiers, avec une approche centrée sur la valorisation du savoir-faire artisanal, l&rsquo;organisation des contenus et une présence en ligne claire, élégante et crédible.",
    "project.templiers.role": "Conception d&rsquo;interface / Intégration web",
    "project.templiers.category": "Site vitrine artisan",
    "project.templiers.m1": "Conception d&rsquo;interface",
    "project.templiers.m2": "Intégration web",
    "project.templiers.m3": "Mise en valeur de l&rsquo;activité artisanale",
    "project.templiers.m4": "Site vitrine responsive",
    "project.noria.title": "Refonte e-commerce WooCommerce",
    "project.noria.desc": "Pour Noria du Soleil, j&rsquo;ai travaillé sur la refonte et l&rsquo;intégration d&rsquo;un site e-commerce WooCommerce. L&rsquo;objectif était de créer une boutique élégante, immersive et fonctionnelle pour présenter les collections de parfums, les produits phares et l&rsquo;univers de la marque.",
    "project.noria.role": "WooCommerce / Interface e-commerce",
    "project.noria.category": "E-commerce parfum",
    "project.noria.m1": "Refonte web",
    "project.noria.m2": "Intégration WooCommerce",
    "project.noria.m3": "Optimisation de l&rsquo;expérience d&rsquo;achat",
    "project.noria.m4": "Structuration des pages produits",
    "project.noria.m5": "Interface e-commerce",
    "project.talaria.title": "Landing page et conception d&rsquo;application mobile",
    "project.talaria.desc": "Talaria est une application pensée pour simplifier l&rsquo;organisation de voyages en groupe : planning, budget partagé, choix des activités, comparaison de vols, logements et expériences. J&rsquo;ai travaillé sur la landing page et l&rsquo;interface mobile avec une direction visuelle moderne et orientée produit.",
    "project.talaria.role": "UX/UI / Landing page / Mobile app",
    "project.talaria.category": "Produit voyage collaboratif",
    "project.talaria.m1": "Conception UX/UI",
    "project.talaria.m2": "Landing page",
    "project.talaria.m3": "Conception mobile app",
    "project.talaria.m4": "Expérience utilisateur claire pour un produit digital collaboratif",
    "about.eyebrow": "À propos",
    "about.p1": "Je suis Marceau Hay, concepteur UX/UI et concepteur web français. Je poursuis actuellement un master en UX/UI après une licence en conception web. J&rsquo;aime travailler les interfaces comme des objets clairs : bien structurés, lisibles, utiles et visuellement justes.",
    "about.p2": "Mon parcours mêle freelance, études d&rsquo;interface, développement web et projets personnels. Cette combinaison me permet de regarder un projet au-delà de son apparence : structure, message, expérience utilisateur, faisabilité et exécution finale.",
    "services.eyebrow": "Ce que je fais",
    "services.title": "Du cadrage à l&rsquo;interface, du développement à la mise en ligne.",
    "services.ux.title": "Conception UX/UI",
    "services.ux": "Parcours utilisateurs, architecture, wireframes, systèmes d&rsquo;interface et expérience globale.",
    "services.web.title": "Conception web",
    "services.web": "Landing pages, sites vitrines et pages pensées pour être comprises rapidement.",
    "services.build.title": "Build",
    "services.build": "WordPress, Elementor, HTML/CSS custom, intégration responsive et pages prêtes à être mises en ligne.",
    "services.product.title": "Pensée Produit",
    "services.product": "Positionnement, logique d&rsquo;offre, conversion et idées de produits digitaux.",
    "mega.eyebrow": "Services",
    "mega.title": "Un accompagnement ciblé, de l&rsquo;audit à la mise en ligne.",
    "mega.note": "Choisissez un point d&rsquo;entrée clair, puis faites évoluer le travail du diagnostic à l&rsquo;exécution finale.",
    "mega.audit.title": "Audit UX / Site web",
    "mega.audit.text": "Clarté, structure, conversion, frictions UX et recommandations actionnables.",
    "mega.design.title": "Conception UX/UI & web",
    "mega.design.text": "Wireframes, interfaces, landing pages, systèmes visuels et layouts soignés.",
    "mega.designbuild.title": "Conception + Développement",
    "mega.designbuild.text": "De la direction visuelle à l&rsquo;implémentation responsive, jusqu&rsquo;aux pages prêtes à publier.",
    "mega.product.title": "Produit & Positionnement",
    "mega.product.text": "Structure d&rsquo;offre, message, logique de conversion et pensée produit digitale.",
    "mega.feature.title": "Vous ne savez pas par où commencer ?",
    "mega.feature.text": "Envoyez le contexte. Je peux vous aider à définir le bon format avant de construire.",
    "background.eyebrow": "Parcours",
    "background.title": "Un parcours construit entre UX, web et expérimentation indépendante.",
    "background.item1": "Master en conception UX/UI",
    "background.item2": "Licence en conception web",
    "background.item3": "3 ans d&rsquo;apprentissage / alternance",
    "background.item4": "Projets freelance dans plusieurs secteurs",
    "background.item5": "Exploration indépendante de produits digitaux",
    "skills.eyebrow": "Compétences",
    "skills.title": "Un socle complet entre produit, web et intégration.",
    "blog.eyebrow": "Blog",
    "blog.title": "Notes sur les interfaces, le développement web et les produits digitaux.",
    "blog.read": "Lire la note",
    "faq.eyebrow": "FAQ",
    "faq.title": "Quelques réponses claires avant d&rsquo;échanger.",
    "faq.q1": "Sur quels types de projets travailles-tu ?",
    "faq.a1": "Je travaille sur des interfaces UX/UI, des landing pages, des sites vitrines, des produits digitaux et des expériences web orientées produit.",
    "faq.q2": "Peux-tu concevoir et construire un même projet ?",
    "faq.a2": "Oui. Selon le scope, je peux intervenir du cadrage et de la conception d&rsquo;interface jusqu&rsquo;à l&rsquo;implémentation WordPress, Elementor ou HTML/CSS custom.",
    "faq.q3": "Travailles-tu avec des clients freelance ?",
    "faq.a3": "Oui. Je collabore avec des entreprises locales, des fondateurs indépendants, des agences et des partenaires qui cherchent une exécution digitale claire et soignée.",
    "faq.q4": "Où es-tu basé ?",
    "faq.a4": "Je suis basé à Angers, en France, et je peux collaborer à distance sur des projets en France comme à l&rsquo;international.",
    "contact.eyebrow": "Contact",
    "contact.title": "Construisons quelque chose de clair, solide et ambitieux.",
    "contact.text": "Si vous cherchez un concepteur d&rsquo;interface, un collaborateur freelance ou quelqu&rsquo;un capable de passer d&rsquo;une idée à une interface bien exécutée, je serais ravi d&rsquo;échanger.",
    "contact.primary": "Me contacter",
    "contact.secondary": "Voir LinkedIn",
    "contact.email": "Email",
    "contact.location": "Localisation",
    "contact.france": "France",
    "service.audit.kicker": "Service / Audit",
    "service.audit.title": "Audit UX et site web pour prendre de meilleures décisions digitales.",
    "service.audit.lead": "Un diagnostic ciblé de votre site ou interface pour identifier les frictions, clarifier le message et définir des améliorations concrètes avant une refonte ou un développement.",
    "service.audit.primary": "Demander un audit",
    "service.audit.best": "Sites existants, landing pages, tunnels",
    "service.audit.output": "Recommandations priorisées",
    "service.audit.focus": "Clarté, UX, conversion, confiance",
    "service.audit.section1.eyebrow": "Ce que j&rsquo;analyse",
    "service.audit.section1.title": "De la première impression à l&rsquo;action finale.",
    "service.audit.card1.title": "Structure",
    "service.audit.card1.text": "Navigation, ordre des sections, hiérarchie du contenu, rythme de page et compréhension rapide.",
    "service.audit.card2.title": "Frictions UX",
    "service.audit.card2.text": "Parcours confus, actions peu visibles, états manquants et détails qui ralentissent l&rsquo;utilisateur.",
    "service.audit.card3.title": "Message",
    "service.audit.card3.text": "Positionnement, clarté de l&rsquo;offre, proposition de valeur, preuves et questions importantes.",
    "service.audit.card4.title": "Conversion",
    "service.audit.card4.text": "Logique des CTA, signaux de confiance, focus du layout, frictions de formulaire et pistes d&rsquo;amélioration.",
    "service.audit.section2.title": "Des constats clairs, pas des retours vagues.",
    "service.audit.item1": "Synthèse des problèmes et opportunités",
    "service.audit.item2": "Recommandations priorisées par impact et effort",
    "service.audit.item3": "Notes UX, message et hiérarchie visuelle",
    "service.audit.item4": "Feuille de route pour conception ou implémentation",
    "service.audit.cta.title": "Besoin de comprendre ce qui freine votre site ?",
    "service.audit.cta.text": "Envoyez-moi la page, le contexte et l&rsquo;objectif. Je vous aide à identifier où la clarté et la performance peuvent progresser.",
    "service.common.back": "Retour aux services",
    "service.common.deliverables": "Livrables",
    "service.common.contact": "Me contacter",
    "service.design.kicker": "Service / Conception",
    "service.design.title": "Conception UX/UI et web avec structure, retenue et précision.",
    "service.design.lead": "Je conçois des interfaces et sites web clairs, intentionnels et faciles à utiliser. Le travail couvre la structure, la direction visuelle, les interactions, le responsive et les détails de crédibilité.",
    "service.design.primary": "Lancer un projet d&rsquo;interface",
    "service.design.best": "Landing pages, portfolios, interfaces SaaS",
    "service.design.output": "Interface responsive haute fidélité",
    "service.design.focus": "UX, hiérarchie, systèmes visuels",
    "service.design.section1.eyebrow": "Périmètre de conception",
    "service.design.section1.title": "Une direction d&rsquo;interface complète.",
    "service.design.card1.title": "Structure UX",
    "service.design.card1.text": "Parcours, architecture de l&rsquo;information, ordre du contenu et wireframes avant le visuel.",
    "service.design.card2.title": "Direction visuelle",
    "service.design.card2.text": "Typographie, espacement, layout, contraste, composants et direction adaptée au projet.",
    "service.design.card3.title": "Responsive",
    "service.design.card3.text": "Écrans desktop, tablette et mobile conçus avec de vraies contraintes d&rsquo;usage.",
    "service.design.card4.title": "Bases de système d&rsquo;interface",
    "service.design.card4.text": "Styles et composants réutilisables pour garder une interface cohérente.",
    "service.design.section2.title": "Tout ce qu&rsquo;il faut pour passer au build.",
    "service.design.item1": "Direction UX et structure wireframe",
    "service.design.item2": "Interfaces haute fidélité",
    "service.design.item3": "Layouts desktop et mobile",
    "service.design.item4": "Guidelines de composants et styles",
    "service.design.cta.title": "Besoin d&rsquo;une interface plus claire et crédible ?",
    "service.design.cta.text": "Expliquez-moi ce que vous construisez, pour qui, et ce que l&rsquo;interface doit communiquer.",
    "service.common.viewwork": "Voir les projets",
    "service.build.kicker": "Service / Conception + Développement",
    "service.build.title": "De la direction visuelle à un site responsive en ligne.",
    "service.build.lead": "Une offre combinée pour les projets qui ont besoin de goût et d&rsquo;exécution. Je structure, je conçois l&rsquo;interface, puis je développe des pages propres et prêtes à publier.",
    "service.build.primary": "Construire un projet",
    "service.build.best.label": "Idéal pour",
    "service.build.best.value": "Sites web, landing pages, lancements",
    "service.build.output.label": "Livrable",
    "service.build.output.value": "Pages conçues et implémentées",
    "service.build.focus.label": "Stack",
    "service.build.focus.value": "HTML/CSS, WordPress, Elementor",
    "service.build.best": "Sites web, landing pages, lancements",
    "service.build.output": "Pages conçues et implémentées",
    "service.build.focus": "HTML/CSS, WordPress, Elementor",
    "service.build.section1.eyebrow": "Méthode",
    "service.build.section1.title": "Un workflow continu.",
    "service.build.card1.title": "Stratégie d&rsquo;abord",
    "service.build.card1.text": "Objectif, audience, hiérarchie et logique de conversion avant de concevoir les écrans.",
    "service.build.card2.title": "Système visuel",
    "service.build.card2.text": "Langage visuel, règles de layout, sections, composants et responsive.",
    "service.build.card3.title": "Développement",
    "service.build.card3.text": "Pages propres et responsives avec le bon setup pour le projet.",
    "service.build.card4.title": "Polish de lancement",
    "service.build.card4.text": "Espacements, QA mobile, états interactifs, bases performance et ajustements finaux.",
    "service.build.section2.title": "Qualité d&rsquo;interface et clarté d&rsquo;implémentation.",
    "service.build.item1": "Stratégie de page et structure de contenu",
    "service.build.item2": "Interface responsive",
    "service.build.item3": "Implémentation HTML/CSS ou WordPress",
    "service.build.item4": "QA et finitions pré-lancement",
    "service.build.cta.title": "Besoin de concevoir et publier une page ?",
    "service.build.cta.text": "C&rsquo;est le bon format si vous voulez une direction cohérente de l&rsquo;idée à l&rsquo;implémentation.",
    "service.product.kicker": "Service / Produit & Positionnement",
    "service.product.title": "Des offres plus nettes, un message plus clair, une meilleure structure digitale.",
    "service.product.lead": "Pour les idées, offres de service et produits digitaux qui ont besoin d&rsquo;un positionnement plus clair avant la conception d&rsquo;interface.",
    "service.product.primary": "Clarifier une offre",
    "service.product.best.label": "Idéal pour",
    "service.product.best.value": "Offres, produits, landing pages",
    "service.product.output.label": "Livrable",
    "service.product.output.value": "Positionnement et logique de page",
    "service.product.focus.label": "Focus",
    "service.product.focus.value": "Clarté, confiance, conversion",
    "service.product.best": "Offres, produits, landing pages",
    "service.product.output": "Positionnement et logique de page",
    "service.product.focus": "Clarté, confiance, conversion",
    "service.product.section1.eyebrow": "Ce que l&rsquo;on clarifie",
    "service.product.section1.title": "La pensée avant l&rsquo;interface.",
    "service.product.card1.title": "Offre",
    "service.product.card1.text": "Ce qui est vendu, pour qui, pourquoi cela compte et comment le présenter.",
    "service.product.card2.title": "Positionnement",
    "service.product.card2.text": "Angle, différence, preuves, objections et crédibilité.",
    "service.product.card3.title": "Logique de page",
    "service.product.card3.text": "L&rsquo;ordre des sections pour passer de l&rsquo;attention à la confiance puis à l&rsquo;action.",
    "service.product.card4.title": "Pensée produit",
    "service.product.card4.text": "Transformer une idée en expérience, service, outil, landing page ou produit digital plus clair.",
    "service.product.section2.title": "Clarifier avant de produire.",
    "service.product.item1": "Clarification de l&rsquo;offre et de l&rsquo;audience",
    "service.product.item2": "Hiérarchie du message et narration",
    "service.product.item3": "Structure de landing page ou produit",
    "service.product.item4": "Recommandations interface et exécution",
    "service.product.cta.title": "Une idée qui a besoin d&rsquo;une forme plus claire ?",
    "service.product.cta.text": "Envoyez le contexte et l&rsquo;objectif. Je peux vous aider à en faire une direction digitale plus nette."
  },
  es: {
    "meta.title": "Marceau Hay - Conceptor UX/UI y Web",
    "nav.work": "Trabajo",
    "nav.services": "Servicios",
    "nav.blog": "Competencias",
    "nav.about": "Perfil",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",
    "theme.light": "Claro",
    "theme.night": "Noche",
    "cookies.title": "Cookies",
    "cookies.text": "Este sitio solo utiliza cookies esenciales y preferencias locales para recordar idioma y tema.",
    "cookies.accept": "Aceptar",
    "cookies.decline": "Rechazar",
    "availability.text": "Disponible como freelance para tus proyectos",
    "hero.role": "Concibo y desarrollo proyectos web pensados para ser claros, utiles y duraderos.",
    "hero.text": "Concibo y desarrollo interfaces, sitios web y experiencias digitales faciles de entender, agradables de usar y construidas con intencion. Trabajo entre UX, direccion visual, criterio de producto y desarrollo web.",
    "hero.primary": "Ver trabajos",
    "hero.secondary": "Contactarme",
    "hero.based": "Desde Francia",
    "hero.scope": "UX, sitios web y productos digitales",
    "work.eyebrow": "Trabajo seleccionado",
    "work.title": "Interfaces, sitios web y productos digitales con una direccion clara y contenida.",
    "label.role": "Rol",
    "label.category": "Categoria",
    "project.visit": "Ver sitio",
    "project.ifeap.title": "Replanteamiento UX/UI, desarrollo WordPress, integracion Dendreo",
    "project.ifeap.desc": "Para IFEAP, una organizacion dedicada a formacion, acompa&ntilde;amiento y consultoria, me encargue del replanteamiento completo del sitio: UX mas clara, interfaz modernizada, desarrollo WordPress e integracion de Dendreo para gestionar formaciones.",
    "project.ifeap.role": "UX/UI / WordPress / Dendreo",
    "project.ifeap.category": "Sitio de organismo de formacion",
    "project.ifeap.m1": "Concepcion UX/UI",
    "project.ifeap.m2": "Replanteamiento global",
    "project.ifeap.m3": "Desarrollo WordPress",
    "project.ifeap.m4": "Integracion Dendreo",
    "project.ifeap.m5": "Plugins WordPress a medida",
    "project.templiers.title": "Sitio vitrina para artesano",
    "project.templiers.desc": "Creacion de un sitio vitrina para L&rsquo;Atelier des Templiers, con una direccion centrada en destacar el saber hacer artesanal, organizar los contenidos y construir una presencia online clara, elegante y creible.",
    "project.templiers.role": "Concepcion de interfaz / Integracion web",
    "project.templiers.category": "Sitio vitrina artesanal",
    "project.templiers.m1": "Concepcion de interfaz",
    "project.templiers.m2": "Integracion web",
    "project.templiers.m3": "Puesta en valor de la actividad artesanal",
    "project.templiers.m4": "Sitio vitrina responsive",
    "project.noria.title": "Replanteamiento ecommerce WooCommerce",
    "project.noria.desc": "Para Noria du Soleil, trabaje en el replanteamiento e integracion de un ecommerce WooCommerce. El objetivo era crear una tienda online elegante, inmersiva y funcional para presentar colecciones de perfumes, productos clave y el universo de marca.",
    "project.noria.role": "WooCommerce / Interfaz ecommerce",
    "project.noria.category": "Ecommerce de perfumes",
    "project.noria.m1": "Replanteamiento web",
    "project.noria.m2": "Integracion WooCommerce",
    "project.noria.m3": "Optimizacion de la experiencia de compra",
    "project.noria.m4": "Estructura de paginas producto",
    "project.noria.m5": "Interfaz ecommerce",
    "project.talaria.title": "Landing page y concepcion de aplicacion movil",
    "project.talaria.desc": "Talaria es una app pensada para simplificar la organizacion de viajes en grupo: planificacion, presupuesto compartido, eleccion de actividades y comparacion de vuelos, alojamientos y experiencias. Trabaje en la landing page y la interfaz movil con una direccion visual moderna y orientada a producto.",
    "project.talaria.role": "UX/UI / Landing page / App movil",
    "project.talaria.category": "Producto de viaje colaborativo",
    "project.talaria.m1": "Concepcion UX/UI",
    "project.talaria.m2": "Landing page",
    "project.talaria.m3": "Concepcion mobile app",
    "project.talaria.m4": "UX clara para un producto digital colaborativo",
    "about.eyebrow": "Perfil",
    "about.p1": "Soy Marceau Hay, conceptor UX/UI y conceptor web franc&eacute;s. Actualmente curso un master en UX/UI despues de una licenciatura en concepcion web. Me interesa crear interfaces claras: bien estructuradas, legibles, utiles y visualmente precisas.",
    "about.p2": "Mi recorrido combina proyectos freelance, estudios de interfaz, desarrollo web e iniciativas propias. Esa mezcla me ayuda a mirar cada proyecto mas alla de lo visual: estructura, mensaje, experiencia de usuario, viabilidad y ejecucion final.",
    "services.eyebrow": "Lo que hago",
    "services.title": "Del planteamiento inicial a la interfaz, del desarrollo al lanzamiento.",
    "services.ux.title": "Concepcion UX/UI",
    "services.ux": "Flujos de usuario, arquitectura, wireframes, sistemas de interfaz y experiencia global.",
    "services.web.title": "Concepcion Web",
    "services.web": "Landing pages, sitios de presentacion y paginas pensadas para comunicar rapido.",
    "services.build.title": "Implementacion",
    "services.build": "WordPress, Elementor, HTML/CSS a medida, integracion responsive y paginas listas para salir online.",
    "services.product.title": "Criterio de Producto",
    "services.product": "Posicionamiento, logica de oferta, conversion e ideas de negocio digital.",
    "mega.eyebrow": "Servicios",
    "mega.title": "Apoyo digital enfocado, del audit al desarrollo.",
    "mega.note": "Elige un punto de entrada claro y escala el trabajo desde el diagnostico hasta la ejecucion final.",
    "mega.audit.title": "Audit UX / Sitio web",
    "mega.audit.text": "Claridad, estructura, conversion, fricciones UX y recomendaciones accionables.",
    "mega.design.title": "Concepcion UX/UI & Web",
    "mega.design.text": "Wireframes, interfaces, landing pages, sistemas visuales y layouts cuidados.",
    "mega.designbuild.title": "Concepcion + Desarrollo",
    "mega.designbuild.text": "De la direccion visual a la implementacion responsive y paginas listas para publicar.",
    "mega.product.title": "Producto & Posicionamiento",
    "mega.product.text": "Estructura de oferta, mensaje, logica de conversion y criterio de producto digital.",
    "mega.feature.title": "No sabes por donde empezar?",
    "mega.feature.text": "Envia el contexto. Puedo ayudarte a definir el formato adecuado antes de construir.",
    "background.eyebrow": "Trayectoria",
    "background.title": "Un recorrido entre UX, web y experimentacion independiente.",
    "background.item1": "Master en concepcion UX/UI",
    "background.item2": "Licenciatura en concepcion web",
    "background.item3": "3 a&ntilde;os de aprendizaje / alternancia trabajo-estudio",
    "background.item4": "Proyectos freelance en multiples sectores",
    "background.item5": "Exploracion independiente de productos digitales",
    "skills.eyebrow": "Competencias",
    "skills.title": "Una base completa entre producto, web e implementación.",
    "blog.eyebrow": "Blog",
    "blog.title": "Notas sobre interfaces, desarrollo web y productos digitales.",
    "blog.read": "Leer nota",
    "faq.eyebrow": "FAQ",
    "faq.title": "Algunas respuestas claras antes de hablar.",
    "faq.q1": "En que tipo de proyectos trabajas?",
    "faq.a1": "Trabajo en concepcion UX/UI, landing pages, sitios de presentacion, productos digitales y experiencias web con criterio de producto.",
    "faq.q2": "Puedes concebir y construir el mismo proyecto?",
    "faq.a2": "Si. Segun el alcance, puedo trabajar desde la estructura y la concepcion de interfaz hasta WordPress, Elementor o implementacion HTML/CSS a medida.",
    "faq.q3": "Trabajas con clientes freelance?",
    "faq.a3": "Si. Colaboro con negocios locales, fundadores independientes, agencias y equipos que necesitan una ejecucion digital clara y cuidada.",
    "faq.q4": "Donde estas ubicado?",
    "faq.a4": "Estoy en Angers, Francia, y puedo colaborar en remoto en proyectos en Francia y tambien a nivel internacional.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Construyamos algo claro, solido y ambicioso.",
    "contact.text": "Si buscas un conceptor de interfaces, un colaborador freelance o alguien capaz de llevar una idea hasta una interfaz bien ejecutada, me encantara conversar.",
    "contact.primary": "Contactar",
    "contact.secondary": "Ver LinkedIn",
    "contact.email": "Email",
    "contact.location": "Ubicacion",
    "contact.france": "Francia",
    "service.audit.kicker": "Servicio / Audit",
    "service.audit.title": "Audit UX y web para tomar mejores decisiones digitales.",
    "service.audit.lead": "Un diagnostico enfocado de tu sitio o interfaz para detectar fricciones, afinar el mensaje y definir mejoras concretas antes de replantear o desarrollar.",
    "service.audit.primary": "Solicitar audit",
    "service.audit.best": "Sitios existentes, landing pages, funnels",
    "service.audit.output": "Recomendaciones priorizadas",
    "service.audit.focus": "Claridad, UX, conversion, confianza",
    "service.audit.section1.eyebrow": "Que reviso",
    "service.audit.section1.title": "De la primera impresion a la accion final.",
    "service.audit.card1.title": "Estructura",
    "service.audit.card1.text": "Navegacion, orden de secciones, jerarquia de contenido, ritmo de pagina y comprension rapida.",
    "service.audit.card2.title": "Friccion UX",
    "service.audit.card2.text": "Flujos confusos, acciones poco claras, estados ausentes y detalles que ralentizan al usuario.",
    "service.audit.card3.title": "Mensaje",
    "service.audit.card3.text": "Posicionamiento, claridad de oferta, propuesta de valor, pruebas y preguntas clave.",
    "service.audit.card4.title": "Conversion",
    "service.audit.card4.text": "Logica de CTA, confianza, foco del layout, friccion de formularios y mejoras accionables.",
    "service.audit.section2.title": "Hallazgos claros, no feedback vago.",
    "service.audit.item1": "Resumen con problemas y oportunidades",
    "service.audit.item2": "Recomendaciones priorizadas por impacto y esfuerzo",
    "service.audit.item3": "Notas de UX, mensaje y jerarquia visual",
    "service.audit.item4": "Roadmap para interfaz o implementacion",
    "service.audit.cta.title": "Necesitas entender que frena tu sitio?",
    "service.audit.cta.text": "Enviame la pagina, el contexto y el objetivo. Te ayudo a detectar donde mejorar claridad y rendimiento.",
    "service.common.back": "Volver a servicios",
    "service.common.deliverables": "Entregables",
    "service.common.contact": "Contactar",
    "service.design.kicker": "Servicio / Concepcion",
    "service.design.title": "Concepcion UX/UI y web con estructura, contencion y precision.",
    "service.design.lead": "Concibo interfaces y sitios web claros, intencionales y faciles de usar. El trabajo cubre estructura, direccion visual, interacciones, responsive y detalles de credibilidad.",
    "service.design.primary": "Iniciar proyecto de interfaz",
    "service.design.best": "Landing pages, portfolios, pantallas SaaS",
    "service.design.output": "Interfaz responsive de alta fidelidad",
    "service.design.focus": "UX, jerarquia, sistemas visuales",
    "service.design.section1.eyebrow": "Alcance de concepcion",
    "service.design.section1.title": "Una direccion de interfaz completa.",
    "service.design.card1.title": "Estructura UX",
    "service.design.card1.text": "Flujos, arquitectura de informacion, orden del contenido y wireframes antes del visual.",
    "service.design.card2.title": "Direccion visual",
    "service.design.card2.text": "Tipografia, espaciado, layout, contraste, componentes y direccion adecuada al proyecto.",
    "service.design.card3.title": "Responsive",
    "service.design.card3.text": "Pantallas desktop, tablet y movil concebidas con restricciones reales.",
    "service.design.card4.title": "Bases de sistema de interfaz",
    "service.design.card4.text": "Estilos y componentes reutilizables para mantener coherencia.",
    "service.design.section2.title": "Todo lo necesario para pasar al build.",
    "service.design.item1": "Direccion UX y estructura wireframe",
    "service.design.item2": "Interfaces de alta fidelidad",
    "service.design.item3": "Layouts desktop y movil",
    "service.design.item4": "Guias de componentes y estilos",
    "service.design.cta.title": "Necesitas una interfaz mas clara y creible?",
    "service.design.cta.text": "Cuentame que estas construyendo, para quien y que debe comunicar.",
    "service.common.viewwork": "Ver trabajos",
    "service.build.kicker": "Servicio / Dise&ntilde;o + Desarrollo",
    "service.build.title": "De una direccion visual cuidada a un sitio responsive en vivo.",
    "service.build.lead": "Una oferta combinada para proyectos que necesitan gusto y ejecucion. Estructuro, concibo la interfaz y desarrollo paginas listas para publicar.",
    "service.build.primary": "Construir un proyecto",
    "service.build.best.label": "Ideal para",
    "service.build.best.value": "Sitios web, landing pages, lanzamientos",
    "service.build.output.label": "Entregable",
    "service.build.output.value": "Paginas concebidas e implementadas",
    "service.build.focus.label": "Stack",
    "service.build.focus.value": "HTML/CSS, WordPress, Elementor",
    "service.build.best": "Sitios web, landing pages, lanzamientos",
    "service.build.output": "Paginas concebidas e implementadas",
    "service.build.focus": "HTML/CSS, WordPress, Elementor",
    "service.build.section1.eyebrow": "Metodo",
    "service.build.section1.title": "Un flujo de trabajo continuo.",
    "service.build.card1.title": "Estrategia primero",
    "service.build.card1.text": "Objetivo, audiencia, jerarquia y logica de conversion antes de concebir las pantallas.",
    "service.build.card2.title": "Sistema visual",
    "service.build.card2.text": "Lenguaje visual, reglas de layout, secciones, componentes y responsive.",
    "service.build.card3.title": "Desarrollo",
    "service.build.card3.text": "Paginas limpias y responsivas con el setup adecuado.",
    "service.build.card4.title": "Pulido de lanzamiento",
    "service.build.card4.text": "Espaciado, QA movil, estados interactivos, bases de rendimiento y ajustes finales.",
    "service.build.section2.title": "Calidad de interfaz con claridad de implementacion.",
    "service.build.item1": "Estrategia de pagina y estructura de contenido",
    "service.build.item2": "Dise&ntilde;o responsive",
    "service.build.item3": "Implementacion HTML/CSS o WordPress",
    "service.build.item4": "QA y refinamientos antes del lanzamiento",
    "service.build.cta.title": "Necesitas concebir y publicar una pagina?",
    "service.build.cta.text": "Es el mejor formato si quieres una direccion coherente desde la idea hasta la implementacion.",
    "service.product.kicker": "Servicio / Producto & Posicionamiento",
    "service.product.title": "Ofertas mas claras, mejor mensaje y estructura digital.",
    "service.product.lead": "Para ideas, ofertas de servicio y productos digitales que necesitan un posicionamiento mas claro antes de la interfaz.",
    "service.product.primary": "Clarificar una oferta",
    "service.product.best.label": "Ideal para",
    "service.product.best.value": "Ofertas, productos, landing pages",
    "service.product.output.label": "Entregable",
    "service.product.output.value": "Posicionamiento y logica de pagina",
    "service.product.focus.label": "Focus",
    "service.product.focus.value": "Claridad, confianza, conversion",
    "service.product.best": "Ofertas, productos, landing pages",
    "service.product.output": "Posicionamiento y logica de pagina",
    "service.product.focus": "Claridad, confianza, conversion",
    "service.product.section1.eyebrow": "Que clarificamos",
    "service.product.section1.title": "El pensamiento antes de la interfaz.",
    "service.product.card1.title": "Oferta",
    "service.product.card1.text": "Que se vende, para quien, por que importa y como presentarlo.",
    "service.product.card2.title": "Posicionamiento",
    "service.product.card2.text": "Angulo, diferenciacion, pruebas, objeciones y credibilidad.",
    "service.product.card3.title": "Logica de pagina",
    "service.product.card3.text": "El orden de secciones para pasar de atencion a confianza y accion.",
    "service.product.card4.title": "Criterio de producto",
    "service.product.card4.text": "Convertir una idea en experiencia, servicio, herramienta, landing page o producto digital mas claro.",
    "service.product.section2.title": "Claridad antes de producir.",
    "service.product.item1": "Clarificacion de oferta y audiencia",
    "service.product.item2": "Jerarquia del mensaje y narrativa",
    "service.product.item3": "Estructura de landing page o producto",
    "service.product.item4": "Recomendaciones de interfaz y ejecucion",
    "service.product.cta.title": "Tienes una idea que necesita una forma mas clara?",
    "service.product.cta.text": "Envia el contexto y el objetivo. Puedo ayudarte a convertirlo en una direccion digital mas precisa."
  }
};

const getStoredPreference = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const setStoredPreference = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    return undefined;
  }
};

const decodeHtml = (value) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
};

const getActiveDictionary = () => {
  return translations[document.documentElement.lang] || translations.en;
};


const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.title = decodeHtml(dictionary["meta.title"]);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) {
      node.innerHTML = value;
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  updateThemeLabel();
  setStoredPreference("portfolio-language", lang);
};

const updateThemeLabel = () => {
  const lang = document.documentElement.lang || "en";
  const dictionary = translations[lang] || translations.en;
  const isDark = document.body.dataset.theme === "dark";
  const label = isDark ? dictionary["theme.light"] : dictionary["theme.night"];

  if (themeLabel) {
    themeLabel.textContent = label;
  }

  if (themeIcon) {
    themeIcon.textContent = isDark ? "light_mode" : "dark_mode";
  }

  themeToggle?.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to night mode"
  );
};

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  updateThemeLabel();
  setStoredPreference("portfolio-theme", theme);
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 10);
};

const updateScrollUI = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  document.documentElement.style.setProperty(
    "--scroll-progress",
    progress.toFixed(2)
  );

  backToTop?.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.72);
};

const updateLocalTime = () => {
  if (!localTime) {
    return;
  }

  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  localTime.textContent = formatter.format(now);
  localTime.dateTime = now.toISOString();
};

const setMegaMenuOpen = (isOpen) => {
  if (!megaMenu || !megaTrigger) {
    return;
  }

  megaMenu.classList.toggle("is-open", isOpen);
  megaTrigger.setAttribute("aria-expanded", String(isOpen));
};

const setupMobileMenu = () => {
  if (!header || header.querySelector("[data-mobile-menu-toggle]")) {
    return;
  }

  const sectionHref = (anchor) => `${isHomePage ? "" : "index.html"}${anchor}`;

  const toggle = document.createElement("button");
  toggle.className = "mobile-menu-toggle";
  toggle.type = "button";
  toggle.setAttribute("data-mobile-menu-toggle", "");
  toggle.setAttribute("aria-label", "Open mobile menu");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-controls", "mobile-menu");
  toggle.innerHTML = '<span class="mobile-menu-toggle-lines" aria-hidden="true"></span>';

  const panel = document.createElement("div");
  panel.className = "mobile-menu-panel";
  panel.id = "mobile-menu";
  panel.setAttribute("data-mobile-menu", "");
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="mobile-menu-primary">
      <a class="mobile-menu-link" href="${sectionHref("#work")}" data-i18n="nav.work">Work</a>
      <a class="mobile-menu-link" href="${sectionHref("#skills")}" data-i18n="nav.blog">Skills</a>
      <a class="mobile-menu-link" href="${sectionHref("#about")}" data-i18n="nav.about">About</a>
      <a class="mobile-menu-link" href="${sectionHref("#contact")}" data-i18n="nav.contact">Contact</a>
    </div>
    <div class="mobile-menu-divider" aria-hidden="true"></div>
    <p class="mobile-menu-label" data-i18n="nav.services">Services</p>
    <div class="mobile-menu-services">
      <a class="mobile-service-link" href="service-audit.html"><strong data-i18n="mega.audit.title">UX / Website Audit</strong><small data-i18n="mega.audit.text">Clarity, structure, conversion, UX friction, and actionable recommendations.</small></a>
      <a class="mobile-service-link" href="service-design.html"><strong data-i18n="mega.design.title">UX/UI & Web Conception</strong><small data-i18n="mega.design.text">Wireframes, interfaces, landing pages, visual systems, and refined layouts.</small></a>
      <a class="mobile-service-link" href="service-design-development.html"><strong data-i18n="mega.designbuild.title">Conception + Development</strong><small data-i18n="mega.designbuild.text">From visual direction to responsive implementation and launch-ready pages.</small></a>
      <a class="mobile-service-link" href="service-product-positioning.html"><strong data-i18n="mega.product.title">Product & Positioning</strong><small data-i18n="mega.product.text">Offer structure, messaging, conversion logic, and digital product thinking.</small></a>
    </div>
    <div class="mobile-menu-divider" aria-hidden="true"></div>
    <a class="mobile-menu-link" href="${sectionHref("#contact")}" data-i18n="nav.cta">Let&rsquo;s talk</a>
  `;

  const setMobileMenuOpen = (isOpen) => {
    document.body.classList.toggle("is-mobile-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close mobile menu" : "Open mobile menu");
    panel.setAttribute("aria-hidden", String(!isOpen));
  };

  header.querySelector(".header-actions")?.append(toggle);
  header.insertAdjacentElement("afterend", panel);

  toggle.addEventListener("click", () => {
    setMobileMenuOpen(!document.body.classList.contains("is-mobile-menu-open"));
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!panel.contains(event.target) && !toggle.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMobileMenuOpen(false);
    }
  });
};

document.querySelectorAll(".hero-copy.reveal").forEach((item) => {
  item.dataset.motion = "soft";
});

document.querySelectorAll(".hero-panel.reveal, .contact-details.reveal").forEach((item) => {
  item.dataset.motion = "right";
});

document.querySelectorAll(".section-heading.reveal").forEach((item) => {
  item.dataset.motion = "left";
});

document.querySelectorAll(".project.reveal").forEach((item) => {
  item.dataset.motion = "lift";
});

document.querySelectorAll(".service.reveal").forEach((item) => {
  item.dataset.motion = "scale";
});

document.querySelectorAll(".faq-item.reveal").forEach((item) => {
  item.dataset.motion = "clip";
});

document.querySelectorAll(".timeline.reveal, .copy-stack.reveal").forEach((item) => {
  item.dataset.motion = "clip";
});

document.querySelectorAll(".contact-copy.reveal").forEach((item) => {
  item.dataset.motion = "left";
});

revealItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index * 34, 220)}ms`);
});

updateHeader();
updateScrollUI();
updateLocalTime();
setInterval(updateLocalTime, 30000);

window.addEventListener(
  "scroll",
  () => {
    updateHeader();
    updateScrollUI();
  },
  { passive: true }
);

window.addEventListener("resize", updateScrollUI);

if (megaMenu && megaTrigger) {
  let closeMegaTimeout;

  megaMenu.addEventListener("pointermove", (event) => {
    const rect = megaMenu.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    megaMenu.style.setProperty("--mega-x", `${x.toFixed(2)}%`);
    megaMenu.style.setProperty("--mega-y", `${y.toFixed(2)}%`);
  });

  megaMenu.addEventListener("pointerenter", () => {
    clearTimeout(closeMegaTimeout);
    setMegaMenuOpen(true);
  });

  megaMenu.addEventListener("pointerleave", () => {
    closeMegaTimeout = setTimeout(() => setMegaMenuOpen(false), 120);
  });

  megaTrigger.addEventListener("click", () => {
    setMegaMenuOpen(!megaMenu.classList.contains("is-open"));
  });

  megaTrigger.addEventListener("focus", () => {
    setMegaMenuOpen(true);
  });

  document.addEventListener("click", (event) => {
    if (!megaMenu.contains(event.target)) {
      setMegaMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMegaMenuOpen(false);
      megaTrigger.focus();
    }
  });

  megaMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMegaMenuOpen(false));
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const setCookieConsent = (value) => {
  setStoredPreference("portfolio-cookie-consent", value);
  cookieBanner?.classList.remove("is-visible");
  window.setTimeout(() => {
    if (cookieBanner) {
      cookieBanner.hidden = true;
    }
  }, 260);
};

if (cookieBanner && !getStoredPreference("portfolio-cookie-consent", "")) {
  cookieBanner.hidden = false;
  window.requestAnimationFrame(() => {
    cookieBanner.classList.add("is-visible");
  });
}

cookieAccept?.addEventListener("click", () => setCookieConsent("accepted"));
cookieDecline?.addEventListener("click", () => setCookieConsent("declined"));

themeToggle?.addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

setupMobileMenu();
applyTheme(getStoredPreference("portfolio-theme", "light"));
applyLanguage(getStoredPreference("portfolio-language", "fr"));

const canUseCustomCursor =
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canUseCustomCursor && cursorDot && cursorRing) {
  document.body.classList.add("has-custom-cursor");

  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const ring = { x: pointer.x, y: pointer.y };
  const interactiveSelector = "a, button, [role='button'], input, textarea, select";
  const transparentColor = "rgba(0, 0, 0, 0)";

  const parseRgb = (value) => {
    const match = value.match(/rgba?\(([^)]+)\)/);

    if (!match) {
      return null;
    }

    const [r, g, b, a = "1"] = match[1].split(",").map((part) => part.trim());
    return {
      r: Number(r),
      g: Number(g),
      b: Number(b),
      a: Number(a)
    };
  };

  const getRelativeLuminance = ({ r, g, b }) => {
    const values = [r, g, b].map((channel) => {
      const normalized = channel / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : ((normalized + 0.055) / 1.055) ** 2.4;
    });

    return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
  };

  const updateCursorContrast = (x, y) => {
    let node = document.elementFromPoint(x, y);
    let color = null;

    while (node && node !== document.documentElement) {
      const background = window.getComputedStyle(node).backgroundColor;
      const parsed = parseRgb(background);

      if (parsed && parsed.a > 0 && background !== transparentColor) {
        color = parsed;
        break;
      }

      node = node.parentElement;
    }

    if (!color) {
      color = parseRgb(window.getComputedStyle(document.body).backgroundColor);
    }

    if (!color) {
      return;
    }

    const luminance = getRelativeLuminance(color);
    document.body.dataset.cursorContrast = luminance > 0.45 ? "dark" : "light";
  };

  const moveCursor = (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    cursorDot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
    updateCursorContrast(pointer.x, pointer.y);
    document.body.classList.remove("is-cursor-hidden");
    document.body.classList.add("is-cursor-ready");
  };

  const renderCursor = () => {
    ring.x += (pointer.x - ring.x) * 0.18;
    ring.y += (pointer.y - ring.y) * 0.18;
    cursorRing.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  };

  window.addEventListener("pointermove", moveCursor, { passive: true });
  window.addEventListener("pointerleave", () => {
    document.body.classList.add("is-cursor-hidden");
  });
  window.addEventListener("pointerenter", () => {
    document.body.classList.remove("is-cursor-hidden");
  });

  document.addEventListener("pointerover", (event) => {
    if (event.target.closest(interactiveSelector)) {
      document.body.classList.add("is-cursor-hover");
    }
  });

  document.addEventListener("pointerout", (event) => {
    if (event.target.closest(interactiveSelector)) {
      document.body.classList.remove("is-cursor-hover");
    }
  });

  renderCursor();
}

if (loader) {
  let loaderValue = 0;
  let loaderDone = false;
  let loaderFrame;

  const setLoaderProgress = (value) => {
    loaderValue = Math.max(loaderValue, Math.min(100, Math.round(value)));
    loader?.style.setProperty("--loader-progress", loaderValue);

    if (loaderPercent) {
      loaderPercent.textContent = String(loaderValue);
    }
  };

  const tickLoader = () => {
    if (!loaderDone) {
      const nextValue = loaderValue + Math.max(1, (92 - loaderValue) * 0.055);
      setLoaderProgress(Math.min(nextValue, 92));
      loaderFrame = window.requestAnimationFrame(tickLoader);
    }
  };

  const hideLoader = () => {
    loaderDone = true;
    window.cancelAnimationFrame(loaderFrame);
    setLoaderProgress(100);

    window.setTimeout(() => {
      document.body.classList.remove("is-loading");
      document.body.classList.add("is-loaded");

      window.setTimeout(playWriteTitleAnimations, 920);
    }, 360);
  };

  setLoaderProgress(0);
  loaderFrame = window.requestAnimationFrame(tickLoader);

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
  }
} else {
  playWriteTitleAnimations();
}
