CREATE DATABASE countries_sundries_db;

USE countries_sundries_db;

CREATE TABLE Region(
    id_region INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE Sub_Region(
    id_sub_region INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_region INT NOT NULL,
    FOREIGN KEY(id_region) REFERENCES Region(id_region)
);

CREATE TABLE Date_Format(
    id_date_format INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    format VARCHAR(30) NOT NULL
);

CREATE TABLE Currency(
    id_currency INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    abbr VARCHAR(20) NOT NULL,
    name VARCHAR(40) NOT NULL,
    symbol VARCHAR(2) NOT NULL
);

CREATE TABLE Country(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    official_name VARCHAR(60) NOT NULL,
    abbr VARCHAR(3) NOT NULL,
    internet_tld VARCHAR(20) NOT NULL,
    coat VARCHAR(50) NOT NULL,
    flag VARCHAR(255) NOT NULL,
    motto VARCHAR(30),
    anthem VARCHAR(50),
    capital VARCHAR(40) NOT NULL,
    official_language VARCHAR(30) NOT NULL,
    population INT NOT NULL,
    iso_3166_1_alpha_2 VARCHAR(5) NOT NULL,
    iso_3166_1_alpha_3 VARCHAR(5) NOT NULL,
    calling_code VARCHAR(5) NOT NULL,
    timezone VARCHAR(10) NOT NULL,
    id_currency INT NOT NULL,
    id_date_format INT NOT NULL,
    id_region INT NOT NULL,
    id_sub_region INT NOT NULL,
    FOREIGN KEY(id_currency) REFERENCES Currency(id_currency),
    FOREIGN KEY(id_date_format) REFERENCES Date_Format(id_date_format),
    FOREIGN KEY(id_region) REFERENCES Region(id_region),
    FOREIGN KEY(id_sub_region) REFERENCES Sub_Region(id_sub_region)
);



/* Region inserts */
INSERT INTO Region(name) VALUES('America');
INSERT INTO Region(name) VALUES('Asia');
INSERT INTO Region(name) VALUES('Africa');
INSERT INTO Region(name) VALUES('Europe');
INSERT INTO Region(name) VALUES('Oceania');
INSERT INTO Region(name) VALUES('Antartica');



/* Sub_Region inserts */
INSERT INTO Sub_Region(name, id_region) VALUES('South America', 1);
INSERT INTO Sub_Region(name, id_region) VALUES('Caribbean', 1);
INSERT INTO Sub_Region(name, id_region) VALUES('Central America', 1);
INSERT INTO Sub_Region(name, id_region) VALUES('Northern America', 1);

INSERT INTO Sub_Region(name, id_region) VALUES('Central Asia', 2);
INSERT INTO Sub_Region(name, id_region) VALUES('Eastern Asia', 2);
INSERT INTO Sub_Region(name, id_region) VALUES('South-eastern Asia', 2);
INSERT INTO Sub_Region(name, id_region) VALUES('Sourthern Asia', 2);
INSERT INTO Sub_Region(name, id_region) VALUES('Western Asia', 2);

INSERT INTO Sub_Region(name, id_region) VALUES('Northern Africa', 3);
INSERT INTO Sub_Region(name, id_region) VALUES('Eastern Africa', 3);
INSERT INTO Sub_Region(name, id_region) VALUES('Middle Africa', 3);
INSERT INTO Sub_Region(name, id_region) VALUES('Southern Africa', 3);
INSERT INTO Sub_Region(name, id_region) VALUES('Western Africa', 3);

INSERT INTO Sub_Region(name, id_region) VALUES('Eastern Europe', 4);
INSERT INTO Sub_Region(name, id_region) VALUES('Northern Europe', 4);
INSERT INTO Sub_Region(name, id_region) VALUES('Southern Europe', 4);
INSERT INTO Sub_Region(name, id_region) VALUES('Western Europe', 4);

INSERT INTO Sub_Region(name, id_region) VALUES('Australia and New Zealand', 5);
INSERT INTO Sub_Region(name, id_region) VALUES('Melanesia', 5);
INSERT INTO Sub_Region(name, id_region) VALUES('Micronesia', 5);
INSERT INTO Sub_Region(name, id_region) VALUES('Polynesia', 5);

INSERT INTO Sub_Region(name, id_region) VALUES('North-east Antarctic Peninsula', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('South Orkney Islands', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('North-west Antarctic Peninsula', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('Enderby Land', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('Dronning Maud Land', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('East Antarctica', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('North Victoria Land', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('South Victoria Land', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('Transantarctic Mountains', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('Ellsworth Mountains', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('Marie Byrd Land', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('Adélie Land', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('Ellsworth Land', 6);
INSERT INTO Sub_Region(name, id_region) VALUES('South Antarctic Peninsula.', 6);



/* Date_Format inserts */
INSERT INTO Date_Format(format) VALUES('dd/mm/yyyy');
INSERT INTO Date_Format(format) VALUES('yyyy/mm/dd');
INSERT INTO Date_Format(format) VALUES('mm/dd/yyyy');



/* Currency inserts */
INSERT INTO Currency(abbr, name, symbol) VALUES('ARS', 'Argentine Peso', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('AFN', 'Afghan Afghani', '؋');
INSERT INTO Currency(abbr, name, symbol) VALUES('ALL', 'Albanian Lek', 'Lek');
INSERT INTO Currency(abbr, name, symbol) VALUES('DZD', 'Algerian Dinar', 'DA');
INSERT INTO Currency(abbr, name, symbol) VALUES('USD', 'US Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('AOA', 'Angolan Kwanza', 'Kz');
INSERT INTO Currency(abbr, name, symbol) VALUES('AMD', 'Armenian Dram', '֏');
INSERT INTO Currency(abbr, name, symbol) VALUES('AUD', 'Australian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('AZN', 'Azerbaijan Manat', '₼');
INSERT INTO Currency(abbr, name, symbol) VALUES('BHD', 'Bahraini Dinar', 'BD');
INSERT INTO Currency(abbr, name, symbol) VALUES('BDT', 'Bangladeshi Taka', 'Tk');
INSERT INTO Currency(abbr, name, symbol) VALUES('BBD', 'Bajan Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('BYN', 'Belarusian Ruble', 'p.');
INSERT INTO Currency(abbr, name, symbol) VALUES('BZD', 'Belizean Dollar', 'BZ$');
INSERT INTO Currency(abbr, name, symbol) VALUES('BTN', 'Bhutanese Ngultrum', 'Ngultrum');
INSERT INTO Currency(abbr, name, symbol) VALUES('BOB', 'Bolivian Bolíviano', '$b');
INSERT INTO Currency(abbr, name, symbol) VALUES('BAM', 'Bosnian Convertible Mark', 'KM');
INSERT INTO Currency(abbr, name, symbol) VALUES('BWP', 'Botswana Pula', 'P');
INSERT INTO Currency(abbr, name, symbol) VALUES('BRL', 'Brazilian Real', 'R$');
INSERT INTO Currency(abbr, name, symbol) VALUES('GBP', 'British Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('BND', 'Bruneian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('BGN', 'Bulgarian Lev', 'лв');
INSERT INTO Currency(abbr, name, symbol) VALUES('BIF', 'Burundian Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('KHR', 'Cambodian Riel', '៛');
INSERT INTO Currency(abbr, name, symbol) VALUES('CAD', 'Canadian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('XAF', 'Central African CFA Franc BEAC', 'XAF');
INSERT INTO Currency(abbr, name, symbol) VALUES('CLP', 'Chilean Peso', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('CNY', 'Chinese Yuan Renminbi', '¥');
INSERT INTO Currency(abbr, name, symbol) VALUES('COP', 'Colombian Peso', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('KMF', 'Comorian Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('CRC', 'Costa Rican Colon', '₡');
INSERT INTO Currency(abbr, name, symbol) VALUES('HRK', 'Croatian Kuna', 'kn');
INSERT INTO Currency(abbr, name, symbol) VALUES('CUP', 'Cuban Peso', '₱');
INSERT INTO Currency(abbr, name, symbol) VALUES('CZK', 'Czech Koruna', 'Kč');
INSERT INTO Currency(abbr, name, symbol) VALUES('DKK', 'Danish Krone', 'kr.');
INSERT INTO Currency(abbr, name, symbol) VALUES('CDF', 'Congolese Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('DJF', 'Djiboutian Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('DOP', 'Dominican Peso', 'RD$');
INSERT INTO Currency(abbr, name, symbol) VALUES('EUR', 'Euro', '€');
INSERT INTO Currency(abbr, name, symbol) VALUES('EGP', 'Egyptian Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('ERN', 'Eritrean Nakfa', 'Nkf');
INSERT INTO Currency(abbr, name, symbol) VALUES('ETB', 'Ethiopian Birr', 'Br');
INSERT INTO Currency(abbr, name, symbol) VALUES('FJD', 'Fijian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('PHP', 'Philippine Peso', '₱');
INSERT INTO Currency(abbr, name, symbol) VALUES('AWG', 'Aruban or Dutch Guilder', 'ƒ');
INSERT INTO Currency(abbr, name, symbol) VALUES('BMD', 'Bermudian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('CVE', 'Cape Verdean Escudo', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('XOF', 'CFA Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('SZL', 'Swazi Lilangeni', 'Lilangeni');
INSERT INTO Currency(abbr, name, symbol) VALUES('XPF', 'CFP Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('GGP', 'Guernsey Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('JEP', 'Jersey Pound', 'p');
INSERT INTO Currency(abbr, name, symbol) VALUES('LSL', 'Basotho Loti', 'Loti');
INSERT INTO Currency(abbr, name, symbol) VALUES('MOP', 'Macau Pataca', 'MOP$');
INSERT INTO Currency(abbr, name, symbol) VALUES('MDL', 'Moldovan Leu', 'lei');
INSERT INTO Currency(abbr, name, symbol) VALUES('MMK', 'Burmese Kyat', 'K');
INSERT INTO Currency(abbr, name, symbol) VALUES('NIO', 'Nicaraguan Cordoba', 'C$');
INSERT INTO Currency(abbr, name, symbol) VALUES('MKD', 'Macedonian Denar', 'ден');
INSERT INTO Currency(abbr, name, symbol) VALUES('SHP', 'Saint Helenian Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('SLE', 'Sierra Leonean Leone', 'Le');
INSERT INTO Currency(abbr, name, symbol) VALUES('ZAR', 'South African Rand', 'R');
INSERT INTO Currency(abbr, name, symbol) VALUES('BSD', 'Bahamian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('KYD', 'Caymanian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('FKP', 'Falkland Island Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('DKK', 'Faroese Króna', 'kr');
INSERT INTO Currency(abbr, name, symbol) VALUES('GMD', 'Gambian Dalasi', 'Dalasi');
INSERT INTO Currency(abbr, name, symbol) VALUES('GIP', 'Gibraltar Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('IMP', 'Isle of Man Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('ANG', 'Dutch Guilder', 'ƒ');
INSERT INTO Currency(abbr, name, symbol) VALUES('HKD', 'Hong Kong Dollar', 'HK$');
INSERT INTO Currency(abbr, name, symbol) VALUES('AED', 'Emirati Dirham', 'د.إ');
INSERT INTO Currency(abbr, name, symbol) VALUES('TRY', 'Turkish Lira', '₺');
INSERT INTO Currency(abbr, name, symbol) VALUES('GEL', 'Georgian Lari', 'Lari');
INSERT INTO Currency(abbr, name, symbol) VALUES('GHS', 'Ghanaian Cedi', 'GH¢');
INSERT INTO Currency(abbr, name, symbol) VALUES('GTQ', 'Guatemalan Quetzal', 'Q');
INSERT INTO Currency(abbr, name, symbol) VALUES('GNF', 'Guinean Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('GYD', 'Guyanese Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('HTG', 'Haitian Gourde', 'G');
INSERT INTO Currency(abbr, name, symbol) VALUES('HNL', 'Honduran Lempira', 'L');
INSERT INTO Currency(abbr, name, symbol) VALUES('HUF', 'Hungarian Forint', 'Ft');
INSERT INTO Currency(abbr, name, symbol) VALUES('ISK', 'Icelandic Krona', 'kr');
INSERT INTO Currency(abbr, name, symbol) VALUES('XDR', 'IMF Special Drawing Rights', 'Special Drawing Rights');
INSERT INTO Currency(abbr, name, symbol) VALUES('INR', 'Indian Rupee', '₹');
INSERT INTO Currency(abbr, name, symbol) VALUES('IDR', 'Indonesian Rupiah', 'Rp');
INSERT INTO Currency(abbr, name, symbol) VALUES('IRR', 'Iranian Rial', '﷼');
INSERT INTO Currency(abbr, name, symbol) VALUES('IQD', 'Iraqi Dinar', 'د.ع');
INSERT INTO Currency(abbr, name, symbol) VALUES('ILS', 'Israeli Shekel', '₪');
INSERT INTO Currency(abbr, name, symbol) VALUES('JMD', 'Jamaican Dollar', 'J$');
INSERT INTO Currency(abbr, name, symbol) VALUES('JPY', 'Japanese Yen', '¥');
INSERT INTO Currency(abbr, name, symbol) VALUES('JOD', 'Jordanian Dinar', 'Dinar');
INSERT INTO Currency(abbr, name, symbol) VALUES('KZT', 'Kazakhstani Tenge', '₸');
INSERT INTO Currency(abbr, name, symbol) VALUES('KES', 'Kenyan Shilling', 'KSh');
INSERT INTO Currency(abbr, name, symbol) VALUES('KID', 'Kiribati Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('KWD', 'Kuwaiti Dinar', 'ك');
INSERT INTO Currency(abbr, name, symbol) VALUES('KGS', 'Kyrgyzstani Som', 'лв');
INSERT INTO Currency(abbr, name, symbol) VALUES('LAK', 'Lao Kip', '₭');
INSERT INTO Currency(abbr, name, symbol) VALUES('LBP', 'Lebanese Pound', 'ل.ل');
INSERT INTO Currency(abbr, name, symbol) VALUES('LRD', 'Liberian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('LYD', 'Libyan Dinar', 'LD');
INSERT INTO Currency(abbr, name, symbol) VALUES('MGA', 'Malagasy Ariary', 'Ar');
INSERT INTO Currency(abbr, name, symbol) VALUES('MWK', 'Malawian Kwacha', 'MK');
INSERT INTO Currency(abbr, name, symbol) VALUES('MYR', 'Malaysian Ringgit', 'RM');
INSERT INTO Currency(abbr, name, symbol) VALUES('MVR', 'Maldivian Rufiyaa', 'Rufiyaa');
INSERT INTO Currency(abbr, name, symbol) VALUES('MRU', 'Mauritanian Ouguiya', 'UM');
INSERT INTO Currency(abbr, name, symbol) VALUES('MUR', 'Mauritanian Rupee', 'Rs');
INSERT INTO Currency(abbr, name, symbol) VALUES('MXN', 'Mexican Peso', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('MNT', 'Mongolian Tughrik', '₮');
INSERT INTO Currency(abbr, name, symbol) VALUES('MAD', 'Moroccan Dirham', 'Dirham');
INSERT INTO Currency(abbr, name, symbol) VALUES('MZN', 'Mozambican Metical', 'MT');
INSERT INTO Currency(abbr, name, symbol) VALUES('NAD', 'Namibian Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('NPR', 'Nepalese Rupee', '₨');
INSERT INTO Currency(abbr, name, symbol) VALUES('NZD', 'New Zealand Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('NGN', 'Nigerian Naira', '₦');
INSERT INTO Currency(abbr, name, symbol) VALUES('NOK', 'Norwegian Krone', 'kr');
INSERT INTO Currency(abbr, name, symbol) VALUES('XCD', 'East Caribbean Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('OMR', 'Omani Rial', '﷼');
INSERT INTO Currency(abbr, name, symbol) VALUES('PKR', 'Pakistani Rupee', '₨');
INSERT INTO Currency(abbr, name, symbol) VALUES('PAB', 'Panamanian Balboa', 'B/.');
INSERT INTO Currency(abbr, name, symbol) VALUES('PGK', 'Papua New Guinean Kina', 'K');
INSERT INTO Currency(abbr, name, symbol) VALUES('PYG', 'Paraguayan Guarani', 'Gs');
INSERT INTO Currency(abbr, name, symbol) VALUES('PEN', 'Peruvian Sol', 'S/.');
INSERT INTO Currency(abbr, name, symbol) VALUES('PLN', 'Polish Zloty', 'zł');
INSERT INTO Currency(abbr, name, symbol) VALUES('QAR', 'Qatari Riyal', '﷼');
INSERT INTO Currency(abbr, name, symbol) VALUES('RON', 'Romanian Leu', 'lei');
INSERT INTO Currency(abbr, name, symbol) VALUES('RUB', 'Russian Ruble', '₽');
INSERT INTO Currency(abbr, name, symbol) VALUES('RWF', 'Rwandan Franc', 'Franc');
INSERT INTO Currency(abbr, name, symbol) VALUES('WST', 'Samoan Tala', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('STN', 'Sao Tomean Dobra', 'Db');
INSERT INTO Currency(abbr, name, symbol) VALUES('SAR', 'Saudi Arabian Riyal', '﷼');
INSERT INTO Currency(abbr, name, symbol) VALUES('RSD', 'Serbian Dinar', 'РСД');
INSERT INTO Currency(abbr, name, symbol) VALUES('SCR', 'Seychellois Rupee', '₨');
INSERT INTO Currency(abbr, name, symbol) VALUES('SGD', 'Singapore Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('SBD', 'Solomon Islander Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('SOS', 'Somali Shilling', 'S');
INSERT INTO Currency(abbr, name, symbol) VALUES('KRW', 'South Korean Won', '₩');
INSERT INTO Currency(abbr, name, symbol) VALUES('SSP', 'South Sudanese Pound', 'Pound');
INSERT INTO Currency(abbr, name, symbol) VALUES('LKR', 'Sri Lankan Rupee', '₨');
INSERT INTO Currency(abbr, name, symbol) VALUES('SDG', 'Sudanese Pound', 'Pound');
INSERT INTO Currency(abbr, name, symbol) VALUES('SRD', 'Surinamese Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('SEK', 'Swedish Krona', 'kr');
INSERT INTO Currency(abbr, name, symbol) VALUES('CHF', 'Swiss Franc', 'CHF');
INSERT INTO Currency(abbr, name, symbol) VALUES('SYP', 'Syrian Pound', '£');
INSERT INTO Currency(abbr, name, symbol) VALUES('TWD', 'Taiwan New Dollar', 'NT$');
INSERT INTO Currency(abbr, name, symbol) VALUES('TJS', 'Tajikistani Somoni', 'Somoni');
INSERT INTO Currency(abbr, name, symbol) VALUES('TZS', 'Tanzanian Shilling', 'Shilling');
INSERT INTO Currency(abbr, name, symbol) VALUES('THB', 'Thai Baht', '฿');
INSERT INTO Currency(abbr, name, symbol) VALUES('TOP', "Tongan Pa'anga", 'T$');
INSERT INTO Currency(abbr, name, symbol) VALUES('TTD', 'Trinidadian Dollar', 'TT$');
INSERT INTO Currency(abbr, name, symbol) VALUES('TND', 'Tunisian Dinar', 'Dinar');
INSERT INTO Currency(abbr, name, symbol) VALUES('TMT', 'Turkmenistani Manat', 'Manat');
INSERT INTO Currency(abbr, name, symbol) VALUES('TVD', 'Tuvaluan Dollar', '$');
INSERT INTO Currency(abbr, name, symbol) VALUES('UGX', 'Ugandan Shilling', 'UGX');
INSERT INTO Currency(abbr, name, symbol) VALUES('UAH', 'Ukrainian Hryvnia', '₴');
INSERT INTO Currency(abbr, name, symbol) VALUES('UYU', 'Uruguayan Peso', '$U');
INSERT INTO Currency(abbr, name, symbol) VALUES('UZS', 'Uzbekistani Som', 'лв');
INSERT INTO Currency(abbr, name, symbol) VALUES('VUV', 'Ni-Vanuatu Vatu', 'VT');
INSERT INTO Currency(abbr, name, symbol) VALUES('VES', 'Venezuelan Bolívar', 'Bs.');
INSERT INTO Currency(abbr, name, symbol) VALUES('VND', 'Vietnamese Dong', '₫');
INSERT INTO Currency(abbr, name, symbol) VALUES('YER', 'Yemeni Rial', '﷼');
INSERT INTO Currency(abbr, name, symbol) VALUES('ZMW', 'Zambian Kwacha', 'ZK');
INSERT INTO Currency(abbr, name, symbol) VALUES('ZWL', 'Zimbabwean Dollar', 'Z$');



/* Country inserts */
INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Argentina',
    'Argentine Republic',
    'ARG',
    '.at',
    '',
    '',
    'En unión y libertad',
    'Himno Nacional Argentino',
    'Buenos Aires',
    'Spanish',
    46621847,
    'AR',
    'ARG',
    '+54',
    'UTC-3',
    1,
    1,
    1,
    1
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Emirates',
    'The United Arab Emirates',
    'UAE',
    '.ae',
    '',
    '',
    'God, Nation, President',
    'Long Live My Country',
    'Abu Dhabi',
    'Arabic',
    9516871,
    'AE',
    'ARE',
    '+971',
    'UTC+4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Afghanistan',
    'Islamic Emirate of Afghanistan',
    'AFN',
    '.af',
    '',
    '',
    'There is no god but God; Muhammad is the messenger of God',
    'This Is the Home of the Brave',
    'Kabul',
    'Pashto',
    42239854,
    'AF',
    'AFG',
    '+93',
    'UTC+4:30',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Albania',
    'Republic of Albania',
    'ALB',
    '.al',
    '',
    '',
    'You Albania, give me honour, you give me the name Albanian',
    'Hymn to the Flag',
    'Tirana',
    'Albanian',
    2832439,
    'AL',
    'ALB',
    '+355',
    'UTC+1',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Armenia',
    'Republic of Armenia',
    'ARM',
    '.am',
    '',
    '',
    'One nation, one culture',
    'Our Fatherland',
    'Yerevan',
    'Armenian',
    2777970,
    'AM',
    'ARM',
    '+374',
    'UTC+4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Netherlands Antilles',
    'The Netherlands Antilles',
    'ANT',
    '.an',
    '',
    '',
    'Unified in freedom',
    'Anthem wothout a title',
    'Willemstad',
    'Dutch',
    151066,
    'AN',
    'ANT',
    '+599',
    'UTC-4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Angola',
    'Republic of Angola',
    'AO',
    '.ao',
    '',
    '',
    'Virtue is stronger when united',
    'Onwards Angola',
    'Luanda',
    'Kimbundu',
    36684202,
    'AO',
    'AGO',
    '+244',
    'UTC+1',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Autralia',
    'Commonwealth of Australia',
    'AUS',
    '.au',
    '',
    '',
    '-',
    'Advance Australia Fair',
    'Canberra',
    'English',
    26439111,
    'AU',
    'AUS',
    '+61',
    'UTC+11',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Aruba',
    'Country of Aruba',
    'ABW',
    '.aw',
    '',
    '',
    '-',
    'Aruba Dushi Tera',
    'Oranjestad',
    'Papiamento',
    106277,
    'AW',
    'ABW',
    '+297',
    'UTC-4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Azerbaijan',
    'Republic of Azerbaijan',
    'AZE',
    '.az',
    '',
    '',
    '-',
    'March of Azerbaijan',
    'Baku',
    'Azerbaijani',
    10412651,
    'AZ',
    'AZE',
    '+994',
    'UTC+4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bosnia and Herzegovina',
    'Bosnia and Herzegovina',
    'BIH',
    '.ba',
    '',
    '',
    '-',
    'National Anthem of Bosnia and Herzegovina',
    'Sarajevo',
    'Latin',
    3210847,
    'BA',
    'BIH',
    '+387',
    'UTC+1',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Barbados',
    'Barbados',
    'BRB',
    '.bb',
    '',
    '',
    'Pride and Industry',
    'In Plenty and In Time of Need',
    'Bridgetown',
    'English',
    281995,
    'BB',
    'BRB',
    '+1246',
    'UTC-4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bangladesh',
    "People's Republic of Bangladesh",
    'BAN',
    '.bd',
    '',
    '',
    '-',
    'My Golden Bengal',
    'Dhaka',
    'Bengali',
    172954319,
    'BD',
    'BGD',
    '+880',
    'UTC+6',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bulgaria',
    'Republic of Bulgaria',
    'BGR',
    '.bg',
    '',
    '',
    'Unity makes strength',
    'Dear Motherland',
    'Sofia',
    'Bulgarian',
    6687717,
    'BG',
    'BGR',
    '+359',
    'UTC+2',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bahrain',
    'Kingdom of Baahrain',
    'BHR',
    '.bh',
    '',
    '',
    '-',
    'Our Bahrain',
    'Manama',
    'Arabic',
    1485509,
    'BH',
    'BHR',
    '+973',
    'UTC+3',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Burundi',
    'Republic of Burundi',
    'BDI',
    '.bi',
    '',
    '',
    'Union, Work, Progress',
    'Our Burundi',
    'Gitega',
    'Kirundi',
    13238559,
    'BI',
    'BDI',
    '+257',
    'UTC+2',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bermuda',
    'Bermuda',
    'BMU',
    '.bm',
    '',
    '',
    'Whither the Fates carry (us)',
    'God Save the King',
    'Hamilton',
    'English',
    64019,
    'BM',
    'BMU',
    '+1441',
    'UTC-4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Brunei',
    'Brunei Darussalam',
    'BRN',
    '.bn',
    '',
    '',
    "Always in service with God's guidance",
    'God Bless the Sultan',
    'Bandar Seri Begawan',
    'Malay',
    452523,
    'BN',
    'BRN',
    '+673',
    'UTC+8',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bolivia',
    'Plurinational State of Bolivia',
    'BOL',
    '.bo',
    '',
    '',
    '-',
    'National Anthem of Bolivia',
    'Sucre',
    'Spanish',
    12440603,
    'BO',
    'BOL',
    '+591',
    'UTC-4',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Brazil',
    'Federative Republic of Brazil',
    'BRA',
    '.br',
    '',
    '',
    'Order and Progress',
    'Brazilian National Anthem',
    'Brasilia',
    'Portuguese',
    216422446,
    'BR',
    'BRA',
    '+55',
    'UTC+3',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bahamas',
    'Commonwealth of The Bahamas',
    'BHS',
    '.bs',
    '',
    '',
    'Forward, Upward, Onward, Together',
    'March On, Bahamaland',
    'Nassau',
    'English',
    412623,
    'BS',
    'BHS',
    '+1242',
    'UTC-5',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Bhutan',
    'Kingdom of Bhutan',
    'BTN',
    '.bt',
    '',
    '',
    '-',
    'The Thunder Dragon Kingdom',
    'Thimphu',
    'Dzongkha',
    787424,
    'BN',
    'BTN',
    '+975',
    'UTC+6',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Botswana',
    'Republic of Botswana',
    'BWA',
    '.bw',
    '',
    '',
    'Let There Be Rain',
    'Blessed Be This Noble Land',
    'Gaborone',
    'English',
    2675352,
    'BW',
    'BWA',
    '+267',
    'UTC+2',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Belarus',
    'Republic of Belarus',
    'BLR',
    '.by',
    '',
    '',
    '-',
    'State Anthem of the Republic of Belarus',
    'Minsk',
    'Belarusian',
    9498238,
    'BY',
    'BLR',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Belize',
    'Belize',
    'BLZ',
    '.bz',
    '',
    '',
    'Under the shade I flourish',
    'Land of the Free',
    'Belmopan',
    'English',
    410825,
    'BZ',
    'BZL',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    'Canada',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

INSERT INTO Country(name, official_name, abbr, internet_tld, coat, flag, motto, anthem, capital, official_language, population, iso_3166_1_alpha_2, iso_3166_1_alpha_3, calling_code, timezone, id_currency, id_date_format, id_region, id_sub_region) VALUES(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ,
    '',
    '',
    '+',
    'UTC',
    ,
    ,
    ,
    
);

