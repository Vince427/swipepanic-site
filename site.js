(function () {
  const supportedLangs = ["fr","en","es","de","nl","pt"];
  const dictionary = {
  "fr": {
    "navPlayOnline": "🎮 Jouer en ligne",
    "heroPlayOnline": "⚡ Jouer en ligne",
    "badgeColoc": "🏠 NOUVEAU · Débat",
    "badgeMoney": "💰 NOUVEAU · Débat",
    "badgeToxic": "🚩 Débat Relation",
    "badgeHalloween": "🎃 Automne & Frissons",
    "badgeWinter": "❄️ Fêtes & Réveillon",
    "badgeSchool": "🎒 Campus & Étudiants",
    "packChipColoc": "🏠 Colocs & Voisins",
    "packChipMoney": "💰 Argent & Radins",
    "packChipToxic": "🚩 Toxique ou Légitime ?",
    "packChipGenZ": "⚡ Gen Z vs Millennials",
    "packChipDating": "❤️ Dating & Séduction",
    "packChipParty": "🎉 Soirée / Action ou Vérité",
    "packChipQuiz": "🧠 Quiz & Culture G",
    "packChipOffice": "💼 Travail & Bureau",
    "packChipGym": "🏋️ Salle de Sport & Fitness",
    "packChipClash": "🔥 Clash Hommes vs Femmes",
    "packChipVacation": "✈️ Vacances & Voyage",
    "packChipHalloween": "🎃 Spécial Halloween",
    "packChipWinter": "❄️ Fêtes d'Hiver",
    "packChipSchool": "🎒 La Rentrée & Campus",
    "packChipValentines": "💘 Saint-Valentin",
    "packChipSummer": "☀️ Soirées d'Été & Plage",
    "packChipAll": "🎲 Tous les packs (Mix)",
    "cards35": "35 cartes",
    "cards50": "50 cartes",
    "cards100": "100 cartes",
    "cards104": "104 cartes",
    "cards904": "904 cartes",
    "suggestionSubject": "Suggestion carte Swipe Panic",

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
    "themePickerLabel": "🎨 Ambiance :",
    "themeClassic": "Classique",
    "themeHalloween": "Halloween",
    "themeWinter": "Fêtes d'Hiver",
    "modeDuel": "Duel Flash",
    "duelBadge": "⚡ 1 TÉLÉPHONE · 2 JOUEURS",
    "duelCopy": "Jouez face-à-face sur le même écran : chacun vote en secret, révélation instantanée d'accord ou de clash et score de complicité !",
    "featuresTitle": "Des choix qui lancent le débat",
    "featuresCopy": "Swipe Panic reste jouable sans compte cloud : solo, pass-and-play et Wi-Fi local sont pensés pour les soirées où tout doit aller vite.",
    "classicCopy": "Swipe les red flags et green flags, puis découvre le profil de la partie.",
    "quizCopy": "Vrai ou faux, 20 cartes, 50 cartes ou Max, avec chrono de récap seulement.",
    "partyCopy": "Action ou Vérité, packs amis, votes locaux et récap clair.",
    "navPacks": "Packs",
    "seasonalTitle": "Packs Saisonniers & Thématiques",
    "seasonalBannerHalloween": "🎃 SPÉCIAL HALLOWEEN · 35 dilemmes frissons et fous rires entre potes !",
    "seasonalBannerHalloweenCta": "⚡ Jouer ce pack",
    "seasonalBannerWinter": "❄️ FÊTES D'HIVER · 35 dilemmes de réveillon, cadeaux gênants et raclette !",
    "seasonalBannerWinterCta": "⚡ Jouer ce pack",
    "packHalloweenTitle": "🎃 Spécial Halloween",
    "packHalloweenDesc": "35 dilemmes frissons et fous rires entre potes : maisons hantées, déguisements douteux, films d'horreur et bonbons volés.",
    "packWinterTitle": "❄️ Fêtes d'Hiver",
    "packWinterDesc": "35 dilemmes de fin d'année : réveillons en famille, cadeaux d'entreprise gênants, pulls moches et raclette à volonté.",
    "packSchoolTitle": "🎒 La Rentrée & Campus",
    "packSchoolDesc": "35 dilemmes étudiants et vie active : réveil à 7h, amphis bondés, colocataires lunatiques et organisation en carton.",
    "playPackBtn": "⚡ Jouer ce pack",
    "navDailyDilemma": "⚡ Dilemme",
    "dailyDilemmaBadge": "⚡ Le Dilemme du Jour",
    "dilemmaAccept": "J'accepte",
    "dilemmaReject": "Je refuse",
    "dailyYourVote": "Ton vote :",
    "dailyConsensusAccept": "{pct}% Acceptent",
    "dailyConsensusReject": "{pct}% Refusent",
    "dailyConsensusSample": "Basé sur {sample} votes vérifiés",
    "countryThresholdHint": "✓ Vote comptabilisé pour {flag} ! Les statistiques par pays apparaissent dès 15 votes.",
    "dailyDilemmaCtaSubtitle": "Chaque jour, 1 dilemme exclusif et tes stats de groupe sur l'app !",
    "dailyDilemmaStoreCta": "⚡ Jouer sur l'application",
    "almanacTitle": "📅 Almanach des 30 derniers jours",
    "almanacSubtitle": "Tes votes sur ce navigateur uniquement. L'app garde son propre historique sur ton téléphone.",
    "almanacLegendGreen": "Accepté",
    "almanacLegendRed": "Refusé",
    "almanacLegendMissed": "Non voté",
    "almanacMoodBenevolent": "Humeur : Bienveillant 😇",
    "almanacMoodUncompromising": "Humeur : Intraitable ⚖️",
    "almanacMoodBalanced": "Humeur : Équilibré ⚖️",
    "almanacMoodUnknown": "Humeur : En observation... ⏳",
    "almanacStreakCount": "🔥 Série : {count} jour(s)",
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
    "privacyVotesTitle": "Votes et Consensus mondial",
    "privacyVotesCopy": "Lorsque vous participez au consensus mondial (sur le web ou dans l'app), seul votre choix de carte (Green Flag / Red Flag), le pays et la langue choisis sont transmis de manière strictement anonyme pour calculer les statistiques globales. Aucun identifiant personnel, nom ou compte n'est collecté.",
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
    "ugcStepDuelTitle": "⚡ Le Mode Face-à-Face (Duel Flash) : 1 Téléphone, 2 Joueurs",
    "ugcStepDuelIntro": "Le mode ultime pour tester votre complicité en couple ou entre potes sans attendre :",
    "ugcStepDuelDetails": "<strong>Comment ça marche ?</strong> Posez le smartphone à plat entre vous deux sur la table. L'écran se sépare en deux (la moitié haute pivote à 180° pour le joueur d'en face). Les 2 joueurs votent simultanément en secret. Dès que les deux ont voté : flash et révélation instantanée ! <em>Accord Parfait 🎉</em> ou <em>Clash 💥</em>. À la fin des 10 dilemmes, découvrez votre pourcentage de complicité et votre titre humoristique (Âmes Sœurs, Terrain d'entente ou Zone de guerre) !",
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
    "titleSupport": "Support - Swipe Panic",
    "titleLive": "Tu as vu le LIVE — voici le jeu - Swipe Panic",
    "titleChangelog": "Historique des versions - Swipe Panic",
    "title404": "Page introuvable - Swipe Panic",
    "navHowToPlay": "Comment jouer",
    "navLive": "Vu en LIVE",
    "navChangelog": "Versions",
    "liveKicker": "Tu as vu le LIVE TikTok ?",
    "liveHero": "Voici le jeu",
    "liveIntro": "Swipe Panic est un party game offline-first : pas de compte, pas de cloud. Tu swipes des cartes, tu votes, tu obtiens un récap privé. Cinq minutes pour révéler ton groupe.",
    "liveModesTitle": "3 modes de jeu",
    "liveModeClassicDesc": "Swipe red flags et green flags sur des situations de dating, puis découvre le profil de la partie.",
    "liveModeQuizDesc": "Vrai ou faux, 20 à max cartes, avec chrono de récap. Parfait pour pimenter une soirée.",
    "liveModePartyDesc": "Action ou Vérité, packs amis, votes locaux et récap clair en fin de partie.",
    "liveSetupsTitle": "3 façons de jouer",
    "liveSetupSolo": "Solo",
    "liveSetupSoloDesc": "Lance une partie en solo pour découvrir le jeu à ton rythme.",
    "liveSetupPassPlay": "Téléphone partagé (Pass & Play)",
    "liveSetupPassPlayDesc": "Un seul téléphone, plusieurs joueurs : on se passe le téléphone, chaque joueur vote en cachette.",
    "liveSetupWifi": "Wi-Fi local (sans Internet)",
    "liveSetupWifiDesc": "Chacun joue sur son propre téléphone, connectés au même réseau local. Aucun compte requis.",
    "liveDownloadTitle": "Télécharge Swipe Panic",
    "liveDownloadCta": "Disponible gratuitement sur Google Play",
    "liveConsensusTitle": "Comment le LIVE se connecte à l'appli",
    "liveConsensusStep1Title": "Le streamer affiche une carte",
    "liveConsensusStep1Desc": "Une carte Swipe Panic apparaît en overlay OBS sur le stream. Tout le monde voit la même situation.",
    "liveConsensusStep2Title": "Les viewers votent dans le chat",
    "liveConsensusStep2Desc": "🟢 pour Green Flag, 🔴 pour Red Flag — directement dans les commentaires TikTok.",
    "liveConsensusStep3Title": "L'appli te montre comment des milliers ont voté",
    "liveConsensusStep3Desc": "Les stats de consensus apparaissent dans le récap : comment ton pays a voté, et ce que pensent les autres.",
    "liveConsensusNote": "Note : le consensus est une photo périodique, pas un résultat en temps réel.",
    "liveModerationTitle": "Des cartes officielles, pas du hasard",
    "liveModerationCopy": "Les cartes officielles sont relues et validées par l'équipe — elles ne viennent pas d'inconnus sur Internet. Les packs créés par les joueurs restent privés dans leur groupe : personne d'autre ne les voit ni ne les reçoit.",
    "changelogTitle": "Évolutions et corrections",
    "changelogIntro": "Historique des mises à jour de Swipe Panic.",
    "cl191changes": "<li>Invitation de table en soirée par QR Code Google Play instantané : disponible sur l'écran de récapitulatif avec modale plein écran pour installer l'application en un éclair entre potes.</li><li>Nouveau logo d'accueil haute fidélité avec halo néon immersif et animations fluidifiées.</li><li>Générateur web officiel de trailers HD 1080p 60fps pour partager l'ambiance du jeu sur TikTok, Shorts et réseaux.</li><li>Optimisations de performance et stabilité 100% hors-ligne.</li>",
    "cl185changes": "<li>Deux nouveaux packs officiels « Débats de Société » (70 cartes en 6 langues) : « Colocs &amp; Voisins de l'Enfer » (35 cartes) et « Argent, Radins &amp; Bons Vivants » (35 cartes).</li><li>Intégration complète dans le sélecteur de pack, le mini-jeu web et le catalogue officiel (904 cartes au total).</li><li>Poursuite de la stabilisation et de la fluidité des parties hors-ligne.</li>",
    "cl184changes": "<li>Almanach Mensuel du Dilemme Quotidien : calendrier visuel 30 jours (grille 10x3) avec pastilles vert/rouge/bouclier, suivi de votre humeur mensuelle (Bienveillant, Intraitable ou Équilibré) et de votre série de jours.</li><li>Tour du monde des avis &amp; votes en direct : animation fluide du consensus mondial et découverte des pays les plus clivés sous forme de capsules tactiles.</li><li>Nouveaux packs officiels : « Toxique ou Légitime ? » et « Gen Z vs Millennials » (70 cartes clivantes en 6 langues).</li><li>Ambiance Party Juice &amp; Carte Story : décompte sonore 3-2-1 Buzz, pluie de confettis et carte profil façon « Spotify Wrapped » en 9:16.</li>",
    "cl180changes": "<li>Nouveau mode « Face-à-Face / Duel Flash » (1 Téléphone, 2 Joueurs) : écran scindé à 180°, votes simultanés masqués, révélation Accord Parfait ou Clash et calcul de votre score de complicité.</li><li>Widget Natif Android d'Écran d'Accueil : retrouvez et votez sur le Dilemme du Jour directement depuis le bureau de votre smartphone avec épinglage en 1 tap.</li><li>Ambiance et packs saisonniers officiels : thèmes immersifs Halloween et Fêtes d'Hiver, packs Saint-Valentin (35 cartes) et Soirées d'Été (35 cartes).</li><li>Partage anonyme et confort : respect strict du mode anonyme sur les images et textes partagés, détection multilingue du « Doigt pointé ».</li>",
    "cl170changes": "<li>Rôles et profils psychologiques de soirée : Inquisiteur, Cœur d'Artichaut, Petit Démon ou Ange Pur calculés selon les votes réels du groupe.</li><li>Images de partage HD au format 9:16 : partagez les dilemmes et moments les plus fous directement en Story Instagram, TikTok et WhatsApp.</li><li>Nouveaux thèmes Cyberpunk et Doré déblocables dans la collection.</li><li>Filtres de modération locale renforcés et protection de la vie privée 100% hors-ligne.</li>",
    "cl161changes": "<li>Correctif des notifications locales sur tous les appareils Android (activation fiable et rappels de dilemme à 18h30).</li><li>Accès direct au Dilemme du Jour dès l'écran d'accueil avec flamme de série et comparaison mondiale en 10 secondes.</li><li>Suppression des messages et étiquettes Live lorsqu'aucun événement n'est en cours.</li><li>Pack officiel Fêtes d'Hiver (35 cartes), profil psychologique de soirée et confort haptique amélioré.</li>",
    "cl150changes": "<li>Nouveau pack « Spécial Halloween » : 35 dilemmes inédits frissons et fous rires entre potes.</li><li>Thème visuel immersif Halloween : ambiance nuit d'Halloween et orange citrouille néon.</li><li>Dilemme Express du Jour : Bouclier anti-rupture de série hebdomadaire et 4 badges collectors à débloquer.</li><li>Pack Apéro du Week-End : sélection festive automatique chaque vendredi et macaron sur l'accueil.</li><li>Clarté des votes du Dilemme : boutons et jauges de consensus 100% lisibles et punchy.</li>",
    "cl140changes": "<li>Nouveau pack « Spécial Rentrée » : 35 dilemmes inédits sur la vie étudiante, les amphis, la colocation et le réveil à 7h.</li><li>Manches rapides de 10 cartes : lancez le débat et les rires en moins de 2 minutes par défaut.</li><li>Accueil et relance immédiate : bouton de lancement principal accessible sans scroller et bouton express pour rejouer avec votre dernier groupe d'amis.</li><li>Écran de résultat épuré : mise en avant du moment le plus marquant et bouton instantané « Encore 10 cartes » ou « Partager le résumé ».</li><li>Confort de jeu et publicité apaisée : zéro coupure publicitaire sur la première partie, affichage calme et respect du rythme de jeu.</li>",
    "cl130changes": "<li>Catalogue de 22 succès de gameplay : débloquez des trophées pour vos parties multijoueur, quiz, créations de packs et votes quotidiens.</li><li>Nouvelle collection « Vos Tops 🌟 » et « Vos Flops 💀 » pour immortaliser vos cartes favorites.</li><li>Titres de fin de manche améliorés (« Équipe très tolérante » / « Le jury impitoyable »).</li><li>Mode Wi-Fi local LAN et stabilité du Dilemme du Jour renforcés.</li>",
    "cl120changes": "<li>Retrouve ta bande (« Mes Groupes ») : L'application retient tes potes de jeu et compte vos soirées passées ensemble.</li><li>Relance en 1 clic : Nouveau bouton sur l'accueil pour rejouer directement avec ton dernier groupe et ton pack favori.</li><li>Le mini-jeu débarque sur le web : Joue et fais découvrir Swipe Panic à tes potes directement depuis le navigateur, sans rien installer.</li><li>Un dilemme inédit chaque jour : Chaque matin, découvre une nouvelle situation unique pour lancer le débat.</li><li>Consensus mondial et par pays : Compare tes choix avec ceux des autres joueurs et découvre ce que pense ton pays !</li>",
    "cl110changes": "<li>Rejoue le LIVE : le pack du live est proposé direct après l'intro, et tu rejoues le deck exact du live.</li><li>Badge LIVE et compte à rebours sur le pack de la semaine.</li><li>Comparaison « le streamer vs toi » en fin de partie.</li><li>Rappel optionnel quand un live est prévu.</li>",
    "cl104changes": "<li>Aperçu de pack avant de lancer : intensité, nombre de cartes et un aperçu swipeable sans spoiler pour sentir le ton.</li><li>Lancement à plusieurs simplifié : Téléphone partagé (Pass &amp; Play) proposé par défaut, avec une ligne expliquant le déroulé (et « pas de score, juste vos réactions »).</li><li>Entrée « Vu les cartes sur le LIVE ? » sur l'accueil, qui propose directement le pack joué pendant le live.</li><li>Consensus par pays mis en avant (ton pays vs le monde).</li>",
    "cl103changes": "<li>Statistiques Live consensus en temps réel sur l'écran de résultats (synchronisation statique depuis le site).</li><li>Renommage du mode Social en « Action ou Vérité » (Truth or Dare).</li><li>Cache de secours automatique pour les stats Live en cas d'indisponibilité réseau.</li><li>Affichage des stats de consensus par carte dans le récap de partie.</li>",
    "changelogVersionLabel": "Version",
    "changelogDateLabel": "Date",
    "changelogChangesLabel": "Changements",
    "notFoundTitle": "Page introuvable",
    "notFoundCopy": "Cette page n'existe pas ou a été déplacée.",
    "notFoundHome": "Retour à l'accueil",
    "notFoundHowToPlay": "Comment jouer",
    "notFoundLive": "Vu en LIVE"
  },
  "en": {
    "navPlayOnline": "🎮 Play Online",
    "heroPlayOnline": "⚡ Play Online",
    "badgeColoc": "🏠 NEW · Debate",
    "badgeMoney": "💰 NEW · Debate",
    "badgeToxic": "🚩 Relationship Debate",
    "badgeHalloween": "🎃 Fall & Spooky",
    "badgeWinter": "❄️ Holidays & NYE",
    "badgeSchool": "🎒 Campus & Students",
    "packChipColoc": "🏠 Roommates & Neighbors",
    "packChipMoney": "💰 Money & Big Spenders",
    "packChipToxic": "🚩 Toxic or Valid?",
    "packChipGenZ": "⚡ Gen Z vs Millennials",
    "packChipDating": "❤️ Dating & Seduction",
    "packChipParty": "🎉 Party / Truth or Dare",
    "packChipQuiz": "🧠 Trivia & General Quiz",
    "packChipOffice": "💼 Office & Work",
    "packChipGym": "🏋️ Gym & Fitness",
    "packChipClash": "🔥 Men vs Women Clash",
    "packChipVacation": "✈️ Vacation & Travel",
    "packChipHalloween": "🎃 Halloween Special",
    "packChipWinter": "❄️ Winter Holidays",
    "packChipSchool": "🎒 Back to School & Campus",
    "packChipValentines": "💘 Valentine's Day",
    "packChipSummer": "☀️ Summer Party & Beach",
    "packChipAll": "🎲 All Packs (Mix)",
    "cards35": "35 cards",
    "cards50": "50 cards",
    "cards100": "100 cards",
    "cards104": "104 cards",
    "cards904": "904 cards",
    "suggestionSubject": "Swipe Panic Card Suggestion",

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
    "themePickerLabel": "🎨 Theme:",
    "themeClassic": "Classic",
    "themeHalloween": "Halloween",
    "themeWinter": "Winter Holidays",
    "modeDuel": "Flash Duel",
    "duelBadge": "⚡ 1 PHONE · 2 PLAYERS",
    "duelCopy": "Play head-to-head on the same screen: vote simultaneously in secret, instant reveal of harmony or clash and compatibility score!",
    "featuresTitle": "Choices that start the debate",
    "featuresCopy": "Swipe Panic works without a cloud account: solo, pass-and-play and local Wi-Fi are built for fast party sessions.",
    "classicCopy": "Swipe red flags and green flags, then discover the session profile.",
    "quizCopy": "True or false, 20 cards, 50 cards or Max, with a recap stopwatch only.",
    "partyCopy": "Truth or Dare, friends packs, local votes and a clean recap.",
    "navPacks": "Packs",
    "seasonalTitle": "Seasonal & Thematic Packs",
    "seasonalBannerHalloween": "🎃 HALLOWEEN SPECIAL · 35 spooky & hilarious party dilemmas with friends!",
    "seasonalBannerHalloweenCta": "⚡ Play this pack",
    "seasonalBannerWinter": "❄️ WINTER HOLIDAYS · 35 festive dilemmas: awkward dinners, gifts & fun!",
    "seasonalBannerWinterCta": "⚡ Play this pack",
    "packHalloweenTitle": "🎃 Halloween Special",
    "packHalloweenDesc": "35 spooky and hilarious party dilemmas: haunted houses, questionable costumes, horror movies, and stolen candy.",
    "packWinterTitle": "❄️ Winter Holidays",
    "packWinterDesc": "35 holiday dilemmas: awkward family dinners, embarrassing corporate gifts, ugly sweaters, and endless comfort food.",
    "packSchoolTitle": "🎒 Back to School & Campus",
    "packSchoolDesc": "35 campus and student dilemmas: 7 AM alarms, crowded lecture halls, quirky roommates, and chaotic study sessions.",
    "playPackBtn": "⚡ Play this pack",
    "navDailyDilemma": "⚡ Dilemma",
    "dailyDilemmaBadge": "⚡ Daily Dilemma",
    "dilemmaAccept": "I accept",
    "dilemmaReject": "I reject",
    "dailyYourVote": "Your vote:",
    "dailyConsensusAccept": "{pct}% Accept",
    "dailyConsensusReject": "{pct}% Reject",
    "dailyConsensusSample": "Based on {sample} verified votes",
    "countryThresholdHint": "✓ Vote recorded for {flag}! Country stats appear once 15 votes are reached.",
    "dailyDilemmaCtaSubtitle": "Every day, 1 exclusive dilemma and your party stats on the app!",
    "dailyDilemmaStoreCta": "⚡ Play on the app",
    "almanacTitle": "📅 30-Day Dilemma Almanac",
    "almanacSubtitle": "Votes on this browser only. The app keeps its own history on your phone.",
    "almanacLegendGreen": "Accepted",
    "almanacLegendRed": "Rejected",
    "almanacLegendMissed": "Missed",
    "almanacMoodBenevolent": "Mood: Benevolent 😇",
    "almanacMoodUncompromising": "Mood: Uncompromising ⚖️",
    "almanacMoodBalanced": "Mood: Balanced ⚖️",
    "almanacMoodUnknown": "Mood: Observing... ⏳",
    "almanacStreakCount": "🔥 Streak: {count} day(s)",
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
    "privacyVotesTitle": "Votes & Global Consensus",
    "privacyVotesCopy": "When participating in the global consensus (on the web or in the app), only your card choice (Green Flag / Red Flag), selected country and language are transmitted strictly anonymously to compute global stats. No personal identifier, name or account is collected.",
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
    "ugcStepDuelTitle": "⚡ Face-to-Face Mode (Flash Duel): 1 Phone, 2 Players",
    "ugcStepDuelIntro": "The ultimate mode to test your compatibility as a couple or with friends on the spot:",
    "ugcStepDuelDetails": "<strong>How it works:</strong> Place the phone flat between both players on the table. The screen splits in half (the top half rotates 180° for the player facing you). Both players vote in secret at the same time. As soon as both have voted: instant flash and reveal! <em>Perfect Match 🎉</em> or <em>Clash 💥</em>. After 10 cards, get your compatibility percentage and funny title (Soulmates, Common Ground, or War Zone)!",
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
    "titleSupport": "Support - Swipe Panic",
    "titleLive": "You saw the LIVE — here's the game - Swipe Panic",
    "titleChangelog": "Version history - Swipe Panic",
    "title404": "Page not found - Swipe Panic",
    "navHowToPlay": "How to play",
    "navLive": "Seen on LIVE",
    "navChangelog": "Versions",
    "liveKicker": "Saw us on TikTok LIVE?",
    "liveHero": "Here's the game",
    "liveIntro": "Swipe Panic is an offline-first party game: no account, no cloud. Swipe cards, vote, and get a private recap. Five minutes to reveal your group.",
    "liveModesTitle": "3 game modes",
    "liveModeClassicDesc": "Swipe red flags and green flags on dating situations, then discover the session profile.",
    "liveModeQuizDesc": "True or false, 20 to max cards, with a recap timer. Great for spicing up a party.",
    "liveModePartyDesc": "Truth or Dare, friends packs, local votes and a clean recap at the end.",
    "liveSetupsTitle": "3 ways to play",
    "liveSetupSolo": "Solo",
    "liveSetupSoloDesc": "Launch a solo session to discover the game at your own pace.",
    "liveSetupPassPlay": "Shared phone (Pass & Play)",
    "liveSetupPassPlayDesc": "One phone, multiple players: pass the phone around, each player votes in secret.",
    "liveSetupWifi": "Local Wi-Fi (no Internet needed)",
    "liveSetupWifiDesc": "Everyone plays on their own phone, connected to the same local network. No account required.",
    "liveDownloadTitle": "Download Swipe Panic",
    "liveDownloadCta": "Free on Google Play",
    "liveConsensusTitle": "How the LIVE connects to the app",
    "liveConsensusStep1Title": "The streamer shows a card",
    "liveConsensusStep1Desc": "A Swipe Panic card appears as an OBS overlay on the stream. Everyone sees the same situation.",
    "liveConsensusStep2Title": "Viewers vote in the chat",
    "liveConsensusStep2Desc": "🟢 for Green Flag, 🔴 for Red Flag — right in the TikTok comments.",
    "liveConsensusStep3Title": "The app shows you how thousands voted",
    "liveConsensusStep3Desc": "Consensus stats appear in your recap: how your country voted, and what others thought.",
    "liveConsensusNote": "Note: the consensus is a periodic snapshot, not a real-time result.",
    "liveModerationTitle": "Official cards, not random crowd content",
    "liveModerationCopy": "Official cards are reviewed and approved by the team — they don't come from random strangers on the Internet. Packs created by players stay private within their group: no one else sees or receives them.",
    "changelogTitle": "Updates & fixes",
    "changelogIntro": "Swipe Panic version history.",
    "cl191changes": "<li>Instant Google Play QR Code table invite: available on the party recap screen with a high-contrast fullscreen modal for friends to install the app in seconds.</li><li>Ultra-sharp home screen logo with ambient neon glow and smoother card transitions.</li><li>Official 1080p 60fps web trailer studio to capture and share party gameplay on TikTok, Shorts, and socials.</li><li>Offline performance polish and general stability improvements.</li>",
    "cl185changes": "<li>Two new official 'Society Debates' packs (70 cards in 6 languages): 'Roommates &amp; Neighbors' (35 cards) and 'Money &amp; Big Spenders' (35 cards).</li><li>Full integration into the pack selector, web mini-game, and official catalog (904 cards in total).</li><li>Continuous offline performance and gameplay polish.</li>",
    "cl184changes": "<li>Monthly Daily Dilemma Almanac: visual 30-day calendar (10x3 grid) with green/red/shield dots, tracking your monthly mood (Benevolent, Uncompromising, or Balanced) and streak.</li><li>Live World Opinions Tour &amp; smooth votes: smooth animated consensus gauge and tap-to-discover breakdown of the most divided countries.</li><li>New official packs: 'Toxic or Valid?' and 'Gen Z vs Millennials' (70 sharp cards in 6 languages).</li><li>Party Juice Vibes &amp; Story Card: dramatic 3-2-1 Buzz countdown, confetti celebrations, and 9:16 'Spotify Wrapped' personality story card.</li>",
    "cl180changes": "<li>New 'Face-to-Face / Flash Duel' mode (1 Phone, 2 Players): 180° split-screen, simultaneous secret votes, Perfect Match or Clash reveal, and chemistry score.</li><li>Native Android Home Screen Widget: view and vote on the Daily Dilemma directly from your desktop with one-tap pinning.</li><li>Seasonal themes &amp; official packs: immersive Halloween and Winter vibes, Valentine's Day (35 cards) and Summer Vibes (35 cards) packs.</li><li>Anonymous sharing &amp; comfort: strict pseudonym privacy in shared recap images, multi-language detection for finger-pointing cards.</li>",
    "cl170changes": "<li>Party personality roles: Inquisitor, Soft Heart, Little Demon, or Pure Angel computed from group votes.</li><li>HD 9:16 Story sharing images: export key recap highlights straight to Instagram, TikTok, and WhatsApp Stories.</li><li>Unlockable Cyberpunk and Golden cosmetic themes.</li><li>Enhanced local moderation filters and 100% offline privacy.</li>",
    "cl161changes": "<li>Fixed local notifications on all Android devices (reliable toggle and daily 6:30 PM dilemma reminders).</li><li>Direct access to Dilemma of the Day right on the home screen with streak counter and 10-second global comparison.</li><li>Removed ghost Live banners and badges when no real stream is scheduled.</li><li>Official Winter Holidays pack (35 cards), local party psychological profile and enhanced haptics.</li>",
    "cl150changes": "<li>Official “Halloween Special” pack: 35 brand new hilarious spooky dilemmas with friends.</li><li>Immersive Halloween visual theme: spooky night vibes and neon pumpkin accents.</li><li>Daily Express Dilemma: Weekly streak shield to protect your progress and 4 collector badges to unlock.</li><li>Rotating Weekend Party Pack: automatic festive featured pack every Friday.</li><li>Crystal clear Dilemma UX: intuitive first-person voting and detailed consensus breakdown.</li>",
    "cl140changes": "<li>New “Back to School” pack: 35 fresh dilemmas on campus life, lecture halls, roommates, and 7 AM alarms.</li><li>Fast 10-card rounds: spark debates and laughter in under 2 minutes by default.</li><li>Instant launch &amp; crew replay: prominent start button above the fold and 1-tap replay with your last squad.</li><li>Refined recap screen: highlights the round's most memorable moment with instant “10 more cards” and share buttons.</li><li>Smooth ad experience: zero ads on your first completed game, with capped, quiet transitions respecting gameplay pace.</li>",
    "cl130changes": "<li>Full catalog of 22 gameplay achievements: earn trophies for multiplayer sessions, quizzes, custom decks, and daily streaks.</li><li>New Collection tabs “Your Tops 🌟” and “Your Flops 💀” to highlight your most memorable cards.</li><li>Polished end-of-round titles (“Easygoing squad” / “Ruthless jury”).</li><li>Improved local Wi-Fi LAN multiplayer and Daily Dilemma reliability.</li>",
    "cl120changes": "<li>Your Squad Memory (“My Crews”): The app remembers your game group and counts your party nights together.</li><li>1-Click Quick Replay: Jump right back into the action on the home screen with your last crew and favorite pack.</li><li>Web Mini-Game is here: Play and share Swipe Panic directly in your browser without installing anything.</li><li>A fresh dilemma every day: Discover a brand new situation every morning to spark the daily debate with zero repeats.</li><li>Global &amp; Country Consensus: Compare your choices with players worldwide and see where your country stands!</li>",
    "cl110changes": "<li>Replay the LIVE: the live pack is offered right after the intro, and you replay the exact live deck.</li><li>LIVE badge and countdown on the weekly pack.</li><li>“Streamer vs you” comparison at the end of a game.</li><li>Optional reminder when a live is scheduled.</li>",
    "cl104changes": "<li>Pack preview before you start: intensity, card count and a spoiler-free swipeable preview to feel the tone.</li><li>Simpler group start: Shared Phone (Pass &amp; Play) offered by default, with a line explaining how it goes (“no score, just your reactions”).</li><li>“Saw the cards on the LIVE?” entry on the home screen, offering the pack played during the live directly.</li><li>Country consensus highlighted (your country vs the world).</li>",
    "cl103changes": "<li>Live consensus stats on the results screen (static sync from the site).</li><li>Social mode renamed to “Truth or Dare”.</li><li>Automatic fallback cache for Live stats when the network is unavailable.</li><li>Per-card consensus stats shown in the game recap.</li>",
    "changelogVersionLabel": "Version",
    "changelogDateLabel": "Date",
    "changelogChangesLabel": "Changes",
    "notFoundTitle": "Page not found",
    "notFoundCopy": "This page doesn't exist or has moved.",
    "notFoundHome": "Back to home",
    "notFoundHowToPlay": "How to play",
    "notFoundLive": "Seen on LIVE"
  },
  "es": {
    "navPlayOnline": "🎮 Jugar Online",
    "heroPlayOnline": "⚡ Jugar Online",
    "badgeColoc": "🏠 NUEVO · Debate",
    "badgeMoney": "💰 NUEVO · Debate",
    "badgeToxic": "🚩 Debate Pareja",
    "badgeHalloween": "🎃 Otoño y Terror",
    "badgeWinter": "❄️ Fiestas y Nochevieja",
    "badgeSchool": "🎒 Campus y Estudiantes",
    "packChipColoc": "🏠 Compañeros y Vecinos",
    "packChipMoney": "💰 Dinero y Tacaños",
    "packChipToxic": "🚩 ¿Tóxico o Legítimo?",
    "packChipGenZ": "⚡ Gen Z vs Millennials",
    "packChipDating": "❤️ Citas y Seducción",
    "packChipParty": "🎉 Fiesta / Acción o Verdad",
    "packChipQuiz": "🧠 Quiz y Preguntas",
    "packChipOffice": "💼 Trabajo y Oficina",
    "packChipGym": "🏋️ Gimnasio y Fitness",
    "packChipClash": "🔥 Choque Hombres vs Mujeres",
    "packChipVacation": "✈️ Vacaciones y Viajes",
    "packChipHalloween": "🎃 Especial Halloween",
    "packChipWinter": "❄️ Fiestas de Invierno",
    "packChipSchool": "🎒 Vuelta a Clases y Campus",
    "packChipValentines": "💘 San Valentín",
    "packChipSummer": "☀️ Fiestas de Verano y Playa",
    "packChipAll": "🎲 Todos los packs (Mix)",
    "cards35": "35 cartas",
    "cards50": "50 cartas",
    "cards100": "100 cartas",
    "cards104": "104 cartas",
    "cards904": "904 cartas",
    "suggestionSubject": "Sugerencia carta Swipe Panic",

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
    "themePickerLabel": "🎨 Tema:",
    "themeClassic": "Clásico",
    "themeHalloween": "Halloween",
    "themeWinter": "Fiestas de Invierno",
    "modeDuel": "Duelo Flash",
    "duelBadge": "⚡ 1 TELÉFONO · 2 JUGADORES",
    "duelCopy": "Juega cara a cara en la misma pantalla: votad simultáneamente en secreto, ¡revelación instantánea de acuerdo o choque y puntuación de complicidad!",
    "featuresTitle": "Decisiones que abren debate",
    "featuresCopy": "Swipe Panic funciona sin cuenta cloud: solo, teléfono compartido y Wi-Fi local están pensados para partidas rápidas.",
    "classicCopy": "Desliza red flags y green flags, y descubre el perfil de la partida.",
    "quizCopy": "Verdadero o falso, 20 cartas, 50 cartas o Max, con cronómetro solo para el resumen.",
    "partyCopy": "Verdad o Reto, packs de amigos, votos locales y resumen claro.",
    "navPacks": "Packs",
    "seasonalTitle": "Packs de Temporada y Temáticos",
    "seasonalBannerHalloween": "🎃 ESPECIAL HALLOWEEN · ¡35 dilemas de risas y sustos con amigos!",
    "seasonalBannerHalloweenCta": "⚡ Jugar este pack",
    "seasonalBannerWinter": "❄️ FIESTAS DE INVIERNO · ¡35 dilemas navideños y de fin de año!",
    "seasonalBannerWinterCta": "⚡ Jugar este pack",
    "packHalloweenTitle": "🎃 Especial Halloween",
    "packHalloweenDesc": "35 dilemas divertidos de terror con amigos: casas encantadas, disfraces dudosos, pelis de miedo y chuches.",
    "packWinterTitle": "❄️ Fiestas de Invierno",
    "packWinterDesc": "35 dilemas navideños y de fin de año: cenas familiares, regalos incómodos, jerséis feos y comidas eternas.",
    "packSchoolTitle": "🎒 Vuelta a Clases & Campus",
    "packSchoolDesc": "35 dilemas de campus y rutina: despertador a las 7h, clases llenas, compañeros caóticos y planes improvisados.",
    "playPackBtn": "⚡ Jugar este pack",
    "navDailyDilemma": "⚡ Dilema",
    "dailyDilemmaBadge": "⚡ El Dilema del Día",
    "dilemmaAccept": "Acepto",
    "dilemmaReject": "Rechazo",
    "dailyYourVote": "Tu voto:",
    "dailyConsensusAccept": "{pct}% Aceptan",
    "dailyConsensusReject": "{pct}% Rechazan",
    "dailyConsensusSample": "Basado en {sample} votos verificados",
    "countryThresholdHint": "✓ ¡Voto registrado para {flag}! Las estadísticas por país aparecen a partir de 15 votos.",
    "dailyDilemmaCtaSubtitle": "¡Cada día, 1 dilema exclusivo y tus estadísticas de grupo en la app!",
    "dailyDilemmaStoreCta": "⚡ Jugar en la app",
    "almanacTitle": "📅 Almanaque de los últimos 30 días",
    "almanacSubtitle": "Votos solo de este navegador. La app guarda su propio historial en tu teléfono.",
    "almanacLegendGreen": "Aceptado",
    "almanacLegendRed": "Rechazado",
    "almanacLegendMissed": "No votado",
    "almanacMoodBenevolent": "Humor: Benevolente 😇",
    "almanacMoodUncompromising": "Humor: Implacable ⚖️",
    "almanacMoodBalanced": "Humor: Equilibrado ⚖️",
    "almanacMoodUnknown": "Humor: En observación... ⏳",
    "almanacStreakCount": "🔥 Racha: {count} día(s)",
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
    "privacyVotesTitle": "Votos y Consenso Mundial",
    "privacyVotesCopy": "Al participar en el consenso mundial (en la web o en la app), solo tu elección de carta (Green Flag / Red Flag), país e idioma seleccionados se transmiten de forma estrictamente anónima para calcular estadísticas. No se recopila ningún identificador personal, nombre o cuenta.",
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
    "ugcStepDuelTitle": "⚡ Modo Cara a Cara (Duelo Flash): 1 Teléfono, 2 Jugadores",
    "ugcStepDuelIntro": "El modo definitivo para poner a prueba vuestra complicidad en pareja o entre amigos al instante:",
    "ugcStepDuelDetails": "<strong>¿Cómo funciona?</strong> Pon el smartphone plano entre los dos sobre la mesa. La pantalla se divide en dos (la mitad superior gira 180° para el jugador de enfrente). Ambos votan en secreto a la vez. En cuanto los dos votan: ¡flash y revelación inmediata! <em>¡Acuerdo Perfecto! 🎉</em> o <em>¡Choque! 💥</em>. Tras 10 dilemas, descubre tu porcentaje de complicidad y tu título divertido (Almas Gemelas, Terreno Común o Zona de Guerra).",
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
    "titleSupport": "Soporte - Swipe Panic",
    "titleLive": "Viste el LIVE — aquí está el juego - Swipe Panic",
    "titleChangelog": "Historial de versiones - Swipe Panic",
    "title404": "Página no encontrada - Swipe Panic",
    "navHowToPlay": "Cómo jugar",
    "navLive": "Visto en LIVE",
    "navChangelog": "Versiones",
    "liveKicker": "¿Nos viste en TikTok LIVE?",
    "liveHero": "Aquí está el juego",
    "liveIntro": "Swipe Panic es un party game offline-first: sin cuenta, sin nube. Desliza cartas, vota y obtén un resumen privado. Cinco minutos para revelar tu grupo.",
    "liveModesTitle": "3 modos de juego",
    "liveModeClassicDesc": "Desliza red flags y green flags en situaciones de citas, luego descubre el perfil de la partida.",
    "liveModeQuizDesc": "Verdadero o falso, de 20 a max cartas, con cronómetro de resumen. Perfecto para animar una fiesta.",
    "liveModePartyDesc": "Verdad o Reto, packs de amigos, votos locales y resumen claro al final.",
    "liveSetupsTitle": "3 formas de jugar",
    "liveSetupSolo": "Solo",
    "liveSetupSoloDesc": "Inicia una partida en solitario para descubrir el juego a tu ritmo.",
    "liveSetupPassPlay": "Teléfono compartido (pasar el teléfono)",
    "liveSetupPassPlayDesc": "Un teléfono, varios jugadores: se pasa el teléfono, cada jugador vota en secreto.",
    "liveSetupWifi": "Wi-Fi local (sin Internet)",
    "liveSetupWifiDesc": "Cada uno juega en su propio teléfono, conectados a la misma red local. Sin cuenta requerida.",
    "liveDownloadTitle": "Descarga Swipe Panic",
    "liveDownloadCta": "Gratis en Google Play",
    "liveConsensusTitle": "Cómo el LIVE se conecta a la app",
    "liveConsensusStep1Title": "El streamer muestra una carta",
    "liveConsensusStep1Desc": "Una carta de Swipe Panic aparece como overlay OBS en el stream. Todo el mundo ve la misma situación.",
    "liveConsensusStep2Title": "Los espectadores votan en el chat",
    "liveConsensusStep2Desc": "🟢 para Green Flag, 🔴 para Red Flag — directamente en los comentarios de TikTok.",
    "liveConsensusStep3Title": "La app te muestra cómo votaron miles de personas",
    "liveConsensusStep3Desc": "Las estadísticas de consenso aparecen en tu resumen: cómo votó tu país y qué pensaron los demás.",
    "liveConsensusNote": "Nota: el consenso es una foto periódica, no un resultado en tiempo real.",
    "liveModerationTitle": "Cartas oficiales, no contenido aleatorio",
    "liveModerationCopy": "Las cartas oficiales son revisadas y aprobadas por el equipo — no vienen de desconocidos en Internet. Los packs creados por jugadores se quedan privados dentro de su grupo: nadie más los ve ni los recibe.",
    "changelogTitle": "Evoluciones y correcciones",
    "changelogIntro": "Historial de versiones de Swipe Panic.",
    "cl191changes": "<li>Invitación de mesa instantánea con código QR de Google Play: disponible en el resumen de fiesta en pantalla completa para que tus amigos instalen la app en segundos.</li><li>Logotipo de inicio de alta definición con halo de neón y transiciones de cartas más fluidas.</li><li>Estudio web de trailers HD 1080p a 60 fps para compartir partidas en TikTok, Shorts y redes.</li><li>Optimizaciones de rendimiento y estabilidad 100% offline.</li>",
    "cl185changes": "<li>Dos nuevos packs oficiales de 'Debates Cotidianos' (70 cartas en 6 idiomas): 'Compañeros y Vecinos' (35 cartas) y 'Dinero y Tacaños' (35 cartas).</li><li>Integración total en el selector de packs, minijuego web y catálogo oficial (904 cartas en total).</li><li>Mejoras continuas de rendimiento y fluidez 100% offline.</li>",
    "cl184changes": "<li>Almanaque Mensual del Dilema Diario: calendario visual de 30 días (cuadrícula 10x3) con puntos de humor verde/rojo/escudo, seguimiento de tu humor mensual (Benevolente, Implacable o Equilibrado) y tu racha.</li><li>Gira Mundial de Opiniones y votos en vivo: medidor animado suave de consenso y cápsulas táctiles de los países más divididos.</li><li>Nuevos packs oficiales: «¿Tóxico o Válido?» y «Gen Z vs Millennials» (70 cartas afiladas en 6 idiomas).</li><li>Ambiente de fiesta Party Juice y Tarjeta Story: cuenta atrás 3-2-1 Buzz, lluvia de confeti y tarjeta de perfil 9:16 al estilo «Spotify Wrapped».</li>",
    "cl180changes": "<li>Nuevo modo «Cara a Cara / Duelo Flash» (1 Teléfono, 2 Jugadores): pantalla dividida a 180°, votos simultáneos ocultos, revelación de Acuerdo Perfecto o Choque y puntuación de química.</li><li>Widget Nativo de Pantalla de Inicio en Android: consulta y vota en el Dilema del Día directamente desde tu escritorio con anclaje en 1 toque.</li><li>Temas y packs de temporada oficiales: atmósfera envolvente de Halloween y Fiestas de Invierno, packs San Valentín (35 cartas) y Noches de Verano (35 cartas).</li><li>Compartir anónimo y comodidad: privacidad estricta de apodos en imágenes compartidas, detección multilingüe de cartas de señalar con el dedo.</li>",
    "cl170changes": "<li>Roles psicológicos de fiesta: Inquisidor, Corazón Blando, Pequeño Demonio o Ángel Puro calculados según los votos del grupo.</li><li>Imágenes de compartir HD en formato 9:16: exporta los momentos clave de tu resumen directo a Stories de Instagram, TikTok y WhatsApp.</li><li>Nuevos temas cosméticos desbloqueables Ciberpunk y Dorado.</li><li>Filtros de moderación local reforzados y privacidad 100% sin conexión.</li>",
    "cl161changes": "<li>Corrección de notificaciones locales en todos los dispositivos Android (activación fiable y recordatorios diarios a las 18:30).</li><li>Acceso directo al Dilema del Día en la pantalla de inicio con racha y comparación mundial en 10 segundos.</li><li>Eliminación de carteles y etiquetas Live cuando no hay evento activo.</li><li>Pack oficial Fiestas de Invierno (35 cartas), perfil psicológico de fiesta y mejor respuesta háptica.</li>",
    "cl150changes": "<li>Pack oficial «Especial Halloween»: 35 dilemas inéditos de risas y sustos con amigos.</li><li>Tema visual inmersivo de Halloween: noche terrorífica y naranja calabaza neón.</li><li>Dilema Express diario: escudo de racha semanal y 4 medallas de coleccionista.</li><li>Pack de Fin de Semana rotativo: selección festiva cada viernes.</li><li>Votación y resultados claros: interfaz de dilema más fluida y expresiva.</li>",
    "cl140changes": "<li>Nuevo pack «Vuelta a Clases»: 35 dilemas inéditos sobre la vida de campus, compañeros de piso y la alarma de las 7.</li><li>Rondas rápidas de 10 cartas: inicia debates y risas en menos de 2 minutos por defecto.</li><li>Inicio instantáneo y revancha de grupo: botón principal accesible sin scroll y revancha en 1 toque con tu último grupo.</li><li>Resumen de fin de ronda optimizado: destaca el momento más memorable con botones rápidos de revancha y compartir.</li><li>Publicidad no intrusiva: sin anuncios forzados en la primera partida y transiciones respetuosas.</li>",
    "cl130changes": "<li>Catálogo de 22 logros de juego: desbloquea trofeos en multijugador, quiz, creación de cartas y votos diarios.</li><li>Nueva colección «Tus Tops 🌟» y «Tus Flops 💀» para guardar tus cartas favoritas.</li><li>Títulos de fin de ronda mejorados («Equipo muy comprensivo» / «El jurado despiadado»).</li><li>Mejoras en el modo Wi-Fi local y estabilidad del Dilema del Día.</li>",
    "cl120changes": "<li>Tu grupo de siempre («Mis Grupos»): La app recuerda a tus amigos de juego y cuenta vuestras noches de fiesta juntos.</li><li>Volver a jugar en 1 clic: Nuevo acceso rápido en la pantalla de inicio para jugar con tu último grupo y pack favorito.</li><li>El minijuego llega a la web: Juega y comparte Swipe Panic directamente desde el navegador sin instalar nada.</li><li>Un dilema nuevo cada día: Descubre cada mañana una situación única para abrir el debate sin repetir cartas.</li><li>Consenso mundial y por países: ¡Compara tus decisiones con las del resto del mundo y descubre qué opina tu país!</li>",
    "cl110changes": "<li>Repite el LIVE: el pack del directo se ofrece justo después de la intro y repites el mazo exacto del directo.</li><li>Insignia LIVE y cuenta atrás en el pack de la semana.</li><li>Comparación «el streamer contra ti» al final de la partida.</li><li>Recordatorio opcional cuando hay un directo programado.</li>",
    "cl104changes": "<li>Vista previa del pack antes de empezar: intensidad, número de cartas y una vista deslizable sin spoilers para captar el tono.</li><li>Inicio en grupo más sencillo: Teléfono compartido (Pass &amp; Play) por defecto, con una línea que explica cómo funciona («sin puntuación, solo vuestras reacciones»).</li><li>Entrada «¿Viste las cartas en el LIVE?» en el inicio, que ofrece directamente el pack jugado durante el directo.</li><li>Consenso por país destacado (tu país contra el mundo).</li>",
    "cl103changes": "<li>Estadísticas de consenso Live en la pantalla de resultados (sincronización estática desde el sitio).</li><li>Modo Social renombrado a «Acción o Verdad» (Truth or Dare).</li><li>Caché de respaldo automática para las estadísticas Live cuando no hay red.</li><li>Estadísticas de consenso por carta en el resumen de la partida.</li>",
    "changelogVersionLabel": "Versión",
    "changelogDateLabel": "Fecha",
    "changelogChangesLabel": "Cambios",
    "notFoundTitle": "Página no encontrada",
    "notFoundCopy": "Esta página no existe o fue movida.",
    "notFoundHome": "Volver al inicio",
    "notFoundHowToPlay": "Cómo jugar",
    "notFoundLive": "Visto en LIVE"
  },
  "de": {
    "navPlayOnline": "🎮 Online Spielen",
    "heroPlayOnline": "⚡ Online Spielen",
    "badgeColoc": "🏠 NEU · Debatte",
    "badgeMoney": "💰 NEU · Debatte",
    "badgeToxic": "🚩 Beziehungs-Debatte",
    "badgeHalloween": "🎃 Herbst & Grusel",
    "badgeWinter": "❄️ Festtage & Silvester",
    "badgeSchool": "🎒 Campus & Studenten",
    "packChipColoc": "🏠 WGs & Nachbarn",
    "packChipMoney": "💰 Geld & Geizhälse",
    "packChipToxic": "🚩 Toxisch oder Legitim?",
    "packChipGenZ": "⚡ Gen Z vs Millennials",
    "packChipDating": "❤️ Dating & Flirten",
    "packChipParty": "🎉 Party / Wahrheit oder Pflicht",
    "packChipQuiz": "🧠 Quiz & Allgemeinwissen",
    "packChipOffice": "💼 Büro & Arbeit",
    "packChipGym": "🏋️ Fitnessstudio & Gym",
    "packChipClash": "🔥 Männer vs. Frauen Clash",
    "packChipVacation": "✈️ Urlaub & Reisen",
    "packChipHalloween": "🎃 Halloween Spezial",
    "packChipWinter": "❄️ Winter & Festtage",
    "packChipSchool": "🎒 Schulanfang & Campus",
    "packChipValentines": "💘 Valentinstag",
    "packChipSummer": "☀️ Sommer-Party & Strand",
    "packChipAll": "🎲 Alle Packs (Mix)",
    "cards35": "35 Karten",
    "cards50": "50 Karten",
    "cards100": "100 Karten",
    "cards104": "104 Karten",
    "cards904": "904 Karten",
    "suggestionSubject": "Kartenvorschlag Swipe Panic",

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
    "themePickerLabel": "🎨 Design:",
    "themeClassic": "Klassisch",
    "themeHalloween": "Halloween",
    "themeWinter": "Winter & Festtage",
    "modeDuel": "Blitz-Duell",
    "duelBadge": "⚡ 1 SMARTPHONE · 2 SPIELER",
    "duelCopy": "Spielt Kopf-an-Kopf auf demselben Bildschirm: stimmt gleichzeitig geheim ab, sofortige Enthüllung von Harmonie oder Clash und Kompatibilitäts-Score!",
    "featuresTitle": "Entscheidungen, die Diskussionen starten",
    "featuresCopy": "Swipe Panic funktioniert ohne Cloud-Konto: Solo, geteiltes Telefon und lokales Wi-Fi sind für schnelle Partys gemacht.",
    "classicCopy": "Swipe Red Flags und Green Flags und entdecke das Profil der Runde.",
    "quizCopy": "Wahr oder falsch, 20 Karten, 50 Karten oder Max, mit Stoppuhr nur für den Recap.",
    "partyCopy": "Wahrheit oder Pflicht, Freunde-Packs, lokale Stimmen und ein klarer Recap.",
    "navPacks": "Packs",
    "seasonalTitle": "Saisonale & Thematische Packs",
    "seasonalBannerHalloween": "🎃 HALLOWEEN-SPEZIAL · 35 gruselig-witzige Dilemmata für Partys!",
    "seasonalBannerHalloweenCta": "⚡ Dieses Pack spielen",
    "seasonalBannerWinter": "❄️ WINTER & FESTTAGE · 35 festliche Dilemmas zum Jahresende!",
    "seasonalBannerWinterCta": "⚡ Dieses Pack spielen",
    "packHalloweenTitle": "🎃 Halloween Spezial",
    "packHalloweenDesc": "35 gruselig-lustige Party-Dilemmas: Spukhäuser, fragwürdige Kostüme, Horrorfilme und geklaute Süßigkeiten.",
    "packWinterTitle": "❄️ Winter & Festtage",
    "packWinterDesc": "35 Festtagsdilemmas zum Jahresende: Familienfeiern, peinliche Firmen-Wichtelgeschenke, hässliche Pullover und Festessen.",
    "packSchoolTitle": "🎒 Schulanfang & Campus",
    "packSchoolDesc": "35 Campus- und Studenten-Dilemmas: Wecker um 7 Uhr, überfüllte Hörsäle, chaotische WGs und verplante Tage.",
    "playPackBtn": "⚡ Dieses Pack spielen",
    "navDailyDilemma": "⚡ Dilemma",
    "dailyDilemmaBadge": "⚡ Das Dilemma des Tages",
    "dilemmaAccept": "Ich akzeptiere",
    "dilemmaReject": "Ich lehne ab",
    "dailyYourVote": "Deine Stimme:",
    "dailyConsensusAccept": "{pct}% Akzeptieren",
    "dailyConsensusReject": "{pct}% Lehnen ab",
    "dailyConsensusSample": "Basierend auf {sample} verifizierten Stimmen",
    "countryThresholdHint": "✓ Stimme für {flag} gezählt! Länderstatistiken erscheinen ab 15 Stimmen.",
    "dailyDilemmaCtaSubtitle": "Jeden Tag 1 exklusives Dilemma und deine Gruppen-Statistiken in der App!",
    "dailyDilemmaStoreCta": "⚡ In der App spielen",
    "almanacTitle": "📅 30-Tage-Dilemma-Almanach",
    "almanacSubtitle": "Nur Stimmen aus diesem Browser. Die App speichert ihren eigenen Verlauf auf deinem Handy.",
    "almanacLegendGreen": "Angenommen",
    "almanacLegendRed": "Abgelehnt",
    "almanacLegendMissed": "Verpasst",
    "almanacMoodBenevolent": "Stimmung: Wohlwollend 😇",
    "almanacMoodUncompromising": "Stimmung: Unnachgiebig ⚖️",
    "almanacMoodBalanced": "Stimmung: Ausgeglichen ⚖️",
    "almanacMoodUnknown": "Stimmung: In Beobachtung... ⏳",
    "almanacStreakCount": "🔥 Serie: {count} Tag(e)",
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
    "privacyVotesTitle": "Abstimmungen & Weltweiter Konsens",
    "privacyVotesCopy": "Bei der Abstimmung über eine Situation (im Web oder in der App) werden nur deine Kartenauswahl (Green Flag / Red Flag), das gewählte Land und die Sprache streng anonym übermittelt, um Statistiken zu berechnen. Es werden keine Gerätekennungen, Namen oder Konten erfasst.",
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
    "ugcStepDuelTitle": "⚡ Face-to-Face-Modus (Blitz-Duell): 1 Smartphone, 2 Spieler",
    "ugcStepDuelIntro": "Der ultimative Modus, um eure Verbundenheit als Paar oder unter Freunden direkt auf die Probe zu stellen:",
    "ugcStepDuelDetails": "<strong>Wie funktioniert es?</strong> Legt das Smartphone flach zwischen euch auf den Tisch. Der Bildschirm teilt sich in zwei Hälften (die obere Hälfte dreht sich um 180° für den Mitspieler gegenüber). Beide Spieler stimmen gleichzeitig geheim ab. Sobald beide gestimmt haben: Sofortiger Flash und Enthüllung! <em>Perfektes Match 🎉</em> oder <em>Clash 💥</em>. Nach 10 Dilemmas seht ihr euren Kompatibilitäts-Prozentsatz und lustigen Titel (Seelenverwandte, Goldene Mitte oder Kriegsgebiet)!",
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
    "titleSupport": "Support - Swipe Panic",
    "titleLive": "Du hast das LIVE gesehen — hier ist das Spiel - Swipe Panic",
    "titleChangelog": "Versionsverlauf - Swipe Panic",
    "title404": "Seite nicht gefunden - Swipe Panic",
    "navHowToPlay": "Spielanleitung",
    "navLive": "Im LIVE gesehen",
    "navChangelog": "Versionen",
    "liveKicker": "Hast du uns auf TikTok LIVE gesehen?",
    "liveHero": "Hier ist das Spiel",
    "liveIntro": "Swipe Panic ist ein Offline-First-Partyspiel: kein Konto, keine Cloud. Swipe Karten, stimme ab und erhalte eine private Zusammenfassung. Fünf Minuten, um deine Gruppe zu enthüllen.",
    "liveModesTitle": "3 Spielmodi",
    "liveModeClassicDesc": "Swipe Red Flags und Green Flags bei Dating-Situationen, dann entdecke das Profil der Runde.",
    "liveModeQuizDesc": "Wahr oder falsch, 20 bis max Karten, mit Recap-Stoppuhr. Perfekt für ausgelassene Partys.",
    "liveModePartyDesc": "Wahrheit oder Pflicht, Freunde-Packs, lokale Stimmen und ein klarer Recap am Ende.",
    "liveSetupsTitle": "3 Spielvarianten",
    "liveSetupSolo": "Solo",
    "liveSetupSoloDesc": "Starte eine Solo-Runde, um das Spiel in deinem eigenen Tempo kennenzulernen.",
    "liveSetupPassPlay": "Geteiltes Handy (Pass & Play)",
    "liveSetupPassPlayDesc": "Ein Handy, mehrere Spieler: das Handy wird weitergegeben, jeder stimmt im Geheimen ab.",
    "liveSetupWifi": "Lokales WLAN (kein Internet nötig)",
    "liveSetupWifiDesc": "Alle spielen auf ihrem eigenen Handy, verbunden mit demselben lokalen Netzwerk. Kein Konto erforderlich.",
    "liveDownloadTitle": "Swipe Panic herunterladen",
    "liveDownloadCta": "Kostenlos bei Google Play",
    "liveConsensusTitle": "Wie das LIVE mit der App verbunden ist",
    "liveConsensusStep1Title": "Der Streamer zeigt eine Karte",
    "liveConsensusStep1Desc": "Eine Swipe Panic-Karte erscheint als OBS-Overlay im Stream. Alle sehen dieselbe Situation.",
    "liveConsensusStep2Title": "Zuschauer stimmen im Chat ab",
    "liveConsensusStep2Desc": "🟢 für Green Flag, 🔴 für Red Flag — direkt in den TikTok-Kommentaren.",
    "liveConsensusStep3Title": "Die App zeigt dir, wie Tausende abgestimmt haben",
    "liveConsensusStep3Desc": "Konsens-Statistiken erscheinen in deinem Recap: wie dein Land abgestimmt hat und was andere dachten.",
    "liveConsensusNote": "Hinweis: Der Konsens ist eine periodische Momentaufnahme, kein Echtzeitergebnis.",
    "liveModerationTitle": "Offizielle Karten, keine zufälligen Inhalte",
    "liveModerationCopy": "Offizielle Karten werden vom Team geprüft und freigegeben — sie stammen nicht von Fremden aus dem Internet. Von Spielern erstellte Packs bleiben privat in ihrer Gruppe: niemand sonst sieht oder erhält sie.",
    "changelogTitle": "Entwicklungen und Korrekturen",
    "changelogIntro": "Versionsverlauf von Swipe Panic.",
    "cl191changes": "<li>Sofortige Google Play QR-Code-Tischeinladung: auf dem Party-Recap-Bildschirm im Vollbildmodus, damit Freunde die App in Sekundenschnelle installieren können.</li><li>Gestochen scharfes Startbildschirm-Logo mit Neon-Glow und flüssigeren Karten-Animationen.</li><li>Offizielles 1080p 60fps Web-Trailer-Studio zum Erstellen und Teilen von Spielclips auf TikTok, Shorts und Social Media.</li><li>Performance-Optimierungen und 100% Offline-Stabilität.</li>",
    "cl185changes": "<li>Zwei neue offizielle 'Gesellschaftsdebatten'-Packs (70 Karten in 6 Sprachen): 'WGs &amp; Nachbarn' (35 Karten) und 'Geld &amp; Geizhälse' (35 Karten).</li><li>Vollständige Integration in Pack-Auswahl, Web-Minispiel und offiziellen Katalog (insgesamt 904 Karten).</li><li>Laufende Verbesserungen der Offline-Stabilität und Performance.</li>",
    "cl184changes": "<li>Monatlicher Tages-Dilemma-Almanach: Visueller 30-Tage-Kalender (10x3-Raster) mit grünen/roten/Schild-Punkten, monatlicher Stimmungsanzeige (Wohlwollend, Unnachgiebig oder Ausgeglichen) und Streak-Verfolgung.</li><li>Weltreise der Meinungen &amp; Live-Votings: Sanft animierte Konsens-Anzeige und Entdeckung der am stärksten gespaltenen Länder als interaktive Chips.</li><li>Neue offizielle Packs: „Toxisch oder Legitim?“ und „Gen Z vs Millennials“ (70 pointierte Karten in 6 Sprachen).</li><li>Party Juice Vibes &amp; Story-Karte: Dramatischer 3-2-1 Buzz-Countdown, Konfetti-Feiern und 9:16-Profilkarte im „Spotify Wrapped“-Stil.</li>",
    "cl180changes": "<li>Neuer Modus «Face-to-Face / Blitz-Duell» (1 Smartphone, 2 Spieler): 180°-Split-Screen, gleichzeitige verdeckte Abstimmung, Enthüllung von Perfektem Match oder Clash und Chemie-Score.</li><li>Natives Android-Startbildschirm-Widget: Sieh und stimme über das Dilemma des Tages direkt von deinem Desktop ab, mit 1-Tap-Anheften.</li><li>Saisonale Themes &amp; offizielle Packs: Immersive Halloween- und Winter-Atmosphäre, Valentinstag- (35 Karten) und Sommernächte-Packs (35 Karten).</li><li>Anonymes Teilen &amp; Komfort: Strikter Datenschutz für Spielernamen in geteilten Bildern, mehrsprachige Erkennung von Zeigefinger-Karten.</li>",
    "cl170changes": "<li>Party-Persönlichkeitsrollen: Inquisitor, Weiches Herz, Kleiner Dämon oder Reiner Engel berechnet aus den Gruppenstimmen.</li><li>HD 9:16 Story-Bilder zum Teilen: Exportiere Highlights direkt in Instagram-, TikTok- und WhatsApp-Stories.</li><li>Freischaltbare Cyberpunk- und Gold-Designs.</li><li>Verstärkte lokale Moderationsfilter und 100% Offline-Datenschutz.</li>",
    "cl161changes": "<li>Behebung lokaler Benachrichtigungen auf allen Android-Geräten (zuverlässige Aktivierung und Dilemma-Erinnerungen um 18:30 Uhr).</li><li>Direkter Zugriff auf das Dilemma des Tages auf dem Startbildschirm mit Streak und weltweitem Vergleich in 10 Sekunden.</li><li>Entfernung von Live-Bannern und -Badges, wenn kein Stream aktiv ist.</li><li>Offizielles Winter- &amp; Festtags-Pack (35 Karten), lokales Party-Profil und verfeinerte Haptik.</li>",
    "cl150changes": "<li>Offizielles „Halloween-Special“-Pack: 35 brandneue gruselige und witzige Dilemmata für Partys.</li><li>Immersives Halloween-Theme: schaurig-schöne Nachtatmosphäre und Kürbis-Neon.</li><li>Tägliches Express-Dilemma: Wöchentlicher Streak-Schild und 4 Sammler-Abzeichen.</li><li>Rotierendes Wochenend-Party-Pack: jeden Freitag automatisch im Rampenlicht.</li><li>Klarere Dilemma-Abstimmung: intuitive Buttons und detaillierte Konsens-Anzeige.</li>",
    "cl140changes": "<li>Neues „Schulanfang“-Pack: 35 frische Dilemmas über Campus-Alltag, WG-Chaos und den Wecker um 7 Uhr.</li><li>Schnelle 10-Karten-Runden: Startet die Diskussionen und Lacher standardmäßig in unter 2 Minuten.</li><li>Direkter Start &amp; Gruppen-Replay: Haupt-Button sofort sichtbar und 1-Klick-Replay mit deiner letzten Gruppe.</li><li>Optimierter Rundenrückblick: Hebt den denkwürdigsten Moment hervor mit direktem „Noch 10 Karten“- und Teilen-Button.</li><li>Angenehmes Werbeerlebnis: Garantiert keine Werbung nach der ersten Runde und ruhige Übergänge.</li>",
    "cl130changes": "<li>Katalog mit 22 Gameplay-Erfolgen: Schalte Trophäen für Multiplayer, Quiz, eigene Decks und tägliche Serien frei.</li><li>Neue Sammlungs-Tabs „Deine Tops 🌟“ und „Deine Flops 💀“ für deine Lieblingskarten.</li><li>Verbesserte Runden-Titel („Sehr verständnisvolle Gruppe“ / „Gnadenlose Jury“).</li><li>Verbessertes lokales WLAN und stabileres Tages-Dilemma.</li>",
    "cl120changes": "<li>Deine Spielrunde («Meine Gruppen»): Die App merkt sich deine Freunde und zählt eure gemeinsamen Partyabende.</li><li>1-Klick-Schnellstart: Direkt auf dem Startbildschirm mit deiner letzten Gruppe und deinem Lieblingspack weiterspielen.</li><li>Das Web-Minispiel ist da: Spiele und teile Swipe Panic direkt im Browser, ohne etwas installieren zu müssen.</li><li>Jeden Tag ein neues Dilemma: Entdecke jeden Morgen eine neue, spannende Situation für die tägliche Diskussion.</li><li>Weltweiter &amp; Länder-Konsens: Vergleiche deine Entscheidungen mit Spielern weltweit und sieh, wie dein Land abstimmt!</li>",
    "cl110changes": "<li>Wiederhole den LIVE: Das Live-Pack wird direkt nach dem Intro angeboten, und du spielst das exakte Live-Deck erneut.</li><li>LIVE-Abzeichen und Countdown beim Wochen-Pack.</li><li>Vergleich „Streamer gegen dich“ am Ende einer Runde.</li><li>Optionale Erinnerung, wenn ein Live geplant ist.</li>",
    "cl104changes": "<li>Pack-Vorschau vor dem Start: Intensität, Kartenzahl und eine spoilerfreie, swipebare Vorschau für das Gefühl.</li><li>Einfacherer Gruppenstart: Geteiltes Telefon (Pass &amp; Play) standardmäßig, mit einer Zeile zum Ablauf („kein Score, nur eure Reaktionen“).</li><li>Eintrag „Die Karten im LIVE gesehen?“ auf dem Startbildschirm, der direkt das im Live gespielte Pack anbietet.</li><li>Länder-Konsens hervorgehoben (dein Land gegen die Welt).</li>",
    "cl103changes": "<li>Live-Konsens-Statistiken auf dem Ergebnisbildschirm (statische Synchronisierung von der Website).</li><li>Social-Modus umbenannt in „Wahrheit oder Pflicht“.</li><li>Automatischer Fallback-Cache für Live-Statistiken bei fehlendem Netzwerk.</li><li>Konsens-Statistiken pro Karte in der Spielzusammenfassung.</li>",
    "changelogVersionLabel": "Version",
    "changelogDateLabel": "Datum",
    "changelogChangesLabel": "Änderungen",
    "notFoundTitle": "Seite nicht gefunden",
    "notFoundCopy": "Diese Seite existiert nicht oder wurde verschoben.",
    "notFoundHome": "Zurück zur Startseite",
    "notFoundHowToPlay": "Spielanleitung",
    "notFoundLive": "Im LIVE gesehen"
  },
  "nl": {
    "navPlayOnline": "🎮 Online Spelen",
    "heroPlayOnline": "⚡ Online Spelen",
    "badgeColoc": "🏠 NIEUW · Debat",
    "badgeMoney": "💰 NIEUW · Debat",
    "badgeToxic": "🚩 Relatie Debat",
    "badgeHalloween": "🎃 Herfst & Griezelen",
    "badgeWinter": "❄️ Feestdagen & Oudejaar",
    "badgeSchool": "🎒 Campus & Studenten",
    "packChipColoc": "🏠 Huisgenoten & Buren",
    "packChipMoney": "💰 Geld & Vrekjes",
    "packChipToxic": "🚩 Toxisch of Terecht?",
    "packChipGenZ": "⚡ Gen Z vs Millennials",
    "packChipDating": "❤️ Daten & Verleiding",
    "packChipParty": "🎉 Feestje / Actie of Waarheid",
    "packChipQuiz": "🧠 Quiz & Algemene Kennis",
    "packChipOffice": "💼 Werk & Kantoor",
    "packChipGym": "🏋️ Sportschool & Fitness",
    "packChipClash": "🔥 Mannen vs Vrouwen Clash",
    "packChipVacation": "✈️ Vakantie & Reizen",
    "packChipHalloween": "🎃 Halloween Special",
    "packChipWinter": "❄️ Winter & Feestdagen",
    "packChipSchool": "🎒 Terug naar School & Campus",
    "packChipValentines": "💘 Valentijnsdag",
    "packChipSummer": "☀️ Zomer & Strandfeest",
    "packChipAll": "🎲 Alle packs (Mix)",
    "cards35": "35 kaarten",
    "cards50": "50 kaarten",
    "cards100": "100 kaarten",
    "cards104": "104 kaarten",
    "cards904": "904 kaarten",
    "suggestionSubject": "Kaartsuggestie Swipe Panic",

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
    "themePickerLabel": "🎨 Thema:",
    "themeClassic": "Klassiek",
    "themeHalloween": "Halloween",
    "themeWinter": "Winter & Feestdagen",
    "modeDuel": "Flitsduel",
    "duelBadge": "⚡ 1 TELEFOON · 2 SPELERS",
    "duelCopy": "Speel oog in oog op hetzelfde scherm: stem tegelijk in het geheim, directe onthulling van harmonie of clash en compatibiliteitsscore!",
    "featuresTitle": "Keuzes die discussie starten",
    "featuresCopy": "Swipe Panic werkt zonder cloudaccount: solo, telefoon delen en lokale Wi-Fi zijn gemaakt voor snelle feestjes.",
    "classicCopy": "Swipe red flags en green flags en ontdek het profiel van de ronde.",
    "quizCopy": "Waar of niet waar, 20 kaarten, 50 kaarten of Max, met stopwatch alleen voor de samenvatting.",
    "partyCopy": "Truth or Dare, vriendenpacks, lokale stemmen en een heldere samenvatting.",
    "navPacks": "Packs",
    "seasonalTitle": "Seizoens- & Themapacks",
    "seasonalBannerHalloween": "🎃 HALLOWEEN SPECIAL · 35 hilarische griezeldilemma's met vrienden!",
    "seasonalBannerHalloweenCta": "⚡ Speel dit pack",
    "seasonalBannerWinter": "❄️ WINTER & FEESTDAGEN · 35 eindejaarsdilemma's en gezelligheid!",
    "seasonalBannerWinterCta": "⚡ Speel dit pack",
    "packHalloweenTitle": "🎃 Halloween Special",
    "packHalloweenDesc": "35 griezelige en hilarische partydilemma's: spookhuizen, foute kostuums, horrorfilms en snoep pikken.",
    "packWinterTitle": "❄️ Winter & Feestdagen",
    "packWinterDesc": "35 eindejaarsdilemma's: familiediners, gênante relatiegeschenken, foute truien en onbeperkt gourmetten.",
    "packSchoolTitle": "🎒 Terug naar School & Campus",
    "packSchoolDesc": "35 campus- en studentendilemma's: wekkers om 7 uur, overvolle collegezalen, chaotische huisgenoten en uitstelgedrag.",
    "playPackBtn": "⚡ Speel dit pack",
    "navDailyDilemma": "⚡ Dilemma",
    "dailyDilemmaBadge": "⚡ Het Dilemma van de Dag",
    "dilemmaAccept": "Ik accepteer",
    "dilemmaReject": "Ik weiger",
    "dailyYourVote": "Jouw stem:",
    "dailyConsensusAccept": "{pct}% Accepteert",
    "dailyConsensusReject": "{pct}% Weigert",
    "dailyConsensusSample": "Gebaseerd op {sample} geverifieerde stemmen",
    "countryThresholdHint": "✓ Stem geregistreerd voor {flag}! Landstatistieken verschijnen vanaf 15 stemmen.",
    "dailyDilemmaCtaSubtitle": "Elke dag 1 exclusief dilemma en je groepsstatistieken in de app!",
    "dailyDilemmaStoreCta": "⚡ Speel in de app",
    "almanacTitle": "📅 30-Dagen Dilemma-Almanak",
    "almanacSubtitle": "Alleen stemmen in deze browser. De app bewaart haar eigen geschiedenis op je telefoon.",
    "almanacLegendGreen": "Geaccepteerd",
    "almanacLegendRed": "Geweigerd",
    "almanacLegendMissed": "Gemist",
    "almanacMoodBenevolent": "Stemming: Welwillend 😇",
    "almanacMoodUncompromising": "Stemming: Onvermurwbaar ⚖️",
    "almanacMoodBalanced": "Stemming: Evenwichtig ⚖️",
    "almanacMoodUnknown": "Stemming: In observatie... ⏳",
    "almanacStreakCount": "🔥 Serie: {count} dag(en)",
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
    "privacyVotesTitle": "Stemmen & Wereldwijde Consensus",
    "privacyVotesCopy": "Bij het deelnemen aan de wereldwijde consensus (op het web of in de app) worden alleen je kaartkeuze (Green Flag / Red Flag), gekozen land en taal strikt anoniem verzonden om statistieken te berekenen. Er worden geen apparaat-id's, namen of accounts verzameld.",
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
    "ugcStepDuelTitle": "⚡ Oog-in-Oog-modus (Flitsduel): 1 Telefoon, 2 Spelers",
    "ugcStepDuelIntro": "De ultieme modus om jullie chemie als koppel of tussen vrienden direct te testen:",
    "ugcStepDuelDetails": "<strong>Hoe werkt het?</strong> Leg de smartphone plat tussen jullie beiden op tafel. Het scherm splitst in tweeën (de bovenste helft draait 180° voor de tegenoverzittende speler). Beide spelers stemmen tegelijk in het geheim. Zodra beiden gestemd hebben: flits en directe onthulling! <em>Perfecte Match 🎉</em> of <em>Clash 💥</em>. Na 10 dilemma's ontdek je jullie chemiepercentage en grappige titel (Zielsverwanten, Middenweg of Oorlogsgebied)!",
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
    "titleSupport": "Support - Swipe Panic",
    "titleLive": "Je zag de LIVE — dit is het spel - Swipe Panic",
    "titleChangelog": "Versiegeschiedenis - Swipe Panic",
    "title404": "Pagina niet gevonden - Swipe Panic",
    "navHowToPlay": "Hoe spelen",
    "navLive": "Gezien op LIVE",
    "navChangelog": "Versies",
    "liveKicker": "Zag je ons op TikTok LIVE?",
    "liveHero": "Dit is het spel",
    "liveIntro": "Swipe Panic is een offline-first partygame: geen account, geen cloud. Swipe kaarten, stem en krijg een privé-samenvatting. Vijf minuten om je groep te onthullen.",
    "liveModesTitle": "3 spelmodi",
    "liveModeClassicDesc": "Swipe red flags en green flags bij datingssituaties, ontdek dan het profiel van de ronde.",
    "liveModeQuizDesc": "Waar of niet waar, 20 tot max kaarten, met een recap-stopwatch. Geweldig voor een feestje.",
    "liveModePartyDesc": "Truth or Dare, vriendenpacks, lokale stemmen en een heldere samenvatting aan het einde.",
    "liveSetupsTitle": "3 manieren om te spelen",
    "liveSetupSolo": "Solo",
    "liveSetupSoloDesc": "Start een solo-sessie om het spel op je eigen tempo te ontdekken.",
    "liveSetupPassPlay": "Gedeelde telefoon (Pass & Play)",
    "liveSetupPassPlayDesc": "Eén telefoon, meerdere spelers: geef de telefoon door, elke speler stemt in het geheim.",
    "liveSetupWifi": "Lokale Wi-Fi (geen internet nodig)",
    "liveSetupWifiDesc": "Iedereen speelt op zijn eigen telefoon, verbonden met hetzelfde lokale netwerk. Geen account vereist.",
    "liveDownloadTitle": "Download Swipe Panic",
    "liveDownloadCta": "Gratis op Google Play",
    "liveConsensusTitle": "Hoe de LIVE verbindt met de app",
    "liveConsensusStep1Title": "De streamer toont een kaart",
    "liveConsensusStep1Desc": "Een Swipe Panic-kaart verschijnt als OBS-overlay in de stream. Iedereen ziet dezelfde situatie.",
    "liveConsensusStep2Title": "Kijkers stemmen in de chat",
    "liveConsensusStep2Desc": "🟢 voor Green Flag, 🔴 voor Red Flag — rechtstreeks in de TikTok-reacties.",
    "liveConsensusStep3Title": "De app laat je zien hoe duizenden hebben gestemd",
    "liveConsensusStep3Desc": "Consensusstatistieken verschijnen in je samenvatting: hoe jouw land stemde en wat anderen dachten.",
    "liveConsensusNote": "Opmerking: het consensus is een periodieke momentopname, geen realtime resultaat.",
    "liveModerationTitle": "Officiële kaarten, geen willekeurige inhoud",
    "liveModerationCopy": "Officiële kaarten worden door het team beoordeeld en goedgekeurd — ze komen niet van vreemden op internet. Packs gemaakt door spelers blijven privé binnen hun groep: niemand anders ziet of ontvangt ze.",
    "changelogTitle": "Updates en verbeteringen",
    "changelogIntro": "Versiegeschiedenis van Swipe Panic.",
    "cl191changes": "<li>Directe Google Play QR-code tafelaanwezige: beschikbaar op het feestoverzicht met een schermvullende pop-up zodat vrienden de app binnen enkele seconden installeren.</li><li>Haarscherp startschermlogo met neon-gloed en vloeiendere kaartanimaties.</li><li>Officieel 1080p 60fps web trailer-studio om gameplay te delen op TikTok, Shorts en socials.</li><li>Verbeterde offline prestaties en algemene stabiliteit.</li>",
    "cl185changes": "<li>Twee nieuwe officiële packs 'Maatschappelijke Debatten' (70 kaarten in 6 talen): 'Huisgenoten &amp; Buren' (35 kaarten) en 'Geld &amp; Vrekjes' (35 kaarten).</li><li>Volledige integratie in de pack-kiezer, web mini-game en officiële catalogus (904 kaarten in totaal).</li><li>Continue optimalisaties van offline speelplezier en vloeiendheid.</li>",
    "cl184changes": "<li>Maandelijkse Dagelijks Dilemma-Almanak: visuele 30-dagenkalender (10x3-raster) met groen/rood/schild-stippen, opvolging van je maandelijkse stemming (Welwillend, Onvermurwbaar of Evenwichtig) en streak.</li><li>Wereldreis van Meningen &amp; live stemmen: soepel geanimeerde consensusmeter en interactieve capsules van de meest verdeelde landen.</li><li>Nieuwe officiële packs: «Toxisch of Legitiem?» en «Gen Z vs Millennials» (70 scherpe kaarten in 6 talen).</li><li>Party Juice-sfeer &amp; Story-kaart: 3-2-1 Buzz-aftelling, confetti-explosies en 9:16-persoonlijkheidskaart in «Spotify Wrapped»-stijl.</li>",
    "cl180changes": "<li>Nieuwe modus «Oog-in-Oog / Flitsduel» (1 Telefoon, 2 Spelers): 180° gesplitst scherm, gelijktijdige geheime stemmen, onthulling van Perfecte Match of Clash en chemiescore.</li><li>Native Android-startschermwidget: bekijk en stem op het Dilemma van de Dag direct vanaf je startscherm met 1-tik-vastmaken.</li><li>Seizoensthema's &amp; officiële packs: meeslepende Halloween- en Winterfeestsferen, Valentijnsdag- (35 kaarten) en Zomeravondpacks (35 kaarten).</li><li>Anoniem delen &amp; comfort: strikte pseudoniemprivacy in gedeelde afbeeldingen, meertalige detectie van wijzende vinger-kaarten.</li>",
    "cl170changes": "<li>Party-persoonlijkheidsrollen: Inquisiteur, Zacht Hart, Klein Duiveltje of Pure Engel berekend op basis van groepsstemmen.</li><li>HD 9:16 Story-deelafbeeldingen: exporteer hoogtepunten direct naar Instagram, TikTok en WhatsApp Stories.</li><li>Ontgrendelbare Cyberpunk- en Goudthema's.</li><li>Versterkte lokale moderatiefilters en 100% offline privacy.</li>",
    "cl161changes": "<li>Lokale meldingen gerepareerd op alle Android-apparaten (betrouwbare activering en dagelijkse herinneringen om 18:30).</li><li>Directe toegang tot het Dilemma van de Dag op het startscherm met streak en wereldwijde vergelijking in 10 seconden.</li><li>Verwijdering van Live-banners en badges wanneer er geen live-evenement plaatsvindt.</li><li>Officieel Winterfeestdagen-pack (35 kaarten), psychologisch partyprofiel en verfijnde haptiek.</li>",
    "cl150changes": "<li>Officieel „Halloween Special”-pack: 35 gloednieuwe hilarische griezeldilemma's met vrienden.</li><li>Meeslepend Halloween-thema: sfeervolle nachtkleuren en neon-pompoenaccenten.</li><li>Dagelijks Express-dilemma: Wekelijks streak-schild en 4 verzamelbadges om vrij te spelen.</li><li>Roterend Weekend Party Pack: elke vrijdag automatisch feestelijk uitgelicht.</li><li>Kristalheldere dilemma-ervaring: duidelijke stemknoppen en gedetailleerde consensus.</li>",
    "cl140changes": "<li>Nieuw „Terug naar School”-pack: 35 nieuwe dilemma's over campusleven, studentenhuizen en de wekker om 7 uur.</li><li>Snelle rondes van 10 kaarten: start binnen 2 minuten het debat en het lachen.</li><li>Direct starten &amp; groep-replay: startknop direct zichtbaar en 1-klik-replay met je laatste vriendengroep.</li><li>Gestroomlijnd overzicht: zet het meest memorabele moment centraal met directe knoppen voor nog 10 kaarten of delen.</li><li>Rustige advertentie-ervaring: geen verplichte advertenties na het eerste spel en respect voor het speltempo.</li>",
    "cl130changes": "<li>Catalogus met 22 gameplay-prestaties: ontgrendel trofeeën voor multiplayer, quizzen, eigen packs en dagelijkse streaks.</li><li>Nieuwe verzamelingstabbladen \"Jouw Tops 🌟\" en \"Jouw Flops 💀\" voor je favoriete kaarten.</li><li>Verbeterde eindtitels (\"Heel tolerante groep\" / \"Genadeloze jury\").</li><li>Verbeterde lokale wifi en stabieler Dagelijks Dilemma.</li>",
    "cl120changes": "<li>Je vaste vriendengroep («Mijn Groepen»): De app onthoudt je vrienden en telt jullie gezamenlijke spelavonden.</li><li>Opnieuw spelen in 1 klik: Snelle knop op het startscherm om direct door te spelen met je laatste groep en favoriete pack.</li><li>De web-minigame is er: Speel en deel Swipe Panic direct in je browser zonder iets te installeren.</li><li>Elke dag een nieuw dilemma: Ontdek elke ochtend een frisse situatie om het gesprek van de dag te starten.</li><li>Wereldwijde &amp; Landenconsensus: Vergelijk je keuzes met spelers wereldwijd en ontdek wat jouw land kiest!</li>",
    "cl110changes": "<li>Speel de LIVE opnieuw: het live-pack wordt meteen na de intro aangeboden en je speelt het exacte live-deck opnieuw.</li><li>LIVE-badge en aftelteller op het weekpack.</li><li>Vergelijking ‘de streamer versus jij’ aan het einde van een spel.</li><li>Optionele herinnering wanneer er een live gepland staat.</li>",
    "cl104changes": "<li>Pack-voorbeeld voordat je start: intensiteit, aantal kaarten en een spoilervrije swipebare preview om de toon te voelen.</li><li>Eenvoudiger samen starten: Gedeelde telefoon (Pass &amp; Play) standaard, met een regel die uitlegt hoe het gaat (‘geen score, alleen jullie reacties’).</li><li>‘Kaarten in de LIVE gezien?’-ingang op het startscherm, die direct het tijdens de live gespeelde pack aanbiedt.</li><li>Landenconsensus uitgelicht (jouw land versus de wereld).</li>",
    "cl103changes": "<li>Live-consensusstatistieken op het resultatenscherm (statische synchronisatie vanaf de site).</li><li>Social-modus hernoemd naar ‘Waarheid of Durven’.</li><li>Automatische fallback-cache voor Live-statistieken als het netwerk niet beschikbaar is.</li><li>Consensusstatistieken per kaart in de samenvatting.</li>",
    "changelogVersionLabel": "Versie",
    "changelogDateLabel": "Datum",
    "changelogChangesLabel": "Wijzigingen",
    "notFoundTitle": "Pagina niet gevonden",
    "notFoundCopy": "Deze pagina bestaat niet of is verplaatst.",
    "notFoundHome": "Terug naar home",
    "notFoundHowToPlay": "Hoe spelen",
    "notFoundLive": "Gezien op LIVE"
  },
  "pt": {
    "navPlayOnline": "🎮 Jogar Online",
    "heroPlayOnline": "⚡ Jogar Online",
    "badgeColoc": "🏠 NOVO · Debate",
    "badgeMoney": "💰 NOVO · Debate",
    "badgeToxic": "🚩 Debate Relação",
    "badgeHalloween": "🎃 Outono & Arrepios",
    "badgeWinter": "❄️ Festas & Réveillon",
    "badgeSchool": "🎒 Campus & Estudantes",
    "packChipColoc": "🏠 Colegas & Vizinhos",
    "packChipMoney": "💰 Dinheiro & Forretas",
    "packChipToxic": "🚩 Tóxico ou Legítimo?",
    "packChipGenZ": "⚡ Gen Z vs Millennials",
    "packChipDating": "❤️ Encontros & Sedução",
    "packChipParty": "🎉 Festa / Ação ou Verdade",
    "packChipQuiz": "🧠 Quiz & Conhecimento Geral",
    "packChipOffice": "💼 Trabalho & Escritório",
    "packChipGym": "🏋️ Academia & Fitness",
    "packChipClash": "🔥 Confronto Homens vs Mulheres",
    "packChipVacation": "✈️ Férias & Viagens",
    "packChipHalloween": "🎃 Especial Halloween",
    "packChipWinter": "❄️ Festas de Inverno",
    "packChipSchool": "🎒 Regresso às Aulas & Campus",
    "packChipValentines": "💘 Dia dos Namorados",
    "packChipSummer": "☀️ Festas de Verão & Praia",
    "packChipAll": "🎲 Todos os packs (Mix)",
    "cards35": "35 cartas",
    "cards50": "50 cartas",
    "cards100": "100 cartas",
    "cards104": "104 cartas",
    "cards904": "904 cartas",
    "suggestionSubject": "Sugestão de carta Swipe Panic",

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
    "themePickerLabel": "🎨 Tema:",
    "themeClassic": "Clássico",
    "themeHalloween": "Halloween",
    "themeWinter": "Festas de Inverno",
    "modeDuel": "Duelo Flash",
    "duelBadge": "⚡ 1 TELEMÓVEL · 2 JOGADORES",
    "duelCopy": "Joguem frente a frente no mesmo ecrã: votem simultaneamente em segredo, revelação instantânea de sintonia ou choque e pontuação de cumplicidade!",
    "featuresTitle": "Escolhas que puxam conversa",
    "featuresCopy": "Swipe Panic funciona sem conta cloud: solo, telemóvel partilhado e Wi-Fi local foram feitos para sessões rápidas.",
    "classicCopy": "Faz swipe em red flags e green flags, depois descobre o perfil da partida.",
    "quizCopy": "Verdadeiro ou falso, 20 cartas, 50 cartas ou Max, com cronómetro só para o resumo.",
    "partyCopy": "Verdade ou Desafio, packs de amigos, votos locais e resumo claro.",
    "navPacks": "Packs",
    "seasonalTitle": "Packs Sazonais e Temáticos",
    "seasonalBannerHalloween": "🎃 ESPECIAL HALLOWEEN · 35 dilemas de risos e sustos com amigos!",
    "seasonalBannerHalloweenCta": "⚡ Jogar este pack",
    "seasonalBannerWinter": "❄️ FESTAS DE INVERNO · 35 dilemas de fim de ano e celebração!",
    "seasonalBannerWinterCta": "⚡ Jogar este pack",
    "packHalloweenTitle": "🎃 Especial Halloween",
    "packHalloweenDesc": "35 dilemas assustadores e cómicos com amigos: casas assombradas, disfarces duvidosos, filmes de terror e doces roubados.",
    "packWinterTitle": "❄️ Festas de Inverno",
    "packWinterDesc": "35 dilemas de fim de ano: jantares de família, prendas embaraçosas da empresa, camisolas feias e ceias sem fim.",
    "packSchoolTitle": "🎒 Regresso às Aulas & Campus",
    "packSchoolDesc": "35 dilemas de vida estudantil: acordar às 7h, anfiteatros cheios, colegas de casa caóticos e rotinas improvisadas.",
    "playPackBtn": "⚡ Jogar este pack",
    "navDailyDilemma": "⚡ Dilema",
    "dailyDilemmaBadge": "⚡ O Dilema do Dia",
    "dilemmaAccept": "Aceito",
    "dilemmaReject": "Rejeito",
    "dailyYourVote": "O teu voto:",
    "dailyConsensusAccept": "{pct}% Aceitam",
    "dailyConsensusReject": "{pct}% Rejeitam",
    "dailyConsensusSample": "Com base em {sample} votos verificados",
    "countryThresholdHint": "✓ Voto registado para {flag}! As estatísticas por país aparecem a partir de 15 votos.",
    "dailyDilemmaCtaSubtitle": "Todos os dias, 1 dilema exclusivo e as tuas estatísticas de grupo na app!",
    "dailyDilemmaStoreCta": "⚡ Jogar na aplicação",
    "almanacTitle": "📅 Almanaque dos últimos 30 dias",
    "almanacSubtitle": "Votos apenas neste navegador. A app guarda o seu próprio histórico no telemóvel.",
    "almanacLegendGreen": "Aceite",
    "almanacLegendRed": "Recusado",
    "almanacLegendMissed": "Não votado",
    "almanacMoodBenevolent": "Humor: Benevolente 😇",
    "almanacMoodUncompromising": "Humor: Implacável ⚖️",
    "almanacMoodBalanced": "Humor: Equilibrado ⚖️",
    "almanacMoodUnknown": "Humor: Em observação... ⏳",
    "almanacStreakCount": "🔥 Sequência: {count} dia(s)",
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
    "privacyVotesTitle": "Votos e Consenso Global",
    "privacyVotesCopy": "Ao participar no consenso global (na web ou na app), apenas a tua escolha de carta (Green Flag / Red Flag), país e idioma selecionados são transmitidos de forma estritamente anónima para calcular estatísticas globais. Nenhum identificador pessoal, nome ou conta é recolhido.",
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
    "ugcStepDuelTitle": "⚡ Modo Frente a Frente (Duelo Flash): 1 Telemóvel, 2 Jogadores",
    "ugcStepDuelIntro": "O modo definitivo para testarem a vossa cumplicidade em casal ou entre amigos no momento:",
    "ugcStepDuelDetails": "<strong>Como funciona?</strong> Coloquem o telemóvel na mesa entre os dois. O ecrã divide-se ao meio (a metade superior roda 180° para o jogador da frente). Ambos votam em segredo ao mesmo tempo. Assim que ambos votarem: flash e revelação instantânea! <em>Sintonia Perfeita 🎉</em> ou <em>Choque 💥</em>. Após 10 dilemas, vejam a vossa percentagem de cumplicidade e título divertido (Almas Gémeas, Meio-Termo ou Zona de Guerra)!",
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
    "titleSupport": "Suporte - Swipe Panic",
    "titleLive": "Viste o LIVE — aqui está o jogo - Swipe Panic",
    "titleChangelog": "Histórico de versões - Swipe Panic",
    "title404": "Página não encontrada - Swipe Panic",
    "navHowToPlay": "Como jogar",
    "navLive": "Visto no LIVE",
    "navChangelog": "Versões",
    "liveKicker": "Viste-nos no TikTok LIVE?",
    "liveHero": "Aqui está o jogo",
    "liveIntro": "Swipe Panic é um party game offline-first: sem conta, sem cloud. Faz swipe em cartas, vota e obtém um resumo privado. Cinco minutos para revelar o teu grupo.",
    "liveModesTitle": "3 modos de jogo",
    "liveModeClassicDesc": "Faz swipe em red flags e green flags em situações de namoro, depois descobre o perfil da partida.",
    "liveModeQuizDesc": "Verdadeiro ou falso, de 20 a max cartas, com cronómetro de resumo. Ótimo para animar uma festa.",
    "liveModePartyDesc": "Verdade ou Desafio, packs de amigos, votos locais e resumo claro no final.",
    "liveSetupsTitle": "3 formas de jogar",
    "liveSetupSolo": "Solo",
    "liveSetupSoloDesc": "Inicia uma sessão a solo para descobrir o jogo ao teu ritmo.",
    "liveSetupPassPlay": "Telemóvel partilhado (Pass & Play)",
    "liveSetupPassPlayDesc": "Um telemóvel, vários jogadores: passa o telemóvel, cada jogador vota em segredo.",
    "liveSetupWifi": "Wi-Fi local (sem Internet)",
    "liveSetupWifiDesc": "Cada um joga no seu próprio telemóvel, ligados à mesma rede local. Sem conta necessária.",
    "liveDownloadTitle": "Descarrega Swipe Panic",
    "liveDownloadCta": "Grátis no Google Play",
    "liveConsensusTitle": "Como o LIVE se liga à app",
    "liveConsensusStep1Title": "O streamer mostra uma carta",
    "liveConsensusStep1Desc": "Uma carta do Swipe Panic aparece como overlay OBS no stream. Toda a gente vê a mesma situação.",
    "liveConsensusStep2Title": "Os espectadores votam no chat",
    "liveConsensusStep2Desc": "🟢 para Green Flag, 🔴 para Red Flag — diretamente nos comentários do TikTok.",
    "liveConsensusStep3Title": "A app mostra-te como milhares votaram",
    "liveConsensusStep3Desc": "As estatísticas de consenso aparecem no teu resumo: como o teu país votou e o que os outros acharam.",
    "liveConsensusNote": "Nota: o consenso é uma fotografia periódica, não um resultado em tempo real.",
    "liveModerationTitle": "Cartas oficiais, não conteúdo aleatório",
    "liveModerationCopy": "As cartas oficiais são revistas e aprovadas pela equipa — não vêm de desconhecidos na Internet. Os packs criados por jogadores ficam privados dentro do seu grupo: mais ninguém os vê ou recebe.",
    "changelogTitle": "Evoluções e correções",
    "changelogIntro": "Histórico de versões do Swipe Panic.",
    "cl191changes": "<li>Convite de mesa instantâneo por QR Code do Google Play: disponível no ecrã de resumo de festa em ecrã inteiro para os amigos instalarem a app num segundo.</li><li>Logótipo inicial de alta definição com halo néon e transições de cartas mais fluidas.</li><li>Estúdio web de trailers HD 1080p 60fps para partilhar o jogo no TikTok, Shorts e redes sociais.</li><li>Otimizações de desempenho e estabilidade 100% offline.</li>",
    "cl185changes": "<li>Dois novos packs oficiais de 'Debates de Sociedade' (70 cartas em 6 idiomas): 'Colegas &amp; Vizinhos' (35 cartas) e 'Dinheiro &amp; Forretas' (35 cartas).</li><li>Integração total no seletor de packs, minijogo web e catálogo oficial (904 cartas no total).</li><li>Melhorias contínuas de estabilidade e desempenho offline.</li>",
    "cl184changes": "<li>Almanaque Mensual do Dilema Diário: calendário visual de 30 dias (grelha 10x3) com pontos verde/vermelho/escudo, acompanhamento do teu humor mensal (Benevolente, Implacável ou Equilibrado) e sequência diária.</li><li>Volta ao Mundo das Opiniões &amp; votos em direto: medidor animado suave do consenso mundial e cápsulas táteis dos países mais divididos.</li><li>Novos packs oficiais: «Tóxico ou Legítimo?» e «Gen Z vs Millennials» (70 cartas afiadas em 6 línguas).</li><li>Vibrações Party Juice &amp; Cartão Story: contagem decrescente dramática 3-2-1 Buzz, chuva de confetes e cartão de perfil 9:16 ao estilo «Spotify Wrapped».</li>",
    "cl180changes": "<li>Novo modo «Frente a Frente / Duelo Flash» (1 Telemóvel, 2 Jogadores): ecrã dividido a 180°, votos simultâneos ocultos, revelação de Sintonia Perfeita ou Choque e pontuação de química.</li><li>Widget Nativo de Ecrã Principal Android: vê e vota no Dilema do Dia diretamente do ambiente de trabalho com fixação em 1 toque.</li><li>Temas sazonais e packs oficiais: ambiente imersivo de Halloween e Festas de Inverno, packs Dia dos Namorados (35 cartas) e Noites de Verão (35 cartas).</li><li>Partilha anónima e conforto: privacidade estrita de pseudónimos em imagens partilhadas, deteção multilingue de cartas de apontar o dedo.</li>",
    "cl170changes": "<li>Papéis psicológicos de festa: Inquisidor, Coração Mole, Pequeno Demónio ou Anjo Puro calculados a partir dos votos do grupo.</li><li>Imagens de partilha HD em formato 9:16: exporta os momentos altos diretamente para Stories de Instagram, TikTok e WhatsApp.</li><li>Novos temas cosméticos desbloqueáveis Cyberpunk e Dourado.</li><li>Filtros de moderação local reforçados e privacidade 100% offline.</li>",
    "cl161changes": "<li>Correção de notificações locais em todos os dispositivos Android (ativação fiável e lembretes diários às 18:30).</li><li>Acesso direto ao Dilema do Dia no ecrã inicial com sequência e comparação mundial em 10 segundos.</li><li>Remoção de banners e etiquetas Live quando não há evento em direto.</li><li>Pack oficial Festas de Inverno (35 cartas), perfil psicológico de festa e resposta háptica aprimorada.</li>",
    "cl150changes": "<li>Pack oficial «Especial Halloween»: 35 dilemas inéditos de risos e sustos com amigos.</li><li>Tema visual imersivo de Halloween: atmosfera noturna e laranja abóbora néon.</li><li>Dilema Diário Expresso: escudo de sequência semanal e 4 emblemas de colecionador.</li><li>Pack de Fim de Semana rotativo: seleção festiva automática todas as sextas-feiras.</li><li>Votação e consenso mais claros: interface intuitiva e resultados expressivos.</li>",
    "cl140changes": "<li>Novo pack «Regresso às Aulas»: 35 dilemas inéditos sobre vida de campus, colegas de casa e o despertador das 7h.</li><li>Rondas rápidas de 10 cartas: começa o debate e as gargalhadas em menos de 2 minutos por padrão.</li><li>Início instantâneo e desforra de grupo: botão principal visível sem deslizar e desforra em 1 toque com o último grupo.</li><li>Resumo de final de ronda aperfeiçoado: destaque para o momento mais marcante com botões imediatos de desforra e partilha.</li><li>Experiência de anúncios tranquila: zero anúncios forçados no primeiro jogo e transições suaves.</li>",
    "cl130changes": "<li>Catálogo de 22 conquistas de jogo: desbloqueia troféus em multijogador, quiz, criação de cartas e votos diários.</li><li>Nova coleção \"Os Teus Tops 🌟\" e \"Os Teus Flops 💀\" para guardar as tuas cartas favoritas.</li><li>Títulos de final de ronda melhorados (\"Equipa muito compreensiva\" / \"O júri implacável\").</li><li>Melhorias no modo Wi-Fi local e estabilidade do Dilema Diário.</li>",
    "cl120changes": "<li>A tua malta de jogo («Os Meus Grupos»): A app lembra-se dos teus amigos e conta as noites de festa que passaram juntos.</li><li>Jogar de novo em 1 clique: Novo atalho no ecrã inicial para jogar logo com o teu último grupo e pack favorito.</li><li>O minijogo chega à web: Joga e partilha Swipe Panic diretamente no navegador sem precisares de instalar nada.</li><li>Um dilema novo todos os dias: Descobre todas as manhãs uma situação inédita para puxar conversa.</li><li>Consenso mundial e por países: Compara as tuas escolhas com as de outros jogadores e vê o que o teu país pensa!</li>",
    "cl110changes": "<li>Repete o LIVE: o pack do live é oferecido logo após a introdução e repetes o baralho exato do live.</li><li>Selo LIVE e contagem decrescente no pack da semana.</li><li>Comparação «o streamer contra ti» no fim da partida.</li><li>Lembrete opcional quando há um live agendado.</li>",
    "cl104changes": "<li>Pré-visualização do pack antes de começar: intensidade, número de cartas e uma pré-visualização deslizável sem spoilers para sentir o tom.</li><li>Início em grupo mais simples: Telemóvel partilhado (Pass &amp; Play) por defeito, com uma linha a explicar como decorre («sem pontuação, apenas as vossas reações»).</li><li>Entrada «Viste as cartas no LIVE?» no ecrã inicial, que oferece diretamente o pack jogado durante o live.</li><li>Consenso por país destacado (o teu país contra o mundo).</li>",
    "cl103changes": "<li>Estatísticas de consenso Live no ecrã de resultados (sincronização estática a partir do site).</li><li>Modo Social renomeado para «Verdade ou Consequência».</li><li>Cache de recurso automática para as estatísticas Live quando não há rede.</li><li>Estatísticas de consenso por carta no resumo da partida.</li>",
    "changelogVersionLabel": "Versão",
    "changelogDateLabel": "Data",
    "changelogChangesLabel": "Alterações",
    "notFoundTitle": "Página não encontrada",
    "notFoundCopy": "Esta página não existe ou foi movida.",
    "notFoundHome": "Voltar ao início",
    "notFoundHowToPlay": "Como jogar",
    "notFoundLive": "Visto no LIVE"
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
      "languagePt": "Portugais",
      "liveFeaturedTitle": "Le LIVE jouait",
      "liveFeaturedSub": "Les cartes que tu as vues en stream — installe et lance-les avec tes potes.",
      "liveFeaturedCta": "Jouer ce pack",
      "packColocTitle": "🏠 Colocs & Voisins",
      "packColocDesc": "35 dilemmes de vie en communauté : vaisselle qui traîne, bruit à 4h du matin, frigo pillé et mots passifs-agressifs.",
      "packMoneyTitle": "💰 Argent, Radins & Bons Vivants",
      "packMoneyDesc": "35 dilemmes sur les sous : réclamer 0,80 € par Lydia, diviser l'addition au centime près ou carte mystérieusement oubliée.",
      "packToxicTitle": "🚩 Toxique ou Légitime ?",
      "packToxicDesc": "35 dilemmes relationnels clivants : fouiller un téléphone, refuser les soirées sans toi ou garder les photos de son ex.",
      "allPacksTitle": "Catalogue Complet des 16 Packs Officiels",
      "allPacksSub": "904 cartes en 16 thèmes exclusifs, jouables instantanément en ligne ou sur l'application mobile :",
      "allOptionsTitle": "Toutes les Options & Modes de Jeu",
      "allOptionsSub": "Un party game complet sans compte cloud, pensé pour jouer vite en solo ou en groupe.",
      "optModesTitle": "🎮 4 Modes de Jeu",
      "optModesDesc": "Classic (Flags), Duel Flash (1 tél · 2 joueurs face-à-face), Quiz (Vrai/Faux chronométré) et Party (Action ou Vérité).",
      "optMultiTitle": "👥 Multijoueur & Réseau",
      "optMultiDesc": "Solo, Pass & Play (téléphone partagé), Wi-Fi Local (LAN mDNS sans Internet) et Consensus mondial par pays.",
      "optProgressionTitle": "📅 Rétention & Progression",
      "optProgressionDesc": "Dilemme Quotidien, Almanach 30 jours (grille d'humeur), Série de jours (Streak) et Boucliers anti-perte.",
      "optCustomTitle": "🎨 Personnalisation & Vie Privée",
      "optCustomDesc": "3 ambiances visuelles (Classique, Halloween, Hiver), 6 langues (FR, EN, ES, DE, NL, PT), créateur UGC local, 0 compte cloud.",
      "storeBannerBadge": "⚡ APPLICATION GRATUITE · 100% HORS-LIGNE",
      "storeBannerHeading": "Prêt à révéler les vrais avis de tes potes ?",
      "storeBannerSub": "Télécharge Swipe Panic sur Google Play et anime ta prochaine soirée avec 904 cartes décalées et 16 thèmes explosifs.",
      "storeFeat1": "🎉 16 Packs & 904 Cartes",
      "storeFeat2": "⚡ Duel 1v1 Face-à-face",
      "storeFeat3": "🔒 0 Compte · 100% Privé",
      "storeFeat4": "📶 Wi-Fi Local & Pass & Play",
      "googlePlayGetIt": "DISPONIBLE SUR",
      "tryWebFirst": "⚡ Ou tester le mini-jeu web",
      "cardClashTag": "💥 CLASH !",
      "cardClashText": "« Faut-il partager le mot de passe de son téléphone ? »",
      "cardClashSub": "0% d'accord · Duel en direct",
      "cardMatchTag": "💚 ACCORD PARFAIT",
      "cardMatchText": "« Proposer un plan B sous la pluie sans râler »",
      "cardMatchSub": "100% Green Flag · 2/2 votants",
      "phoneHeader": "Partie en cours · Pack Défis",
      "phoneCardTag": "🟢 GREEN FLAG",
      "phoneCardText": "Il/Elle propose un plan B sous la pluie sans râler.",
      "phoneConsensus": "🌍 74% de consensus mondial",
      "phoneSwipeHint": "👈 Glisse à gauche (Red Flag) · Droite (Green Flag) 👉"
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
      "languagePt": "Portuguese",
      "liveFeaturedTitle": "The LIVE was playing",
      "liveFeaturedSub": "The cards you saw on stream — install and play them with your friends.",
      "liveFeaturedCta": "Play this pack",
      "packColocTitle": "🏠 Roommates & Neighbors",
      "packColocDesc": "35 community living dilemmas: dirty dishes in the sink, 4 AM noise, fridge thieves, and passive-aggressive notes.",
      "packMoneyTitle": "💰 Money, Cheapskates & Spenders",
      "packMoneyDesc": "35 money dilemmas: asking for $0.80 back, splitting the bill to the exact penny, or 'forgetting' your wallet.",
      "packToxicTitle": "🚩 Toxic or Valid?",
      "packToxicDesc": "35 dividing relationship dilemmas: checking their phone, banning nights out without you, or keeping photos of an ex.",
      "allPacksTitle": "Complete Catalog of all 16 Official Packs",
      "allPacksSub": "904 cards across 16 exclusive packs, playable instantly online or in the mobile app:",
      "allOptionsTitle": "All Game Modes & Options",
      "allOptionsSub": "A complete party game with no cloud account, built to play fast solo or with friends.",
      "optModesTitle": "🎮 4 Game Modes",
      "optModesDesc": "Classic (Flags), Duel Flash (1 phone · 2 players face-to-face), Quiz (Timed True/False) and Party (Dare or Truth).",
      "optMultiTitle": "👥 Multiplayer & Offline",
      "optMultiDesc": "Solo, Pass & Play (shared phone), Local Wi-Fi (LAN mDNS without Internet) and Global country consensus.",
      "optProgressionTitle": "📅 Retention & Streaks",
      "optProgressionDesc": "Daily Dilemma, 30-Day Almanac (mood dot grid), Daily Streaks and Loss-prevention shields.",
      "optCustomTitle": "🎨 Themes & Privacy",
      "optCustomDesc": "3 visual ambient themes (Classic, Halloween, Winter), 6 languages (FR, EN, ES, DE, NL, PT), local UGC pack creator, 0 cloud.",
      "storeBannerBadge": "⚡ FREE APP · 100% OFFLINE",
      "storeBannerHeading": "Ready to reveal what your friends really think?",
      "storeBannerSub": "Download Swipe Panic on Google Play and hype up your next party with 904 spicy cards and 16 explosive themes.",
      "storeFeat1": "🎉 16 Packs & 904 Cards",
      "storeFeat2": "⚡ 1v1 Face-to-Face Duel",
      "storeFeat3": "🔒 No Account · 100% Private",
      "storeFeat4": "📶 Local Wi-Fi & Pass & Play",
      "googlePlayGetIt": "GET IT ON",
      "tryWebFirst": "⚡ Or try web mini-game",
      "cardClashTag": "💥 CLASH!",
      "cardClashText": "“Should you share your phone password with your partner?”",
      "cardClashSub": "0% agreement · Live 1v1 Duel",
      "cardMatchTag": "💚 PERFECT MATCH",
      "cardMatchText": "“Offers a backup plan in the rain without complaining”",
      "cardMatchSub": "100% Green Flag · 2/2 voters",
      "phoneHeader": "Live Game · Dilemma Pack",
      "phoneCardTag": "🟢 GREEN FLAG",
      "phoneCardText": "Offers a backup plan in the rain without complaining.",
      "phoneConsensus": "🌍 74% global consensus",
      "phoneSwipeHint": "👈 Swipe left (Red Flag) · Right (Green Flag) 👉"
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
      "languagePt": "Portugués",
      "liveFeaturedTitle": "El LIVE jugaba",
      "liveFeaturedSub": "Las cartas que viste en directo — instala y juega con tus amigos.",
      "liveFeaturedCta": "Jugar este pack",
      "packColocTitle": "🏠 Compañeros y Vecinos",
      "packColocDesc": "35 dilemas de convivencia: platos sucios en el fregadero, ruido a las 4 AM, comida robada y notas pasivo-agresivas.",
      "packMoneyTitle": "💰 Dinero, Tacaños y Generosos",
      "packMoneyDesc": "35 dilemas sobre dinero: pedir 0,80 € de vuelta, dividir la cuenta al céntimo o 'olvidar' misteriosamente la cartera.",
      "packToxicTitle": "🚩 ¿Tóxico o Legítimo?",
      "packToxicDesc": "35 dilemas divisivos: espiar el móvil, prohibir salidas sin ti o guardar fotos de tu ex.",
      "allPacksTitle": "Catálogo Completo de los 16 Packs Oficiales",
      "allPacksSub": "904 cartas en 16 temas exclusivos, jugables al instante en línea o en la aplicación móvil:",
      "allOptionsTitle": "Todos los Modos y Opciones",
      "allOptionsSub": "Un juego de fiesta completo sin cuenta en la nube, pensado para jugar rápido a solas o con amigos.",
      "optModesTitle": "🎮 4 Modos de Juego",
      "optModesDesc": "Classic (Flags), Duelo Flash (1 móvil · 2 jugadores frente a frente), Quiz (Verdadero/Falso) y Party (Acción o Verdad).",
      "optMultiTitle": "👥 Multijugador y Offline",
      "optMultiDesc": "Solo, Pasar y Jugar (móvil compartido), Wi-Fi Local (LAN mDNS sin Internet) y Consenso mundial por país.",
      "optProgressionTitle": "📅 Retención y Rachas",
      "optProgressionDesc": "Dilema Diario, Almanaque de 30 días (grilla de humor), Racha de días (Streak) y Escudos anti-pérdida.",
      "optCustomTitle": "🎨 Temas y Privacidad",
      "optCustomDesc": "3 ambientes visuales (Clásico, Halloween, Invierno), 6 idiomas (FR, EN, ES, DE, NL, PT), creador UGC local, 0 nube.",
      "storeBannerBadge": "⚡ APP GRATUITA · 100% SIN CONEXIÓN",
      "storeBannerHeading": "¿Listo para descubrir lo que tus amigos piensan de verdad?",
      "storeBannerSub": "Descarga Swipe Panic en Google Play y anima tu próxima fiesta con 904 cartas atrevidas y 16 temas explosivos.",
      "storeFeat1": "🎉 16 Packs y 904 Cartas",
      "storeFeat2": "⚡ Duelo 1v1 Cara a Cara",
      "storeFeat3": "🔒 Sin Cuenta · 100% Privado",
      "storeFeat4": "📶 Wi-Fi Local y Pass & Play",
      "googlePlayGetIt": "DISPONIBLE EN",
      "tryWebFirst": "⚡ O probar el mini-juego web",
      "cardClashTag": "💥 ¡CHOQUE!",
      "cardClashText": "«¿Hay que compartir la contraseña del móvil en pareja?»",
      "cardClashSub": "0% de acuerdo · Duelo en vivo",
      "cardMatchTag": "💚 COINCIDENCIA TOTAL",
      "cardMatchText": "«Proponer un plan B bajo la lluvia sin quejarse»",
      "cardMatchSub": "100% Green Flag · 2/2 votantes",
      "phoneHeader": "Partida en curso · Pack Retos",
      "phoneCardTag": "🟢 GREEN FLAG",
      "phoneCardText": "Propone un plan B bajo la lluvia sin quejarse.",
      "phoneConsensus": "🌍 74% consenso mundial",
      "phoneSwipeHint": "👈 Desliza izquierda (Red Flag) · Derecha (Green Flag) 👉"
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
      "languagePt": "Portugiesisch",
      "liveFeaturedTitle": "Das LIVE spielte",
      "liveFeaturedSub": "Die Karten aus dem Stream — installier's und spiel mit deinen Freunden.",
      "liveFeaturedCta": "Diesen Pack spielen",
      "packColocTitle": "🏠 Mitbewohner & Nachbarn",
      "packColocDesc": "35 Dilemmas des Zusammenlebens: dreckiges Geschirr, Lärm um 4 Uhr morgens, Kühlschrankdiebe und Zettel.",
      "packMoneyTitle": "💰 Geld, Geizhälse & Gönner",
      "packMoneyDesc": "35 Geld-Dilemmas: 80 Cent per App zurückfordern, die Rechnung auf den Cent teilen oder die Geldbörse 'vergessen'.",
      "packToxicTitle": "🚩 Toxisch oder Berechtigt?",
      "packToxicDesc": "35 spaltende Beziehungs-Dilemmas: Handy durchsuchen, Partys ohne dich verbieten oder Ex-Fotos behalten.",
      "allPacksTitle": "Kompletter Katalog aller 16 Offiziellen Packs",
      "allPacksSub": "904 Karten in 16 exklusiven Themen, sofort online oder in der mobilen App spielbar:",
      "allOptionsTitle": "Alle Spielmodi & Optionen",
      "allOptionsSub": "Ein komplettes Partyspiel ohne Cloud-Konto, schnell spielbar solo oder in der Gruppe.",
      "optModesTitle": "🎮 4 Spielmodi",
      "optModesDesc": "Classic (Flags), Flash-Duell (1 Smartphone · 2 Spieler gegenüber), Quiz (Wahr/Falsch) und Party (Pflicht oder Wahrheit).",
      "optMultiTitle": "👥 Mehrspieler & Offline",
      "optMultiDesc": "Solo, Pass & Play (geteiltes Smartphone), Lokales WLAN (LAN mDNS ohne Internet) und Weltweiter Konsens.",
      "optProgressionTitle": "📅 Bindung & Serien",
      "optProgressionDesc": "Tägliches Dilemma, 30-Tage-Almanach (Stimmungsraster), Tagesserie (Streak) und Schutzschilde.",
      "optCustomTitle": "🎨 Designs & Datenschutz",
      "optCustomDesc": "3 Stimmungsdesigns (Klassisch, Halloween, Winter), 6 Sprachen (FR, EN, ES, DE, NL, PT), lokaler UGC-Pack-Creator, 0 Cloud.",
      "storeBannerBadge": "⚡ KOSTENLOSE APP · 100% OFFLINE",
      "storeBannerHeading": "Bereit zu erfahren, was deine Freunde wirklich denken?",
      "storeBannerSub": "Lade Swipe Panic bei Google Play herunter und heize deiner nächsten Party mit 904 frechen Karten und 16 Themen ein.",
      "storeFeat1": "🎉 16 Packs & 904 Karten",
      "storeFeat2": "⚡ 1v1 Face-to-Face Duell",
      "storeFeat3": "🔒 Kein Konto · 100% Privat",
      "storeFeat4": "📶 Lokales WLAN & Pass & Play",
      "googlePlayGetIt": "JETZT BEI",
      "tryWebFirst": "⚡ Oder Web-Minispiel testen",
      "cardClashTag": "💥 CLASH!",
      "cardClashText": "„Sollte man seinen Handy-Code mit dem Partner teilen?“",
      "cardClashSub": "0% Einigkeit · Live-Duell",
      "cardMatchTag": "💚 PERFEKTE EINIGKEIT",
      "cardMatchText": "„Bei Regen ohne Murren einen Plan B vorschlagen“",
      "cardMatchSub": "100% Green Flag · 2/2 Stimmen",
      "phoneHeader": "Laufendes Spiel · Dilemma-Pack",
      "phoneCardTag": "🟢 GREEN FLAG",
      "phoneCardText": "Schlägt bei Regen ohne Murren einen Plan B vor.",
      "phoneConsensus": "🌍 74% weltweiter Konsens",
      "phoneSwipeHint": "👈 Nach links (Red Flag) · Nach rechts (Green Flag) 👉"
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
      "languagePt": "Portugees",
      "liveFeaturedTitle": "De LIVE speelde",
      "liveFeaturedSub": "De kaarten die je in de stream zag — installeer en speel met je vrienden.",
      "liveFeaturedCta": "Speel dit pakket",
      "packColocTitle": "🏠 Huisgenoten & Buren",
      "packColocDesc": "35 samenwoondilemma's: vuile vaat in de gootsteen, lawaai om 4 uur 's ochtends, koelkastdieven en briefjes.",
      "packMoneyTitle": "💰 Geld, Krenten & Vrijgevigen",
      "packMoneyDesc": "35 gelddilemma's: 80 cent terugvragen via Tikkie, de rekening tot op de cent splitsen of je portemonnee 'vergeten'.",
      "packToxicTitle": "🚩 Toxisch of Terecht?",
      "packToxicDesc": "35 verdeelde relatiedilemma's: iemands telefoon checken, feestjes zonder jou verbieden of ex-foto's bewaren.",
      "allPacksTitle": "Volledige Catalogus van alle 16 Officiële Packs",
      "allPacksSub": "904 kaarten in 16 exclusieve thema's, direct online of in de mobiele app speelbaar:",
      "allOptionsTitle": "Alle Spelmodi & Opties",
      "allOptionsSub": "Een compleet partyspel zonder cloudaccount, gemaakt om snel solo of in groep te spelen.",
      "optModesTitle": "🎮 4 Spelmodi",
      "optModesDesc": "Classic (Flags), Flash-Duel (1 telefoon · 2 spelers tegenover elkaar), Quiz (Waar/Niet waar) en Party (Doen of Waarheid).",
      "optMultiTitle": "👥 Multiplayer & Offline",
      "optMultiDesc": "Solo, Pass & Play (gedeelde telefoon), Lokale wifi (LAN mDNS zonder internet) en Wereldwijde consensus.",
      "optProgressionTitle": "📅 Behoud & Reeksen",
      "optProgressionDesc": "Dagelijks Dilemma, 30-Dagen Almanak (stemmingsraster), Dagelijkse streak en Verliesschilden.",
      "optCustomTitle": "🎨 Thema's & Privacy",
      "optCustomDesc": "3 sfeerthema's (Klassiek, Halloween, Winter), 6 talen (FR, EN, ES, DE, NL, PT), lokale UGC packmaker, 0 cloud.",
      "storeBannerBadge": "⚡ GRATIS APP · 100% OFFLINE",
      "storeBannerHeading": "Klaar om te ontdekken wat je vrienden echt denken?",
      "storeBannerSub": "Download Swipe Panic op Google Play en breng sfeer op je feestje met 904 gewaagde kaarten en 16 thema's.",
      "storeFeat1": "🎉 16 Packs & 904 Kaarten",
      "storeFeat2": "⚡ 1v1 Face-to-Face Duel",
      "storeFeat3": "🔒 Geen Account · 100% Privé",
      "storeFeat4": "📶 Lokale Wi-Fi & Pass & Play",
      "googlePlayGetIt": "ONTDEK HET OP",
      "tryWebFirst": "⚡ Of probeer web mini-game",
      "cardClashTag": "💥 CLASH!",
      "cardClashText": "“Moet je de code van je telefoon delen met je partner?”",
      "cardClashSub": "0% eens · Live 1v1 Duel",
      "cardMatchTag": "💚 PERFECTE OVEREENKOMST",
      "cardMatchText": "“Een plan B bedenken in de regen zonder te zeuren”",
      "cardMatchSub": "100% Green Flag · 2/2 stemmers",
      "phoneHeader": "Live Spel · Dilemma Pack",
      "phoneCardTag": "🟢 GREEN FLAG",
      "phoneCardText": "Stelt bij regen zonder morren een plan B voor.",
      "phoneConsensus": "🌍 74% wereldwijde consensus",
      "phoneSwipeHint": "👈 Veeg naar links (Red Flag) · Rechts (Green Flag) 👉"
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
      "languagePt": "Português",
      "liveFeaturedTitle": "O LIVE jogava",
      "liveFeaturedSub": "As cartas que viste na stream — instala e joga com os teus amigos.",
      "liveFeaturedCta": "Jogar este pacote",
      "packColocTitle": "🏠 Colegas & Vizinhos",
      "packColocDesc": "35 dilemas de convivência: loiça na pia, barulho às 4 da manhã, ladrões de frigorífico e bilhetes passivo-agressivos.",
      "packMoneyTitle": "💰 Dinheiro, Mãos-de-Vaca & Generosos",
      "packMoneyDesc": "35 dilemas de dinheiro: cobrar 0,80 € por app, dividir a conta ao cêntimo ou 'esquecer' misteriosamente a carteira.",
      "packToxicTitle": "🚩 Tóxico ou Legítimo?",
      "packToxicDesc": "35 dilemas de relacionamento: mexer no telemóvel, proibir saídas sem ti ou guardar fotos de ex.",
      "allPacksTitle": "Catálogo Completo de todos os 16 Pacotes Oficiais",
      "allPacksSub": "904 cartas em 16 temas exclusivos, jogáveis instantaneamente online ou na aplicação móvel:",
      "allOptionsTitle": "Todos os Modos e Opções",
      "allOptionsSub": "Um party game completo sem conta cloud, pensado para jogar rápido a solo ou com amigos.",
      "optModesTitle": "🎮 4 Modos de Jogo",
      "optModesDesc": "Classic (Flags), Duelo Flash (1 telemóvel · 2 jogadores frente a frente), Quiz (Verdadeiro/Falso) e Party (Ação ou Verdade).",
      "optMultiTitle": "👥 Multijogador & Offline",
      "optMultiDesc": "Solo, Pass & Play (telemóvel partilhado), Wi-Fi Local (LAN mDNS sem Internet) e Consenso mundial por país.",
      "optProgressionTitle": "📅 Retenção & Sequências",
      "optProgressionDesc": "Dilema Diário, Almanaque de 30 dias (grelha de humor), Sequência de dias (Streak) e Escudos anti-perda.",
      "optCustomTitle": "🎨 Temas & Privacidade",
      "optCustomDesc": "3 ambientes visuais (Clássico, Halloween, Inverno), 6 idiomas (FR, EN, ES, DE, NL, PT), criador UGC local, 0 cloud.",
      "storeBannerBadge": "⚡ APP GRÁTIS · 100% OFFLINE",
      "storeBannerHeading": "Pronto para descobrir o que os teus amigos realmente pensam?",
      "storeBannerSub": "Transfere o Swipe Panic no Google Play e anima a tua próxima festa com 904 cartas ousadas e 16 temas explosivos.",
      "storeFeat1": "🎉 16 Packs & 904 Cartas",
      "storeFeat2": "⚡ Duelo 1v1 Frente a Frente",
      "storeFeat3": "🔒 Sem Conta · 100% Privado",
      "storeFeat4": "📶 Wi-Fi Local e Pass & Play",
      "googlePlayGetIt": "DISPONÍVEL NO",
      "tryWebFirst": "⚡ Ou testar o minijogo web",
      "cardClashTag": "💥 CONFRONTO!",
      "cardClashText": "«Deves partilhar a palavra-passe do telemóvel na relação?»",
      "cardClashSub": "0% de acordo · Duelo ao vivo",
      "cardMatchTag": "💚 SINTONIA TOTAL",
      "cardMatchText": "«Propor um plano B à chuva sem refilar»",
      "cardMatchSub": "100% Green Flag · 2/2 votantes",
      "phoneHeader": "Jogo em direto · Pack Dilemas",
      "phoneCardTag": "🟢 GREEN FLAG",
      "phoneCardText": "Propõe um plano B à chuva sem refilar.",
      "phoneConsensus": "🌍 74% consenso global",
      "phoneSwipeHint": "👈 Desliza para a esquerda (Red Flag) · Direita (Green Flag) 👉"
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
    if (path.includes('live')) return 'titleLive';
    if (path.includes('changelog')) return 'titleChangelog';
    if (path.includes('404')) return 'title404';
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
    let saved = null;
    try {
      saved = localStorage.getItem('sp_lang');
    } catch (error) {}
    if (!window.SwipePanicAcquisition) {
      return supportedLangs.includes(saved) ? saved : browserLang();
    }
    return SwipePanicAcquisition.resolveLanguage({
      search: window.location.search,
      storedLanguage: saved,
      navigatorLanguages: navigator.languages || [navigator.language || ''],
    });
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

  // --- Live -> app funnel (live.html) ---------------------------------------
  // Infers which official pack a recent live featured (from the consensus
  // card-id prefixes, mirroring the app's ConsensusService) and surfaces a
  // store CTA tagged with UTM + the pack id, so a stream viewer lands on the
  // exact pack they saw. Kept fully static (just fetches a published JSON).
  const STORE_URL =
    'https://play.google.com/store/apps/details?id=com.swipepanic.swipe_panic';
  const PREFIX_TO_PACK = {
    vacation: 'vacation_pack', dating: 'dating_pack', office: 'office_pack',
    gym: 'gym_pack_v1', party: 'party_pack_v1', quiz: 'quiz_pack_v1'
  };
  // Editorial intensity 1..3, mirrors the app's PackCatalog.
  const SITE_PACK_INTENSITY = {
    vacation_pack: 1, quiz_pack_v1: 1, dating_pack: 2,
    office_pack: 2, gym_pack_v1: 2, party_pack_v1: 3
  };
  const SITE_PACK_LABELS = {
    vacation_pack: { fr: 'Vacances', en: 'Vacation', es: 'Vacaciones', de: 'Urlaub', nl: 'Vakantie', pt: 'Férias' },
    dating_pack: { fr: 'Dating', en: 'Dating', es: 'Citas', de: 'Dating', nl: 'Dating', pt: 'Encontros' },
    office_pack: { fr: 'Bureau', en: 'Office', es: 'Oficina', de: 'Büro', nl: 'Kantoor', pt: 'Escritório' },
    gym_pack_v1: { fr: 'Gym', en: 'Gym', es: 'Gimnasio', de: 'Gym', nl: 'Sportschool', pt: 'Ginásio' },
    party_pack_v1: { fr: 'Soirée', en: 'Party', es: 'Fiesta', de: 'Party', nl: 'Feest', pt: 'Festa' },
    quiz_pack_v1: { fr: 'Quiz', en: 'Quiz', es: 'Quiz', de: 'Quiz', nl: 'Quiz', pt: 'Quiz' }
  };

  let _liveStatsPromise = null;
  function loadLiveStats() {
    if (!_liveStatsPromise) {
      _liveStatsPromise = fetch('./data/live_consensus.json', { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null);
    }
    return _liveStatsPromise;
  }

  function inferFeaturedPack(stats) {
    if (!stats) return null;
    const counts = {};
    Object.keys(stats).forEach((id) => {
      const pack = PREFIX_TO_PACK[String(id).split('_')[0]];
      if (pack) counts[pack] = (counts[pack] || 0) + 1;
    });
    let best = null, n = -1;
    Object.keys(counts).forEach((p) => { if (counts[p] > n) { best = p; n = counts[p]; } });
    return best;
  }

  function storeUrlForPack(pack) {
    if (!window.SwipePanicAcquisition) return STORE_URL;
    const campaign = new URLSearchParams({
      utm_source: 'live',
      utm_medium: 'site',
      utm_campaign: 'live_funnel',
      utm_content: pack,
    });
    return SwipePanicAcquisition.playStoreUrl({
      baseUrl: STORE_URL,
      search: `?${campaign.toString()}`,
      language: getLang(),
    });
  }

  async function renderLiveFeatured(lang) {
    const box = document.getElementById('live-featured');
    if (!box) return;
    const stats = await loadLiveStats();
    const pack = inferFeaturedPack(stats);
    if (!pack) { box.hidden = true; return; }
    const copy = copyFor(lang);
    const label = (SITE_PACK_LABELS[pack] || {})[lang] ||
      (SITE_PACK_LABELS[pack] || {}).en || pack;
    const flames = '🔥'.repeat(SITE_PACK_INTENSITY[pack] || 0);
    const set = (sel, val) => { const n = box.querySelector(sel); if (n) n.textContent = val; };
    set('[data-featured-title]', copy.liveFeaturedTitle || '');
    set('[data-featured-pack]', label);
    set('[data-featured-flames]', flames);
    set('[data-featured-sub]', copy.liveFeaturedSub || '');
    const cta = box.querySelector('[data-featured-cta]');
    if (cta) { cta.href = storeUrlForPack(pack); cta.textContent = copy.liveFeaturedCta || copy.download || 'Download'; }
    box.hidden = false;
  }

  // --- Daily Dilemma --------------------------------------------------------
  let _catalogPromise = null;
  function loadOfficialCatalog() {
    if (!_catalogPromise) {
      _catalogPromise = fetch('./official_card_catalog.json')
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null);
    }
    return _catalogPromise;
  }

  function mixHash(hash, value) {
    return (Math.imul(hash, 31) + value) & 0x7fffffff;
  }

  function stableHash(ids) {
    let hash = 0x1fffffff;
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      hash = mixHash(hash, id.length);
      for (let j = 0; j < id.length; j++) {
        hash = mixHash(hash, id.charCodeAt(j));
      }
    }
    return hash;
  }

  function greatestCommonDivisor(left, right) {
    while (right !== 0) {
      const rem = left % right;
      left = right;
      right = rem;
    }
    return left;
  }

  function coprimeStep(length, seed) {
    let candidate = (seed % (length - 1)) + 1;
    while (greatestCommonDivisor(candidate, length) !== 1) {
      candidate = (candidate % (length - 1)) + 1;
    }
    return candidate;
  }

  function positiveModulo(value, modulus) {
    return ((value % modulus) + modulus) % modulus;
  }

  function selectCardForDate(entries, date) {
    const sorted = entries.slice().sort((a, b) => a.id.localeCompare(b.id));
    if (sorted.length === 0) return null;
    if (sorted.length === 1) return sorted[0];
    const ids = sorted.map((e) => e.id);
    const seed = stableHash(ids);
    const offset = seed % sorted.length;
    const step = coprimeStep(sorted.length, mixHash(seed, sorted.length));
    const epoch = Date.UTC(1970, 0, 1);
    const dayDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const dayNumber = Math.floor((dayDate - epoch) / 86400000);
    const cyclePosition = positiveModulo(dayNumber, sorted.length);
    const selectedIndex = (offset + (cyclePosition * step)) % sorted.length;
    return sorted[selectedIndex];
  }

  const DILEMMA_PACKS = new Set([
    'dating_pack', 'clash_pack', 'office_pack', 'gym_pack_v1',
    'vacation_pack', 'back_to_school_pack', 'halloween_pack',
    'winter_holidays_pack', 'valentines_pack', 'summer_pack',
    'genz_pack', 'toxic_pack', 'coloc_pack', 'money_pack'
  ]);

  let _dilemmaVoteConfigPromise = null;
  function loadVoteConfig() {
    if (!_dilemmaVoteConfigPromise) {
      _dilemmaVoteConfigPromise = fetch('./vote_config.json', { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null);
    }
    return _dilemmaVoteConfigPromise;
  }

  const LANG_TO_DEFAULT_FLAG = {
    fr: '🇫🇷',
    en: '🇺🇸',
    es: '🇪🇸',
    de: '🇩🇪',
    nl: '🇳🇱',
    pt: '🇧🇷'
  };

  function getPlayerCountryFlag(lang) {
    try {
      const stored = localStorage.getItem('sp_country');
      if (stored) return stored;
    } catch (_) {}
    return LANG_TO_DEFAULT_FLAG[lang] || '🇫🇷';
  }

  async function submitDilemmaVote(cardId, choice, lang) {
    const config = await loadVoteConfig();
    if (!config || !config.formId || !config.entries) return;
    try {
      const url = `https://docs.google.com/forms/d/e/${config.formId}/formResponse`;
      const body = new URLSearchParams();
      if (config.entries.card_id) body.append(config.entries.card_id, cardId);
      if (config.entries.choice) body.append(config.entries.choice, choice);
      if (config.entries.lang) body.append(config.entries.lang, lang);
      const flag = getPlayerCountryFlag(lang);
      if (config.entries.country && flag) body.append(config.entries.country, flag);
      fetch(url, { method: 'POST', mode: 'no-cors', body: body }).catch(() => {});
    } catch (_) {}
  }

  let _dailyDilemmaWired = false;
  let _activeDailyCard = null;
  let _activeDailyConsensus = null;

  async function renderDailyDilemma(lang) {
    const section = document.getElementById('daily-dilemma');
    if (!section) return;

    const copy = copyFor(lang);
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const dateNode = document.getElementById('daily-dilemma-date');
    if (dateNode) {
      try {
        dateNode.textContent = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric' }).format(now);
      } catch (_) {
        dateNode.textContent = dateStr;
      }
    }

    if (!_activeDailyCard) {
      const [catalog, consensus] = await Promise.all([loadOfficialCatalog(), loadLiveStats()]);
      if (!catalog || !catalog.cards || !consensus) return;

      const qualified = new Set(
        Object.keys(consensus).filter((id) => {
          const c = consensus[id];
          return c && c.measured_at && (c.sample_size || 0) >= 100 && (c.source === 'live_votes' || c.source === 'web_votes');
        })
      );

      const eligible = catalog.cards.filter((card) => {
        if (!DILEMMA_PACKS.has(card.packId)) return false;
        if (card.enabled === false) return false;
        if (card.live_tier === 'risky' || card.live_tier === 'forbidden') return false;
        return qualified.has(card.id);
      });

      if (!eligible.length) return;
      _activeDailyCard = selectCardForDate(eligible, now);
      _activeDailyConsensus = _activeDailyCard ? consensus[_activeDailyCard.id] : null;
    }

    const card = _activeDailyCard;
    const stats = _activeDailyConsensus;
    if (!card) return;

    // Set Theme
    const tagNode = document.getElementById('daily-dilemma-tag');
    if (tagNode) {
      const label = (SITE_PACK_LABELS[card.packId] || {})[lang] || (SITE_PACK_LABELS[card.packId] || {}).en || card.theme;
      tagNode.textContent = label;
    }

    // Set Text
    const textNode = document.getElementById('daily-dilemma-text');
    if (textNode) {
      textNode.textContent = (card.texts || {})[lang] || (card.texts || {}).fr || (card.texts || {}).en || '';
    }

    // Check existing vote
    const storageKey = 'sp_daily_vote_' + dateStr;
    const existingVote = localStorage.getItem(storageKey);

    const actionsRow = document.getElementById('daily-dilemma-actions');
    const verdictBox = document.getElementById('daily-dilemma-verdict');

    function showVerdict(choice) {
      if (actionsRow) actionsRow.style.display = 'none';
      if (verdictBox) verdictBox.style.display = 'block';

      // Your vote tag
      const voteTag = document.getElementById('daily-your-vote-tag');
      if (voteTag) {
        const isAccept = choice === 'accept';
        voteTag.className = 'vote-tag ' + (isAccept ? 'accepted' : 'rejected');
        voteTag.textContent = `${copy.dailyYourVote || 'Ton vote :'} ${isAccept ? '👍 ' + (copy.dilemmaAccept || "J'accepte") : '👎 ' + (copy.dilemmaReject || 'Je refuse')}`;
      }

      // Consensus percentages
      const acceptPct = stats ? stats.accept : 50;
      const rejectPct = stats ? stats.reject : 50;
      const pctAcceptNode = document.getElementById('daily-pct-accept');
      const pctRejectNode = document.getElementById('daily-pct-reject');
      if (pctAcceptNode) {
        pctAcceptNode.textContent = (copy.dailyConsensusAccept || '{pct}% Acceptent').replace('{pct}', acceptPct);
      }
      if (pctRejectNode) {
        pctRejectNode.textContent = (copy.dailyConsensusReject || '{pct}% Refusent').replace('{pct}', rejectPct);
      }

      // Progress bars
      const barAccept = document.getElementById('daily-bar-accept');
      const barReject = document.getElementById('daily-bar-reject');
      if (barAccept) barAccept.style.width = acceptPct + '%';
      if (barReject) barReject.style.width = rejectPct + '%';

      // Sample size
      const sampleNode = document.getElementById('daily-consensus-sample');
      if (sampleNode) {
        const sample = (stats?.sample_size || 0) + (existingVote ? 0 : 1);
        sampleNode.textContent = (copy.dailyConsensusSample || 'Basé sur {sample} votes vérifiés').replace('{sample}', sample);
      }

      // Country chips & feedback
      const countryGrid = document.getElementById('daily-country-breakdown');
      if (countryGrid) {
        countryGrid.innerHTML = '';
        if (stats && stats.countries) {
          const flags = Object.keys(stats.countries).slice(0, 8);
          flags.forEach((flag) => {
            const c = stats.countries[flag];
            if (!c) return;
            const chip = document.createElement('div');
            chip.className = 'daily-country-chip';
            chip.innerHTML = `<span>${flag}</span> <span class="pct-green">${c.accept}%</span> / <span class="pct-red">${c.reject}%</span>`;
            countryGrid.appendChild(chip);
          });
        }
        const playerFlag = getPlayerCountryFlag(lang);
        const hintDiv = document.createElement('div');
        hintDiv.className = 'daily-country-hint';
        hintDiv.textContent = (copy.countryThresholdHint || '✓ Vote comptabilisé pour {flag} ! Les statistiques par pays apparaissent dès 15 votes.').replace('{flag}', playerFlag);
        countryGrid.appendChild(hintDiv);
      }

      // 30-Day Almanac
      const gridNode = document.getElementById('daily-almanac-grid');
      const moodNode = document.getElementById('daily-almanac-mood');
      const streakNode = document.getElementById('daily-almanac-streak');
      if (gridNode) {
        let history = {};
        try {
          const raw = localStorage.getItem('sp_daily_almanac_history');
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) history = parsed;
          }
        } catch (_) {}

        if (choice) {
          history[dateStr] = choice;
          try {
            localStorage.setItem('sp_daily_almanac_history', JSON.stringify(history));
          } catch (_) {}
        }

        gridNode.innerHTML = '';

        let totalAnswered = 0;
        let acceptCount = 0;

        for (let i = 29; i >= 0; i--) {
          const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
          const y = d.getFullYear();
          const m = String(d.getMonth() + 1).padStart(2, '0');
          const day = String(d.getDate()).padStart(2, '0');
          const dKey = `${y}-${m}-${day}`;
          const isToday = (i === 0);

          const vote = history[dKey] || (isToday ? choice : localStorage.getItem('sp_daily_vote_' + dKey));

          const dot = document.createElement('div');
          dot.className = 'almanac-dot';
          if (isToday) dot.classList.add('dot-today');

          if (vote === 'accept') {
            dot.classList.add('dot-green');
            dot.title = `${dKey}: ${copy.almanacLegendGreen || 'Accepté'}`;
            totalAnswered++;
            acceptCount++;
          } else if (vote === 'reject') {
            dot.classList.add('dot-red');
            dot.title = `${dKey}: ${copy.almanacLegendRed || 'Refusé'}`;
            totalAnswered++;
          } else {
            dot.classList.add('dot-empty');
            dot.title = `${dKey}: ${copy.almanacLegendMissed || 'Non voté'}`;
          }

          gridNode.appendChild(dot);
        }

        if (moodNode) {
          if (totalAnswered < 5) {
            moodNode.textContent = copy.almanacMoodUnknown || "Humeur : En observation... ⏳";
            moodNode.className = 'almanac-mood-badge mood-unknown';
          } else {
            const ratio = acceptCount / totalAnswered;
            if (ratio >= 0.6) {
              moodNode.textContent = copy.almanacMoodBenevolent || "Humeur : Bienveillant 😇";
              moodNode.className = 'almanac-mood-badge mood-benevolent';
            } else if (ratio <= 0.4) {
              moodNode.textContent = copy.almanacMoodUncompromising || "Humeur : Intraitable ⚖️";
              moodNode.className = 'almanac-mood-badge mood-uncompromising';
            } else {
              moodNode.textContent = copy.almanacMoodBalanced || "Humeur : Équilibré ⚖️";
              moodNode.className = 'almanac-mood-badge mood-balanced';
            }
          }
        }

        if (streakNode) {
          let streak = 0;
          for (let i = 0; i < 30; i++) {
            const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            const dKey = `${y}-${m}-${day}`;
            const vote = history[dKey] || (i === 0 ? choice : localStorage.getItem('sp_daily_vote_' + dKey));
            if (vote) {
              streak++;
            } else if (i > 0) {
              break;
            }
          }
          streakNode.textContent = (copy.almanacStreakCount || '🔥 Série : {count} jour(s)').replace('{count}', streak);
        }
      }

      // Store CTA link with UTM
      const storeBtn = document.getElementById('daily-dilemma-store-btn');
      if (storeBtn && window.SwipePanicAcquisition) {
        const campaign = new URLSearchParams({
          utm_source: 'site',
          utm_medium: 'daily_dilemma',
          utm_campaign: 'daily_dilemma',
          utm_content: card.id,
        });
        storeBtn.href = SwipePanicAcquisition.playStoreUrl({
          baseUrl: STORE_URL,
          search: `?${campaign.toString()}`,
          language: lang,
        });
      }
    }

    if (existingVote) {
      showVerdict(existingVote);
    } else {
      if (actionsRow) actionsRow.style.display = 'flex';
      if (verdictBox) verdictBox.style.display = 'none';
    }

    if (!_dailyDilemmaWired) {
      _dailyDilemmaWired = true;
      const btnAccept = document.getElementById('daily-vote-accept');
      const btnReject = document.getElementById('daily-vote-reject');

      if (btnAccept) {
        btnAccept.addEventListener('click', () => {
          localStorage.setItem(storageKey, 'accept');
          submitDilemmaVote(card.id, 'accept', lang);
          showVerdict('accept');
        });
      }
      if (btnReject) {
        btnReject.addEventListener('click', () => {
          localStorage.setItem(storageKey, 'reject');
          submitDilemmaVote(card.id, 'reject', lang);
          showVerdict('reject');
        });
      }
    }
  }

  function setText(lang) {
    const copy = copyFor(lang);
    document.documentElement.lang = lang;
    document.title = copy[pageKey()] || document.title;
    if (window.SwipePanicAcquisition) {
      SwipePanicAcquisition.decorateStoreLinks(document, window.location, lang);
    }
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (!copy[key]) return;
      // Some strings (e.g. the play guide) carry intentional inline markup
      // (<strong>, <em>, <code>). Render those as HTML so the tags don't show
      // literally; plain strings stay textContent. All values are static,
      // author-controlled copy (no user input), so innerHTML is safe here.
      if (/<[a-z][\s\S]*>/i.test(copy[key])) {
        node.innerHTML = copy[key];
      } else {
        node.textContent = copy[key];
      }
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
    renderLiveFeatured(lang);
    renderDailyDilemma(lang);
    updateSeasonalBanner(lang);
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

  function getAutoTheme() {
    const month = new Date().getMonth(); // 9 = October, 11 = December, 0 = January
    if (month === 9) return 'halloween';
    if (month === 11 || month === 0) return 'winter';
    return 'classic';
  }

  function updateSeasonalBanner(currentLang) {
    const theme = localStorage.getItem('sp_theme') || getAutoTheme();
    const banner = document.getElementById('seasonal-event-banner');
    if (!banner) return;
    const dict = dictionary[currentLang] || dictionary.fr;
    if (theme === 'halloween') {
      banner.className = 'seasonal-event-banner halloween-banner';
      banner.style.display = 'inline-flex';
      banner.innerHTML = `<span>${dict.seasonalBannerHalloween || "🎃 SPÉCIAL HALLOWEEN · 35 dilemmes frissons et fous rires entre potes !"}</span> <a href="./play.html?pack=halloween_pack" class="seasonal-banner-btn">${dict.seasonalBannerHalloweenCta || "⚡ Jouer ce pack"}</a>`;
    } else if (theme === 'winter') {
      banner.className = 'seasonal-event-banner winter-banner';
      banner.style.display = 'inline-flex';
      banner.innerHTML = `<span>${dict.seasonalBannerWinter || "❄️ FÊTES D'HIVER · 35 dilemmes de réveillon, cadeaux gênants et raclette !"}</span> <a href="./play.html?pack=winter_holidays_pack" class="seasonal-banner-btn">${dict.seasonalBannerWinterCta || "⚡ Jouer ce pack"}</a>`;
    } else {
      banner.style.display = 'none';
      banner.innerHTML = '';
    }
  }

  function applyTheme(theme, currentLang) {
    document.body.classList.remove('theme-halloween', 'theme-winter');
    if (theme === 'halloween') {
      document.body.classList.add('theme-halloween');
    } else if (theme === 'winter') {
      document.body.classList.add('theme-winter');
    }
    localStorage.setItem('sp_theme', theme);

    // Update active state on theme buttons
    document.querySelectorAll('[data-theme]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });

    updateSeasonalBanner(currentLang || getLang());
  }

  function initSeasonalTheme(currentLang) {
    const savedTheme = localStorage.getItem('sp_theme');
    const activeTheme = savedTheme || getAutoTheme();
    applyTheme(activeTheme, currentLang);
  }

  function wireThemeSwitcher() {
    document.querySelectorAll('[data-theme]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme') || 'classic';
        applyTheme(theme, getLang());
      });
    });
  }

  const lang = getLang();
  setText(lang);
  initSeasonalTheme(lang);
  wireThemeSwitcher();
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
