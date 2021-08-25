import axios from "axios"

const instance = axios.create({
    baseURL: "https://solution-fund.com/api/trader/",
    headers: {
        "Authorization": "Bearer OudDwOorhDOBpLZpxjnekDOEnkfTqHGU"
    }
})

export const tradersAPI = {
    getAll() {
        return instance.get<{ traders: Array<ResponseType> }>("getAll/dummy")
    }
}

export type ResponseType = {
    added: string
    allowed_dropdown: number | null
    asset: string | null
    avatar: string
    created_at: string | null
    current_assets: number
    description: string | null
    fee: number | null
    history: HistoryType
    id: number | null
    investors: number | null
    max_deposit: number
    max_investors: number
    min_deposit: number
    name: string | null
    personal_assets: number
    pnl: Array<PnLType>
    roi: string | null
    track: number | null
    updated_at: string | null
}

export type PnLType = Array<string>

export type HistoryType = {
    2019: Object | null
    2020: Object | null
    2021: Object | null
}