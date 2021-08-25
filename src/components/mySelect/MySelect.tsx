import React, {useEffect} from "react"
import Select from "react-select"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../redux/store"
import {setCurrentDate} from "../../redux/tradersReducers"

type MySelectPropsType = {
    id: string
}

export const MySelect: React.FC<MySelectPropsType> = ({id}) => {

    const dispatch = useDispatch()
    const {traders} = useSelector((state: AppRootStateType) => state.traders)

    useEffect(() => {
        if (options[0]) {
            dispatch(setCurrentDate(options[0].value))
        }
    }, [])

    const historyObj = traders.find(t => t.id === Number(id))
    const optionsValue = historyObj ? historyObj.history : []
    const options = Object.entries(optionsValue).map(v => ({value: v[0], label: v[0]}))

    const selectCallback = (e: { value: string, label: string } | null) => {
        if (e) {
            dispatch(setCurrentDate(e.value))
        }
    }

    const customStyle = {
        control: (styles: any) => ({
            ...styles,
            border: "0",
            boxShadow: "none",
            margin: "10px 10px 10px 0",
            backgroundColor: "rgb(57 60 69)",
            fontSize: "1rem",
            paddingLeft: 'center',
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.1"
        }),
        singleValue: (styles: any) => ({
            ...styles,
            backgroundColor: "rgb(57 60 69)",
            color: "#949ba2",
            border: "none",
            fontSize: "1rem",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.1"
        }),
        option: (styles: any) => ({
            ...styles,
            backgroundColor: "rgb(57 60 69)",
            color: "#949ba2",
            fontSize: "1rem",
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.1",
            "&:hover": {
                backgroundColor: "#007bff",
                color: "#FFFF"
            }
        }),
        menu: (styles: any) => ({
            ...styles,
            backgroundColor: "rgb(57 60 69)"
        })
    }

    return (
        <Select
            options={options}
            styles={customStyle}
            defaultValue={options[0]}
            onChange={selectCallback}
        />
    )
}