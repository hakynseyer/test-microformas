
class menuListeners {
  #main = document.getElementById("main")

  chargeView(node, view) {
    node.addEventListener("click", () => {
      this.#main.innerHTML = ""
      if (view == "countries")
        new createForm()
      else if (view == "dates")
        new calendar()
      else if (view == "locations")
        new createTable(dataJSON)
    })
  }
}

class menu extends menuListeners{
  constructor() {
    super()
    const dates = document.getElementById("dates")
    this.chargeView(dates, "dates")

    const locations = document.getElementById("locations")
    this.chargeView(locations, "locations")

    const countries = document.getElementById("countries")
    this.chargeView(countries, "countries")
  }
}

new menu()