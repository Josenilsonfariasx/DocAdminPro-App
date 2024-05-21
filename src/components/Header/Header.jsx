// import { useUserContext } from "../../providers/UserContext"
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss"
import { toast } from "react-toastify";
export const Header = ({visible}) => {
    const logout = ()=>{
      toast.success("Volte sempre")
      const navi = useNavigate()
      navi('/')
    }
    return (
        <header className={(visible ? style.headerBtn : style.header)}>
            <div className="container">
                <h1 className="title one">Doc Admin</h1>
                {visible?<button className="button variant" onClick={()=>logout() }>Sair</button>: null}
            </div>
        </header>
    )
}