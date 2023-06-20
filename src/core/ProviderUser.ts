import { Habit } from "./Habit"
import { User } from "./User"

export interface ProviderUserProps {
	loginGoogle(): Promise<User>
	loginPassword(email: string, password: string): Promise<User>
	createUserPassword(email: string, password: string): Promise<void>
	createTextDiary(text: string, user: User): Promise<void>
	createHabit(id:string, day: string, hour: string, name: string, user: User): Promise<void>
	deleteTextDiary(date:string, user: User): Promise<void>
	deleteHabit(id: string, user: User): Promise<void>
	updateHabit(habit: Habit, user: User): Promise<void>
	updateUser(user: User): Promise<void>
	getUser(user: User): Promise<User | false>
	getUserLogged(cookie: string): Promise<User>
	submitUser(user: User): Promise<void>
	emotionUser(emotion:string, user: User): Promise<void>
	logout(): Promise<void>
}

export class ProviderUser {
	private _providerAuthentication: ProviderUserProps

	constructor(provider: ProviderUserProps) { this._providerAuthentication = provider }

	async loginGoogle(): Promise<User> {
		const user = await this._providerAuthentication.loginGoogle()

		return user
	}

	async loginPassword(email: string, password: string): Promise<User> {
		const user = await this._providerAuthentication.loginPassword(email, password)

		return user
	}

	async createUserPassword(email: string, password: string): Promise<void> {
		await this._providerAuthentication.createUserPassword(email, password)
	}

	async createTextDiary(text: string, user: User): Promise<void> {
		await this._providerAuthentication.createTextDiary(text, user)
	}

	async createHabit(id:string, day: string, hour: string, name: string, user: User): Promise<void> {
		await this._providerAuthentication.createHabit(id, day, hour, name, user)
	}

	async deleteTextDiary(date:string, user: User): Promise<void> {
		await this._providerAuthentication.deleteTextDiary(date, user)
	}

	async deleteHabit(id: string, user: User): Promise<void> {
		await this._providerAuthentication.deleteHabit(id, user)
	}

	async getUser(user: User): Promise<User | false> {
		const userReceived = await this._providerAuthentication.getUser(user)

		return userReceived
	}

	async submitUser(user: User): Promise<void> {
		await this._providerAuthentication.submitUser(user)
	}

	async emotionUser(emotion: string, user: User): Promise<void> {
		await this._providerAuthentication.emotionUser(emotion, user)
	}

	async logout(): Promise<void> {
		await this._providerAuthentication.logout()
	}

	async getUserLogged(cookie: string): Promise<User> {
		const user = await this._providerAuthentication.getUserLogged(cookie)

		return user
	}

	async updateHabit(habit: Habit, user: User): Promise<void>{
		await this._providerAuthentication.updateHabit(habit, user)
	}

	async updateUser(user: User): Promise<void>{
		await this._providerAuthentication.updateUser(user)
	}
}