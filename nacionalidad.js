class getAPI {
  getData (name) {
    return fetch(`https://api.nationalize.io?name=${name.trim()}`)
  }

  fullNamesCountries () {
    return {
      "FR":	"France",
      "IT":	"Italy",
      "ES":	"Spain",
      "TR":	"Turkey",
      "DE":	"Germany",
      "PL":	"Poland",
      "GB":	"United Kingdom",
      "RU":	"Russia",
      "CZ":	"Czech Republic	",
      "PT":	"Portugal	",
      "NL":	"Netherlands	",
      "BE":	"Belgium	",
      "MA":	"Morocco	",
      "PH":	"Philippines	",
      "US":	"United States	",
      "RO":	"Romania	",
      "DZ":	"Algeria	",
      "NG":	"Nigeria	",
      "CH":	"Switzerland	",
      "HU":	"Hungary	",
      "TH":	"Thailand	",
      "SE":	"Sweden	",
      "ID":	"Indonesia	",
      "IN":	"India	",
      "UA":	"Ukraine	",
      "MY":	"Malaysia	",
      "TN":	"Tunisia	",
      "SA":	"Saudi Arabia	",
      "GR":	"Greece	",
      "CI":	"Ivory Coast	",
      "AT":	"Austria	",
      "ZA":	"South Africa	",
      "KR":	"South Korea	",
      "CN":	"China	",
      "RS":	"Serbia	",
      "JP":	"Japan	",
      "EG":	"Egypt	",
      "SK":	"Slovakia	",
      "SN":	"Senegal	",
      "DK":	"Denmark	",
      "FI":	"Finland	",
      "CM":	"Cameroon	",
      "IR":	"Iran	",
      "AR":	"Argentina	",
      "CA":	"Canada	",
      "SG":	"Singapore	",
      "PK":	"Pakistan	",
      "GH":	"Ghana	",
      "LB":	"Lebanon	",
      "IE":	"Ireland	",
      "AO":	"Angola	",
      "NO":	"Norway	",
      "BY":	"Belarus	",
      "BR":	"Brazil	",
      "MX":	"Mexico	",
      "CO":	"Colombia	",
      "KE":	"Kenya	",
      "CL":	"Chile	",
      "KW":	"Kuwait	",
      "AL":	"Albania	",
      "VE":	"Venezuela	",
      "RE":	"Reunion	",
      "BA":	"Bosnia and Herzegovina	",
      "IL":	"Israel	",
      "TW":	"Taiwan	",
      "SI":	"Slovenia	",
      "KZ":	"Kazakhstan	",
      "PE":	"Peru	",
      "AZ":	"Azerbaijan	",
      "AE":	"United Arab Emirates	",
      "CY":	"Cyprus	",
      "LT":	"Lithuania	",
      "DO":	"Dominican Republic	",
      "JO":	"Jordan	",
      "MD":	"Moldova	",
      "BJ":	"Benin	",
      "BG":	"Bulgaria	",
      "CD":	"Democratic Republic of the Congo	",
      "HR":	"Croatia	",
      "LV":	"Latvia	",
      "HK":	"Hong Kong	",
      "MZ":	"Mozambique	",
      "AU":	"Australia	",
      "LU":	"Luxembourg	",
      "UG":	"Uganda	",
      "ML":	"Mali	",
      "BF":	"Burkina Faso	",
      "MU":	"Mauritius	",
      "OM":	"Oman	",
      "TG":	"Togo	",
      "QA":	"Qatar	",
      "MK":	"Macedonia	",
      "MG":	"Madagascar	",
      "VN":	"Vietnam	",
      "GA":	"Gabon	",
      "EE":	"Estonia	",
      "IQ":	"Iraq	",
      "MT":	"Malta	",
      "BH":	"Bahrain	",
      "TZ":	"Tanzania	",
      "EC":	"Ecuador	",
      "GE":	"Georgia	",
      "AM":	"Armenia	",
      "SD":	"Sudan	",
      "ET":	"Ethiopia	",
      "MM":	"Myanmar	",
      "ME":	"Montenegro	",
      "SY":	"Syria	",
      "UZ":	"Uzbekistan	",
      "ZW":	"Zimbabwe	",
      "DJ":	"Djibouti	",
      "LK":	"Sri Lanka	",
      "BD":	"Bangladesh	",
      "SH":	"Saint Helena	",
      "BW":	"Botswana	",
      "CV":	"Cape Verde	",
      "BO":	"Bolivia	",
      "YE":	"Yemen	",
      "RW":	"Rwanda	",
      "IS":	"Iceland	",
      "LY":	"Libya	",
      "NE":	"Niger	",
      "AD":	"Andorra	",
      "GM":	"Gambia	",
      "CG":	"Republic of the Congo	",
      "ZM":	"Zambia	",
      "AF":	"Afghanistan	",
      "NA":	"Namibia	",
      "MR":	"Mauritania	",
      "UY":	"Uruguay	",
      "CR":	"Costa Rica	",
      "KG":	"Kyrgyzstan	",
      "PA":	"Panama	",
      "NP":	"Nepal	",
      "GN":	"Guinea	",
      "GP":	"Guadeloupe	",
      "GQ":	"Equatorial Guinea	",
      "MQ":	"Martinique	",
      "SC":	"Seychelles	",
      "CU":	"Cuba	",
      "NZ":	"New Zealand	",
      "GT":	"Guatemala	",
      "MC":	"Monaco	",
      "MV":	"Maldives	",
      "MW":	"Malawi	",
      "SV":	"El Salvador	",
      "GF":	"French Guiana	",
      "SL":	"Sierra Leone	",
      "LR":	"Liberia	",
      "NI":	"Nicaragua	",
      "KH":	"Cambodia	",
      "TJ":	"Tajikistan	",
      "PR":	"Puerto Rico	",
      "BI":	"Burundi	",
      "PY":	"Paraguay	",
      "KM":	"Comoros	",
      "LS":	"Lesotho	",
      "SO":	"Somalia	",
      "HN":	"Honduras	",
      "TD":	"Chad	",
      "GI":	"Gibraltar	",
      "BN":	"Brunei	",
      "SM":	"San Marino	",
      "JE":	"Jersey	",
      "SZ":	"Swaziland	",
      "TM":	"Turkmenistan	",
      "NC":	"New Caledonia	",
      "MN":	"Mongolia	",
      "LI":	"Liechtenstein	",
      "GL":	"Greenland	",
      "BT":	"Bhutan	",
      "PF":	"French Polynesia	",
      "ST":	"Sao Tome and Principe	",
      "YT":	"Mayotte	",
      "FO":	"Faroe Islands	",
      "JM":	"Jamaica	",
      "HT":	"Haiti	",
      "BS":	"Bahamas	",
      "GW":	"Guinea-Bissau	",
      "FJ":	"Fiji	",
      "GG":	"Guernsey	",
      "LA":	"Laos	",
      "TL":	"East Timor	",
      "TT":	"Trinidad and Tobago	",
      "AG":	"Antigua and Barbuda	",
      "EH":	"Western Sahara	",
      "CF":	"Central African Republic	",
      "PW":	"Palau	",
      "IM":	"Isle of Man	",
      "AW":	"Aruba	",
      "BZ":	"Belize	",
      "AS":	"American Samoa	",
      "AI":	"Anguilla	",
      "MP":	"Northern Mariana Islands	",
      "BM":	"Bermuda	",
      "ER":	"Eritrea	",
      "SR":	"Suriname	",
      "VG":	"British Virgin Islands	",
      "VI":	"US Virgin Islands	",
      "GY":	"Guyana	",
      "BB":	"Barbados	",
      "MH":	"Marshall Islands	",
      "MO":	"Macao	",
      "PG":	"Papua New Guinea	",
      "KY":	"Cayman Islands	",
      "KI":	"Kiribati	",
      "AN":	"Netherlands Antilles	",
      "CK":	"Cook Islands	",
      "GU":	"Guam	",
      "WF":	"Wallis and Futuna	",
      "PS":	"Palestine	",
      "TC":	"Turks and Caicos Islands	",
      "VU":	"Vanuatu	",
      "LC":	"Saint Lucia	",
      "TO":	"Tonga	",
      "CC":	"Cocos Islands	",
      "WS":	"Samoa	",
      "GD":	"Grenada	",
      "VA":	"Vatican	",
      "IO":	"British Indian Ocean Territory	",
      "FM":	"Micronesia	",
      "NU":	"Niue	",
      "BL":	"Saint Barthelemy	",
      "KN":	"Saint Kitts and Nevis	",
      "PM":	"Saint Pierre and Miquelon	",
      "FK":	"Falkland Islands	",
      "AQ":	"Antarctica	",
      "PN":	"Pitcairn	",
      "MF":	"Saint Martin	",
      "TV":	"Tuvalu	",
      "VC":	"Saint Vincent and the Grenadines	",
      "DM":	"Dominica	",
      "SB":	"Solomon Islands	",
      "TK":	"Tokelau	",
      "NF":	"Norfolk Island	",
      "CX":	"Christmas Island	",
      "NR":	"Nauru	",
      "SJ":	"Svalbard and Jan Mayen	",
      "MS":	"Montserrat	",
      "KP":	"North Korea	",
      "GS":	"South Georgia And Sandwich Isl	",
      "BV":	"Bouvet Island	",
    }
  }

  getCountry (id_country) {
    return this.fullNamesCountries()[id_country]
  }
}

