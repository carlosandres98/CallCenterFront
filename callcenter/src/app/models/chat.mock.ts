import { ChatModel, ChatResponseModel } from "./chat.model";

export const ChatMock: ChatModel = {
    title: "CONVERSACION 1",
    content: "11:51:00 CLIENTE1: Hola\n11:51:05 ASESOR1: Hola CLIENTE1, bienvenido al centro de servicio.\n11:51:10 CLIENTE1: Buenas tardes, tengo un inconveniente URGENTE\n11:51:15 ASESOR1: Con mucho gusto lo atenderemos.\n11:51:25 CLIENTE1: Gracias. EXCELENTE SERVICIO"
}

export const ChatResponseMock: ChatResponseModel = {
    isCheck: true,
    title: "CONVERSACION 1",
    points: 150
}

export const AllChats: ChatModel[] = [
    {
        title: "CONVERSACION 1",
        content: "11:51:00 CLIENTE1: Hola\n11:51:05 ASESOR1: Hola CLIENTE1, bienvenido al centro de servicio.\n11:51:10 CLIENTE1: Buenas tardes, tengo un inconveniente URGENTE\n11:51:15 ASESOR1: Con mucho gusto lo atenderemos.\n11:51:25 CLIENTE1: Gracias. EXCELENTE SERVICIO"
    },
    {
        title: "CONVERSACION 2",
        content: "11:55:00 CLIENTE2: Hola\n11:55:05 ASESOR1: Hola CLIENTE2, bienvenido al centro de servicio.\n11:55:06 CLIENTE2: Sólo para felicitarlos por el EXCELENTE SERVICIO\n11:57:16 ASESOR1: Muchas gracias, tomaremos nota de su felicitación.\n11:57:18 CLIENTE2: Hasta luego.\n11:58:26 ASESOR1: Hasta luego."
    },
    {
        title: "CONVERSACION 3",
        content: "11:58:30 CLIENTE3: Hola\n11:58:35 ASESOR1: Hola CLIENTE3, bienvenido al centro de servicio\n11:58:40 CLIENTE3: Buenas tardes, tengo un inconveniente URGENTE y de verdad necesito resolverlo de manera URGENTE\n11:58:45 ASESOR1: Con mucho gusto lo atenderemos.\n11:58:55 CLIENTE3: Por favor, deben atenderlo de manera URGENTE"
    }
];