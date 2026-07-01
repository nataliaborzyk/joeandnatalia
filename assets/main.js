// ── LANGUAGE STATE ──
const TRANSLATIONS = {
  pl: {
    nav_venue: 'Miejsce ceremonii',
    nav_travel: 'Noclegi i transport',
    nav_faq: 'FAQ',
    nav_rsvp: 'RSVP',
    footer: 'Natalia & Joe · 18 września 2027',
    back_home: 'Powrót na stronę główną',
    // index
    celebrating: 'zapraszają na swoje wesele',
    date_venue: '18 września 2027 · Zaczarowana Furmanka',
    cd_days: 'dni', cd_hours: 'godz', cd_min: 'min', cd_sec: 'sek',
    scroll_hint: 'przewiń w dół',
    // venue
    venue_eyebrow: 'Miejsce ceremonii',
    venue_title: 'Zaczarowana Furmanka',
    venue_intro: 'Antolka, Kraków',
    venue_barn_title: 'Dlaczego to miejsce',
    venue_barn_body: 'Szczerze mówiąc — nie planowaliśmy wesela i nie szukaliśmy już sali. Po prostu trafiliśmy na Zaczarowaną Furmankę przypadkiem i od razu wiedzieliśmy, że to jest TO miejsce. Nie my je znaleźliśmy — to ono nas znalazło.|||Marzyło nam się wesele bez spiny — luźne, w otoczeniu natury, z dobrą zabawą. Takie, gdzie czasem poleci coś mocniejszego, a czasem muzyka z naszych ulubionych gier. A najważniejsze — żebyśmy ten dzień spędzili z naszymi kochanymi rodzinami i przyjaciółmi. Zaczarowana Furmanka to przytulne, klimatyczne miejsce ze swojską, boho stodołą — idealnie wpasowuje się w to, o czym marzyliśmy.',
    venue_dress_title: 'Dress code',
    venue_dress_body: 'Wygoda na pierwszym miejscu, ale to jednak wesele, więc ubierzcie się tak, żebyście czuli się i komfortowo, i obłędnie. 💃|||Ważna informacja dla Pań: nasze wesele odbywa się w stodole, otoczonej polami i naturą. Ceremonia będzie na świeżym powietrzu, a sporo czasu spędzimy na trawie, dlatego z myślą o Waszym komforcie polecamy płaski obcas lub obcas słupek, w szpilkach o tym terenie może być niełatwo. 😉|||Ponieważ wesele odbędzie się w połowie września, warto zabrać ze sobą coś na górę.',
    venue_expect_title: 'Czego się spodziewać',
    venue_expect_body: 'Ceremonia plenerowa w ogrodzie, przyjęcie w stodole, żywa muzyka do późna. Wieczór pełen ciepła, śmiechu i tańca — w scenerii, która sama w sobie jest magiczna. Przygotujcie się na chwile rodem z dziecięcych wspomnień o sielskich wakacjach na wsi.',
    venue_address_title: 'Dojazd',
    venue_address_body: 'Zaczarowana Furmanka, Antolka 44, 32-210 Antolka (okolice Krakowa)|||W razie pytań: Natalia +39 351 33 60 331 · Joe +39 392 17 62 263',
    // travel
    travel_eyebrow: 'Noclegi i transport',
    travel_title: 'Zostań z nami dłużej',
    travel_hotel1_title: 'Hotel Dworkowy — polecany',
    travel_hotel1_body: 'Wynegocjowaliśmy dla Was specjalną cenę — 20% zniżki na pokoje w nocy weselnej (17/18 września). Kod rezerwacji: NATALIA2027. Odległość od sali: 3 km.',
    travel_hotel2_title: 'Agroturystyka Pod Dębem',
    travel_hotel2_body: 'Urokliwe pokoje w samym sercu natury, 5 km od Zaczarowanej Furmanki. Świetna opcja dla rodzin z dziećmi. Rezerwuj bezpośrednio przez telefon.',
    travel_bus_title: 'Autobus weselny',
    travel_bus_body: 'Organizujemy bezpłatny autobus z centrum Warszawy (Plac Defilad) na salę i z powrotem. Odjazd na ceremonię: 13:30. Powrót po przyjęciu: ok. 2:00 i 4:00. Zgłoś się w formularzu RSVP.',
    // faq
    faq_eyebrow: 'Często zadawane pytania',
    faq_title: 'Masz pytanie?',
    faq_q1: 'Czy mogę przyjść z dziećmi?',
    faq_a1: 'Uprzejmie informujemy, że uroczystość i przyjęcie weselne będą miały charakter wyłącznie dla osób dorosłych. Dziękujemy za zrozumienie i mamy nadzieję, że będziecie mogli spędzić z nami ten wyjątkowy wieczór.',
    faq_q2: 'Do kiedy muszę potwierdzić obecność?',
    faq_a2: 'Prosimy o wypełnienie formularza RSVP do 1 maja 2027. To pozwoli nam sprawnie zaplanować catering i miejsca siedzące.',
    faq_q3: 'Czy na sali będzie wegetariańskie menu?',
    faq_a3: 'Na sali będzie serwowane standardowe menu z mięsem, a dla naszych przyjaciół wegan i wegetarian przygotowaliśmy osobną, w pełni wegańską wersję - dajcie nam znać przy wypełnieniu formularza RSVP, a zadbamy o resztę. 🙂',
    faq_q4: 'Czy mogę zaparkować na miejscu?',
    faq_a4: 'Tak, dostępny jest bezpłatny parking. Prosimy tylko o wcześniejszą informację, jeśli planujecie przyjechać samochodem - pomoże nam to zaplanować logistykę i zadbać o miejsce dla wszystkich.',
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
    footer: 'Natalia & Joe · September 18th, 2027 · IBAN: IT00 0000 0000 0000 0000',
    back_home: 'Back to home page',
    // index
    celebrating: 'are celebrating their wedding on',
    date_venue: 'September 18th, 2027 · Zaczarowana Furmanka',
    cd_days: 'days', cd_hours: 'hours', cd_min: 'min', cd_sec: 'sec',
    scroll_hint: 'scroll down',
    // venue
    venue_eyebrow: 'The ceremony venue',
    venue_title: 'Zaczarowana Furmanka',
    venue_intro: 'Antolka, Cracow',
    venue_barn_title: 'Why this place',
    venue_barn_body: 'Honestly — we weren\'t even planning a wedding, and we definitely weren\'t looking for a venue. We just stumbled upon Zaczarowana Furmanka by chance, and we instantly knew this was THE place. We didn\'t really find it — it found us.|||We dreamed of a wedding that felt easy and relaxed — surrounded by nature, full of good fun. The kind where sometimes you\'ll hear something a little wilder on the speakers, and sometimes the soundtrack from our favourite video games. But most importantly — a day spent with our beloved families and friends. Zaczarowana Furmanka is a cosy, atmospheric spot with a charming boho barn — and it fits exactly what we were dreaming of.',
    venue_dress_title: 'Dress code',
    venue_dress_body: 'Comfort first, but it\'s a wedding, so dress in a way that makes you feel both comfy and fabulous. 💃|||A note for the ladies: our wedding takes place in a barn, surrounded by fields and nature. The ceremony will be outdoors, and we\'ll be spending a good amount of time on grass, so for your own comfort, we recommend flat shoes or block heels — stilettos won\'t be your friend on this terrain. 😉|||Since the wedding falls in mid-September, it\'s worth bringing something to throw over your shoulders.',
    venue_expect_title: 'What to expect',
    venue_expect_body: 'An outdoor ceremony in the garden, reception in the barn, and live music until late. An evening full of warmth, laughter and dancing — set in a scene that is magical all on its own. Expect moments that feel like childhood summers in the countryside.',
    venue_address_title: 'Getting there',
    venue_address_body: 'Zaczarowana Furmanka, Antolka 44, 32-210 Antolka, Poland|||Any questions: Joe +39 392 17 62 263 · Natalia +39 351 33 60 331',
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
    faq_a1: 'Kindly note that our wedding ceremony and reception will be an adults-only celebration. Thank you for your understanding, and we look forward to celebrating with you.',
    faq_q2: 'When do I need to RSVP by?',
    faq_a2: 'Please fill in the RSVP form by 1 May 2027. This helps us plan catering and seating arrangements.',
    faq_q3: 'Will there be vegetarian options?',
    faq_a3: 'The main menu will be meat-based. For our vegan and vegetarian friends, we\'ve prepared a fully vegan option - just let us know when you fill out the RSVP form. 🙂',
    faq_q4: 'Is there parking at the venue?',
    faq_a4: 'Yes, free parking is available at the venue! We'\d just ask you to let us know in advance if you're planning to drive — it helps us with the logistics and making sure there'\s a spot for everyone.',
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
    } else if (val.includes('|||')) {
      el.innerHTML = val.split('|||').map(p => `<p>${p}</p>`).join('');
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
