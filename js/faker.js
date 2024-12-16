// import { faker } from 'https://esm.sh/@faker-js/faker@v9.2.0';
import {
  fakerAF_ZA,
  fakerAR,
  fakerAZ,
  fakerBASE,
  fakerCS_CZ,
  fakerDA,
  fakerDE,
  fakerDE_AT,
  fakerDE_CH,
  fakerDV,
  fakerEL,
  fakerEN,
  fakerEN_AU,
  fakerEN_AU_ocker,
  fakerEN_BORK,
  fakerEN_CA,
  fakerEN_GB,
  fakerEN_GH,
  fakerEN_HK,
  fakerEN_IE,
  fakerEN_IN,
  fakerEN_NG,
  fakerEN_US,
  fakerEN_ZA,
  fakerEO,
  fakerES,
  fakerES_MX,
  fakerFA,
  fakerFI,
  fakerFR,
  fakerFR_BE,
  fakerFR_CA,
  fakerFR_CH,
  fakerFR_LU,
  fakerFR_SN,
  fakerHE,
  fakerHR,
  fakerHU,
  fakerHY,
  fakerID_ID,
  fakerIT,
  fakerJA,
  fakerKA_GE,
  fakerKO,
  fakerLV,
  fakerMK,
  fakerNB_NO,
  fakerNE,
  fakerNL,
  fakerNL_BE,
  fakerPL,
  fakerPT_BR,
  fakerPT_PT,
  fakerRO,
  fakerRO_MD,
  fakerRU,
  fakerSK,
  fakerSR_RS_latin,
  fakerSV,
  fakerTH,
  fakerTR,
  fakerUK,
  fakerUR,
  fakerUZ_UZ_latin,
  fakerVI,
  fakerYO_NG,
  fakerZH_CN,
  fakerZH_TW,
  fakerZU_ZA,
} from '../dist/index.js';

