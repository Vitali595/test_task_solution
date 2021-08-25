import React from "react"
import style from "./TraderProfile.module.css"
import {Header} from "../header/Header"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {NavLink, useParams} from "react-router-dom"
import Icon from "../../images/traderIcon.png"
import {ResponseType} from "../../redux/api"
import {BarChart} from "../barChart/BarChart"
import {MySelect} from "../mySelect/MySelect"
import {setIsLoading} from "../../redux/tradersReducers"

export const TraderProfile: React.FC = () => {

    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()
    const {traders} = useSelector((state: AppRootStateType) => state.traders)

    const trader: ResponseType | undefined = traders.find(t => t.id === Number(id))

    const onClickNavLink = () => {
        dispatch(setIsLoading(true))
        setTimeout(() => {
            dispatch(setIsLoading(false))
        }, 1000)
    }

    const addedDate = trader ? trader.added.split("-") : []
    const date1 = new Date(`${addedDate[1]}-${addedDate[2]}-${addedDate[0]}`)
    const currentDate = new Date()
    const date2 = new Date(`${currentDate.getMonth()}-${currentDate.getDay()}-${currentDate.getFullYear()}`)
    const monthLag = Math.ceil(Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) / 30) + 2
    let resultString = `Вступил в команду `
    if (monthLag >= 12) {
        resultString += `1 год назад`
    } else if (monthLag <= 1) {
        resultString += `${monthLag} месяц назад`
    } else if (monthLag === 2 || monthLag === 3 || monthLag === 4) {
        resultString += `${monthLag} месяца назад`
    } else if (monthLag === 5 || monthLag === 6 || monthLag === 7
        || monthLag === 8 || monthLag === 9 || monthLag === 10 || monthLag === 11) {
        resultString += `${monthLag} месяцв назад`
    }

    return (
        <div className={style.traderProfile}>
            <Header/>
            {trader &&
            <div className={style.row}>
                <div className={style.personal}>
                    <img src={Icon} alt="icon" className={style.iconTrader}/>
                    <div className={style.nameTrader}>{trader.name}</div>
                    <div className={style.entryTime}>{resultString}</div>
                    <div className={style.location}>{trader.description}</div>
                </div>
                <div className={style.additionalData}>
                    <div className={style.commonInfo}>
                        <div className={style.column}>
                            <div className={style.title1}>ROI</div>
                            <div className={style.interest}>{`${trader.roi}%`}</div>
                        </div>
                        <div className={style.column}>
                            <div className={style.title1}>Инвесторы</div>
                            <div className={style.count}>{trader.investors}</div>
                        </div>
                    </div>
                    <div className={style.line}/>
                    <div className={style.table}>
                        <div className={style.column1}>
                            <div>
                                <div className={style.title2}>Активов под управлением</div>
                                <div className={style.count}>
                                    {trader.current_assets <= 0 ? "∞" : `${trader.asset} ${trader.current_assets}`}
                                </div>
                            </div>
                            <div>
                                <div className={style.title2}>Собственные активы трейдера</div>
                                <div className={style.count}>
                                    {trader.personal_assets <= 0 ? "∞" : `${trader.asset} ${trader.personal_assets}`}
                                </div>
                            </div>
                            <div>
                                <div className={style.title2}>Минимальный депозит</div>
                                <div className={style.count}>
                                    {trader.min_deposit <= 0 ? "∞" : `${trader.asset} ${trader.min_deposit}`}
                                </div>
                            </div>
                            <div>
                                <div className={style.title2}>Максимальный депозит</div>
                                <div className={style.count}>
                                    {trader.max_deposit <= 0 ? "∞" : `${trader.asset} ${trader.max_deposit}`}
                                </div>
                            </div>
                        </div>
                        <div className={style.column1}>
                            <div>
                                <div className={style.title2}>Копирование сделок</div>
                                <div className={style.count}>Да</div>
                            </div>
                            <div>
                                <div className={style.title2}>Комиссия с успешных сделок</div>
                                <div className={style.count}>{`${trader.fee}%`}</div>
                            </div>
                            <div>
                                <div className={style.title2}>Допустимая просадка</div>
                                <div className={style.count}>{`${trader.allowed_dropdown}%`}</div>
                            </div>
                            <div>
                                <div className={style.title2}>Максимальное количество инвесторов</div>
                                <div className={style.count}>
                                    {trader.max_investors <= 0 ? "∞" : `${trader.max_investors}`}
                                </div>
                            </div>
                        </div>
                        <div className={style.column1}>
                            <div className={style.count}>PnL</div>
                            {trader.pnl.map((tr, i) => {
                                return (
                                    <div className={style.time} key={i}>
                                        <div className={style.title2}>{tr[0]}</div>
                                        {Number(tr[1]) <= 0
                                            ? <div className={style.minusProfit}>{tr[1]}</div>
                                            : <div className={style.plusProfit}>{tr[1]}</div>
                                        }
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            }
            <div className={style.barChart}>
                <div className={style.chart}>
                    <BarChart id={id}/>
                </div>
                <div className={style.select}>
                    <div className={style.selectText}>Выберите год</div>
                    <MySelect id={id}/>
                </div>
            </div>
            <NavLink
                to={`/`}
                className={style.comeBack}
                onClick={onClickNavLink}
            >Все трейдеры</NavLink>
        </div>
    )
}