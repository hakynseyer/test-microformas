function fixDate (number) {
  if (number < 10)
    return `0${number}`
  return number
}

class calendarListeners {
  paymentDate (node, output) {
    node.addEventListener("change", async () => {
      if (node.value.length) {
        const theYear = node.value.split("-")[0]
        const theMonth = node.value.split("-")[1]
        const theDay = node.value.split("-")[2]
        /* Forma desechada (DEPRECATED)
        // Contar el número de semanas que contiene el mes actual
        const firstDay = new Date(
            theYear,
            theMonth - 1,
            1,
          )
        const lastDay = new Date(
            theYear,
            theMonth,
            0,
          )
       
        const numberWeeksByMonth = Math.ceil((firstDay.getDay() + lastDay.getDate()) / 7)
        */

        // Obtener el primer día de la última semana del mes
        const currentDay = new Date(
            theYear,
            theMonth - 1,
            theDay
          )

        const lastDay = new Date(
            theYear,
            theMonth,
            0,
          )
        const firstDayOfLastWeek = lastDay.getDate() - lastDay.getDay()
        
        // Validar fecha de cobro
        if (currentDay.getDate() < firstDayOfLastWeek) {
          // El cobro se realizará el día de la adquisición
          output.textContent = `Fecha de cobro ${fixDate(currentDay.getDate())}/${fixDate(currentDay.getMonth() + 1)}/${currentDay.getFullYear()}`
        } else {
          // Obtener día hábil
          const paymentDay = new Date(lastDay)
          let isHoliday = false
          let c = 0 // Contador de control
          
          // Api de Fechas hábiles de Mexico
          // TODO: Podría mejorarse usando otra api mejor
          const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${currentDay.getFullYear()}/MX`)
          const data = await response.json()
          const holidays = []
          for (const hd of data)
            holidays.push(hd.date.replaceAll("-", "/"))

          while (true) {
            isHoliday = false

            paymentDay.setDate(paymentDay.getDate() + 1)
            
            c += 1
            if (c == 1000) {
              console.error("Se ha presentado un error a la hora de validar la fecha")
              break
            }
            
            // Impedir Sabados y Domingos
            if (paymentDay.getDay() == 0 || paymentDay.getDay() == 6)
              continue

            // Impedir días festivos
            for (const hd of holidays) {
              const dateHoliday = new Date(hd)
              if (dateHoliday.getTime() == paymentDay.getTime()) {
                isHoliday = true
                break
              }
            }
            if (isHoliday) {
              continue
            }

            break
          }

          output.textContent = `Fecha de cobro ${fixDate(paymentDay.getDate())}/${fixDate(paymentDay.getMonth() + 1)}/${paymentDay.getFullYear()}`
        }
      } else {
        output.textContent = "Sin fecha de cobro"
      }
    })
  }
}

class calendar extends calendarListeners {
  #main = document.getElementById("main")
  #data = null

  constructor () {
    super()

    this.buildingCalendar()
  }

  buildingCalendar() {
      const calendar = document.createElement("div")
      calendar.classList.add("calendar")
      this.#main.appendChild(calendar) 

      const label = document.createElement("label")
      label.classList.add("calendar__label")
      label.textContent = "Ingrese la fecha de adquisición del producto"
      calendar.appendChild(label)

      const input = document.createElement("input")
      input.classList.add("calendar__input")
      input.setAttribute("type", "date")
      calendar.appendChild(input)

      const output = document.createElement("span")
      output.classList.add("calendar__output")
      output.textContent = "Sin fecha de cobro"
      calendar.appendChild(output)
      
      this.paymentDate(input, output)
  }
}