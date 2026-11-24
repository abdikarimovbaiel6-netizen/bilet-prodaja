"use strict";

// ========================================
// CINEMA — Кыргызча / Русский
// ========================================

const PRICE_STANDARD = 450;
const PRICE_VIP = 650;
const MOVIE_NAME = "Последний горизонт";
const STORAGE_KEY = "cinema-demo-bookings-v1";

const sessions = [
  { time: "12:00", format: "2D", label: "day" },
  { time: "15:30", format: "2D", label: "day" },
  { time: "18:00", format: "3D", label: "evening" },
  { time: "21:15", format: "IMAX", label: "premiere" }
];

const translations = {
  ru: {
    home: "Главная",
    about: "О фильме",
    sessions: "Сеансы",
    tickets: "Билеты",
    buyTicket: "Купить билет",
    premiere: "БОЛЬШАЯ ПРЕМЬЕРА 2026",
    heroTitle: "ПОСЛЕДНИЙ<br><span>ГОРИЗОНТ</span>",
    heroDescription: "Когда исчезает свет, начинается самое важное путешествие. Откройте для себя историю, которая изменит всё.",
    genre: "Фантастика",
    duration: "2 ч 10 мин",
    chooseSession: "Выбрать сеанс",
    heroNote: "Премьера, которую стоит увидеть на большом экране",
    cinemaTag: "НЕЗАБЫВАЕМОЕ КИНО",
    discover: "ОТКРОЙТЕ ИСТОРИЮ",
    movieOfWeek: "Фильм недели",
    filmIndex: "01 — ФИЛЬМ",
    movieTitle: "ПОСЛЕДНИЙ<br>ГОРИЗОНТ",
    premiereLabel: "ПРЕМЬЕРА",
    movieName: "Последний горизонт",
    movieDescription: "В далёком будущем команда исследователей отправляется за пределы известной галактики. Им предстоит разгадать тайну сигнала, способного изменить судьбу человечества.",
    genreLabel: "Жанр",
    genreValue: "Фантастика, приключения",
    durationLabel: "Продолжительность",
    durationValue: "130 минут",
    ageLabel: "Возраст",
    formatLabel: "Формат",
    chooseTime: "Выбрать время просмотра",
    evening: "ВАШ ВЕЧЕР НАЧИНАЕТСЯ ЗДЕСЬ",
    scheduleIndex: "02 — РАСПИСАНИЕ",
    viewingDate: "Дата просмотра",
    timeFormat: "Время и формат",
    cinemaHall: "Кинотеатр CINEMA · Зал № 1",
    idealSeat: "ВАШЕ ИДЕАЛЬНОЕ МЕСТО",
    chooseSeats: "Выберите места",
    bookingIndex: "03 — БРОНИРОВАНИЕ",
    screen: "ЭКРАН",
    free: "Свободно",
    chosen: "Выбрано",
    occupied: "Занято",
    vip: "VIP",
    seatNumbers: "НОМЕРА МЕСТ УКАЗАНЫ НА КРЕСЛАХ",
    yourOrder: "ВАШ ЗАКАЗ",
    premiereScreen: "Премьера · Большой экран",
    dateLabel: "Дата",
    timeLabel: "Сеанс",
    yourSeats: "Ваши места",
    notSelected: "Не выбраны",
    total: "Итого к оплате",
    bookTickets: "Забронировать билеты",
    demoNote: "Демо-режим: оплата не списывается. Заказ будет создан только в рамках этого браузера.",
    emotions: "СВЕТ. КАМЕРА. ЭМОЦИИ.",
    bannerTitle: "Ваша история<br>начинается в кино.",
    reserveSeat: "Забронировать место ↗",
    copyright: "© 2026 CINEMA. Демонстрационный проект.",
    top: "Наверх ↑",
    orderCreated: "ЗАКАЗ СОЗДАН",
    greatChoice: "Отличный выбор!",
    orderFormed: "Ваш демонстрационный заказ сформирован.",
    modalNote: "Это учебный макет. Билеты не являются действительными, а реальная оплата не производится.",
    great: "Отлично!",
    close: "Закрыть",
    today: "Сегодня",
    tomorrow: "Завтра",
    weekdays: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    months: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    day: "Дневной сеанс",
    eveningSession: "Вечерний сеанс",
    premiereSession: "Премьерный сеанс",
    standard: "Стандарт",
    row: "ряд",
    seat: "место",
    selectedSeats: "Выберите удобное время.",
    selectFirst: "Сначала выберите места.",
    alreadyTaken: "Одно из мест уже занято. Выберите другие места.",
    saveError: "Не удалось сохранить заказ в браузере. Попробуйте другой браузер.",
    saved: "Демонстрационный заказ сохранён!",
    movie: "Фильм",
    date: "Дата",
    time: "Время",
    seats: "Места",
    ticketsCount: "Билетов",
    amount: "Итого",
    orderAlert: "Заказ создан! Сумма: ",
    seatAria: "Ряд",
    seatAriaPlace: "место",
    seatAriaBooked: "занято",
    closeMenu: "Закрыть меню",
    openMenu: "Открыть меню"
  },

  ky: {
    home: "Башкы бет",
    about: "Фильм жөнүндө",
    sessions: "Сеанстар",
    tickets: "Билеттер",
    buyTicket: "Билет сатып алуу",
    premiere: "2026-ЖЫЛДЫН ЧОҢ ПРЕМЬЕРАСЫ",
    heroTitle: "АКЫРКЫ<br><span>ГОРИЗОНТ</span>",
    heroDescription: "Жарык өчкөндө эң маанилүү саякат башталат. Баарын өзгөртө турган окуя менен таанышыңыз.",
    genre: "Фантастика",
    duration: "2 саат 10 мүнөт",
    chooseSession: "Сеансты тандоо",
    heroNote: "Чоң экрандан көрүүгө арзый турган премьера",
    cinemaTag: "УНУТУЛГУС КИНО",
    discover: "ОКУЯ МЕНЕН ТААНЫШЫҢЫЗ",
    movieOfWeek: "Аптанын фильми",
    filmIndex: "01 — ФИЛЬМ",
    movieTitle: "АКЫРКЫ<br>ГОРИЗОНТ",
    premiereLabel: "ПРЕМЬЕРА",
    movieName: "Акыркы горизонт",
    movieDescription: "Алыскы келечекте изилдөөчүлөр тобу белгилүү галактиканын чегинен чыгат. Алар адамзаттын тагдырын өзгөртө ала турган белгинин сырын ачышы керек.",
    genreLabel: "Жанры",
    genreValue: "Фантастика, укмуштуу окуялар",
    durationLabel: "Узактыгы",
    durationValue: "130 мүнөт",
    ageLabel: "Жаш чеги",
    formatLabel: "Форматы",
    chooseTime: "Көрүү убактысын тандоо",
    evening: "КЕЧИҢИЗ УШУЛ ЖЕРДЕН БАШТАЛАТ",
    scheduleIndex: "02 — ЖҮГҮРТМӨ",
    viewingDate: "Көрүү күнү",
    timeFormat: "Убактысы жана форматы",
    cinemaHall: "CINEMA кинотеатры · № 1 зал",
    idealSeat: "СИЗ ҮЧҮН МЫКТЫ ОРУН",
    chooseSeats: "Орундарды тандаңыз",
    bookingIndex: "03 — БРОНДОО",
    screen: "ЭКРАН",
    free: "Бош",
    chosen: "Тандалды",
    occupied: "Бош эмес",
    vip: "VIP",
    seatNumbers: "ОРУНДАРДЫН НОМЕРЛЕРИ КРЕСЛОЛОРДО КӨРСӨТҮЛГӨН",
    yourOrder: "СИЗДИН БУЮРТМА",
    premiereScreen: "Премьера · Чоң экран",
    dateLabel: "Күнү",
    timeLabel: "Сеанс",
    yourSeats: "Сиздин орундар",
    notSelected: "Тандала элек",
    total: "Жалпы төлөм",
    bookTickets: "Билеттерди брондоо",
    demoNote: "Демо-режим: акча алынбайт. Буюртма ушул браузердин ичинде гана сакталат.",
    emotions: "ЖАРЫК. КАМЕРА. СЕЗИМДЕР.",
    bannerTitle: "Сиздин окуяңыз<br>кинодо башталат.",
    reserveSeat: "Орунду брондоо ↗",
    copyright: "© 2026 CINEMA. Көрсөтмөлүү долбоор.",
    top: "Жогору ↑",
    orderCreated: "БУЮРТМА ТҮЗҮЛДҮ",
    greatChoice: "Мыкты тандоо!",
    orderFormed: "Сиздин көрсөтмөлүү буюртмаңыз даярдалды.",
    modalNote: "Бул окуу макети. Билеттер жараксыз, чыныгы төлөм жүргүзүлбөйт.",
    great: "Жакшы!",
    close: "Жабуу",
    today: "Бүгүн",
    tomorrow: "Эртең",
    weekdays: ["Жекшемби", "Дүйшөмбү", "Шейшемби", "Шаршемби", "Бейшемби", "Жума", "Ишемби"],
    months: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
    day: "Күндүзгү сеанс",
    eveningSession: "Кечки сеанс",
    premiereSession: "Премьералык сеанс",
    standard: "Стандарт",
    row: "катар",
    seat: "орун",
    selectedSeats: "Өзүңүзгө ыңгайлуу убакытты тандаңыз.",
    selectFirst: "Алгач орундарды тандаңыз.",
    alreadyTaken: "Орундардын бири бош эмес болуп калды. Башка орун тандаңыз.",
    saveError: "Буюртманы браузерге сактоо мүмкүн болгон жок. Башка браузерди колдонуп көрүңүз.",
    saved: "Көрсөтмөлүү буюртма сакталды!",
    movie: "Фильм",
    date: "Күнү",
    time: "Убактысы",
    seats: "Орундар",
    ticketsCount: "Билеттердин саны",
    amount: "Жалпы сумма",
    orderAlert: "Буюртма түзүлдү! Суммасы: ",
    seatAria: "Катар",
    seatAriaPlace: "орун",
    seatAriaBooked: "бош эмес",
    closeMenu: "Менюну жабуу",
    openMenu: "Менюну ачуу"
  }
};

