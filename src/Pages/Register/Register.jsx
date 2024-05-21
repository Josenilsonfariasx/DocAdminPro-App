import { set, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {validationRegister} from "./validationRegister"
import style from "./style.module.scss"
import { useState } from "react"
import { Header } from "../../components/Header/Header"
import { Input } from "../../components/Input/Input"
import { useUserContext } from "../../Providers/UserContex"

export const Register = () => {
    const {registerUser} = useUserContext()
    const [loading, setLoading] = useState()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(validationRegister),
    })
    const submit = async (dataForm) => {
        const { email, password, name} = dataForm
        const newForm = {
            name,
            email,
            password,
        }
        setLoading(true)
        const user = await registerUser(newForm)
    }

    return (
        <div className={style.div}>
            <Header visible={true} />
            <main className={style.main}>
                <h1 className="title white">Crie uma conta</h1>
                <span className="title headline grey">
                  vamos nessa 🚀
                </span>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div>
                            <Input
                                label="Nome"
                                type="text"
                                placeholder="Digite seu Nome"
                                {...register("name")}
                                error={errors.name}
                            />
                            <Input
                                label="Email"
                                type="text"
                                placeholder="Digite seu email"
                                {...register("email")}
                                error={errors.email}
                            />
                            <Input
                                label="Senha"
                                type="password"
                                placeholder="Digite seu senha"
                                {...register("password")}
                                error={errors.password}
                            />
                            <Input
                                label="Confirme sua senha"
                                type="password"
                                placeholder="Confirme sua senha"
                                {...register("confirmPassword")}
                                error={errors.confirmPassword}
                            />
                            <button className="button">
                                {loading ? "Cadastrando" : "Cadastre-se"}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}