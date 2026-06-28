import { z } from "zod";

export default z.object({
  title: z.string("O título deve ser uma string"),
  ISBN: z.string("O ISBN deve ser uma string"),
  author: z.string("O nome do autor deve ser uma string"),
  publisher: z.string("O nome da editora deve ser uma string"),
  category: z.string("A categoria deve ser uma string"),
  year: z.string("O no deve ser uma string"),
  availableQuantity: z
    .number("A quantidade deve ser em números")
    .positive("A quantidade deve ser positiva"),
});