let currentLanguage = localStorage.getItem("cinema-language") || "ru";
if (!translations[currentLanguage]) currentLanguage = "ru";

let dates = [];
let selectedDateIndex = 0;
let selectedSessionIndex = 0;
let selectedSeats = new Set();
let bookedSeats = new Set();

const $ = id => document.getElementById(id);

const dateList = $("dateList");
const timeList = $("timeList");
const seatMap = $("seatMap");
const summaryDate = $("summaryDate");
const summaryTime = $("summaryTime");
const summaryFormat = $("summaryFormat");
const summarySeats = $("summarySeats");
const totalPrice = $("totalPrice");
const buyButton = $("buyButton");
const orderMessage = $("orderMessage");
const confirmationModal = $("confirmationModal");
const receipt = $("receipt");
const toast = $("toast");
const languageSelect = $("languageSelect");

function t(key) {
  return translations[currentLanguage][key] ??
    translations.ru[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const value = t(key);

    // Сохраняем HTML только для заранее определённых заголовков.
    if (key === "heroTitle" || key === "movieTitle" ||
        key === "bannerTitle") {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  $("menuToggle").setAttribute("aria-label", t("openMenu"));

  renderDates();
  renderSessions();
  renderSeatMap();
  updateSummary();
  updateSessionHint();
}

languageSelect.addEventListener("change", event => {
  const language = event.target.value;
  if (!translations[language]) return;

  currentLanguage = language;

  try {
    localStorage.setItem("cinema-language", language);
  } catch (error) {
    console.warn("Не удалось сохранить язык", error);
  }

  applyTranslations();
});

// ========================================
// Даты
// ========================================

function makeDates() {
  const result = [];
  const now = new Date();
  const lang = currentLanguage === "ky" ? "ky-KG" : "ru-RU";

  for (let i = 0; i < 7; i++) {
    const date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + i
    );

    result.push({
      date,
      key: [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0")
      ].join("-"),
      weekday: i === 0 ? t("today") :
        i === 1 ? t("tomorrow") :
        t("weekdays")[date.getDay()],
      day: String(date.getDate()),
      month: date.toLocaleDateString(lang, {
        month: "short"
      }).replace(".", "")
    });
  }

  return result;
}

function renderDates() {
  if (!dateList) return;

  dateList.replaceChildren();

  dates.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "date-option";
    button.setAttribute("aria-pressed", String(index === selectedDateIndex));

    if (index === selectedDateIndex) button.classList.add("active");

    const weekday = document.createElement("span");
    weekday.className = "date-day";
    weekday.textContent = item.weekday;

    const day = document.createElement("span");
    day.className = "date-number";
    day.textContent = item.day;

    const month = document.createElement("span");
    month.className = "date-month";
    month.textContent = item.month;

    button.append(weekday, day, month);

    button.addEventListener("click", () => {
      if (selectedDateIndex === index) return;

      selectedDateIndex = index;
      selectedSeats.clear();
      clearOrderMessage();
      renderDates();
      renderSeatMap();
      updateSummary();
      updateSessionHint();
    });

    dateList.appendChild(button);
  });
}

