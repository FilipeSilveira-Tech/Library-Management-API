import { z } from "zod";

export default z.object({
  name: z.string("Nome é obrigatório"),
  email: z.email("Email é obrigatório"),
  phone: z.string("Telefone inválido").length(11).optional(),
  bio: z.string("Bio inválida").optional(),
});
