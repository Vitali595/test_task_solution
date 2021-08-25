import {Dispatch} from "redux";
import {ResponseType, tradersAPI} from "./api"

const initialState = {
    traders: [] as Array<ResponseType>,
    currentDate: null as string | null,
    isLoading: false
}

type InitialStateType = typeof initialState
type ActionsType =
    ReturnType<typeof setTradersData>
    | ReturnType<typeof setCurrentDate>
    | ReturnType<typeof setIsLoading>

export const tradersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "tradersReducer/SET_TRADERS_DATA":
            return {...state, traders: action.data.map(d => ({...d, history: d.history, pnl: [...d.pnl]}))}
        case "tradersReducer/SET_CURRENT_DATE":
            return {...state, currentDate: action.date}
        case "tradersReducer/SET_IS_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const setTradersData = (data: Array<ResponseType>) => ({type: "tradersReducer/SET_TRADERS_DATA", data} as const)
export const setCurrentDate = (date: string | null) => ({type: "tradersReducer/SET_CURRENT_DATE", date} as const)
export const setIsLoading = (isLoading: boolean) => ({type: "tradersReducer/SET_IS_LOADING", isLoading} as const)

export const getTradersData = () => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    tradersAPI.getAll()
        .then(res => {
            dispatch(setTradersData(res.data.traders))
            dispatch(setIsLoading(false))
        })
        .catch(error => {
            console.log(error.message ? error.message : "some error... Please try again.")
            dispatch(setIsLoading(false))
        })
}