// ========================================
// Сеансы
// ========================================

function renderSessions() {
  if (!timeList) return;

  timeList.replaceChildren();

  sessions.forEach((session, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "time-option";

    if (index === selectedSessionIndex) button.classList.add("active");

    button.setAttribute("aria-pressed", String(index === selectedSessionIndex));

    const time = document.createElement("strong");
    time.textContent = session.time;

    const description = document.createElement("small");
    const label = session.label === "day" ? t("day") :
      session.label === "evening" ? t("eveningSession") :
      t("premiereSession");

    description.textContent = `${session.format} · ${label}`;
    button.append(time, description);

    button.addEventListener("click", () => {
      if (selectedSessionIndex === index) return;

      selectedSessionIndex = index;
      selectedSeats.clear();
      clearOrderMessage();
      renderSessions();
      renderSeatMap();
      updateSummary();
      updateSessionHint();
    });

    timeList.appendChild(button);
  });
}

function getCurrentSessionKey() {
  return [
    dates[selectedDateIndex].key,
    sessions[selectedSessionIndex].time,
    sessions[selectedSessionIndex].format
  ].join("_");
}

function updateSessionHint() {
  const session = sessions[selectedSessionIndex];
  const date = dates[selectedDateIndex];

  $("sessionHint").textContent =
    `${date.day} ${date.month} · ${session.time} · ${session.format}. ` +
    `${t("standard")} — ${PRICE_STANDARD} сом, VIP — ${PRICE_VIP} сом.`;
}

