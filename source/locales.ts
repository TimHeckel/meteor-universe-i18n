// prettier-ignore
export const LOCALES: Record<
  string,
  [
    string, // code
    string, // name
    string, // localName
    boolean, // isRTL
    string, // numberTypographic
    number, // decimal
    string, // currency
    [number] | [number, number] // groupNumberBy
  ]
> = {
  af: ['af', 'Afrikaans', 'Afrikaans', false, ',.', 2, 'R', [3]],
  'af-za': ['af-ZA', 'Afrikaans (South Africa)', 'Afrikaans (Suid Afrika)', false, ',.', 2, 'R', [3]],
  am: ['am', 'Amharic', 'አማርኛ', false, ',.', 1, 'ETB', [3, 0]],
  'am-et': ['am-ET', 'Amharic (Ethiopia)', 'አማርኛ (ኢትዮጵያ)', false, ',.', 1, 'ETB', [3, 0]],
  ar: ['ar', 'Arabic', 'العربية', true, ',.', 2, 'ر.س.‏', [3]],
  'ar-ae': ['ar-AE', 'Arabic (U.A.E.)', 'العربية (الإمارات العربية المتحدة)', true, ',.', 2, 'د.إ.‏', [3]],
  'ar-bh': ['ar-BH', 'Arabic (Bahrain)', 'العربية (البحرين)', true, ',.', 3, 'د.ب.‏', [3]],
  'ar-dz': ['ar-DZ', 'Arabic (Algeria)', 'العربية (الجزائر)', true, ',.', 2, 'د.ج.‏', [3]],
  'ar-eg': ['ar-EG', 'Arabic (Egypt)', 'العربية (مصر)', true, ',.', 3, 'ج.م.‏', [3]],
  'ar-iq': ['ar-IQ', 'Arabic (Iraq)', 'العربية (العراق)', true, ',.', 2, 'د.ع.‏', [3]],
  'ar-jo': ['ar-JO', 'Arabic (Jordan)', 'العربية (الأردن)', true, ',.', 3, 'د.ا.‏', [3]],
  'ar-kw': ['ar-KW', 'Arabic (Kuwait)', 'العربية (الكويت)', true, ',.', 3, 'د.ك.‏', [3]],
  'ar-lb': ['ar-LB', 'Arabic (Lebanon)', 'العربية (لبنان)', true, ',.', 2, 'ل.ل.‏', [3]],
  'ar-ly': ['ar-LY', 'Arabic (Libya)', 'العربية (ليبيا)', true, ',.', 3, 'د.ل.‏', [3]],
  'ar-ma': ['ar-MA', 'Arabic (Morocco)', 'العربية (المملكة المغربية)', true, ',.', 2, 'د.م.‏', [3]],
  'ar-om': ['ar-OM', 'Arabic (Oman)', 'العربية (عمان)', true, ',.', 2, 'ر.ع.‏', [3]],
  'ar-qa': ['ar-QA', 'Arabic (Qatar)', 'العربية (قطر)', true, ',.', 2, 'ر.ق.‏', [3]],
  'ar-sa': ['ar-SA', 'Arabic (Saudi Arabia)', 'العربية (المملكة العربية السعودية)', true, ',.', 2, 'ر.س.‏', [3]],
  'ar-sy': ['ar-SY', 'Arabic (Syria)', 'العربية (سوريا)', true, ',.', 2, 'ل.س.‏', [3]],
  'ar-tn': ['ar-TN', 'Arabic (Tunisia)', 'العربية (تونس)', true, ',.', 3, 'د.ت.‏', [3]],
  'ar-ye': ['ar-YE', 'Arabic (Yemen)', 'العربية (اليمن)', true, ',.', 2, 'ر.ي.‏', [3]],
  arn: ['arn', 'Mapudungun', 'Mapudungun', false, '.,', 2, '$', [3]],
  'arn-cl': ['arn-CL', 'Mapudungun (Chile)', 'Mapudungun (Chile)', false, '.,', 2, '$', [3]],
  as: ['as', 'Assamese', 'অসমীয়া', false, ',.', 2, 'ট', [3, 2]],
  'as-in': ['as-IN', 'Assamese (India)', 'অসমীয়া (ভাৰত)', false, ',.', 2, 'ট', [3, 2]],
  az: ['az', 'Azeri', 'Azərbaycan­ılı', false, ' ,', 2, 'man.', [3]],
  'az-cyrl': ['az-Cyrl', 'Azeri (Cyrillic)', 'Азәрбајҹан дили', false, ' ,', 2, 'ман.', [3]],
  'az-cyrl-az': ['az-Cyrl-AZ', 'Azeri (Cyrillic, Azerbaijan)', 'Азәрбајҹан (Азәрбајҹан)', false, ' ,', 2, 'ман.', [3]],
  'az-latn': ['az-Latn', 'Azeri (Latin)', 'Azərbaycan­ılı', false, ' ,', 2, 'man.', [3]],
  'az-latn-az': ['az-Latn-AZ', 'Azeri (Latin, Azerbaijan)', 'Azərbaycan­ılı (Azərbaycan)', false, ' ,', 2, 'man.', [3]],
  ba: ['ba', 'Bashkir', 'Башҡорт', false, ' ,', 2, 'һ.', [3, 0]],
  'ba-ru': ['ba-RU', 'Bashkir (Russia)', 'Башҡорт (Россия)', false, ' ,', 2, 'һ.', [3, 0]],
  be: ['be', 'Belarusian', 'Беларускі', false, ' ,', 2, 'р.', [3]],
  'be-by': ['be-BY', 'Belarusian (Belarus)', 'Беларускі (Беларусь)', false, ' ,', 2, 'р.', [3]],
  bg: ['bg', 'Bulgarian', 'български', false, ' ,', 2, 'лв.', [3]],
  'bg-bg': ['bg-BG', 'Bulgarian (Bulgaria)', 'български (България)', false, ' ,', 2, 'лв.', [3]],
  bn: ['bn', 'Bengali', 'বাংলা', false, ',.', 2, 'টা', [3, 2]],
  'bn-bd': ['bn-BD', 'Bengali (Bangladesh)', 'বাংলা (বাংলাদেশ)', false, ',.', 2, '৳', [3, 2]],
  'bn-in': ['bn-IN', 'Bengali (India)', 'বাংলা (ভারত)', false, ',.', 2, 'টা', [3, 2]],
  bo: ['bo', 'Tibetan', 'བོད་ཡིག', false, ',.', 2, '¥', [3, 0]],
  'bo-cn': ['bo-CN', 'Tibetan (PRC)', 'བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)', false, ',.', 2, '¥', [3, 0]],
  br: ['br', 'Breton', 'brezhoneg', false, ' ,', 2, '€', [3]],
  'br-fr': ['br-FR', 'Breton (France)', 'brezhoneg (Frañs)', false, ' ,', 2, '€', [3]],
  bs: ['bs', 'Bosnian', 'bosanski', false, '.,', 2, 'KM', [3]],
  'bs-cyrl': ['bs-Cyrl', 'Bosnian (Cyrillic)', 'босански', false, '.,', 2, 'КМ', [3]],
  'bs-cyrl-ba': ['bs-Cyrl-BA', 'Bosnian (Cyrillic, Bosnia and Herzegovina)', 'босански (Босна и Херцеговина)', false, '.,', 2, 'КМ', [3]],
  'bs-latn': ['bs-Latn', 'Bosnian (Latin)', 'bosanski', false, '.,', 2, 'KM', [3]],
  'bs-latn-ba': ['bs-Latn-BA', 'Bosnian (Latin, Bosnia and Herzegovina)', 'bosanski (Bosna i Hercegovina)', false, '.,', 2, 'KM', [3]],
  ca: ['ca', 'Catalan', 'català', false, '.,', 2, '€', [3]],
  'ca-es': ['ca-ES', 'Catalan (Catalan)', 'català (català)', false, '.,', 2, '€', [3]],
  co: ['co', 'Corsican', 'Corsu', false, ' ,', 2, '€', [3]],
  'co-fr': ['co-FR', 'Corsican (France)', 'Corsu (France)', false, ' ,', 2, '€', [3]],
  cs: ['cs', 'Czech', 'čeština', false, ' ,', 2, 'Kč', [3]],
  'cs-cz': ['cs-CZ', 'Czech (Czech Republic)', 'čeština (Česká republika)', false, ' ,', 2, 'Kč', [3]],
  cy: ['cy', 'Welsh', 'Cymraeg', false, ',.', 2, '£', [3]],
  'cy-gb': ['cy-GB', 'Welsh (United Kingdom)', 'Cymraeg (y Deyrnas Unedig)', false, ',.', 2, '£', [3]],
  da: ['da', 'Danish', 'dansk', false, '.,', 2, 'kr.', [3]],
  'da-dk': ['da-DK', 'Danish (Denmark)', 'dansk (Danmark)', false, '.,', 2, 'kr.', [3]],
  de: ['de', 'German', 'Deutsch', false, '.,', 2, '€', [3]],
  'de-at': ['de-AT', 'German (Austria)', 'Deutsch (Österreich)', false, '.,', 2, '€', [3]],
  'de-ch': ['de-CH', 'German (Switzerland)', 'Deutsch (Schweiz)', false, "'.", 2, 'Fr.', [3]],
  'de-de': ['de-DE', 'German (Germany)', 'Deutsch (Deutschland)', false, '.,', 2, '€', [3]],
  'de-li': ['de-LI', 'German (Liechtenstein)', 'Deutsch (Liechtenstein)', false, "'.", 2, 'CHF', [3]],
  'de-lu': ['de-LU', 'German (Luxembourg)', 'Deutsch (Luxemburg)', false, '.,', 2, '€', [3]],
  dsb: ['dsb', 'Lower Sorbian', 'dolnoserbšćina', false, '.,', 2, '€', [3]],
  'dsb-de': ['dsb-DE', 'Lower Sorbian (Germany)', 'dolnoserbšćina (Nimska)', false, '.,', 2, '€', [3]],
  dv: ['dv', 'Divehi', 'ދިވެހިބަސް', true, ',.', 2, 'ރ.', [3]],
  'dv-mv': ['dv-MV', 'Divehi (Maldives)', 'ދިވެހިބަސް (ދިވެހި ރާއްޖެ)', true, ',.', 2, 'ރ.', [3]],
  el: ['el', 'Greek', 'Ελληνικά', false, '.,', 2, '€', [3]],
  'el-gr': ['el-GR', 'Greek (Greece)', 'Ελληνικά (Ελλάδα)', false, '.,', 2, '€', [3]],
  en: ['en', 'English', 'English', false, ',.', 2, '$', [3]],
  'en-029': ['en-029', 'English (Caribbean)', 'English (Caribbean)', false, ',.', 2, '$', [3]],
  'en-au': ['en-AU', 'English (Australia)', 'English (Australia)', false, ',.', 2, '$', [3]],
  'en-bz': ['en-BZ', 'English (Belize)', 'English (Belize)', false, ',.', 2, 'BZ$', [3]],
  'en-ca': ['en-CA', 'English (Canada)', 'English (Canada)', false, ',.', 2, '$', [3]],
  'en-gb': ['en-GB', 'English (United Kingdom)', 'English (United Kingdom)', false, ',.', 2, '£', [3]],
  'en-ie': ['en-IE', 'English (Ireland)', 'English (Ireland)', false, ',.', 2, '€', [3]],
  'en-in': ['en-IN', 'English (India)', 'English (India)', false, ',.', 2, 'Rs.', [3, 2]],
  'en-jm': ['en-JM', 'English (Jamaica)', 'English (Jamaica)', false, ',.', 2, 'J$', [3]],
  'en-my': ['en-MY', 'English (Malaysia)', 'English (Malaysia)', false, ',.', 2, 'RM', [3]],
  'en-nz': ['en-NZ', 'English (New Zealand)', 'English (New Zealand)', false, ',.', 2, '$', [3]],
  'en-ph': ['en-PH', 'English (Republic of the Philippines)', 'English (Philippines)', false, ',.', 2, 'Php', [3]],
  'en-sg': ['en-SG', 'English (Singapore)', 'English (Singapore)', false, ',.', 2, '$', [3]],
  'en-tt': ['en-TT', 'English (Trinidad and Tobago)', 'English (Trinidad y Tobago)', false, ',.', 2, 'TT$', [3]],
  'en-us': ['en-US', 'English (United States)', 'English', false, ',.', 2, '$', [3]],
  'en-za': ['en-ZA', 'English (South Africa)', 'English (South Africa)', false, ' ,', 2, 'R', [3]],
  'en-zw': ['en-ZW', 'English (Zimbabwe)', 'English (Zimbabwe)', false, ',.', 2, 'Z$', [3]],
  es: ['es', 'Spanish', 'español', false, '.,', 2, '€', [3]],
  'es-ar': ['es-AR', 'Spanish (Argentina)', 'Español (Argentina)', false, '.,', 2, '$', [3]],
  'es-bo': ['es-BO', 'Spanish (Bolivia)', 'Español (Bolivia)', false, '.,', 2, '$b', [3]],
  'es-cl': ['es-CL', 'Spanish (Chile)', 'Español (Chile)', false, '.,', 2, '$', [3]],
  'es-co': ['es-CO', 'Spanish (Colombia)', 'Español (Colombia)', false, '.,', 2, '$', [3]],
  'es-cr': ['es-CR', 'Spanish (Costa Rica)', 'Español (Costa Rica)', false, '.,', 2, '₡', [3]],
  'es-do': ['es-DO', 'Spanish (Dominican Republic)', 'Español (República Dominicana)', false, ',.', 2, 'RD$', [3]],
  'es-ec': ['es-EC', 'Spanish (Ecuador)', 'Español (Ecuador)', false, '.,', 2, '$', [3]],
  'es-es': ['es-ES', 'Spanish (Spain, International Sort)', 'Español (España, alfabetización internacional)', false, '.,', 2, '€', [3]],
  'es-gt': ['es-GT', 'Spanish (Guatemala)', 'Español (Guatemala)', false, ',.', 2, 'Q', [3]],
  'es-hn': ['es-HN', 'Spanish (Honduras)', 'Español (Honduras)', false, ',.', 2, 'L.', [3]],
  'es-mx': ['es-MX', 'Spanish (Mexico)', 'Español (México)', false, ',.', 2, '$', [3]],
  'es-ni': ['es-NI', 'Spanish (Nicaragua)', 'Español (Nicaragua)', false, ',.', 2, 'C$', [3]],
  'es-pa': ['es-PA', 'Spanish (Panama)', 'Español (Panamá)', false, ',.', 2, 'B/.', [3]],
  'es-pe': ['es-PE', 'Spanish (Peru)', 'Español (Perú)', false, ',.', 2, 'S/.', [3]],
  'es-pr': ['es-PR', 'Spanish (Puerto Rico)', 'Español (Puerto Rico)', false, ',.', 2, '$', [3]],
  'es-py': ['es-PY', 'Spanish (Paraguay)', 'Español (Paraguay)', false, '.,', 2, 'Gs', [3]],
  'es-sv': ['es-SV', 'Spanish (El Salvador)', 'Español (El Salvador)', false, ',.', 2, '$', [3]],
  'es-us': ['es-US', 'Spanish (United States)', 'Español (Estados Unidos)', false, ',.', 2, '$', [3, 0]],
  'es-uy': ['es-UY', 'Spanish (Uruguay)', 'Español (Uruguay)', false, '.,', 2, '$U', [3]],
  'es-ve': ['es-VE', 'Spanish (Bolivarian Republic of Venezuela)', 'Español (Republica Bolivariana de Venezuela)', false, '.,', 2, 'Bs. F.', [3]],
  et: ['et', 'Estonian', 'eesti', false, ' .', 2, 'kr', [3]],
  'et-ee': ['et-EE', 'Estonian (Estonia)', 'eesti (Eesti)', false, ' .', 2, 'kr', [3]],
  eu: ['eu', 'Basque', 'euskara', false, '.,', 2, '€', [3]],
  'eu-es': ['eu-ES', 'Basque (Basque)', 'euskara (euskara)', false, '.,', 2, '€', [3]],
  fa: ['fa', 'Persian', 'فارسى', true, ',/', 2, 'ريال', [3]],
  'fa-ir': ['fa-IR', 'Persian', 'فارسى (ایران)', true, ',/', 2, 'ريال', [3]],
  fi: ['fi', 'Finnish', 'suomi', false, ' ,', 2, '€', [3]],
  'fi-fi': ['fi-FI', 'Finnish (Finland)', 'suomi (Suomi)', false, ' ,', 2, '€', [3]],
  fil: ['fil', 'Filipino', 'Filipino', false, ',.', 2, 'PhP', [3]],
  'fil-ph': ['fil-PH', 'Filipino (Philippines)', 'Filipino (Pilipinas)', false, ',.', 2, 'PhP', [3]],
  fo: ['fo', 'Faroese', 'føroyskt', false, '.,', 2, 'kr.', [3]],
  'fo-fo': ['fo-FO', 'Faroese (Faroe Islands)', 'føroyskt (Føroyar)', false, '.,', 2, 'kr.', [3]],
  fr: ['fr', 'French', 'Français', false, ' ,', 2, '€', [3]],
  'fr-be': ['fr-BE', 'French (Belgium)', 'Français (Belgique)', false, '.,', 2, '€', [3]],
  'fr-ca': ['fr-CA', 'French (Canada)', 'Français (Canada)', false, ' ,', 2, '$', [3]],
  'fr-ch': ['fr-CH', 'French (Switzerland)', 'Français (Suisse)', false, "'.", 2, 'fr.', [3]],
  'fr-fr': ['fr-FR', 'French (France)', 'Français (France)', false, ' ,', 2, '€', [3]],
  'fr-lu': ['fr-LU', 'French (Luxembourg)', 'Français (Luxembourg)', false, ' ,', 2, '€', [3]],
  'fr-mc': ['fr-MC', 'French (Monaco)', 'Français (Principauté de Monaco)', false, ' ,', 2, '€', [3]],
  fy: ['fy', 'Frisian', 'Frysk', false, '.,', 2, '€', [3]],
  'fy-nl': ['fy-NL', 'Frisian (Netherlands)', 'Frysk (Nederlân)', false, '.,', 2, '€', [3]],
  ga: ['ga', 'Irish', 'Gaeilge', false, ',.', 2, '€', [3]],
  'ga-ie': ['ga-IE', 'Irish (Ireland)', 'Gaeilge (Éire)', false, ',.', 2, '€', [3]],
  gd: ['gd', 'Scottish Gaelic', 'Gàidhlig', false, ',.', 2, '£', [3]],
  'gd-gb': ['gd-GB', 'Scottish Gaelic (United Kingdom)', 'Gàidhlig (An Rìoghachd Aonaichte)', false, ',.', 2, '£', [3]],
  gl: ['gl', 'Galician', 'galego', false, '.,', 2, '€', [3]],
  'gl-es': ['gl-ES', 'Galician (Galician)', 'galego (galego)', false, '.,', 2, '€', [3]],
  gsw: ['gsw', 'Alsatian', 'Elsässisch', false, ' ,', 2, '€', [3]],
  'gsw-fr': ['gsw-FR', 'Alsatian (France)', 'Elsässisch (Frànkrisch)', false, ' ,', 2, '€', [3]],
  gu: ['gu', 'Gujarati', 'ગુજરાતી', false, ',.', 2, 'રૂ', [3, 2]],
  'gu-in': ['gu-IN', 'Gujarati (India)', 'ગુજરાતી (ભારત)', false, ',.', 2, 'રૂ', [3, 2]],
  ha: ['ha', 'Hausa', 'Hausa', false, ',.', 2, 'N', [3]],
  'ha-latn': ['ha-Latn', 'Hausa (Latin)', 'Hausa', false, ',.', 2, 'N', [3]],
  'ha-latn-ng': ['ha-Latn-NG', 'Hausa (Latin, Nigeria)', 'Hausa (Nigeria)', false, ',.', 2, 'N', [3]],
  he: ['he', 'Hebrew', 'עברית', true, ',.', 2, '₪', [3]],
  'he-il': ['he-IL', 'Hebrew (Israel)', 'עברית (ישראל)', true, ',.', 2, '₪', [3]],
  hi: ['hi', 'Hindi', 'हिंदी', false, ',.', 2, 'रु', [3, 2]],
  'hi-in': ['hi-IN', 'Hindi (India)', 'हिंदी (भारत)', false, ',.', 2, 'रु', [3, 2]],
  hr: ['hr', 'Croatian', 'hrvatski', false, '.,', 2, 'kn', [3]],
  'hr-ba': ['hr-BA', 'Croatian (Latin, Bosnia and Herzegovina)', 'hrvatski (Bosna i Hercegovina)', false, '.,', 2, 'KM', [3]],
  'hr-hr': ['hr-HR', 'Croatian (Croatia)', 'hrvatski (Hrvatska)', false, '.,', 2, 'kn', [3]],
  hsb: ['hsb', 'Upper Sorbian', 'hornjoserbšćina', false, '.,', 2, '€', [3]],
  'hsb-de': ['hsb-DE', 'Upper Sorbian (Germany)', 'hornjoserbšćina (Němska)', false, '.,', 2, '€', [3]],
  hu: ['hu', 'Hungarian', 'magyar', false, ' ,', 2, 'Ft', [3]],
  'hu-hu': ['hu-HU', 'Hungarian (Hungary)', 'magyar (Magyarország)', false, ' ,', 2, 'Ft', [3]],
  hy: ['hy', 'Armenian', 'Հայերեն', false, ',.', 2, 'դր.', [3]],
  'hy-am': ['hy-AM', 'Armenian (Armenia)', 'Հայերեն (Հայաստան)', false, ',.', 2, 'դր.', [3]],
  id: ['id', 'Indonesian', 'Bahasa Indonesia', false, '.,', 2, 'Rp', [3]],
  'id-id': ['id-ID', 'Indonesian (Indonesia)', 'Bahasa Indonesia (Indonesia)', false, '.,', 2, 'Rp', [3]],
  ig: ['ig', 'Igbo', 'Igbo', false, ',.', 2, 'N', [3]],
  'ig-ng': ['ig-NG', 'Igbo (Nigeria)', 'Igbo (Nigeria)', false, ',.', 2, 'N', [3]],
  ii: ['ii', 'Yi', 'ꆈꌠꁱꂷ', false, ',.', 2, '¥', [3, 0]],
  'ii-cn': ['ii-CN', 'Yi (PRC)', 'ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)', false, ',.', 2, '¥', [3, 0]],
  is: ['is', 'Icelandic', 'íslenska', false, '.,', 2, 'kr.', [3]],
  'is-is': ['is-IS', 'Icelandic (Iceland)', 'íslenska (Ísland)', false, '.,', 2, 'kr.', [3]],
  it: ['it', 'Italian', 'italiano', false, '.,', 2, '€', [3]],
  'it-ch': ['it-CH', 'Italian (Switzerland)', 'italiano (Svizzera)', false, "'.", 2, 'fr.', [3]],
  'it-it': ['it-IT', 'Italian (Italy)', 'italiano (Italia)', false, '.,', 2, '€', [3]],
  iu: ['iu', 'Inuktitut', 'Inuktitut', false, ',.', 2, '$', [3, 0]],
  'iu-cans': ['iu-Cans', 'Inuktitut (Syllabics)', 'ᐃᓄᒃᑎᑐᑦ', false, ',.', 2, '$', [3, 0]],
  'iu-cans-ca': ['iu-Cans-CA', 'Inuktitut (Syllabics, Canada)', 'ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)', false, ',.', 2, '$', [3, 0]],
  'iu-latn': ['iu-Latn', 'Inuktitut (Latin)', 'Inuktitut', false, ',.', 2, '$', [3, 0]],
  'iu-latn-ca': ['iu-Latn-CA', 'Inuktitut (Latin, Canada)', 'Inuktitut (Kanatami)', false, ',.', 2, '$', [3, 0]],
  ja: ['ja', 'Japanese', '日本語', false, ',.', 2, '¥', [3]],
  'ja-jp': ['ja-JP', 'Japanese (Japan)', '日本語 (日本)', false, ',.', 2, '¥', [3]],
  ka: ['ka', 'Georgian', 'ქართული', false, ' ,', 2, 'Lari', [3]],
  'ka-ge': ['ka-GE', 'Georgian (Georgia)', 'ქართული (საქართველო)', false, ' ,', 2, 'Lari', [3]],
  kk: ['kk', 'Kazakh', 'Қазақ', false, ' -', 2, 'Т', [3]],
  'kk-kz': ['kk-KZ', 'Kazakh (Kazakhstan)', 'Қазақ (Қазақстан)', false, ' -', 2, 'Т', [3]],
  kl: ['kl', 'Greenlandic', 'kalaallisut', false, '.,', 2, 'kr.', [3, 0]],
  'kl-gl': ['kl-GL', 'Greenlandic (Greenland)', 'kalaallisut (Kalaallit Nunaat)', false, '.,', 2, 'kr.', [3, 0]],
  km: ['km', 'Khmer', 'ខ្មែរ', false, ',.', 2, '៛', [3, 0]],
  'km-kh': ['km-KH', 'Khmer (Cambodia)', 'ខ្មែរ (កម្ពុជា)', false, ',.', 2, '៛', [3, 0]],
  kn: ['kn', 'Kannada', 'ಕನ್ನಡ', false, ',.', 2, 'ರೂ', [3, 2]],
  'kn-in': ['kn-IN', 'Kannada (India)', 'ಕನ್ನಡ (ಭಾರತ)', false, ',.', 2, 'ರೂ', [3, 2]],
  ko: ['ko', 'Korean', '한국어', false, ',.', 2, '₩', [3]],
  'ko-kr': ['ko-KR', 'Korean (Korea)', '한국어 (대한민국)', false, ',.', 2, '₩', [3]],
  kok: ['kok', 'Konkani', 'कोंकणी', false, ',.', 2, 'रु', [3, 2]],
  'kok-in': ['kok-IN', 'Konkani (India)', 'कोंकणी (भारत)', false, ',.', 2, 'रु', [3, 2]],
  ky: ['ky', 'Kyrgyz', 'Кыргыз', false, ' -', 2, 'сом', [3]],
  'ky-kg': ['ky-KG', 'Kyrgyz (Kyrgyzstan)', 'Кыргыз (Кыргызстан)', false, ' -', 2, 'сом', [3]],
  lb: ['lb', 'Luxembourgish', 'Lëtzebuergesch', false, ' ,', 2, '€', [3]],
  'lb-lu': ['lb-LU', 'Luxembourgish (Luxembourg)', 'Lëtzebuergesch (Luxembourg)', false, ' ,', 2, '€', [3]],
  lo: ['lo', 'Lao', 'ລາວ', false, ',.', 2, '₭', [3, 0]],
  'lo-la': ['lo-LA', 'Lao (Lao P.D.R.)', 'ລາວ (ສ.ປ.ປ. ລາວ)', false, ',.', 2, '₭', [3, 0]],
  lt: ['lt', 'Lithuanian', 'lietuvių', false, '.,', 2, 'Lt', [3]],
  'lt-lt': ['lt-LT', 'Lithuanian (Lithuania)', 'lietuvių (Lietuva)', false, '.,', 2, 'Lt', [3]],
  lv: ['lv', 'Latvian', 'latviešu', false, ' ,', 2, 'Ls', [3]],
  'lv-lv': ['lv-LV', 'Latvian (Latvia)', 'latviešu (Latvija)', false, ' ,', 2, 'Ls', [3]],
  mi: ['mi', 'Maori', 'Reo Māori', false, ',.', 2, '$', [3]],
  'mi-nz': ['mi-NZ', 'Maori (New Zealand)', 'Reo Māori (Aotearoa)', false, ',.', 2, '$', [3]],
  mk: ['mk', 'Macedonian (FYROM)', 'македонски јазик', false, '.,', 2, 'ден.', [3]],
  'mk-mk': ['mk-MK', 'Macedonian (Former Yugoslav Republic of Macedonia)', 'македонски јазик (Македонија)', false, '.,', 2, 'ден.', [3]],
  ml: ['ml', 'Malayalam', 'മലയാളം', false, ',.', 2, 'ക', [3, 2]],
  'ml-in': ['ml-IN', 'Malayalam (India)', 'മലയാളം (ഭാരതം)', false, ',.', 2, 'ക', [3, 2]],
  mn: ['mn', 'Mongolian', 'Монгол хэл', false, ' ,', 2, '₮', [3]],
  'mn-cyrl': ['mn-Cyrl', 'Mongolian (Cyrillic)', 'Монгол хэл', false, ' ,', 2, '₮', [3]],
  'mn-mn': ['mn-MN', 'Mongolian (Cyrillic, Mongolia)', 'Монгол хэл (Монгол улс)', false, ' ,', 2, '₮', [3]],
  'mn-mong': ['mn-Mong', 'Mongolian (Traditional Mongolian)', 'ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ', false, ',.', 2, '¥', [3, 0]],
  'mn-mong-cn': ['mn-Mong-CN', 'Mongolian (Traditional Mongolian, PRC)', 'ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)', false, ',.', 2, '¥', [3, 0]],
  moh: ['moh', 'Mohawk', "Kanien'kéha", false, ',.', 2, '$', [3, 0]],
  'moh-ca': ['moh-CA', 'Mohawk (Mohawk)', "Kanien'kéha", false, ',.', 2, '$', [3, 0]],
  mr: ['mr', 'Marathi', 'मराठी', false, ',.', 2, 'रु', [3, 2]],
  'mr-in': ['mr-IN', 'Marathi (India)', 'मराठी (भारत)', false, ',.', 2, 'रु', [3, 2]],
  ms: ['ms', 'Malay', 'Bahasa Melayu', false, ',.', 2, 'RM', [3]],
  'ms-bn': ['ms-BN', 'Malay (Brunei Darussalam)', 'Bahasa Melayu (Brunei Darussalam)', false, '.,', 2, '$', [3]],
  'ms-my': ['ms-MY', 'Malay (Malaysia)', 'Bahasa Melayu (Malaysia)', false, ',.', 2, 'RM', [3]],
  mt: ['mt', 'Maltese', 'Malti', false, ',.', 2, '€', [3]],
  'mt-mt': ['mt-MT', 'Maltese (Malta)', 'Malti (Malta)', false, ',.', 2, '€', [3]],
  nb: ['nb', 'Norwegian (Bokmål)', 'norsk (bokmål)', false, ' ,', 2, 'kr', [3]],
  'nb-no': ['nb-NO', 'Norwegian, Bokmål (Norway)', 'norsk, bokmål (Norge)', false, ' ,', 2, 'kr', [3]],
  ne: ['ne', 'Nepali', 'नेपाली', false, ',.', 2, 'रु', [3, 2]],
  'ne-np': ['ne-NP', 'Nepali (Nepal)', 'नेपाली (नेपाल)', false, ',.', 2, 'रु', [3, 2]],
  nl: ['nl', 'Dutch', 'Nederlands', false, '.,', 2, '€', [3]],
  'nl-be': ['nl-BE', 'Dutch (Belgium)', 'Nederlands (België)', false, '.,', 2, '€', [3]],
  'nl-nl': ['nl-NL', 'Dutch (Netherlands)', 'Nederlands (Nederland)', false, '.,', 2, '€', [3]],
  nn: ['nn', 'Norwegian (Nynorsk)', 'norsk (nynorsk)', false, ' ,', 2, 'kr', [3]],
  'nn-no': ['nn-NO', 'Norwegian, Nynorsk (Norway)', 'norsk, nynorsk (Noreg)', false, ' ,', 2, 'kr', [3]],
  no: ['no', 'Norwegian', 'norsk', false, ' ,', 2, 'kr', [3]],
  nso: ['nso', 'Sesotho sa Leboa', 'Sesotho sa Leboa', false, ',.', 2, 'R', [3]],
  'nso-za': ['nso-ZA', 'Sesotho sa Leboa (South Africa)', 'Sesotho sa Leboa (Afrika Borwa)', false, ',.', 2, 'R', [3]],
  oc: ['oc', 'Occitan', 'Occitan', false, ' ,', 2, '€', [3]],
  'oc-fr': ['oc-FR', 'Occitan (France)', 'Occitan (França)', false, ' ,', 2, '€', [3]],
  or: ['or', 'Oriya', 'ଓଡ଼ିଆ', false, ',.', 2, 'ଟ', [3, 2]],
  'or-in': ['or-IN', 'Oriya (India)', 'ଓଡ଼ିଆ (ଭାରତ)', false, ',.', 2, 'ଟ', [3, 2]],
  pa: ['pa', 'Punjabi', 'ਪੰਜਾਬੀ', false, ',.', 2, 'ਰੁ', [3, 2]],
  'pa-in': ['pa-IN', 'Punjabi (India)', 'ਪੰਜਾਬੀ (ਭਾਰਤ)', false, ',.', 2, 'ਰੁ', [3, 2]],
  pl: ['pl', 'Polish', 'polski', false, ' ,', 2, 'zł', [3]],
  'pl-pl': ['pl-PL', 'Polish (Poland)', 'polski (Polska)', false, ' ,', 2, 'zł', [3]],
  prs: ['prs', 'Dari', 'درى', true, ',.', 2, '؋', [3]],
  'prs-af': ['prs-AF', 'Dari (Afghanistan)', 'درى (افغانستان)', true, ',.', 2, '؋', [3]],
  ps: ['ps', 'Pashto', 'پښتو', true, '٬٫', 2, '؋', [3]],
  'ps-af': ['ps-AF', 'Pashto (Afghanistan)', 'پښتو (افغانستان)', true, '٬٫', 2, '؋', [3]],
  pt: ['pt', 'Portuguese', 'Português', false, '.,', 2, 'R$', [3]],
  'pt-br': ['pt-BR', 'Portuguese (Brazil)', 'Português (Brasil)', false, '.,', 2, 'R$', [3]],
  'pt-pt': ['pt-PT', 'Portuguese (Portugal)', 'português (Portugal)', false, '.,', 2, '€', [3]],
  qut: ['qut', "K'iche", "K'iche", false, ',.', 2, 'Q', [3]],
  'qut-gt': ['qut-GT', "K'iche (Guatemala)", "K'iche (Guatemala)", false, ',.', 2, 'Q', [3]],
  quz: ['quz', 'Quechua', 'runasimi', false, '.,', 2, '$b', [3]],
  'quz-bo': ['quz-BO', 'Quechua (Bolivia)', 'runasimi (Qullasuyu)', false, '.,', 2, '$b', [3]],
  'quz-ec': ['quz-EC', 'Quechua (Ecuador)', 'runasimi (Ecuador)', false, '.,', 2, '$', [3]],
  'quz-pe': ['quz-PE', 'Quechua (Peru)', 'runasimi (Piruw)', false, ',.', 2, 'S/.', [3]],
  rm: ['rm', 'Romansh', 'Rumantsch', false, "'.", 2, 'fr.', [3]],
  'rm-ch': ['rm-CH', 'Romansh (Switzerland)', 'Rumantsch (Svizra)', false, "'.", 2, 'fr.', [3]],
  ro: ['ro', 'Romanian', 'română', false, '.,', 2, 'lei', [3]],
  'ro-ro': ['ro-RO', 'Romanian (Romania)', 'română (România)', false, '.,', 2, 'lei', [3]],
  ru: ['ru', 'Russian', 'русский', false, ' ,', 2, 'р.', [3]],
  'ru-ru': ['ru-RU', 'Russian (Russia)', 'русский (Россия)', false, ' ,', 2, 'р.', [3]],
  rw: ['rw', 'Kinyarwanda', 'Kinyarwanda', false, ' ,', 2, 'RWF', [3]],
  'rw-rw': ['rw-RW', 'Kinyarwanda (Rwanda)', 'Kinyarwanda (Rwanda)', false, ' ,', 2, 'RWF', [3]],
  sa: ['sa', 'Sanskrit', 'संस्कृत', false, ',.', 2, 'रु', [3, 2]],
  'sa-in': ['sa-IN', 'Sanskrit (India)', 'संस्कृत (भारतम्)', false, ',.', 2, 'रु', [3, 2]],
  sah: ['sah', 'Yakut', 'саха', false, ' ,', 2, 'с.', [3]],
  'sah-ru': ['sah-RU', 'Yakut (Russia)', 'саха (Россия)', false, ' ,', 2, 'с.', [3]],
  se: ['se', 'Sami (Northern)', 'davvisámegiella', false, ' ,', 2, 'kr', [3]],
  'se-fi': ['se-FI', 'Sami, Northern (Finland)', 'davvisámegiella (Suopma)', false, ' ,', 2, '€', [3]],
  'se-no': ['se-NO', 'Sami, Northern (Norway)', 'davvisámegiella (Norga)', false, ' ,', 2, 'kr', [3]],
  'se-se': ['se-SE', 'Sami, Northern (Sweden)', 'davvisámegiella (Ruoŧŧa)', false, '.,', 2, 'kr', [3]],
  si: ['si', 'Sinhala', 'සිංහල', false, ',.', 2, 'රු.', [3, 2]],
  'si-lk': ['si-LK', 'Sinhala (Sri Lanka)', 'සිංහල (ශ්‍රී ලංකා)', false, ',.', 2, 'රු.', [3, 2]],
  sk: ['sk', 'Slovak', 'slovenčina', false, ' ,', 2, '€', [3]],
  'sk-sk': ['sk-SK', 'Slovak (Slovakia)', 'slovenčina (Slovenská republika)', false, ' ,', 2, '€', [3]],
  sl: ['sl', 'Slovenian', 'slovenski', false, '.,', 2, '€', [3]],
  'sl-si': ['sl-SI', 'Slovenian (Slovenia)', 'slovenski (Slovenija)', false, '.,', 2, '€', [3]],
  sma: ['sma', 'Sami (Southern)', 'åarjelsaemiengiele', false, '.,', 2, 'kr', [3]],
  'sma-no': ['sma-NO', 'Sami, Southern (Norway)', 'åarjelsaemiengiele (Nöörje)', false, ' ,', 2, 'kr', [3]],
  'sma-se': ['sma-SE', 'Sami, Southern (Sweden)', 'åarjelsaemiengiele (Sveerje)', false, '.,', 2, 'kr', [3]],
  smj: ['smj', 'Sami (Lule)', 'julevusámegiella', false, '.,', 2, 'kr', [3]],
  'smj-no': ['smj-NO', 'Sami, Lule (Norway)', 'julevusámegiella (Vuodna)', false, ' ,', 2, 'kr', [3]],
  'smj-se': ['smj-SE', 'Sami, Lule (Sweden)', 'julevusámegiella (Svierik)', false, '.,', 2, 'kr', [3]],
  smn: ['smn', 'Sami (Inari)', 'sämikielâ', false, ' ,', 2, '€', [3]],
  'smn-fi': ['smn-FI', 'Sami, Inari (Finland)', 'sämikielâ (Suomâ)', false, ' ,', 2, '€', [3]],
  sms: ['sms', 'Sami (Skolt)', 'sääm´ǩiõll', false, ' ,', 2, '€', [3]],
  'sms-fi': ['sms-FI', 'Sami, Skolt (Finland)', 'sääm´ǩiõll (Lää´ddjânnam)', false, ' ,', 2, '€', [3]],
  sq: ['sq', 'Albanian', 'shqipe', false, '.,', 2, 'Lek', [3]],
  'sq-al': ['sq-AL', 'Albanian (Albania)', 'shqipe (Shqipëria)', false, '.,', 2, 'Lek', [3]],
  sr: ['sr', 'Serbian', 'srpski', false, '.,', 2, 'Din.', [3]],
  'sr-cyrl': ['sr-Cyrl', 'Serbian (Cyrillic)', 'српски', false, '.,', 2, 'Дин.', [3]],
  'sr-cyrl-ba': ['sr-Cyrl-BA', 'Serbian (Cyrillic, Bosnia and Herzegovina)', 'српски (Босна и Херцеговина)', false, '.,', 2, 'КМ', [3]],
  'sr-cyrl-cs': ['sr-Cyrl-CS', 'Serbian (Cyrillic, Serbia and Montenegro (Former))', 'српски (Србија и Црна Гора (Претходно))', false, '.,', 2, 'Дин.', [3]],
  'sr-cyrl-me': ['sr-Cyrl-ME', 'Serbian (Cyrillic, Montenegro)', 'српски (Црна Гора)', false, '.,', 2, '€', [3]],
  'sr-cyrl-rs': ['sr-Cyrl-RS', 'Serbian (Cyrillic, Serbia)', 'српски (Србија)', false, '.,', 2, 'Дин.', [3]],
  'sr-latn': ['sr-Latn', 'Serbian (Latin)', 'srpski', false, '.,', 2, 'Din.', [3]],
  'sr-latn-ba': ['sr-Latn-BA', 'Serbian (Latin, Bosnia and Herzegovina)', 'srpski (Bosna i Hercegovina)', false, '.,', 2, 'KM', [3]],
  'sr-latn-cs': ['sr-Latn-CS', 'Serbian (Latin, Serbia and Montenegro (Former))', 'srpski (Srbija i Crna Gora (Prethodno))', false, '.,', 2, 'Din.', [3]],
  'sr-latn-me': ['sr-Latn-ME', 'Serbian (Latin, Montenegro)', 'srpski (Crna Gora)', false, '.,', 2, '€', [3]],
  'sr-latn-rs': ['sr-Latn-RS', 'Serbian (Latin, Serbia)', 'srpski (Srbija)', false, '.,', 2, 'Din.', [3]],
  sv: ['sv', 'Swedish', 'svenska', false, '.,', 2, 'kr', [3]],
  'sv-fi': ['sv-FI', 'Swedish (Finland)', 'svenska (Finland)', false, ' ,', 2, '€', [3]],
  'sv-se': ['sv-SE', 'Swedish (Sweden)', 'svenska (Sverige)', false, '.,', 2, 'kr', [3]],
  sw: ['sw', 'Kiswahili', 'Kiswahili', false, ',.', 2, 'S', [3]],
  'sw-ke': ['sw-KE', 'Kiswahili (Kenya)', 'Kiswahili (Kenya)', false, ',.', 2, 'S', [3]],
  syr: ['syr', 'Syriac', 'ܣܘܪܝܝܐ', true, ',.', 2, 'ل.س.‏', [3]],
  'syr-sy': ['syr-SY', 'Syriac (Syria)', 'ܣܘܪܝܝܐ (سوريا)', true, ',.', 2, 'ل.س.‏', [3]],
  ta: ['ta', 'Tamil', 'தமிழ்', false, ',.', 2, 'ரூ', [3, 2]],
  'ta-in': ['ta-IN', 'Tamil (India)', 'தமிழ் (இந்தியா)', false, ',.', 2, 'ரூ', [3, 2]],
  te: ['te', 'Telugu', 'తెలుగు', false, ',.', 2, 'రూ', [3, 2]],
  'te-in': ['te-IN', 'Telugu (India)', 'తెలుగు (భారత దేశం)', false, ',.', 2, 'రూ', [3, 2]],
  tg: ['tg', 'Tajik', 'Тоҷикӣ', false, ' ;', 2, 'т.р.', [3, 0]],
  'tg-cyrl': ['tg-Cyrl', 'Tajik (Cyrillic)', 'Тоҷикӣ', false, ' ;', 2, 'т.р.', [3, 0]],
  'tg-cyrl-tj': ['tg-Cyrl-TJ', 'Tajik (Cyrillic, Tajikistan)', 'Тоҷикӣ (Тоҷикистон)', false, ' ;', 2, 'т.р.', [3, 0]],
  th: ['th', 'Thai', 'ไทย', false, ',.', 2, '฿', [3]],
  'th-th': ['th-TH', 'Thai (Thailand)', 'ไทย (ไทย)', false, ',.', 2, '฿', [3]],
  tk: ['tk', 'Turkmen', 'türkmençe', false, ' ,', 2, 'm.', [3]],
  'tk-tm': ['tk-TM', 'Turkmen (Turkmenistan)', 'türkmençe (Türkmenistan)', false, ' ,', 2, 'm.', [3]],
  tn: ['tn', 'Setswana', 'Setswana', false, ',.', 2, 'R', [3]],
  'tn-za': ['tn-ZA', 'Setswana (South Africa)', 'Setswana (Aforika Borwa)', false, ',.', 2, 'R', [3]],
  tr: ['tr', 'Turkish', 'Türkçe', false, '.,', 2, 'TL', [3]],
  'tr-tr': ['tr-TR', 'Turkish (Turkey)', 'Türkçe (Türkiye)', false, '.,', 2, 'TL', [3]],
  tt: ['tt', 'Tatar', 'Татар', false, ' ,', 2, 'р.', [3]],
  'tt-ru': ['tt-RU', 'Tatar (Russia)', 'Татар (Россия)', false, ' ,', 2, 'р.', [3]],
  tzm: ['tzm', 'Tamazight', 'Tamazight', false, ',.', 2, 'DZD', [3]],
  'tzm-latn': ['tzm-Latn', 'Tamazight (Latin)', 'Tamazight', false, ',.', 2, 'DZD', [3]],
  'tzm-latn-dz': ['tzm-Latn-DZ', 'Tamazight (Latin, Algeria)', 'Tamazight (Djazaïr)', false, ',.', 2, 'DZD', [3]],
  ua: ['ua', 'Ukrainian', 'українська', false, ' ,', 2, '₴', [3]],
  ug: ['ug', 'Uyghur', 'ئۇيغۇرچە', true, ',.', 2, '¥', [3]],
  'ug-cn': ['ug-CN', 'Uyghur (PRC)', 'ئۇيغۇرچە (جۇڭخۇا خەلق جۇمھۇرىيىتى)', true, ',.', 2, '¥', [3]],
  uk: ['uk', 'Ukrainian', 'українська', false, ' ,', 2, '₴', [3]],
  'uk-ua': ['uk-UA', 'Ukrainian (Ukraine)', 'українська (Україна)', false, ' ,', 2, '₴', [3]],
  ur: ['ur', 'Urdu', 'اُردو', true, ',.', 2, 'Rs', [3]],
  'ur-pk': ['ur-PK', 'Urdu (Islamic Republic of Pakistan)', 'اُردو (پاکستان)', true, ',.', 2, 'Rs', [3]],
  uz: ['uz', 'Uzbek', "U'zbek", false, ' ,', 2, "so'm", [3]],
  'uz-cyrl': ['uz-Cyrl', 'Uzbek (Cyrillic)', 'Ўзбек', false, ' ,', 2, 'сўм', [3]],
  'uz-cyrl-uz': ['uz-Cyrl-UZ', 'Uzbek (Cyrillic, Uzbekistan)', 'Ўзбек (Ўзбекистон)', false, ' ,', 2, 'сўм', [3]],
  'uz-latn': ['uz-Latn', 'Uzbek (Latin)', "U'zbek", false, ' ,', 2, "so'm", [3]],
  'uz-latn-uz': ['uz-Latn-UZ', 'Uzbek (Latin, Uzbekistan)', "U'zbek (U'zbekiston Respublikasi)", false, ' ,', 2, "so'm", [3]],
  vi: ['vi', 'Vietnamese', 'Tiếng Việt', false, '.,', 2, '₫', [3]],
  'vi-vn': ['vi-VN', 'Vietnamese (Vietnam)', 'Tiếng Việt (Việt Nam)', false, '.,', 2, '₫', [3]],
  wo: ['wo', 'Wolof', 'Wolof', false, ' ,', 2, 'XOF', [3]],
  'wo-sn': ['wo-SN', 'Wolof (Senegal)', 'Wolof (Sénégal)', false, ' ,', 2, 'XOF', [3]],
  xh: ['xh', 'isiXhosa', 'isiXhosa', false, ',.', 2, 'R', [3]],
  'xh-za': ['xh-ZA', 'isiXhosa (South Africa)', 'isiXhosa (uMzantsi Afrika)', false, ',.', 2, 'R', [3]],
  yo: ['yo', 'Yoruba', 'Yoruba', false, ',.', 2, 'N', [3]],
  'yo-ng': ['yo-NG', 'Yoruba (Nigeria)', 'Yoruba (Nigeria)', false, ',.', 2, 'N', [3]],
  zh: ['zh', 'Chinese', '中文', false, ',.', 2, '¥', [3]],
  'zh-chs': ['zh-CHS', 'Chinese (Simplified) Legacy', '中文(简体) 旧版', false, ',.', 2, '¥', [3]],
  'zh-cht': ['zh-CHT', 'Chinese (Traditional) Legacy', '中文(繁體) 舊版', false, ',.', 2, 'HK$', [3]],
  'zh-cn': ['zh-CN', 'Chinese (Simplified, PRC)', '中文(中华人民共和国)', false, ',.', 2, '¥', [3]],
  'zh-hans': ['zh-Hans', 'Chinese (Simplified)', '中文(简体)', false, ',.', 2, '¥', [3]],
  'zh-hant': ['zh-Hant', 'Chinese (Traditional)', '中文(繁體)', false, ',.', 2, 'HK$', [3]],
  'zh-hk': ['zh-HK', 'Chinese (Traditional, Hong Kong S.A.R.)', '中文(香港特別行政區)', false, ',.', 2, 'HK$', [3]],
  'zh-mo': ['zh-MO', 'Chinese (Traditional, Macao S.A.R.)', '中文(澳門特別行政區)', false, ',.', 2, 'MOP', [3]],
  'zh-sg': ['zh-SG', 'Chinese (Simplified, Singapore)', '中文(新加坡)', false, ',.', 2, '$', [3]],
  'zh-tw': ['zh-TW', 'Chinese (Traditional, Taiwan)', '中文(台灣)', false, ',.', 2, 'NT$', [3]],
  zu: ['zu', 'isiZulu', 'isiZulu', false, ',.', 2, 'R', [3]],
  'zu-za': ['zu-ZA', 'isiZulu (South Africa)', 'isiZulu (iNingizimu Afrika)', false, ',.', 2, 'R', [3]],
};

