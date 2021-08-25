import {Bar} from "react-chartjs-2"
import {useSelector} from "react-redux"

export const BarChart = ({id}) => {

    const {traders, currentDate} = useSelector((state) => state.traders)

    const historyObj = traders.find(t => t.id === Number(id)).history
    const yearArr = historyObj.length !== 0 ? historyObj[currentDate] : null

    const labelsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const dataArr = ["", "", "", "", "", "", "", "", "", "", "", ""]
    if (yearArr) {
        for (let i = 0; i < labelsArr.length; i++) {
            dataArr[i] = yearArr[labelsArr[i]]
        }
    }

    const barData = {
        labels: labelsArr,
        datasets: [
            {
                data: yearArr ? dataArr : [],
                backgroundColor: context => context.raw <= 0 ? "#c11e1e" : "rgb(53,171,23)",
            }
        ]
    }

    const barOptions = {
        options: {
            scales: {
                y: {
                    ticks: {
                        stepSize: 10,
                        callback: function (value) {
                            return value + "%";
                        }
                    },
                    grid: {
                        color: context => context.tick.label === "0%" ? "#ffffff" : "#2f323b"
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                legend: false
            }
        }
    }

    return (
        <div>
            <Bar
                data={barData}
                options={barOptions.options}
            />
        </div>
    )
}