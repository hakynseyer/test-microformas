class getAPI {
  getData () {
    fetch('https://api.nationalize.io?name=michael')
      .then(response => response.json())
      .then(data => console.log(data));
  }
}

const data = new getAPI()
data.getData()

class createForm {
  #main = document.getElementById("main")

  constructor() {
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
    label.appendChild(document.createTextNode("Digite el Nombre"))
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
    spanOutput.appendChild(document.createTextNode("---"))
    box_output.appendChild(spanOutput)
  }
}

new createForm()