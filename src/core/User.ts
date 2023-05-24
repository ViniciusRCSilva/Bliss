import { DiaryProps } from "./Diary"
import { EmotionProps } from "./Emotion"
import { HabitProps } from "./Habit"

export interface UserProps {
	name: string
	email: string
    birthdate?: string
	state?: string
	diary?: DiaryProps[]
	emotion?: EmotionProps[]
	habit?: HabitProps[]
}

export class User {
	private _props: UserProps

	constructor(props: UserProps) { this._props = props }

	get name() { return this._props.name }
	get email() { return this._props.email }
	get birthdate() { return this._props.birthdate }
	get state() { return this._props.state }
	get diary() { return this._props.diary }
	get emotion() { return this._props.emotion }
	get habit() { return this._props.habit }

	clone(props: UserProps) {
		return new User({
			...this._props,
			...props
		})
	}
}