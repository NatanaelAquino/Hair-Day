import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    // enviado dados do agendamentos 
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify({ id, name, when })
    })
    //exibe mensagem do agendamento realizado 
    alert("Agenamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possivel adendar tente novamente mais tarde")
  }
}