const languageMap = {
  af_ZA: { name: 'Afrikaans (South Africa)', faker: fakerAF_ZA },
  ar: { name: 'Arabic', faker: fakerAR },
  az: { name: 'Azerbaijani', faker: fakerAZ },
  base: { name: 'Base', faker: fakerBASE },
  cs_CZ: { name: 'Czech (Czechia)', faker: fakerCS_CZ },
  da: { name: 'Danish', faker: fakerDA },
  de: { name: 'German', faker: fakerDE },
  de_AT: { name: 'German (Austria)', faker: fakerDE_AT },
  de_CH: { name: 'German (Switzerland)', faker: fakerDE_CH },
  dv: { name: 'Maldivian', faker: fakerDV },
  el: { name: 'Greek', faker: fakerEL },
  en: { name: 'English', faker: fakerEN },
  en_AU: { name: 'English (Australia)', faker: fakerEN_AU },
  en_AU_ocker: { name: 'English (Australia Ocker)', faker: fakerEN_AU_ocker },
  en_BORK: { name: 'English (Bork)', faker: fakerEN_BORK },
  en_CA: { name: 'English (Canada)', faker: fakerEN_CA },
  en_GB: { name: 'English (Great Britain)', faker: fakerEN_GB },
  en_GH: { name: 'English (Ghana)', faker: fakerEN_GH },
  en_HK: { name: 'English (Hong Kong)', faker: fakerEN_HK },
  en_IE: { name: 'English (Ireland)', faker: fakerEN_IE },
  en_IN: { name: 'English (India)', faker: fakerEN_IN },
  en_NG: { name: 'English (Nigeria)', faker: fakerEN_NG },
  en_US: { name: 'English (United States)', faker: fakerEN_US },
  en_ZA: { name: 'English (South Africa)', faker: fakerEN_ZA },
  eo: { name: 'Esperanto', faker: fakerEO },
  es: { name: 'Spanish', faker: fakerES },
  es_MX: { name: 'Spanish (Mexico)', faker: fakerES_MX },
  fa: { name: 'Farsi/Persian', faker: fakerFA },
  fi: { name: 'Finnish', faker: fakerFI },
  fr: { name: 'French', faker: fakerFR },
  fr_BE: { name: 'French (Belgium)', faker: fakerFR_BE },
  fr_CA: { name: 'French (Canada)', faker: fakerFR_CA },
  fr_CH: { name: 'French (Switzerland)', faker: fakerFR_CH },
  fr_LU: { name: 'French (Luxembourg)', faker: fakerFR_LU },
  fr_SN: { name: 'French (Senegal)', faker: fakerFR_SN },
  he: { name: 'Hebrew', faker: fakerHE },
  hr: { name: 'Croatian', faker: fakerHR },
  hu: { name: 'Hungarian', faker: fakerHU },
  hy: { name: 'Armenian', faker: fakerHY },
  id_ID: { name: 'Indonesian (Indonesia)', faker: fakerID_ID },
  it: { name: 'Italian', faker: fakerIT },
  ja: { name: 'Japanese', faker: fakerJA },
  ka_GE: { name: 'Georgian (Georgia)', faker: fakerKA_GE },
  ko: { name: 'Korean', faker: fakerKO },
  lv: { name: 'Latvian', faker: fakerLV },
  mk: { name: 'Macedonian', faker: fakerMK },
  nb_NO: { name: 'Norwegian (Norway)', faker: fakerNB_NO },
  ne: { name: 'Nepali', faker: fakerNE },
  nl: { name: 'Dutch', faker: fakerNL },
  nl_BE: { name: 'Dutch (Belgium)', faker: fakerNL_BE },
  pl: { name: 'Polish', faker: fakerPL },
  pt_BR: { name: 'Portuguese (Brazil)', faker: fakerPT_BR },
  pt_PT: { name: 'Portuguese (Portugal)', faker: fakerPT_PT },
  ro: { name: 'Romanian', faker: fakerRO },
  ro_MD: { name: 'Romanian (Moldova)', faker: fakerRO_MD },
  ru: { name: 'Russian', faker: fakerRU },
  sk: { name: 'Slovak', faker: fakerSK },
  sr_RS_latin: { name: 'Serbian (Serbia, Latin)', faker: fakerSR_RS_latin },
  sv: { name: 'Swedish', faker: fakerSV },
  th: { name: 'Thai', faker: fakerTH },
  tr: { name: 'Turkish', faker: fakerTR },
  uk: { name: 'Ukrainian', faker: fakerUK },
  ur: { name: 'Urdu', faker: fakerUR },
  uz_UZ_latin: { name: 'Uzbek (Uzbekistan, Latin)', faker: fakerUZ_UZ_latin },
  vi: { name: 'Vietnamese', faker: fakerVI },
  yo_NG: { name: 'Yoruba (Nigeria)', faker: fakerYO_NG },
  zh_CN: { name: 'Chinese (China)', faker: fakerZH_CN },
  zh_TW: { name: 'Chinese (Taiwan)', faker: fakerZH_TW },
  zu_ZA: { name: 'Zulu (South Africa)', faker: fakerZU_ZA },
};

let faker = fakerEN;
let data = {};
setData(faker);

const sortedLanguageMap = Object.fromEntries(
  Object.entries(languageMap).sort(([, a], [, b]) => a.name.localeCompare(b.name)),
);

const modal = document.getElementById('language-modal');
const optionElement = document.getElementById('language-options');

for (const locale in sortedLanguageMap) {
  const languageElement = document.createElement('li');
  languageElement.textContent = languageMap[locale].name;

  languageElement.addEventListener('click', () => {
    faker = languageMap[locale].faker;
    setData(faker);
    modal.style.display = 'none';
    changeCustomizeButtonEvent();
  });

  optionElement.appendChild(languageElement);
}

