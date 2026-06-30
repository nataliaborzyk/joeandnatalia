// ── LANGUAGE STATE ──
const TRANSLATIONS = {
  pl: {
    nav_venue: 'Miejsce ceremonii',
    nav_travel: 'Noclegi i transport',
    nav_faq: 'FAQ',
    nav_rsvp: 'RSVP',
    footer: 'Natalia & Joe · 18 września 2027',
    // index
    celebrating: 'zapraszają na swoje wesele',
    date_venue: '18 września 2027 · Zaczarowana Furmanka',
    cd_days: 'dni', cd_hours: 'godz', cd_min: 'min', cd_sec: 'sek',
    scroll_hint: 'przewiń w dół',
    // venue
    venue_eyebrow: 'Miejsce ceremonii',
    venue_title: 'Zaczarowana Furmanka',
    venue_intro: 'Miejsce, gdzie bliskość natury łączy się z sielskim charakterem domostwa, a zaczarowany układ gwiazd sprawia, że marzenia stają się rzeczywistością. Tutaj właśnie powiemy sobie "tak".',
    venue_barn_title: 'O miejscu',
    venue_barn_body: 'Zaczarowana Furmanka to wyjątkowa posiadłość w Małopolsce, blisko Krakowa, otulona przyrodą i drewnianym klimatem. Stodoła pełna uroku — drewno, trawy, złociste zboże — tworzy tło, które od razu rozgrzeje serca i zachwyci oczy. To przestrzeń stworzona do celebrowania miłości w stylu rustykalnym i boho, z duszą i z klasą.',
    venue_dress_title: 'Dress code',
    venue_dress_body: 'Zależy nam, żeby wieczór był spójny i piękny — prosimy o elegancki, komfortowy strój w odcieniach natury. Panie — ze względu na trawnik i teren wiejski, warto rozważyć płaskie lub stabilne obcasy.',
    venue_expect_title: 'Czego się spodziewać',
    venue_expect_body: 'Ceremonia plenerowa w ogrodzie, przyjęcie w stodole, żywa muzyka do późna. Wieczór pełen ciepła, śmiechu i tańca — w scenerii, która sama w sobie jest magiczna. Przygotujcie się na chwile rodem z dziecięcych wspomnień o sielskich wakacjach na wsi.',
    venue_address_title: 'Dojazd',
    venue_address_body: 'Zaczarowana Furmanka, Małopolska (okolice Krakowa). Dokładny adres zostanie przesłany po potwierdzeniu obecności. W razie pytań: kontakt@zaczarowanafurmanka.pl · tel. +48 604 118 314',
    // travel
    travel_eyebrow: 'Noclegi i transport',
    travel_title: 'Zostań z nami dłużej',
    travel_hotel1_title: 'Hotel Dworkowy — polecany',
    travel_hotel1_body: 'Wynegocjowaliśmy dla Was specjalną cenę — 20% zniżki na pokoje w nocy weselnej (17/18 września). Kod rezerwacji: NATALIA2027. Odległość od sali: 3 km.',
    travel_hotel2_title: 'Agroturystyka Pod Dębem',
    travel_hotel2_body: 'Urokliwe pokoje w samym sercu natury, 5 km od Zaczarowanej Furmanki. Świetna opcja dla rodzin z . Rezerwuj bezpośrednio przez telefon.',
    travel_bus_title: 'Autobus weselny',
    travel_bus_body: 'Organizujemy bezpłatny autobus z centrum Warszawy (Plac Defilad) na salę i z powrotem. Odjazd na ceremonię: 13:30. Powrót po przyjęciu: ok. 2:00 i 4:00. Zgłoś się w formularzu RSVP.',
    // faq
    faq_eyebrow: 'Często zadawane pytania',
    faq_title: 'Masz pytanie?',
    faq_q1: 'Czy mogę przyjść z dziećmi?',
    faq_a1: 'Uprzejmie inforujemy, że uroczystość i przyjęcie będą miały charakter wyłącznie dla osób dorosłych. Dziękujemy za zrozumienie i mamy nadzieję, że będziecie mogli z nami spędzić ten wyjątkowy wieczór.',
    faq_q2: 'Do kiedy muszę potwierdzić obecność?',
    faq_a2: 'Prosimy o wypełnienie formularza RSVP do 1 maja 2027. To pozwoli nam sprawnie zaplanować catering i miejsca siedzące.',
    faq_q3: 'Czy na sali będzie wegetariańskie menu?',
    faq_a3: 'Tak — zadbamy o pełnowartościowe opcje wegetariańskie i wegańskie. Poinformuj nas o swoich preferencjach w formularzu RSVP.',
    faq_q4: 'Czy mogę zaparkować na miejscu?',
    faq_a4: 'Tak, parking jest bezpłatny i mieści ok. 80 samochodów. Rekomendujemy jednak skorzystanie z autobusa weselnego.',
    faq_q5: 'Co z noclegiem dla gości spoza Warszawy?',
    faq_a5: 'Szczegóły znajdziesz na podstronie Stay & Travel — mamy wynegocjowane zniżki w okolicznych hotelach.',
    faq_q6: 'Jak wygląda program uroczystości?',
    faq_a6: '14:00 — ceremonia w ogrodzie, 15:30 — aperitif i czas na zdjęcia, 17:00 — przyjęcie w stodole, żywa muzyka, zabawa do rana.',
    // rsvp
    rsvp_eyebrow: 'Potwierdź obecność',
    rsvp_title: 'Czekamy na Ciebie',
    rsvp_subtitle: 'Prosimy o wypełnienie formularza do 1 maja 2027.',
    rsvp_add_person: '+ Dodaj osobę',
    rsvp_remove: 'Usuń',
    rsvp_person: 'Osoba',
    rsvp_name_placeholder: 'Imię i nazwisko',
    rsvp_attending_yes: 'Będę',
    rsvp_attending_no: 'Nie mogę przybyć',
    rsvp_vegan: 'Danie wegańskie',
    rsvp_allergies_placeholder: 'Alergie pokarmowe (opcjonalnie)',
    rsvp_bus: 'Korzystam z autobusa weselnego',
    rsvp_message_placeholder: 'Wiadomość dla Natalii i Joe (opcjonalnie)',
    rsvp_submit: 'Wyślij potwierdzenie',
    rsvp_success: 'Dziękujemy! Do zobaczenia 18 września 🌿',
    rsvp_error: 'Coś poszło nie tak — spróbuj jeszcze raz lub napisz na hello@nataliaborzyk.com',
  },
  en: {
    nav_venue: 'The Venue',
    nav_travel: 'Stay & Travel',
    nav_faq: 'FAQ',
    nav_rsvp: 'RSVP',
    footer: 'Natalia & Joe · September 18th, 2027 · IBAN: IT 00 0000 0000 0000 0000',
    // index
    celebrating: 'are celebrating their wedding on',
    date_venue: 'September 18th, 2027 · Zaczarowana Furmanka',
    cd_days: 'days', cd_hours: 'hours', cd_min: 'min', cd_sec: 'sec',
    scroll_hint: 'scroll down',
    // venue
    venue_eyebrow: 'The ceremony venue',
    venue_title: 'Zaczarowana Furmanka',
    venue_intro: 'A place where the serenity of nature meets the charm of a rustic homestead, all under the spell of an enchanted constellation of stars. This is where we will say "I do".',
    venue_barn_title: 'About the venue',
    venue_barn_body: 'Zaczarowana Furmanka is a unique estate in Lesser Poland, just outside Kraków, nestled in nature and full of rustic warmth. Wood, grass and golden grain create a backdrop that instantly touches hearts. A space crafted for celebrating love in a boho and rustic style — with soul, beauty and a touch of magic.',
    venue_dress_title: 'Dress code',
    venue_dress_body: 'We\'d love for the evening to feel beautifully cohesive — please wear elegant, comfortable attire in nature\'s tones. Ladies — given the garden lawn and countryside terrain, we suggest flat or block-heeled shoes.',
    venue_expect_title: 'What to expect',
    venue_expect_body: 'An outdoor ceremony in the garden, reception in the barn, and live music until late. An evening full of warmth, laughter and dancing — set in a scene that is magical all on its own. Expect moments that feel like childhood summers in the countryside.',
    venue_address_title: 'Getting there',
    venue_address_body: 'Zaczarowana Furmanka, Lesser Poland (near Kraków). The exact address will be shared after you confirm attendance. Any questions: kontakt@zaczarowanafurmanka.pl · tel. +48 604 118 314',
    // travel
    travel_eyebrow: 'Accommodation & transport',
    travel_title: 'Stay a little longer',
    travel_hotel1_title: 'Hotel Dworkowy — recommended',
    travel_hotel1_body: 'We\'ve negotiated a special rate — 20% off rooms on the wedding night (Sept 17/18). Booking code: NATALIA2027. Distance from venue: 3 km.',
    travel_hotel2_title: 'Agroturystyka Pod Dębem',
    travel_hotel2_body: 'Charming rooms in the heart of nature, 5 km from Zaczarowana Furmanka. A great choice for families with children. Book directly by phone.',
    travel_bus_title: 'Wedding shuttle',
    travel_bus_body: 'We are organising a free shuttle from central Warsaw (Plac Defilad) to the venue and back. Departure: 13:30. Return after the reception: approx. 2:00 and 4:00 am. Sign up in the RSVP form.',
    // faq
    faq_eyebrow: 'Frequently asked questions',
    faq_title: 'Any questions?',
    faq_q1: 'Can I bring children?',
    faq_a1: 'Kindly note that our wedding ceremony and reception will be an adults-only celebration. Thank you for your understanding and we look forward to celebrating with you.',
    faq_q2: 'When do I need to RSVP by?',
    faq_a2: 'Please fill in the RSVP form by 1 May 2027. This helps us plan catering and seating arrangements.',
    faq_q3: 'Will there be vegetarian options?',
    faq_a3: 'Yes — we\'ll have full vegetarian and vegan options. Please let us know your preferences in the RSVP form.',
    faq_q4: 'Is there parking at the venue?',
    faq_a4: 'Yes, free parking is available for approx. 80 cars. We do recommend using the wedding shuttle though.',
    faq_q5: 'What about accommodation for out-of-town guests?',
    faq_a5: 'Check the Stay & Travel page — we have negotiated discounts at nearby hotels.',
    faq_q6: 'What does the day look like?',
    faq_a6: '2:00 pm — outdoor ceremony, 3:30 pm — aperitif and photos, 5:00 pm — reception in the barn with live music until dawn.',
    // rsvp
    rsvp_eyebrow: 'Confirm your attendance',
    rsvp_title: 'We can\'t wait to see you',
    rsvp_subtitle: 'Please fill in the form by 1 May 2027.',
    rsvp_add_person: '+ Add person',
    rsvp_remove: 'Remove',
    rsvp_person: 'Person',
    rsvp_name_placeholder: 'Full name',
    rsvp_attending_yes: 'I\'ll be there',
    rsvp_attending_no: 'Sorry, can\'t make it',
    rsvp_vegan: 'Vegan meal',
    rsvp_allergies_placeholder: 'Food allergies (optional)',
    rsvp_bus: 'I\'d like to use the wedding shuttle',
    rsvp_message_placeholder: 'A message for Natalia & Joe (optional)',
    rsvp_submit: 'Send RSVP',
    rsvp_success: 'Thank you! See you on September 18th 🌿',
    rsvp_error: 'Something went wrong — please try again or email hello@nataliaborzyk.com',
  }
};

