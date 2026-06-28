import { z } from "zod";

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export default z.object({
  publicId: z.string("Propriedade 'publicId' deves ser uma string"),
  name: z.string("Propriedade 'nome' deve ser string").optional(),
  email: z.email("Email inválido").optional(),
  phone: z
    .string("Telefone inválido")
    .regex(phoneRegex, "Numero de telefone inválido")
    .optional(),
  bio: z.string("Bio inválida").optional(),
});
