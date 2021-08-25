import React from "react"
import style from "./ListTraders.module.css"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {NavLink} from "react-router-dom"
import {setIsLoading} from "../../redux/tradersReducers";

export const ListTraders: React.FC = () => {

    const dispatch = useDispatch()

    const {traders} = useSelector((state: AppRootStateType) => state.traders)

    const onClickNavLink = () => {
        dispatch(setIsLoading(true))
        setTimeout(() => {
            dispatch(setIsLoading(false))
        }, 1000)
    }

    return (
        <div className={style.listTraders}>
            {traders.map(trader => {
                return (
                    <div className={style.trader} key={trader.id}>
                        <div className={style.name}>{trader.name}</div>
                        <NavLink
                            to={`/traders/${trader.id}`}
                            className={style.moreDetails}
                            onClick={onClickNavLink}
                        >Подробнее</NavLink>
                    </div>
                )
            })}
        </div>
    )
}