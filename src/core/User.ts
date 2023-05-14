import { DiaryProps } from "./Diary"

const date = new Date()

export interface UserProps {
	name: string
	email: string
    birthdate?: string
	state?: string
	diary?: DiaryProps[]
}

export class User {
	private _props: UserProps

	constructor(props: UserProps) { this._props = props }

	get name() { return this._props.name }
	get email() { return this._props.email }
	get birthdate() { return this._props.birthdate }
	get state() { return this._props.state }
	get diary() { return this._props.diary }

	clone(props: UserProps) {
		return new User({
			...this._props,
			...props
		})
	}
}