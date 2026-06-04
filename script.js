const STORAGE_KEY = "discipline-os-v1";
const SUBTASK_XP = 1;
const FOCUS_REWARD_PER_25_MINUTES = 10;
const STANDARD_SPIN_COST = 200;
const SHOP_WELCOME_BONUS = 600;
const DUPLICATE_COMPENSATION = 150;
const STREAK_MILESTONES = [
  { days: 3, xp: 20 },
  { days: 7, xp: 50 },
  { days: 14, xp: 100 },
  { days: 30, xp: 250 }
];

const DEFAULT_HABITS = [
  { id: "noReels", name: "День без листания рилсов", caption: "Не отдавать внимание алгоритмам", xp: 60 },
  { id: "prayer", name: "Молитва", caption: "Главная точка опоры", xp: 15 },
  { id: "planning", name: "Утреннее планирование дня", caption: "Определить главный шаг", xp: 15 },
  { id: "training", name: "Тренировка", caption: "Поддержать тело и характер", xp: 30 },
  { id: "reading", name: "Чтение 20 минут", caption: "Спокойное развитие", xp: 15 },
  { id: "wakeEight", name: "Подъём в 8 утра", caption: "Начать день вовремя", xp: 15 }
];

const DEFAULT_PROJECTS = [
  { id: "university", name: "Поступление в вуз", caption: "Русский, обществознание, история", icon: "В", color: "#4169e1", soft: "#edf2ff" },
  { id: "uxui", name: "UX/UI и цифровые продукты", caption: "Figma, интерфейсы, сайты, портфолио", icon: "U", color: "#7756c4", soft: "#f1edfb" },
  { id: "printing", name: "3D-печать", caption: "Светильники и продуктовые идеи", icon: "3", color: "#c88727", soft: "#fff5df" }
];

const DEFAULT_GOAL_PROMPTS = [
  { id: "identity", question: "Кем я хочу стать через год?", answer: "Создатель интерфейсов, сайтов и продуктов с AI-подходом." },
  { id: "freedom", question: "Что даст мне свободу?", answer: "Портфолио, первые клиенты и стабильный удаленный доход." },
  { id: "next30", question: "Что важно в ближайшие 30 дней?", answer: "Режим, подготовка к поступлению, 3D-печать и первые кейсы." }
];

const DEFAULT_GOALS = [
  { id: "goal-portfolio", title: "Собрать портфолио UX/UI и сайтов", why: "Чтобы показать себя как создателя продуктов.", progress: 15, target: "2026-09-01", done: false },
  { id: "goal-university", title: "Подготовиться к поступлению", why: "Русский, общество, история и уверенность на экзаменах.", progress: 10, target: "2026-08-01", done: false },
  { id: "goal-income", title: "Выйти на первые 50 000 ₽ удаленно", why: "Первый уровень финансовой свободы.", progress: 5, target: "2026-12-01", done: false }
];

const DEFAULT_DREAMS = [
  { id: "dream-travel", title: "Путешествовать с любимой девушкой", why: "Свобода, красивые места и жизнь, которую хочется проживать.", firstStep: "Собрать стабильный удаленный доход.", symbol: "✦" },
  { id: "dream-studio", title: "Своя маленькая студия", why: "3-5 человек, продукты, дизайн, AI и сильная упаковка.", firstStep: "Собрать первые кейсы и клиентов.", symbol: "◆" }
];

const PROJECT_PALETTE = [
  { color: "#2e9b68", soft: "#e9f6ef" },
  { color: "#c94d57", soft: "#faecee" },
  { color: "#317e9b", soft: "#e8f4f8" },
  { color: "#7756c4", soft: "#f1edfb" },
  { color: "#c88727", soft: "#fff5df" }
];

const PRIORITIES = {
  high: { name: "Срочный", color: "#c94d57", soft: "rgba(201,77,87,.14)", rank: 0 },
  medium: { name: "Средний", color: "#d59a2f", soft: "rgba(213,154,47,.16)", rank: 1 },
  low: { name: "Спокойный", color: "#2e9b68", soft: "rgba(46,155,104,.14)", rank: 2 }
};

const DIFFICULTIES = {
  easy: { name: "Лёгкая", xp: 15, range: 1 },
  medium: { name: "Средняя", xp: 25, range: 2 },
  hard: { name: "Тяжёлая", xp: 50, range: 3 }
};

const RARITIES = {
  common: { name: "Обычная", color: "#91a0b6", rank: 1, chance: 55 },
  rare: { name: "Редкая", color: "#4f8cff", rank: 2, chance: 25 },
  epic: { name: "Эпическая", color: "#a268ff", rank: 3, chance: 12 },
  legendary: { name: "Легендарная", color: "#f1b742", rank: 4, chance: 6 },
  mythic: { name: "Мифическая", color: "#f0648c", rank: 5, chance: 2 }
};

