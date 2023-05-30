import { ReactNode } from "react"
import style from "./button.module.css"

type Props = {
    children: ReactNode,
    enabled?: boolean,
    handleClick: () => void,
}

export const Button = ({children, enabled, handleClick} : Props) => (
    <button className={style.css} onClick={handleClick} disabled={!enabled}>{children}</button>
)