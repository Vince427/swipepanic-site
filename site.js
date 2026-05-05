(function () {
  const dictionary = {
    fr: {
      navHome: 'Home',
      navFeatures: 'Features',
      navCollection: 'Collection',
      navUgc: 'UGC',
      navSupport: 'Support',
      navReport: 'Report',
      navSuggest: 'Suggest',
      heroKicker: 'Jouez partout, même hors ligne',
      heroCopy: 'Le party game qui révèle ton groupe en 5 minutes : red flags, quiz, Action ou Vérité, packs amis et récaps privés.',
      download: 'Télécharger',
      suggestCta: 'Suggérer une carte',
      featuresTitle: 'Des choix qui lancent le débat',
      featuresCopy: 'Swipe Panic reste jouable sans compte cloud : solo, pass-and-play et Wi-Fi local sont pensés pour les soirées où tout doit aller vite.',
      classicCopy: 'Swipe les red flags et green flags, puis découvre le profil de la partie.',
      quizCopy: 'Vrai ou faux, 20 cartes, 50 cartes ou Max, avec chrono de récap seulement.',
      partyCopy: 'Action ou Vérité, packs amis, votes locaux et récap clair.',
      collectionTitle: 'Build your legendary collection',
      collectionCopy: 'Le Hall of Fame et le Hall of Shame gardent la mémoire des choix marquants, des débats et des cartes qui méritent une place au musée.',
      reportContent: 'Signaler un contenu',
      privacy: 'Privacy',
      storeTitle: 'Disponible sur Google Play',
      storeCopy: 'Une expérience rapide, fun et pensée pour les soirées : packs officiels, packs amis, modes solo/local et règles UGC claires.',
      footer: '© Swipe Panic. Contact : support@swipepanic.app',
      suggestTitle: 'Suggérer une carte',
      suggestIntro: 'Envoyez une idée courte, claire et sûre pour Classic, Quiz ou Action/Vérité. Le formulaire prépare un email et copie le texte pour éviter toute perte.',
      fieldMode: 'Mode',
      fieldIdea: 'Texte de la carte',
      fieldNote: 'Note optionnelle',
      fieldLang: 'Langue de la carte',
      prepareEmail: 'Préparer l’email',
      copySuggestion: 'Copier la suggestion',
      copied: 'Suggestion copiée. Si votre mail ne s’ouvre pas, envoyez-la à support@swipepanic.app.',
      missingIdea: 'Ajoutez d’abord une idée de carte.',
      suggestionSubject: 'Suggestion carte Swipe Panic',
      suggestionHeader: 'Nouvelle suggestion de carte Swipe Panic',
      placeholderIdea: 'Ex: Il/Elle parle de son ex au premier rendez-vous.',
      placeholderNote: 'Ton pseudo, contexte, pack visé, variante...',
      formatHelpClassic: 'Format Classic : une phrase courte de dating. Pas de lien, pas de coordonnées, pas de personne réelle ciblée.',
      formatHelpQuiz: 'Format Quiz : commence par + pour Vrai ou - pour Faux. Exemple : + Le premier message compte.',
      formatHelpSocial: 'Format Action/Vérité : écris deux textes séparés par |. Exemple : Fais un compliment | Raconte ton pire rendez-vous.',
      invalidTooShort: 'La suggestion est trop courte. Ajoute une vraie phrase jouable.',
      invalidTooLong: 'La suggestion est trop longue. Vise une carte courte et lisible en soirée.',
      invalidLink: 'Les liens externes ne sont pas autorisés dans les suggestions UGC.',
      invalidPhone: 'Les coordonnées ou longues suites de chiffres ne sont pas autorisées.',
      invalidBlocked: 'Cette suggestion contient un terme interdit par les règles UGC.',
      invalidQuizPrefix: 'Pour Quiz, commence le texte par + si la phrase est vraie, ou - si elle est fausse.',
      invalidSocialPair: 'Pour Action/Vérité, utilise exactement le format : Action | Vérité, avec les deux textes remplis.',
      spamWait: 'Suggestion déjà préparée récemment. Attends quelques minutes avant d’en envoyer une autre.',
      safeCheck: 'Contrôle UGC local : OK',
      suggestionFooter: 'Les suggestions peuvent être adaptées avant intégration.',
      privacyTitle: 'Politique de confidentialité',
      privacyIntro: "Swipe Panic est conçu pour fonctionner d'abord sur votre téléphone. Les préférences, packs créés, résumés privés et signalements restent sur l'appareil sauf action volontaire de partage ou de signalement.",
      privacyLocalTitle: 'Données locales',
      privacyLocalCopy: "L'app peut stocker localement les réglages, packs amis, feedbacks de cartes, historique privé et collection. Ces données ne sont pas envoyées à une base cloud Swipe Panic.",
      privacyAdsTitle: 'Publicité et achats',
      privacyAdsCopy: "L'application peut utiliser Google Mobile Ads et les achats intégrés des stores. Ces services peuvent traiter des données selon leurs propres règles et les choix de consentement affichés par l'app ou le système.",
      privacyReportsTitle: 'Signalements',
      privacyReportsCopy: "Si vous signalez un contenu UGC, l'app prépare un rapport que vous décidez d'envoyer par email ou via la feuille de partage du téléphone.",
      privacyContactCopy: 'Contact : support@swipepanic.app',
      termsTitle: "Conditions d'utilisation",
      termsIntro: "En utilisant Swipe Panic, vous acceptez de jouer de manière responsable et de ne pas créer, importer ou partager de contenu illégal, haineux, violent, sexuel, harcelant ou portant atteinte à autrui.",
      termsUserContentTitle: 'Contenu utilisateur',
      termsUserContentCopy: "Les packs créés par les joueurs sont sous leur responsabilité. L'app peut bloquer certains contenus localement et permet de signaler un pack inapproprié.",
      termsLocalTitle: 'Jeu local',
      termsLocalCopy: 'Le multi Wi-Fi local dépend du réseau utilisé. Certains réseaux publics peuvent bloquer les communications entre téléphones.',
      supportLine: 'Support : support@swipepanic.app',
      ugcTitle: 'Règles UGC',
      ugcIntro: 'Les packs amis doivent rester jouables, compréhensibles et adaptés à une ambiance party game.',
      ugcNotice: 'Interdit : haine, harcèlement, violence réelle, contenu sexuel, liens externes, coordonnées personnelles, contenus illégaux ou ciblant une personne réelle.',
      ugcReportTitle: 'Signalement',
      ugcReportCopy: "Depuis l'app, signaler un pack le supprime immédiatement du téléphone et prépare un rapport que vous pouvez envoyer à l'équipe.",
      reportTitle: 'Signaler un contenu',
      reportIntro: "Le moyen recommandé est le bouton de signalement dans l'app : il supprime le pack localement et prépare un rapport complet.",
      reportEmailCopy: "Vous pouvez aussi écrire à support@swipepanic.app avec le nom du pack, son ID si disponible et les cartes concernées.",
      supportTitle: 'Support',
      supportWifiTitle: 'Wi-Fi local',
      supportWifiCopy: 'Chaque téléphone doit choisir le même pack, le même mode et la même durée. Certains réseaux publics bloquent les appareils entre eux.',
      supportContactTitle: 'Contact',
      supportGeneralCopy: 'Contact unique : support@swipepanic.app',
      supportReportCopy: 'Support, signalements et suggestions passent par la même adresse.',
      offlineFooter: 'Swipe Panic fonctionne aussi hors ligne pour les fonctions de jeu principales.',
      lastUpdated: 'Dernière mise à jour : 2026-05-03',
      manualReports: 'Les signalements sont traités manuellement.',
      moderationContact: 'Contact : support@swipepanic.app',
    },
    en: {
      navHome: 'Home',
      navFeatures: 'Features',
      navCollection: 'Collection',
      navUgc: 'UGC',
      navSupport: 'Support',
      navReport: 'Report',
      navSuggest: 'Suggest',
      heroKicker: 'Play anywhere, even offline',
      heroCopy: 'The party game that reveals your group in 5 minutes: red flags, quiz, Truth or Dare, friends packs and private recaps.',
      download: 'Download',
      suggestCta: 'Suggest a card',
      featuresTitle: 'Choices that start the debate',
      featuresCopy: 'Swipe Panic works without a cloud account: solo, pass-and-play and local Wi-Fi are built for fast party sessions.',
      classicCopy: 'Swipe red flags and green flags, then discover the session profile.',
      quizCopy: 'True or false, 20 cards, 50 cards or Max, with a recap stopwatch only.',
      partyCopy: 'Truth or Dare, friends packs, local votes and a clean recap.',
      collectionTitle: 'Build your legendary collection',
      collectionCopy: 'Hall of Fame and Hall of Shame remember the bold choices, debates and museum-worthy cards.',
      reportContent: 'Report content',
      privacy: 'Privacy',
      storeTitle: 'Available on Google Play',
      storeCopy: 'A fast, fun party experience with official packs, friends packs, solo/local modes and clear UGC rules.',
      footer: '© Swipe Panic. Contact: support@swipepanic.app',
      suggestTitle: 'Suggest a card',
      suggestIntro: 'Send a short, clear and safe idea for Classic, Quiz or Truth or Dare. The form prepares an email and copies the text so nothing gets lost.',
      fieldMode: 'Mode',
      fieldIdea: 'Card text',
      fieldNote: 'Optional note',
      fieldLang: 'Card language',
      prepareEmail: 'Prepare email',
      copySuggestion: 'Copy suggestion',
      copied: 'Suggestion copied. If your email app does not open, send it to support@swipepanic.app.',
      missingIdea: 'Add a card idea first.',
      suggestionSubject: 'Swipe Panic card suggestion',
      suggestionHeader: 'New Swipe Panic card suggestion',
      placeholderIdea: 'Ex: They talk about their ex on the first date.',
      placeholderNote: 'Nickname, context, target pack, variant...',
      formatHelpClassic: 'Classic format: one short dating sentence. No links, no contact details, no real targeted person.',
      formatHelpQuiz: 'Quiz format: start with + for True or - for False. Example: + The first message matters.',
      formatHelpSocial: 'Truth or Dare format: write two texts separated by |. Example: Give a compliment | Tell your worst date story.',
      invalidTooShort: 'The suggestion is too short. Add a playable sentence.',
      invalidTooLong: 'The suggestion is too long. Keep it short and readable for a party game.',
      invalidLink: 'External links are not allowed in UGC suggestions.',
      invalidPhone: 'Contact details or long digit sequences are not allowed.',
      invalidBlocked: 'This suggestion contains a term blocked by the UGC rules.',
      invalidQuizPrefix: 'For Quiz, start with + if the sentence is true, or - if it is false.',
      invalidSocialPair: 'For Truth or Dare, use exactly this format: Dare | Truth, with both texts filled in.',
      spamWait: 'A suggestion was prepared recently. Wait a few minutes before sending another one.',
      safeCheck: 'Local UGC check: OK',
      suggestionFooter: 'Suggestions may be adapted before integration.',
      privacyTitle: 'Privacy Policy',
      privacyIntro: 'Swipe Panic is designed to run first on your phone. Preferences, created packs, private recaps and reports stay on-device unless you intentionally share or report them.',
      privacyLocalTitle: 'Local data',
      privacyLocalCopy: 'The app may store settings, friends packs, card feedback, private history and collection data locally. This data is not sent to a Swipe Panic cloud database.',
      privacyAdsTitle: 'Ads and purchases',
      privacyAdsCopy: 'The app may use Google Mobile Ads and store in-app purchases. These services may process data under their own rules and the consent choices shown by the app or system.',
      privacyReportsTitle: 'Reports',
      privacyReportsCopy: 'If you report UGC content, the app prepares a report that you choose to send by email or through your phone share sheet.',
      privacyContactCopy: 'Contact: support@swipepanic.app',
      termsTitle: 'Terms of Use',
      termsIntro: 'By using Swipe Panic, you agree to play responsibly and not create, import or share illegal, hateful, violent, sexual, harassing or harmful content.',
      termsUserContentTitle: 'User content',
      termsUserContentCopy: 'Packs created by players are their responsibility. The app may block some content locally and lets players report inappropriate packs.',
      termsLocalTitle: 'Local play',
      termsLocalCopy: 'Local Wi-Fi multiplayer depends on the network. Some public networks block communication between phones.',
      supportLine: 'Support: support@swipepanic.app',
      ugcTitle: 'UGC Rules',
      ugcIntro: 'Friends packs must stay playable, understandable and suited to a party-game mood.',
      ugcNotice: 'Forbidden: hate, harassment, real violence, sexual content, external links, personal contact details, illegal content or targeting a real person.',
      ugcReportTitle: 'Reporting',
      ugcReportCopy: 'From the app, reporting a pack immediately removes it from the phone and prepares a report you can send to the team.',
      reportTitle: 'Report content',
      reportIntro: 'The recommended path is the in-app report button: it removes the pack locally and prepares a complete report.',
      reportEmailCopy: 'You can also email support@swipepanic.app with the pack name, its ID if available and the relevant cards.',
      supportTitle: 'Support',
      supportWifiTitle: 'Local Wi-Fi',
      supportWifiCopy: 'Each phone must choose the same pack, mode and duration. Some public networks block devices from seeing each other.',
      supportContactTitle: 'Contact',
      supportGeneralCopy: 'Single contact: support@swipepanic.app',
      supportReportCopy: 'Support, reports and suggestions use the same address.',
      offlineFooter: 'Swipe Panic also works offline for the main game features.',
      lastUpdated: 'Last updated: 2026-05-03',
      manualReports: 'Reports are reviewed manually.',
      moderationContact: 'Contact: support@swipepanic.app',
    },
  };

  function getLang() {
    const saved = localStorage.getItem('sp_lang');
    if (saved === 'en' || saved === 'fr') return saved;
    return navigator.language && navigator.language.startsWith('en') ? 'en' : 'fr';
  }

  function setText(lang) {
    const copy = dictionary[lang] || dictionary.fr;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (copy[key]) node.textContent = copy[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.getAttribute('data-i18n-placeholder');
      if (copy[key]) node.setAttribute('placeholder', copy[key]);
    });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });
    updateFormatHelp(lang);
  }

  const blockedKeywords = [
    'kill',
    'tuer',
    'assassin',
    'murder',
    'suicide',
    'suicid',
    'terroris',
    'attentat',
    'racist',
    'raciste',
    'nazi',
    'hitler',
    'fascist',
    'fasciste',
    'genocide',
    'génocide',
    'homophob',
    'transphob',
    'antisemit',
    'drogue',
    'cocaine',
    'heroin',
    'pedophil',
    'pédophil',
    'incest',
    'inceste',
    'porn',
    'pornograph',
  ];
  const urlPattern = /https?:\/\/|www\.|\.(com|fr|org|net)\b/i;
  const longDigitsPattern = /\d{8,}/;
  const suggestionCooldownMs = 10 * 60 * 1000;

  function getSuggestionFields() {
    return {
      mode: document.getElementById('suggest-mode')?.value || 'Classic',
      cardLang: document.getElementById('suggest-lang')?.value || getLang(),
      idea: document.getElementById('suggest-idea')?.value.trim() || '',
      note: document.getElementById('suggest-note')?.value.trim() || '',
    };
  }

  function isSocialMode(mode) {
    return mode.toLowerCase().includes('action') || mode.toLowerCase().includes('truth');
  }

  function updateFormatHelp(lang) {
    const help = document.getElementById('suggest-format-help');
    if (!help) return;
    const copy = dictionary[lang] || dictionary.fr;
    const { mode } = getSuggestionFields();
    if (mode === 'Quiz') {
      help.textContent = copy.formatHelpQuiz;
    } else if (isSocialMode(mode)) {
      help.textContent = copy.formatHelpSocial;
    } else {
      help.textContent = copy.formatHelpClassic;
    }
  }

  function validateSuggestion(lang) {
    const copy = dictionary[lang] || dictionary.fr;
    const { mode, idea, note } = getSuggestionFields();
    const checkedText = `${idea}\n${note}`.toLowerCase();
    if (idea.length < 10) return copy.invalidTooShort;
    if (idea.length > 180) return copy.invalidTooLong;
    if (urlPattern.test(checkedText)) return copy.invalidLink;
    if (longDigitsPattern.test(checkedText)) return copy.invalidPhone;
    if (blockedKeywords.some((word) => checkedText.includes(word))) {
      return copy.invalidBlocked;
    }
    if (mode === 'Quiz' && !/^[+-]\s*\S/.test(idea)) {
      return copy.invalidQuizPrefix;
    }
    if (isSocialMode(mode)) {
      const parts = idea.split('|').map((part) => part.trim());
      if (parts.length !== 2 || parts.some((part) => part.length < 3)) {
        return copy.invalidSocialPair;
      }
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
    const copy = dictionary[lang] || dictionary.fr;
    const { mode, cardLang, idea, note } = getSuggestionFields();
    const validationError = validateSuggestion(lang);
    if (validationError) return { error: validationError };
    const socialParts = isSocialMode(mode)
      ? idea.split('|').map((part) => part.trim())
      : null;
    const quizAnswer = mode === 'Quiz'
      ? (idea.startsWith('+') ? 'True / Vrai' : 'False / Faux')
      : null;
    return [
      copy.suggestionHeader,
      '',
      `Mode: ${mode}`,
      `Language: ${cardLang}`,
      `${copy.safeCheck}`,
      '',
      'Card:',
      idea,
      '',
      quizAnswer ? `Quiz answer: ${quizAnswer}` : '',
      socialParts ? `Action/Dare: ${socialParts[0]}\nTruth: ${socialParts[1]}` : '',
      '',
      note ? `Note:\n${note}` : '',
    ].filter(Boolean).join('\n');
  }

  async function copySuggestion(lang) {
    const copy = dictionary[lang] || dictionary.fr;
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
    if (!form) return;
    updateFormatHelp(lang);
    modeSelect?.addEventListener('change', () => updateFormatHelp(getLang()));
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
      window.location.href = `mailto:support@swipepanic.app?subject=${encodeURIComponent(copy.suggestionSubject)}&body=${encodeURIComponent(text)}`;
    });
    copyButton?.addEventListener('click', () => copySuggestion(getLang()));
  }

  const lang = getLang();
  setText(lang);
  wireSuggestion(lang);
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.getAttribute('data-lang') || 'fr';
      localStorage.setItem('sp_lang', next);
      setText(next);
    });
  });
})();
