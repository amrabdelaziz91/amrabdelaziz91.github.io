var isoCountries = [
  { id: "AF", text: "Afghanistan" },
  { id: "AX", text: "Aland Islands" },
  { id: "AL", text: "Albania" },
  { id: "DZ", text: "Algeria" },
  { id: "AS", text: "American Samoa" },
  { id: "AD", text: "Andorra" },
  { id: "AO", text: "Angola" },
  { id: "AI", text: "Anguilla" },
  { id: "AQ", text: "Antarctica" },
  { id: "AG", text: "Antigua and Barbuda" },
  { id: "AR", text: "Argentina" },
  { id: "AM", text: "Armenia" },
  { id: "AW", text: "Aruba" },
  { id: "AU", text: "Australia" },
  { id: "AT", text: "Austria" },
  { id: "AZ", text: "Azerbaijan" },
  { id: "BS", text: "Bahamas" },
  { id: "BH", text: "Bahrain" },
  { id: "BD", text: "Bangladesh" },
  { id: "BB", text: "Barbados" },
  { id: "BY", text: "Belarus" },
  { id: "BE", text: "Belgium" },
  { id: "BZ", text: "Belize" },
  { id: "BJ", text: "Benin" },
  { id: "BM", text: "Bermuda" },
  { id: "BT", text: "Bhutan" },
  { id: "BO", text: "Bolivia" },
  { id: "BA", text: "Bosnia and Herzegovina" },
  { id: "BW", text: "Botswana" },
  { id: "BV", text: "Bouvet Island" },
  { id: "BR", text: "Brazil" },
  { id: "IO", text: "British Indian Ocean Territory" },
  { id: "BN", text: "Brunei" },
  { id: "BG", text: "Bulgaria" },
  { id: "BF", text: "Burkina Faso" },
  { id: "BI", text: "Burundi" },
  { id: "KH", text: "Cambodia" },
  { id: "CM", text: "Cameroon" },
  { id: "CA", text: "Canada" },
  { id: "CV", text: "Cabo Verde" },
  { id: "KY", text: "Cayman Islands" },
  { id: "CF", text: "Central African Republic" },
  { id: "TD", text: "Chad" },
  { id: "CL", text: "Chile" },
  { id: "CN", text: "China" },
  { id: "CX", text: "Christmas Island" },
  { id: "CC", text: "Cocos (Keeling) Islands" },
  { id: "CO", text: "Colombia" },
  { id: "KM", text: "Comoros" },
  { id: "CG", text: "Congo (Brazzaville)" },
  { id: "CD", text: "Congo (Kinshasa)" },
  { id: "CK", text: "Cook Islands" },
  { id: "CR", text: "Costa Rica" },
  { id: "CI", text: "Cote d'Ivoire" },
  { id: "HR", text: "Croatia" },
  { id: "CU", text: "Cuba" },
  { id: "CY", text: "Cyprus" },
  { id: "CZ", text: "Czechia" },
  { id: "DK", text: "Denmark" },
  { id: "DJ", text: "Djibouti" },
  { id: "DM", text: "Dominica" },
  { id: "DO", text: "Dominican Republic" },
  { id: "EC", text: "Ecuador" },
  { id: "EG", text: "Egypt" },
  { id: "SV", text: "El Salvador" },
  { id: "GQ", text: "Equatorial Guinea" },
  { id: "ER", text: "Eritrea" },
  { id: "EE", text: "Estonia" },
  { id: "ET", text: "Ethiopia" },
  { id: "FK", text: "Falkland Islands (Malvinas)" },
  { id: "FO", text: "Faroe Islands" },
  { id: "FJ", text: "Fiji" },
  { id: "FI", text: "Finland" },
  { id: "FR", text: "France" },
  { id: "GF", text: "French Guiana" },
  { id: "PF", text: "French Polynesia" },
  { id: "TF", text: "French Southern Territories" },
  { id: "GA", text: "Gabon" },
  { id: "GM", text: "Gambia" },
  { id: "GE", text: "Georgia" },
  { id: "DE", text: "Germany" },
  { id: "GH", text: "Ghana" },
  { id: "GI", text: "Gibraltar" },
  { id: "GR", text: "Greece" },
  { id: "GL", text: "Greenland" },
  { id: "GD", text: "Grenada" },
  { id: "GP", text: "Guadeloupe" },
  { id: "GU", text: "Guam" },
  { id: "GT", text: "Guatemala" },
  { id: "GG", text: "Guernsey" },
  { id: "GN", text: "Guinea" },
  { id: "GW", text: "Guinea-Bissau" },
  { id: "GY", text: "Guyana" },
  { id: "HT", text: "Haiti" },
  { id: "HM", text: "Heard Island & Mcdonald Islands" },
  { id: "VA", text: "Holy See" },
  { id: "HN", text: "Honduras" },
  { id: "HK", text: "Hong Kong" },
  { id: "HU", text: "Hungary" },
  { id: "IS", text: "Iceland" },
  { id: "IN", text: "India" },
  { id: "ID", text: "Indonesia" },
  { id: "IR", text: "Iran" },
  { id: "IQ", text: "Iraq" },
  { id: "IE", text: "Ireland" },
  { id: "IM", text: "Isle Of Man" },
  { id: "IL", text: "Israel" },
  { id: "IT", text: "Italy" },
  { id: "JM", text: "Jamaica" },
  { id: "JP", text: "Japan" },
  { id: "JE", text: "Jersey" },
  { id: "JO", text: "Jordan" },
  { id: "KZ", text: "Kazakhstan" },
  { id: "KE", text: "Kenya" },
  { id: "KI", text: "Kiribati" },
  { id: "KR", text: "Korea, South" },
  { id: "KW", text: "Kuwait" },
  { id: "KG", text: "Kyrgyzstan" },
  { id: "LA", text: "Laos" },
  { id: "LV", text: "Latvia" },
  { id: "LB", text: "Lebanon" },
  { id: "LS", text: "Lesotho" },
  { id: "LR", text: "Liberia" },
  { id: "LY", text: "Libya" },
  { id: "LI", text: "Liechtenstein" },
  { id: "LT", text: "Lithuania" },
  { id: "LU", text: "Luxembourg" },
  { id: "MO", text: "Macao" },
  { id: "MK", text: "North Macedonia" },
  { id: "MG", text: "Madagascar" },
  { id: "MW", text: "Malawi" },
  { id: "MY", text: "Malaysia" },
  { id: "MV", text: "Maldives" },
  { id: "ML", text: "Mali" },
  { id: "MT", text: "Malta" },
  { id: "MH", text: "Marshall Islands" },
  { id: "MQ", text: "Martinique" },
  { id: "MR", text: "Mauritania" },
  { id: "MU", text: "Mauritius" },
  { id: "YT", text: "Mayotte" },
  { id: "MX", text: "Mexico" },
  { id: "FM", text: "Micronesia}, Federated States Of" },
  { id: "MD", text: "Moldova" },
  { id: "MC", text: "Monaco" },
  { id: "MN", text: "Mongolia" },
  { id: "ME", text: "Montenegro" },
  { id: "MS", text: "Montserrat" },
  { id: "MA", text: "Morocco" },
  { id: "MZ", text: "Mozambique" },
  { id: "MM", text: "Myanmar" },
  { id: "NA", text: "Namibia" },
  { id: "NR", text: "Nauru" },
  { id: "NP", text: "Nepal" },
  { id: "NL", text: "Netherlands" },
  { id: "AN", text: "Netherlands Antilles" },
  { id: "NC", text: "New Caledonia" },
  { id: "NZ", text: "New Zealand" },
  { id: "NI", text: "Nicaragua" },
  { id: "NE", text: "Niger" },
  { id: "NG", text: "Nigeria" },
  { id: "NU", text: "Niue" },
  { id: "NF", text: "Norfolk Island" },
  { id: "MP", text: "Northern Mariana Islands" },
  { id: "NO", text: "Norway" },
  { id: "OM", text: "Oman" },
  { id: "PK", text: "Pakistan" },
  { id: "PW", text: "Palau" },
  { id: "PS", text: "West Bank and Gaza" },
  { id: "PA", text: "Panama" },
  { id: "PG", text: "Papua New Guinea" },
  { id: "PY", text: "Paraguay" },
  { id: "PE", text: "Peru" },
  { id: "PH", text: "Philippines" },
  { id: "PN", text: "Pitcairn" },
  { id: "PL", text: "Poland" },
  { id: "PT", text: "Portugal" },
  { id: "PR", text: "Puerto Rico" },
  { id: "QA", text: "Qatar" },
  { id: "RE", text: "Reunion" },
  { id: "RO", text: "Romania" },
  { id: "RU", text: "Russia" },
  { id: "RW", text: "Rwanda" },
  { id: "BL", text: "Saint Barthelemy" },
  { id: "SH", text: "Saint Helena" },
  { id: "KN", text: "Saint Kitts and Nevis" },
  { id: "LC", text: "Saint Lucia" },
  { id: "MF", text: "Saint Martin" },
  { id: "PM", text: "Saint Pierre And Miquelon" },
  { id: "VC", text: "Saint Vincent and the Grenadines" },
  { id: "WS", text: "Samoa" },
  { id: "SM", text: "San Marino" },
  { id: "ST", text: "Sao Tome and Principe" },
  { id: "SA", text: "Saudi Arabia" },
  { id: "SN", text: "Senegal" },
  { id: "RS", text: "Serbia" },
  { id: "SC", text: "Seychelles" },
  { id: "SL", text: "Sierra Leone" },
  { id: "SG", text: "Singapore" },
  { id: "SK", text: "Slovakia" },
  { id: "SI", text: "Slovenia" },
  { id: "SB", text: "Solomon Islands" },
  { id: "SO", text: "Somalia" },
  { id: "ZA", text: "South Africa" },
  { id: "GS", text: "South Georgia And Sandwich Isl." },
  { id: "ES", text: "Spain" },
  { id: "LK", text: "Sri Lanka" },
  { id: "SD", text: "Sudan" },
  { id: "SR", text: "Suriname" },
  { id: "SJ", text: "Svalbard And Jan Mayen" },
  { id: "SZ", text: "Swaziland" },
  { id: "SE", text: "Sweden" },
  { id: "CH", text: "Switzerland" },
  { id: "SY", text: "Syria" },
  { id: "TW", text: "Taiwan*" },
  { id: "TJ", text: "Tajikistan" },
  { id: "TZ", text: "Tanzania" },
  { id: "TH", text: "Thailand" },
  { id: "TL", text: "Timor-Leste" },
  { id: "TG", text: "Togo" },
  { id: "TK", text: "Tokelau" },
  { id: "TO", text: "Tonga" },
  { id: "TT", text: "Trinidad and Tobago" },
  { id: "TN", text: "Tunisia" },
  { id: "TR", text: "Turkey" },
  { id: "TM", text: "Turkmenistan" },
  { id: "TC", text: "Turks And Caicos Islands" },
  { id: "TV", text: "Tuvalu" },
  { id: "UG", text: "Uganda" },
  { id: "UA", text: "Ukraine" },
  { id: "AE", text: "United Arab Emirates" },
  { id: "GB", text: "United Kingdom" },
  { id: "US", text: "US" },
  { id: "UM", text: "United States Outlying Islands" },
  { id: "UY", text: "Uruguay" },
  { id: "UZ", text: "Uzbekistan" },
  { id: "VU", text: "Vanuatu" },
  { id: "VE", text: "Venezuela" },
  { id: "VN", text: "Vietnam" },
  { id: "VG", text: "Virgin Islands}, British" },
  { id: "VI", text: "Virgin Islands}, U.S." },
  { id: "WF", text: "Wallis And Futuna" },
  { id: "EH", text: "Western Sahara" },
  { id: "YE", text: "Yemen" },
  { id: "ZM", text: "Zambia" },
  { id: "ZW", text: "Zimbabwe" },
  { id: "SWZ", text: "Eswatini" }
];

