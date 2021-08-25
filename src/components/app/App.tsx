import React, {useEffect} from "react"
import "./App.module.css"
import style from "./App.module.css"
import {TradersPage} from "../tradersPage/TradersPage"
import {TraderProfile} from "../traderProfile/TraderProfile"
import {useDispatch, useSelector} from "react-redux"
import {getTradersData, setCurrentDate} from "../../redux/tradersReducers"
import {Redirect, Route, Switch} from "react-router-dom"
import {AppRootStateType} from "../../redux/store"
import {Preloader} from "../preloader/Preloader"

export const App: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTradersData())
        dispatch(setCurrentDate(currentDate))
    }, [])

    const {traders, currentDate, isLoading} = useSelector((state: AppRootStateType) => state.traders)

    return (
        <div className={style.app}>
            {traders.length !== 0 && !isLoading ?
                <Switch>
                    <Route exact path={"/"} render={() => <TradersPage/>}/>
                    <Route path={"/traders/:id"} render={() => <TraderProfile/>}/>
                    <Route path={"/404"} render={() => <div className={style.textError}>404: PAGE NOT FOUND</div>}/>
                    <Redirect from={"*"} to={"/404"}/>
                </Switch>
                : <Preloader/>
            }
        </div>
    )
}