export const CURRENCIES: Record<string, string[]> = {
  AD: ['EUR'],
  AE: ['AED'],
  AF: ['AFN'],
  AG: ['XCD'],
  AI: ['XCD'],
  AL: ['ALL'],
  AM: ['AMD'],
  AO: ['AOA'],
  AR: ['ARS'],
  AS: ['USD'],
  AT: ['EUR'],
  AU: ['AUD'],
  AW: ['AWG'],
  AX: ['EUR'],
  AZ: ['AZN'],
  BA: ['BAM'],
  BB: ['BBD'],
  BD: ['BDT'],
  BE: ['EUR'],
  BF: ['XOF'],
  BG: ['BGN'],
  BH: ['BHD'],
  BI: ['BIF'],
  BJ: ['XOF'],
  BL: ['EUR'],
  BM: ['BMD'],
  BN: ['BND'],
  BO: ['BOB', 'BOV'],
  BR: ['BRL'],
  BS: ['BSD'],
  BT: ['BTN', 'INR'],
  BV: ['NOK'],
  BW: ['BWP'],
  BY: ['BYR'],
  BZ: ['BZD'],
  CA: ['CAD'],
  CC: ['AUD'],
  CD: ['CDF'],
  CF: ['XAF'],
  CG: ['XAF'],
  CH: ['CHE', 'CHF', 'CHW'],
  CI: ['XOF'],
  CK: ['NZD'],
  CL: ['CLF', 'CLP'],
  CM: ['XAF'],
  CN: ['CNY'],
  CO: ['COP'],
  CR: ['CRC'],
  CU: ['CUC', 'CUP'],
  CV: ['CVE'],
  CW: ['ANG'],
  CX: ['AUD'],
  CY: ['EUR'],
  CZ: ['CZK'],
  DE: ['EUR'],
  DJ: ['DJF'],
  DK: ['DKK'],
  DM: ['XCD'],
  DO: ['DOP'],
  DZ: ['DZD'],
  EC: ['USD'],
  EE: ['EUR'],
  EG: ['EGP'],
  EH: ['MAD', 'DZD', 'MRO'],
  ER: ['ERN'],
  ES: ['EUR'],
  ET: ['ETB'],
  FI: ['EUR'],
  FJ: ['FJD'],
  FK: ['FKP'],
  FM: ['USD'],
  FO: ['DKK'],
  FR: ['EUR'],
  GA: ['XAF'],
  GB: ['GBP'],
  GD: ['XCD'],
  GE: ['GEL'],
  GF: ['EUR'],
  GG: ['GBP'],
  GH: ['GHS'],
  GI: ['GIP'],
  GL: ['DKK'],
  GM: ['GMD'],
  GN: ['GNF'],
  GP: ['EUR'],
  GQ: ['XAF'],
  GR: ['EUR'],
  GS: ['GBP'],
  GT: ['GTQ'],
  GU: ['USD'],
  GW: ['XOF'],
  GY: ['GYD'],
  HK: ['HKD'],
  HM: ['AUD'],
  HN: ['HNL'],
  HR: ['HRK'],
  HT: ['HTG', 'USD'],
  HU: ['HUF'],
  ID: ['IDR'],
  IE: ['EUR'],
  IL: ['ILS'],
  IM: ['GBP'],
  IN: ['INR'],
  IO: ['USD'],
  IQ: ['IQD'],
  IR: ['IRR'],
  IS: ['ISK'],
  IT: ['EUR'],
  JE: ['GBP'],
  JM: ['JMD'],
  JO: ['JOD'],
  JP: ['JPY'],
  KE: ['KES'],
  KG: ['KGS'],
  KH: ['KHR'],
  KI: ['AUD'],
  KM: ['KMF'],
  KN: ['XCD'],
  KP: ['KPW'],
  KR: ['KRW'],
  KW: ['KWD'],
  KY: ['KYD'],
  KZ: ['KZT'],
  LA: ['LAK'],
  LB: ['LBP'],
  LC: ['XCD'],
  LI: ['CHF'],
  LK: ['LKR'],
  LR: ['LRD'],
  LS: ['LSL', 'ZAR'],
  LT: ['EUR'],
  LU: ['EUR'],
  LV: ['EUR'],
  LY: ['LYD'],
  MA: ['MAD'],
  MC: ['EUR'],
  MD: ['MDL'],
  ME: ['EUR'],
  MF: ['EUR'],
  MG: ['MGA'],
  MH: ['USD'],
  MK: ['MKD'],
  ML: ['XOF'],
  MM: ['MMK'],
  MN: ['MNT'],
  MO: ['MOP'],
  MP: ['USD'],
  MQ: ['EUR'],
  MR: ['MRO'],
  MS: ['XCD'],
  MT: ['EUR'],
  MU: ['MUR'],
  MV: ['MVR'],
  MW: ['MWK'],
  MX: ['MXN'],
  MY: ['MYR'],
  MZ: ['MZN'],
  NA: ['NAD', 'ZAR'],
  NC: ['XPF'],
  NE: ['XOF'],
  NF: ['AUD'],
  NG: ['NGN'],
  NI: ['NIO'],
  NL: ['EUR'],
  NO: ['NOK'],
  NP: ['NPR'],
  NR: ['AUD'],
  NU: ['NZD'],
  NZ: ['NZD'],
  OM: ['OMR'],
  PA: ['PAB', 'USD'],
  PE: ['PEN'],
  PF: ['XPF'],
  PG: ['PGK'],
  PH: ['PHP'],
  PK: ['PKR'],
  PL: ['PLN'],
  PM: ['EUR'],
  PN: ['NZD'],
  PR: ['USD'],
  PS: ['ILS'],
  PT: ['EUR'],
  PW: ['USD'],
  PY: ['PYG'],
  QA: ['QAR'],
  RE: ['EUR'],
  RO: ['RON'],
  RS: ['RSD'],
  RU: ['RUB'],
  RW: ['RWF'],
  SA: ['SAR'],
  SB: ['SBD'],
  SC: ['SCR'],
  SD: ['SDG'],
  SE: ['SEK'],
  SG: ['SGD'],
  SI: ['EUR'],
  SJ: ['NOK'],
  SK: ['EUR'],
  SL: ['SLL'],
  SM: ['EUR'],
  SN: ['XOF'],
  SO: ['SOS'],
  SR: ['SRD'],
  SS: ['SSP'],
  ST: ['STD'],
  SV: ['SVC', 'USD'],
  SX: ['ANG'],
  SY: ['SYP'],
  SZ: ['SZL'],
  TC: ['USD'],
  TD: ['XAF'],
  TF: ['EUR'],
  TG: ['XOF'],
  TH: ['THB'],
  TJ: ['TJS'],
  TK: ['NZD'],
  TL: ['USD'],
  TM: ['TMT'],
  TN: ['TND'],
  TO: ['TOP'],
  TR: ['TRY'],
  TT: ['TTD'],
  TV: ['AUD'],
  TW: ['TWD'],
  TZ: ['TZS'],
  UA: ['UAH'],
  UG: ['UGX'],
  UM: ['USD'],
  US: ['USD', 'USN', 'USS'],
  UY: ['UYI', 'UYU'],
  UZ: ['UZS'],
  VA: ['EUR'],
  VC: ['XCD'],
  VE: ['VEF'],
  VG: ['USD'],
  VI: ['USD'],
  VN: ['VND'],
  VU: ['VUV'],
  WF: ['XPF'],
  WS: ['WST'],
  XK: ['EUR'],
  YE: ['YER'],
  YT: ['EUR'],
  ZA: ['ZAR'],
  ZM: ['ZMW'],
  ZW: ['ZWL'],
};