const carsCatalog = Object.freeze([
  { id: "mazda-3-bk", displayName: "Mazda 3 BK", shortName: "Mazda 3", year: "2003-2009", country: "Япония", bodyType: "седан / хэтчбек", rarity: "common", engine: { name: "MZR", layout: "рядный 4-цилиндровый", displacement: "1.6-2.3 л", aspiration: "атмосферный", horsepower: 105, torqueNm: 145 }, drivetrain: "FWD", transmission: "5-ступ. МКПП / 4-5-ступ. АКПП", realWorldPriceUsd: { label: "≈ $4 000-10 000", note: "Зависит от состояния, рынка и мотора." }, description: "Первое поколение Mazda 3: простая, живая городская машина с приятной управляемостью.", funFact: "У модели сильная фан-база именно из-за ощущения лёгкой и понятной машины.", sourceConfidence: "medium" },
  { id: "toyota-land-cruiser-prado-150", displayName: "Toyota Land Cruiser Prado 150", shortName: "Toyota Prado 150", year: "2009-2023", country: "Япония", bodyType: "рамный SUV", rarity: "common", engine: { name: "2TR-FE / 1GD-FTV / 1GR-FE", layout: "2.7 бензин / 2.8 дизель / 4.0 V6", displacement: "2.7-4.0 л", aspiration: "атмосферный / турбодизель", horsepower: 163, torqueNm: 246 }, drivetrain: "4WD", transmission: "5-6-ступ. АКПП / МКПП", realWorldPriceUsd: { label: "≈ $20 000-55 000", note: "Сильно зависит от года, пробега и рынка." }, description: "Надёжный рамный внедорожник для плохих дорог и спокойной ежедневной эксплуатации.", funFact: "Prado часто выбирают не за скорость, а за ресурс и уверенность.", sourceConfidence: "medium" },
  { id: "ford-focus-3", displayName: "Ford Focus III", shortName: "Ford Focus", year: "2010-2018", country: "США / Европа", bodyType: "хэтчбек / седан / универсал", rarity: "common", engine: { name: "Duratec / EcoBoost", layout: "рядный 4-цилиндровый", displacement: "1.6-2.0 л", aspiration: "атмосферный / турбо", horsepower: 105, torqueNm: 150 }, drivetrain: "FWD", transmission: "5-6-ступ. МКПП / PowerShift", realWorldPriceUsd: { label: "≈ $5 000-13 000", note: "Цена зависит от версии, коробки и состояния." }, description: "Практичный городской автомобиль с хорошей управляемостью для своего класса.", funFact: "Горячие ST/RS-версии сделали Focus заметным среди энтузиастов.", sourceConfidence: "medium" },
  { id: "vaz-1111-oka", displayName: "ВАЗ-1111 Ока", shortName: "Ока", year: "1987-2008", country: "Россия", bodyType: "микрохэтчбек", rarity: "common", engine: { name: "ВАЗ-1111 / 11113", layout: "рядный 2-цилиндровый", displacement: "0.65-0.75 л", aspiration: "атмосферный", horsepower: 29, torqueNm: 44 }, drivetrain: "FWD", transmission: "4-ступ. МКПП", realWorldPriceUsd: { label: "≈ $500-3 000", note: "Цена зависит от состояния и региона." }, description: "Очень компактная городская машина с максимально простой конструкцией.", funFact: "Ока маленькая, но по узнаваемости легко спорит с куда более дорогими машинами.", sourceConfidence: "medium" },
  { id: "renault-logan-2", displayName: "Renault Logan II", shortName: "Renault Logan", year: "2012-2022", country: "Франция / Румыния", bodyType: "седан", rarity: "common", engine: { name: "K7M / K4M / H4M", layout: "рядный 4-цилиндровый", displacement: "1.6 л", aspiration: "атмосферный", horsepower: 82, torqueNm: 134 }, drivetrain: "FWD", transmission: "5-ступ. МКПП / 4-ступ. АКПП / CVT", realWorldPriceUsd: { label: "≈ $5 000-13 000", note: "Зависит от года, пробега и комплектации." }, description: "Простой и практичный седан, который покупают за надёжность и недорогое обслуживание.", funFact: "Logan стал символом рационального автомобиля без лишнего пафоса.", sourceConfidence: "medium" },
  { id: "volkswagen-passat-b3", displayName: "Volkswagen Passat B3", shortName: "Passat B3", year: "1988-1993", country: "Германия", bodyType: "седан / универсал", rarity: "common", engine: { name: "VW EA827 / VR6", layout: "рядный 4-цилиндровый / VR6", displacement: "1.6-2.8 л", aspiration: "атмосферный", horsepower: 72, torqueNm: 125 }, drivetrain: "FWD / Syncro", transmission: "5-ступ. МКПП / 4-ступ. АКПП", realWorldPriceUsd: { label: "≈ $2 000-8 000", note: "Живые экземпляры стоят заметно дороже уставших." }, description: "Европейская классика с гладким передком без привычной решётки радиатора.", funFact: "В странах СНГ Passat B3 давно стал почти народной немецкой классикой.", sourceConfidence: "medium" },
  { id: "lada-niva-legend", displayName: "LADA Niva Legend", shortName: "LADA Niva", year: "с 1977", country: "Россия", bodyType: "компактный SUV", rarity: "common", engine: { name: "ВАЗ-21214", layout: "рядный 4-цилиндровый", displacement: "1.7 л", aspiration: "атмосферный", horsepower: 83, torqueNm: 129 }, drivetrain: "постоянный 4WD", transmission: "5-ступ. МКПП", realWorldPriceUsd: { label: "≈ $4 000-14 000", note: "Цена зависит от года и состояния кузова." }, description: "Короткий внедорожник с простой механикой и настоящей проходимостью.", funFact: "Niva — один из самых долгоживущих внедорожников в мире.", sourceConfidence: "medium" },
  { id: "li-auto-l9", displayName: "Li Auto L9", shortName: "Li Auto L9", year: "с 2022", country: "Китай", bodyType: "полноразмерный SUV", rarity: "common", engine: { name: "EREV", layout: "электропривод с бензиновым генератором", displacement: "1.5 л генератор", aspiration: "турбо", horsepower: 449, torqueNm: 620 }, drivetrain: "AWD", transmission: "электрическая трансмиссия", realWorldPriceUsd: { label: "≈ $45 000-70 000", note: "Зависит от рынка и комплектации." }, description: "Большой семейный SUV с упором на комфорт, экраны и электрический характер езды.", funFact: "По ощущению салона L9 ближе к мобильной гостиной, чем к обычному кроссоверу.", sourceConfidence: "medium" },
  { id: "audi-a4-b9", displayName: "Audi A4 B9", shortName: "Audi A4", year: "2015-2023", country: "Германия", bodyType: "седан / универсал", rarity: "common", engine: { name: "TFSI / TDI", layout: "рядный 4-цилиндровый / V6", displacement: "1.4-3.0 л", aspiration: "турбо", horsepower: 150, torqueNm: 250 }, drivetrain: "FWD / quattro", transmission: "6-ступ. МКПП / S tronic / Tiptronic", realWorldPriceUsd: { label: "≈ $15 000-40 000", note: "Цена зависит от двигателя, quattro и состояния." }, description: "Сдержанный немецкий седан про аккуратность, комфорт и технологичность.", funFact: "В версиях quattro A4 особенно уверенно чувствует себя зимой.", sourceConfidence: "medium" },
  { id: "opel-astra-j-gtc", displayName: "Opel Astra J GTC", shortName: "Astra GTC", year: "2011-2018", country: "Германия", bodyType: "3-дверный хэтчбек", rarity: "common", engine: { name: "Ecotec Turbo", layout: "рядный 4-цилиндровый", displacement: "1.4-2.0 л", aspiration: "атмосферный / турбо", horsepower: 140, torqueNm: 200 }, drivetrain: "FWD", transmission: "6-ступ. МКПП / 6-ступ. АКПП", realWorldPriceUsd: { label: "≈ $6 000-16 000", note: "OPC-версии дороже обычных." }, description: "Трёхдверная Astra с более эмоциональным силуэтом и низкой посадкой.", funFact: "Версия OPC превращала Astra GTC в настоящий горячий хэтчбек.", sourceConfidence: "medium" },
  { id: "lexus-is-f", displayName: "Lexus IS F", shortName: "Lexus IS F", year: "2007-2014", country: "Япония", bodyType: "спортседан", rarity: "common", engine: { name: "2UR-GSE", layout: "5.0 л V8", displacement: "5.0 л", aspiration: "атмосферный", horsepower: 423, torqueNm: 505 }, drivetrain: "RWD", transmission: "8-ступ. АКПП", realWorldPriceUsd: { label: "≈ $25 000-55 000", note: "Живые экземпляры ценятся выше из-за редкости V8." }, description: "Первый серьёзный F-седан Lexus с атмосферным V8 и задним приводом.", funFact: "IS F звучит и ощущается старошкольнее многих современных турбо-седанов.", sourceConfidence: "medium" },
  { id: "volkswagen-polo-sedan-taxi", displayName: "Volkswagen Polo Sedan Taxi", shortName: "VW Polo Taxi", year: "2010-2020", country: "Германия / Россия", bodyType: "седан", rarity: "common", engine: { name: "CFNA / CWVA", layout: "рядный 4-цилиндровый", displacement: "1.6 л", aspiration: "атмосферный", horsepower: 105, torqueNm: 153 }, drivetrain: "FWD", transmission: "5-ступ. МКПП / 6-ступ. АКПП", realWorldPriceUsd: { label: "≈ $4 000-11 000", note: "Такси-экземпляры сильно зависят от пробега." }, description: "Рабочий городской седан в образе такси: простой, понятный и узнаваемый.", funFact: "Жёлтый цвет сразу превращает обычный Polo в часть городской среды.", sourceConfidence: "medium" },
  { id: "volkswagen-passat-b6", displayName: "Volkswagen Passat B6", shortName: "Passat B6", year: "2005-2010", country: "Германия", bodyType: "седан / универсал", rarity: "common", engine: { name: "FSI / TSI / TDI", layout: "рядный 4-цилиндровый / VR6", displacement: "1.6-3.6 л", aspiration: "атмосферный / турбо", horsepower: 102, torqueNm: 148 }, drivetrain: "FWD / 4Motion", transmission: "МКПП / АКПП / DSG", realWorldPriceUsd: { label: "≈ $4 000-13 000", note: "DSG, мотор и состояние сильно влияют на цену." }, description: "Более строгий и премиальный этап в истории Volkswagen Passat.", funFact: "Passat R36 с VR6 — одна из самых желанных версий поколения.", sourceConfidence: "medium" },
  { id: "porsche-cayenne-955", displayName: "Porsche Cayenne 955", shortName: "Porsche Cayenne", year: "2002-2007", country: "Германия", bodyType: "SUV", rarity: "common", engine: { name: "VR6 / V8", layout: "3.2 V6 - 4.5 V8 Turbo", displacement: "3.2-4.5 л", aspiration: "атмосферный / турбо", horsepower: 250, torqueNm: 310 }, drivetrain: "AWD", transmission: "6-ступ. МКПП / 6-ступ. АКПП", realWorldPriceUsd: { label: "≈ $6 000-25 000", note: "Turbo-версии и состояние обслуживания сильно меняют цену." }, description: "Первый Cayenne доказал, что Porsche может быть не только спорткаром.", funFact: "Именно Cayenne серьёзно помог Porsche финансово в 2000-х.", sourceConfidence: "medium" },
  { id: "mini-hatch-cooper", displayName: "MINI Hatch Cooper", shortName: "MINI Cooper", year: "с 2014", country: "Великобритания / Германия", bodyType: "3-дверный хэтчбек", rarity: "rare", engine: { name: "B38 / B48", layout: "1.5 I3 / 2.0 I4 Turbo", displacement: "1.5-2.0 л", aspiration: "турбо", horsepower: 136, torqueNm: 220 }, drivetrain: "FWD", transmission: "МКПП / Steptronic", realWorldPriceUsd: { label: "≈ $12 000-32 000", note: "Cooper S и JCW дороже базовых." }, description: "Маленькая машина с большим характером, где дизайн важен не меньше динамики.", funFact: "Короткая база делает MINI очень живым в городе.", sourceConfidence: "medium" },
  { id: "mercedes-e-class-w213", displayName: "Mercedes-Benz E-Class W213", shortName: "Mercedes E-Class", year: "2016-2023", country: "Германия", bodyType: "бизнес-седан", rarity: "rare", engine: { name: "M264 / OM654 / M177 AMG", layout: "I4 / I6 / V8", displacement: "2.0-4.0 л", aspiration: "турбо", horsepower: 184, torqueNm: 300 }, drivetrain: "RWD / 4MATIC", transmission: "9G-Tronic", realWorldPriceUsd: { label: "≈ $22 000-90 000", note: "AMG-версии сильно дороже обычных." }, description: "Современный E-Class про комфорт, технологии и спокойную уверенность.", funFact: "AMG E 63 S превращает бизнес-седан в очень быстрый автомобиль.", sourceConfidence: "medium" },
  { id: "hummer-h2", displayName: "Hummer H2", shortName: "Hummer H2", year: "2002-2009", country: "США", bodyType: "полноразмерный SUV", rarity: "rare", engine: { name: "Vortec V8", layout: "6.0 / 6.2 л V8", displacement: "6.0-6.2 л", aspiration: "атмосферный", horsepower: 316, torqueNm: 488 }, drivetrain: "4WD", transmission: "4-6-ступ. АКПП", realWorldPriceUsd: { label: "≈ $15 000-45 000", note: "Цена зависит от состояния и тюнинга." }, description: "Большой, громкий и максимально заметный внедорожник-образ.", funFact: "H2 больше про присутствие, чем про рациональность.", sourceConfidence: "medium" },
  { id: "toyota-camry-xv70", displayName: "Toyota Camry XV70", shortName: "Toyota Camry", year: "2017-2024", country: "Япония", bodyType: "седан", rarity: "rare", engine: { name: "A25A / 2GR-FKS", layout: "2.5 I4 / 3.5 V6", displacement: "2.0-3.5 л", aspiration: "атмосферный", horsepower: 150, torqueNm: 192 }, drivetrain: "FWD", transmission: "6-8-ступ. АКПП", realWorldPriceUsd: { label: "≈ $18 000-45 000", note: "V6 и свежие годы стоят выше." }, description: "Популярный бизнес-седан с более острым визуальным характером.", funFact: "Версия 3.5 V6 ценится за запас мощности.", sourceConfidence: "medium" },
  { id: "bmw-m5-f90", displayName: "BMW M5 F90", shortName: "BMW M5", year: "2017-2023", country: "Германия", bodyType: "спортседан", rarity: "rare", engine: { name: "S63B44T4", layout: "4.4 л V8 twin-turbo", displacement: "4.4 л", aspiration: "twin-turbo", horsepower: 600, torqueNm: 750 }, drivetrain: "M xDrive", transmission: "8-ступ. АКПП", realWorldPriceUsd: { label: "≈ $55 000-120 000", note: "Competition и CS заметно дороже." }, description: "Бизнес-седан, который едет на уровне суперкаров.", funFact: "F90 впервые принесла M5 полный привод, сохранив режим заднего привода.", sourceConfidence: "medium" },
  { id: "mercedes-e-class-w124", displayName: "Mercedes-Benz E-Class W124", shortName: "Mercedes W124", year: "1984-1996", country: "Германия", bodyType: "седан / купе / универсал", rarity: "epic", engine: { name: "M102 / M104 / M119", layout: "I4 / I6 / V8", displacement: "2.0-5.0 л", aspiration: "атмосферный", horsepower: 75, torqueNm: 160 }, drivetrain: "RWD / 4MATIC", transmission: "МКПП / АКПП", realWorldPriceUsd: { label: "≈ $5 000-50 000+", note: "Редкие версии и состояние резко повышают цену." }, description: "Одна из самых уважаемых серий Mercedes за надёжность и солидность.", funFact: "В народе W124 часто называют «кабан» за массивный образ.", sourceConfidence: "medium" },
  { id: "chevrolet-tahoe-fbi", displayName: "Chevrolet Tahoe Police Package", shortName: "Chevrolet Tahoe FBI Style", year: "2015-2020", country: "США", bodyType: "SUV", rarity: "epic", engine: { name: "EcoTec3 5.3L V8", layout: "5.3 л V8", displacement: "5.3 л", aspiration: "атмосферный", horsepower: 355, torqueNm: 519 }, drivetrain: "RWD / 4WD", transmission: "6-ступ. АКПП", realWorldPriceUsd: { label: "≈ $18 000-45 000", note: "Зависит от года, пробега и служебного оснащения." }, description: "Большой американский внедорожник в стиле служебного автомобиля спецслужб.", funFact: "В игре он эпический из-за брутального FBI-образа.", sourceConfidence: "medium" },
  { id: "porsche-911-carrera-4s", displayName: "Porsche 911 Carrera 4S", shortName: "Porsche 911", year: "с 2019", country: "Германия", bodyType: "спорткупе", rarity: "epic", engine: { name: "MA2.9", layout: "3.0 л оппозитный 6-цилиндровый twin-turbo", displacement: "3.0 л", aspiration: "twin-turbo", horsepower: 450, torqueNm: 530 }, drivetrain: "AWD", transmission: "8-ступ. PDK / 7-ступ. МКПП", realWorldPriceUsd: { label: "≈ $110 000-180 000", note: "Цена зависит от года, опций и рынка." }, description: "Современная классика Porsche: быстрый, точный и всё ещё пригодный на каждый день.", funFact: "911 десятилетиями сохраняет узнаваемую форму, меняя технологии внутри.", sourceConfidence: "medium" },
  { id: "mitsubishi-lancer-evolution-x", displayName: "Mitsubishi Lancer Evolution X", shortName: "Lancer Evolution X", year: "2007-2016", country: "Япония", bodyType: "спортседан", rarity: "epic", engine: { name: "4B11T", layout: "2.0 л рядный 4-цилиндровый турбо", displacement: "2.0 л", aspiration: "турбо", horsepower: 295, torqueNm: 366 }, drivetrain: "AWD S-AWC", transmission: "5-ступ. МКПП / 6-ступ. SST", realWorldPriceUsd: { label: "≈ $25 000-55 000", note: "Цена зависит от состояния и тюнинга." }, description: "Последняя глава легендарной серии Lancer Evolution.", funFact: "S-AWC помогал Evo X быть очень быстрым в поворотах.", sourceConfidence: "medium" },
  { id: "mercedes-amg-g63-hello-kitty", displayName: "Mercedes-AMG G 63 Hello Kitty Custom", shortName: "AMG G 63 Hello Kitty", year: "кастомный образ", country: "Германия", bodyType: "люксовый SUV", rarity: "epic", engine: { name: "M177", layout: "4.0 л V8 Biturbo", displacement: "4.0 л", aspiration: "biturbo", horsepower: 585, torqueNm: 850 }, drivetrain: "4MATIC", transmission: "9G-Tronic", realWorldPriceUsd: { label: "≈ $180 000-300 000+", note: "Кастом и состояние могут сильно менять стоимость." }, description: "Суровый G-Class в неожиданно милом коллекционном оформлении.", funFact: "Контраст G-Class и Hello Kitty делает машину почти арт-объектом.", sourceConfidence: "medium" },
  { id: "pulse-rs", displayName: "Mercedes-Benz CLA", shortName: "Mercedes CLA", year: "с 2013", country: "Германия", bodyType: "4-дверное купе", rarity: "epic", engine: { name: "M282 / M260 / AMG M139", layout: "рядный 4-цилиндровый турбо", displacement: "1.3-2.0 л", aspiration: "турбо", horsepower: 136, torqueNm: 200 }, drivetrain: "FWD / 4MATIC", transmission: "7-8-ступ. DCT", realWorldPriceUsd: { label: "≈ $18 000-75 000", note: "AMG CLA 45 S стоит заметно выше обычных." }, description: "Дизайнерский вход в мир Mercedes с низким силуэтом и премиальным образом.", funFact: "AMG CLA 45 S известен одним из самых мощных серийных 2.0-литровых моторов.", sourceConfidence: "medium" },
  { id: "atlas-pro", displayName: "Chevrolet Aveo", shortName: "Chevrolet Aveo", year: "2002-2020", country: "США / Южная Корея", bodyType: "хэтчбек / седан", rarity: "epic", engine: { name: "S-TEC / Ecotec", layout: "рядный 4-цилиндровый", displacement: "1.2-1.6 л", aspiration: "атмосферный", horsepower: 72, torqueNm: 104 }, drivetrain: "FWD", transmission: "МКПП / АКПП", realWorldPriceUsd: { label: "≈ $2 500-9 000", note: "Зависит от поколения и рынка." }, description: "Простой городской Chevrolet, ставший доступной первой машиной во многих странах.", funFact: "В коллекции он интересен как яркий контраст к дорогим спорткарам.", sourceConfidence: "medium" },
  { id: "vector-zero", displayName: "Toyota Crown Sedan", shortName: "Toyota Crown", year: "классические поколения", country: "Япония", bodyType: "седан", rarity: "epic", engine: { name: "Toyota I6 / V6 / V8", layout: "рядный 6-цилиндровый / V6 / V8", displacement: "2.0-4.0 л", aspiration: "атмосферный / турбо", horsepower: 135, torqueNm: 180 }, drivetrain: "RWD / AWD", transmission: "АКПП", realWorldPriceUsd: { label: "≈ $6 000-35 000", note: "Поколение и состояние сильно влияют на цену." }, description: "Японский представительский седан со спокойным статусом и высоким комфортом.", funFact: "В Японии Crown долго был символом солидного служебного и личного автомобиля.", sourceConfidence: "medium" },
  { id: "aurum-gt", displayName: "Subaru Impreza WRX", shortName: "Subaru WRX", year: "1992-2007", country: "Япония", bodyType: "спортседан", rarity: "legendary", engine: { name: "EJ20 Turbo", layout: "2.0 л оппозитный 4-цилиндровый турбо", displacement: "2.0 л", aspiration: "турбо", horsepower: 218, torqueNm: 292 }, drivetrain: "AWD", transmission: "5-6-ступ. МКПП / АКПП", realWorldPriceUsd: { label: "≈ $15 000-60 000", note: "STI, состояние и оригинальность сильно влияют на цену." }, description: "Раллийная и уличная икона: синий кузов, полный привод и характерный звук.", funFact: "Оппозитный мотор Subaru даёт машине очень узнаваемый звук.", sourceConfidence: "medium" },
  { id: "phantom-v12", displayName: "Nissan Skyline GT-R R34", shortName: "Nissan Skyline GT-R", year: "1999-2002", country: "Япония", bodyType: "спорткупе", rarity: "legendary", engine: { name: "RB26DETT", layout: "2.6 л рядный 6-цилиндровый twin-turbo", displacement: "2.6 л", aspiration: "twin-turbo", horsepower: 280, torqueNm: 392 }, drivetrain: "AWD ATTESA E-TS", transmission: "6-ступ. МКПП", realWorldPriceUsd: { label: "≈ $120 000-300 000+", note: "R34 GT-R сильно подорожал из-за редкости и культового статуса." }, description: "Одна из главных японских автомобильных легенд благодаря технологиям, тюнингу и кино.", funFact: "RB26DETT знаменит огромным потенциалом для тюнинга.", sourceConfidence: "medium" },
  { id: "solarion", displayName: "Chevrolet Camaro Bumblebee", shortName: "Camaro Bumblebee", year: "образ Transformers", country: "США", bodyType: "muscle car coupe", rarity: "mythic", engine: { name: "GM V8 в SS-образе", layout: "6.2 л V8", displacement: "6.2 л", aspiration: "атмосферный", horsepower: 426, torqueNm: 569 }, drivetrain: "RWD", transmission: "6-ступ. МКПП / АКПП", realWorldPriceUsd: { label: "≈ $25 000-80 000+", note: "Цена зависит от поколения, версии и кастома." }, description: "Жёлтый Camaro из «Трансформеров» стал одним из самых узнаваемых киноавтомобилей.", funFact: "После фильма образ Bumblebee сильно поднял популярность Camaro у молодой аудитории.", sourceConfidence: "medium" }
]);