class formListeners {
  data = new getAPI()

  getNationalize(node, span) {
    node.addEventListener("keyup", ev => {
      if (ev.key == "Enter" && ev.keyCode == 13 && node.value.length) {
        this.data.getData(node.value)
          .then(response => response.json())
          .then(data => {
            let countries = ""

            for (const country of data.country) {
              countries += `[${country.country_id}] ${this.data.getCountry(country.country_id)}, `
            }

            span.textContent = `El nombre ingresado "${node.value}" es más común en: ${countries.slice(0, -2)}`
          });
      } else if (ev.keyCode == 8) {
        span.textContent = "---"
      }
    })
  }
}

class createForm extends formListeners {
  #main = document.getElementById("main")

  constructor() {
    super()

    this.buildingForm()
  }

  buildingForm () {
    const form = document.createElement("div")
    this.#main.appendChild(form)
    form.classList.add("form")

    const box_input = document.createElement("div")
    box_input.classList.add("form__box")
    form.appendChild(box_input)

    const label = document.createElement("label")
    label.classList.add("form__box__label")
    label.appendChild(document.createTextNode("Digite el Nombre (Presione \"Enter\" para buscar)"))
    box_input.appendChild(label)

    const input = document.createElement("input")
    input.classList.add("form__box__input")
    box_input.appendChild(input)

    const box_output = document.createElement("div")
    box_output.classList.add("form__box")
    form.appendChild(box_output)

    const labelOutput = document.createElement("label")
    labelOutput.classList.add("form__box__label")
    labelOutput.appendChild(document.createTextNode("Resultados"))
    box_output.appendChild(labelOutput)
    
    const spanOutput = document.createElement("span")
    spanOutput.classList.add("form__box__span")
    spanOutput.textContent = "---"
    box_output.appendChild(spanOutput)
    
    this.getNationalize(input, spanOutput)
  }
}