var countryMapping = {
  AFG: "AF",
  ALA: "AX",
  ALB: "AL",
  DZA: "DZ",
  ASM: "AS",
  AND: "AD",
  AGO: "AO",
  AIA: "AI",
  ATA: "AQ",
  ATG: "AG",
  ARG: "AR",
  ARM: "AM",
  ABW: "AW",
  AUS: "AU",
  AUT: "AT",
  AZE: "AZ",
  BHS: "BS",
  BHR: "BH",
  BGD: "BD",
  BRB: "BB",
  BLR: "BY",
  BEL: "BE",
  BLZ: "BZ",
  BEN: "BJ",
  BMU: "BM",
  BTN: "BT",
  BOL: "BO",
  BES: "BQ",
  BIH: "BA",
  BWA: "BW",
  BVT: "BV",
  BRA: "BR",
  IOT: "IO",
  BRN: "BN",
  BGR: "BG",
  BFA: "BF",
  BDI: "BI",
  CPV: "CV",
  KHM: "KH",
  CMR: "CM",
  CAN: "CA",
  CYM: "KY",
  CAF: "CF",
  TCD: "TD",
  CHL: "CL",
  CHN: "CN",
  CXR: "CX",
  CCK: "CC",
  COL: "CO",
  COM: "KM",
  COG: "CG",
  COD: "CD",
  COK: "CK",
  CRI: "CR",
  CIV: "CI",
  HRV: "HR",
  CUB: "CU",
  CUW: "CW",
  CYP: "CY",
  CZE: "CZ",
  DNK: "DK",
  DJI: "DJ",
  DMA: "DM",
  DOM: "DO",
  ECU: "EC",
  EGY: "EG",
  SLV: "SV",
  GNQ: "GQ",
  ERI: "ER",
  EST: "EE",
  SWZ: "SZ",
  ETH: "ET",
  FLK: "FK",
  FRO: "FO",
  FJI: "FJ",
  FIN: "FI",
  FRA: "FR",
  GUF: "GF",
  PYF: "PF",
  ATF: "TF",
  GAB: "GA",
  GMB: "GM",
  GEO: "GE",
  DEU: "DE",
  GHA: "GH",
  GIB: "GI",
  GRC: "GR",
  GRL: "GL",
  GRD: "GD",
  GLP: "GP",
  GUM: "GU",
  GTM: "GT",
  GGY: "GG",
  GIN: "GN",
  GNB: "GW",
  GUY: "GY",
  HTI: "HT",
  HMD: "HM",
  VAT: "VA",
  HND: "HN",
  HKG: "HK",
  HUN: "HU",
  ISL: "IS",
  IND: "IN",
  IDN: "ID",
  IRN: "IR",
  IRQ: "IQ",
  IRL: "IE",
  IMN: "IM",
  ISR: "IL",
  ITA: "IT",
  JAM: "JM",
  JPN: "JP",
  JEY: "JE",
  JOR: "JO",
  KAZ: "KZ",
  KEN: "KE",
  KIR: "KI",
  PRK: "KP",
  KOR: "KR",
  KWT: "KW",
  KGZ: "KG",
  LAO: "LA",
  LVA: "LV",
  LBN: "LB",
  LSO: "LS",
  LBR: "LR",
  LBY: "LY",
  LIE: "LI",
  LTU: "LT",
  LUX: "LU",
  MAC: "MO",
  MDG: "MG",
  MWI: "MW",
  MYS: "MY",
  MDV: "MV",
  MLI: "ML",
  MLT: "MT",
  MHL: "MH",
  MTQ: "MQ",
  MRT: "MR",
  MUS: "MU",
  MYT: "YT",
  MEX: "MX",
  FSM: "FM",
  MDA: "MD",
  MCO: "MC",
  MNG: "MN",
  MNE: "ME",
  MSR: "MS",
  MAR: "MA",
  MOZ: "MZ",
  MMR: "MM",
  NAM: "NA",
  NRU: "NR",
  NPL: "NP",
  NLD: "NL",
  NCL: "NC",
  NZL: "NZ",
  NIC: "NI",
  NER: "NE",
  NGA: "NG",
  NIU: "NU",
  NFK: "NF",
  MKD: "MK",
  MNP: "MP",
  NOR: "NO",
  OMN: "OM",
  PAK: "PK",
  PLW: "PW",
  PSE: "PS",
  PAN: "PA",
  PNG: "PG",
  PRY: "PY",
  PER: "PE",
  PHL: "PH",
  PCN: "PN",
  POL: "PL",
  PRT: "PT",
  PRI: "PR",
  QAT: "QA",
  REU: "RE",
  ROU: "RO",
  RUS: "RU",
  RWA: "RW",
  BLM: "BL",
  SHN: "SH",
  KNA: "KN",
  LCA: "LC",
  MAF: "MF",
  SPM: "PM",
  VCT: "VC",
  WSM: "WS",
  SMR: "SM",
  STP: "ST",
  SAU: "SA",
  SEN: "SN",
  SRB: "RS",
  SYC: "SC",
  SLE: "SL",
  SGP: "SG",
  SXM: "SX",
  SVK: "SK",
  SVN: "SI",
  SLB: "SB",
  SOM: "SO",
  ZAF: "ZA",
  SGS: "GS",
  SSD: "SS",
  ESP: "ES",
  LKA: "LK",
  SDN: "SD",
  SUR: "SR",
  SJM: "SJ",
  SWE: "SE",
  CHE: "CH",
  SYR: "SY",
  TWN: "TW",
  TJK: "TJ",
  TZA: "TZ",
  THA: "TH",
  TLS: "TL",
  TGO: "TG",
  TKL: "TK",
  TON: "TO",
  TTO: "TT",
  TUN: "TN",
  TUR: "TR",
  TKM: "TM",
  TCA: "TC",
  TUV: "TV",
  UGA: "UG",
  UKR: "UA",
  ARE: "AE",
  GBR: "GB",
  USA: "US",
  UMI: "UM",
  URY: "UY",
  UZB: "UZ",
  VUT: "VU",
  VEN: "VE",
  VNM: "VN",
  VGB: "VG",
  VIR: "VI",
  WLF: "WF",
  ESH: "EH",
  YEM: "YE",
  ZMB: "ZM",
  ZWE: "ZW"
};