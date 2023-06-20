export interface HabitProps {
    id: string
    day: string
    hour: string
    name: string
    completed: boolean
}

export class Habit {
    private _props: HabitProps

    constructor(props: HabitProps) { this._props = props }

    get day() { return this._props.day }
    get hour() { return this._props.hour }
    get name() { return this._props.name }
    get completed() { return this._props.completed }
}