// ========================================
// Бронирования
// ========================================

function loadBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};

    const data = JSON.parse(raw);

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return {};
    }

    return data;
  } catch (error) {
    console.warn("Не удалось прочитать заказы:", error);
    return {};
  }
}

function saveBookings(bookings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return true;
  } catch (error) {
    console.error("Не удалось сохранить заказ:", error);
    return false;
  }
}

function getBookedSeats() {
  const bookings = loadBookings();
  const seats = bookings[getCurrentSessionKey()];
  return new Set(Array.isArray(seats) ? seats : []);
}

// ========================================
// Кресла
// ========================================

function createSeat(row, number) {
  const id = `${row}-${number}`;
  const isVIP = row >= 5;
  const button = document.createElement("button");

  button.type = "button";
  button.className = "seat";
  button.textContent = number;
  button.dataset.seat = id;

  const price = isVIP ? PRICE_VIP : PRICE_STANDARD;
  const isBooked = bookedSeats.has(id);
  const isSelected = selectedSeats.has(id);

  button.title = `${t("seatAria")} ${row}, ${t("seatAriaPlace")} ${number} — ${price} сом`;

  button.setAttribute(
    "aria-label",
    `${t("seatAria")} ${row}, ${t("seatAriaPlace")} ${number}, ` +
    `${isVIP ? "VIP" : t("standard")}, ${price} сом`
  );

  if (isVIP) button.classList.add("vip");

  if (isBooked) {
    button.disabled = true;
    button.title = `${t("seatAria")} ${row}, ${t("seatAriaPlace")} ${number} — ${t("seatAriaBooked")}`;
    button.setAttribute(
      "aria-label",
      `${t("seatAria")} ${row}, ${t("seatAriaPlace")} ${number}, ${t("seatAriaBooked")}`
    );
  } else if (isSelected) {
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
  } else {
    button.setAttribute("aria-pressed", "false");
  }

  button.addEventListener("click", () => {
    if (bookedSeats.has(id)) return;

    if (selectedSeats.has(id)) {
      selectedSeats.delete(id);
    } else {
      selectedSeats.add(id);
    }

    clearOrderMessage();
    renderSeatMap();
    updateSummary();
  });

  return button;
}

