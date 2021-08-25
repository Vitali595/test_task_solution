import React from "react"
import style from "./TradersPage.module.css"
import {ListTraders} from "../listTraders/ListTraders"
import {Header} from "../header/Header"

export const TradersPage: React.FC = () => {
    return (
        <div className={style.tradersPage}>
            <Header/>
            <ListTraders/>
        </div>
    )
}