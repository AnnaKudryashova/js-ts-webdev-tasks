export let currentLocale: "en" | "ar" = "en";
let localeData: Record<string, Record<string, string>> | null = null;

function fetchLocales(): Promise<Record<string, Record<string, string>>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      import('../locales.json').then((data) => resolve(data));
    }, 1000);
  });
}

export async function changeLocale() {
  if (!localeData) {
    localeData = await fetchLocales();
  }

  currentLocale = currentLocale === "en" ? "ar" : "en";
  document.body.setAttribute("dir", currentLocale === "ar" ? "rtl" : "ltr");
  translateAllTextOnPage();
}

export function translateAllTextOnPage() {
  if (!localeData) {
    console.warn("Locale data not loaded.");
    return;
  }

  const localeMessages = localeData[currentLocale];
  const elementsForTranslation = document.querySelectorAll("[data-i18n]");

  elementsForTranslation.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && localeMessages[key]) {
      element.innerText = localeMessages[key];
    }
  });


  if (currentLocale === "ar") {
    elementsForTranslation.forEach(el => el.classList.add("font-arabic"));
  } else {
    elementsForTranslation.forEach(el => el.classList.remove("font-arabic"));
  }
}