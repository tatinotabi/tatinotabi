function setLanguage(lang){

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-pt]").forEach(el => {

        if(lang === "pt"){
            el.innerHTML = el.dataset.pt;
        } else {
            el.innerHTML = el.dataset.en;
        }

    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage =
        localStorage.getItem("language") || "pt";

    setLanguage(savedLanguage);

});