const CARS = [
  { id: "metro-s", name: "Metro S", rarity: "common", baseValue: 110, salvageValue: 35, description: "Чистый городской силуэт.", style: "compact", image: "assets/cars/metro-s-common.png" },
  { id: "nord-86", name: "Nord 86", rarity: "common", baseValue: 120, salvageValue: 40, description: "Спокойная классика на каждый день.", style: "sedan", image: "assets/cars/nord-86-common.png" },
  { id: "trail-mini", name: "Trail Mini", rarity: "common", baseValue: 130, salvageValue: 45, description: "Маленький городской исследователь.", style: "suv", image: "assets/cars/trail-mini-common.png" },
  { id: "volt-hatch", name: "Volt Hatch", rarity: "common", baseValue: 140, salvageValue: 45, description: "Лёгкий электрический хэтчбек.", style: "compact", image: "assets/cars/volt-hatch-common.png" },
  { id: "mazda-3-bk", name: "Mazda 3 BK", rarity: "common", baseValue: 120, salvageValue: 40, description: "Городской седан первого поколения с собранным силуэтом.", style: "sedan", image: "assets/cars/mazda-3-bk-common.png" },
  { id: "toyota-land-cruiser-prado-150", name: "Toyota Land Cruiser Prado 150", rarity: "common", baseValue: 160, salvageValue: 55, description: "Надёжный рамный внедорожник для повседневных маршрутов.", style: "suv", image: "assets/cars/toyota-land-cruiser-prado-150-common.png" },
  { id: "ford-focus-3", name: "Ford Focus III", rarity: "common", baseValue: 125, salvageValue: 40, description: "Практичный городской хэтчбек с уверенным характером.", style: "compact", image: "assets/cars/ford-focus-3-common.png" },
  { id: "vaz-1111-oka", name: "ВАЗ-1111 Ока", rarity: "common", baseValue: 90, salvageValue: 30, description: "Компактная городская классика с узнаваемым силуэтом.", style: "compact", image: "assets/cars/vaz-1111-oka-common.png" },
  { id: "renault-logan-2", name: "Renault Logan II", rarity: "common", baseValue: 115, salvageValue: 35, description: "Простой и надёжный седан для ежедневных задач.", style: "sedan", image: "assets/cars/renault-logan-2-common.png" },
  { id: "volkswagen-passat-b3", name: "Volkswagen Passat B3", rarity: "common", baseValue: 105, salvageValue: 35, description: "Красный седан с характером европейской классики.", style: "sedan", image: "assets/cars/volkswagen-passat-b3-common.png" },
  { id: "lada-niva-legend", name: "LADA Niva Legend", rarity: "common", baseValue: 130, salvageValue: 45, description: "Компактный внедорожник, готовый свернуть с асфальта.", style: "suv", image: "assets/cars/lada-niva-legend-common.png" },
  { id: "li-auto-l9", name: "Li Auto L9", rarity: "common", baseValue: 170, salvageValue: 55, description: "Современный семейный кроссовер с выразительной световой линией.", style: "suv", image: "assets/cars/li-auto-l9-common.png" },
  { id: "audi-a4-b9", name: "Audi A4 B9", rarity: "common", baseValue: 145, salvageValue: 45, description: "Сдержанный немецкий седан с точным и собранным обликом.", style: "sedan", image: "assets/cars/audi-a4-b9-common.png" },
  { id: "opel-astra-j-gtc", name: "Opel Astra J GTC", rarity: "common", baseValue: 125, salvageValue: 40, description: "Трёхдверный городской хэтчбек с динамичным силуэтом.", style: "compact", image: "assets/cars/opel-astra-j-gtc-common.png" },
  { id: "lexus-is-f", name: "Lexus IS F", rarity: "common", baseValue: 155, salvageValue: 50, description: "Яркий спортивный седан с узнаваемым характером Lexus.", style: "sport", image: "assets/cars/lexus-is-f-common.png" },
  { id: "volkswagen-polo-sedan-taxi", name: "Volkswagen Polo Sedan Taxi", rarity: "common", baseValue: 110, salvageValue: 35, description: "Жёлтое городское такси, готовое к любому маршруту.", style: "sedan", image: "assets/cars/volkswagen-polo-sedan-taxi-common.png" },
  { id: "volkswagen-passat-b6", name: "Volkswagen Passat B6", rarity: "common", baseValue: 130, salvageValue: 40, description: "Практичный чёрный седан с классическим европейским обликом.", style: "sedan", image: "assets/cars/volkswagen-passat-b6-common.png" },
  { id: "porsche-cayenne-955", name: "Porsche Cayenne 955", rarity: "common", baseValue: 165, salvageValue: 55, description: "Первое поколение мощного городского внедорожника Porsche.", style: "suv", image: "assets/cars/porsche-cayenne-955-common.png" },
  { id: "mini-hatch-cooper", name: "MINI Hatch Cooper", rarity: "rare", baseValue: 235, salvageValue: 75, description: "Фиолетовый городской хэтчбек с узнаваемым британским характером.", style: "compact", image: "assets/cars/mini-hatch-cooper-rare.png" },
  { id: "mercedes-e-class-w213", name: "Mercedes-Benz E-Class W213", rarity: "rare", baseValue: 280, salvageValue: 90, description: "Чёрный бизнес-седан с уверенным премиальным обликом.", style: "sedan", image: "assets/cars/mercedes-e-class-w213-rare.png" },
  { id: "hummer-h2", name: "Hummer H2", rarity: "rare", baseValue: 310, salvageValue: 100, description: "Жёлтый внедорожник с массивным силуэтом и суровым характером.", style: "suv", image: "assets/cars/hummer-h2-rare.png" },
  { id: "toyota-camry-xv70", name: "Toyota Camry XV70", rarity: "rare", baseValue: 245, salvageValue: 80, description: "Чёрный седан с выразительным спортивным обвесом.", style: "sedan", image: "assets/cars/toyota-camry-xv70-rare.png" },
  { id: "bmw-m5-f90", name: "BMW M5 F90", rarity: "rare", baseValue: 330, salvageValue: 110, description: "Синий спортивный седан с мощным характером подразделения M.", style: "sport", image: "assets/cars/bmw-m5-f90-rare.png" },
  { id: "aero-r", name: "Aero R", rarity: "rare", baseValue: 230, salvageValue: 75, description: "Быстрый и собранный спорткар.", style: "sport", image: "assets/cars/aero-r-rare.png" },
  { id: "summit-x", name: "Summit X", rarity: "rare", baseValue: 250, salvageValue: 80, description: "Яркий универсал для больших планов.", style: "suv", image: "assets/cars/summit-x-rare.png" },
  { id: "nightline", name: "Nightline", rarity: "rare", baseValue: 270, salvageValue: 90, description: "Тёмный седан с точным характером.", style: "sedan", image: "assets/cars/nightline-rare.png" },
  { id: "mercedes-e-class-w124", name: "Mercedes-Benz E-Class W124", rarity: "epic", baseValue: 560, salvageValue: 185, description: "Легендарный чёрный «кабан» с выдержанным классическим обликом.", style: "sedan", image: "assets/cars/mercedes-e-class-w124-epic.png" },
  { id: "chevrolet-tahoe-fbi", name: "Chevrolet Tahoe FBI", rarity: "epic", baseValue: 610, salvageValue: 200, description: "Чёрный служебный внедорожник FBI для особых заданий.", style: "suv", image: "assets/cars/chevrolet-tahoe-fbi-epic.png" },
  { id: "porsche-911-carrera-4s", name: "Porsche 911 Carrera 4S", rarity: "epic", baseValue: 690, salvageValue: 225, description: "Бордовый спорткар с чистым силуэтом современной классики.", style: "sport", image: "assets/cars/porsche-911-carrera-4s-epic.png" },
  { id: "mitsubishi-lancer-evolution-x", name: "Mitsubishi Lancer Evolution X", rarity: "epic", baseValue: 650, salvageValue: 215, description: "Боевой японский седан с яркой ливреей и развитым аэродинамическим обвесом.", style: "sport", image: "assets/cars/mitsubishi-lancer-evolution-x-epic.png" },
  { id: "mercedes-amg-g63-hello-kitty", name: "Mercedes-AMG G 63 Hello Kitty", rarity: "epic", baseValue: 720, salvageValue: 240, description: "Розовый G-Class в коллекционном оформлении Hello Kitty.", style: "suv", image: "assets/cars/mercedes-amg-g63-hello-kitty-epic.png" },
  { id: "pulse-rs", name: "Mercedes-Benz CLA", rarity: "epic", baseValue: 460, salvageValue: 150, description: "Белое купе с уверенным премиальным характером.", style: "sport", image: "assets/cars/mercedes-cla-epic.png" },
  { id: "atlas-pro", name: "Chevrolet Aveo", rarity: "epic", baseValue: 500, salvageValue: 170, description: "Яркий городской хэтчбек с коллекционным настроением.", style: "compact", image: "assets/cars/chevrolet-aveo-epic.png" },
  { id: "vector-zero", name: "Crown Sedan", rarity: "epic", baseValue: 540, salvageValue: 180, description: "Строгий белый седан с классическим характером.", style: "sedan", image: "assets/cars/crown-sedan-epic.png" },
  { id: "aurum-gt", name: "Subaru Impreza WRX", rarity: "legendary", baseValue: 900, salvageValue: 300, description: "Раллийная легенда с золотыми дисками и точным характером.", style: "sport", image: "assets/cars/subaru-impreza-wrx-legendary.png" },
  { id: "phantom-v12", name: "Nissan Skyline GT-R", rarity: "legendary", baseValue: 980, salvageValue: 330, description: "Культовый Skyline из «Форсажа» с серебристо-синей ливреей.", style: "sport", image: "assets/cars/nissan-skyline-gtr-legendary.png" },
  { id: "nova-x", name: "Бэтмобиль", rarity: "mythic", baseValue: 1800, salvageValue: 600, description: "Бронированная машина Тёмного рыцаря для самого редкого момента удачи.", style: "hyper", image: "assets/cars/batmobile-mythic.png" },
  { id: "solarion", name: "Chevrolet Camaro Bumblebee", rarity: "mythic", baseValue: 2100, salvageValue: 700, description: "Жёлтый Camaro из «Трансформеров» с характером настоящего героя.", style: "sport", image: "assets/cars/chevrolet-camaro-bumblebee-mythic.png" }
];

const WEEKDAYS = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

function pad(value) { return String(value).padStart(2, "0"); }
function dateKey(date = new Date()) { return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`; }
function parseKey(key) { const [y, m, d] = key.split("-").map(Number); return new Date(y, m - 1, d); }
function shiftDate(days) { const date = new Date(); date.setHours(0, 0, 0, 0); date.setDate(date.getDate() + days); return date; }
function emptyDay(habitItems = DEFAULT_HABITS) { return { habits: Object.fromEntries(habitItems.map(habit => [habit.id, false])), pomodoros: 0 }; }
function habits() { return state.habitItems; }
function habitById(id) { return habits().find(habit => habit.id === id); }
function projects() { return state.projectItems; }
function projectById(id) { return projects().find(project => project.id === id); }
function tasksForDate(key) { return state.tasks.filter(task => task.date === key); }
function tasksForProject(id) { return state.tasks.filter(task => task.projectId === id); }
function priorityOf(task) { return PRIORITIES[task.priority] || PRIORITIES.medium; }
function difficultyOf(task) { return DIFFICULTIES[task.difficulty] || DIFFICULTIES.medium; }
function difficultyIdFromRange(value) {
  return Object.entries(DIFFICULTIES).find(([, difficulty]) => difficulty.range === Number(value))?.[0] || "medium";
}
function taskXp(task) { return difficultyOf(task).xp; }
function normalizeSubtasks(items = []) {
  return Array.isArray(items) ? items.map(item => ({
    ...item,
    done: Boolean(item.done),
    subtasks: normalizeSubtasks(item.subtasks)
  })) : [];
}
function allSubtasks(items = []) {
  return items.flatMap(item => [item, ...allSubtasks(item.subtasks)]);
}
function findSubtask(items, id) {
  for (const item of items) {
    if (item.id === id) return item;
    const found = findSubtask(item.subtasks, id);
    if (found) return found;
  }
  return null;
}
function deleteSubtask(items, id) {
  return items.filter(item => item.id !== id).map(item => ({ ...item, subtasks: deleteSubtask(item.subtasks, id) }));
}
function createShopState() {
  return {
    welcomeBonus: SHOP_WELCOME_BONUS,
    spent: 0,
    salvage: 0,
    spinCount: 0,
    pityEpic: 0,
    pityLegendary: 0,
    ownedCars: {},
    selectedCarId: "",
    lastReward: null
  };
}

function clampProgress(value) {
  return Math.min(100, Math.max(0, Number(value) || 0));
}

function normalizeGoalPrompts(items = []) {
  const saved = Array.isArray(items) ? items : [];
  return DEFAULT_GOAL_PROMPTS.map(prompt => {
    const existing = saved.find(item => item.id === prompt.id);
    return { ...prompt, answer: typeof existing?.answer === "string" ? existing.answer : prompt.answer };
  });
}

function normalizeGoals(items = []) {
  const source = Array.isArray(items) && items.length ? items : DEFAULT_GOALS;
  return source.map(goal => ({
    id: goal.id || `goal-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    title: goal.title || "Новая цель",
    why: goal.why || "",
    progress: clampProgress(goal.progress),
    target: goal.target || "",
    done: Boolean(goal.done)
  }));
}

