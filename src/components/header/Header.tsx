import React from "react"
import style from "./Header.module.css"

export const Header: React.FC = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.allHeader}>
                    <div className={style.iconArea}>
                        <div className={style.icon}/>
                    </div>
                    <div className={style.title}>
                        <div className={style.headerTitle}>Трейдеры</div>
                        <div className={style.titleName}>Инвестиционный фонд Solution</div>
                    </div>
                </div>

                <div className={style.version}>
                    <div className={style.panel}>Панель Управления<br/>Solution</div>
                    <div className={style.versionProject}>v.0.2</div>
                </div>
            </div>
            <div className={style.hr}/>
        </>
    )
}