document.addEventListener("DOMContentLoaded", () => {
  let currentLang = "en";
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    });

    nav.addEventListener("click", (event) => {
      const target = event.target.closest("a");
      if (!target) return;
      if (nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!(target instanceof HTMLAnchorElement)) return;
      const id = target.getAttribute("href")?.slice(1);
      const section = id ? document.getElementById(id) : null;
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const langSwitchEl = document.querySelector(".lang-switch");
  const langToggleEl = document.querySelector(".lang-toggle");
  const langMenuEl = document.querySelector(".lang-menu");
  const langOptionsEls = document.querySelectorAll(".lang-option");

  const homePropertiesContainer = document.getElementById("home-properties");
  const allPropertiesContainer = document.getElementById("all-properties");
  const propertyDetailContainer = document.getElementById("property-detail");
  const blogPostContainer = document.getElementById("blog-post");
  const resultsCountEl = document.getElementById("results-count");
  const noResultsEl = document.getElementById("no-results");
  const filtersResetBtn = document.getElementById("filters-reset");

  const filterAreaEl = document.getElementById("filter-area");
  const filterTypeEl = document.getElementById("filter-type");
  const filterMinPriceEl = document.getElementById("filter-min-price");
  const filterMaxPriceEl = document.getElementById("filter-max-price");
  const filterBedsEl = document.getElementById("filter-beds");
  const filterBathsEl = document.getElementById("filter-baths");
  const filterMinSizeEl = document.getElementById("filter-min-size");
  const filterMaxSizeEl = document.getElementById("filter-max-size");

  const translations = {
    de: {
      "nav.home": "Startseite",
      "nav.about": "Über uns",
      "nav.properties": "Immobilien",
      "nav.why": "Blog",
      "nav.contact": "Kontakt",
      "blog.eyebrow": "Paraguay Sun Realty Blog",
      "blog.title": "Einblicke in den Immobilienmarkt in Paraguay",
      "blog.lead":
        "Lesen Sie Guides, Marktupdates und praktische Tipps zum Immobilienkauf und Leben in Paraguay.",
      "blog.latestEyebrow": "Aktuelle Artikel",
      "blog.latestTitle": "Aus dem Team von Paraguay Sun Realty",
      "blog.latestLead":
        "Neue Inhalte erscheinen hier, sobald Sie Artikel zu Regionen, Stadtteilen, Kaufablauf und Lifestyle in Paraguay veröffentlichen.",
      "blog.sample1.eyebrow": "Ratgeber",
      "blog.sample1.title": "Erste Schritte beim Immobilienkauf in Paraguay",
      "blog.sample1.excerpt":
        "Ein Überblick über den Kaufprozess – von der ersten Kontaktaufnahme bis zur Unterzeichnung beim Notar. Ideal als erster Artikel für neue Interessenten.",
      "blog.sample2.eyebrow": "Lifestyle",
      "blog.sample2.title": "Leben in Asunción, Encarnación und darüber hinaus",
      "blog.sample2.excerpt":
        "Ein Platz, um verschiedene Regionen, Stadtviertel und den Alltag in den wichtigsten Städten Paraguays zu erklären.",
      "hero.eyebrow": "Immobilien in Paraguay",
      "hero.title": "Finden Sie Ihr Traumhaus",
      "hero.subtitle":
        "Häuser, Wohnungen und Grundstücke in ganz Paraguay – exklusive Angebote, lokale Expertise und Begleitung vom ersten Besichtigungstermin bis zur Schlüsselübergabe.",
      "hero.ctaExplore": "Immobilien ansehen",
      "hero.ctaContact": "Kontakt aufnehmen",
      "hero.cardTitle": "Bereit für Ihr neues Zuhause?",
      "hero.cardText":
        "Kontaktieren Sie uns und lassen Sie sich von unseren Experten durch Ihre Immobilieninvestition in Paraguay begleiten.",
      "hero.cardButton": "Mit Experten sprechen",
      "properties.eyebrow": "Unsere Immobilien",
      "properties.title": "Immobiliensuche in Paraguay",
      "properties.lead":
        "Nutzen Sie die Filter, um das passende Haus, die Wohnung oder das Grundstück zu finden. Klicken Sie auf ein Exposé, um alle Details zu sehen.",
      "property.eyebrow": "Immobiliendetails",
      "property.title": "Entdecken Sie Ihr neues Zuhause",
      "about.eyebrow": "Über Paraguay Sun Realty",
      "about.title": "Ihr Immobilienpartner in Paraguay",
      "about.lead":
        "Paraguay Sun Realty hilft Käufern und Investoren, die passende Immobilie in Paraguay zu finden – von modernen Wohnungen und Familienhäusern bis hin zu Bestandsobjekten und Grundstücken für Projektentwicklungen.",
      "about.conceptTitle": "Unser Konzept",
      "about.conceptText":
        "Lernen Sie das Konzept von Paraguay Sun Realty kennen. Wir konzentrieren uns auf hochwertige Angebote, klare Beratung und ein reibungsloses Kauferlebnis auf Basis lokaler Marktexpertise.",
      "about.bullet1": "Häuser, Wohnungen und Grundstücke in ganz Paraguay",
      "about.bullet2": "Neubauten, Bestandsobjekte und Grundstücke",
      "about.bullet3": "Lokale Beratung und Begleitung von A bis Z",
      "about.drivesTitle": "Was uns antreibt",
      "about.drivesText":
        "Unsere Mission ist es, den Immobilienkauf in Paraguay so einfach und sicher wie möglich zu machen. Wir stehen für Transparenz, lokale Expertise und langfristigen Mehrwert für unsere Kunden.",
      "about.pill1": "Freiheit & Lifestyle",
      "about.pill2": "Vertrauensvolle Partnerschaften",
      "about.pill3": "Rundum-Betreuung",
      "homeProperties.eyebrow": "Unsere Immobilien",
      "homeProperties.title": "Angebote in ganz Paraguay entdecken",
      "homeProperties.lead":
        "Entdecken Sie eine kuratierte Auswahl an Immobilien in Paraguay. Vergleichen Sie Ausstattungen, sehen Sie Details ein und kontaktieren Sie uns für Besichtigungen oder das vollständige Portfolio.",
      "homeProperties.ctaAll": "Alle Immobilien ansehen",
      "benefits.eyebrow": "Warum Paraguay Sun Realty",
      "benefits.title": "Umfassende Unterstützung für Ihren Neustart",
      "benefits.lead":
        "Wir begleiten Sie bei jedem Schritt des Immobilienkaufs in Paraguay und können Sie bei Bedarf zusätzlich beim Thema Einwanderung unterstützen.",
      "benefits.card1.title": "Gebührenfreier Kaufprozess",
      "benefits.card1.text":
        "Für den Kaufprozess erheben wir keine Gebühren. Sie profitieren von klarer Beratung und transparenten Konditionen – von der Suche und Besichtigung bis zur Verhandlung und Vertragsunterzeichnung.",
      "benefits.card2.title": "Unterstützung bei der Einwanderung",
      "benefits.card2.text":
        "Optionale Services zur Einwanderung in Paraguay stehen gegen Aufpreis zur Verfügung – inklusive Unterstützung bei Aufenthaltsgenehmigung, Dokumentation und Umzug.",
      "benefits.card3.title": "Begleitung von Anfang bis Ende",
      "benefits.card3.text":
        "Vom ersten Kennenlernen bis zur Schlüsselübergabe stehen Ihnen unsere Spezialisten zur Seite und begleiten Sie bei jedem Schritt Ihres Immobilienkaufs.",
      "whyPy.title": "Warum Paraguay 🇵🇾",
      "whyPy.lead":
        "Entdecken Sie das Land der Freiheit und Sonne – Ihr Zugang zu erschwinglichem, hochwertigem Wohnen.",
      "whyPy.card1.title": "Erschwinglicher Luxus",
      "whyPy.card1.text":
        "Großes Preis-Leistungs-Verhältnis in ganz Paraguay – von modernen Apartments bis hin zu großzügigen Häusern und Grundstücken mit starkem langfristigem Potenzial.",
      "whyPy.card2.title": "Freiheit & Privatsphäre",
      "whyPy.card2.text":
        "Eines der freiheitsfreundlichsten Länder der Welt mit niedrigen Steuern, wenig Regulierung und starkem Eigentumsschutz.",
      "whyPy.card3.title": "Sonne das ganze Jahr",
      "whyPy.card3.text":
        "Über 300 Sonnentage im Jahr mit angenehmem Klima – ideal für ein Leben im Freien und einen aktiven Alltag.",
      "whyPy.card4.title": "Wachstumsstarke Wirtschaft",
      "whyPy.card4.text":
        "Eine der am schnellsten wachsenden Volkswirtschaften Südamerikas mit stabiler Währung und interessanten Investitionsmöglichkeiten.",
      "whyPy.card5.title": "Einfache Aufenthaltsgenehmigung",
      "whyPy.card5.text":
        "Eines der einfachsten Programme für eine dauerhafte Aufenthaltsgenehmigung weltweit – attraktiv für Investoren und Ruheständler.",
      "whyPy.card6.title": "Hohe Lebensqualität",
      "whyPy.card6.text":
        "Niedrige Lebenshaltungskosten, freundliche Menschen, sichere Viertel und ein entspannter Lebensstil mit moderner Infrastruktur.",
      "whyPy.ctaTitle": "Bereit, Paraguay zu entdecken?",
      "whyPy.ctaText": "Entdecken Sie unsere kuratierte Auswahl an Immobilien in den begehrtesten Lagen Paraguays.",
      "whyPy.ctaButton": "Immobilien in Paraguay ansehen",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Nehmen Sie Kontakt auf",
      "contact.lead":
        "Bereit, Ihre Wunschimmobilie zu finden? Kontaktieren Sie uns noch heute und lassen Sie sich von unseren Experten durch Ihre Investition begleiten.",
      "contact.infoTitle": "Kontaktinformationen",
      "contact.emailLabel": "E-Mail",
      "contact.phoneLabel": "Telefon",
      "contact.phoneNote": "Anruf oder WhatsApp",
      "contact.officeLabel": "Büro",
      "contact.whatsAppLabel": "WhatsApp",
      "contact.whatsAppLink": "Per WhatsApp schreiben",
      "contact.formTitle": "Schreiben Sie uns eine Nachricht",
      "contact.form.nameLabel": "Ihr Name",
      "contact.form.namePlaceholder": "Geben Sie Ihren vollständigen Namen ein",
      "contact.form.emailLabel": "Ihre E-Mail-Adresse",
      "contact.form.emailPlaceholder": "name@beispiel.com",
      "contact.form.phoneLabel": "Ihre Telefonnummer",
      "contact.form.phonePlaceholder": "Bitte mit Ländervorwahl angeben",
      "contact.form.budgetLabel": "Gewünschtes Budget",
      "contact.form.budgetPlaceholder": "Wählen Sie Ihr Budget",
      "contact.form.budgetOption1": "0–50.000 $",
      "contact.form.budgetOption2": "50.000–100.000 $",
      "contact.form.budgetOption3": "100.000–200.000 $",
      "contact.form.budgetOption4": "200.000–300.000 $",
      "contact.form.budgetOption5": "300.000+ $",
      "contact.form.messageLabel": "Ihre Nachricht",
      "contact.form.messagePlaceholder": "Beschreiben Sie kurz, wonach Sie suchen …",
      "contact.form.submit": "Nachricht senden",
      "contact.form.note":
        "Dieses Formular dient nur zur Demonstration und versendet keine Daten. Binden Sie Ihr bevorzugtes CRM oder Ihren E-Mail-Dienst an, um Anfragen zu erhalten.",
      "footer.text": "Paraguay Sun Realty &mdash; Immobilien in Paraguay"
    },
    es: {
      "nav.home": "Inicio",
      "nav.about": "Nosotros",
      "nav.properties": "Propiedades",
      "nav.why": "Blog",
      "nav.contact": "Contacto",
      "blog.eyebrow": "Blog de Paraguay Sun Realty",
      "blog.title": "Ideas sobre el mercado inmobiliario en Paraguay",
      "blog.lead":
        "Lee guías, actualizaciones de mercado y consejos prácticos para comprar propiedad y empezar una nueva vida en Paraguay.",
      "blog.latestEyebrow": "Artículos recientes",
      "blog.latestTitle": "Del equipo de Paraguay Sun Realty",
      "blog.latestLead":
        "Aquí aparecerán nuevos contenidos a medida que publiques artículos sobre zonas, barrios, pasos de compra y estilo de vida en Paraguay.",
      "blog.sample1.eyebrow": "Guía",
      "blog.sample1.title": "Primeros pasos para comprar una propiedad en Paraguay",
      "blog.sample1.excerpt":
        "Un resumen del proceso de compra, desde el primer contacto hasta la firma en la notaría: perfecto como tu primer artículo para dar la bienvenida a nuevos clientes.",
      "blog.sample2.eyebrow": "Estilo de vida",
      "blog.sample2.title": "Vivir en Asunción, Encarnación y más allá",
      "blog.sample2.excerpt":
        "Un espacio para explicar las distintas regiones, barrios y cómo es el día a día en las principales ciudades de Paraguay.",
      "hero.eyebrow": "Bienes raíces en Paraguay",
      "hero.title": "Descubre tu hogar ideal",
      "hero.subtitle":
        "Casas, departamentos y terrenos en todo Paraguay: cartera seleccionada, asesoría local y acompañamiento desde la primera visita hasta la firma.",
      "hero.ctaExplore": "Ver propiedades",
      "hero.ctaContact": "Hablar con nosotros",
      "hero.cardTitle": "¿Listo para encontrar tu nuevo hogar?",
      "hero.cardText":
        "Contáctanos y deja que nuestros expertos te guíen en tu inversión inmobiliaria en Paraguay.",
      "hero.cardButton": "Hablar con un experto",
      "properties.eyebrow": "Nuestras propiedades",
      "properties.title": "Buscar propiedades en Paraguay",
      "properties.lead":
        "Usa los filtros para encontrar la casa, departamento o terreno adecuado. Haz clic en cualquier ficha para ver todos los detalles.",
      "property.eyebrow": "Detalle de la propiedad",
      "property.title": "Descubre tu nuevo hogar",
      "about.eyebrow": "Sobre Paraguay Sun Realty",
      "about.title": "Tu socio inmobiliario en Paraguay",
      "about.lead":
        "Paraguay Sun Realty ayuda a compradores e inversores a encontrar la propiedad adecuada en Paraguay: desde departamentos modernos y casas familiares hasta oportunidades de segunda mano y terrenos para desarrollo.",
      "about.conceptTitle": "Nuestro concepto",
      "about.conceptText":
        "Conoce el concepto detrás de Paraguay Sun Realty. Nos enfocamos en listados de calidad, asesoría clara y una experiencia de compra fluida basada en conocimiento local del mercado.",
      "about.bullet1": "Casas, departamentos y terrenos en todo Paraguay",
      "about.bullet2": "Obras nuevas, casas de segunda mano y oportunidades de tierra",
      "about.bullet3": "Asesoría local y acompañamiento de punta a punta",
      "about.drivesTitle": "Lo que nos mueve",
      "about.drivesText":
        "Nuestra misión es hacer que comprar una propiedad en Paraguay sea sencillo y seguro. Apostamos por la transparencia, la experiencia local y el valor a largo plazo para nuestros clientes.",
      "about.pill1": "Libertad y estilo de vida",
      "about.pill2": "Alianzas de confianza",
      "about.pill3": "Acompañamiento integral",
      "homeProperties.eyebrow": "Nuestras propiedades",
      "homeProperties.title": "Explora propiedades en todo Paraguay",
      "homeProperties.lead":
        "Explora una selección curada de propiedades en Paraguay. Compara características, mira los detalles y contáctanos para coordinar visitas o solicitar el portafolio completo.",
      "homeProperties.ctaAll": "Ver todas las propiedades",
      "benefits.eyebrow": "Por qué Paraguay Sun Realty",
      "benefits.title": "Acompañamiento completo para tu nueva vida",
      "benefits.lead":
        "Te guiamos en cada paso para comprar una propiedad en Paraguay y, si lo necesitas, también podemos acompañarte en el proceso migratorio.",
      "benefits.card1.title": "Proceso de compra sin comisiones",
      "benefits.card1.text":
        "No cobramos honorarios por el proceso de compra. Te beneficias de una asesoría clara y condiciones transparentes, desde la búsqueda y las visitas hasta la negociación y la firma.",
      "benefits.card2.title": "Asesoría migratoria",
      "benefits.card2.text":
        "Disponemos de servicios opcionales para residencia en Paraguay, con apoyo en trámites, documentación y logística de mudanza.",
      "benefits.card3.title": "Acompañamiento de punta a punta",
      "benefits.card3.text":
        "Desde el primer contacto hasta la entrega de llaves, nuestros especialistas te acompañan en cada etapa de tu compra e instalación en Paraguay.",
      "whyPy.title": "Por qué Paraguay 🇵🇾",
      "whyPy.lead":
        "Descubre el país de la libertad y el sol: tu puerta de entrada a un estilo de vida de calidad a un costo accesible.",
      "whyPy.card1.title": "Lujo accesible",
      "whyPy.card1.text":
        "Gran relación precio-calidad en todo Paraguay: desde departamentos modernos hasta casas amplias y terrenos con fuerte potencial a largo plazo.",
      "whyPy.card2.title": "Libertad y privacidad",
      "whyPy.card2.text":
        "Uno de los países más amigables con la libertad, con baja carga impositiva, poca regulación y fuerte protección a la propiedad privada.",
      "whyPy.card3.title": "Sol todo el año",
      "whyPy.card3.text":
        "Más de 300 días de sol al año y un clima agradable, ideal para disfrutar de actividades al aire libre durante todo el año.",
      "whyPy.card4.title": "Economía en crecimiento",
      "whyPy.card4.text":
        "Una de las economías de más rápido crecimiento en Sudamérica, con moneda estable y buenas oportunidades de inversión.",
      "whyPy.card5.title": "Residencia sencilla",
      "whyPy.card5.text":
        "Uno de los programas de residencia permanente más sencillos del mundo, atractivo para inversores y jubilados.",
      "whyPy.card6.title": "Calidad de vida",
      "whyPy.card6.text":
        "Bajo costo de vida, gente amable, barrios seguros y un estilo de vida relajado con infraestructura moderna.",
      "whyPy.ctaTitle": "¿Listo para descubrir Paraguay?",
      "whyPy.ctaText":
        "Explora nuestra selección curada de propiedades en las zonas más buscadas de Paraguay.",
      "whyPy.ctaButton": "Ver oportunidades en Paraguay",
      "contact.eyebrow": "Contacto",
      "contact.title": "Ponte en contacto",
      "contact.lead":
        "¿Listo para encontrar tu propiedad ideal? Contáctanos hoy mismo y deja que nuestros expertos te acompañen en tu inversión inmobiliaria.",
      "contact.infoTitle": "Información de contacto",
      "contact.emailLabel": "Correo electrónico",
      "contact.phoneLabel": "Teléfono",
      "contact.phoneNote": "Llamada o WhatsApp",
      "contact.officeLabel": "Oficina",
      "contact.whatsAppLabel": "WhatsApp",
      "contact.whatsAppLink": "Chatear por WhatsApp",
      "contact.formTitle": "Envíanos un mensaje",
      "contact.form.nameLabel": "Tu nombre",
      "contact.form.namePlaceholder": "Ingresa tu nombre completo",
      "contact.form.emailLabel": "Tu correo electrónico",
      "contact.form.emailPlaceholder": "nombre@ejemplo.com",
      "contact.form.phoneLabel": "Tu número de teléfono",
      "contact.form.phonePlaceholder": "Incluye el código de país (ej. +49...)",
      "contact.form.budgetLabel": "Presupuesto deseado",
      "contact.form.budgetPlaceholder": "Selecciona tu presupuesto",
      "contact.form.budgetOption1": "0–50.000 $",
      "contact.form.budgetOption2": "50.000–100.000 $",
      "contact.form.budgetOption3": "100.000–200.000 $",
      "contact.form.budgetOption4": "200.000–300.000 $",
      "contact.form.budgetOption5": "300.000+ $",
      "contact.form.messageLabel": "Tu mensaje",
      "contact.form.messagePlaceholder": "Cuéntanos brevemente qué estás buscando…",
      "contact.form.submit": "Enviar mensaje",
      "contact.form.note":
        "Este formulario es solo de demostración y no envía datos. Conéctalo con tu CRM o servicio de correo preferido para empezar a recibir consultas.",
      "footer.text": "Paraguay Sun Realty &mdash; Bienes raíces en Paraguay"
    }
  };

  const propertyTranslations = {
    de: {
      "asuncion-sky-residences": {
        title: "Barrio cerrado Wiesental",
        shortDescription:
          "Moderne Zwei- und Drei-Zimmer-Apartments in der Wohnanlage Wiesental mit Premium-Ausstattung, Grünflächen und erstklassigem Lebensstil.",
        longDescription:
          "Barrio cerrado Wiesental bietet moderne Zwei- und Drei-Zimmer-Apartments in einer sicheren Wohnanlage. Hochwertige Ausstattung, begrünte Außenbereiche und ein familienfreundliches Umfeld in der Nähe von Asunción."
      },
      "luque-garden-villas": {
        title: "Luque Garden Villas",
        shortDescription:
          "Geschlossene Wohnanlage mit modernen Reihenhäusern in Flughafennähe, Grünflächen und familienfreundlichen Einrichtungen.",
        longDescription:
          "Zeitgemäße Reihenhäuser in einer geschlossenen Wohnanlage nahe des Flughafens Asunción mit gestalteten Gärten, Spielplätzen und Clubhaus – ideal für Familien und langfristiges Wohnen."
      },
      "guaira-country-plot": {
        title: "Grundstück in Guairá",
        shortDescription:
          "Großzügiges Grundstück mit guter Straßenanbindung, ideal für ein Landhaus oder ein kleines Entwicklungsprojekt.",
        longDescription:
          "Großzügiges Grundstück in Guairá mit guter Straßenanbindung, geeignet für ein Landhaus, ein Öko-Projekt oder eine kleine Projektentwicklung. Kontaktieren Sie uns für Koordinaten, Informationen zur Versorgung und Besichtigungstermine."
      },
      "encarnacion-family-home": {
        title: "Familienhaus in Encarnación",
        shortDescription:
          "Bezugsfertiges Familienhaus in der Nähe von Infrastruktur, mit privatem Patio und flexiblem Grundriss.",
        longDescription:
          "Bezugsfertiges Haus in Encarnación, nahe Schulen und täglichen Dienstleistungen. Komfortabler Grundriss, privater Patio und attraktives Preis-Leistungs-Verhältnis für Familien und Langzeitaufenthalte. Fordern Sie ein vollständiges Datenblatt und Besichtigungstermine an."
      },
      "ciudad-del-este-luxury-penthouse": {
        title: "Luxus-Penthouse in Ciudad del Este",
        shortDescription:
          "Penthouse in Obergeschosslage mit Panoramablick, hochwertiger Ausstattung und privatem Außenbereich.",
        longDescription:
          "Luxus-Penthouse in Ciudad del Este mit Panoramablick, hochwertigen Oberflächen und privater Außenfläche. Ideal für Führungskräfte oder Investoren, die ein besonderes Objekt suchen. Kontaktieren Sie uns für Verfügbarkeit, Grundrisse und Zahlungsoptionen."
      }
    },
    es: {
      "asuncion-sky-residences": {
        title: "Barrio cerrado Wiesental",
        shortDescription:
          "Departamentos modernos de dos y tres dormitorios en el barrio cerrado Wiesental, con amenities premium, áreas verdes y un estilo de vida de calidad.",
        longDescription:
          "Barrio cerrado Wiesental ofrece departamentos modernos de dos y tres dormitorios en un barrio cerrado seguro. Amenities de calidad, áreas verdes y un entorno familiar cerca de Asunción."
      },
      "luque-garden-villas": {
        title: "Luque Garden Villas",
        shortDescription:
          "Barrio cerrado de casas adosadas contemporáneas cerca del aeropuerto, con espacios verdes e instalaciones para toda la familia.",
        longDescription:
          "Casas adosadas contemporáneas en un barrio cerrado cerca del aeropuerto de Asunción, con jardines parquizados, áreas de juegos y clubhouse, pensadas para familias y estadías largas."
      },
      "guaira-country-plot": {
        title: "Lote de campo en Guairá",
        shortDescription:
          "Amplio lote con fácil acceso por ruta, ideal para una casa de campo o un pequeño desarrollo.",
        longDescription:
          "Amplio terreno en Guairá con fácil acceso por ruta, apto para una casa de campo, un proyecto ecológico o un pequeño desarrollo. Contáctanos para coordenadas, información de servicios y opciones de visita."
      },
      "encarnacion-family-home": {
        title: "Casa familiar en Encarnación",
        shortDescription:
          "Casa familiar lista para habitar, cerca de servicios, con patio privado y un plano flexible.",
        longDescription:
          "Casa lista para habitar en Encarnación, cerca de colegios y servicios diarios. Distribución cómoda, patio privado y excelente valor para familias y estadías largas. Solicita la ficha completa y horarios de visita."
      },
      "ciudad-del-este-luxury-penthouse": {
        title: "Penthouse de lujo en Ciudad del Este",
        shortDescription:
          "Penthouse en planta alta con vistas panorámicas, terminaciones premium y espacio exterior privado.",
        longDescription:
          "Penthouse de lujo en Ciudad del Este con vistas panorámicas, terminaciones de alta gama y espacio exterior privado. Ideal para ejecutivos o inversores que buscan un producto destacado. Contáctanos para conocer disponibilidad, planos y opciones de pago."
      }
    }
  };

  const blogPosts = {
    "first-steps-paraguay": {
      en: {
        category: "Guide",
        title: "First steps to buying property in Paraguay",
        date: "To be confirmed",
        readTime: "Approx. 5 min read",
        paragraphs: [
          "This article will walk your readers through the main steps of buying a property in Paraguay – from first contact with Paraguay Sun Realty to signing at the notary and receiving the keys.",
          "Use this space to explain how you qualify listings, what documents are usually needed, and how you help international buyers feel safe and supported throughout the process."
        ]
      },
      de: {
        category: "Ratgeber",
        title: "Erste Schritte beim Immobilienkauf in Paraguay",
        date: "Wird noch festgelegt",
        readTime: "Ca. 5 Minuten Lesezeit",
        paragraphs: [
          "In diesem Artikel können Sie die wichtigsten Schritte beim Immobilienkauf in Paraguay erklären – vom ersten Kontakt mit Paraguay Sun Realty bis zur Unterzeichnung beim Notar und der Schlüsselübergabe.",
          "Nutzen Sie den Text, um zu beschreiben, wie Sie Angebote prüfen, welche Unterlagen typischerweise benötigt werden und wie Sie internationalen Käufern Sicherheit und Unterstützung im gesamten Prozess bieten."
        ]
      },
      es: {
        category: "Guía",
        title: "Primeros pasos para comprar una propiedad en Paraguay",
        date: "Por confirmar",
        readTime: "Aprox. 5 minutos de lectura",
        paragraphs: [
          "En este artículo podrás explicar los pasos principales para comprar una propiedad en Paraguay: desde el primer contacto con Paraguay Sun Realty hasta la firma en la notaría y la entrega de llaves.",
          "Aprovecha este espacio para contar cómo filtras los listados, qué documentos suelen requerirse y cómo ayudas a compradores internacionales a sentirse seguros y acompañados durante todo el proceso."
        ]
      }
    },
    "living-in-paraguay-cities": {
      en: {
        category: "Lifestyle",
        title: "Living in Asunción, Encarnación and beyond",
        date: "To be confirmed",
        readTime: "Approx. 4 min read",
        paragraphs: [
          "Here you can introduce what life feels like in different Paraguayan cities such as Asunción, Encarnación and Ciudad del Este.",
          "Describe neighborhoods, daily life, infrastructure and the type of lifestyle your clients can expect when relocating or investing in each area."
        ]
      },
      de: {
        category: "Lifestyle",
        title: "Leben in Asunción, Encarnación und darüber hinaus",
        date: "Wird noch festgelegt",
        readTime: "Ca. 4 Minuten Lesezeit",
        paragraphs: [
          "Hier können Sie beschreiben, wie sich das Leben in verschiedenen Städten Paraguays anfühlt – zum Beispiel in Asunción, Encarnación und Ciudad del Este.",
          "Gehen Sie auf Viertel, Alltag, Infrastruktur und den Lebensstil ein, den Ihre Kunden bei einem Umzug oder Investment in jeder Region erwarten können."
        ]
      },
      es: {
        category: "Estilo de vida",
        title: "Vivir en Asunción, Encarnación y más allá",
        date: "Por confirmar",
        readTime: "Aprox. 4 minutos de lectura",
        paragraphs: [
          "Aquí podrás contar cómo es la vida en distintas ciudades de Paraguay, como Asunción, Encarnación y Ciudad del Este.",
          "Explica los barrios, la vida diaria, la infraestructura y el tipo de estilo de vida que tus clientes pueden esperar al mudarse o invertir en cada zona."
        ]
      }
    }
  };

  const applyTranslations = (lang) => {
    if (lang === "en") return;
    const dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = key ? dict[key] : null;
      if (!value) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) {
          el.setAttribute("placeholder", value);
        }
      } else {
        el.textContent = value;
      }
    });
  };

  const getLocalizedPropertyText = (property, field) => {
    if (!property || currentLang === "en") return property[field];
    const dict = propertyTranslations[currentLang];
    if (!dict) return property[field];
    const entry = dict[property.id];
    if (!entry || !entry[field]) return property[field];
    return entry[field];
  };

  const renderBlogPost = () => {
    if (!blogPostContainer) return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug") || "first-steps-paraguay";
    const bySlug = blogPosts[slug];
    const langKey = currentLang || "en";
    const localized = (bySlug && (bySlug[langKey] || bySlug.en)) || null;

    const categoryEl = document.getElementById("blog-post-category");
    const titleEl = document.getElementById("blog-post-title");
    const metaEl = document.getElementById("blog-post-meta");

    if (!localized) {
      if (titleEl) titleEl.textContent = "Article not found";
      if (metaEl) metaEl.textContent = "";
      blogPostContainer.innerHTML =
        '<p class="muted">This article could not be found. It may have been removed or renamed.</p>';
      return;
    }

    if (categoryEl) categoryEl.textContent = localized.category;
    if (titleEl) titleEl.textContent = localized.title;
    if (metaEl) {
      const parts = [];
      if (localized.date) parts.push(localized.date);
      if (localized.readTime) parts.push(localized.readTime);
      metaEl.textContent = parts.join(" • ");
    }

    document.title = `Paraguay Sun Realty - ${localized.title}`;

    const html = localized.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("");
    blogPostContainer.innerHTML = html;
  };

  // Language switcher (stores preference & applies translations)
  if (langSwitchEl && langToggleEl && langMenuEl && langOptionsEls.length) {
    let storedLang = window.localStorage.getItem("psr-lang");
    if (!storedLang) {
      const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
      storedLang = browserLang === "de" || browserLang === "es" ? browserLang : "en";
    }

    currentLang = storedLang;
    document.documentElement.setAttribute("data-lang", storedLang);
    applyTranslations(storedLang);
    renderBlogPost();

    langOptionsEls.forEach((btn) => {
      if (btn.getAttribute("data-lang") === storedLang) {
        btn.classList.add("is-active");
      }
    });

    const closeMenu = () => {
      langMenuEl.classList.remove("is-open");
      langToggleEl.setAttribute("aria-expanded", "false");
    };

    langToggleEl.addEventListener("click", () => {
      const isOpen = langMenuEl.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        langMenuEl.classList.add("is-open");
        langToggleEl.setAttribute("aria-expanded", "true");
      }
    });

    langOptionsEls.forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang") || "en";
        currentLang = lang;
        window.localStorage.setItem("psr-lang", lang);
        document.documentElement.setAttribute("data-lang", lang);
        langOptionsEls.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        if (lang === "en") {
          window.location.reload();
        } else {
          applyTranslations(lang);
          renderBlogPost();
        }
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!langSwitchEl.contains(event.target)) {
        closeMenu();
      }
    });
  }

  if (homePropertiesContainer || allPropertiesContainer || propertyDetailContainer) {
    fetch("properties.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load properties");
        return response.json();
      })
      .then((properties) => {
        const youtubeToEmbed = (url) => {
          if (!url) return "";
          try {
            const u = new URL(url);
            if (u.hostname.includes("youtube.com")) {
              // Standard watch URL
              const v = u.searchParams.get("v");
              if (v) return `https://www.youtube.com/embed/${v}`;
              // Shorts URL: /shorts/{id}
              if (u.pathname.startsWith("/shorts/")) {
                const id = u.pathname.split("/")[2];
                if (id) return `https://www.youtube.com/embed/${id}`;
              }
              if (u.pathname.includes("/embed/")) return url;
            }
            if (u.hostname === "youtu.be") {
              const id = u.pathname.replace("/", "");
              if (id) return `https://www.youtube.com/embed/${id}`;
            }
          } catch {
            return "";
          }
          return url;
        };

        const normalizeNumber = (value) => {
          if (value == null) return null;
          if (typeof value === "string") {
            const trimmed = value.trim();
            if (!trimmed) return null;
            const n = Number(trimmed);
            return Number.isFinite(n) ? n : null;
          }
          return Number.isFinite(value) ? value : null;
        };

        const matchesMin = (value, min) => {
          if (min == null) return true;
          if (value == null) return false;
          return value >= min;
        };

        const matchesMax = (value, max) => {
          if (max == null) return true;
          if (value == null) return false;
          return value <= max;
        };

        const renderCards = (container, list, useLongDescription = false) => {
          if (!container) return;
          container.innerHTML = "";
          list.forEach((property) => {
            const article = document.createElement("article");
            article.className = "card";
            const baseDescription = useLongDescription && property.longDescription
              ? property.longDescription
              : property.shortDescription;
            const description =
              getLocalizedPropertyText(property, useLongDescription ? "longDescription" : "shortDescription") ||
              baseDescription;
            const title = getLocalizedPropertyText(property, "title") || property.title;
            const url = `property.html?id=${encodeURIComponent(property.id)}`;
            const badges = [];
            if (property.featuredOnHome) badges.push("Featured");
            if (property.propertyType) badges.push(property.propertyType);
            if (property.condition) badges.push(property.condition);
            const badgesHtml = badges.length
              ? `<div class="card-badges">${badges.map((b) => `<span class="badge">${b}</span>`).join("")}</div>`
              : "";

            const metaParts = [];
            if (property.area) metaParts.push(property.area);
            if (Number.isFinite(property.bedrooms) && property.bedrooms > 0) metaParts.push(`${property.bedrooms} bd`);
            if (Number.isFinite(property.bathrooms) && property.bathrooms > 0) metaParts.push(`${property.bathrooms} ba`);
            if (Number.isFinite(property.sizeM2) && property.sizeM2 > 0) metaParts.push(`${property.sizeM2} m²`);

            const gallery = Array.isArray(property.images) && property.images.length
              ? property.images.slice(0, 20)
              : [];
            const coverImage = property.image || gallery[0] || "";

            const imageHtml = `
              <div class="card-image ${coverImage ? "" : "is-placeholder"}">
                ${badgesHtml}
                ${
                  coverImage
                    ? `<img src="${coverImage}" alt="${title}"/>`
                    : `<div class="card-image-placeholder">Photo coming soon</div>`
                }
              </div>
            `;

            article.innerHTML = `
              <a href="${url}" class="card-link">
                ${
                  imageHtml
                }
                <h3>${title}</h3>
                <p>${description}</p>
                <p><strong>${property.price}</strong></p>
                ${metaParts.length ? `<p class="card-meta">${metaParts.join(" · ")}</p>` : ""}
              </a>
            `;
            container.appendChild(article);
          });
        };

        if (homePropertiesContainer) {
          const featured = properties.filter((p) => p.featuredOnHome).slice(0, 3);
          renderCards(homePropertiesContainer, featured);
        }

        if (allPropertiesContainer) {
          const applyFilters = () => {
            const area = filterAreaEl?.value || "";
            const type = filterTypeEl?.value || "";

            const minPrice = normalizeNumber(filterMinPriceEl?.value);
            const maxPrice = normalizeNumber(filterMaxPriceEl?.value);

            const minBeds = normalizeNumber(filterBedsEl?.value);
            const minBaths = normalizeNumber(filterBathsEl?.value);

            const minSize = normalizeNumber(filterMinSizeEl?.value);
            const maxSize = normalizeNumber(filterMaxSizeEl?.value);

            const filtered = properties.filter((p) => {
              if (area && p.area !== area) return false;
              if (type) {
                // Special case: treat "New Build" as a condition filter
                if (type === "New Build") {
                  if (p.condition !== "New Build" && p.propertyType !== "New Build") return false;
                } else if (p.propertyType !== type) {
                  return false;
                }
              }

              const priceValue = normalizeNumber(p.priceValue);
              if (!matchesMin(priceValue, minPrice)) return false;
              if (!matchesMax(priceValue, maxPrice)) return false;

              const beds = normalizeNumber(p.bedrooms);
              const baths = normalizeNumber(p.bathrooms);
              const size = normalizeNumber(p.sizeM2);

              if (minBeds != null && !matchesMin(beds, minBeds)) return false;
              if (minBaths != null && !matchesMin(baths, minBaths)) return false;

              if (!matchesMin(size, minSize)) return false;
              if (!matchesMax(size, maxSize)) return false;

              return true;
            });

            renderCards(allPropertiesContainer, filtered, true);

            if (resultsCountEl) {
              resultsCountEl.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;
            }

            if (noResultsEl) {
              noResultsEl.style.display = filtered.length ? "none" : "block";
            }
          };

          const bindFilter = (el) => {
            if (!el) return;
            el.addEventListener("change", applyFilters);
            el.addEventListener("input", applyFilters);
          };

          [filterAreaEl, filterTypeEl, filterMinPriceEl, filterMaxPriceEl, filterBedsEl, filterBathsEl, filterMinSizeEl, filterMaxSizeEl].forEach(bindFilter);

          if (filtersResetBtn) {
            filtersResetBtn.addEventListener("click", () => {
              if (filterAreaEl) filterAreaEl.value = "";
              if (filterTypeEl) filterTypeEl.value = "";
              if (filterMinPriceEl) filterMinPriceEl.value = "";
              if (filterMaxPriceEl) filterMaxPriceEl.value = "";
              if (filterBedsEl) filterBedsEl.value = "";
              if (filterBathsEl) filterBathsEl.value = "";
              if (filterMinSizeEl) filterMinSizeEl.value = "";
              if (filterMaxSizeEl) filterMaxSizeEl.value = "";
              applyFilters();
            });
          }

          applyFilters();
        }

        if (propertyDetailContainer) {
          const params = new URLSearchParams(window.location.search);
          const id = params.get("id");
          const property = properties.find((p) => p.id === id);
          if (!property) {
            propertyDetailContainer.innerHTML =
              "<p class=\"muted\">Property not found. It may have been removed or renamed.</p>";
            return;
          }

          const gallery = Array.isArray(property.images) && property.images.length
            ? property.images.slice(0, 20)
            : (property.image ? [property.image] : []);

          const hasGallery = gallery.length > 0;
          const mainImage = hasGallery ? gallery[0] : "";

          const imageSection = hasGallery
            ? `
            <div class="property-hero-wrapper">
              <button class="property-gallery-nav prev" type="button" aria-label="Previous photo">
                ‹
              </button>
              <div class="property-hero-image">
                <img id="property-main-image" src="${mainImage}" alt="${property.title}" />
              </div>
              <button class="property-gallery-nav next" type="button" aria-label="Next photo">
                ›
              </button>
            </div>
            ${
              gallery.length > 1
                ? `<div class="property-thumbs">
                  ${gallery
                    .map(
                      (src, index) => `
                    <button class="property-thumb${index === 0 ? " is-active" : ""}" data-index="${index}" type="button">
                      <img src="${src}" alt="${property.title} image ${index + 1}" />
                    </button>`
                    )
                    .join("")}
                </div>`
                : ""
            }`
            : "";

          const videoEmbed = youtubeToEmbed(property.videoUrl || "");
          const localizedTitle = getLocalizedPropertyText(property, "title") || property.title;
          const localizedDescription =
            getLocalizedPropertyText(property, "longDescription") ||
            property.longDescription ||
            getLocalizedPropertyText(property, "shortDescription") ||
            property.shortDescription;

          propertyDetailContainer.innerHTML = `
            <div class="property-layout">
              ${imageSection}
              <div class="property-main">
                <h1>${localizedTitle}</h1>
                <p class="property-meta">${property.price}</p>
                <div class="property-facts">
                  ${property.area ? `<div><span>Area</span><strong>${property.area}</strong></div>` : ""}
                  ${property.propertyType ? `<div><span>Type</span><strong>${property.propertyType}</strong></div>` : ""}
                  ${
                    property.condition
                      ? `<div><span>Condition</span><strong>${property.condition}</strong></div>`
                      : ""
                  }
                  ${
                    Number.isFinite(property.bedrooms) && property.bedrooms > 0
                      ? `<div><span>Bedrooms</span><strong>${property.bedrooms}</strong></div>`
                      : ""
                  }
                  ${
                    Number.isFinite(property.bathrooms) && property.bathrooms > 0
                      ? `<div><span>Bathrooms</span><strong>${property.bathrooms}</strong></div>`
                      : ""
                  }
                  ${
                    Number.isFinite(property.sizeM2) && property.sizeM2 > 0
                      ? `<div><span>Size</span><strong>${property.sizeM2} m²</strong></div>`
                      : ""
                  }
                </div>
                <p class="property-description">
                  ${localizedDescription}
                </p>
                ${
                  videoEmbed
                    ? `<div class="property-video">
                        <div class="property-video-inner">
                          <iframe src="${videoEmbed}" title="Property video" frameborder="0" allowfullscreen></iframe>
                        </div>
                      </div>`
                    : ""
                }
                <div class="property-actions">
                  <a href="index.html#contact" class="btn primary property-cta-main">Request more details</a>
                  <a href="properties.html" class="btn ghost property-cta-secondary">Back to all properties</a>
                </div>
              </div>
            </div>
          `;

          if (hasGallery) {
            const mainImageEl = propertyDetailContainer.querySelector("#property-main-image");
            const thumbButtons = propertyDetailContainer.querySelectorAll(".property-thumb");
            const prevBtn = propertyDetailContainer.querySelector(".property-gallery-nav.prev");
            const nextBtn = propertyDetailContainer.querySelector(".property-gallery-nav.next");

            if (mainImageEl && thumbButtons.length) {
              let currentIndex = 0;

              const setImage = (index) => {
                const safeIndex = (index + gallery.length) % gallery.length;
                const src = gallery[safeIndex];
                if (!src) return;
                mainImageEl.setAttribute("src", src);
                currentIndex = safeIndex;
                thumbButtons.forEach((b) => b.classList.remove("is-active"));
                const activeThumb = Array.from(thumbButtons).find(
                  (b) => Number(b.getAttribute("data-index") || "0") === safeIndex
                );
                if (activeThumb) activeThumb.classList.add("is-active");
              };

              thumbButtons.forEach((btn) => {
                btn.addEventListener("click", () => {
                  const index = Number(btn.getAttribute("data-index") || "0");
                  setImage(index);
                });
              });

              if (prevBtn) {
                prevBtn.addEventListener("click", () => setImage(currentIndex - 1));
              }

              if (nextBtn) {
                nextBtn.addEventListener("click", () => setImage(currentIndex + 1));
              }
            }
          }
        }
      })
      .catch(() => {
        // Fail silently if properties can't be loaded
      });
  }
});