function normalizeDreams(items = []) {
  const source = Array.isArray(items) && items.length ? items : DEFAULT_DREAMS;
  return source.map(dream => ({
    id: dream.id || `dream-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    title: dream.title || "Новая мечта",
    why: dream.why || "",
    firstStep: dream.firstStep || "",
    symbol: dream.symbol || "★"
  }));
}

function createState() {
  return {
    days: { [dateKey()]: emptyDay() },
    habitItems: DEFAULT_HABITS.map(habit => ({ ...habit })),
    projects: Object.fromEntries(DEFAULT_PROJECTS.map(project => [project.id, 0])),
    projectItems: DEFAULT_PROJECTS.map(project => ({ ...project })),
    tasks: [],
    shop: createShopState(),
    goalPrompts: normalizeGoalPrompts(DEFAULT_GOAL_PROMPTS),
    goalItems: normalizeGoals(DEFAULT_GOALS),
    dreamItems: normalizeDreams(DEFAULT_DREAMS)
  };
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!parsed || !parsed.days || !parsed.projects) return createState();
    if (!Array.isArray(parsed.habitItems)) parsed.habitItems = DEFAULT_HABITS.map(habit => ({ ...habit }));
    parsed.habitItems = parsed.habitItems.map(habit => {
      const updatedDefault = DEFAULT_HABITS.find(item => item.id === habit.id);
      return updatedDefault ? { ...habit, ...updatedDefault } : habit;
    });
    if (!Array.isArray(parsed.projectItems)) parsed.projectItems = DEFAULT_PROJECTS.map(project => ({ ...project }));
    if (!Array.isArray(parsed.tasks)) parsed.tasks = [];
    parsed.tasks.forEach(task => {
      task.subtasks = normalizeSubtasks(task.subtasks);
      if (!DIFFICULTIES[task.difficulty]) task.difficulty = "medium";
    });
    parsed.shop = { ...createShopState(), ...(parsed.shop || {}) };
    if (!parsed.shop.ownedCars || typeof parsed.shop.ownedCars !== "object") parsed.shop.ownedCars = {};
    parsed.goalPrompts = normalizeGoalPrompts(parsed.goalPrompts);
    parsed.goalItems = normalizeGoals(parsed.goalItems);
    parsed.dreamItems = normalizeDreams(parsed.dreamItems);
    return parsed;
  } catch {
    return createState();
  }
}

let state = loadState();
let calendarDate = new Date();
let taskFilter = "upcoming";
let selectedDayKey = dateKey();
let selectedHabitDayKey = dateKey();
let selectedProjectId = null;
let selectedTaskId = null;
let progressMode = "cumulative";
let progressPeriod = 7;
let timer = { total: 25 * 60, left: 25 * 60, running: false, interval: null, endAt: null };
let timerAudioContext = null;
let garageFilter = "all";
let shopSpinning = false;
const subtaskCompleteSound = new Audio("assets/subtask-complete.wav");
subtaskCompleteSound.preload = "auto";
const taskCompleteSound = new Audio("assets/task-complete.wav");
taskCompleteSound.preload = "auto";
const habitCompleteSound = new Audio("assets/habit-complete.wav");
habitCompleteSound.preload = "auto";

function ensureDay(key = dateKey()) {
  if (!state.days[key]) state.days[key] = emptyDay();
  habits().forEach(habit => {
    if (typeof state.days[key].habits[habit.id] !== "boolean") state.days[key].habits[habit.id] = false;
  });
  return state.days[key];
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function today() { return ensureDay(); }
function selectedHabitDay() { return ensureDay(selectedHabitDayKey); }
function doneHabitCount(day) { return habits().filter(habit => day.habits[habit.id]).length; }
function taskDoneCount(tasks) { return tasks.filter(task => task.done).length; }
function qualifiesForStreak(key) { return doneHabitCount(state.days[key] || emptyDay()) >= 5; }

function dayPercent(key) {
  const day = state.days[key] || emptyDay();
  const tasks = tasksForDate(key);
  const total = habits().length + tasks.length;
  return total ? Math.round((doneHabitCount(day) + taskDoneCount(tasks)) / total * 100) : 0;
}

function completionKey(task) {
  return task.completedAt ? task.completedAt.slice(0, 10) : task.date || dateKey();
}

function carryOverUnfinishedTasks(todayKey = dateKey()) {
  let moved = 0;
  state.tasks.forEach(task => {
    if (task.done || !task.date || task.date >= todayKey) return;
    if (!task.carriedFrom) task.carriedFrom = task.date;
    task.lastCarriedAt = new Date().toISOString();
    task.date = todayKey;
    moved += 1;
  });
  return moved;
}

function streakAwardEvents() {
  const keys = Object.keys(state.days).filter(key => key <= dateKey()).sort();
  const events = [];
  let running = 0;
  let previousDate = null;
  keys.forEach(key => {
    const currentDate = parseKey(key);
    const consecutive = previousDate && Math.round((currentDate - previousDate) / 86400000) === 1;
    if (qualifiesForStreak(key)) running = consecutive ? running + 1 : 1;
    else running = 0;
    const milestone = STREAK_MILESTONES.find(item => item.days === running);
    if (milestone) events.push({ date: key, xp: milestone.xp, title: `Бонус за серию: ${milestone.days} дней`, type: "streak" });
    previousDate = currentDate;
  });
  return events;
}

function xpEvents() {
  const events = [];
  Object.entries(state.days).forEach(([key, day]) => {
    habits().forEach(habit => {
      if (day.habits[habit.id]) events.push({ date: key, xp: habit.xp, title: habit.name, type: "habit" });
    });
    if (Number(day.pomodoros || 0) > 0) {
      const focusReward = Number(day.focusReward ?? Number(day.pomodoros) * FOCUS_REWARD_PER_25_MINUTES);
      events.push({ date: key, xp: focusReward, title: `Фокус-сессии: ${day.pomodoros}`, type: "focus" });
    }
  });
  state.tasks.filter(task => task.done).forEach(task => {
    events.push({ date: completionKey(task), xp: taskXp(task), title: `Задача: ${task.title}`, type: "task" });
  });
  state.tasks.forEach(task => {
    allSubtasks(task.subtasks).filter(subtask => subtask.done).forEach(subtask => {
      events.push({ date: completionKey(subtask), xp: SUBTASK_XP, title: `Подзадача: ${subtask.title}`, type: "subtask" });
    });
  });
  return [...events, ...streakAwardEvents()].sort((a, b) => b.date.localeCompare(a.date) || b.xp - a.xp);
}

function dayXp(key) {
  return xpEvents().filter(event => event.date === key).reduce((sum, event) => sum + event.xp, 0);
}

function allXp() {
  return xpEvents().reduce((sum, event) => sum + event.xp, 0);
}

function streakBonusXpTotal() {
  return streakAwardEvents().reduce((sum, event) => sum + event.xp, 0);
}

function walletBalance() {
  return Math.max(0, allXp() + Number(state.shop.welcomeBonus || 0) + Number(state.shop.salvage || 0) - Number(state.shop.spent || 0));
}

function ownedCarCount() {
  return Object.keys(state.shop.ownedCars).filter(id => state.shop.ownedCars[id]?.count > 0).length;
}

function rarityOf(car) { return RARITIES[car.rarity]; }

function carVisual(car, className = "") {
  if (car.image) {
    return `<div class="car-visual ${className} car-image-visual" style="--rarity-color:${rarityOf(car).color}">
      <i class="car-glow"></i><img src="${car.image}" alt="${escapeHtml(car.name)}">
    </div>`;
  }
  return `<div class="car-visual ${className} car-${car.style}" style="--rarity-color:${rarityOf(car).color}">
    <i class="car-glow"></i><i class="car-body"></i><i class="car-cabin"></i><i class="car-wheel left"></i><i class="car-wheel right"></i>
  </div>`;
}

function rarityBadge(car) {
  return `<span class="rarity-badge" style="--rarity-color:${rarityOf(car).color}">${rarityOf(car).name}</span>`;
}

function getCarById(carId) {
  return carsCatalog.find(car => car.id === carId) || null;
}

function formatHorsepower(hp) {
  return hp ? `${hp} л.с.` : "Характеристики уточняются";
}

function formatPrice(price) {
  return price?.label || "Цена зависит от состояния";
}

function knownOrPending(value, fallback = "Характеристики уточняются") {
  return value || fallback;
}

function carMetaLine(details) {
  if (!details) return "Год • страна • тип кузова уточняются";
  return [details.year, details.country, details.bodyType].filter(Boolean).join(" • ");
}

function specGrid(details, locked = false) {
  const pending = locked ? "Открой машину" : "Характеристики уточняются";
  const engine = details?.engine;
  const engineSummary = engine ? `${engine.name}${engine.layout ? `, ${engine.layout}` : ""}` : pending;
  const specs = [
    ["Двигатель", engineSummary],
    ["Объём", engine?.displacement || pending],
    ["Мощность", details ? formatHorsepower(engine?.horsepower) : pending],
    ["Привод", details?.drivetrain || pending],
    ["КПП", details?.transmission || pending],
    ["Цена", details ? formatPrice(details.realWorldPriceUsd) : pending]
  ];
  return specs.map(([label, value]) => `
    <div class="car-spec">
      <span>${label}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");
}

function carCard(car, options = {}) {
  const owned = state.shop.ownedCars[car.id];
  const selected = state.shop.selectedCarId === car.id;
  return `<article class="garage-car ${owned ? "owned" : "locked"} ${selected ? "selected" : ""}" data-open-car="${car.id}" style="--rarity-color:${rarityOf(car).color}">
    ${carVisual(car)}
    <div class="garage-car-copy">
      ${rarityBadge(car)}
      <strong>${owned ? car.name : "Неизвестная машина"}</strong>
      <span>${owned ? car.description : "Открой в машине наград"}</span>
    </div>
    ${owned ? `<div class="garage-car-bottom"><small>Выпала ${owned.count} раз</small><button class="small-button" data-select-car="${car.id}" type="button">${selected ? "Выбрана" : "Выбрать"}</button></div>` : ""}
  </article>`;
}

function weightedRarity() {
  const chances = Object.entries(RARITIES).map(([id, rarity]) => ({ id, weight: rarity.chance }));
  if (state.shop.pityEpic >= 6) {
    const bonus = Math.min((state.shop.pityEpic - 5) * 1.5, 12);
    chances.find(item => item.id === "epic").weight += bonus;
    chances.find(item => item.id === "common").weight -= bonus;
  }
  if (state.shop.pityLegendary >= 14) {
    const bonus = Math.min((state.shop.pityLegendary - 13) * .8, 8);
    chances.find(item => item.id === "legendary").weight += bonus;
    chances.find(item => item.id === "common").weight -= bonus;
  }
  const total = chances.reduce((sum, item) => sum + Math.max(item.weight, 0), 0);
  let roll = Math.random() * total;
  for (const item of chances) {
    roll -= Math.max(item.weight, 0);
    if (roll <= 0) return item.id;
  }
  return "common";
}

function rollCar() {
  const rarity = weightedRarity();
  const pool = CARS.filter(car => car.rarity === rarity);
  return pool[Math.floor(Math.random() * pool.length)];
}

function updatePity(car) {
  const rank = rarityOf(car).rank;
  state.shop.pityEpic = rank >= RARITIES.epic.rank ? 0 : state.shop.pityEpic + 1;
  state.shop.pityLegendary = rank >= RARITIES.legendary.rank ? 0 : state.shop.pityLegendary + 1;
}

function renderReelCard(car) {
  return `<article class="reel-car" style="--rarity-color:${rarityOf(car).color}">
    ${carVisual(car, "small")}
    ${rarityBadge(car)}
    <strong>${car.name}</strong>
  </article>`;
}

function seedCarReel() {
  const reel = document.getElementById("carReel");
  if (!reel || shopSpinning) return;
  reel.style.transition = "none";
  reel.style.transform = "translateX(0)";
  reel.innerHTML = Array.from({ length: 8 }, (_, index) => renderReelCard(CARS[index % CARS.length])).join("");
}

function renderShop() {
  document.getElementById("shopBalance").textContent = `$${walletBalance()}`;
  document.getElementById("shopBalanceCaption").textContent = state.shop.welcomeBonus ? `Включая стартовый бонус $${state.shop.welcomeBonus}` : "Твои деньги за дисциплину";
  document.getElementById("rarityOdds").innerHTML = Object.entries(RARITIES).map(([id, rarity]) => `
    <div class="rarity-odd"><i style="--rarity-color:${rarity.color}"></i><span>${rarity.name}</span><strong>${rarity.chance}%</strong></div>
  `).join("");
  document.getElementById("shopStats").innerHTML = `
    <div><span>Открытий</span><strong>${state.shop.spinCount}</strong></div>
    <div><span>Машин в гараже</span><strong>${ownedCarCount()} / ${CARS.length}</strong></div>
    <div><span>Компенсации</span><strong>$${state.shop.salvage}</strong></div>
    <div><span>Последняя награда</span><strong>${state.shop.lastReward ? CARS.find(car => car.id === state.shop.lastReward.carId)?.name : "—"}</strong></div>
  `;
  const spinButton = document.getElementById("spinButton");
  spinButton.disabled = shopSpinning;
  spinButton.textContent = shopSpinning ? "Машина выбирается..." : "Открыть за $200";
  if (!document.getElementById("carReel").children.length) seedCarReel();
}

function renderGarage() {
  const owned = ownedCarCount();
  document.getElementById("collectionProgress").textContent = `${owned} / ${CARS.length}`;
  document.getElementById("collectionPercent").textContent = `${Math.round(owned / CARS.length * 100)}% открыто`;
  document.querySelectorAll("[data-garage-filter]").forEach(button => button.classList.toggle("active", button.dataset.garageFilter === garageFilter));
  const cars = garageFilter === "all" ? CARS : CARS.filter(car => car.rarity === garageFilter);
  document.getElementById("garageGrid").innerHTML = cars.map(car => carCard(car)).join("");
}

function openCarDetail(id) {
  const car = CARS.find(item => item.id === id);
  if (!car) return;
  const owned = state.shop.ownedCars[car.id];
  const locked = !owned;
  const details = locked ? null : getCarById(car.id);
  const selected = state.shop.selectedCarId === car.id;
  const panel = document.getElementById("carDetailPanel");
  panel.style.setProperty("--rarity-color", rarityOf(car).color);
  panel.classList.toggle("locked", locked);
  panel.classList.toggle("high-rarity", ["legendary", "mythic"].includes(car.rarity));
  document.getElementById("carDetailVisual").innerHTML = carVisual(car, "large");
  const rarityNode = document.getElementById("carDetailRarity");
  rarityNode.textContent = rarityOf(car).name;
  rarityNode.style.setProperty("--rarity-color", rarityOf(car).color);
  document.getElementById("carDetailName").textContent = locked ? "Неизвестная машина" : knownOrPending(details?.displayName, car.name);
  document.getElementById("carDetailDescription").textContent = locked ? "Открой эту машину в машине наград" : carMetaLine(details);
  document.getElementById("carDetailSpecs").innerHTML = specGrid(details, locked);
  document.getElementById("carDetailStory").textContent = locked
    ? "Подробное досье появится после открытия машины."
    : knownOrPending(details?.description, "Характеристики уточняются");
  document.getElementById("carDetailFact").textContent = locked
    ? "Сначала выбей машину в рулетке, затем здесь появятся факты и технические данные."
    : knownOrPending(details?.funFact, "Интересный факт уточняется");
  document.getElementById("carDetailRarityReason").textContent = locked
    ? `${rarityOf(car).name}: редкость уже известна, но сама машина пока скрыта.`
    : (details ? `Данные берутся из carsCatalog. ${details.realWorldPriceUsd?.note || ""}` : "Характеристики уточняются: для этой машины пока нет записи в carsCatalog.");
  document.getElementById("carDetailCollection").innerHTML = locked ? `
    <div><span>Статус</span><strong>Закрыта</strong></div>
    <div><span>Редкость</span><strong>${rarityOf(car).name}</strong></div>
    <div><span>Данные</span><strong>после открытия</strong></div>
  ` : `
    <div><span>Выпала</span><strong>${owned.count} раз</strong></div>
    <div><span>Ценность</span><strong>$${car.baseValue}</strong></div>
    <div><span>Дубль</span><strong>+$${DUPLICATE_COMPENSATION}</strong></div>
  `;
  const selectButton = document.getElementById("carDetailSelectButton");
  selectButton.dataset.selectCar = car.id;
  selectButton.textContent = selected ? "Выбрана в гараже" : "Выбрать машину";
  selectButton.disabled = selected || locked;
  selectButton.hidden = locked;
  const dialog = document.getElementById("carDetailDialog");
  if (!dialog.open) dialog.showModal();
}

function playGameTone(type = "tick") {
  unlockTimerSound();
  if (!timerAudioContext) return;
  const oscillator = timerAudioContext.createOscillator();
  const gain = timerAudioContext.createGain();
  const map = { tick: [760, .035, .07], start: [360, .07, .22], win: [920, .1, .42], error: [180, .08, .28] };
  const [frequency, volume, duration] = map[type] || map.tick;
  oscillator.type = type === "error" ? "square" : "sine";
  oscillator.frequency.setValueAtTime(frequency, timerAudioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(type === "win" ? frequency * 1.45 : frequency * .9, timerAudioContext.currentTime + duration);
  gain.gain.setValueAtTime(volume, timerAudioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(.001, timerAudioContext.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(timerAudioContext.destination);
  oscillator.start();
  oscillator.stop(timerAudioContext.currentTime + duration);
}

function playReelClick() {
  unlockTimerSound();
  if (!timerAudioContext) return;
  const now = timerAudioContext.currentTime;
  [
    { type: "square", frequency: 1280, volume: .095, duration: .045 },
    { type: "triangle", frequency: 430, volume: .085, duration: .075 },
    { type: "sine", frequency: 1920, volume: .035, duration: .12 }
  ].forEach(layer => {
    const oscillator = timerAudioContext.createOscillator();
    const gain = timerAudioContext.createGain();
    oscillator.type = layer.type;
    oscillator.frequency.setValueAtTime(layer.frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(layer.frequency * .58, now + layer.duration);
    gain.gain.setValueAtTime(layer.volume, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + layer.duration);
    oscillator.connect(gain);
    gain.connect(timerAudioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + layer.duration + .01);
  });
}

function playRareRewardSound(rarity) {
  unlockTimerSound();
  if (!timerAudioContext) return;
  const rank = RARITIES[rarity]?.rank || 1;
  if (rank < RARITIES.legendary.rank) return playGameTone("win");
  const now = timerAudioContext.currentTime;
  const notes = rank >= RARITIES.mythic.rank
    ? [392, 523.25, 659.25, 783.99, 1046.5]
    : [392, 493.88, 587.33, 783.99];
  notes.forEach((frequency, index) => {
    const delay = index * .115;
    [
      { type: "sine", frequency, volume: .115, duration: .72 },
      { type: "triangle", frequency: frequency * 2, volume: .045, duration: .48 }
    ].forEach(layer => {
      const oscillator = timerAudioContext.createOscillator();
      const gain = timerAudioContext.createGain();
      oscillator.type = layer.type;
      oscillator.frequency.setValueAtTime(layer.frequency, now + delay);
      oscillator.frequency.exponentialRampToValueAtTime(layer.frequency * 1.03, now + delay + layer.duration);
      gain.gain.setValueAtTime(.001, now + delay);
      gain.gain.exponentialRampToValueAtTime(layer.volume, now + delay + .035);
      gain.gain.exponentialRampToValueAtTime(.001, now + delay + layer.duration);
      oscillator.connect(gain);
      gain.connect(timerAudioContext.destination);
      oscillator.start(now + delay);
      oscillator.stop(now + delay + layer.duration + .02);
    });
  });
  if (rank >= RARITIES.mythic.rank) {
    [0, .16, .32].forEach(delay => {
      const oscillator = timerAudioContext.createOscillator();
      const gain = timerAudioContext.createGain();
      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(118, now + delay);
      oscillator.frequency.exponentialRampToValueAtTime(54, now + delay + .18);
      gain.gain.setValueAtTime(.001, now + delay);
      gain.gain.exponentialRampToValueAtTime(.055, now + delay + .018);
      gain.gain.exponentialRampToValueAtTime(.001, now + delay + .2);
      oscillator.connect(gain);
      gain.connect(timerAudioContext.destination);
      oscillator.start(now + delay);
      oscillator.stop(now + delay + .21);
    });
  }
}

function scheduleReelClicks(duration = 3900) {
  let elapsed = 0;
  let timeout = null;
  const click = () => {
    playReelClick();
    const progress = Math.min(elapsed / duration, 1);
    const interval = 72 + Math.pow(progress, 2.1) * 245;
    elapsed += interval;
    if (elapsed < duration - 90) timeout = setTimeout(click, interval);
  };
  click();
  return () => timeout && clearTimeout(timeout);
}

function showRewardDialog(car, duplicate, salvageValue) {
  const rarity = rarityOf(car);
  const reveal = document.getElementById("rewardReveal");
  reveal.style.setProperty("--rarity-color", rarity.color);
  reveal.dataset.rarity = car.rarity;
  document.getElementById("rewardCarVisual").innerHTML = carVisual(car, "large");
  const rarityNode = document.getElementById("rewardRarity");
  rarityNode.textContent = rarity.name;
  rarityNode.style.setProperty("--rarity-color", rarity.color);
  document.getElementById("rewardCarName").textContent = car.name;
  document.getElementById("rewardCarDescription").textContent = car.description;
  document.getElementById("rewardDuplicate").textContent = duplicate ? `Дубликат: компенсация +$${salvageValue}` : "Новая машина добавлена в гараж";
  document.getElementById("rewardDialog").showModal();
  playRareRewardSound(car.rarity);
}

async function startSpin() {
  if (shopSpinning) return;
  if (walletBalance() < STANDARD_SPIN_COST) {
    const status = document.getElementById("spinStatus");
    status.textContent = "Недостаточно долларов. Закрой несколько задач или привычек.";
    status.classList.add("error");
    playGameTone("error");
    return;
  }
  const winner = rollCar();
  const sequence = Array.from({ length: 24 }, () => CARS[Math.floor(Math.random() * CARS.length)]);
  const winnerIndex = 20;
  sequence[winnerIndex] = winner;
  state.shop.spent += STANDARD_SPIN_COST;
  shopSpinning = true;
  saveState();
  renderShop();
  const reel = document.getElementById("carReel");
  reel.style.transition = "none";
  reel.style.transform = "translateX(0)";
  reel.innerHTML = sequence.map(renderReelCard).join("");
  document.getElementById("spinStatus").textContent = "Рулетка запущена...";
  document.getElementById("spinStatus").classList.remove("error");
  playGameTone("start");
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  reel.style.transition = "transform 3.9s cubic-bezier(.12,.72,.12,1)";
  reel.style.transform = `translateX(calc(50% - ${winnerIndex * 152 + 76}px))`;
  const stopReelClicks = scheduleReelClicks();
  await new Promise(resolve => setTimeout(resolve, 3950));
  stopReelClicks();
  const owned = state.shop.ownedCars[winner.id];
  const duplicate = Boolean(owned);
  const duplicateReward = DUPLICATE_COMPENSATION;
  if (owned) owned.count += 1;
  else state.shop.ownedCars[winner.id] = { count: 1, firstWonAt: new Date().toISOString() };
  if (!state.shop.selectedCarId) state.shop.selectedCarId = winner.id;
  if (duplicate) state.shop.salvage += duplicateReward;
  state.shop.spinCount += 1;
  state.shop.lastReward = { carId: winner.id, duplicate, wonAt: new Date().toISOString() };
  updatePity(winner);
  shopSpinning = false;
  saveState();
  renderShop();
  renderGarage();
  document.getElementById("spinStatus").textContent = duplicate ? `Дубликат превращён в +$${duplicateReward}` : "Машина отправлена в твой гараж.";
  showRewardDialog(winner, duplicate, duplicateReward);
}

function rewardSnapshot() {
  return {
    total: allXp(),
    today: dayXp(dateKey()),
    streakBonus: streakBonusXpTotal()
  };
}

function animateCounter(id, from, to) {
  const node = document.getElementById(id);
  if (!node || from === to) return;
  const start = performance.now();
  const duration = 520;
  node.classList.remove("xp-counter-pop");
  void node.offsetWidth;
  node.classList.add("xp-counter-pop");
  const tick = now => {
    const ratio = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - ratio, 3);
    node.textContent = `$${Math.round(from + (to - from) * eased)}`;
    if (ratio < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function showXpFloat(rect, xp) {
  if (!rect || xp <= 0) return;
  const node = document.createElement("div");
  node.className = "xp-float";
  node.textContent = `+$${xp}`;
  node.style.left = `${rect.left + rect.width / 2}px`;
  node.style.top = `${rect.top + rect.height / 2}px`;
  document.body.appendChild(node);
  node.addEventListener("animationend", () => node.remove(), { once: true });
}

function playBankDepositSound() {
  unlockTimerSound();
  if (!timerAudioContext) return;
  const now = timerAudioContext.currentTime;
  [
    { delay: 0, frequency: 820, volume: .075 },
    { delay: .105, frequency: 1040, volume: .068 },
    { delay: .21, frequency: 1320, volume: .06 }
  ].forEach(note => {
    [
      { type: "sine", frequency: note.frequency, volume: note.volume, duration: .48 },
      { type: "triangle", frequency: note.frequency * 2.02, volume: note.volume * .16, duration: .28 }
    ].forEach(layer => {
      const oscillator = timerAudioContext.createOscillator();
      const gain = timerAudioContext.createGain();
      oscillator.type = layer.type;
      oscillator.frequency.setValueAtTime(layer.frequency, now + note.delay);
      oscillator.frequency.exponentialRampToValueAtTime(layer.frequency * .9, now + note.delay + layer.duration);
      gain.gain.setValueAtTime(.001, now + note.delay);
      gain.gain.exponentialRampToValueAtTime(layer.volume, now + note.delay + .025);
      gain.gain.exponentialRampToValueAtTime(.001, now + note.delay + layer.duration);
      oscillator.connect(gain);
      gain.connect(timerAudioContext.destination);
      oscillator.start(now + note.delay);
      oscillator.stop(now + note.delay + layer.duration + .02);
    });
  });
}

function playSubtaskCompleteSound() {
  subtaskCompleteSound.currentTime = 0;
  subtaskCompleteSound.play().catch(() => {});
}

function playTaskCompleteSound() {
  taskCompleteSound.currentTime = 0;
  taskCompleteSound.play().catch(() => {});
}

function playHabitCompleteSound() {
  habitCompleteSound.currentTime = 0;
  habitCompleteSound.play().catch(() => {});
}

function showStreakToast(xp) {
  if (xp <= 0) return;
  document.querySelector(".reward-toast")?.remove();
  const milestone = streakAwardEvents().at(-1);
  const node = document.createElement("div");
  node.className = "reward-toast";
  node.innerHTML = `
    <div class="reward-toast-mark">★</div>
    <div>
      <strong>Бонус серии: +$${xp}</strong>
      <span>${milestone ? milestone.title : "Хороший ритм продолжается"}</span>
    </div>
  `;
  document.body.appendChild(node);
  node.addEventListener("animationend", () => node.remove(), { once: true });
}

function flashReward(selector) {
  const node = document.querySelector(selector)?.closest(".habit, .task-row");
  if (!node) return;
  node.classList.remove("reward-flash");
  void node.offsetWidth;
  node.classList.add("reward-flash");
  setTimeout(() => node.classList.remove("reward-flash"), 820);
}

function rewardFeedback({ before, rect, xp, selector, sound = "bank" }) {
  const after = rewardSnapshot();
  showXpFloat(rect, xp);
  if (sound === "subtask") playSubtaskCompleteSound();
  else if (sound === "task") playTaskCompleteSound();
  else if (sound === "habit") playHabitCompleteSound();
  else playBankDepositSound();
  if (selector) flashReward(selector);
  animateCounter("xpValue", before.total, after.total);
  animateCounter("progressTotalXp", before.total, after.total);
  animateCounter("todayXp", before.today, after.today);
  animateCounter("progressTodayXp", before.today, after.today);
  showStreakToast(after.streakBonus - before.streakBonus);
}

function streak() {
  let value = 0;
  for (let offset = 0; offset > -500; offset -= 1) {
    const key = dateKey(shiftDate(offset));
    if (!state.days[key] || !qualifiesForStreak(key)) break;
    value += 1;
  }
  return value;
}

function lastSevenDays() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = shiftDate(index - 6);
    return { date, percent: dayPercent(dateKey(date)) };
  });
}

function formatPrettyDate(key) {
  const date = parseKey(key);
  if (key === dateKey()) return "Сегодня";
  if (key === dateKey(shiftDate(1))) return "Завтра";
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

function formatHabitDate(key) {
  const date = parseKey(key);
  const pretty = `${date.getDate()} ${MONTHS[date.getMonth()]}`;
  if (key === dateKey()) return `Сегодня · ${pretty}`;
  if (key === dateKey(shiftDate(-1))) return `Вчера · ${pretty}`;
  return `${WEEKDAYS[date.getDay()]} · ${pretty}`;
}

function sortedTasks(tasks) {
  return [...tasks].sort((a, b) => Number(a.done) - Number(b.done)
    || a.date.localeCompare(b.date)
    || priorityOf(a).rank - priorityOf(b).rank
    || a.title.localeCompare(b.title));
}

function taskMeta(task, showDate = true) {
  const project = projectById(task.projectId);
  const parts = [];
  if (showDate) parts.push(formatPrettyDate(task.date));
  parts.push(project ? project.name : "Без проекта");
  parts.push(`${difficultyOf(task).name} · +$${taskXp(task)}`);
  if (!task.done && task.date < dateKey()) parts.push("просрочено");
  return parts.join(" · ");
}

function taskRows(tasks, options = {}) {
  if (!tasks.length) return `<div class="empty-state">${options.empty || "Задач пока нет. Добавь один конкретный следующий шаг."}</div>`;
  return sortedTasks(tasks).map(task => {
    const subtasks = allSubtasks(task.subtasks);
    const doneSubtasks = subtasks.filter(subtask => subtask.done).length;
    return `
    <article class="task-row ${task.done ? "done" : ""}">
      <i class="priority-dot" style="--priority-color:${priorityOf(task).color};--priority-soft:${priorityOf(task).soft}" title="${priorityOf(task).name} приоритет"></i>
      <input class="task-check" data-task-complete="${task.id}" type="checkbox" ${task.done ? "checked" : ""}>
      <div class="task-copy">
        <strong>${escapeHtml(task.title)}</strong>
        <span>${taskMeta(task, options.showDate !== false)}${subtasks.length ? ` · ${doneSubtasks}/${subtasks.length} шагов` : ""}</span>
      </div>
      <button class="mini-icon-button" data-task-open="${task.id}" title="Открыть подзадачи" type="button">≡</button>
      <button class="mini-icon-button" data-task-edit="${task.id}" title="Изменить задачу" type="button">✎</button>
      <button class="mini-icon-button danger" data-task-delete="${task.id}" title="Удалить задачу" type="button">×</button>
    </article>
  `;
  }).join("");
}

function escapeHtml(value) {
  const node = document.createElement("div");
  node.textContent = value;
  return node.innerHTML;
}

function renderHeader() {
  const now = new Date();
  document.getElementById("currentDate").textContent = `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}, ${WEEKDAYS[now.getDay()]}`;
  document.getElementById("streakValue").textContent = `${streak()} дней`;
}

function renderXp() {
  const total = allXp();
  const level = Math.floor(total / 100) + 1;
  const current = total % 100;
  document.getElementById("levelValue").textContent = level;
  document.getElementById("xpValue").textContent = `$${total}`;
  document.getElementById("levelProgress").style.width = `${current}%`;
  document.getElementById("levelCaption").textContent = `До следующего уровня: $${100 - current}`;
}

function renderStats() {
  const percent = dayPercent(dateKey());
  const week = lastSevenDays();
  const weekPercent = Math.round(week.reduce((sum, entry) => sum + entry.percent, 0) / week.length);
  document.getElementById("todayPercent").textContent = `${percent}%`;
  document.getElementById("todayProgress").style.width = `${percent}%`;
  document.getElementById("todayXp").textContent = `$${dayXp(dateKey())}`;
  document.getElementById("weekPercent").textContent = `${weekPercent}%`;
  document.getElementById("xpHint").textContent = percent === 100 ? "Полный день закрыт" : "Задачи приносят от $15 до $50";
}

function renderHabits() {
  const day = selectedHabitDay();
  document.getElementById("habitDateLabel").textContent = formatHabitDate(selectedHabitDayKey);
  document.getElementById("habitPrevDay").disabled = selectedHabitDayKey <= dateKey(shiftDate(-6));
  document.getElementById("habitNextDay").disabled = selectedHabitDayKey >= dateKey();
  document.getElementById("habitCounter").textContent = `${doneHabitCount(day)} / ${habits().length}`;
  document.getElementById("habitList").innerHTML = habits().map(habit => `
    <label class="habit ${day.habits[habit.id] ? "done" : ""}">
      <input class="habit-check" type="checkbox" data-habit="${habit.id}" ${day.habits[habit.id] ? "checked" : ""}>
      <span class="habit-copy">
        <strong>${escapeHtml(habit.name)}</strong>
        <span>${escapeHtml(habit.caption)}</span>
      </span>
      <span class="xp-tag">+$${habit.xp}</span>
    </label>
  `).join("");
}

function projectCard(project) {
  const tasks = tasksForProject(project.id);
  const activeCount = tasks.filter(task => !task.done).length;
  return `
    <article class="project" style="--project-color:${project.color};--project-soft:${project.soft}">
      <button class="project-open" data-open-project="${project.id}" type="button">
        <div class="project-icon">${project.icon}</div>
        <div>
          <strong>${project.name}</strong>
          <span>${project.caption}</span>
          <span>${activeCount} активных задач</span>
        </div>
      </button>
    </article>
  `;
}

function goalProgress(goal) {
  return goal.done ? 100 : clampProgress(goal.progress);
}

function goalTargetText(goal) {
  return goal.target ? formatPrettyDate(goal.target) : "Срок не задан";
}

function renderGoalCard(goal) {
  const progress = goalProgress(goal);
  return `
    <article class="goal-card ${goal.done ? "done" : ""}">
      <div class="goal-card-top">
        <label class="goal-checkline">
          <input data-goal-done="${goal.id}" type="checkbox" ${goal.done ? "checked" : ""}>
          <span>
            <strong>${escapeHtml(goal.title)}</strong>
            <small>${escapeHtml(goal.why || "Добавь причину, чтобы цель сильнее цепляла.")}</small>
          </span>
        </label>
        <div class="goal-actions">
          <button class="mini-icon-button" data-goal-edit="${goal.id}" type="button" title="Изменить цель">✎</button>
          <button class="mini-icon-button danger" data-goal-delete="${goal.id}" type="button" title="Удалить цель">×</button>
        </div>
      </div>
      <div class="goal-meta">
        <span>${goalTargetText(goal)}</span>
        <strong>${progress}%</strong>
      </div>
      <input class="goal-range" data-goal-progress="${goal.id}" type="range" min="0" max="100" step="5" value="${progress}" ${goal.done ? "disabled" : ""}>
      <div class="progress-track"><div class="progress-fill green" style="width:${progress}%"></div></div>
    </article>
  `;
}

function renderDreamCard(dream) {
  return `
    <article class="dream-card">
      <div class="dream-symbol">${escapeHtml(dream.symbol || "★")}</div>
      <div class="dream-copy">
        <strong>${escapeHtml(dream.title)}</strong>
        <p>${escapeHtml(dream.why || "Опиши, почему эта мечта для тебя важна.")}</p>
        <span>Первый шаг: ${escapeHtml(dream.firstStep || "сформулировать ближайшее действие")}</span>
      </div>
      <div class="goal-actions">
        <button class="mini-icon-button" data-dream-edit="${dream.id}" type="button" title="Изменить мечту">✎</button>
        <button class="mini-icon-button danger" data-dream-delete="${dream.id}" type="button" title="Удалить мечту">×</button>
      </div>
    </article>
  `;
}

function renderGoals() {
  const goals = state.goalItems || [];
  const dreams = state.dreamItems || [];
  const activeGoals = goals.filter(goal => !goal.done);
  const average = goals.length ? Math.round(goals.reduce((sum, goal) => sum + goalProgress(goal), 0) / goals.length) : 0;
  const northAnswer = state.goalPrompts?.find(prompt => prompt.id === "identity")?.answer?.trim();
  const strongestGoal = activeGoals.sort((a, b) => goalProgress(b) - goalProgress(a))[0] || goals[0];

  document.getElementById("activeGoalCount").textContent = activeGoals.length;
  document.getElementById("goalAverageProgress").textContent = `${average}%`;
  document.getElementById("goalAverageBar").style.width = `${average}%`;
  document.getElementById("dreamCount").textContent = dreams.length;
  document.getElementById("northStarTitle").textContent = northAnswer || strongestGoal?.title || "Сформулируй главный ориентир";
  document.getElementById("northStarCaption").textContent = strongestGoal
    ? `Ближайшая цель: ${strongestGoal.title}`
    : "Добавь первую цель, чтобы видеть, куда идти.";

  document.getElementById("goalPromptList").innerHTML = (state.goalPrompts || []).map(prompt => `
    <label class="prompt-card">
      <span>${escapeHtml(prompt.question)}</span>
      <textarea data-goal-prompt="${prompt.id}" rows="3" placeholder="Напиши честный ответ">${escapeHtml(prompt.answer || "")}</textarea>
    </label>
  `).join("");

  document.getElementById("goalList").innerHTML = goals.length
    ? goals.map(renderGoalCard).join("")
    : '<div class="empty-state">Добавь первую цель: конкретную, измеримую и важную для твоей свободы.</div>';

  document.getElementById("dreamList").innerHTML = dreams.length
    ? dreams.map(renderDreamCard).join("")
    : '<div class="empty-state">Добавь мечту, которая будет напоминать, зачем ты строишь систему.</div>';
}

function renderProjects() {
  const cards = projects().map(projectCard).join("");
  document.getElementById("projectList").innerHTML = cards;
  document.getElementById("todayProjectList").innerHTML = cards;
}

function renderTodayTasks() {
  document.getElementById("todayTaskList").innerHTML = taskRows(tasksForDate(dateKey()), {
    showDate: false,
    empty: "На сегодня задач пока нет. Добавь один шаг, который точно сделаешь."
  });
}

function tasksForFilter() {
  if (taskFilter === "today") return state.tasks.filter(task => task.date === dateKey());
  if (taskFilter === "upcoming") return state.tasks.filter(task => !task.done && task.date >= dateKey());
  return state.tasks;
}

function renderTaskWorkspace() {
  const tasks = sortedTasks(tasksForFilter());
  document.querySelectorAll("[data-task-filter]").forEach(button => button.classList.toggle("active", button.dataset.taskFilter === taskFilter));
  if (!tasks.length) {
    document.getElementById("taskWorkspaceList").innerHTML = '<div class="empty-state">В этом разделе пока пусто. Создай первую задачу и назначь ей дату.</div>';
    return;
  }
  const groups = tasks.reduce((result, task) => {
    if (!result[task.date]) result[task.date] = [];
    result[task.date].push(task);
    return result;
  }, {});
  document.getElementById("taskWorkspaceList").innerHTML = Object.entries(groups).map(([key, group]) => `
    <section class="task-group">
      <h3 class="task-group-title">${formatPrettyDate(key)}</h3>
      ${taskRows(group)}
    </section>
  `).join("");
}

function renderWeek() {
  document.getElementById("weekChart").innerHTML = lastSevenDays().map(entry => `
    <div class="week-column ${dateKey(entry.date) === dateKey() ? "today" : ""}">
      <div class="week-bar-wrap"><div class="week-bar" style="height:${Math.max(entry.percent, 3)}%"></div></div>
      <strong>${entry.percent}%</strong>
      <span>${WEEKDAYS[entry.date.getDay()]}</span>
    </div>
  `).join("");
}

function xpSeries() {
  const events = xpEvents();
  const dates = Array.from({ length: progressPeriod }, (_, index) => shiftDate(index - progressPeriod + 1));
  const firstKey = dateKey(dates[0]);
  let running = progressMode === "cumulative"
    ? events.filter(event => event.date < firstKey).reduce((sum, event) => sum + event.xp, 0)
    : 0;
  return dates.map(date => {
    const key = dateKey(date);
    const daily = events.filter(event => event.date === key).reduce((sum, event) => sum + event.xp, 0);
    if (progressMode === "cumulative") running += daily;
    return { date, key, value: progressMode === "cumulative" ? running : daily };
  });
}

function xpChartSvg(series) {
  const width = 860;
  const height = 284;
  const left = 42;
  const right = 18;
  const top = 20;
  const bottom = 38;
  const max = Math.max(...series.map(point => point.value), 10);
  const x = index => left + index * (width - left - right) / Math.max(series.length - 1, 1);
  const y = value => top + (max - value) * (height - top - bottom) / max;
  const coords = series.map((point, index) => ({ ...point, x: x(index), y: y(point.value) }));
  const line = coords.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
  const area = `${line} L ${coords.at(-1).x} ${height - bottom} L ${coords[0].x} ${height - bottom} Z`;
  const step = progressPeriod <= 7 ? 1 : progressPeriod <= 30 ? 5 : 10;
  const labels = coords.filter((point, index) => index % step === 0 || index === coords.length - 1);
  const grid = [0, .25, .5, .75, 1].map(ratio => {
    const lineY = top + ratio * (height - top - bottom);
    const value = Math.round(max * (1 - ratio));
    return `<line x1="${left}" y1="${lineY}" x2="${width - right}" y2="${lineY}" stroke="#e3e6eb"/><text x="${left - 8}" y="${lineY + 4}" text-anchor="end" font-size="11" fill="#7a8390">${value}</text>`;
  }).join("");
  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="График долларов">
    ${grid}
    <path d="${area}" fill="rgba(65,105,225,.10)"></path>
    <path d="${line}" fill="none" stroke="${progressMode === "cumulative" ? "#4169e1" : "#2e9b68"}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
    ${coords.map(point => `<circle cx="${point.x}" cy="${point.y}" r="3" fill="${progressMode === "cumulative" ? "#4169e1" : "#2e9b68"}"></circle>`).join("")}
    ${labels.map(point => `<text x="${point.x}" y="${height - 13}" text-anchor="middle" font-size="11" fill="#7a8390">${point.date.getDate()} ${MONTHS[point.date.getMonth()].slice(0, 3)}</text>`).join("")}
  </svg>`;
}

function renderProgress() {
  const events = xpEvents();
  const awards = streakAwardEvents();
  const currentStreak = streak();
  const nextMilestone = STREAK_MILESTONES.find(milestone => milestone.days > currentStreak);
  document.getElementById("progressTotalXp").textContent = `$${allXp()}`;
  document.getElementById("progressTodayXp").textContent = `$${dayXp(dateKey())}`;
  document.getElementById("progressStreak").textContent = `${currentStreak} дней`;
  document.getElementById("streakBonusXp").textContent = `$${awards.reduce((sum, award) => sum + award.xp, 0)}`;
  document.getElementById("nextStreakBonus").textContent = nextMilestone
    ? `Следующий бонус: ${nextMilestone.days} дней, +$${nextMilestone.xp}`
    : "Все текущие бонусы серии открыты";
  document.getElementById("xpChart").innerHTML = xpChartSvg(xpSeries());
  document.getElementById("milestoneList").innerHTML = STREAK_MILESTONES.map(milestone => `
    <article class="milestone ${currentStreak >= milestone.days ? "reached" : ""}">
      <div class="milestone-mark">${milestone.days}</div>
      <div>
        <strong>${milestone.days} дней подряд</strong>
        <span>${currentStreak >= milestone.days ? "Точка достигнута в текущей серии" : "Для дня серии достаточно любых 5 привычек"}</span>
      </div>
      <div class="milestone-xp">+$${milestone.xp}</div>
    </article>
  `).join("");
  document.getElementById("eventHistory").innerHTML = events.length ? events.slice(0, 40).map(event => `
    <article class="event-row">
      <span class="event-date">${formatPrettyDate(event.date)}</span>
      <strong class="event-xp">+$${event.xp}</strong>
      <span class="event-title">${escapeHtml(event.title)}</span>
    </article>
  `).join("") : '<div class="empty-state">Первые события появятся после выполнения привычки или задачи.</div>';
}

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  document.getElementById("calendarTitle").textContent = `${MONTHS[month][0].toUpperCase()}${MONTHS[month].slice(1)} ${year}`;
  const first = new Date(year, month, 1);
  const mondayOffset = (first.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - mondayOffset);
  const cells = [];
  for (let index = 0; index < 42; index += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = dateKey(date);
    const dayTasks = tasksForDate(key);
    const percent = dayPercent(key);
    const level = percent === 100 ? 3 : percent >= 70 ? 2 : percent > 0 ? 1 : 0;
    cells.push(`
      <button class="calendar-cell level-${level} ${date.getMonth() !== month ? "outside" : ""} ${key === dateKey() ? "today" : ""}" data-calendar-day="${key}" type="button">
        <span>${date.getDate()}</span>
        <strong>${state.days[key] || dayTasks.length ? `${percent}%` : "—"}</strong>
        ${dayTasks.length ? `<small class="calendar-task-count">${taskDoneCount(dayTasks)}/${dayTasks.length} задач</small>` : ""}
        ${dayTasks.slice(0, 2).map(task => `<small class="calendar-task-preview"><i class="calendar-priority-dot" style="--priority-color:${priorityOf(task).color}"></i>${task.done ? "✓" : ""} ${escapeHtml(task.title)}</small>`).join("")}
      </button>
    `);
  }
  document.getElementById("calendarGrid").innerHTML = cells.join("");
}

function renderTimer() {
  const minutes = Math.floor(timer.left / 60);
  const seconds = timer.left % 60;
  document.getElementById("timerDisplay").textContent = `${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("timerToggle").textContent = timer.running ? "Пауза" : "Начать";
  document.getElementById("timerReward").textContent = `+$${Math.round(timer.total / (25 * 60) * FOCUS_REWARD_PER_25_MINUTES)} за завершение`;
}

function unlockTimerSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  if (!timerAudioContext) timerAudioContext = new AudioContext();
  if (timerAudioContext.state === "suspended") timerAudioContext.resume();
}

function playTimerSound() {
  unlockTimerSound();
  if (!timerAudioContext) return;
  [0, .22, .44].forEach((delay, index) => {
    const oscillator = timerAudioContext.createOscillator();
    const gain = timerAudioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = index === 1 ? 740 : 880;
    gain.gain.setValueAtTime(0, timerAudioContext.currentTime + delay);
    gain.gain.linearRampToValueAtTime(.18, timerAudioContext.currentTime + delay + .025);
    gain.gain.exponentialRampToValueAtTime(.001, timerAudioContext.currentTime + delay + .18);
    oscillator.connect(gain);
    gain.connect(timerAudioContext.destination);
    oscillator.start(timerAudioContext.currentTime + delay);
    oscillator.stop(timerAudioContext.currentTime + delay + .2);
  });
}

function requestTimerNotifications() {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().catch(() => {});
  }
}

function showTimerNotification(reward) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Фокус-сессия завершена", { body: `Хорошая работа. +$${reward}`, tag: "discipline-os-timer" });
  }
}

function completeTimer() {
  if (timer.interval) clearInterval(timer.interval);
  const before = rewardSnapshot();
  const rect = document.getElementById("timerDisplay").getBoundingClientRect();
  timer.running = false;
  timer.left = timer.total;
  timer.endAt = null;
  const previousFocusReward = Number(today().focusReward ?? Number(today().pomodoros || 0) * FOCUS_REWARD_PER_25_MINUTES);
  const reward = Math.round(timer.total / (25 * 60) * FOCUS_REWARD_PER_25_MINUTES);
  today().pomodoros = Number(today().pomodoros || 0) + 1;
  today().focusReward = previousFocusReward + reward;
  saveState();
  rerender();
  rewardFeedback({ before, rect, xp: reward });
  playTimerSound();
  showTimerNotification(reward);
}

function syncTimer() {
  if (!timer.running || !timer.endAt) return;
  timer.left = Math.max(0, Math.ceil((timer.endAt - Date.now()) / 1000));
  if (timer.left <= 0) completeTimer();
  else renderTimer();
}

function renderOpenDialogs() {
  if (document.getElementById("dayDialog").open) renderDayDialog();
  if (document.getElementById("projectDialog").open) renderProjectDialog();
  if (document.getElementById("subtaskDialog").open) renderSubtaskDialog();
  if (document.getElementById("goalDialog").open) renderGoals();
  if (document.getElementById("dreamDialog").open) renderGoals();
}

function rerender() {
  if (carryOverUnfinishedTasks()) saveState();
  renderHeader();
  renderXp();
  renderStats();
  renderHabits();
  renderProjects();
  renderGoals();
  renderTodayTasks();
  renderTaskWorkspace();
  renderWeek();
  renderProgress();
  renderCalendar();
  renderTimer();
  renderShop();
  renderGarage();
  renderOpenDialogs();
}

function switchView(view) {
  document.querySelectorAll(".view").forEach(node => node.classList.remove("active"));
  document.querySelectorAll(".nav-button").forEach(node => node.classList.toggle("active", node.dataset.view === view));
  document.getElementById(`${view}View`).classList.add("active");
  const titles = { today: "Сегодня", tasks: "Задачи", calendar: "Календарь", projects: "Проекты", progress: "Прогресс", shop: "Магазин", garage: "Гараж" };
  titles.goals = "Цели и мечты";
  document.getElementById("pageTitle").textContent = titles[view];
}

function resetTimer(minutes = timer.total / 60) {
  if (timer.interval) clearInterval(timer.interval);
  timer = { total: Number(minutes) * 60, left: Number(minutes) * 60, running: false, interval: null, endAt: null };
  renderTimer();
}

function projectOptions() {
  return `
    <option value="">Без проекта</option>
    ${projects().map(project => `<option value="${project.id}">${project.name}</option>`).join("")}
  `;
}

function fillProjectSelect() {
  document.getElementById("taskProjectInput").innerHTML = projectOptions();
  document.getElementById("quickTaskProject").innerHTML = projectOptions();
}

function setDifficultyRange(inputId, difficultyId = "medium") {
  const input = document.getElementById(inputId);
  const difficulty = DIFFICULTIES[difficultyId] || DIFFICULTIES.medium;
  input.value = difficulty.range;
  updateDifficultyLabel(input);
}

function updateDifficultyLabel(input) {
  const difficulty = DIFFICULTIES[difficultyIdFromRange(input.value)];
  const label = document.getElementById(input.id === "quickTaskDifficulty" ? "quickTaskDifficultyLabel" : "taskDifficultyLabel");
  label.textContent = `${difficulty.name} · $${difficulty.xp}`;
}

function openTaskDialog({ date = dateKey(), projectId = "", task = null } = {}) {
  fillProjectSelect();
  document.getElementById("taskDialogTitle").textContent = task ? "Изменить задачу" : "Новая задача";
  document.getElementById("taskIdInput").value = task?.id || "";
  document.getElementById("taskTitleInput").value = task?.title || "";
  document.getElementById("taskDateInput").value = task?.date || date;
  document.getElementById("taskProjectInput").value = task?.projectId || projectId || "";
  document.getElementById("taskPriorityInput").value = task?.priority || "medium";
  setDifficultyRange("taskDifficultyInput", task?.difficulty || "medium");
  document.getElementById("taskDialog").showModal();
  setTimeout(() => document.getElementById("taskTitleInput").focus(), 0);
}

function renderDayDialog() {
  document.getElementById("dayDialogTitle").textContent = formatPrettyDate(selectedDayKey);
  document.getElementById("dayDialogTasks").innerHTML = taskRows(tasksForDate(selectedDayKey), {
    showDate: false,
    empty: "На этот день задач пока нет."
  });
}

function openDayDialog(key) {
  selectedDayKey = key;
  renderDayDialog();
  document.getElementById("dayDialog").showModal();
}

function renderProjectDialog() {
  const project = projectById(selectedProjectId);
  if (!project) return;
  document.getElementById("projectDialogTitle").textContent = project.name;
  document.getElementById("projectDialogTasks").innerHTML = taskRows(tasksForProject(project.id), {
    empty: "В этом проекте пока нет задач. Добавь первый конкретный шаг."
  });
}

function openProjectDialog(id) {
  selectedProjectId = id;
  renderProjectDialog();
  document.getElementById("projectDialog").showModal();
}

function subtaskRows(items, depth = 0) {
  if (!items.length && depth === 0) return '<div class="empty-state">Подзадач пока нет. Добавь первый маленький шаг.</div>';
  return items.map(item => `
    <div class="subtask-branch">
      <article class="subtask-row ${item.done ? "done" : ""}" style="--subtask-depth:${depth}">
        <input class="task-check" data-subtask-complete="${item.id}" type="checkbox" ${item.done ? "checked" : ""}>
        <span class="subtask-title">${escapeHtml(item.title)}</span>
        <span class="subtask-xp">+$1</span>
        <button class="mini-icon-button" data-subtask-add-child="${item.id}" title="Добавить вложенный шаг" type="button">+</button>
        <button class="mini-icon-button danger" data-subtask-delete="${item.id}" title="Удалить подзадачу" type="button">×</button>
      </article>
      ${subtaskRows(item.subtasks, depth + 1)}
    </div>
  `).join("");
}

function renderSubtaskDialog() {
  const task = state.tasks.find(item => item.id === selectedTaskId);
  if (!task) return document.getElementById("subtaskDialog").close();
  const subtasks = allSubtasks(task.subtasks);
  document.getElementById("subtaskDialogTitle").textContent = task.title;
  document.getElementById("subtaskDialogMeta").textContent = `${subtasks.filter(item => item.done).length} из ${subtasks.length} шагов выполнено`;
  document.getElementById("subtaskList").innerHTML = subtaskRows(task.subtasks);
}

function openSubtaskDialog(id) {
  selectedTaskId = id;
  renderSubtaskDialog();
  document.getElementById("subtaskDialog").showModal();
  setTimeout(() => document.getElementById("subtaskTitleInput").focus(), 0);
}

function addSubtask(title, parentId = null) {
  const task = state.tasks.find(item => item.id === selectedTaskId);
  if (!task || !title.trim()) return;
  const subtask = { id: `subtask-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, title: title.trim(), done: false, subtasks: [] };
  if (parentId) {
    const parent = findSubtask(task.subtasks, parentId);
    if (!parent) return;
    parent.subtasks.push(subtask);
  } else {
    task.subtasks.push(subtask);
  }
  saveState();
  rerender();
}

function openGoalDialog(goal = null) {
  document.getElementById("goalDialogTitle").textContent = goal ? "Изменить цель" : "Новая цель";
  document.getElementById("goalIdInput").value = goal?.id || "";
  document.getElementById("goalTitleInput").value = goal?.title || "";
  document.getElementById("goalWhyInput").value = goal?.why || "";
  document.getElementById("goalTargetInput").value = goal?.target || "";
  document.getElementById("goalProgressInput").value = goalProgress(goal || { progress: 0, done: false });
  document.getElementById("goalDialog").showModal();
  setTimeout(() => document.getElementById("goalTitleInput").focus(), 0);
}

function openDreamDialog(dream = null) {
  document.getElementById("dreamDialogTitle").textContent = dream ? "Изменить мечту" : "Новая мечта";
  document.getElementById("dreamIdInput").value = dream?.id || "";
  document.getElementById("dreamTitleInput").value = dream?.title || "";
  document.getElementById("dreamWhyInput").value = dream?.why || "";
  document.getElementById("dreamStepInput").value = dream?.firstStep || "";
  document.getElementById("dreamSymbolInput").value = dream?.symbol || "★";
  document.getElementById("dreamDialog").showModal();
  setTimeout(() => document.getElementById("dreamTitleInput").focus(), 0);
}

document.querySelectorAll(".nav-button").forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll("[data-difficulty-range]").forEach(input => input.addEventListener("input", () => updateDifficultyLabel(input)));

document.getElementById("habitList").addEventListener("change", event => {
  if (!event.target.matches("[data-habit]")) return;
  const id = event.target.dataset.habit;
  const checked = event.target.checked;
  const before = rewardSnapshot();
  const rect = event.target.closest(".habit").getBoundingClientRect();
  selectedHabitDay().habits[id] = checked;
  saveState();
  rerender();
  if (checked) rewardFeedback({ before, rect, xp: habitById(id).xp, selector: `[data-habit="${id}"]`, sound: "habit" });
});

document.getElementById("goalPromptList").addEventListener("input", event => {
  if (!event.target.matches("[data-goal-prompt]")) return;
  const prompt = state.goalPrompts.find(item => item.id === event.target.dataset.goalPrompt);
  if (!prompt) return;
  prompt.answer = event.target.value;
  saveState();
  if (prompt.id === "identity") {
    document.getElementById("northStarTitle").textContent = prompt.answer.trim() || "Сформулируй главный ориентир";
  }
});

document.getElementById("habitPrevDay").addEventListener("click", () => {
  if (selectedHabitDayKey <= dateKey(shiftDate(-6))) return;
  const date = parseKey(selectedHabitDayKey);
  date.setDate(date.getDate() - 1);
  selectedHabitDayKey = dateKey(date);
  renderHabits();
});

document.getElementById("habitNextDay").addEventListener("click", () => {
  if (selectedHabitDayKey >= dateKey()) return;
  const date = parseKey(selectedHabitDayKey);
  date.setDate(date.getDate() + 1);
  selectedHabitDayKey = dateKey(date);
  renderHabits();
});

document.body.addEventListener("change", event => {
  if (!event.target.matches("[data-task-complete]")) return;
  const id = event.target.dataset.taskComplete;
  const task = state.tasks.find(item => item.id === id);
  if (!task) return;
  const checked = event.target.checked;
  const before = rewardSnapshot();
  const rect = event.target.closest(".task-row").getBoundingClientRect();
  task.done = checked;
  if (task.done) task.completedAt = new Date().toISOString();
  else delete task.completedAt;
  saveState();
  rerender();
  if (checked) rewardFeedback({ before, rect, xp: taskXp(task), selector: `[data-task-complete="${id}"]`, sound: "task" });
});

document.body.addEventListener("change", event => {
  if (!event.target.matches("[data-subtask-complete]")) return;
  const task = state.tasks.find(item => item.id === selectedTaskId);
  const subtask = task && findSubtask(task.subtasks, event.target.dataset.subtaskComplete);
  if (!subtask) return;
  const checked = event.target.checked;
  const before = rewardSnapshot();
  const rect = event.target.closest(".subtask-row").getBoundingClientRect();
  subtask.done = checked;
  if (checked) subtask.completedAt = new Date().toISOString();
  else delete subtask.completedAt;
  saveState();
  rerender();
  if (checked) rewardFeedback({ before, rect, xp: SUBTASK_XP, sound: "subtask" });
});

document.body.addEventListener("change", event => {
  if (!event.target.matches("[data-goal-done]")) return;
  const goal = state.goalItems.find(item => item.id === event.target.dataset.goalDone);
  if (!goal) return;
  goal.done = event.target.checked;
  if (goal.done) goal.progress = 100;
  saveState();
  renderGoals();
});

document.body.addEventListener("input", event => {
  if (!event.target.matches("[data-goal-progress]")) return;
  const goal = state.goalItems.find(item => item.id === event.target.dataset.goalProgress);
  if (!goal) return;
  goal.progress = clampProgress(event.target.value);
  goal.done = goal.progress >= 100;
  saveState();
  renderGoals();
});

document.body.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add-task-date]");
  if (addButton) openTaskDialog({ date: addButton.dataset.addTaskDate === "today" ? dateKey() : addButton.dataset.addTaskDate });

  const editButton = event.target.closest("[data-task-edit]");
  if (editButton) {
    const task = state.tasks.find(item => item.id === editButton.dataset.taskEdit);
    if (task) openTaskDialog({ task });
  }

  const openTaskButton = event.target.closest("[data-task-open]");
  if (openTaskButton) openSubtaskDialog(openTaskButton.dataset.taskOpen);

  const deleteButton = event.target.closest("[data-task-delete]");
  if (deleteButton) {
    const task = state.tasks.find(item => item.id === deleteButton.dataset.taskDelete);
    if (task && confirm(`Удалить задачу «${task.title}»?`)) {
      state.tasks = state.tasks.filter(item => item.id !== task.id);
      saveState();
      rerender();
    }
  }

  const calendarCell = event.target.closest("[data-calendar-day]");
  if (calendarCell) openDayDialog(calendarCell.dataset.calendarDay);

  const projectButton = event.target.closest("[data-open-project]");
  if (projectButton) openProjectDialog(projectButton.dataset.openProject);

  const addChildButton = event.target.closest("[data-subtask-add-child]");
  if (addChildButton) {
    const title = prompt("Название маленького вложенного шага:");
    if (title) addSubtask(title, addChildButton.dataset.subtaskAddChild);
  }

  const deleteSubtaskButton = event.target.closest("[data-subtask-delete]");
  if (deleteSubtaskButton) {
    const task = state.tasks.find(item => item.id === selectedTaskId);
    const subtask = task && findSubtask(task.subtasks, deleteSubtaskButton.dataset.subtaskDelete);
    if (subtask && confirm(`Удалить подзадачу «${subtask.title}» и её вложенные шаги?`)) {
      task.subtasks = deleteSubtask(task.subtasks, subtask.id);
      saveState();
      rerender();
    }
  }

  const editGoalButton = event.target.closest("[data-goal-edit]");
  if (editGoalButton) {
    const goal = state.goalItems.find(item => item.id === editGoalButton.dataset.goalEdit);
    if (goal) openGoalDialog(goal);
  }

  const deleteGoalButton = event.target.closest("[data-goal-delete]");
  if (deleteGoalButton) {
    const goal = state.goalItems.find(item => item.id === deleteGoalButton.dataset.goalDelete);
    if (goal && confirm(`Удалить цель «${goal.title}»?`)) {
      state.goalItems = state.goalItems.filter(item => item.id !== goal.id);
      saveState();
      renderGoals();
    }
  }

  const editDreamButton = event.target.closest("[data-dream-edit]");
  if (editDreamButton) {
    const dream = state.dreamItems.find(item => item.id === editDreamButton.dataset.dreamEdit);
    if (dream) openDreamDialog(dream);
  }

  const deleteDreamButton = event.target.closest("[data-dream-delete]");
  if (deleteDreamButton) {
    const dream = state.dreamItems.find(item => item.id === deleteDreamButton.dataset.dreamDelete);
    if (dream && confirm(`Удалить мечту «${dream.title}»?`)) {
      state.dreamItems = state.dreamItems.filter(item => item.id !== dream.id);
      saveState();
      renderGoals();
    }
  }
});

document.querySelectorAll("[data-task-filter]").forEach(button => button.addEventListener("click", () => {
  taskFilter = button.dataset.taskFilter;
  renderTaskWorkspace();
}));

document.querySelectorAll("[data-progress-mode]").forEach(button => button.addEventListener("click", () => {
  progressMode = button.dataset.progressMode;
  document.querySelectorAll("[data-progress-mode]").forEach(node => node.classList.toggle("active", node === button));
  renderProgress();
}));

document.querySelectorAll("[data-progress-period]").forEach(button => button.addEventListener("click", () => {
  progressPeriod = Number(button.dataset.progressPeriod);
  document.querySelectorAll("[data-progress-period]").forEach(node => node.classList.toggle("active", node === button));
  renderProgress();
}));

document.getElementById("spinButton").addEventListener("click", startSpin);
document.querySelectorAll("[data-close-reward-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("rewardDialog").close()));
document.querySelectorAll("[data-close-car-detail]").forEach(button => button.addEventListener("click", () => document.getElementById("carDetailDialog").close()));
document.getElementById("carDetailSelectButton").addEventListener("click", event => {
  const carId = event.currentTarget.dataset.selectCar;
  if (!carId) return;
  state.shop.selectedCarId = carId;
  saveState();
  renderGarage();
  openCarDetail(carId);
});
document.querySelectorAll("[data-garage-filter]").forEach(button => button.addEventListener("click", () => {
  garageFilter = button.dataset.garageFilter;
  renderGarage();
}));

document.getElementById("garageGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-select-car]");
  if (button) {
    state.shop.selectedCarId = button.dataset.selectCar;
    saveState();
    renderGarage();
    if (document.getElementById("carDetailDialog").open) openCarDetail(button.dataset.selectCar);
    return;
  }
  const card = event.target.closest("[data-open-car]");
  if (card) openCarDetail(card.dataset.openCar);
});

document.getElementById("quickTaskForm").addEventListener("submit", event => {
  event.preventDefault();
  const titleInput = document.getElementById("quickTaskTitle");
  const title = titleInput.value.trim();
  const date = document.getElementById("quickTaskDate").value;
  const projectId = document.getElementById("quickTaskProject").value;
  const priority = document.getElementById("quickTaskPriority").value;
  const difficulty = difficultyIdFromRange(document.getElementById("quickTaskDifficulty").value);
  if (!title || !date) return;
  state.tasks.push({ id: `task-${Date.now()}`, title, date, projectId, priority, difficulty, done: false, subtasks: [], createdAt: new Date().toISOString() });
  titleInput.value = "";
  saveState();
  rerender();
  titleInput.focus();
});

document.querySelectorAll("[data-close-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("taskDialog").close()));
document.querySelectorAll("[data-close-day-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("dayDialog").close()));
document.querySelectorAll("[data-close-project-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("projectDialog").close()));
document.querySelectorAll("[data-close-add-project-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("addProjectDialog").close()));
document.querySelectorAll("[data-close-subtask-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("subtaskDialog").close()));
document.querySelectorAll("[data-close-add-habit-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("addHabitDialog").close()));
document.querySelectorAll("[data-close-goal-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("goalDialog").close()));
document.querySelectorAll("[data-close-dream-dialog]").forEach(button => button.addEventListener("click", () => document.getElementById("dreamDialog").close()));

document.getElementById("subtaskForm").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("subtaskTitleInput");
  addSubtask(input.value);
  input.value = "";
  input.focus();
});

document.getElementById("addProjectButton").addEventListener("click", () => {
  document.getElementById("addProjectForm").reset();
  document.getElementById("addProjectDialog").showModal();
  setTimeout(() => document.getElementById("projectNameInput").focus(), 0);
});

document.getElementById("addHabitButton").addEventListener("click", () => {
  document.getElementById("addHabitForm").reset();
  document.getElementById("habitXpInput").value = 15;
  document.getElementById("addHabitDialog").showModal();
  setTimeout(() => document.getElementById("habitNameInput").focus(), 0);
});

document.getElementById("addGoalButton").addEventListener("click", () => openGoalDialog());
document.getElementById("addDreamButton").addEventListener("click", () => openDreamDialog());

document.getElementById("goalForm").addEventListener("submit", event => {
  event.preventDefault();
  const id = document.getElementById("goalIdInput").value;
  const title = document.getElementById("goalTitleInput").value.trim();
  const why = document.getElementById("goalWhyInput").value.trim();
  const target = document.getElementById("goalTargetInput").value;
  const progress = clampProgress(document.getElementById("goalProgressInput").value);
  if (!title) return;
  if (id) {
    const goal = state.goalItems.find(item => item.id === id);
    if (goal) Object.assign(goal, { title, why, target, progress, done: progress >= 100 });
  } else {
    state.goalItems.push({ id: `goal-${Date.now()}`, title, why, target, progress, done: progress >= 100 });
  }
  saveState();
  document.getElementById("goalDialog").close();
  renderGoals();
});

document.getElementById("dreamForm").addEventListener("submit", event => {
  event.preventDefault();
  const id = document.getElementById("dreamIdInput").value;
  const title = document.getElementById("dreamTitleInput").value.trim();
  const why = document.getElementById("dreamWhyInput").value.trim();
  const firstStep = document.getElementById("dreamStepInput").value.trim();
  const symbol = document.getElementById("dreamSymbolInput").value.trim() || "★";
  if (!title) return;
  if (id) {
    const dream = state.dreamItems.find(item => item.id === id);
    if (dream) Object.assign(dream, { title, why, firstStep, symbol });
  } else {
    state.dreamItems.push({ id: `dream-${Date.now()}`, title, why, firstStep, symbol });
  }
  saveState();
  document.getElementById("dreamDialog").close();
  renderGoals();
});

document.getElementById("addHabitForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("habitNameInput").value.trim();
  const caption = document.getElementById("habitCaptionInput").value.trim() || "Ежедневный шаг вперёд";
  const xp = Math.min(100, Math.max(1, Number(document.getElementById("habitXpInput").value) || 1));
  if (!name) return;
  state.habitItems.push({ id: `habit-${Date.now()}`, name, caption, xp });
  ensureDay();
  saveState();
  document.getElementById("addHabitDialog").close();
  rerender();
});

document.getElementById("addProjectForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("projectNameInput").value.trim();
  const caption = document.getElementById("projectCaptionInput").value.trim() || "Личный проект";
  if (!name) return;
  const id = `project-${Date.now()}`;
  const palette = PROJECT_PALETTE[projects().length % PROJECT_PALETTE.length];
  state.projectItems.push({ id, name, caption, icon: name.slice(0, 1).toUpperCase(), ...palette });
  state.projects[id] = 0;
  saveState();
  fillProjectSelect();
  document.getElementById("addProjectDialog").close();
  rerender();
});

document.getElementById("taskForm").addEventListener("submit", event => {
  event.preventDefault();
  const id = document.getElementById("taskIdInput").value;
  const title = document.getElementById("taskTitleInput").value.trim();
  const date = document.getElementById("taskDateInput").value;
  const projectId = document.getElementById("taskProjectInput").value;
  const priority = document.getElementById("taskPriorityInput").value;
  const difficulty = difficultyIdFromRange(document.getElementById("taskDifficultyInput").value);
  if (!title || !date) return;
  if (id) {
    const task = state.tasks.find(item => item.id === id);
    if (task) Object.assign(task, { title, date, projectId, priority, difficulty });
  } else {
    state.tasks.push({ id: `task-${Date.now()}`, title, date, projectId, priority, difficulty, done: false, subtasks: [], createdAt: new Date().toISOString() });
  }
  saveState();
  document.getElementById("taskDialog").close();
  rerender();
});

document.getElementById("dayAddTaskButton").addEventListener("click", () => openTaskDialog({ date: selectedDayKey }));
document.getElementById("projectAddTaskButton").addEventListener("click", () => openTaskDialog({ projectId: selectedProjectId }));

document.getElementById("resetTodayButton").addEventListener("click", () => {
  if (!confirm("Сбросить все отметки привычек за сегодня? Задачи сохранятся.")) return;
  state.days[dateKey()] = emptyDay(habits());
  saveState();
  rerender();
});

document.querySelectorAll("[data-minutes]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-minutes]").forEach(node => node.classList.toggle("active", node === button));
  resetTimer(button.dataset.minutes);
}));

document.getElementById("timerToggle").addEventListener("click", () => {
  if (!timer.running) {
    timer.running = true;
    unlockTimerSound();
    requestTimerNotifications();
    timer.endAt = Date.now() + timer.left * 1000;
    timer.interval = setInterval(syncTimer, 500);
  } else {
    syncTimer();
    timer.running = false;
    if (timer.interval) clearInterval(timer.interval);
    timer.endAt = null;
  }
  renderTimer();
});

document.getElementById("timerReset").addEventListener("click", () => resetTimer());
document.addEventListener("visibilitychange", syncTimer);
window.addEventListener("focus", syncTimer);
document.getElementById("prevMonth").addEventListener("click", () => { calendarDate.setMonth(calendarDate.getMonth() - 1); renderCalendar(); });
document.getElementById("nextMonth").addEventListener("click", () => { calendarDate.setMonth(calendarDate.getMonth() + 1); renderCalendar(); });

document.getElementById("exportButton").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `discipline-os-${dateKey()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
});

document.getElementById("importInput").addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!imported.days || !imported.projects) throw new Error("invalid");
      if (!Array.isArray(imported.habitItems)) imported.habitItems = DEFAULT_HABITS.map(habit => ({ ...habit }));
      imported.habitItems = imported.habitItems.map(habit => {
        const updatedDefault = DEFAULT_HABITS.find(item => item.id === habit.id);
        return updatedDefault ? { ...habit, ...updatedDefault } : habit;
      });
      if (!Array.isArray(imported.projectItems)) imported.projectItems = DEFAULT_PROJECTS.map(project => ({ ...project }));
      if (!Array.isArray(imported.tasks)) imported.tasks = [];
      imported.tasks.forEach(task => { task.subtasks = normalizeSubtasks(task.subtasks); });
      imported.shop = { ...createShopState(), ...(imported.shop || {}) };
      if (!imported.shop.ownedCars || typeof imported.shop.ownedCars !== "object") imported.shop.ownedCars = {};
      imported.goalPrompts = normalizeGoalPrompts(imported.goalPrompts);
      imported.goalItems = normalizeGoals(imported.goalItems);
      imported.dreamItems = normalizeDreams(imported.dreamItems);
      state = imported;
      carryOverUnfinishedTasks();
      fillProjectSelect();
      saveState();
      rerender();
    } catch {
      alert("Не удалось импортировать файл резервной копии.");
    }
  };
  reader.readAsText(file);
});

ensureDay();
carryOverUnfinishedTasks();
fillProjectSelect();
document.getElementById("quickTaskDate").value = dateKey();
saveState();
rerender();

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
