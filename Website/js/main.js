/* ════════════════════════════════════════════════════
   Let It Flow Dental Tech — main.js
   i18n · flow canvas · scroll effects · compare slider ·
   countdown · booking widget · cookie consent
   Texts live in ../Website_tools/i18n_strings.py (run build_site.py)
   ════════════════════════════════════════════════════ */
'use strict';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── TRANSLATIONS ──────────────────────────────────── */
const i18n = {
  "en": {
    "hero-title": "Turn Raw Dental Scans Into Clean, Ready-to-Design Models",
    "hero-sub": "AI preprocessing of intraoral scans for dental labs and clinics.",
    "hero-cta": "Book a demo",
    "hero-cta2": "See the results",
    "nav-cta-text": "Book a demo",
    "nav-cta-short": "Demo",
    "nav-demo": "Before / After",
    "nav-how": "How it works",
    "nav-faq": "FAQ",
    "slider-label": "Before / After",
    "slider-title": "Drag to compare",
    "badge-before": "Raw scan",
    "badge-after": "Processed",
    "gains-intro": "What changes between the two scans",
    "gain1-title": "Soft tissue removed",
    "gain1-text": "Cheek, tongue and gingival excess captured around the arch is cut away.",
    "gain2-title": "Cervical margin revealed",
    "gain2-text": "The finish line of each preparation stands out, ready to trace in your CAD.",
    "gain3-title": "Undercuts filled",
    "gain3-text": "Undercuts around each preparation are blocked out, so the model is ready for design.",
    "gain4-title": "Original kept",
    "gain4-text": "Compare with the raw scan and accept or reject every change.",
    "partners-label": "Supported by",
    "partners-note": "",
    "booking-label": "Schedule",
    "booking-title": "Book a demo",
    "booking-confirm": "✓ Email confirmation",
    "hiw-label": "How it works",
    "hiw-title": "Automated, from upload to delivery",
    "hiw-subtitle": "Your scan is routed to our processing servers as soon as it is uploaded, with no manual handling on our side.",
    "hiw-badge": "Automated processing, you keep the final say",
    "team-label": "Who we are",
    "team-title": "Built by a dentist and an AI engineer",
    "team-sub": "Clinical experience in dentistry guides what we automate; in-house research in 3D computer vision and geometric deep learning makes it work.",
    "team-radu": "Dentist since 1994 · President",
    "team-tudor": "3D computer vision engineer · R&D lead",
    "faq-label": "FAQ",
    "faq-title": "Questions from labs and dentists",
    "faq-q1": "What does Let It Flow do?",
    "faq-a1": "Let It Flow cleans digital dental impressions automatically. It removes noise and soft-tissue artefacts and reveals the cervical margin, so the technician gets a model ready for crown design.",
    "faq-q2": "Which scanners and software does it work with?",
    "faq-a2": "We connect to the cloud platforms of several major intraoral scanner brands. The cleaned model opens in your usual dental CAD software.",
    "faq-q3": "Does it change my original scan?",
    "faq-a3": "No. The original scan is always kept. You can compare the result with it and accept or reject each correction.",
    "faq-q4": "Who is it for?",
    "faq-a4": "Dental laboratories first, and dentists who design restorations in their practice. Orthodontic analysis is on our roadmap.",
    "faq-q5": "When is it available, and how much does it cost?",
    "faq-a5": "The beta opens on June 15, 2027. Each product will be sold as a monthly or yearly subscription, with a 14-day free trial on your own scans. Book a demo to join the first testers.",
    "cd-label": "Available in",
    "cd-unit-days": "Days",
    "cd-unit-hours": "Hours",
    "cd-unit-mins": "Min",
    "cd-tagline": "Beta launch — <strong>June 15, 2027</strong>",
    "bform-lbl-name": "Your name",
    "bform-lbl-email": "Email",
    "bform-submit": "Book on Calendly →",
    "fhiw-s1-title": "Auto-routing",
    "fhiw-s1-desc": "The file goes straight from your scanner platform to our processing servers.",
    "fhiw-s2-title": "AI Processing",
    "fhiw-s2-desc": "Our models remove artefacts and soft tissue and reveal the cervical margin.",
    "fhiw-s3-title": "Back in your workflow",
    "fhiw-s3-desc": "The cleaned model comes back to your lab next to the original, ready for your CAD software.",
    "footer-tagline": "AI preprocessing of intraoral scans for dental labs and clinics.",
    "footer-col1-title": "Product",
    "footer-col2-title": "Contact",
    "footer-col3-title": "Find us",
    "footer-how": "How it works",
    "footer-before-after": "Before / After",
    "footer-demo": "Book a demo",
    "footer-faq": "FAQ",
    "footer-api": "API access",
    "footer-map-cta": "Open in Google Maps →",
    "footer-copy": "© 2026 Let It Flow Dental Tech SAS. All rights reserved.",
    "footer-privacy": "Privacy Policy",
    "footer-legal": "Legal Notice",
    "footer-cookies": "Cookie settings",
    "consent-title": "Analytics cookies",
    "consent-text": "We would like to measure how visitors use this site with ContentSquare. Nothing is loaded unless you accept.",
    "consent-more": "Learn more",
    "consent-no": "Refuse",
    "consent-yes": "Accept",
    "slots-pick": "Select a date first"
  },
  "fr": {
    "hero-title": "Des scans dentaires bruts aux modèles propres, prêts pour la conception",
    "hero-sub": "Prétraitement IA des empreintes intra-orales pour laboratoires et cabinets dentaires.",
    "hero-cta": "Réserver une démo",
    "hero-cta2": "Voir les résultats",
    "nav-cta-text": "Réserver une démo",
    "nav-cta-short": "Démo",
    "nav-demo": "Avant / Après",
    "nav-how": "Comment ça marche",
    "nav-faq": "FAQ",
    "slider-label": "Avant / Après",
    "slider-title": "Faites glisser pour comparer",
    "badge-before": "Scan brut",
    "badge-after": "Traité",
    "gains-intro": "Ce qui change entre les deux scans",
    "gain1-title": "Tissus mous supprimés",
    "gain1-text": "Les excès de joue, de langue et de gencive capturés autour de l'arcade sont retirés.",
    "gain2-title": "Limite cervicale révélée",
    "gain2-text": "La limite de chaque préparation ressort, prête à être tracée dans votre CAO.",
    "gain3-title": "Contre-dépouilles comblées",
    "gain3-text": "Les contre-dépouilles autour de chaque préparation sont comblées : le modèle est prêt pour la conception.",
    "gain4-title": "Original conservé",
    "gain4-text": "Comparez avec le scan brut et acceptez ou refusez chaque modification.",
    "partners-label": "Avec le soutien de",
    "partners-note": "",
    "booking-label": "Rendez-vous",
    "booking-title": "Réserver une démo",
    "booking-confirm": "✓ Confirmation par e-mail",
    "hiw-label": "Comment ça marche",
    "hiw-title": "Automatisé, de l'envoi à la livraison",
    "hiw-subtitle": "Votre scan est acheminé vers nos serveurs de traitement dès son dépôt, sans manipulation manuelle de notre part.",
    "hiw-badge": "Traitement automatisé, vous gardez le dernier mot",
    "team-label": "Qui sommes-nous",
    "team-title": "Conçu par un chirurgien-dentiste et un ingénieur en IA",
    "team-sub": "L'expérience clinique en dentisterie guide ce que nous automatisons ; notre recherche en vision par ordinateur 3D et en apprentissage profond géométrique le rend possible.",
    "team-radu": "Chirurgien-dentiste depuis 1994 · Président",
    "team-tudor": "Ingénieur en vision par ordinateur 3D · Responsable R&D",
    "faq-label": "FAQ",
    "faq-title": "Les questions des laboratoires et des dentistes",
    "faq-q1": "Que fait Let It Flow ?",
    "faq-a1": "Let It Flow nettoie automatiquement les empreintes dentaires numériques. Il supprime le bruit et les artefacts de tissus mous et fait ressortir la limite cervicale, pour fournir au prothésiste un modèle prêt pour la conception de la couronne.",
    "faq-q2": "Avec quels scanners et logiciels fonctionne-t-il ?",
    "faq-a2": "Nous nous connectons aux plateformes cloud de plusieurs grandes marques de scanners intra-oraux. Le modèle nettoyé s'ouvre dans votre logiciel de CAO dentaire habituel.",
    "faq-q3": "Mon scan original est-il modifié ?",
    "faq-a3": "Non. Le scan original est toujours conservé. Vous pouvez comparer le résultat avec lui et accepter ou refuser chaque correction.",
    "faq-q4": "À qui s'adresse-t-il ?",
    "faq-a4": "D'abord aux laboratoires de prothèse, et aux chirurgiens-dentistes qui conçoivent leurs prothèses au cabinet. L'analyse orthodontique est dans notre feuille de route.",
    "faq-q5": "Quand sera-t-il disponible, et combien coûte-t-il ?",
    "faq-a5": "La bêta ouvre le 15 juin 2027. Chaque produit sera proposé en abonnement mensuel ou annuel, avec un essai gratuit de 14 jours sur vos propres scans. Réservez une démo pour faire partie des premiers testeurs.",
    "cd-label": "Disponible dans",
    "cd-unit-days": "Jours",
    "cd-unit-hours": "Heures",
    "cd-unit-mins": "Min",
    "cd-tagline": "Lancement bêta — <strong>15 juin 2027</strong>",
    "bform-lbl-name": "Votre nom",
    "bform-lbl-email": "E-mail",
    "bform-submit": "Réserver sur Calendly →",
    "fhiw-s1-title": "Routage automatique",
    "fhiw-s1-desc": "Le fichier passe directement de la plateforme de votre scanner à nos serveurs de traitement.",
    "fhiw-s2-title": "Traitement IA",
    "fhiw-s2-desc": "Nos modèles suppriment les artefacts et les tissus mous et font ressortir la limite cervicale.",
    "fhiw-s3-title": "Retour dans votre flux",
    "fhiw-s3-desc": "Le modèle nettoyé revient à votre laboratoire à côté de l'original, prêt pour votre logiciel de CAO.",
    "footer-tagline": "Prétraitement par IA des empreintes intra-orales pour laboratoires et cabinets dentaires.",
    "footer-col1-title": "Produit",
    "footer-col2-title": "Contact",
    "footer-col3-title": "Nous trouver",
    "footer-how": "Comment ça marche",
    "footer-before-after": "Avant / Après",
    "footer-demo": "Réserver une démo",
    "footer-faq": "FAQ",
    "footer-api": "Accès API",
    "footer-map-cta": "Ouvrir dans Google Maps →",
    "footer-copy": "© 2026 Let It Flow Dental Tech SAS. Tous droits réservés.",
    "footer-privacy": "Politique de confidentialité",
    "footer-legal": "Mentions légales",
    "footer-cookies": "Gérer les cookies",
    "consent-title": "Cookies de mesure d'audience",
    "consent-text": "Nous aimerions mesurer l'utilisation de ce site avec ContentSquare. Rien n'est chargé sans votre accord.",
    "consent-more": "En savoir plus",
    "consent-no": "Refuser",
    "consent-yes": "Accepter",
    "slots-pick": "Sélectionnez une date"
  },
  "de": {
    "hero-title": "Aus rohen Dentalscans werden saubere, konstruktionsfertige Modelle",
    "hero-sub": "KI-Aufbereitung von Intraoralscans für Dentallabore und Praxen.",
    "hero-cta": "Demo buchen",
    "hero-cta2": "Ergebnisse ansehen",
    "nav-cta-text": "Demo buchen",
    "nav-cta-short": "Demo",
    "nav-demo": "Vorher / Nachher",
    "nav-how": "So funktioniert's",
    "nav-faq": "FAQ",
    "slider-label": "Vorher / Nachher",
    "slider-title": "Zum Vergleichen ziehen",
    "badge-before": "Rohscan",
    "badge-after": "Aufbereitet",
    "gains-intro": "Was sich zwischen den beiden Scans ändert",
    "gain1-title": "Weichgewebe entfernt",
    "gain1-text": "Wangen-, Zungen- und Gingivaüberschüsse rund um den Zahnbogen werden entfernt.",
    "gain2-title": "Präparationsgrenze freigelegt",
    "gain2-text": "Die Grenze jeder Präparation tritt hervor, bereit zum Nachzeichnen in Ihrer CAD-Software.",
    "gain3-title": "Unterschnitte ausgeblockt",
    "gain3-text": "Unterschnitte rund um jede Präparation werden ausgeblockt, das Modell ist konstruktionsbereit.",
    "gain4-title": "Original bleibt erhalten",
    "gain4-text": "Mit dem Rohscan vergleichen und jede Änderung annehmen oder ablehnen.",
    "partners-label": "Unterstützt von",
    "partners-note": "",
    "booking-label": "Termin",
    "booking-title": "Demo buchen",
    "booking-confirm": "✓ Bestätigung per E-Mail",
    "hiw-label": "So funktioniert's",
    "hiw-title": "Automatisiert, vom Upload bis zur Lieferung",
    "hiw-subtitle": "Ihr Scan wird direkt nach dem Upload an unsere Server geleitet, ohne manuelle Bearbeitung auf unserer Seite.",
    "hiw-badge": "Automatisierte Aufbereitung, Sie behalten das letzte Wort",
    "team-label": "Wer wir sind",
    "team-title": "Entwickelt von einem Zahnarzt und einem KI-Ingenieur",
    "team-sub": "Klinische Erfahrung bestimmt, was wir automatisieren; eigene Forschung in 3D-Computer-Vision und geometrischem Deep Learning setzt es um.",
    "team-radu": "Zahnarzt seit 1994 · Präsident",
    "team-tudor": "Ingenieur für 3D-Computer-Vision · Leiter F&E",
    "faq-label": "FAQ",
    "faq-title": "Fragen von Laboren und Zahnärzten",
    "faq-q1": "Was macht Let It Flow?",
    "faq-a1": "Let It Flow bereitet digitale Abformungen automatisch auf. Es entfernt Rauschen und Weichgewebsartefakte und legt die Präparationsgrenze frei, damit der Zahntechniker ein Modell erhält, das für die Kronenkonstruktion bereit ist.",
    "faq-q2": "Mit welchen Scannern und welcher Software funktioniert es?",
    "faq-a2": "Wir verbinden uns mit den Cloud-Plattformen mehrerer großer Intraoralscanner-Marken. Das aufbereitete Modell öffnet sich in Ihrer gewohnten dentalen CAD-Software.",
    "faq-q3": "Wird mein Originalscan verändert?",
    "faq-a3": "Nein. Der Originalscan bleibt immer erhalten. Sie können das Ergebnis damit vergleichen und jede Korrektur annehmen oder ablehnen.",
    "faq-q4": "Für wen ist es gedacht?",
    "faq-a4": "Zuerst für Dentallabore und für Zahnärzte, die Restaurationen in der Praxis konstruieren. Die kieferorthopädische Analyse steht auf unserer Roadmap.",
    "faq-q5": "Wann ist es verfügbar, und was kostet es?",
    "faq-a5": "Die Beta startet am 15. Juni 2027. Jedes Produkt wird als Monats- oder Jahresabonnement angeboten, mit 14 Tagen kostenlosem Test an Ihren eigenen Scans. Buchen Sie eine Demo, um zu den ersten Testern zu gehören.",
    "cd-label": "Verfügbar in",
    "cd-unit-days": "Tage",
    "cd-unit-hours": "Stunden",
    "cd-unit-mins": "Min",
    "cd-tagline": "Beta-Start — <strong>15. Juni 2027</strong>",
    "bform-lbl-name": "Ihr Name",
    "bform-lbl-email": "E-Mail",
    "bform-submit": "Bei Calendly buchen →",
    "fhiw-s1-title": "Automatische Weiterleitung",
    "fhiw-s1-desc": "Die Datei geht direkt von Ihrer Scanner-Plattform an unsere Server.",
    "fhiw-s2-title": "KI-Aufbereitung",
    "fhiw-s2-desc": "Unsere Modelle entfernen Artefakte und Weichgewebe und legen die Präparationsgrenze frei.",
    "fhiw-s3-title": "Zurück in Ihrem Workflow",
    "fhiw-s3-desc": "Das aufbereitete Modell kommt neben dem Original in Ihr Labor zurück, bereit für Ihre CAD-Software.",
    "footer-tagline": "KI-Aufbereitung von Intraoralscans für Dentallabore und Praxen.",
    "footer-col1-title": "Produkt",
    "footer-col2-title": "Kontakt",
    "footer-col3-title": "Standort",
    "footer-how": "So funktioniert's",
    "footer-before-after": "Vorher / Nachher",
    "footer-demo": "Demo buchen",
    "footer-faq": "FAQ",
    "footer-api": "API-Zugang",
    "footer-map-cta": "In Google Maps öffnen →",
    "footer-copy": "© 2026 Let It Flow Dental Tech SAS. Alle Rechte vorbehalten.",
    "footer-privacy": "Datenschutz",
    "footer-legal": "Impressum",
    "footer-cookies": "Cookie-Einstellungen",
    "consent-title": "Analyse-Cookies",
    "consent-text": "Wir möchten mit ContentSquare messen, wie Besucher diese Website nutzen. Ohne Ihre Zustimmung wird nichts geladen.",
    "consent-more": "Mehr erfahren",
    "consent-no": "Ablehnen",
    "consent-yes": "Akzeptieren",
    "slots-pick": "Bitte zuerst ein Datum wählen"
  },
  "es": {
    "hero-title": "De escaneos dentales en bruto a modelos limpios, listos para diseñar",
    "hero-sub": "Preprocesamiento con IA de escaneos intraorales para laboratorios y clínicas dentales.",
    "hero-cta": "Reservar una demo",
    "hero-cta2": "Ver los resultados",
    "nav-cta-text": "Reservar una demo",
    "nav-cta-short": "Demo",
    "nav-demo": "Antes / Después",
    "nav-how": "Cómo funciona",
    "nav-faq": "Preguntas",
    "slider-label": "Antes / Después",
    "slider-title": "Deslice para comparar",
    "badge-before": "Escaneo en bruto",
    "badge-after": "Procesado",
    "gains-intro": "Qué cambia entre los dos escaneos",
    "gain1-title": "Tejido blando eliminado",
    "gain1-text": "Se recortan los excesos de mejilla, lengua y encía capturados alrededor de la arcada.",
    "gain2-title": "Margen cervical visible",
    "gain2-text": "La línea de terminación de cada preparación destaca, lista para trazar en su CAD.",
    "gain3-title": "Retenciones bloqueadas",
    "gain3-text": "Las retenciones alrededor de cada preparación se bloquean y el modelo queda listo para diseñar.",
    "gain4-title": "Original conservado",
    "gain4-text": "Compare con el escaneo en bruto y acepte o rechace cada cambio.",
    "partners-label": "Con el apoyo de",
    "partners-note": "",
    "booking-label": "Cita",
    "booking-title": "Reservar una demo",
    "booking-confirm": "✓ Confirmación por correo",
    "hiw-label": "Cómo funciona",
    "hiw-title": "Automatizado, de la carga a la entrega",
    "hiw-subtitle": "Su escaneo se envía a nuestros servidores en cuanto se carga, sin manipulación manual por nuestra parte.",
    "hiw-badge": "Procesamiento automatizado, usted tiene la última palabra",
    "team-label": "Quiénes somos",
    "team-title": "Creado por un dentista y un ingeniero de IA",
    "team-sub": "La experiencia clínica guía lo que automatizamos; nuestra investigación en visión artificial 3D y aprendizaje profundo geométrico lo hace posible.",
    "team-radu": "Dentista desde 1994 · Presidente",
    "team-tudor": "Ingeniero de visión artificial 3D · Responsable de I+D",
    "faq-label": "Preguntas",
    "faq-title": "Preguntas de laboratorios y dentistas",
    "faq-q1": "¿Qué hace Let It Flow?",
    "faq-a1": "Let It Flow limpia automáticamente las impresiones dentales digitales. Elimina el ruido y los artefactos de tejido blando y revela el margen cervical, para que el protésico disponga de un modelo listo para diseñar la corona.",
    "faq-q2": "¿Con qué escáneres y programas funciona?",
    "faq-a2": "Nos conectamos a las plataformas en la nube de varias grandes marcas de escáneres intraorales. El modelo limpio se abre en su software CAD dental habitual.",
    "faq-q3": "¿Modifica mi escaneo original?",
    "faq-a3": "No. El escaneo original se conserva siempre. Puede comparar el resultado con él y aceptar o rechazar cada corrección.",
    "faq-q4": "¿Para quién es?",
    "faq-a4": "Primero para laboratorios dentales y para dentistas que diseñan restauraciones en la clínica. El análisis ortodóncico está en nuestra hoja de ruta.",
    "faq-q5": "¿Cuándo estará disponible y cuánto cuesta?",
    "faq-a5": "La beta abre el 15 de junio de 2027. Cada producto se ofrecerá con suscripción mensual o anual, con 14 días de prueba gratuita en sus propios escaneos. Reserve una demo para estar entre los primeros usuarios.",
    "cd-label": "Disponible en",
    "cd-unit-days": "Días",
    "cd-unit-hours": "Horas",
    "cd-unit-mins": "Min",
    "cd-tagline": "Lanzamiento beta — <strong>15 de junio de 2027</strong>",
    "bform-lbl-name": "Su nombre",
    "bform-lbl-email": "Correo electrónico",
    "bform-submit": "Reservar en Calendly →",
    "fhiw-s1-title": "Envío automático",
    "fhiw-s1-desc": "El archivo pasa directamente de la plataforma de su escáner a nuestros servidores.",
    "fhiw-s2-title": "Procesamiento con IA",
    "fhiw-s2-desc": "Nuestros modelos eliminan artefactos y tejido blando y revelan el margen cervical.",
    "fhiw-s3-title": "De vuelta en su flujo",
    "fhiw-s3-desc": "El modelo limpio vuelve a su laboratorio junto al original, listo para su software CAD.",
    "footer-tagline": "Preprocesamiento con IA de escaneos intraorales para laboratorios y clínicas dentales.",
    "footer-col1-title": "Producto",
    "footer-col2-title": "Contacto",
    "footer-col3-title": "Dónde estamos",
    "footer-how": "Cómo funciona",
    "footer-before-after": "Antes / Después",
    "footer-demo": "Reservar una demo",
    "footer-faq": "Preguntas",
    "footer-api": "Acceso a la API",
    "footer-map-cta": "Abrir en Google Maps →",
    "footer-copy": "© 2026 Let It Flow Dental Tech SAS. Todos los derechos reservados.",
    "footer-privacy": "Privacidad",
    "footer-legal": "Aviso legal",
    "footer-cookies": "Configurar cookies",
    "consent-title": "Cookies de analítica",
    "consent-text": "Nos gustaría medir cómo se usa este sitio con ContentSquare. No se carga nada sin su consentimiento.",
    "consent-more": "Más información",
    "consent-no": "Rechazar",
    "consent-yes": "Aceptar",
    "slots-pick": "Seleccione primero una fecha"
  },
  "it": {
    "hero-title": "Da scansioni dentali grezze a modelli puliti, pronti per la progettazione",
    "hero-sub": "Pre-elaborazione IA delle scansioni intraorali per laboratori e studi dentistici.",
    "hero-cta": "Prenota una demo",
    "hero-cta2": "Vedi i risultati",
    "nav-cta-text": "Prenota una demo",
    "nav-cta-short": "Demo",
    "nav-demo": "Prima / Dopo",
    "nav-how": "Come funziona",
    "nav-faq": "FAQ",
    "slider-label": "Prima / Dopo",
    "slider-title": "Trascina per confrontare",
    "badge-before": "Scansione grezza",
    "badge-after": "Elaborata",
    "gains-intro": "Cosa cambia tra le due scansioni",
    "gain1-title": "Tessuti molli rimossi",
    "gain1-text": "Gli eccessi di guancia, lingua e gengiva acquisiti attorno all'arcata vengono eliminati.",
    "gain2-title": "Margine cervicale evidenziato",
    "gain2-text": "La linea di finitura di ogni preparazione risalta, pronta da tracciare nel vostro CAD.",
    "gain3-title": "Sottosquadri colmati",
    "gain3-text": "I sottosquadri attorno a ogni preparazione vengono colmati e il modello è pronto per la progettazione.",
    "gain4-title": "Originale conservato",
    "gain4-text": "Confrontate con la scansione grezza e accettate o rifiutate ogni modifica.",
    "partners-label": "Con il supporto di",
    "partners-note": "",
    "booking-label": "Appuntamento",
    "booking-title": "Prenota una demo",
    "booking-confirm": "✓ Conferma via e-mail",
    "hiw-label": "Come funziona",
    "hiw-title": "Automatizzato, dal caricamento alla consegna",
    "hiw-subtitle": "La scansione viene inviata ai nostri server appena caricata, senza alcun intervento manuale da parte nostra.",
    "hiw-badge": "Elaborazione automatica, l'ultima parola resta a voi",
    "team-label": "Chi siamo",
    "team-title": "Creato da un dentista e da un ingegnere IA",
    "team-sub": "L'esperienza clinica guida ciò che automatizziamo; la nostra ricerca in visione artificiale 3D e deep learning geometrico lo rende possibile.",
    "team-radu": "Dentista dal 1994 · Presidente",
    "team-tudor": "Ingegnere di visione artificiale 3D · Responsabile R&S",
    "faq-label": "FAQ",
    "faq-title": "Le domande di laboratori e dentisti",
    "faq-q1": "Cosa fa Let It Flow?",
    "faq-a1": "Let It Flow pulisce automaticamente le impronte dentali digitali. Rimuove rumore e artefatti dei tessuti molli e mette in evidenza il margine cervicale, così l'odontotecnico riceve un modello pronto per la progettazione della corona.",
    "faq-q2": "Con quali scanner e software funziona?",
    "faq-a2": "Ci colleghiamo alle piattaforme cloud di diversi grandi marchi di scanner intraorali. Il modello pulito si apre nel vostro abituale software CAD dentale.",
    "faq-q3": "La mia scansione originale viene modificata?",
    "faq-a3": "No. La scansione originale viene sempre conservata. Potete confrontare il risultato con essa e accettare o rifiutare ogni correzione.",
    "faq-q4": "A chi è rivolto?",
    "faq-a4": "Prima di tutto ai laboratori odontotecnici e ai dentisti che progettano i restauri in studio. L'analisi ortodontica è nella nostra roadmap.",
    "faq-q5": "Quando sarà disponibile e quanto costa?",
    "faq-a5": "La beta apre il 15 giugno 2027. Ogni prodotto sarà offerto in abbonamento mensile o annuale, con 14 giorni di prova gratuita sulle vostre scansioni. Prenotate una demo per essere tra i primi tester.",
    "cd-label": "Disponibile tra",
    "cd-unit-days": "Giorni",
    "cd-unit-hours": "Ore",
    "cd-unit-mins": "Min",
    "cd-tagline": "Lancio beta — <strong>15 giugno 2027</strong>",
    "bform-lbl-name": "Il vostro nome",
    "bform-lbl-email": "E-mail",
    "bform-submit": "Prenota su Calendly →",
    "fhiw-s1-title": "Invio automatico",
    "fhiw-s1-desc": "Il file passa direttamente dalla piattaforma del vostro scanner ai nostri server.",
    "fhiw-s2-title": "Elaborazione IA",
    "fhiw-s2-desc": "I nostri modelli rimuovono artefatti e tessuti molli e mettono in evidenza il margine cervicale.",
    "fhiw-s3-title": "Di nuovo nel vostro flusso",
    "fhiw-s3-desc": "Il modello pulito torna al vostro laboratorio accanto all'originale, pronto per il vostro software CAD.",
    "footer-tagline": "Pre-elaborazione con IA delle scansioni intraorali per laboratori e studi dentistici.",
    "footer-col1-title": "Prodotto",
    "footer-col2-title": "Contatti",
    "footer-col3-title": "Dove siamo",
    "footer-how": "Come funziona",
    "footer-before-after": "Prima / Dopo",
    "footer-demo": "Prenota una demo",
    "footer-faq": "FAQ",
    "footer-api": "Accesso API",
    "footer-map-cta": "Apri in Google Maps →",
    "footer-copy": "© 2026 Let It Flow Dental Tech SAS. Tutti i diritti riservati.",
    "footer-privacy": "Privacy",
    "footer-legal": "Note legali",
    "footer-cookies": "Impostazioni cookie",
    "consent-title": "Cookie di analisi",
    "consent-text": "Vorremmo misurare l'uso di questo sito con ContentSquare. Nulla viene caricato senza il vostro consenso.",
    "consent-more": "Scopri di più",
    "consent-no": "Rifiuta",
    "consent-yes": "Accetta",
    "slots-pick": "Seleziona prima una data"
  }
};