function setData(faker) {
  data = {
    _customize: {
      uuid: faker.string.uuid,
      fullName: faker.person.fullName,
      bio: faker.person.bio,
      sex: faker.person.sex,
      phone: faker.phone.number,
      job: faker.person.jobTitle,
      workAt: faker.company.name,
      createAt: faker.date.past,
      updateAt: faker.date.past,
    },
    person: {
      'person.bio': faker.person.bio,
      'person.lastName': faker.person.lastName,
      'person.middleName': faker.person.middleName,
      'person.fullName': faker.person.fullName,
      'person.prefix': faker.person.prefix,
      'person.suffix': faker.person.suffix,
      'person.gender': faker.person.gender,
      'person.jobTitle': faker.person.jobTitle,
      'person.jobArea': faker.person.jobArea,
      'person.jobDescriptor': faker.person.jobDescriptor,
      'person.jobType': faker.person.jobType,
      'person.zodiacSign': faker.person.zodiacSign,
      'person.sex': faker.person.sex,
      'person.sexType': faker.person.sexType,
    },
    airline: {
      'airline.aircraftType': faker.airline.aircraftType,
      'airline.airline': () => JSON.stringify(faker.airline.airline()),
      'airline.airplane': () => JSON.stringify(faker.airline.airplane()),
      'airline.airport': () => JSON.stringify(faker.airline.airport()),
      'airline.flightNumber': faker.airline.flightNumber,
      'airline.seat': faker.airline.seat,
      'airline.recordLocator': faker.airline.recordLocator,
    },
    animal: {
      'animal.bear': faker.animal.bear,
      'animal.bird': faker.animal.bird,
      'animal.cat': faker.animal.cat,
      'animal.cetacean': faker.animal.cetacean,
      'animal.cow': faker.animal.cow,
      'animal.crocodilia': faker.animal.crocodilia,
      'animal.dog': faker.animal.dog,
      'animal.fish': faker.animal.fish,
      'animal.horse': faker.animal.horse,
      'animal.insect': faker.animal.insect,
      'animal.lion': faker.animal.lion,
      'animal.petName': faker.animal.petName,
      'animal.rabbit': faker.animal.rabbit,
      'animal.rodent': faker.animal.rodent,
      'animal.snake': faker.animal.snake,
      'animal.type': faker.animal.type,
    },
    book: {
      'book.author': faker.book.author,
      'book.format': faker.book.format,
      'book.genre': faker.book.genre,
      'book.publisher': faker.book.publisher,
      'book.series': faker.book.series,
      'book.title': faker.book.title,
    },
    color: {
      'color.cmyk': faker.color.cmyk,
      'color.colorByCSSColorSpace': faker.color.colorByCSSColorSpace,
      'color.cssSupportedFunction': faker.color.cssSupportedFunction,
      'color.cssSupportedSpace': faker.color.cssSupportedSpace,
      'color.hsl': faker.color.hsl,
      'color.human': faker.color.human,
      'color.hwb': faker.color.hwb,
      'color.lab': faker.color.lab,
      'color.lch': faker.color.lch,
      'color.rgb': faker.color.rgb,
      'color.space': faker.color.space,
    },
    commerce: {
      'commerce.department': faker.commerce.department,
      'commerce.isbn': faker.commerce.isbn,
      'commerce.price': faker.commerce.price,
      'commerce.product': faker.commerce.product,
      'commerce.productAdjective': faker.commerce.productAdjective,
      'commerce.productDescription': faker.commerce.productDescription,
      'commerce.productMaterial': faker.commerce.productMaterial,
      'commerce.productName': faker.commerce.productName,
    },
    company: {
      'company.buzzAdjective': faker.company.buzzAdjective,
      'company.buzzNoun': faker.company.buzzNoun,
      'company.buzzPhrase': faker.company.buzzPhrase,
      'company.buzzVerb': faker.company.buzzVerb,
      'company.catchPhrase': faker.company.catchPhrase,
      'company.catchPhraseAdjective': faker.company.catchPhraseAdjective,
      'company.catchPhraseDescriptor': faker.company.catchPhraseDescriptor,
      'company.catchPhraseNoun': faker.company.catchPhraseNoun,
      'company.name': faker.company.name,
    },
    database: {
      'database.collation': faker.database.collation,
      'database.column': faker.database.column,
      'database.engine': faker.database.engine,
      'database.mongodbObjectId': faker.database.mongodbObjectId,
      'database.type': faker.database.type,
    },
    date: {
      'date.anytime': faker.date.anytime,
      'date.between': () =>
        faker.date.between({
          from: '2020-01-01',
          to: '2030-01-01',
        }),
      'date.betweens': () =>
        faker.date.betweens({
          from: '2020-01-01',
          to: '2030-01-01',
        }),
      'date.birthdate': faker.date.birthdate,
      'date.future': faker.date.future,
      'date.month': faker.date.month,
      'date.past': faker.date.past,
      'date.recent': faker.date.recent,
      'date.soon': faker.date.soon,
      'date.timeZone': faker.location.timeZone,
      'date.weekday': faker.date.weekday,
    },
    finance: {
      'finance.accountName': faker.finance.accountName,
      'finance.accountNumber': faker.finance.accountNumber,
      'finance.amount': faker.finance.amount,
      'finance.bic': faker.finance.bic,
      'finance.bitcoinAddress': faker.finance.bitcoinAddress,
      'finance.creditCardCVV': faker.finance.creditCardCVV,
      'finance.creditCardIssuer': faker.finance.creditCardIssuer,
      'finance.creditCardNumber': faker.finance.creditCardNumber,
      'finance.currency': () => JSON.stringify(faker.finance.currency()),
      'finance.currencyCode': faker.finance.currencyCode,
      'finance.currencyName': faker.finance.currencyName,
      'finance.currencySymbol': faker.finance.currencySymbol,
      'finance.ethereumAddress': faker.finance.ethereumAddress,
      'finance.iban': faker.finance.iban,
      'finance.litecoinAddress': faker.finance.litecoinAddress,
      'finance.maskedNumber': faker.finance.maskedNumber,
      'finance.pin': faker.finance.pin,
      'finance.routingNumber': faker.finance.routingNumber,
      'finance.transactionDescription': faker.finance.transactionDescription,
      'finance.transactionType': faker.finance.transactionType,
    },
    food: {
      'food.adjective': faker.food.adjective,
      'food.description': faker.food.description,
      'food.dish': faker.food.dish,
      'food.ethnicCategory': faker.food.ethnicCategory,
      'food.fruit': faker.food.fruit,
      'food.ingredient': faker.food.ingredient,
      'food.meat': faker.food.meat,
      'food.spice': faker.food.spice,
      'food.vegetable': faker.food.vegetable,
    },
    git: {
      'git.branch': faker.git.branch,
      'git.commitDate': faker.git.commitDate,
      'git.commitEntry': faker.git.commitEntry,
      'git.commitMessage': faker.git.commitMessage,
      'git.commitSha': faker.git.commitSha,
    },
    hacker: {
      'hacker.abbreviation': faker.hacker.abbreviation,
      'hacker.adjective': faker.hacker.adjective,
      'hacker.ingverb': faker.hacker.ingverb,
      'hacker.noun': faker.hacker.noun,
      'hacker.phrase': faker.hacker.phrase,
      'hacker.verb': faker.hacker.verb,
    },
    helpers: {
      'helpers.arrayElement': () => faker.helpers.arrayElement(['apple', 'banana', 'cherry']),
      'helpers.arrayElements': () => faker.helpers.arrayElements(['apple', 'banana', 'cherry'], 2),
      // 'helpers.enumValue': () => faker.helpers.enumValue(['small', 'medium', 'large']),  // Javascript not have enum
      'helpers.fake': () => faker.helpers.fake('{{person.firstName}} {{person.lastName}}'),
      'helpers.fromRegExp': () => faker.helpers.fromRegExp(/foo (\d+)/, 'foo 123'),
      'helpers.maybe': () => faker.helpers.maybe(() => true, 0.5),
      'helpers.multiple': () => faker.helpers.multiple(() => 'item', 3),
      'helpers.mustache': () => faker.helpers.mustache('Hello {{name}}', { name: () => 'John' }),
      'helpers.objectEntry': () => faker.helpers.objectEntry({ key: () => 'value' }),
      'helpers.objectKey': () => faker.helpers.objectKey({ key: () => 'value' }),
      'helpers.objectValue': () => faker.helpers.objectValue({ key: () => 'value' }),
      'helpers.rangeToNumber': () => faker.helpers.rangeToNumber('10-20'),
      'helpers.replaceCreditCardSymbols': () =>
        faker.helpers.replaceCreditCardSymbols('1234-5678-XXXX-XXXX'),
      'helpers.replaceSymbols': () => faker.helpers.replaceSymbols('Hello @world!'),
      'helpers.shuffle': () => faker.helpers.shuffle([1, 2, 3, 4, 5]),
      'helpers.slugify': () => faker.helpers.slugify('Hello World!'),
      'helpers.uniqueArray': () => faker.helpers.uniqueArray([1, 2, 2, 3, 4]),
      'helpers.weightedArrayElement': () =>
        faker.helpers.weightedArrayElement([
          { weight: 5, value: 'sunny' },
          { weight: 4, value: 'rainy' },
          { weight: 1, value: 'snowy' },
        ]),
    },
    image: {
      'image.avatar': faker.image.avatar,
      'image.avatarGitHub': faker.image.avatarGitHub,
      'image.dataUri': faker.image.dataUri,
      'image.url': faker.image.url,
      'image.urlLoremFlickr': faker.image.urlLoremFlickr,
      'image.urlPicsumPhotos': faker.image.urlPicsumPhotos,
      'image.urlPlaceholder': faker.image.urlPlaceholder,
    },
    internet: {
      'internet.color': faker.internet.color,
      'internet.displayName': faker.internet.displayName,
      'internet.domainName': faker.internet.domainName,
      'internet.domainSuffix': faker.internet.domainSuffix,
      'internet.domainWord': faker.internet.domainWord,
      'internet.email': faker.internet.email,
      'internet.emoji': faker.internet.emoji,
      'internet.exampleEmail': faker.internet.exampleEmail,
      'internet.httpMethod': faker.internet.httpMethod,
      'internet.httpStatusCode': faker.internet.httpStatusCode,
      'internet.ip': faker.internet.ip,
      'internet.ipv4': faker.internet.ipv4,
      'internet.ipv6': faker.internet.ipv6,
      // 'internet.jwt': faker.internet.jwt,  // TypeError: Unknown encoding: base64url
      'internet.jwtAlgorithm': faker.internet.jwtAlgorithm,
      'internet.mac': faker.internet.mac,
      'internet.password': faker.internet.password,
      'internet.port': faker.internet.port,
      'internet.protocol': faker.internet.protocol,
      'internet.url': faker.internet.url,
      'internet.userAgent': faker.internet.userAgent,
      'internet.username': faker.internet.username,
    },
    location: {
      'location.buildingNumber': faker.location.buildingNumber,
      'location.cardinalDirection': faker.location.cardinalDirection,
      'location.city': faker.location.city,
      'location.continent': faker.location.continent,
      'location.country': faker.location.country,
      'location.countryCode': faker.location.countryCode,
      'location.county': faker.location.county,
      'location.direction': faker.location.direction,
      'location.latitude': faker.location.latitude,
      'location.longitude': faker.location.longitude,
      'location.nearbyGPSCoordinate': faker.location.nearbyGPSCoordinate,
      'location.ordinalDirection': faker.location.ordinalDirection,
      'location.secondaryAddress': faker.location.secondaryAddress,
      'location.state': faker.location.state,
      'location.street': faker.location.street,
      'location.streetAddress': faker.location.streetAddress,
      'location.timeZone': faker.location.timeZone,
      'location.zipCode': faker.location.zipCode,
    },
    lorem: {
      'lorem.lines': faker.lorem.lines,
      'lorem.paragraph': faker.lorem.paragraph,
      'lorem.paragraphs': faker.lorem.paragraphs,
      'lorem.sentence': faker.lorem.sentence,
      'lorem.sentences': faker.lorem.sentences,
      'lorem.slug': faker.lorem.slug,
      'lorem.text': faker.lorem.text,
      'lorem.word': faker.lorem.word,
      'lorem.words': faker.lorem.words,
    },
    music: {
      'music.album': faker.music.album,
      'music.artist': faker.music.artist,
      'music.genre': faker.music.genre,
      'music.songName': faker.music.songName,
    },
    number: {
      'number.bigInt': faker.number.bigInt,
      'number.binary': faker.number.binary,
      'number.float': faker.number.float,
      'number.hex': faker.number.hex,
      'number.int': faker.number.int,
      'number.octal': faker.number.octal,
      'number.romanNumeral': faker.number.romanNumeral,
    },
    phone: {
      'phone.imei': faker.phone.imei,
      'phone.number': faker.phone.number,
    },
    science: {
      'science.chemicalElement': () => JSON.stringify(faker.science.chemicalElement()),
      'science.unit': () => JSON.stringify(faker.science.unit()),
    },
    string: {
      'string.alpha': faker.string.alpha,
      'string.alphanumeric': faker.string.alphanumeric,
      'string.binary': faker.string.binary,
      'string.fromCharacters': () => faker.string.fromCharacters('vm', 10),
      'string.hexadecimal': faker.string.hexadecimal,
      'string.nanoid': faker.string.nanoid,
      'string.numeric': faker.string.numeric,
      'string.octal': faker.string.octal,
      'string.sample': faker.string.sample,
      'string.symbol': faker.string.symbol,
      'string.ulid': faker.string.ulid,
      'string.uuid': faker.string.uuid,
    },
    system: {
      'system.commonFileExt': faker.system.commonFileExt,
      'system.commonFileName': faker.system.commonFileName,
      'system.commonFileType': faker.system.commonFileType,
      'system.cron': faker.system.cron,
      'system.directoryPath': faker.system.directoryPath,
      'system.fileExt': faker.system.fileExt,
      'system.fileName': faker.system.fileName,
      'system.filePath': faker.system.filePath,
      'system.fileType': faker.system.fileType,
      'system.mimeType': faker.system.mimeType,
      'system.networkInterface': faker.system.networkInterface,
      'system.semver': faker.system.semver,
    },
    vehicle: {
      'vehicle.bicycle': faker.vehicle.bicycle,
      'vehicle.color': faker.vehicle.color,
      'vehicle.fuel': faker.vehicle.fuel,
      'vehicle.manufacturer': faker.vehicle.manufacturer,
      'vehicle.model': faker.vehicle.model,
      'vehicle.type': faker.vehicle.type,
      'vehicle.vehicle': faker.vehicle.vehicle,
      'vehicle.vin': faker.vehicle.vin,
      'vehicle.vrm': faker.vehicle.vrm,
    },
    word: {
      'word.adjective': faker.word.adjective,
      'word.adverb': faker.word.adverb,
      'word.conjunction': faker.word.conjunction,
      'word.interjection': faker.word.interjection,
      'word.noun': faker.word.noun,
      'word.preposition': faker.word.preposition,
      'word.sample': faker.word.sample,
      'word.verb': faker.word.verb,
      'word.words': faker.word.words,
    },
  };
}

