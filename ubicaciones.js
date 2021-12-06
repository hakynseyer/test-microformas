dataJSON = {
    "ubicaciones": [{
            "latitude": 40.416875,
            "longitude": -3.703308,
            "city": "Ciudad de México",
            "description": "Paseo de la reforma"
        },
        {
            "latitude": 40.417438,
            "longitude": -3.693363,
            "city": "Monterrey",
            "description": "Parque Fundidora"
        },
        {
            "latitude": 40.407015,
            "longitude": -3.691163,
            "city": "Guadalajara",
            "description": "Centro historico"
        },
    ]
}

class tableListeners {
  activeLower = false
  activeUpper = false

  orderListener (node, type = "lower") {
    const self = this

    node.addEventListener("click", () => {
      this.activeLower = false
      this.activeUpper = false

      for (const button of document.getElementsByClassName("table__row__col__button"))
        button.classList.remove("table__row__col__button--active")  

      if (type == "lower") {
        const dataLower = JSON.parse(JSON.stringify(dataJSON))

        dataLower.ubicaciones.sort((a, b) => {
          if (a.city < b.city)
            return -1
          if (a.city > b.city)
            return 1

          return 0
        })

        this.clearTable()
        this.activeLower = true
        this.buildingTable(dataLower)
      } else if (type == "upper") {
        const dataUpper = JSON.parse(JSON.stringify(dataJSON))

        dataUpper.ubicaciones.sort((a, b) => {
          if (a.city > b.city)
            return -1
          if (a.city < b.city)
            return 1

          return 0
        })

        this.clearTable()
        this.activeUpper = true
        this.buildingTable(dataUpper)
      }
    })
  }
}

class createTable extends tableListeners {
  #main = document.getElementById("main")
  #data = null

  constructor (data) {
    super()

    this.buildingTable(data)
  }

  buildingTable (data) {
    const area = document.createElement("div")
    area.classList.add("area")
    this.#main.appendChild(area)

    this.#data = data != null? data : null

    area.appendChild(this.table())
  }

  clearTable () {
    this.#main.innerHTML = ""
  }

  colItem (textData) {
    const col = document.createElement("span")
    col.classList.add("table__row__col") 
    
    col.appendChild(document.createTextNode(textData))

    return col
  }

  rowInfo (index, item) {
    const row = document.createElement("div")
    row.classList.add("table__row")

    row.appendChild(this.colItem(index))
    row.appendChild(this.colItem(item.city))
    row.appendChild(this.colItem(item.description))
    row.appendChild(this.colItem(item.latitude))
    row.appendChild(this.colItem(item.longitude))

    return row
  }

  rowHeader () {
    const row = document.createElement("div")
    row.classList.add("table__row")
    row.classList.add("table__row--header")

    row.appendChild(this.colItem("Num"))
    
    const order = document.createElement("div")
    order.classList.add("table__row__col")

    order.appendChild(this.colItem("CIUDAD"))

    const orderLower = document.createElement("span")
    orderLower.classList.add("table__row__col__button")
    orderLower.classList.add("table__row__col__button--first")
    if (this.activeLower)
      orderLower.classList.add("table__row__col__button--active")
    orderLower.appendChild(document.createTextNode("A-Z"))
    this.orderListener(orderLower)
    const noticeLower = document.createElement("span")
    noticeLower.classList.add("table__row__col__notice")
    noticeLower.appendChild(document.createTextNode("Click aqui para ordenar en forma ascendente"))
    orderLower.appendChild(noticeLower)
    order.appendChild(orderLower)

    const orderUpper = document.createElement("span")
    orderUpper.classList.add("table__row__col__button")
    orderUpper.classList.add("table__row__col__button--second")
    if (this.activeUpper)
      orderUpper.classList.add("table__row__col__button--active")
    orderUpper.appendChild(document.createTextNode("Z-A"))
    this.orderListener(orderUpper, "upper")
    const noticeUpper = document.createElement("span")
    noticeUpper.classList.add("table__row__col__notice")
    noticeUpper.classList.add("table__row__col__notice--last")
    noticeUpper.appendChild(document.createTextNode("Click aqui para ordenar en forma descendente"))
    orderUpper.appendChild(noticeUpper)
    order.appendChild(orderUpper)

    row.appendChild(order)
    row.appendChild(this.colItem("DESCRIPCIÓN"))
    row.appendChild(this.colItem("LATITUD"))
    row.appendChild(this.colItem("LONGITUD"))

    return row
  }

  table () {
    const table = document.createElement("div")
    table.classList.add("table")

    // Cabecera de la tabla
    table.appendChild(this.rowHeader())
    
    if (this.#data != null) {
      for (const [index, item] of this.#data["ubicaciones"].entries()) {
        table.appendChild(this.rowInfo(index + 1, item))
      }
    }

    return table
  }
}

new createTable(dataJSON)