function currentLang() { return document.documentElement.lang || 'en'; }

function t(key) {
  return (i18n[currentLang()] && i18n[currentLang()][key]) || i18n.en[key] || '';
}

function setLang(lang) {
  const dict = i18n[lang];
  if (!dict) return;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key in dict) el.textContent = dict[key];
  });
  // Keys whose value contains markup (e.g. the countdown tagline)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key in dict) el.innerHTML = dict[key];
  });

  document.querySelectorAll('.lang-btn').forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', String(active));
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/* Language dropdown — each flag is a link to the page in that language (/ and /fr/),
   so both versions are separate, indexable pages. The page language comes from <html lang>. */
(function initLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  const langList = document.getElementById('lang-list');
  const langSelected = document.getElementById('lang-selected');

  langSelected.addEventListener('click', () => {
    const open = langList.classList.toggle('open');
    langSelected.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target)) {
      langList.classList.remove('open');
      langSelected.setAttribute('aria-expanded', 'false');
    }
  });

  setLang(i18n[currentLang()] ? currentLang() : 'en');
})();

/* ── NAV: glass on scroll ──────────────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── SCROLL REVEALS ────────────────────────────────── */
(function initReveals() {
  const els = document.querySelectorAll('.reveal');
  if (REDUCED_MOTION || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ── PARALLAX (decorative glows + compare tilt) ────── */
(function initParallax() {
  if (REDUCED_MOTION) return;
  const layers = document.querySelectorAll('[data-parallax]');
  const tiltEl = document.querySelector('.tilt');
  let ticking = false;

  function update() {
    ticking = false;
    const sy = window.scrollY;

    layers.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0;
      const rect = el.parentElement.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translate3d(0, ${(-offset).toFixed(1)}px, 0)`;
    });

    if (tiltEl) {
      const r = tiltEl.getBoundingClientRect();
      const mid = r.top + r.height / 2;
      // -1 (below viewport) … 0 (centred) … 1 (above viewport)
      const p = Math.max(-1, Math.min(1, (window.innerHeight / 2 - mid) / (window.innerHeight / 2)));
      tiltEl.style.transform = `perspective(1400px) rotateX(${(p * -2.4).toFixed(2)}deg)`;
    }
    void sy;
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

/* ── FLOW CANVAS (hero) — interactive water-bed mesh ─── */
(function initFlowCanvas() {
  const canvas = document.getElementById('flow-canvas');
  const hero = canvas.closest('.hero');

  // Static, calm gradient behind the canvas (also the mobile/reduced-motion fallback)
  hero.style.background =
    'radial-gradient(1000px 560px at 50% 22%, rgba(1,99,213,0.06), transparent 66%),' +
    'radial-gradient(760px 460px at 82% 72%, rgba(147,170,205,0.15), transparent 60%)';

  if (REDUCED_MOTION) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  let scrollDrift = 0;    // scroll-linked depth offset
  let running = false;
  let heroVisible = true;
  let enabled = window.innerWidth >= 768; // animation is desktop/tablet-only

  // Pointer interaction state (eased toward targets each frame)
  const P = { x: 0, y: 0, tx: 0, ty: 0, s: 0, ts: 0, active: false };
  let parX = 0, parY = 0;        // eased pointer parallax
  const ripples = [];            // click ripples { x, y, t0 }

  function resize() {
    enabled = window.innerWidth >= 768;
    canvas.style.display = enabled ? 'block' : 'none';
    if (!enabled) { running = false; return; }
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.clientWidth;
    h = hero.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    P.x = P.tx = w * 0.5; P.y = P.ty = h * 0.5;
    start();
  }

  /* One continuous surface: a gently rolling sheet of water seen in perspective.
     Rows are drawn as smooth curves (back to front), columns are sparse and faint,
     everything fades towards the horizon and the side edges — no overlapping meshes. */
  const LINE_RGB = '72, 112, 186';
  const COLS = 96, ROWS = 34;

  function surfaceY(x, z, t) {
    return 38 * Math.sin(x * 0.0036 + z * 0.0014 + t * 0.42)
         + 16 * Math.sin(x * 0.0082 - z * 0.0020 - t * 0.30)
         + 12 * Math.sin(z * 0.0050 - t * 0.50);
  }

  function project(x, y, z) {
    // camera looking slightly down at the sheet; horizon sits under the hero text
    const camZ = 520, horizon = h * 0.50, drop = h - horizon - 20;
    const s = camZ / (camZ + z);
    return { x: w * 0.5 + x * s + parX, y: horizon + (drop - y) * s + scrollDrift * s + parY, s };
  }

  // Soft bulge under the cursor and click ripples, applied in screen space.
  function disturb(pp, now) {
    if (P.s > 0.001) {
      const dx = pp.x - P.x, dy = pp.y - P.y, R = 170;
      pp.y -= Math.exp(-(dx * dx + dy * dy) / (2 * R * R)) * 18 * P.s;
    }
    for (let i = 0; i < ripples.length; i++) {
      const rp = ripples[i], age = now - rp.t0, rad = age * 0.42;
      const dist = Math.hypot(pp.x - rp.x, pp.y - rp.y);
      const band = Math.exp(-Math.pow(dist - rad, 2) / (2 * 26 * 26));
      pp.y -= Math.sin((dist - rad) * 0.1) * band * 12 * Math.max(0, 1 - age / 1500);
    }
  }

  function edgeFade(u) { return Math.pow(Math.sin(u * Math.PI), 0.9); }

  function drawSurface(t, now) {
    const halfW = w * 0.9, depth = 1500;
    const grid = [];
    for (let r = 0; r < ROWS; r++) {
      const v = r / (ROWS - 1), z = Math.pow(v, 1.35) * depth, row = [];
      for (let c = 0; c < COLS; c++) {
        const u = c / (COLS - 1), x = (u - 0.5) * 2 * halfW;
        const pp = project(x, surfaceY(x, z, t), z);
        pp.u = u; pp.v = v;
        disturb(pp, now);
        row.push(pp);
      }
      grid.push(row);
    }
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    // rows: back to front, one smooth curve each
    for (let r = ROWS - 1; r >= 0; r--) {
      const row = grid[r], v = r / (ROWS - 1);
      const depthA = 0.46 * Math.pow(1 - v, 1.2) + 0.04;
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0,    `rgba(${LINE_RGB}, 0)`);
      grad.addColorStop(0.18, `rgba(${LINE_RGB}, ${depthA})`);
      grad.addColorStop(0.82, `rgba(${LINE_RGB}, ${depthA})`);
      grad.addColorStop(1,    `rgba(${LINE_RGB}, 0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 0.6 + 0.8 * (1 - v);
      ctx.beginPath();
      ctx.moveTo(row[0].x, row[0].y);
      for (let c = 1; c < COLS - 1; c++) {
        const mx = (row[c].x + row[c + 1].x) / 2, my = (row[c].y + row[c + 1].y) / 2;
        ctx.quadraticCurveTo(row[c].x, row[c].y, mx, my);
      }
      ctx.lineTo(row[COLS - 1].x, row[COLS - 1].y);
      ctx.stroke();
    }
    // sparse columns, very faint, to hint the grid without clutter
    for (let c = 0; c < COLS; c += 4) {
      const u = c / (COLS - 1), a = 0.14 * edgeFade(u);
      if (a < 0.01) continue;
      const grad = ctx.createLinearGradient(0, grid[ROWS - 1][c].y, 0, grid[0][c].y);
      grad.addColorStop(0, `rgba(${LINE_RGB}, 0)`);
      grad.addColorStop(1, `rgba(${LINE_RGB}, ${a})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(grid[ROWS - 1][c].x, grid[ROWS - 1][c].y);
      for (let r = ROWS - 2; r >= 0; r--) ctx.lineTo(grid[r][c].x, grid[r][c].y);
      ctx.stroke();
    }
  }

  function drawGlow(t) {
    // slow drifting light pools — "water catching light"
    const cx = w * (0.5 + Math.sin(t * 0.13) * 0.06);
    const g1 = ctx.createRadialGradient(cx, h * 0.55, 40, cx, h * 0.55, w * 0.42);
    g1.addColorStop(0, 'rgba(1, 99, 213, 0.05)');
    g1.addColorStop(1, 'rgba(1, 99, 213, 0)');
    ctx.fillStyle = g1;
    ctx.fillRect(0, 0, w, h);
  }

  function drawCursorLight() {
    // the pointer illuminates the water — reinforces interactivity + blends the mesh
    if (P.s <= 0.02) return;
    const g = ctx.createRadialGradient(P.x, P.y, 0, P.x, P.y, 190);
    g.addColorStop(0, `rgba(120, 172, 236, ${0.12 * P.s})`);
    g.addColorStop(1, 'rgba(120, 172, 236, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }

  // ?static=1 renders a single frame (screenshot / testing helper)
  const STATIC_FRAME = new URLSearchParams(location.search).has('static');

  function easeState() {
    P.s += (P.ts - P.s) * 0.08;
    P.x += (P.tx - P.x) * 0.12;
    P.y += (P.ty - P.y) * 0.12;
    const targetPX = P.active ? (P.x - w / 2) * 0.03 : 0;
    const targetPY = P.active ? (P.y - h / 2) * 0.02 : 0;
    parX += (targetPX - parX) * 0.06;
    parY += (targetPY - parY) * 0.06;
  }

  let lastFrame = 0;
  function render(ms) {
    if (!running) return;
    if (ms - lastFrame < 1000 / 60) { requestAnimationFrame(render); return; }
    lastFrame = ms;
    const t = ms * 0.001;
    easeState();
    for (let i = ripples.length - 1; i >= 0; i--) {
      if (ms - ripples[i].t0 > 1500) ripples.splice(i, 1);
    }
    ctx.clearRect(0, 0, w, h);
    drawGlow(t);
    drawSurface(t, ms);
    drawCursorLight();
    if (STATIC_FRAME) { running = false; return; }
    requestAnimationFrame(render);
  }

  function start() {
    if (running || !enabled || !heroVisible) return;
    running = true;
    requestAnimationFrame(render);
  }

  /* Pointer interaction */
  function movePointer(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    P.tx = clientX - rect.left;
    P.ty = clientY - rect.top;
    P.active = true;
    P.ts = 1;
    if (!running) start();
  }
  hero.addEventListener('pointermove', e => movePointer(e.clientX, e.clientY));
  hero.addEventListener('pointerdown', e => {
    movePointer(e.clientX, e.clientY);
    ripples.push({ x: P.tx, y: P.ty, t0: performance.now() });
    if (ripples.length > 6) ripples.shift();
  });
  hero.addEventListener('pointerleave', () => { P.active = false; P.ts = 0; });

  // Pause when the hero is off-screen; parallax-drift while scrolling
  const visObs = new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    if (heroVisible) start();
    else running = false;
  }, { threshold: 0.02 });
  visObs.observe(hero);

  window.addEventListener('scroll', () => {
    scrollDrift = window.scrollY * 0.12;
  }, { passive: true });

  resize();
  window.addEventListener('resize', resize);
  // Some environments settle the viewport without firing `resize`
  const mq = window.matchMedia('(min-width: 768px)');
  if (typeof mq.addEventListener === 'function') mq.addEventListener('change', resize);
  setTimeout(resize, 600);
})();

/* ── COMPARE SLIDER ────────────────────────────────── */
(function initCompare() {
  const wrap    = document.getElementById('compare');
  const beforeW = document.getElementById('before-wrap');
  const divider = document.getElementById('divider');
  const handle  = document.getElementById('handle');
  let dragging  = false;
  let pct       = 50;

  function apply() {
    beforeW.style.width = pct + '%';
    divider.style.left  = pct + '%';
    handle.style.left   = pct + '%';
    wrap.setAttribute('aria-valuenow', String(Math.round(pct)));
  }

  function setPos(x) {
    const rect = wrap.getBoundingClientRect();
    pct = Math.min(98, Math.max(2, ((x - rect.left) / rect.width) * 100));
    apply();
  }

  wrap.addEventListener('mousedown',  e => { dragging = true; setPos(e.clientX); });
  wrap.addEventListener('touchstart', e => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  window.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mouseup',  () => dragging = false);
  window.addEventListener('touchend', () => dragging = false);

  // Keyboard support
  wrap.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { pct = Math.max(2, pct - 4); apply(); e.preventDefault(); }
    if (e.key === 'ArrowRight') { pct = Math.min(98, pct + 4); apply(); e.preventDefault(); }
  });

  // One-time hint sweep when the slider first becomes visible
  if (!REDUCED_MOTION) {
    let hinted = false;
    function hint() {
      if (hinted) return;
      hinted = true;
      let dir = 1, pos = 50, frames = 0;
      function step() {
        pos += dir * 0.7;
        if (pos > 68) dir = -1;
        if (pos < 32) { pct = 50; apply(); return; }
        pct = pos; apply();
        frames++;
        if (frames < 80) requestAnimationFrame(step);
      }
      setTimeout(() => requestAnimationFrame(step), 900);
    }
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { hint(); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(wrap);
  }

  apply();
})();

/* ── COUNTDOWN ─────────────────────────────────────── */
(function initCountdown() {
  const LAUNCH = new Date('2027-06-15T09:00:00');
  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMins = document.getElementById('cd-mins');
  const pad = n => String(n).padStart(2, '0');

  function tick() {
    const diff = LAUNCH - Date.now();
    if (diff <= 0) {
      document.getElementById('countdown-wrap').style.display = 'none';
      clearInterval(timer);
      return;
    }
    elDays.textContent  = pad(Math.floor(diff / 86400000));
    elHours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    elMins.textContent  = pad(Math.floor((diff % 3600000) / 60000));
  }
  tick();
  const timer = setInterval(tick, 1000);
})();

/* ── BOOKING WIDGET ────────────────────────────────── */
(function initBooking() {
  const CALENDLY_URL = 'https://calendly.com/letitflow-support/30min';
  const AVAILABLE_DOW = [1, 2, 3, 4, 5]; // Mon–Fri
  const SLOTS = ['08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30',
                 '14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00'];
  let curYear, curMonth, selDate = null, selSlot = null;

  const now = new Date();
  curYear  = now.getFullYear();
  curMonth = now.getMonth();

  const MONTH_NAMES = {
    en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    fr: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    de: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
    es: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    it: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  };
  const DOW_NAMES = {
    en: ['Mo','Tu','We','Th','Fr','Sa','Su'],
    fr: ['Lu','Ma','Me','Je','Ve','Sa','Di'],
    de: ['Mo','Di','Mi','Do','Fr','Sa','So'],
    es: ['Lu','Ma','Mi','Ju','Vi','Sá','Do'],
    it: ['Lu','Ma','Me','Gi','Ve','Sa','Do'],
  };

  function monthNames() { return MONTH_NAMES[currentLang()] || MONTH_NAMES.en; }
  function dowNames()   { return DOW_NAMES[currentLang()] || DOW_NAMES.en; }

  function buildCalendar() {
    const grid = document.getElementById('cal-grid');
    const label = document.getElementById('cal-month-label');
    label.textContent = monthNames()[curMonth] + ' ' + curYear;
    grid.innerHTML = '';

    dowNames().forEach(d => {
      const el = document.createElement('div');
      el.className = 'cal-dow';
      el.textContent = d;
      grid.appendChild(el);
    });

    const firstDay = new Date(curYear, curMonth, 1).getDay(); // 0=Sun
    const offset = (firstDay + 6) % 7;                        // shift so Mon=0

    for (let i = 0; i < offset; i++) {
      const el = document.createElement('div');
      el.className = 'cal-day cal-day--empty';
      grid.appendChild(el);
    }

    const daysInMonth = new Date(curYear, curMonth + 1, 0).getDate();
    const today = new Date(); today.setHours(0, 0, 0, 0);

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(curYear, curMonth, d);
      const dow = date.getDay();
      const el = document.createElement('div');
      el.textContent = d;
      const isPast = date < today;
      const isAvail = AVAILABLE_DOW.includes(dow) && !isPast;
      el.className = 'cal-day' + (isAvail ? ' cal-day--available' : ' cal-day--disabled');

      if (selDate && date.toDateString() === selDate.toDateString()) {
        el.classList.add('cal-day--selected');
      }

      if (isAvail) {
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        const pick = () => {
          selDate = date; selSlot = null;
          buildCalendar();
          buildSlots();
          updateSubmit();
        };
        el.addEventListener('click', pick);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { pick(); e.preventDefault(); } });
      }
      grid.appendChild(el);
    }
  }

  function buildSlots() {
    const grid = document.getElementById('slots-grid');
    const title = document.getElementById('slots-title');
    grid.innerHTML = '';

    if (!selDate) {
      title.textContent = t('slots-pick');
      for (let i = 0; i < 6; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'slot-btn slot--nodate';
        btn.textContent = '—';
        btn.disabled = true;
        grid.appendChild(btn);
      }
      return;
    }

    const opts = { weekday: 'long', day: 'numeric', month: 'long' };
    const strong = document.createElement('strong');
    strong.textContent = selDate.toLocaleDateString({ fr: 'fr-FR', de: 'de-DE', es: 'es-ES', it: 'it-IT' }[currentLang()] || 'en-GB', opts);
    title.innerHTML = '';
    title.appendChild(strong);

    SLOTS.forEach(s => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slot-btn' + (selSlot === s ? ' slot--selected' : '');
      btn.textContent = s;
      btn.addEventListener('click', () => {
        selSlot = s;
        buildSlots();
        updateSubmit();
      });
      grid.appendChild(btn);
    });
  }

  function updateSubmit() {
    const btn = document.getElementById('bform-submit');
    btn.disabled = !(selDate && selSlot &&
      document.getElementById('bform-name').value.trim() &&
      document.getElementById('bform-email').value.trim());
  }

  document.getElementById('bform-name').addEventListener('input', updateSubmit);
  document.getElementById('bform-email').addEventListener('input', updateSubmit);

  document.getElementById('booking-form').addEventListener('submit', e => {
    e.preventDefault();
    if (!selDate || !selSlot) return;
    const yyyy = selDate.getFullYear();
    const mm = String(selDate.getMonth() + 1).padStart(2, '0');
    const dd = String(selDate.getDate()).padStart(2, '0');
    const name  = encodeURIComponent(document.getElementById('bform-name').value.trim());
    const email = encodeURIComponent(document.getElementById('bform-email').value.trim());
    window.open(`${CALENDLY_URL}?date=${yyyy}-${mm}-${dd}&name=${name}&email=${email}`, '_blank', 'noopener');
  });

  document.getElementById('cal-prev').addEventListener('click', () => {
    curMonth--; if (curMonth < 0) { curMonth = 11; curYear--; }
    buildCalendar();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    curMonth++; if (curMonth > 11) { curMonth = 0; curYear++; }
    buildCalendar();
  });

  buildCalendar();
  buildSlots();

  // Refresh month / day names when the language changes
  document.addEventListener('langchange', () => { buildCalendar(); buildSlots(); });
})();

/* ── COOKIE CONSENT + ANALYTICS ────────────────────── */
// ContentSquare is loaded only after the visitor accepts; the choice is asked again after ~6 months.
(function initConsent() {
  const KEY = 'lif-consent';
  const MAX_AGE = 1000 * 60 * 60 * 24 * 182;
  const box = document.getElementById('consent');
  if (!box) return;

  function loadAnalytics() {
    if (window.__lifAnalytics) return;
    window.__lifAnalytics = true;
    const s = document.createElement('script');
    s.src = 'https://t.contentsquare.net/uxa/09ed023976832.js';
    s.async = true;
    document.head.appendChild(s);
  }
  function read() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (v && Date.now() - v.t < MAX_AGE) return v.ok;
    } catch (e) { /* storage blocked */ }
    return null;
  }
  function save(ok) {
    try { localStorage.setItem(KEY, JSON.stringify({ ok, t: Date.now() })); } catch (e) { /* ignore */ }
    box.hidden = true;
    if (ok) loadAnalytics();
  }

  document.getElementById('consent-yes').addEventListener('click', () => save(true));
  document.getElementById('consent-no').addEventListener('click', () => save(false));
  const settings = document.getElementById('cookie-settings');
  if (settings) settings.addEventListener('click', () => { box.hidden = false; });

  const choice = read();
  if (choice === true) loadAnalytics();
  else if (choice === null) box.hidden = false;
})();