function outputFormat(v) {
  try {
    if (Date.parse(v)) return v.toISOString();
  } catch (_) {
    return v;
  }

  return v;
}

const docUrl = (s) => {
  return 'https://fakerjs.dev/api/' + s + '.html';
};

const container = document.getElementById('container');
const navigation = document.getElementById('navigation');
const template = document.getElementById('category-template');

function createFuncItem(funcName, category) {
  const categoryItem = document
    .getElementById('category-item-template')
    .content.firstElementChild.cloneNode(true);
  if (!template) return;

  // set category name / text
  const categoryName = categoryItem.querySelector('.category__name');
  categoryName.textContent = funcName;

  const generatedText = categoryItem.querySelector('.generated-text');
  try {
    generatedText.textContent = outputFormat(data[category][funcName]());
    // set event category button generate / copy
    const generateButton = categoryItem.querySelector('.btn--generate');
    generateButton.addEventListener('click', () => {
      const genResult = outputFormat(data[category][funcName]());
      generatedText.textContent = genResult;
    });
  } catch (e) {
    console.log(e.message, funcName);
    // debugger;
  }

  const copyButton = categoryItem.querySelector('.btn--copy');
  copyButton.addEventListener('click', () => {
    copyToClipboard(generatedText.textContent);
  });

  return categoryItem;
}

