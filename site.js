(function () {
  const supportedLangs = ["fr","en","es","de","nl","pt"];
  const dictionary = {
  "fr": {
    "navHome": "Accueil",
    "navFeatures": "Modes",
    "navCollection": "Collection",
    "navUgc": "UGC",
    "navSupport": "Support",
    "navReport": "Signaler",
    "navSuggest": "Suggérer",
    "heroKicker": "Jouez partout, même hors ligne",
    "heroCopy": "Le party game qui révèle ton groupe en 5 minutes : red flags, quiz, Action ou Vérité, packs amis et récaps privés.",
    "download": "Télécharger",
    "suggestCta": "Suggérer une carte",
    "featuresTitle": "Des choix qui lancent le débat",
    "featuresCopy": "Swipe Panic reste jouable sans compte cloud : solo, pass-and-play et Wi-Fi local sont pensés pour les soirées où tout doit aller vite.",
    "classicCopy": "Swipe les red flags et green flags, puis découvre le profil de la partie.",
    "quizCopy": "Vrai ou faux, 20 cartes, 50 cartes ou Max, avec chrono de récap seulement.",
    "partyCopy": "Action ou Vérité, packs amis, votes locaux et récap clair.",
    "collectionTitle": "Construis ta collection légendaire",
    "collectionCopy": "Le Hall of Fame et le Hall of Shame gardent la mémoire des choix marquants, des débats et des cartes qui méritent une place au musée.",
    "reportContent": "Signaler un contenu",
    "privacy": "Confidentialité",
    "storeTitle": "Disponible sur Google Play",
    "storeCopy": "Une expérience rapide, fun et pensée pour les soirées : packs officiels, packs amis, modes solo/local et règles UGC claires.",
    "footer": "© Swipe Panic. Contact : support@swipepanic.app",
    "suggestTitle": "Suggérer une carte",
    "suggestIntro": "Envoyez une idée courte, claire et sûre pour Green Flags / Red Flags, Quiz ou Action/Vérité. Le formulaire prépare un email et copie le texte pour éviter toute perte.",
    "fieldMode": "Mode",
    "fieldIdea": "Texte de la carte",
    "fieldNote": "Note optionnelle",
    "fieldLang": "Langue de la carte",
    "fieldClassicType": "Type Green / Red",
    "classicTypeRed": "Red flag",
    "classicTypeGreen": "Green flag",
    "prepareEmail": "Préparer l’email",
    "copySuggestion": "Copier la suggestion",
    "copied": "Suggestion copiée. Si votre mail ne s’ouvre pas, envoyez-la à support@swipepanic.app.",
    "missingIdea": "Ajoutez d’abord une idée de carte.",
    "suggestionSubject": "Suggestion carte Swipe Panic",
    "suggestionHeader": "Nouvelle suggestion de carte Swipe Panic",
    "placeholderIdea": "Ex: Il/Elle parle de son ex au premier rendez-vous.",
    "placeholderNote": "Ton pseudo, contexte, pack visé, variante...",
    "formatHelpClassic": "Format Green Flags / Red Flags : une phrase courte de dating. Pas de lien, pas de coordonnées, pas de personne réelle ciblée.",
    "formatHelpQuiz": "Format Quiz : commence par + pour Vrai ou - pour Faux. Exemple : + Le premier message compte.",
    "formatHelpSocial": "Format Action/Vérité : écris deux textes séparés par |. Exemple : Fais un compliment | Raconte ton pire rendez-vous.",
    "invalidTooShort": "La suggestion est trop courte. Ajoute une vraie phrase jouable.",
    "invalidTooLong": "La suggestion est trop longue. Vise une carte courte et lisible en soirée.",
    "invalidLink": "Les liens externes ne sont pas autorisés dans les suggestions UGC.",
    "invalidPhone": "Les coordonnées ou longues suites de chiffres ne sont pas autorisées.",
    "invalidBlocked": "Cette suggestion contient un terme interdit par les règles UGC.",
    "invalidQuizPrefix": "Pour Quiz, commence le texte par + si la phrase est vraie, ou - si elle est fausse.",
    "invalidSocialPair": "Pour Action/Vérité, utilise exactement le format : Action | Vérité, avec les deux textes remplis.",
    "spamWait": "Suggestion déjà préparée récemment. Attends quelques minutes avant d’en envoyer une autre.",
    "safeCheck": "Contrôle UGC local : OK",
    "suggestionFooter": "Les suggestions peuvent être adaptées avant intégration.",
    "privacyTitle": "Politique de confidentialité",
    "privacyIntro": "Swipe Panic fonctionne sans compte et sans base cloud Swipe Panic. Certaines données restent sur votre appareil; seules les publicités Google AdMob et les signalements que vous envoyez volontairement peuvent impliquer des tiers.",
    "privacyLocalTitle": "Données locales",
    "privacyLocalCopy": "Les réglages, packs créés localement, choix de partie, historiques privés, collections, préférences audio/TTS et signalements préparés sont stockés sur l’appareil. Ces données ne sont pas envoyées à un serveur Swipe Panic.",
    "privacyAdsTitle": "Publicité Google AdMob",
    "privacyAdsCopy": "Swipe Panic peut afficher des publicités via Google AdMob. Le SDK Google Mobile Ads peut collecter ou partager des données comme l’adresse IP, l’identifiant publicitaire Android, l’identifiant App Set, des interactions dans l’app et des diagnostics pour la publicité, l’analyse et la prévention de fraude.",
    "privacyConsentTitle": "Consentement UMP",
    "privacyConsentCopy": "Dans les régions concernées, Swipe Panic utilise Google User Messaging Platform pour demander votre consentement publicitaire. Vous pouvez refuser les publicités personnalisées lorsque le message de consentement est affiché. Vous pouvez aussi gérer l’identifiant publicitaire depuis les réglages Android.",
    "privacyReportsTitle": "Signalements volontaires",
    "privacyReportsCopy": "Si vous signalez un contenu créé par un utilisateur, l’app supprime le pack localement puis prépare un rapport que vous choisissez d’envoyer par email ou via la feuille de partage du téléphone. Le rapport peut contenir le nom du pack, son identifiant local, les cartes concernées, la langue, la date et un identifiant local d’appareil. Rien n’est envoyé sans votre action.",
    "privacyRetentionTitle": "Conservation et suppression",
    "privacyRetentionCopy": "Les données locales restent sur l’appareil jusqu’à leur suppression dans l’app, la réinitialisation des données ou la désinstallation. Les emails de support ou de signalement sont conservés seulement le temps nécessaire au support, à la modération et à la protection du jeu.",
    "privacyChildrenTitle": "Âge et public",
    "privacyChildrenCopy": "Swipe Panic est un party game pour adolescents et adultes. L’app n’est pas conçue pour les enfants et ne cible pas les enfants de moins de 13 ans.",
    "privacyThirdPartyTitle": "Services tiers",
    "privacyThirdPartyCopy": "Le principal service tiers utilisé pour la publicité est Google AdMob. Les traitements de Google sont décrits dans ses propres politiques de confidentialité et technologies publicitaires.",
    "privacyContactCopy": "Contact : support@swipepanic.app",
    "termsTitle": "Conditions d'utilisation",
    "termsIntro": "En utilisant Swipe Panic, vous acceptez de jouer de manière responsable et de ne pas créer, importer ou partager de contenu illégal, haineux, violent, sexuel, harcelant ou portant atteinte à autrui.",
    "termsUserContentTitle": "Contenu utilisateur",
    "termsUserContentCopy": "Les packs créés par les joueurs sont sous leur responsabilité. L'app peut bloquer certains contenus localement et permet de signaler un pack inapproprié.",
    "termsLocalTitle": "Jeu local",
    "termsLocalCopy": "Le multi Wi-Fi local dépend du réseau utilisé. Certains réseaux publics peuvent bloquer les communications entre téléphones.",
    "supportLine": "Support : support@swipepanic.app",
    "ugcTitle": "Créer & Jouer à plusieurs",
    "ugcIntro": "Swipe Panic est conçu pour animer vos soirées. Découvrez comment jouer ensemble sur un ou plusieurs téléphones, et comment créer vos propres cartes !",
    "ugcStep1Title": "1. Jouer à plusieurs sur un seul téléphone (Pass & Play) 📱",
    "ugcStep1Intro": "C'est le mode le plus simple pour s'amuser en groupe lors d'une soirée, en se passant le téléphone de main en main :",
    "ugcStep1Classic": "<strong>En mode Classic (Flags) 🚩/✅</strong> : Le téléphone affiche un écran masqué pour que le joueur suivant ne voie pas la carte. Prenez le téléphone, tapez pour révéler la situation, swippez votre choix en cachette, puis passez-le au suivant !",
    "ugcStep1Quiz": "<strong>En mode Quiz (Vrai/Faux) 🧠</strong> : Le fonctionnement est le même avec un écran masqué pour éviter le spoil. Le chronomètre individuel ne démarre que lorsque vous tapez pour révéler la question !",
    "ugcStep1Social": "<strong>En mode Party (Action/Vérité) 😈</strong> : Pas de carte masquée ici ! Le joueur actif lit la carte à voix haute et doit réaliser le gage ou répondre à la question devant tout le monde.",
    "ugcStep2Title": "2. Créer ses propres packs de cartes 🎨",
    "ugcStep2Intro": "Ajoutez vos propres blagues ou anecdotes directement depuis l'application dans l'onglet de création de pack :",
    "ugcStep2Classic": "<strong>Créer du Classic</strong> : Écrivez des comportements de dating (ex: <em>Il met du ketchup sur sa pizza</em>). Le jeu les affichera en vous demandant si c'est un Green Flag ou un Red Flag.",
    "ugcStep2Quiz": "<strong>Créer du Quiz</strong> : Écrivez votre affirmation et mettez un <code>+</code> devant si elle est vraie, ou un <code>-</code> si elle est fausse (ex: <code>+ Le miel est éternel</code>).",
    "ugcStep2Social": "<strong>Créer du Social (Party)</strong> : Écrivez un défi d'Action et une question de Vérité séparés par une barre verticale <code>|</code> (ex: <code>Faire un mime | Révéler ton pire secret</code>).",
    "ugcStep3Title": "3. Partager ses cartes en Wi-Fi Local (Sans Internet !) 📡",
    "ugcStep3Intro": "Vous avez créé un pack personnalisé et vous voulez que vos amis y jouent sur leur propre téléphone ? C'est ultra-simple et 100% privé :",
    "ugcStep3Copy": "Connectez-vous tous au même réseau Wi-Fi local. Lancez le jeu en mode Hôte avec votre pack. Vos amis verront votre salon s'afficher sur leur écran et rejoindront la partie. Votre pack est envoyé de manière éphémère sur leur appareil pour la durée du jeu, sans aucun compte cloud ni sauvegarde.",
    "ugcNotice": "Interdit : haine, harcèlement, violence réelle, contenu sexuel, liens externes, coordonnées personnelles, contenus illégaux ou ciblant une personne réelle.",
    "ugcReportTitle": "Signalement",
    "ugcReportCopy": "Depuis l'app, signaler un pack le supprime immédiatement du téléphone et prépare un rapport que vous pouvez envoyer à l'équipe.",
    "reportTitle": "Signaler un contenu",
    "reportIntro": "Le moyen recommandé est le bouton de signalement dans l'app : il supprime le pack localement et prépare un rapport complet.",
    "reportEmailCopy": "Vous pouvez aussi écrire à support@swipepanic.app avec le nom du pack, son ID si disponible et les cartes concernées.",
    "supportTitle": "Support",
    "supportWifiTitle": "Wi-Fi local",
    "supportWifiCopy": "Chaque téléphone doit choisir le même pack, le même mode et la même durée. Certains réseaux publics bloquent les appareils entre eux.",
    "supportContactTitle": "Contact",
    "supportGeneralCopy": "Contact unique : support@swipepanic.app",
    "supportReportCopy": "Support, signalements et suggestions passent par la même adresse.",
    "offlineFooter": "Swipe Panic fonctionne aussi hors ligne pour les fonctions de jeu principales.",
    "lastUpdated": "Dernière mise à jour : 2026-05-19",
    "manualReports": "Les signalements sont traités manuellement.",
    "moderationContact": "Contact : support@swipepanic.app",
    "navTerms": "Conditions",
    "modeClassic": "Green Flags / Red Flags",
    "modeQuiz": "Quiz",
    "modeSocial": "Action/Vérité",
    "publicCatalogEyebrow": "Aperçu officiel modéré",
    "randomCardButton": "Carte au hasard",
    "randomCardFallback": "Les cartes officielles restent courtes, relues et pensées pour être jouées vite.",
    "titleHome": "Swipe Panic - Le party game qui révèle ton groupe",
    "titleSuggest": "Suggérer une carte - Swipe Panic",
    "titlePrivacy": "Politique de confidentialité - Swipe Panic",
    "titleTerms": "Conditions - Swipe Panic",
    "titleUgc": "Règles UGC - Swipe Panic",
    "titleReport": "Signaler - Swipe Panic",
    "titleSupport": "Support - Swipe Panic"
  },
  "en": {
    "navHome": "Home",
    "navFeatures": "Features",
    "navCollection": "Collection",
    "navUgc": "UGC",
    "navSupport": "Support",
    "navReport": "Report",
    "navSuggest": "Suggest",
    "heroKicker": "Play anywhere, even offline",
    "heroCopy": "The party game that reveals your group in 5 minutes: red flags, quiz, Truth or Dare, friends packs and private recaps.",
    "download": "Download",
    "suggestCta": "Suggest a card",
    "featuresTitle": "Choices that start the debate",
    "featuresCopy": "Swipe Panic works without a cloud account: solo, pass-and-play and local Wi-Fi are built for fast party sessions.",
    "classicCopy": "Swipe red flags and green flags, then discover the session profile.",
    "quizCopy": "True or false, 20 cards, 50 cards or Max, with a recap stopwatch only.",
    "partyCopy": "Truth or Dare, friends packs, local votes and a clean recap.",
    "collectionTitle": "Build your legendary collection",
    "collectionCopy": "Hall of Fame and Hall of Shame remember the bold choices, debates and museum-worthy cards.",
    "reportContent": "Report content",
    "privacy": "Privacy",
    "storeTitle": "Available on Google Play",
    "storeCopy": "A fast, fun party experience with official packs, friends packs, solo/local modes and clear UGC rules.",
    "footer": "© Swipe Panic. Contact: support@swipepanic.app",
    "suggestTitle": "Suggest a card",
    "suggestIntro": "Send a short, clear and safe idea for Green Flags / Red Flags, Quiz or Truth or Dare. The form prepares an email and copies the text so nothing gets lost.",
    "fieldMode": "Mode",
    "fieldIdea": "Card text",
    "fieldNote": "Optional note",
    "fieldLang": "Card language",
    "fieldClassicType": "Green / Red type",
    "classicTypeRed": "Red flag",
    "classicTypeGreen": "Green flag",
    "prepareEmail": "Prepare email",
    "copySuggestion": "Copy suggestion",
    "copied": "Suggestion copied. If your email app does not open, send it to support@swipepanic.app.",
    "missingIdea": "Add a card idea first.",
    "suggestionSubject": "Swipe Panic card suggestion",
    "suggestionHeader": "New Swipe Panic card suggestion",
    "placeholderIdea": "Ex: They talk about their ex on the first date.",
    "placeholderNote": "Nickname, context, target pack, variant...",
    "formatHelpClassic": "Green Flags / Red Flags format: one short dating sentence. No links, no contact details, no real targeted person.",
    "formatHelpQuiz": "Quiz format: start with + for True or - for False. Example: + The first message matters.",
    "formatHelpSocial": "Truth or Dare format: write two texts separated by |. Example: Give a compliment | Tell your worst date story.",
    "invalidTooShort": "The suggestion is too short. Add a playable sentence.",
    "invalidTooLong": "The suggestion is too long. Keep it short and readable for a party game.",
    "invalidLink": "External links are not allowed in UGC suggestions.",
    "invalidPhone": "Contact details or long digit sequences are not allowed.",
    "invalidBlocked": "This suggestion contains a term blocked by the UGC rules.",
    "invalidQuizPrefix": "For Quiz, start with + if the sentence is true, or - if it is false.",
    "invalidSocialPair": "For Truth or Dare, use exactly this format: Dare | Truth, with both texts filled in.",
    "spamWait": "A suggestion was prepared recently. Wait a few minutes before sending another one.",
    "safeCheck": "Local UGC check: OK",
    "suggestionFooter": "Suggestions may be adapted before integration.",
    "privacyTitle": "Privacy Policy",
    "privacyIntro": "Swipe Panic works without an account and without a Swipe Panic cloud database. Some data stays on your device; only Google AdMob ads and reports you voluntarily send may involve third parties.",
    "privacyLocalTitle": "Local data",
    "privacyLocalCopy": "Settings, locally created packs, game choices, private history, collections, audio/TTS preferences and prepared reports are stored on the device. This data is not sent to a Swipe Panic server.",
    "privacyAdsTitle": "Google AdMob advertising",
    "privacyAdsCopy": "Swipe Panic may show ads through Google AdMob. The Google Mobile Ads SDK may collect or share data such as IP address, Android advertising ID, App Set ID, app interactions and diagnostics for advertising, analytics and fraud prevention.",
    "privacyConsentTitle": "UMP consent",
    "privacyConsentCopy": "In applicable regions, Swipe Panic uses Google User Messaging Platform to request advertising consent. You can refuse personalized ads when the consent message is shown. You can also manage the advertising ID in Android settings.",
    "privacyReportsTitle": "Voluntary reports",
    "privacyReportsCopy": "If you report user-created content, the app removes the pack locally and prepares a report that you choose to send by email or through your phone share sheet. The report may include the pack name, local ID, relevant cards, language, date and a local device ID. Nothing is sent without your action.",
    "privacyRetentionTitle": "Retention and deletion",
    "privacyRetentionCopy": "Local data stays on the device until you delete it in the app, reset app data or uninstall the app. Support or report emails are kept only as long as needed for support, moderation and protection of the game.",
    "privacyChildrenTitle": "Age and audience",
    "privacyChildrenCopy": "Swipe Panic is a party game for teens and adults. The app is not designed for children and does not target children under 13.",
    "privacyThirdPartyTitle": "Third-party services",
    "privacyThirdPartyCopy": "The main third-party service used for advertising is Google AdMob. Google processing is described in its own privacy and advertising technology policies.",
    "privacyContactCopy": "Contact: support@swipepanic.app",
    "termsTitle": "Terms of Use",
    "termsIntro": "By using Swipe Panic, you agree to play responsibly and not create, import or share illegal, hateful, violent, sexual, harassing or harmful content.",
    "termsUserContentTitle": "User content",
    "termsUserContentCopy": "Packs created by players are their responsibility. The app may block some content locally and lets players report inappropriate packs.",
    "termsLocalTitle": "Local play",
    "termsLocalCopy": "Local Wi-Fi multiplayer depends on the network. Some public networks block communication between phones.",
    "supportLine": "Support: support@swipepanic.app",
    "ugcTitle": "Create & Play together",
    "ugcIntro": "Swipe Panic is built to light up your parties. Discover how to play together on one or more phones, and how to create your own custom cards!",
    "ugcStep1Title": "1. Play together on a single phone (Pass & Play) 📱",
    "ugcStep1Intro": "This is the easiest way to have fun in a group during a party, passing the phone from hand to hand:",
    "ugcStep1Classic": "<strong>In Classic Mode (Flags) 🚩/✅</strong>: The phone displays a hidden transition screen so the next player cannot peek. Take the phone, tap to reveal the situation, swipe your choice in secret, then pass it to the next player!",
    "ugcStep1Quiz": "<strong>In Quiz Mode (True/False) 🧠</strong>: It works the same way with a masked screen to avoid spoilers. The individual timer only starts when you tap to reveal the question!",
    "ugcStep1Social": "<strong>In Party Mode (Truth/Dare) 😈</strong>: No hidden card here! The active player reads the card out loud and must perform the dare or answer the truth question in front of everyone.",
    "ugcStep2Title": "2. Create your own custom card packs 🎨",
    "ugcStep2Intro": "Add your own jokes or inside stories directly in the app inside the pack creator tab:",
    "ugcStep2Classic": "<strong>Create Classic cards</strong>: Write dating behaviors (e.g., <em>They put ketchup on their pizza</em>). The game will display them, asking players if it is a Green Flag or a Red Flag.",
    "ugcStep2Quiz": "<strong>Create Quiz cards</strong>: Write your statement and put a <code>+</code> in front if it is true, or a <code>-</code> if it is false (e.g., <code>+ Honey never spoils</code>).",
    "ugcStep2Social": "<strong>Create Social (Party) cards</strong>: Write an Action/Dare text and a Truth question separated by a vertical bar <code>|</code> (e.g., <code>Do a mime | Reveal your worst secret</code>).",
    "ugcStep3Title": "3. Share your custom cards via Local Wi-Fi (No Internet!) 📡",
    "ugcStep3Intro": "Created a cool pack and want your friends to play it on their own phones? It is ultra-simple and 100% private:",
    "ugcStep3Copy": "Connect all devices to the same local Wi-Fi network. Launch the game in Host mode with your custom pack. Your friends will see your lobby appear on their screen and join the game. Your pack is temporarily sent to their devices only for the duration of the session, with no cloud account or permanent storage.",
    "ugcNotice": "Forbidden: hate, harassment, real violence, sexual content, external links, personal contact details, illegal content or targeting a real person.",
    "ugcReportTitle": "Reporting",
    "ugcReportCopy": "From the app, reporting a pack immediately removes it from the phone and prepares a report you can send to the team.",
    "reportTitle": "Report content",
    "reportIntro": "The recommended path is the in-app report button: it removes the pack locally and prepares a complete report.",
    "reportEmailCopy": "You can also email support@swipepanic.app with the pack name, its ID if available and the relevant cards.",
    "supportTitle": "Support",
    "supportWifiTitle": "Local Wi-Fi",
    "supportWifiCopy": "Each phone must choose the same pack, mode and duration. Some public networks block devices from seeing each other.",
    "supportContactTitle": "Contact",
    "supportGeneralCopy": "Single contact: support@swipepanic.app",
    "supportReportCopy": "Support, reports and suggestions use the same address.",
    "offlineFooter": "Swipe Panic also works offline for the main game features.",
    "lastUpdated": "Last updated: 2026-05-19",
    "manualReports": "Reports are reviewed manually.",
    "moderationContact": "Contact: support@swipepanic.app",
    "navTerms": "Terms",
    "modeClassic": "Green Flags / Red Flags",
    "modeQuiz": "Quiz",
    "modeSocial": "Truth/Dare",
    "publicCatalogEyebrow": "Moderated official preview",
    "randomCardButton": "Random card",
    "randomCardFallback": "Official cards stay short, reviewed and built for fast play.",
    "titleHome": "Swipe Panic - The party game that reveals your group",
    "titleSuggest": "Suggest a card - Swipe Panic",
    "titlePrivacy": "Privacy Policy - Swipe Panic",
    "titleTerms": "Terms - Swipe Panic",
    "titleUgc": "UGC Rules - Swipe Panic",
    "titleReport": "Report - Swipe Panic",
    "titleSupport": "Support - Swipe Panic"
  },
  "es": {
    "navHome": "Inicio",
    "navFeatures": "Modos",
    "navCollection": "Colección",
    "navUgc": "UGC",
    "navSupport": "Soporte",
    "navReport": "Reportar",
    "navSuggest": "Sugerir",
    "navTerms": "Condiciones",
    "heroKicker": "Juega donde quieras, incluso sin conexión",
    "heroCopy": "El party game que revela a tu grupo en 5 minutos: red flags, quiz, Verdad o Reto, packs de amigos y resúmenes privados.",
    "download": "Descargar",
    "suggestCta": "Sugerir una carta",
    "featuresTitle": "Decisiones que abren debate",
    "featuresCopy": "Swipe Panic funciona sin cuenta cloud: solo, teléfono compartido y Wi-Fi local están pensados para partidas rápidas.",
    "classicCopy": "Desliza red flags y green flags, y descubre el perfil de la partida.",
    "quizCopy": "Verdadero o falso, 20 cartas, 50 cartas o Max, con cronómetro solo para el resumen.",
    "partyCopy": "Verdad o Reto, packs de amigos, votos locales y resumen claro.",
    "collectionTitle": "Crea tu colección legendaria",
    "collectionCopy": "El Hall of Fame y el Hall of Shame guardan los momentos, debates y cartas que merecen museo.",
    "reportContent": "Reportar contenido",
    "privacy": "Privacidad",
    "storeTitle": "Disponible en Google Play",
    "storeCopy": "Una experiencia rápida y divertida para fiestas: packs oficiales, packs de amigos, modos solo/locales y reglas UGC claras.",
    "footer": "© Swipe Panic. Contacto: support@swipepanic.app",
    "modeClassic": "Green Flags / Red Flags",
    "modeQuiz": "Quiz",
    "modeSocial": "Verdad/Reto",
    "publicCatalogEyebrow": "Vista oficial moderada",
    "randomCardButton": "Carta al azar",
    "randomCardFallback": "Las cartas oficiales son cortas, revisadas y pensadas para jugar rápido.",
    "suggestTitle": "Sugerir una carta",
    "suggestIntro": "Envía una idea breve, clara y segura para Green Flags / Red Flags, Quiz o Verdad/Reto. El formulario prepara un email y copia el texto para que no se pierda.",
    "fieldMode": "Modo",
    "fieldIdea": "Texto de la carta",
    "fieldNote": "Nota opcional",
    "fieldLang": "Idioma de la carta",
    "fieldClassicType": "Tipo Green / Red",
    "classicTypeRed": "Red flag",
    "classicTypeGreen": "Green flag",
    "prepareEmail": "Preparar email",
    "copySuggestion": "Copiar sugerencia",
    "copied": "Sugerencia copiada. Si tu app de email no se abre, envíala a support@swipepanic.app.",
    "missingIdea": "Añade primero una idea de carta.",
    "suggestionHeader": "Nueva sugerencia de carta Swipe Panic",
    "placeholderIdea": "Ej.: Habla de su ex en la primera cita.",
    "placeholderNote": "Apodo, contexto, pack objetivo, variante...",
    "formatHelpClassic": "Formato Green Flags / Red Flags: una frase corta de dating. Sin enlaces, datos de contacto ni una persona real como objetivo.",
    "formatHelpQuiz": "Formato Quiz: empieza con + para Verdadero o - para Falso. Ejemplo: + El primer mensaje importa.",
    "formatHelpSocial": "Formato Verdad/Reto: escribe dos textos separados por |. Ejemplo: Haz un cumplido | Cuenta tu peor cita.",
    "invalidTooShort": "La sugerencia es demasiado corta. Añade una frase jugable.",
    "invalidTooLong": "La sugerencia es demasiado larga. Hazla corta y fácil de leer en una fiesta.",
    "invalidLink": "No se permiten enlaces externos en sugerencias UGC.",
    "invalidPhone": "No se permiten datos de contacto ni largas secuencias de números.",
    "invalidBlocked": "Esta sugerencia contiene un término bloqueado por las reglas UGC.",
    "invalidQuizPrefix": "Para Quiz, empieza con + si la frase es verdadera, o - si es falsa.",
    "invalidSocialPair": "Para Verdad/Reto, usa exactamente este formato: Reto | Verdad, con ambos textos completos.",
    "spamWait": "Ya se preparó una sugerencia hace poco. Espera unos minutos antes de enviar otra.",
    "safeCheck": "Control UGC local: OK",
    "suggestionFooter": "Las sugerencias pueden adaptarse antes de integrarse.",
    "privacyTitle": "Política de privacidad",
    "privacyIntro": "Swipe Panic funciona sin cuenta y sin base cloud de Swipe Panic. Algunos datos se quedan en tu dispositivo; solo los anuncios de Google AdMob y los reportes que envíes voluntariamente pueden implicar a terceros.",
    "privacyLocalTitle": "Datos locales",
    "privacyLocalCopy": "Ajustes, packs creados localmente, elecciones de partida, historial privado, colecciones, preferencias de audio/TTS y reportes preparados se guardan en el dispositivo. Estos datos no se envían a un servidor de Swipe Panic.",
    "privacyAdsTitle": "Publicidad Google AdMob",
    "privacyAdsCopy": "Swipe Panic puede mostrar anuncios mediante Google AdMob. El SDK Google Mobile Ads puede recopilar o compartir datos como dirección IP, identificador publicitario de Android, App Set ID, interacciones en la app y diagnósticos para publicidad, análisis y prevención de fraude.",
    "privacyConsentTitle": "Consentimiento UMP",
    "privacyConsentCopy": "En las regiones aplicables, Swipe Panic usa Google User Messaging Platform para pedir tu consentimiento publicitario. Puedes rechazar anuncios personalizados cuando se muestre el mensaje de consentimiento. También puedes gestionar el identificador publicitario desde los ajustes de Android.",
    "privacyReportsTitle": "Reportes voluntarios",
    "privacyReportsCopy": "Si reportas contenido creado por un usuario, la app elimina el pack localmente y prepara un reporte que tú eliges enviar por email o mediante la hoja de compartir. El reporte puede incluir nombre del pack, ID local, cartas relevantes, idioma, fecha e identificador local del dispositivo. Nada se envía sin tu acción.",
    "privacyRetentionTitle": "Conservación y eliminación",
    "privacyRetentionCopy": "Los datos locales permanecen en el dispositivo hasta que los elimines en la app, restablezcas los datos o desinstales la app. Los emails de soporte o reporte se conservan solo el tiempo necesario para soporte, moderación y protección del juego.",
    "privacyChildrenTitle": "Edad y público",
    "privacyChildrenCopy": "Swipe Panic es un party game para adolescentes y adultos. La app no está diseñada para niños y no se dirige a menores de 13 años.",
    "privacyThirdPartyTitle": "Servicios de terceros",
    "privacyThirdPartyCopy": "El principal servicio de terceros usado para publicidad es Google AdMob. El tratamiento de Google se describe en sus propias políticas de privacidad y tecnologías publicitarias.",
    "privacyContactCopy": "Contacto: support@swipepanic.app",
    "termsTitle": "Condiciones de uso",
    "termsIntro": "Al usar Swipe Panic, aceptas jugar de forma responsable y no crear, importar ni compartir contenido ilegal, de odio, violento, sexual, acosador o dañino.",
    "termsUserContentTitle": "Contenido de usuario",
    "termsUserContentCopy": "Los packs creados por jugadores son responsabilidad de sus autores. La app puede bloquear contenido localmente y permite reportar packs inapropiados.",
    "termsLocalTitle": "Juego local",
    "termsLocalCopy": "El multijugador Wi-Fi local depende de la red usada. Algunas redes públicas bloquean la comunicación entre teléfonos.",
    "supportLine": "Soporte: support@swipepanic.app",
    "ugcTitle": "Crear y Jugar juntos",
    "ugcIntro": "Swipe Panic está pensado para animar tus fiestas. ¡Descubre cómo jugar juntos en uno o varios teléfonos y cómo crear tus propias cartas!",
    "ugcStep1Title": "1. Jugar juntos en un solo teléfono (Pasar el teléfono) 📱",
    "ugcStep1Intro": "Es la forma más sencilla de divertirse en grupo en una fiesta, pasándose el teléfono de mano en mano:",
    "ugcStep1Classic": "<strong>En el modo Classic (Banderas) 🚩/✅</strong>: El teléfono muestra una pantalla oculta para que el siguiente jugador no vea la carta. ¡Toma el teléfono, toca para revelar la situación, desliza tu elección en secreto y pásalo al siguiente!",
    "ugcStep1Quiz": "<strong>En el modo Quiz (Verdadero/Falso) 🧠</strong>: Funciona de la misma manera con una pantalla oculta para evitar spoilers. ¡El cronómetro individual no comienza hasta que tocas para revelar la pregunta!",
    "ugcStep1Social": "<strong>En el modo Party (Verdad o Reto) 😈</strong>: ¡Aquí no hay cartas ocultas! El jugador activo lee la carta en voz alta y debe realizar el reto o responder a la verdad delante de todos.",
    "ugcStep2Title": "2. Crear tus propios paquetes de cartas 🎨",
    "ugcStep2Intro": "Añade tus propios chistes o anécdotas directamente desde la aplicación en la pestaña de creación de paquetes:",
    "ugcStep2Classic": "<strong>Crear cartas Classic</strong>: Escribe comportamientos de citas (ej.: <em>Le echa kétchup a la pizza</em>). El juego las mostrará preguntando si es una Green Flag o una Red Flag.",
    "ugcStep2Quiz": "<strong>Crear cartas Quiz</strong>: Escribe tu afirmación y pon un <code>+</code> delante si es verdadera, o un <code>-</code> si es falsa (ej.: <code>+ La miel es eterna</code>).",
    "ugcStep2Social": "<strong>Crear cartas Social (Party)</strong>: Escribe un reto de Acción y una pregunta de Verdad separados por una barra vertical <code>|</code> (ej.: <code>Hacer mímica | Revelar tu peor secreto</code>).",
    "ugcStep3Title": "3. Compartir tus cartas por Wi-Fi Local (¡Sin Internet!) 📡",
    "ugcStep3Intro": "¿Has creado un gran paquete y quieres que tus amigos lo jueguen en su propio teléfono? Es facilísimo y 100% privado:",
    "ugcStep3Copy": "Conéctense todos a la misma red Wi-Fi local. Inicien el juego en modo Anfitrión con tu paquete personalizado. Tus amigos verán tu sala en su pantalla y se unirán a la partida. Tu paquete se envía de forma temporal a sus dispositivos solo para la duración del juego, sin cuenta cloud ni copias permanentes.",
    "ugcNotice": "Prohibido: odio, acoso, violencia real, contenido sexual, enlaces externos, datos personales, contenido ilegal o dirigido a una persona real.",
    "ugcReportTitle": "Reporte",
    "ugcReportCopy": "Desde la app, reportar un pack lo elimina inmediatamente del teléfono y prepara un reporte que puedes enviar al equipo.",
    "reportTitle": "Reportar contenido",
    "reportIntro": "La vía recomendada es el botón de reporte dentro de la app: elimina el pack localmente y prepara un reporte completo.",
    "reportEmailCopy": "También puedes escribir a support@swipepanic.app con el nombre del pack, su ID si existe y las cartas afectadas.",
    "supportTitle": "Soporte",
    "supportWifiTitle": "Wi-Fi local",
    "supportWifiCopy": "Cada teléfono debe elegir el mismo pack, modo y duración. Algunas redes públicas impiden que los dispositivos se vean entre sí.",
    "supportContactTitle": "Contacto",
    "supportGeneralCopy": "Contacto único: support@swipepanic.app",
    "supportReportCopy": "Soporte, reportes y sugerencias usan la misma dirección.",
    "offlineFooter": "Swipe Panic también funciona sin conexión para las funciones principales del juego.",
    "lastUpdated": "Última actualización: 2026-05-19",
    "manualReports": "Los reportes se revisan manualmente.",
    "moderationContact": "Contacto: support@swipepanic.app",
    "titleHome": "Swipe Panic - El party game que revela a tu grupo",
    "titleSuggest": "Sugerir una carta - Swipe Panic",
    "titlePrivacy": "Política de privacidad - Swipe Panic",
    "titleTerms": "Condiciones - Swipe Panic",
    "titleUgc": "Reglas UGC - Swipe Panic",
    "titleReport": "Reportar - Swipe Panic",
    "titleSupport": "Soporte - Swipe Panic"
  },
  "de": {
    "navHome": "Start",
    "navFeatures": "Modi",
    "navCollection": "Sammlung",
    "navUgc": "UGC",
    "navSupport": "Support",
    "navReport": "Melden",
    "navSuggest": "Vorschlagen",
    "navTerms": "Nutzungsbedingungen",
    "heroKicker": "Überall spielbar, auch offline",
    "heroCopy": "Das Partyspiel, das deine Gruppe in 5 Minuten enthüllt: Red Flags, Quiz, Wahrheit oder Pflicht, Freunde-Packs und private Recaps.",
    "download": "Herunterladen",
    "suggestCta": "Karte vorschlagen",
    "featuresTitle": "Entscheidungen, die Diskussionen starten",
    "featuresCopy": "Swipe Panic funktioniert ohne Cloud-Konto: Solo, geteiltes Telefon und lokales Wi-Fi sind für schnelle Partys gemacht.",
    "classicCopy": "Swipe Red Flags und Green Flags und entdecke das Profil der Runde.",
    "quizCopy": "Wahr oder falsch, 20 Karten, 50 Karten oder Max, mit Stoppuhr nur für den Recap.",
    "partyCopy": "Wahrheit oder Pflicht, Freunde-Packs, lokale Stimmen und ein klarer Recap.",
    "collectionTitle": "Baue deine legendäre Sammlung",
    "collectionCopy": "Hall of Fame und Hall of Shame merken sich mutige Entscheidungen, Debatten und Karten fürs Museum.",
    "reportContent": "Inhalt melden",
    "privacy": "Datenschutz",
    "storeTitle": "Verfügbar bei Google Play",
    "storeCopy": "Ein schnelles, lustiges Party-Erlebnis mit offiziellen Packs, Freunde-Packs, Solo-/Lokalmodi und klaren UGC-Regeln.",
    "footer": "© Swipe Panic. Kontakt: support@swipepanic.app",
    "modeClassic": "Green Flags / Red Flags",
    "modeQuiz": "Quiz",
    "modeSocial": "Wahrheit/Pflicht",
    "publicCatalogEyebrow": "Moderierte offizielle Vorschau",
    "randomCardButton": "Zufällige Karte",
    "randomCardFallback": "Offizielle Karten bleiben kurz, geprüft und schnell spielbar.",
    "suggestTitle": "Karte vorschlagen",
    "suggestIntro": "Sende eine kurze, klare und sichere Idee für Green Flags / Red Flags, Quiz oder Wahrheit/Pflicht. Das Formular bereitet eine E-Mail vor und kopiert den Text.",
    "fieldMode": "Modus",
    "fieldIdea": "Kartentext",
    "fieldNote": "Optionale Notiz",
    "fieldLang": "Kartensprache",
    "fieldClassicType": "Green / Red Typ",
    "classicTypeRed": "Red flag",
    "classicTypeGreen": "Green flag",
    "prepareEmail": "E-Mail vorbereiten",
    "copySuggestion": "Vorschlag kopieren",
    "copied": "Vorschlag kopiert. Wenn deine Mail-App nicht öffnet, sende ihn an support@swipepanic.app.",
    "missingIdea": "Füge zuerst eine Kartenidee hinzu.",
    "suggestionHeader": "Neuer Swipe Panic Kartenvorschlag",
    "placeholderIdea": "Bsp.: Er/Sie spricht beim ersten Date über den Ex.",
    "placeholderNote": "Nickname, Kontext, Zielpack, Variante...",
    "formatHelpClassic": "Green Flags / Red Flags Format: ein kurzer Dating-Satz. Keine Links, Kontaktdaten oder gezielte reale Person.",
    "formatHelpQuiz": "Quiz-Format: Beginne mit + für Wahr oder - für Falsch. Beispiel: + Die erste Nachricht zählt.",
    "formatHelpSocial": "Wahrheit/Pflicht-Format: zwei Texte mit | trennen. Beispiel: Mach ein Kompliment | Erzähl von deinem schlimmsten Date.",
    "invalidTooShort": "Der Vorschlag ist zu kurz. Füge einen spielbaren Satz hinzu.",
    "invalidTooLong": "Der Vorschlag ist zu lang. Halte ihn kurz und party-tauglich.",
    "invalidLink": "Externe Links sind in UGC-Vorschlägen nicht erlaubt.",
    "invalidPhone": "Kontaktdaten oder lange Zahlenfolgen sind nicht erlaubt.",
    "invalidBlocked": "Dieser Vorschlag enthält einen durch die UGC-Regeln blockierten Begriff.",
    "invalidQuizPrefix": "Für Quiz beginne mit +, wenn der Satz wahr ist, oder mit -, wenn er falsch ist.",
    "invalidSocialPair": "Für Wahrheit/Pflicht nutze genau dieses Format: Pflicht | Wahrheit, beide Texte ausgefüllt.",
    "spamWait": "Vor Kurzem wurde bereits ein Vorschlag vorbereitet. Warte ein paar Minuten.",
    "safeCheck": "Lokale UGC-Prüfung: OK",
    "suggestionFooter": "Vorschläge können vor der Integration angepasst werden.",
    "privacyTitle": "Datenschutzerklärung",
    "privacyIntro": "Swipe Panic funktioniert ohne Konto und ohne Swipe-Panic-Cloud-Datenbank. Einige Daten bleiben auf deinem Gerät; nur Google-AdMob-Anzeigen und freiwillig gesendete Meldungen können Dritte einbeziehen.",
    "privacyLocalTitle": "Lokale Daten",
    "privacyLocalCopy": "Einstellungen, lokal erstellte Packs, Spielentscheidungen, private Historie, Sammlungen, Audio/TTS-Präferenzen und vorbereitete Meldungen werden auf dem Gerät gespeichert. Diese Daten werden nicht an einen Swipe-Panic-Server gesendet.",
    "privacyAdsTitle": "Google-AdMob-Werbung",
    "privacyAdsCopy": "Swipe Panic kann Werbung über Google AdMob anzeigen. Das Google Mobile Ads SDK kann Daten wie IP-Adresse, Android-Werbe-ID, App Set ID, App-Interaktionen und Diagnosen für Werbung, Analyse und Betrugsprävention erfassen oder teilen.",
    "privacyConsentTitle": "UMP-Einwilligung",
    "privacyConsentCopy": "In betroffenen Regionen nutzt Swipe Panic die Google User Messaging Platform, um deine Werbeeinwilligung abzufragen. Du kannst personalisierte Werbung ablehnen, wenn die Einwilligungsnachricht angezeigt wird. Die Werbe-ID kannst du außerdem in den Android-Einstellungen verwalten.",
    "privacyReportsTitle": "Freiwillige Meldungen",
    "privacyReportsCopy": "Wenn du nutzergenerierte Inhalte meldest, entfernt die App das Pack lokal und bereitet eine Meldung vor, die du per E-Mail oder Teilen-Menü senden kannst. Die Meldung kann Packname, lokale ID, betroffene Karten, Sprache, Datum und eine lokale Geräte-ID enthalten. Ohne deine Aktion wird nichts gesendet.",
    "privacyRetentionTitle": "Aufbewahrung und Löschung",
    "privacyRetentionCopy": "Lokale Daten bleiben auf dem Gerät, bis du sie in der App löschst, App-Daten zurücksetzt oder die App deinstallierst. Support- oder Melde-E-Mails werden nur so lange aufbewahrt, wie es für Support, Moderation und Schutz des Spiels nötig ist.",
    "privacyChildrenTitle": "Alter und Zielgruppe",
    "privacyChildrenCopy": "Swipe Panic ist ein Partyspiel für Teenager und Erwachsene. Die App ist nicht für Kinder konzipiert und richtet sich nicht an Kinder unter 13 Jahren.",
    "privacyThirdPartyTitle": "Dienste Dritter",
    "privacyThirdPartyCopy": "Der wichtigste Drittanbieter für Werbung ist Google AdMob. Googles Verarbeitung wird in den eigenen Datenschutz- und Werbetechnologie-Richtlinien beschrieben.",
    "privacyContactCopy": "Kontakt: support@swipepanic.app",
    "termsTitle": "Nutzungsbedingungen",
    "termsIntro": "Mit der Nutzung von Swipe Panic stimmst du zu, verantwortungsvoll zu spielen und keine illegalen, hasserfüllten, gewalttätigen, sexuellen, belästigenden oder schädlichen Inhalte zu erstellen, zu importieren oder zu teilen.",
    "termsUserContentTitle": "Nutzerinhalte",
    "termsUserContentCopy": "Von Spielern erstellte Packs liegen in deren Verantwortung. Die App kann bestimmte Inhalte lokal blockieren und unangemessene Packs melden lassen.",
    "termsLocalTitle": "Lokales Spiel",
    "termsLocalCopy": "Lokaler Wi-Fi-Multiplayer hängt vom verwendeten Netzwerk ab. Manche öffentliche Netzwerke blockieren Kommunikation zwischen Telefonen.",
    "supportLine": "Support: support@swipepanic.app",
    "ugcTitle": "Zusammen erstellen & spielen",
    "ugcIntro": "Swipe Panic wurde entwickelt, um deine Partys anzuheizen. Erfahre, wie ihr zusammen auf einem oder mehreren Handys spielen und eigene Karten erstellen könnt!",
    "ugcStep1Title": "1. Zusammen auf einem einzigen Handy spielen (Pass & Play) 📱",
    "ugcStep1Intro": "Das ist der einfachste Weg, in einer Gruppe Spaß zu haben, indem man das Handy von Hand zu Hand weiterreicht:",
    "ugcStep1Classic": "<strong>Im Classic-Modus (Flags) 🚩/✅</strong>: Das Handy zeigt einen verdeckten Übergangsbildschirm, damit der nächste Spieler die Karte nicht sieht. Nimm das Handy, tippe, um die Situation zu enthüllen, wische heimlich deine Wahl und gib es an den Nächsten weiter!",
    "ugcStep1Quiz": "<strong>Im Quiz-Modus (Richtig/Falsch) 🧠</strong>: Das funktioniert genauso mit verdecktem Bildschirm, um Spoiler zu vermeiden. Der Timer startet erst, wenn du tippst, um die Frage zu enthüllen!",
    "ugcStep1Social": "<strong>Im Party-Modus (Wahrheit/Pflicht) 😈</strong>: Hier gibt es keine verdeckten Karten! Der aktive Spieler liest die Karte laut vor und muss die Pflicht erfüllen oder die Wahrheit vor allen beantworten.",
    "ugcStep2Title": "2. Eigene Kartensets erstellen 🎨",
    "ugcStep2Intro": "Füge deine eigenen Insider-Witze oder Anekdoten direkt in der App im Bereich 'Karten erstellen' hinzu:",
    "ugcStep2Classic": "<strong>Classic erstellen</strong>: Schreibe Dating-Verhaltensweisen auf (z.B. <em>Er/Sie macht Ketchup auf die Pizza</em>). Das Spiel fragt dann, ob das ein Green Flag oder Red Flag ist.",
    "ugcStep2Quiz": "<strong>Quiz erstellen</strong>: Schreibe deine Aussage auf und setze ein <code>+</code> davor, wenn sie wahr ist, oder ein <code>-</code>, wenn sie falsch ist (z.B. <code>+ Honig verdirbt nie</code>).",
    "ugcStep2Social": "<strong>Social (Party) erstellen</strong>: Schreibe eine Pflichtaufgabe und eine Wahrheitsfrage getrennt durch einen senkrechten Strich <code>|</code> auf (z.B. <code>Pantomime machen | Dein peinlichstes Geheimnis verraten</code>).",
    "ugcStep3Title": "3. Eigene Karten über lokales WLAN teilen (Ohne Internet!) 📡",
    "ugcStep3Intro": "Du hast ein tolles Pack erstellt und willst, dass deine Freunde es auf ihren eigenen Handys spielen? Das ist super einfach und 100% privat:",
    "ugcStep3Copy": "Verbindet alle Geräte mit demselben lokalen WLAN-Netzwerk. Starte das Spiel als Host mit deinem benutzerdefinierten Pack. Deine Freunde sehen deine Lobby auf ihrem Bildschirm und treten dem Spiel bei. Dein Pack wird nur für die Dauer der Spielrunde temporär auf ihre Geräte übertragen, ohne Cloud-Konto oder dauerhafte Speicherung.",
    "ugcNotice": "Verboten: Hass, Belästigung, reale Gewalt, sexuelle Inhalte, externe Links, persönliche Kontaktdaten, illegale Inhalte oder gezielte reale Personen.",
    "ugcReportTitle": "Meldung",
    "ugcReportCopy": "In der App entfernt eine Meldung das Pack sofort vom Telefon und bereitet eine Nachricht an das Team vor.",
    "reportTitle": "Inhalt melden",
    "reportIntro": "Empfohlen ist der Meldebutton in der App: Er entfernt das Pack lokal und erstellt eine vollständige Meldung.",
    "reportEmailCopy": "Du kannst auch an support@swipepanic.app schreiben, mit Packname, ID falls vorhanden und betroffenen Karten.",
    "supportTitle": "Support",
    "supportWifiTitle": "Lokales Wi-Fi",
    "supportWifiCopy": "Jedes Telefon muss dasselbe Pack, denselben Modus und dieselbe Dauer wählen. Manche öffentliche Netzwerke blockieren Geräte untereinander.",
    "supportContactTitle": "Kontakt",
    "supportGeneralCopy": "Einziger Kontakt: support@swipepanic.app",
    "supportReportCopy": "Support, Meldungen und Vorschläge laufen über dieselbe Adresse.",
    "offlineFooter": "Swipe Panic funktioniert für die wichtigsten Spiel-Funktionen auch offline.",
    "lastUpdated": "Zuletzt aktualisiert: 2026-05-19",
    "manualReports": "Meldungen werden manuell geprüft.",
    "moderationContact": "Kontakt: support@swipepanic.app",
    "titleHome": "Swipe Panic - Das Partyspiel, das deine Gruppe enthüllt",
    "titleSuggest": "Karte vorschlagen - Swipe Panic",
    "titlePrivacy": "Datenschutz - Swipe Panic",
    "titleTerms": "Nutzungsbedingungen - Swipe Panic",
    "titleUgc": "UGC-Regeln - Swipe Panic",
    "titleReport": "Melden - Swipe Panic",
    "titleSupport": "Support - Swipe Panic"
  },
  "nl": {
    "navHome": "Home",
    "navFeatures": "Modi",
    "navCollection": "Collectie",
    "navUgc": "UGC",
    "navSupport": "Support",
    "navReport": "Melden",
    "navSuggest": "Voorstellen",
    "heroKicker": "Speel overal, ook offline",
    "heroCopy": "De partygame die je groep in 5 minuten onthult: red flags, quiz, Truth or Dare, vriendenpacks en privé-samenvattingen.",
    "download": "Downloaden",
    "suggestCta": "Kaart voorstellen",
    "featuresTitle": "Keuzes die discussie starten",
    "featuresCopy": "Swipe Panic werkt zonder cloudaccount: solo, telefoon delen en lokale Wi-Fi zijn gemaakt voor snelle feestjes.",
    "classicCopy": "Swipe red flags en green flags en ontdek het profiel van de ronde.",
    "quizCopy": "Waar of niet waar, 20 kaarten, 50 kaarten of Max, met stopwatch alleen voor de samenvatting.",
    "partyCopy": "Truth or Dare, vriendenpacks, lokale stemmen en een heldere samenvatting.",
    "collectionTitle": "Bouw je legendarische collectie",
    "collectionCopy": "Hall of Fame en Hall of Shame onthouden opvallende keuzes, discussies en museumwaardige kaarten.",
    "reportContent": "Inhoud melden",
    "privacy": "Privacy",
    "storeTitle": "Beschikbaar op Google Play",
    "storeCopy": "Een snelle, leuke party-ervaring met officiële packs, vriendenpacks, solo/lokale modi en duidelijke UGC-regels.",
    "footer": "© Swipe Panic. Contact: support@swipepanic.app",
    "suggestTitle": "Kaart voorstellen",
    "suggestIntro": "Stuur een kort, duidelijk en veilig idee voor Green Flags / Red Flags, Quiz of Truth/Dare. Het formulier maakt een e-mail klaar en kopieert de tekst.",
    "fieldMode": "Modus",
    "fieldIdea": "Kaarttekst",
    "fieldNote": "Optionele notitie",
    "fieldLang": "Taal van de kaart",
    "fieldClassicType": "Green / Red type",
    "classicTypeRed": "Red flag",
    "classicTypeGreen": "Green flag",
    "prepareEmail": "E-mail voorbereiden",
    "copySuggestion": "Suggestie kopiëren",
    "copied": "Suggestie gekopieerd. Als je mail-app niet opent, stuur hem naar support@swipepanic.app.",
    "missingIdea": "Voeg eerst een kaartidee toe.",
    "suggestionSubject": "Swipe Panic card suggestion",
    "suggestionHeader": "Nieuwe Swipe Panic kaartsuggestie",
    "placeholderIdea": "Bijv.: Diegene praat op de eerste date over een ex.",
    "placeholderNote": "Nickname, context, doelpack, variant...",
    "formatHelpClassic": "Green Flags / Red Flags formaat: één korte datingzin. Geen links, contactgegevens of echte persoon als doelwit.",
    "formatHelpQuiz": "Quiz-formaat: begin met + voor Waar of - voor Niet waar. Voorbeeld: + Het eerste bericht telt.",
    "formatHelpSocial": "Truth/Dare-formaat: schrijf twee teksten gescheiden door |. Voorbeeld: Geef een compliment | Vertel je slechtste dateverhaal.",
    "invalidTooShort": "De suggestie is te kort. Voeg een speelbare zin toe.",
    "invalidTooLong": "De suggestie is te lang. Houd het kort en leesbaar voor een feestje.",
    "invalidLink": "Externe links zijn niet toegestaan in UGC-suggesties.",
    "invalidPhone": "Contactgegevens of lange cijferreeksen zijn niet toegestaan.",
    "invalidBlocked": "Deze suggestie bevat een term die door de UGC-regels is geblokkeerd.",
    "invalidQuizPrefix": "Voor Quiz begin je met + als de zin waar is, of - als hij niet waar is.",
    "invalidSocialPair": "Voor Truth/Dare gebruik je exact dit formaat: Dare | Truth, met beide teksten ingevuld.",
    "spamWait": "Er is net al een suggestie voorbereid. Wacht een paar minuten.",
    "safeCheck": "Lokale UGC-check: OK",
    "suggestionFooter": "Suggesties kunnen vóór integratie worden aangepast.",
    "privacyTitle": "Privacybeleid",
    "privacyIntro": "Swipe Panic werkt zonder account en zonder Swipe Panic-clouddatabase. Sommige gegevens blijven op je apparaat; alleen Google AdMob-advertenties en meldingen die je vrijwillig verstuurt kunnen derden betrekken.",
    "privacyLocalTitle": "Lokale gegevens",
    "privacyLocalCopy": "Instellingen, lokaal gemaakte packs, spelkeuzes, privégeschiedenis, collecties, audio/TTS-voorkeuren en voorbereide meldingen worden op het apparaat bewaard. Deze gegevens worden niet naar een Swipe Panic-server gestuurd.",
    "privacyAdsTitle": "Google AdMob-advertenties",
    "privacyAdsCopy": "Swipe Panic kan advertenties tonen via Google AdMob. De Google Mobile Ads SDK kan gegevens verzamelen of delen zoals IP-adres, Android-advertentie-ID, App Set ID, app-interacties en diagnostiek voor advertenties, analyse en fraudepreventie.",
    "privacyConsentTitle": "UMP-toestemming",
    "privacyConsentCopy": "In toepasselijke regio’s gebruikt Swipe Panic Google User Messaging Platform om advertentietoestemming te vragen. Je kunt gepersonaliseerde advertenties weigeren wanneer het toestemmingsbericht verschijnt. Je kunt de advertentie-ID ook beheren in Android-instellingen.",
    "privacyReportsTitle": "Vrijwillige meldingen",
    "privacyReportsCopy": "Als je door gebruikers gemaakte inhoud meldt, verwijdert de app het pack lokaal en maakt een melding klaar die jij per e-mail of deelmenu kunt versturen. De melding kan packnaam, lokale ID, relevante kaarten, taal, datum en lokale apparaat-ID bevatten. Zonder jouw actie wordt niets verzonden.",
    "privacyRetentionTitle": "Bewaren en verwijderen",
    "privacyRetentionCopy": "Lokale gegevens blijven op het apparaat totdat je ze in de app verwijdert, appgegevens reset of de app verwijdert. Support- of meldingsmails worden alleen bewaard zolang nodig voor support, moderatie en bescherming van het spel.",
    "privacyChildrenTitle": "Leeftijd en publiek",
    "privacyChildrenCopy": "Swipe Panic is een partygame voor tieners en volwassenen. De app is niet ontworpen voor kinderen en richt zich niet op kinderen onder 13 jaar.",
    "privacyThirdPartyTitle": "Diensten van derden",
    "privacyThirdPartyCopy": "De belangrijkste externe dienst voor advertenties is Google AdMob. De verwerking door Google staat beschreven in hun eigen privacy- en advertentietechnologiebeleid.",
    "privacyContactCopy": "Contact: support@swipepanic.app",
    "termsTitle": "Gebruiksvoorwaarden",
    "termsIntro": "Door Swipe Panic te gebruiken, ga je akkoord om verantwoordelijk te spelen en geen illegale, haatdragende, gewelddadige, seksuele, intimiderende of schadelijke inhoud te maken, importeren of delen.",
    "termsUserContentTitle": "Gebruikersinhoud",
    "termsUserContentCopy": "Packs die spelers maken vallen onder hun verantwoordelijkheid. De app kan sommige inhoud lokaal blokkeren en laat spelers ongepaste packs melden.",
    "termsLocalTitle": "Lokaal spelen",
    "termsLocalCopy": "Lokale Wi-Fi-multiplayer hangt af van het netwerk. Sommige openbare netwerken blokkeren communicatie tussen telefoons.",
    "supportLine": "Support: support@swipepanic.app",
    "ugcTitle": "Samen maken & spelen",
    "ugcIntro": "Swipe Panic is ontworpen om je feestjes op te vrolijken. Ontdek hoe je samen op één of meerdere telefoons speelt en hoe je je eigen kaarten maakt!",
    "ugcStep1Title": "1. Samen spelen op één telefoon (Pass & Play) 📱",
    "ugcStep1Intro": "Dit is de makkelijkste manier om plezier te hebben in een groep tijdens een feestje, door de telefoon door te geven:",
    "ugcStep1Classic": "<strong>In Classic-modus (Flags) 🚩/✅</strong>: De telefoon toont een verborgen tussenscherm zodat de volgende speler de kaart niet kan zien. Pak de telefoon, tik om de situatie te onthullen, swipe je keuze in het geheim en geef hem door aan de volgende!",
    "ugcStep1Quiz": "<strong>In Quiz-modus (Waar/Niet waar) 🧠</strong>: Dit werkt hetzelfde met een verborgen scherm om spoilers te voorkomen. De individuele timer start pas wanneer je tikt om de vraag te onthullen!",
    "ugcStep1Social": "<strong>In Party-modus (Truth/Dare) 😈</strong>: Geen verborgen kaarten hier! De actieve speler leest de kaart hardop voor en moet de opdracht uitvoeren of de waarheidsvraag beantwoorden voor iedereen.",
    "ugcStep2Title": "2. Je eigen kaartenpacks maken 🎨",
    "ugcStep2Intro": "Voeg je eigen grappen of insider-verhalen toe direct in de app via het tabblad kaarten maken:",
    "ugcStep2Classic": "<strong>Classic maken</strong>: Schrijf datinggedrag op (bijv. <em>Zet ketchup op pizza</em>). De game toont ze en vraagt spelers of het een Green Flag of Red Flag is.",
    "ugcStep2Quiz": "<strong>Quiz maken</strong>: Schrijf je stelling op en zet er een <code>+</code> voor als deze waar is, of een <code>-</code> als deze niet waar is (bijv. <code>+ Honing bederft nooit</code>).",
    "ugcStep2Social": "<strong>Social (Party) maken</strong>: Schrijf een Action/Dare en een Truth-vraag gescheiden door een verticale streep <code>|</code> (bijv. <code>Doe een mime | Onthul je ergste geheim</code>).",
    "ugcStep3Title": "3. Je kaarten delen via lokale wifi (Zonder internet!) 📡",
    "ugcStep3Intro": "Heb je een cool pack gemaakt en wil je dat je vrienden het op hun eigen telefoon spelen? Het is super eenvoudig en 100% privé:",
    "ugcStep3Copy": "Verbind alle apparaten met hetzelfde lokale wifi-netwerk. Start de game in Host-modus met je aangepaste pack. Je vrienden ontvangen je pack tijdelijk op hun telefoon. Het is privé, veilig en tijdelijk.",
    "ugcNotice": "Verboden: haat, intimidatie, echt geweld, seksuele inhoud, externe links, persoonlijke contactgegevens, illegale inhoud of het targeten van een echte persoon.",
    "ugcReportTitle": "Melden",
    "ugcReportCopy": "Vanuit de app verwijdert melden een pack meteen van de telefoon en maakt het een rapport klaar dat je naar het team kunt sturen.",
    "reportTitle": "Inhoud melden",
    "reportIntro": "De aanbevolen route is de meldknop in de app: die verwijdert het pack lokaal en maakt een volledig rapport klaar.",
    "reportEmailCopy": "Je kunt ook mailen naar support@swipepanic.app met de packnaam, ID indien beschikbaar en de relevante kaarten.",
    "supportTitle": "Support",
    "supportWifiTitle": "Lokale Wi-Fi",
    "supportWifiCopy": "Elke telefoon moet hetzelfde pack, dezelfde modus en dezelfde duur kiezen. Sommige openbare netwerken blokkeren apparaten onderling.",
    "supportContactTitle": "Contact",
    "supportGeneralCopy": "Eén contactadres: support@swipepanic.app",
    "supportReportCopy": "Support, meldingen en suggesties gebruiken hetzelfde adres.",
    "offlineFooter": "Swipe Panic werkt ook offline voor de belangrijkste spelfuncties.",
    "lastUpdated": "Laatst bijgewerkt: 2026-05-19",
    "manualReports": "Meldingen worden handmatig beoordeeld.",
    "moderationContact": "Contact: support@swipepanic.app",
    "navTerms": "Voorwaarden",
    "modeClassic": "Green Flags / Red Flags",
    "modeQuiz": "Quiz",
    "modeSocial": "Truth/Dare",
    "publicCatalogEyebrow": "Gematigde officiële preview",
    "randomCardButton": "Willekeurige kaart",
    "randomCardFallback": "Officiële kaarten blijven kort, nagekeken en snel speelbaar.",
    "titleHome": "Swipe Panic - De partygame die je groep onthult",
    "titleSuggest": "Kaart voorstellen - Swipe Panic",
    "titlePrivacy": "Privacybeleid - Swipe Panic",
    "titleTerms": "Voorwaarden - Swipe Panic",
    "titleUgc": "UGC-regels - Swipe Panic",
    "titleReport": "Melden - Swipe Panic",
    "titleSupport": "Support - Swipe Panic"
  },
  "pt": {
    "navHome": "Início",
    "navFeatures": "Modos",
    "navCollection": "Coleção",
    "navUgc": "UGC",
    "navSupport": "Suporte",
    "navReport": "Denunciar",
    "navSuggest": "Sugerir",
    "heroKicker": "Jogue em qualquer lugar, até offline",
    "heroCopy": "O party game que revela o teu grupo em 5 minutos: red flags, quiz, Verdade ou Desafio, packs de amigos e resumos privados.",
    "download": "Transferir",
    "suggestCta": "Sugerir uma carta",
    "featuresTitle": "Escolhas que puxam conversa",
    "featuresCopy": "Swipe Panic funciona sem conta cloud: solo, telemóvel partilhado e Wi-Fi local foram feitos para sessões rápidas.",
    "classicCopy": "Faz swipe em red flags e green flags, depois descobre o perfil da partida.",
    "quizCopy": "Verdadeiro ou falso, 20 cartas, 50 cartas ou Max, com cronómetro só para o resumo.",
    "partyCopy": "Verdade ou Desafio, packs de amigos, votos locais e resumo claro.",
    "collectionTitle": "Constrói a tua coleção lendária",
    "collectionCopy": "Hall of Fame e Hall of Shame guardam escolhas marcantes, debates e cartas dignas de museu.",
    "reportContent": "Denunciar conteúdo",
    "privacy": "Privacidade",
    "storeTitle": "Disponível no Google Play",
    "storeCopy": "Uma experiência rápida e divertida para festas: packs oficiais, packs de amigos, modos solo/locais e regras UGC claras.",
    "footer": "© Swipe Panic. Contacto: support@swipepanic.app",
    "suggestTitle": "Sugerir uma carta",
    "suggestIntro": "Envia uma ideia curta, clara e segura para Green Flags / Red Flags, Quiz ou Verdade/Desafio. O formulário prepara um email e copia o texto.",
    "fieldMode": "Modo",
    "fieldIdea": "Texto da carta",
    "fieldNote": "Nota opcional",
    "fieldLang": "Idioma da carta",
    "fieldClassicType": "Tipo Green / Red",
    "classicTypeRed": "Red flag",
    "classicTypeGreen": "Green flag",
    "prepareEmail": "Preparar email",
    "copySuggestion": "Copiar sugestão",
    "copied": "Sugestão copiada. Se a app de email não abrir, envia para support@swipepanic.app.",
    "missingIdea": "Adiciona primeiro uma ideia de carta.",
    "suggestionSubject": "Swipe Panic card suggestion",
    "suggestionHeader": "Nova sugestão de carta Swipe Panic",
    "placeholderIdea": "Ex.: Fala do ex no primeiro encontro.",
    "placeholderNote": "Alcunha, contexto, pack alvo, variante...",
    "formatHelpClassic": "Formato Green Flags / Red Flags: uma frase curta de dating. Sem links, contactos ou pessoa real visada.",
    "formatHelpQuiz": "Formato Quiz: começa com + para Verdadeiro ou - para Falso. Exemplo: + A primeira mensagem conta.",
    "formatHelpSocial": "Formato Verdade/Desafio: escreve dois textos separados por |. Exemplo: Faz um elogio | Conta o teu pior encontro.",
    "invalidTooShort": "A sugestão é demasiado curta. Adiciona uma frase jogável.",
    "invalidTooLong": "A sugestão é demasiado longa. Mantém curta e legível numa festa.",
    "invalidLink": "Links externos não são permitidos em sugestões UGC.",
    "invalidPhone": "Contactos ou longas sequências de números não são permitidos.",
    "invalidBlocked": "Esta sugestão contém um termo bloqueado pelas regras UGC.",
    "invalidQuizPrefix": "No Quiz, começa com + se a frase for verdadeira, ou - se for falsa.",
    "invalidSocialPair": "Para Verdade/Desafio, usa exatamente este formato: Desafio | Verdade, com os dois textos preenchidos.",
    "spamWait": "Uma sugestão foi preparada há pouco. Espera alguns minutos antes de enviar outra.",
    "safeCheck": "Verificação UGC local: OK",
    "suggestionFooter": "As sugestões podem ser adaptadas antes da integração.",
    "privacyTitle": "Política de privacidade",
    "privacyIntro": "Swipe Panic funciona sem conta e sem base cloud Swipe Panic. Alguns dados ficam no dispositivo; apenas anúncios Google AdMob e denúncias enviadas voluntariamente podem envolver terceiros.",
    "privacyLocalTitle": "Dados locais",
    "privacyLocalCopy": "Definições, packs criados localmente, escolhas de partida, histórico privado, coleções, preferências de áudio/TTS e denúncias preparadas são guardados no dispositivo. Estes dados não são enviados para um servidor Swipe Panic.",
    "privacyAdsTitle": "Publicidade Google AdMob",
    "privacyAdsCopy": "Swipe Panic pode mostrar anúncios através do Google AdMob. O SDK Google Mobile Ads pode recolher ou partilhar dados como endereço IP, ID de publicidade Android, App Set ID, interações na app e diagnósticos para publicidade, análise e prevenção de fraude.",
    "privacyConsentTitle": "Consentimento UMP",
    "privacyConsentCopy": "Nas regiões aplicáveis, Swipe Panic usa Google User Messaging Platform para pedir consentimento publicitário. Podes recusar anúncios personalizados quando a mensagem de consentimento aparece. Também podes gerir o ID de publicidade nas definições Android.",
    "privacyReportsTitle": "Denúncias voluntárias",
    "privacyReportsCopy": "Se denunciares conteúdo criado por um utilizador, a app remove o pack localmente e prepara um relatório que escolhes enviar por email ou pela folha de partilha. O relatório pode incluir nome do pack, ID local, cartas relevantes, idioma, data e ID local do dispositivo. Nada é enviado sem a tua ação.",
    "privacyRetentionTitle": "Conservação e eliminação",
    "privacyRetentionCopy": "Os dados locais ficam no dispositivo até serem apagados na app, repostos nos dados da app ou com a desinstalação. Emails de suporte ou denúncia são conservados apenas pelo tempo necessário para suporte, moderação e proteção do jogo.",
    "privacyChildrenTitle": "Idade e público",
    "privacyChildrenCopy": "Swipe Panic é um party game para adolescentes e adultos. A app não foi criada para crianças e não se dirige a menores de 13 anos.",
    "privacyThirdPartyTitle": "Serviços de terceiros",
    "privacyThirdPartyCopy": "O principal serviço terceiro usado para publicidade é Google AdMob. O tratamento pela Google é descrito nas suas próprias políticas de privacidade e tecnologias de anúncios.",
    "privacyContactCopy": "Contacto: support@swipepanic.app",
    "termsTitle": "Termos de utilização",
    "termsIntro": "Ao usar Swipe Panic, aceitas jogar de forma responsável e não criar, importar ou partilhar conteúdo ilegal, de ódio, violento, sexual, assediante ou prejudicial.",
    "termsUserContentTitle": "Conteúdo do utilizador",
    "termsUserContentCopy": "Packs criados por jogadores são da responsabilidade deles. A app pode bloquear alguns conteúdos localmente e permite denunciar packs inadequados.",
    "termsLocalTitle": "Jogo local",
    "termsLocalCopy": "O multijogador Wi-Fi local depende da rede usada. Algumas redes públicas bloqueiam comunicação entre telemóveis.",
    "supportLine": "Suporte: support@swipepanic.app",
    "ugcTitle": "Criar & Jogar juntos",
    "ugcIntro": "O Swipe Panic foi feito para animar as tuas festas. Descobre como jogar juntos num ou mais telemóveis, e como criar as tuas próprias cartas!",
    "ugcStep1Title": "1. Jogar juntos num único telemóvel (Passar o telemóvel) 📱",
    "ugcStep1Intro": "Esta é a forma mais fácil de se divertirem em grupo numa festa, passando o telemóvel de mão em mão:",
    "ugcStep1Classic": "<strong>No modo Classic (Bandeiras) 🚩/✅</strong>: O telemóvel mostra um ecrã oculto para que o jogador seguinte não veja a carta. Pega no telemóvel, toca para revelar a situação, faz swipe na tua escolha em segredo e passa ao seguinte!",
    "ugcStep1Quiz": "<strong>No modo Quiz (Verdadeiro/Falso) 🧠</strong>: Funciona da mesma forma com um ecrã oculto para evitar spoilers. O cronómetro individual só começa quando tocas para revelar a pergunta!",
    "ugcStep1Social": "<strong>No modo Party (Verdade ou Desafio) 😈</strong>: Aqui não há ecrãs ocultos! O jogador ativo lê a carta em voz alta e deve cumprir o desafio ou responder à verdade em frente de todos.",
    "ugcStep2Title": "2. Criar os teus próprios pacotes de cartas 🎨",
    "ugcStep2Intro": "Adiciona as tuas próprias piadas ou anedotas diretamente na app, no separador de criação de pacotes:",
    "ugcStep2Classic": "<strong>Criar cartas Classic</strong>: Escreve comportamentos de namoro (ex: <em>Põe ketchup na pizza</em>). O jogo irá mostrá-los perguntando se é Green Flag ou Red Flag.",
    "ugcStep2Quiz": "<strong>Criar cartas Quiz</strong>: Escreve a tua afirmação e coloca um <code>+</code> à frente se for verdadeira, ou um <code>-</code> se for falsa (ex: <code>+ O mel é eterno</code>).",
    "ugcStep2Social": "<strong>Criar cartas Social (Party)</strong>: Escreve um desafio de Ação e uma pergunta de Verdade separados por uma barra vertical <code>|</code> (ex: <code>Fazer uma mímica | Revelar o teu pior segredo</code>).",
    "ugcStep3Title": "3. Partilhar as tuas cartas via Wi-Fi Local (Sem Internet!) 📡",
    "ugcStep3Intro": "Criaste um pacote fixe e queres que os teus amigos o joguem no seu próprio telemóvel? É super fácil e 100% privado:",
    "ugcStep3Copy": "Liguem-se todos à mesma rede Wi-Fi local. Iniciem o jogo em modo Anfitrião com o teu pacote personalizado. Os teus amigos vão ver a tua sala no ecrã e juntar-se ao jogo. O teu pacote é enviado temporariamente para os telemóveis deles apenas durante o jogo, sem conta cloud ou cópias permanentes.",
    "ugcNotice": "Proibido: ódio, assédio, violência real, conteúdo sexual, links externos, contactos pessoais, conteúdo ilegal ou direcionado a uma pessoa real.",
    "ugcReportTitle": "Denúncia",
    "ugcReportCopy": "Na app, denunciar um pack remove-o imediatamente do telemóvel e prepara um relatório que podes enviar à equipa.",
    "reportTitle": "Denunciar conteúdo",
    "reportIntro": "O caminho recomendado é o botão de denúncia na app: remove o pack localmente e prepara um relatório completo.",
    "reportEmailCopy": "Também podes escrever para support@swipepanic.app com o nome do pack, o ID se disponível e as cartas relevantes.",
    "supportTitle": "Suporte",
    "supportWifiTitle": "Wi-Fi local",
    "supportWifiCopy": "Cada telemóvel deve escolher o mesmo pack, modo e duração. Algumas redes públicas bloqueiam dispositivos entre si.",
    "supportContactTitle": "Contacto",
    "supportGeneralCopy": "Contacto único: support@swipepanic.app",
    "supportReportCopy": "Suporte, denúncias e sugestões usam o mesmo endereço.",
    "offlineFooter": "Swipe Panic também funciona offline nas principais funções de jogo.",
    "lastUpdated": "Última atualização: 2026-05-19",
    "manualReports": "As denúncias são revistas manualmente.",
    "moderationContact": "Contacto: support@swipepanic.app",
    "navTerms": "Termos",
    "modeClassic": "Green Flags / Red Flags",
    "modeQuiz": "Quiz",
    "modeSocial": "Verdade/Desafio",
    "publicCatalogEyebrow": "Prévia oficial moderada",
    "randomCardButton": "Carta aleatória",
    "randomCardFallback": "As cartas oficiais são curtas, revistas e feitas para jogar rápido.",
    "titleHome": "Swipe Panic - O party game que revela o teu grupo",
    "titleSuggest": "Sugerir uma carta - Swipe Panic",
    "titlePrivacy": "Política de privacidade - Swipe Panic",
    "titleTerms": "Termos - Swipe Panic",
    "titleUgc": "Regras UGC - Swipe Panic",
    "titleReport": "Denunciar - Swipe Panic",
    "titleSupport": "Suporte - Swipe Panic"
  }
};

  const extraDictionary = {
    fr: {
      "contactTitle": "Contact",
      "googlePrivacyLink": "Politique de confidentialité Google",
      "googleAdsLink": "Règles publicitaires Google",
      "sitePreviewAlt": "Aperçu du site Swipe Panic avec accueil, fonctionnalités et collection",
      "storeBannerAlt": "Bannière promotionnelle Swipe Panic",
      "languageFr": "Français",
      "languageEn": "Anglais",
      "languageEs": "Espagnol",
      "languageDe": "Allemand",
      "languageNl": "Néerlandais",
      "languagePt": "Portugais"
    },
    en: {
      "contactTitle": "Contact",
      "googlePrivacyLink": "Google Privacy Policy",
      "googleAdsLink": "Google Advertising Policies",
      "sitePreviewAlt": "Swipe Panic site preview with home, features and collection",
      "storeBannerAlt": "Swipe Panic promotional banner",
      "languageFr": "French",
      "languageEn": "English",
      "languageEs": "Spanish",
      "languageDe": "German",
      "languageNl": "Dutch",
      "languagePt": "Portuguese"
    },
    es: {
      "contactTitle": "Contacto",
      "googlePrivacyLink": "Política de privacidad de Google",
      "googleAdsLink": "Políticas publicitarias de Google",
      "sitePreviewAlt": "Vista previa del sitio Swipe Panic con inicio, funciones y colección",
      "storeBannerAlt": "Banner promocional de Swipe Panic",
      "languageFr": "Francés",
      "languageEn": "Inglés",
      "languageEs": "Español",
      "languageDe": "Alemán",
      "languageNl": "Neerlandés",
      "languagePt": "Portugués"
    },
    de: {
      "contactTitle": "Kontakt",
      "googlePrivacyLink": "Datenschutzerklärung von Google",
      "googleAdsLink": "Werberichtlinien von Google",
      "sitePreviewAlt": "Vorschau der Swipe Panic Website mit Startseite, Funktionen und Sammlung",
      "storeBannerAlt": "Werbebanner für Swipe Panic",
      "languageFr": "Französisch",
      "languageEn": "Englisch",
      "languageEs": "Spanisch",
      "languageDe": "Deutsch",
      "languageNl": "Niederländisch",
      "languagePt": "Portugiesisch"
    },
    nl: {
      "contactTitle": "Contact",
      "googlePrivacyLink": "Privacybeleid van Google",
      "googleAdsLink": "Advertentiebeleid van Google",
      "sitePreviewAlt": "Voorbeeld van de Swipe Panic site met home, functies en collectie",
      "storeBannerAlt": "Promotiebanner van Swipe Panic",
      "languageFr": "Frans",
      "languageEn": "Engels",
      "languageEs": "Spaans",
      "languageDe": "Duits",
      "languageNl": "Nederlands",
      "languagePt": "Portugees"
    },
    pt: {
      "contactTitle": "Contacto",
      "googlePrivacyLink": "Política de privacidade da Google",
      "googleAdsLink": "Políticas de publicidade da Google",
      "sitePreviewAlt": "Pré-visualização do site Swipe Panic com início, funcionalidades e coleção",
      "storeBannerAlt": "Banner promocional Swipe Panic",
      "languageFr": "Francês",
      "languageEn": "Inglês",
      "languageEs": "Espanhol",
      "languageDe": "Alemão",
      "languageNl": "Neerlandês",
      "languagePt": "Português"
    }
  };

  function copyFor(lang) {
    return {
      ...dictionary.fr,
      ...(extraDictionary.fr || {}),
      ...(dictionary[lang] || {}),
      ...(extraDictionary[lang] || {})
    };
  }

  function pageKey() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('suggest')) return 'titleSuggest';
    if (path.includes('privacy')) return 'titlePrivacy';
    if (path.includes('terms')) return 'titleTerms';
    if (path.includes('ugc')) return 'titleUgc';
    if (path.includes('report')) return 'titleReport';
    if (path.includes('support')) return 'titleSupport';
    return 'titleHome';
  }

  function browserLang() {
    const raw = (navigator.language || '').slice(0, 2).toLowerCase();
    return supportedLangs.includes(raw) ? raw : 'fr';
  }

  const publicCardSamples = {
    fr: [
      { mode: 'Green Flags / Red Flags', text: 'Il/Elle respecte ton temps même quand la soirée part dans tous les sens.' },
      { mode: 'Quiz · Vrai ou Faux', text: 'Le hashtag a été inventé par Instagram.' },
      { mode: 'Action / Vérité', text: 'Fais un compliment précis | Raconte ton plus grand fou rire de soirée' }
    ],
    en: [
      { mode: 'Green Flags / Red Flags', text: 'They respect your time even when the night gets chaotic.' },
      { mode: 'Quiz · True or False', text: 'The hashtag was invented by Instagram.' },
      { mode: 'Truth or Dare', text: 'Give a specific compliment | Tell your biggest party laugh' }
    ],
    es: [
      { mode: 'Green Flags / Red Flags', text: 'Respeta tu tiempo aunque la noche se vuelva caótica.' },
      { mode: 'Quiz · Verdadero o Falso', text: 'El hashtag fue inventado por Instagram.' },
      { mode: 'Verdad o Reto', text: 'Haz un cumplido concreto | Cuenta tu mayor ataque de risa en una fiesta' }
    ],
    de: [
      { mode: 'Green Flags / Red Flags', text: 'Respektiert deine Zeit, auch wenn der Abend chaotisch wird.' },
      { mode: 'Quiz · Wahr oder Falsch', text: 'Der Hashtag wurde von Instagram erfunden.' },
      { mode: 'Wahrheit / Pflicht', text: 'Mach ein genaues Kompliment | Erzähl deinen größten Party-Lacher' }
    ],
    nl: [
      { mode: 'Green Flags / Red Flags', text: 'Respecteert je tijd, zelfs als de avond chaotisch wordt.' },
      { mode: 'Quiz · Waar of Niet', text: 'De hashtag is uitgevonden door Instagram.' },
      { mode: 'Truth or Dare', text: 'Geef een concreet compliment | Vertel je grootste lachmoment op een feestje' }
    ],
    pt: [
      { mode: 'Green Flags / Red Flags', text: 'Respeita o teu tempo mesmo quando a noite fica caótica.' },
      { mode: 'Quiz · Verdadeiro ou Falso', text: 'O hashtag foi inventado pelo Instagram.' },
      { mode: 'Verdade / Desafio', text: 'Faz um elogio específico | Conta a tua maior gargalhada numa festa' }
    ]
  };

  function getLang() {
    const saved = localStorage.getItem('sp_lang');
    if (supportedLangs.includes(saved)) return saved;
    return browserLang();
  }

  function syncSuggestionLanguage(lang) {
    const select = document.getElementById('suggest-lang');
    if (select && !select.dataset.userTouched && supportedLangs.includes(lang)) {
      select.value = lang;
    }
  }

  function renderRandomCardPreview(lang) {
    const modeNode = document.querySelector('[data-random-card-mode]');
    const textNode = document.querySelector('[data-random-card-text]');
    if (!modeNode || !textNode) return;
    const samples = publicCardSamples[lang] || publicCardSamples.en || [];
    const copy = copyFor(lang);
    if (!samples.length) {
      modeNode.textContent = copy.modeClassic || 'Green Flags / Red Flags';
      textNode.textContent = copy.randomCardFallback || '';
      return;
    }
    const sample = samples[Math.floor(Math.random() * samples.length)];
    modeNode.textContent = sample.mode;
    textNode.textContent = sample.text;
  }

  function setText(lang) {
    const copy = copyFor(lang);
    document.documentElement.lang = lang;
    document.title = copy[pageKey()] || document.title;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (copy[key]) node.textContent = copy[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.getAttribute('data-i18n-placeholder');
      if (copy[key]) node.setAttribute('placeholder', copy[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
      const key = node.getAttribute('data-i18n-alt');
      if (copy[key]) node.setAttribute('alt', copy[key]);
    });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });
    syncSuggestionLanguage(lang);
    updateFormatHelp(lang);
    renderRandomCardPreview(lang);
  }

  const blockedKeywords = [
    'kill', 'tuer', 'matar', 'töten', 'doden', 'assassin', 'murder', 'suicide', 'suicid',
    'terroris', 'attentat', 'racist', 'raciste', 'racista', 'rassist', 'nazi', 'hitler',
    'fascist', 'fasciste', 'genocide', 'génocide', 'genocidio', 'homophob', 'transphob',
    'antisemit', 'drogue', 'cocaine', 'cocaïne', 'kokain', 'heroin', 'heroïne', 'pedophil',
    'pédophil', 'pedófil', 'pädoph', 'pedofil', 'incest', 'inceste', 'incesto', 'porn', 'pornograph'
  ];
  const urlPattern = /https?:\/\/|www\.|\.(com|fr|org|net)\b/i;
  const longDigitsPattern = /\d{8,}/;
  const suggestionCooldownMs = 10 * 60 * 1000;

  function getSuggestionFields() {
    return {
      mode: document.getElementById('suggest-mode')?.value || 'Classic',
      classicType: document.getElementById('suggest-classic-type')?.value || 'red_flag',
      cardLang: document.getElementById('suggest-lang')?.value || getLang(),
      idea: document.getElementById('suggest-idea')?.value.trim() || '',
      note: document.getElementById('suggest-note')?.value.trim() || '',
    };
  }

  function isSocialMode(mode) {
    return mode === 'Social' || mode.toLowerCase().includes('action') || mode.toLowerCase().includes('truth');
  }

  function suggestionModeKey(mode) {
    if (mode === 'Quiz') return 'quiz';
    if (isSocialMode(mode)) return 'social';
    return 'classic';
  }

  function targetPackForMode(mode) {
    const key = suggestionModeKey(mode);
    if (key === 'quiz') return 'quiz_pack_v1';
    if (key === 'social') return 'party_pack_v1';
    return 'dating_pack';
  }

  function compactId(prefix) {
    const random = Math.random().toString(36).slice(2, 8);
    return prefix + '_' + new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14) + '_' + random;
  }

  function suggestionSubject(fields) {
    return '[SwipePanic][CARD_SUGGESTION][site][' + suggestionModeKey(fields.mode) + '][' + fields.cardLang + ']';
  }

  function buildSuggestionDraft(fields) {
    const key = suggestionModeKey(fields.mode);
    const draft = {
      schema_version: 1,
      suggestion_id: compactId('suggestion'),
      source: 'site_suggest',
      status: 'draft',
      mode: key,
      pack_id: targetPackForMode(fields.mode),
      source_locale: fields.cardLang,
      needs_translation: true,
      needs_review: true,
    };

    if (key === 'quiz') {
      const answer = fields.idea.trim().startsWith('+');
      draft.type = answer ? 'green_flag' : 'red_flag';
      draft.answer = answer;
      draft.text = fields.idea.replace(/^[+-]\s*/, '').trim();
    } else if (key === 'social') {
      const parts = fields.idea.split('|').map((part) => part.trim());
      draft.action_text = parts[0];
      draft.truth_text = parts[1];
      draft.text = parts[0] + ' | ' + parts[1];
    } else {
      draft.type = fields.classicType;
      draft.text = fields.idea;
    }

    if (fields.note) draft.note = fields.note;
    return draft;
  }

  function updateFormatHelp(lang) {
    const help = document.getElementById('suggest-format-help');
    const classicTypeField = document.getElementById('suggest-classic-type-field');
    if (!help) return;
    const copy = copyFor(lang);
    const { mode } = getSuggestionFields();
    if (classicTypeField) classicTypeField.hidden = suggestionModeKey(mode) !== 'classic';
    if (mode === 'Quiz') help.textContent = copy.formatHelpQuiz;
    else if (isSocialMode(mode)) help.textContent = copy.formatHelpSocial;
    else help.textContent = copy.formatHelpClassic;
  }

  function validateSuggestion(lang) {
    const copy = copyFor(lang);
    const { mode, idea, note } = getSuggestionFields();
    const checkedText = (idea + '\n' + note).toLowerCase();
    if (idea.length < 10) return copy.invalidTooShort;
    if (idea.length > 180) return copy.invalidTooLong;
    if (urlPattern.test(checkedText)) return copy.invalidLink;
    if (longDigitsPattern.test(checkedText)) return copy.invalidPhone;
    if (blockedKeywords.some((word) => checkedText.includes(word))) return copy.invalidBlocked;
    if (mode === 'Quiz' && !/^[+-]\s*\S/.test(idea)) return copy.invalidQuizPrefix;
    if (isSocialMode(mode)) {
      const parts = idea.split('|').map((part) => part.trim());
      if (parts.length !== 2 || parts.some((part) => part.length < 3)) return copy.invalidSocialPair;
    }
    return null;
  }

  function markSuggestionPrepared() {
    localStorage.setItem('sp_last_suggestion_at', String(Date.now()));
  }

  function isSuggestionCoolingDown() {
    const last = Number(localStorage.getItem('sp_last_suggestion_at') || '0');
    return last > 0 && Date.now() - last < suggestionCooldownMs;
  }

  function suggestionText(lang) {
    const copy = copyFor(lang);
    const fields = getSuggestionFields();
    const { mode, classicType, cardLang, idea, note } = fields;
    const validationError = validateSuggestion(lang);
    if (validationError) return { error: validationError };
    const modeKey = suggestionModeKey(mode);
    const draft = buildSuggestionDraft(fields);
    const socialParts = isSocialMode(mode) ? idea.split('|').map((part) => part.trim()) : null;
    const quizAnswer = mode === 'Quiz' ? (idea.startsWith('+') ? 'True / Vrai' : 'False / Faux') : null;
    return [
      copy.suggestionHeader,
      '',
      'ROUTING',
      'Schema-Version: 1',
      'Source: site_suggest',
      'Category: card_suggestion',
      'Mode: ' + modeKey,
      'Language: ' + cardLang,
      'Pack target: ' + draft.pack_id,
      modeKey === 'classic' ? 'Green / Red type: ' + classicType : '',
      copy.safeCheck,
      '',
      'SUMMARY',
      'Mode: ' + modeKey,
      'Language: ' + cardLang,
      'Card:',
      modeKey === 'quiz' ? draft.text : idea,
      '',
      quizAnswer ? 'Quiz answer: ' + quizAnswer : '',
      socialParts ? 'Action/Dare: ' + socialParts[0] + '\nTruth: ' + socialParts[1] : '',
      '',
      note ? 'Note:\n' + note : '',
      '',
      'JSON_DRAFT',
      JSON.stringify(draft, null, 2),
    ].filter(Boolean).join('\n');
  }

  async function copySuggestion(lang) {
    const copy = copyFor(lang);
    const result = suggestionText(lang);
    const status = document.getElementById('suggest-status');
    if (!result) {
      if (status) status.textContent = copy.missingIdea;
      return null;
    }
    if (result.error) {
      if (status) status.textContent = result.error;
      return null;
    }
    const text = result;
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    if (status) status.textContent = copy.copied;
    return text;
  }

  function wireSuggestion(lang) {
    const form = document.getElementById('suggest-form');
    const copyButton = document.getElementById('copy-suggestion');
    const modeSelect = document.getElementById('suggest-mode');
    const langSelect = document.getElementById('suggest-lang');
    if (!form) return;
    updateFormatHelp(lang);
    modeSelect?.addEventListener('change', () => updateFormatHelp(getLang()));
    langSelect?.addEventListener('change', () => { langSelect.dataset.userTouched = '1'; });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const copy = dictionary[getLang()] || dictionary.fr;
      const status = document.getElementById('suggest-status');
      if (isSuggestionCoolingDown()) {
        if (status) status.textContent = copy.spamWait;
        return;
      }
      const text = await copySuggestion(getLang());
      if (!text) return;
      markSuggestionPrepared();
      window.location.href = 'mailto:support@swipepanic.app?subject=' + encodeURIComponent(suggestionSubject(getSuggestionFields())) + '&body=' + encodeURIComponent(text);
    });
    copyButton?.addEventListener('click', () => copySuggestion(getLang()));
  }

  const lang = getLang();
  setText(lang);
  wireSuggestion(lang);
  const randomCardButton = document.getElementById('random-card-button');
  if (randomCardButton) {
    randomCardButton.addEventListener('click', () => renderRandomCardPreview(getLang()));
  }
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.getAttribute('data-lang') || 'fr';
      localStorage.setItem('sp_lang', next);
      setText(next);
    });
  });
})();
