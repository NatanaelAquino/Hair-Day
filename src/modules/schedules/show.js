import dayjs from "dayjs";
import { shedulesDay } from "./page-load.js";

// seleciona as sessões manhã, tarde e noite

const periodMoring = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")


export function scheduleShow({ dailySchedules }) {
  try {

    // Limpa as listas 
    periodMoring.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    //Renderiza os agendamentos por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement('li')
      const time = document.createElement('strong')
      const name = document.createElement('span')

      //Adiciona o id do agendamento
      item.setAttribute('data-id', schedule.id )

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // cria icone de cancelar o agendamento 
      const cancelIcon = document.createElement('img')
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src" , "./src/assets/cancel.svg")
      cancelIcon.setAttribute('alt', "Cancelar")

      //Adiciona o tempo, nome e icon no item 
      item.append(time,name,cancelIcon)

      //obtém somente a hora 
      const hour = dayjs(schedule.when).hour()

      //Renderiza o agendamneto na sessão 
      if(hour <= 12){
        periodMoring.appendChild(item)
      }else if(hour > 12 && hour <=18){
        periodAfternoon.appendChild(item)
      }else{
         periodNight.appendChild(item)
      }


    });

  } catch (error) {
    alert("Não foi possivel exibir os agendamentos")
    console.log(error)
  }
}