function createCustomizeItem(funcName, category) {
  const categoryItem = document
    .getElementById('category-item-customize-template')
    .content.firstElementChild.cloneNode(true);
  if (!template) return;

  // set category name / text
  const categoryName = categoryItem.querySelector('.category__name');
  categoryName.textContent = funcName;

  const generatedText = categoryItem.querySelector('.generated-text');
  const genResult = outputFormat(data[category][funcName]());
  generatedText.textContent = genResult;

  return { categoryItem, genResult };
}

function changeCustomizeButtonEvent() {
  for (let category in data) {
    const isCustomize = category[0] === '_';
    if (isCustomize) {
      const customizeElement = document.getElementById(category);
      if (!customizeElement) next();

      const generateButton = customizeElement.querySelector('.btn--generate');
      if (!generateButton) next();

      const funcList = [];
      const funcNameList = [];
      const categoryItemList = customizeElement.querySelectorAll('.category__item');
      let jsonData = {};

      for (const funcName in data[category]) {
        funcList.push(data[category][funcName]);
        funcNameList.push(funcName);
      }

      generateButton.onclick = () => {
        const length = funcList.length === categoryItemList.length ? funcList.length : 0;

        for (let i = 0; i < length; i++) {
          const genResult = outputFormat(funcList[i]());
          categoryItemList[i].querySelector('.generated-text').textContent = genResult;
          jsonData[funcNameList[i]] = genResult;
        }
      };
    }
  }
}