export const SYMBOLS: Record<string, string> = {
  AED: 'د.إ;',
  AFN: 'Afs',
  ALL: 'L',
  AMD: 'AMD',
  ANG: 'NAƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: 'AZN',
  BAM: 'KM',
  BBD: 'Bds$',
  BDT: '৳',
  BGN: 'BGN',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: 'BD$',
  BND: 'B$',
  BOB: 'Bs.',
  BRL: 'R$',
  BSD: 'B$',
  BTN: 'Nu.',
  BWP: 'P',
  BYR: 'Br',
  BZD: 'BZ$',
  CAD: '$',
  CDF: 'F',
  CHF: 'Fr.',
  CLP: '$',
  CNY: '¥',
  COP: 'Col$',
  CRC: '₡',
  CUC: '$',
  CVE: 'Esc',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'Kr',
  DOP: 'RD$',
  DZD: 'د.ج',
  EEK: 'KR',
  EGP: '£',
  ERN: 'Nfa',
  ETB: 'Br',
  EUR: '€',
  FJD: 'FJ$',
  FKP: '£',
  GBP: '£',
  GEL: 'GEL',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GQE: 'CFA',
  GTQ: 'Q',
  GYD: 'GY$',
  HKD: 'HK$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  INR: '₹',
  IQD: 'د.ع',
  IRR: 'IRR',
  ISK: 'kr',
  JMD: 'J$',
  JOD: 'JOD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'сом',
  KHR: '៛',
  KMF: 'KMF',
  KPW: 'W',
  KRW: 'W',
  KWD: 'KWD',
  KYD: 'KY$',
  KZT: 'T',
  LAK: 'KN',
  LBP: '£',
  LKR: 'Rs',
  LRD: 'L$',
  LSL: 'M',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'MDL',
  MGA: 'FMG',
  MKD: 'MKD',
  MMK: 'K',
  MNT: '₮',
  MOP: 'P',
  MRO: 'UM',
  MUR: 'Rs',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: '$',
  MYR: 'RM',
  MZM: 'MTn',
  NAD: 'N$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: 'NRs',
  NZD: 'NZ$',
  OMR: 'OMR',
  PAB: 'B./',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: 'Rs.',
  PLN: 'zł',
  PYG: '₲',
  QAR: 'QR',
  RON: 'L',
  RSD: 'din.',
  RUB: 'R',
  SAR: 'SR',
  SBD: 'SI$',
  SCR: 'SR',
  SDG: 'SDG',
  SEK: 'kr',
  SGD: 'S$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'Sh.',
  SRD: '$',
  SYP: 'LS',
  SZL: 'E',
  THB: '฿',
  TJS: 'TJS',
  TMT: 'm',
  TND: 'DT',
  TRY: 'TRY',
  TTD: 'TT$',
  TWD: 'NT$',
  TZS: 'TZS',
  UAH: 'UAH',
  UGX: 'USh',
  USD: '$',
  UYU: '$U',
  UZS: 'UZS',
  VEB: 'Bs',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'CFA',
  XCD: 'EC$',
  XDR: 'SDR',
  XOF: 'CFA',
  XPF: 'F',
  YER: 'YER',
  ZAR: 'R',
  ZMK: 'ZK',
  ZWR: 'Z$',
};
