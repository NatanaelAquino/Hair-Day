import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours_load.js"
import { scheduleShow } from "./show.js"
const selectDate = document.getElementById("date")
export async function shedulesDay() {

  //obtém a adata de input
  const date = selectDate.value

  // Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  // Exibe os agendamentos
  scheduleShow({ dailySchedules })

  // renderiza as horas disponiveis 
  hoursLoad({ date, dailySchedules })

}