let currentLang = localStorage.getItem('weddingLang') || 'pl';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['pl'][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('weddingLang', lang);
  updatePageText();
  updateToggleUI();
}

function updateToggleUI() {
  document.querySelectorAll('.lang-lbl-pl').forEach(el => {
    el.style.opacity = currentLang === 'pl' ? '0.85' : '0.35';
  });
  document.querySelectorAll('.lang-lbl-en').forEach(el => {
    el.style.opacity = currentLang === 'en' ? '0.85' : '0.35';
  });
  document.querySelectorAll('.lang-switch-input').forEach(el => {
    el.checked = currentLang === 'en';
  });
}

function updatePageText() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-t-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-t-html'));
  });
}

// ── NAV SCROLL EFFECT ──
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
  // mark active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// ── FADE-IN ON SCROLL ──
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// ── LANG TOGGLE CLICK ──
function initLangToggle() {
  document.querySelectorAll('.lang-switch-input').forEach(input => {
    input.addEventListener('change', () => setLang(input.checked ? 'en' : 'pl'));
  });
  document.querySelectorAll('.lang-lbl-pl').forEach(el => {
    el.addEventListener('click', () => setLang('pl'));
  });
  document.querySelectorAll('.lang-lbl-en').forEach(el => {
    el.addEventListener('click', () => setLang('en'));
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFadeIn();
  initLangToggle();
  updateToggleUI();
  updatePageText();
});
