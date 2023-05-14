function getFormat(n: number){
    let number = ("0" + n).slice(-2)
    return number
}

function date_TO_String(date_Object: Date){
    var date_String = 
    getFormat(date_Object.getDate()) + "/" + getFormat((date_Object.getMonth() + 1)) + "/" + date_Object.getFullYear()
        
    return date_String;
}


export {
    date_TO_String,
    getFormat
}

/* const date = new Date()
const [day, setDay] = useState<string>(getFormat(date.getDate()))
const [month, setMonth] = useState<string>(getFormat(date.getMonth()+1))
const [year, setYear] = useState<any>(date.getFullYear())
const [formatDate, setFormatDate] = useState('') */

/* let numberMonth = parseInt(month!)

let PreviousLastDayOfMonth = new Date(year, numberMonth-1, 0).getDate()

let AfterLastDayOfMonth = new Date(year, numberMonth, 0).getDate()

function getPreviousDate(d: string, m: string){
    let day = d
    let month = m

    let today = parseInt(day)
    let actualMonth = parseInt(month)

    let previousDay = today - 1

    if(previousDay < 1){
        setDay(getFormat(PreviousLastDayOfMonth))
        
        setFormatDate(`${year}-${month}-${getFormat(PreviousLastDayOfMonth)}`)
        console.log(formatDate)
        
        let previousMonth = actualMonth - 1
        setMonth(getFormat(previousMonth))
        
        setFormatDate(`${year}-${getFormat(previousMonth)}-${getFormat(PreviousLastDayOfMonth)}`)
        console.log(formatDate)

        if(previousMonth <= 0){
            setMonth("12")

            setYear(date.getFullYear()-1)
        }
    }else{
        setDay(getFormat(previousDay))
        
        setFormatDate(`${year}-${month}-${getFormat(previousDay)}`)
        console.log(formatDate)
    }
}

function getAfterDate(d: string, m: string){
    let day = d
    let month = m

    let today = parseInt(day)
    let actualMonth = parseInt(month)

    let afterDay = today + 1

    if(afterDay > AfterLastDayOfMonth){
        setDay('01')
        
        setFormatDate(`${year}-${month}-01`)
        console.log(formatDate)
        
        let afterMonth = actualMonth + 1
        setMonth(getFormat(afterMonth))
        
        setFormatDate(`${year}-${getFormat(afterMonth)}-${day}`)
        console.log(formatDate)

        if(afterMonth > 12){
            setMonth("01")

            setYear(date.getFullYear())
        }
    }else{
        setDay(getFormat(afterDay))
        
        setFormatDate(`${year}-${month}-${getFormat(afterDay)}`)
        console.log(formatDate)
    }
}

useEffect(() => {
    setFormatDate(`${year}-${month}-${day}`)
}, []) */

/* <div className="flex w-full items-center justify-between">
        <div onClick={() => getPreviousDate(day, month)} className="flex w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full cursor-pointer">
            <CaretLeft weight="bold" className="text-xl"/>
        </div>

        <div className="flex flex-col justify-center items-center select-none">
            <p className="font-light">Dia {day}/{month}</p>
            <p className="text-lg">{year}</p>
        </div>

        {day == getFormat(date.getDate()) && month == getFormat(date.getMonth()+1) && year == date.getFullYear() ? (
            <div className="opacity-0 w-9 h-9">
            </div>
        ) : (
            <div onClick={() => getAfterDate(day, month)} className="flex animate-screenOpacity w-9 h-9 justify-center items-center text-white bg-green-blue rounded-full cursor-pointer">
                <CaretRight weight="bold" className="text-xl"/>
            </div>
        )}
    </div> */