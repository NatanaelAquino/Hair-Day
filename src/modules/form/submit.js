import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new"
import { shedulesDay } from "../schedules/page-load"
const form = document.querySelector("form")
const clienteName = document.getElementById("client")
const selecteDate = document.getElementById('date')

//Data atual para o input 
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
//carrega  da data atual 
selecteDate.value = inputToday
// Define a data minima como sendo a data atual 
selecteDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()
  try {
    // recuperando o nome do cliente 
    const name = clienteName.value.trim()
    if (!name) {
      return alert("Informe o nome do cliente!")
    }
    // Recupera o horário selecionado 
    const hourSelected = document.querySelector(".hour-selected")
    if (!hourSelected) {
      return alert("Informeo horario!")
    }
    // recupera somente o hora
    const [hour] = hourSelected.innerText.split(":")

    //Inser a hora na data 
    const when = dayjs(selecteDate.value).add(hour, "hour")

    // gera um ID 
    const id = new Date().getTime()
    // faz o agendamento 
    await scheduleNew({
      id,
      name,
      when
    })
    // Recarregar o agendamentos
    await shedulesDay()

    clienteName.value = ""

  } catch (error) {
    alert("Não foi possivel realizar o agendamento")
    console.log(error)
  }

}