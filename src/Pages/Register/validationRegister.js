import { z } from "zod";

export const validationRegister = z.object({
  name: z.string().min(1, { message: "O campo nome é obrigatorio" }),
  email: z.string().nonempty({message:"Email é obrigatorio"}).email({message:"Email Invalido"}),
  password: z
        .string()
        .nonempty("É obrigatorio")
        .min(8, "E necessario pelo menos 8 digitos")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .regex(/(?=.*?[#?!@$%^*&-])/, "É necessário pelo menos um número."),
        confirmPassword: z.string().nonempty("É obrigatorio"),
}).refine(({password, confirmPassword})=>password === confirmPassword,{
  message:"As senhas devem ser identicas",
  path:["confirmPassword"],
})