function renderSeatMap() {
  if (!seatMap) return;

  seatMap.replaceChildren();
  bookedSeats = getBookedSeats();

  for (let row = 1; row <= 6; row++) {
    const rowElement = document.createElement("div");
    rowElement.className = "seat-row";

    const rowNumber = document.createElement("span");
    rowNumber.className = "row-number";
    rowNumber.textContent = row;
    rowElement.appendChild(rowNumber);

    for (let number = 1; number <= 8; number++) {
      rowElement.appendChild(createSeat(row, number));
    }

    seatMap.appendChild(rowElement);
  }

  updateSummary();
}

// ========================================
// Баалар жана тандалган орундар
// ========================================

function getSeatPrice(id) {
  const row = Number(id.split("-")[0]);
  return row >= 5 ? PRICE_VIP : PRICE_STANDARD;
}

function getSelectedSeatList() {
  return Array.from(selectedSeats).sort((a, b) => {
    const [rowA, numberA] = a.split("-").map(Number);
    const [rowB, numberB] = b.split("-").map(Number);
    return rowA - rowB || numberA - numberB;
  });
}

function calculateTotal() {
  return getSelectedSeatList().reduce(
    (total, seat) => total + getSeatPrice(seat),
    0
  );
}

function formatMoney(amount) {
  const lang = currentLanguage === "ky" ? "ky-KG" : "ru-RU";
  return amount.toLocaleString(lang) + " сом";
}

function formatSelectedSeats() {
  return getSelectedSeatList().map(id => {
    const [row, number] = id.split("-");
    const vip = Number(row) >= 5 ? " (VIP)" : "";
    return `${row} ${t("row")}, ${number} ${t("seat")}${vip}`;
  }).join("; ");
}

function updateSummary() {
  if (!dates.length) return;

  const date = dates[selectedDateIndex];
  const session = sessions[selectedSessionIndex];
  const locale = currentLanguage === "ky" ? "ky-KG" : "ru-RU";

  summaryDate.textContent = date.date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  summaryTime.textContent = session.time;
  summaryFormat.textContent = session.format;
  summarySeats.textContent = selectedSeats.size ?
    formatSelectedSeats() : t("notSelected");

  totalPrice.textContent = formatMoney(calculateTotal());
  buyButton.disabled = selectedSeats.size === 0;
}

// ========================================
// Заказ жана подтверждение
// ========================================

function addReceiptRow(label, value) {
  const row = document.createElement("div");
  row.className = "receipt-row";

  const labelElement = document.createElement("span");
  labelElement.textContent = label;

  const valueElement = document.createElement("strong");
  valueElement.textContent = value;

  row.append(labelElement, valueElement);
  receipt.appendChild(row);
}

function showConfirmation() {
  const session = sessions[selectedSessionIndex];
  const date = dates[selectedDateIndex];
  const locale = currentLanguage === "ky" ? "ky-KG" : "ru-RU";

  receipt.replaceChildren();

  addReceiptRow(t("movie"), currentLanguage === "ky" ? "Акыркы горизонт" : MOVIE_NAME);
  addReceiptRow(t("date"), date.date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric"
  }));
  addReceiptRow(t("time"), session.time);
  addReceiptRow(t("formatLabel"), session.format);
  addReceiptRow(t("seats"), formatSelectedSeats());
  addReceiptRow(t("ticketsCount"), String(selectedSeats.size));
  addReceiptRow(t("amount"), formatMoney(calculateTotal()));

  if (typeof confirmationModal.showModal === "function") {
    confirmationModal.showModal();
  } else {
    alert(t("orderAlert") + formatMoney(calculateTotal()));
  }
}

function handleBooking() {
  clearOrderMessage();

  if (selectedSeats.size === 0) {
    orderMessage.textContent = t("selectFirst");
    return;
  }

  const bookings = loadBookings();
  const key = getCurrentSessionKey();
  const alreadyBooked = new Set(
    Array.isArray(bookings[key]) ? bookings[key] : []
  );

  for (const seat of selectedSeats) {
    if (alreadyBooked.has(seat)) {
      orderMessage.textContent = t("alreadyTaken");
      renderSeatMap();
      return;
    }
  }

  const newSeats = getSelectedSeatList();
  bookings[key] = [...alreadyBooked, ...newSeats];

  if (!saveBookings(bookings)) {
    orderMessage.textContent = t("saveError");
    return;
  }

  showConfirmation();
  selectedSeats.clear();
  renderSeatMap();
  updateSummary();
  showToast(t("saved"));
}

// ========================================
// Меню ж