import { z } from "zod";

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export default z.object({
  name: z.string("Nome é obrigatório"),
  email: z.email("Email é obrigatório"),
  phone: z
    .string("Telefone inválido")
    .min(1, "O telefone é obrigatório")
    .regex(phoneRegex, "Numero de telefone inválido"),
  bio: z.string("Bio inválida").optional(),
});
