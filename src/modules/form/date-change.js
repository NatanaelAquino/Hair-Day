import {shedulesDay} from "../schedules/page-load.js"

//seleciona o input de data 
const selectedDate = document.getElementById("date")

//recarregar a list de horários quando o input de data mudar 
selectedDate.onchange = () => shedulesDay()