const translations = {
  pt: {
    navBrand: "Marca",
    navCollections: "Coleções",
    navCraft: "Saber-fazer",
    navContact: "Contacto",
    heroEyebrow: "Joias artesanais em origami",
    heroTitle: "Pequenas dobras, grandes viagens.",
    heroCopy: "Tatinotabi transforma papel japonês em brincos, colares e amuletos leves, coloridos e protegidos para acompanhar momentos especiais.",
    heroPrimary: "Ver coleções",
    heroSecondary: "Pedir uma peça",
    brandKicker: "A marca",
    brandTitle: "Elegância japonesa com calor artesanal.",
    brandCopy: "Tatinotabi nasce do encontro entre viagem, paciência e papel. Cada peça é dobrada à mão, selada com cuidado e pensada para trazer cor sem perder delicadeza.",
    collectionsKicker: "Coleções",
    collectionsTitle: "Peças para usar, guardar e oferecer.",
    productOneTag: "Assinatura",
    productOneTitle: "Brincos Tsuru",
    productOneCopy: "Dobras clássicas com movimento suave, ideais para uma presença delicada e luminosa.",
    productTwoTag: "Cerimónia",
    productTwoTitle: "Colar Sensu",
    productTwoCopy: "Formas inspiradas nos leques japoneses, com papel estampado e acabamento acetinado.",
    productThreeTag: "Presente",
    productThreeTitle: "Amuletos Sakura",
    productThreeCopy: "Pequenos talismãs florais para malas, chaves ou embalagens de presente personalizadas.",
    craftKicker: "Saber-fazer",
    craftTitle: "Do papel a uma joia pronta para durar.",
    craftStepOne: "Seleção de papéis japoneses com padrões vivos e harmoniosos.",
    craftStepTwo: "Dobragem precisa, montagem leve e ferragens escolhidas com cuidado.",
    craftStepThree: "Proteção em camadas para reforçar a peça e preservar as cores.",
    storyKicker: "História",
    storyTitle: "Tati no tabi: uma viagem em cada detalhe.",
    storyCopy: "O nome evoca caminho, memória e descoberta. Cada criação procura esse equilíbrio: a alegria de uma peça colorida, a calma de um gesto repetido e a poesia de algo feito devagar.",
    contactKicker: "Contacto",
    contactTitle: "Quer uma peça personalizada?",
    contactCopy: "Escreva para encomendas, colaborações ou para escolher padrões e cores. Respondemos com carinho e sugestões adaptadas ao seu momento.",
    contactButton: "Enviar email",
    footerTop: "Voltar ao topo"
  },
  en: {
    navBrand: "Brand",
    navCollections: "Collections",
    navCraft: "Craft",
    navContact: "Contact",
    heroEyebrow: "Handmade origami jewelry",
    heroTitle: "Small folds, beautiful journeys.",
    heroCopy: "Tatinotabi turns Japanese paper into light, colorful earrings, necklaces and charms, sealed with care for meaningful everyday moments.",
    heroPrimary: "View collections",
    heroSecondary: "Request a piece",
    brandKicker: "The brand",
    brandTitle: "Japanese elegance with handmade warmth.",
    brandCopy: "Tatinotabi begins where travel, patience and paper meet. Every piece is folded by hand, carefully sealed and designed to bring color without losing delicacy.",
    collectionsKicker: "Collections",
    collectionsTitle: "Pieces to wear, treasure and gift.",
    productOneTag: "Signature",
    productOneTitle: "Tsuru Earrings",
    productOneCopy: "Classic folds with gentle movement, made for a delicate and luminous presence.",
    productTwoTag: "Ceremony",
    productTwoTitle: "Sensu Necklace",
    productTwoCopy: "Shapes inspired by Japanese fans, with patterned paper and a soft satin finish.",
    productThreeTag: "Gift",
    productThreeTitle: "Sakura Charms",
    productThreeCopy: "Small floral talismans for bags, keys or personalized gift wrapping.",
    craftKicker: "Craft",
    craftTitle: "From paper to jewelry made to last.",
    craftStepOne: "Selection of Japanese papers with vivid, harmonious patterns.",
    craftStepTwo: "Precise folding, lightweight assembly and carefully chosen findings.",
    craftStepThree: "Layered protection to strengthen each piece and preserve the colors.",
    storyKicker: "Story",
    storyTitle: "Tati no tabi: a journey in every detail.",
    storyCopy: "The name evokes path, memory and discovery. Each creation searches for that balance: the joy of a colorful piece, the calm of a repeated gesture and the poetry of something made slowly.",
    contactKicker: "Contact",
    contactTitle: "Would you like a custom piece?",
    contactCopy: "Write for orders, collaborations or to choose patterns and colors. We reply with care and suggestions shaped around your moment.",
    contactButton: "Send email",
    footerTop: "Back to top"
  }
};

const languageButtons = document.querySelectorAll(".lang-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const year = document.querySelector("#year");

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.pt;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = lang;
  document.title = lang === "pt"
    ? "Tatinotabi | Joias artesanais em origami"
    : "Tatinotabi | Handmade origami jewelry";

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("tatinotabi-language", lang);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

year.textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("tatinotabi-language") || "pt");
