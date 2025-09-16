import { scheduleCancel } from "../../services/schedule-cancel.js";
import { shedulesDay } from "./page-load.js"
const periods = document.querySelectorAll(".period")


// gera evento de click para cada lista 

periods.forEach((period) => {
  //caputra o evento de clique na lista 
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li")
      const { id } = item.dataset
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
        if (isConfirm) {
          await scheduleCancel({ id })
          shedulesDay()
        }
      }
    }
  })
});