for (let category in data) {
  if (!template || !navigation) break;

  const isCustomize = category[0] === '_';
  let originCategory = '';
  if (isCustomize) {
    originCategory = category;
    category = category.substring(1);
  }

  // create navbar item
  const navItem = document.createElement('li');
  const navLink = document.createElement('a');
  navLink.href = isCustomize ? `#${originCategory}` : `#${category}`;
  navLink.textContent = category.toUpperCase();
  navLink.className = 'nav-link';

  // update dom nav
  navItem.appendChild(navLink);
  navigation.append(navItem);

  // clone category element from template
  const categoryElement = template.content.firstElementChild.cloneNode(true);
  categoryElement.id = `${category}`;

  // set title category
  const categoryTitle = categoryElement.querySelector('.category__title');
  const categoryLink = categoryTitle.querySelector('a');
  categoryLink.textContent = category.toUpperCase();
  if (!isCustomize) categoryLink.href = docUrl(category);

  if (isCustomize) {
    categoryElement.classList.add('customize');
    categoryElement.id = originCategory;

    const funcList = [];
    const funcNameList = [];
    const categoryItemList = [];
    let jsonData = {};

    for (const funcName in data[originCategory]) {
      const { categoryItem, genResult } = createCustomizeItem(funcName, originCategory);
      categoryElement.appendChild(categoryItem);

      funcList.push(data[originCategory][funcName]);
      categoryItemList.push(categoryItem);
      funcNameList.push(funcName);
      jsonData[funcName] = genResult;
    }

    // add generate button and customize to customize category
    const generateButton = document.createElement('button');
    const copyButton = document.createElement('button');
    generateButton.className = 'btn btn--generate';
    copyButton.className = 'btn btn--copy';
    generateButton.textContent = 'Generate';
    copyButton.textContent = 'Copy Json';

    // add generate event
    generateButton.onclick = () => {
      const length = funcList.length === categoryItemList.length ? funcList.length : 0;
      for (let i = 0; i < length; i++) {
        const genResult = outputFormat(funcList[i]());
        categoryItemList[i].querySelector('.generated-text').textContent = genResult;
        jsonData[funcNameList[i]] = genResult;
      }
    };
    // add copy event
    copyButton.addEventListener('click', () => {
      copyToClipboard(JSON.stringify(jsonData, null, 2));
    });

    // add 2 buttons to dom
    categoryElement.appendChild(generateButton);
    categoryElement.appendChild(copyButton);
  } else {
    for (const funcName in data[category]) {
      const categoryItem = createFuncItem(funcName, category);
      categoryElement.appendChild(categoryItem);
    }
  }

  // update dom category
  container.appendChild(categoryElement);
}

const links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    // Smooth scrolling to href element
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    const navbar = document.getElementById('navbar');
    let navbarHeight = 0;
    if (navbar) {
      navbarHeight = navbar.offsetHeight;
    }

    if (targetElement) {
      const offsetTop = targetElement.offsetTop; // Get the target element's position from the top
      const scrollOptions = {
        top: offsetTop - navbarHeight,
      };
      window.scrollTo(scrollOptions);
    }
  });
});
