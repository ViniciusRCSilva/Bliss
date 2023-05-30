import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { collection, deleteField, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore'
import Router from 'next/router'
import Cookie from 'js-cookie'

import { auth, db } from '../firebase/config'
import { ProviderUserProps } from '../core/ProviderUser'
import { User } from '../core/User'
import { date_TO_String } from '@/utils'
import { Habit } from '@/core/Habit'

export class AuthenticationProvider implements ProviderUserProps {

	private _provider = new GoogleAuthProvider()
	private _user = new User({
		email: '',
		name: ''
	})

	async loginGoogle(): Promise<User> {
		const login = await signInWithPopup(auth, this._provider)

		return this._user.clone({
			name: login.user.displayName ?? '',
			email: login.user.email ?? ''
		})
	}

	async loginPassword(email: string, password: string): Promise<User> {
		const userRequest = await signInWithEmailAndPassword(auth, email, password)

		return this._user.clone({
			name: userRequest.user.displayName ?? '',
			email: userRequest.user.email ?? ''
		})
	}

	async createUserPassword(email: string, password: string): Promise<void> {
		createUserWithEmailAndPassword(auth, email, password)
	}

	async createTextDiary(text: string, user: User): Promise<void> {
		const userRef = doc(db, "users", user.email)
		const diaryUser = user.diary

		diaryUser?.push({
			text,
			createdAt: date_TO_String(new Date())
		})

		await updateDoc(userRef, {
			diary: diaryUser
		})
	}

	async createHabit(day: string, hour: string, name: string, user: User): Promise<void> {
		const userRef = doc(db, "users", user.email)
		const habitUser = user.habit

		habitUser?.push({
			day,
			hour,
			name,
			completed: false
		})

		await updateDoc(userRef, {
			habit: habitUser
		})
	}

	async deleteTextDiary(date: string, user: User): Promise<void> {
		const userRef = doc(db, "users", user.email)
		const diaryUser = user.diary

		const searchDiary = diaryUser?.filter(d => d.createdAt !== date)

		await updateDoc(userRef, {
			diary: searchDiary ?? []
		})
	}

	async deleteHabit(day: string, hour: string, user: User): Promise<void> {
		const userRef = doc(db, "users", user.email)
		const habitUser = user.habit

		const searchHabit = habitUser?.filter(d => d.day !== day && d.hour !== hour)

		await updateDoc(userRef, {
			habit: searchHabit ?? []
		})
	}

	/* começar a pensar na logica */
	async updateHabit(habit:Habit, user: User): Promise<void> {
		const userRef = doc(db, "users", user.email);

		await updateDoc(userRef, {
			/*  */
		})
	}

	async updateUser(user: User): Promise<void> {
		const userRef = doc(db, "users", user.email);

		await updateDoc(userRef, {
			name: user.name,
		})
	}

	async getUser(user: User): Promise<User | false> {
		const searchedUser = query(collection(db, 'users'), where('email', '==', user.email))

		const resolveQuery = await getDocs(searchedUser)

		return resolveQuery.empty ? false : user
	}

	async submitUser(user: User): Promise<void> {
		await setDoc(doc(db, 'users', user.email), {
			name: user.name,
			email: user.email,
			state: user.state ?? '',
			birthdate: user.birthdate ?? '',
		})
	}

	async emotionUser(emotion: string, user: User): Promise<void> {
		const userRef = doc(db, "users", user.email)
		const emotionUser = user.emotion ?? []

		emotionUser.push({
			emotion,
			date: date_TO_String(new Date())
		})

		await updateDoc(userRef, {
			emotion: emotionUser
		})
	}

	async logout(): Promise<void> {
		await signOut(auth)
		Cookie.remove('Admin-Bliss')
		Router.push('/login')
	}

	async getUserLogged(cookie: string): Promise<User> {
		const searchedUser = query(collection(db, 'users'), where('email', '==', cookie))
		const resolveQuery = getDocs(searchedUser)

		return new Promise((resolve, reject) => {
			try {
				resolveQuery.then((list) => {
					list.forEach((doc) => {
						resolve(new User({
							name: doc.data().name,
							email: doc.data().email,
							birthdate: doc.data().birthdate,
							state: doc.data().state ?? '',
							diary: doc.data().diary ?? [],
							emotion: doc.data().emotion ?? [],
							habit: doc.data().habit ?? []
						}))
					})
				})
			} catch (error) {
				reject(error)
			}
		})
	}

	static setCookieUser(user: User) {
		Cookie.set('Admin-Bliss', user.email, { expires: 7 })
	}
}