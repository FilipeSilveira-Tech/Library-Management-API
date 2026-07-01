import { string, z } from "zod";

const isbnRegex = /^(?:97[89]-?)?[0-9]{1,5}-?[0-9]{1,7}-?[0-9]{1,7}-?[0-9X]$/;

export default z.object({
  title: z.string("O título deve ser uma string"),
  ISBN: z
    .string("O ISBN deve ser uma string")
    .regex(isbnRegex, "O ISBN inválido"),
  author: z.string("O nome do autor deve ser uma string"),
  publisher: z.string("O nome da editora deve ser uma string"),
  category: z.array(
    z.string("O conteudo do array deve ser em formato de string"),
    "A categoria deve ser em formato de array",
  ),
  year: z.string("O no deve ser uma string"),
  availableQuantity: z
    .number("A quantidade deve ser em números")
    .positive("A quantidade deve ser positiva"),
});
