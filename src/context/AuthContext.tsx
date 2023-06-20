import Router from "next/router"
import { useEffect, useState } from "react"
import { createContext } from "react"
import Cookie from 'js-cookie'

import { User } from "../core/User"
import { AuthenticationProvider } from "../provider/AuthProvider"
import { ProviderUser } from "../core/ProviderUser"
import { Diary } from "@/core/Diary"
import { Emotion } from "@/core/Emotion"
import { Habit } from "@/core/Habit"

interface AuthContextProps {
    loginGoogle: () => Promise<void>
    loginPassword(email: string, password: string): Promise<void>
    createUserPassword(name: string, state: string, email: string, password: string, birthdate: string): Promise<void>
    createTextDiary(text: string, user: User): Promise<Diary | void>
    createHabit(id:string, day: string, hour: string, name: string, user: User): Promise<Habit | void>
    deleteTextDiary(date: string, user: User): Promise<void>
    deleteHabit(id: string, user: User): Promise<void>
    updateHabit(habit: Habit, user: User): Promise<void>
    updateUser(user: User): Promise<void>
    logout(): Promise<void>
    getUser(user: User): Promise<User | false>
    submitUser(user: User): Promise<void>
    emotionUser(emotion: string, user: User): Promise<Emotion | void>
    user: User
    diary: Diary
    emotion: Emotion
    habit: Habit
    setUser: (value: any) => void
    loading: boolean
    setLoading: any
}

const AuthContext = createContext<AuthContextProps>({
    loginGoogle: () => Promise.resolve(),
    loginPassword: () => Promise.resolve(),
    createUserPassword: () => Promise.resolve(),
    createTextDiary: () => Promise.resolve(),
    createHabit: () => Promise.resolve(),
    deleteTextDiary: () => Promise.resolve(),
    deleteHabit: () => Promise.resolve(),
    updateHabit: () => Promise.resolve(),
    updateUser: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    getUser: (user: User) => Promise.resolve(user),
    submitUser: () => Promise.resolve(),
    emotionUser: () => Promise.resolve(),
    user: new User({
        email: '',
        name: ''
    }),
    emotion: new Emotion({
        emotion: '',
        date: ''
    }),
    habit: new Habit({
        id: '',
        day: '',
        hour: '',
        name: '',
        completed: false
    }),
    diary: new Diary({
        text: '',
        createdAt: ''
    }),
    setUser: () => { },
    loading: false,
    setLoading: {}
})

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(new User({ email: '', name: '' }))
    const [emotion, setEmotion] = useState<Emotion>(new Emotion({ emotion: '', date: '' }))
    const [habit, setHabit] = useState<Habit>(new Habit({ id: '', day: '', hour: '', name: '',completed: false }))
    const [diary, setDiary] = useState<Diary>(new Diary({ text: '', createdAt: '' }))
    const authentication = new ProviderUser(new AuthenticationProvider())
    const userCookie = Cookie.get('Admin-Bliss')

    async function loginGoogle() {
        setLoading(true)
        const loggedUser = await authentication.loginGoogle()
        const searchedUser = await getUser(loggedUser)

        if (searchedUser) {
            AuthenticationProvider.setCookieUser(searchedUser)
            setLoading(false)
            Router.push('/')
        } else {
            submitUser(loggedUser)
            setUser(loggedUser)
            AuthenticationProvider.setCookieUser(loggedUser)
            setLoading(false)
            Router.push('/register')
        }
    }

    async function loginPassword(email: string, password: string) {
        setLoading(true)
        try {
            const loggedUser = await authentication.loginPassword(email, password)
            const searchedUser = await getUser(loggedUser)

            if (searchedUser) {
                AuthenticationProvider.setCookieUser(searchedUser)
                Router.push('/').then(() => setLoading(false))
            }

        } catch (error: any) {
            const erro = error.message
        }
        setLoading(false)
    }

    async function createUserPassword(name: string, state: string, email: string, password: string, birthdate: string) {
        setLoading(true)
        const user = new User({
            email,
            name,
            state,
            birthdate
        })
        try {
            await authentication.createUserPassword(email, password)
            await authentication.submitUser(user)
            const loggedUser = await authentication.loginPassword(email, password)
            const searchedUser = await getUser(loggedUser)

            if (searchedUser) {
                AuthenticationProvider.setCookieUser(searchedUser)
                Router.push('/login').then(() => setLoading(false))
            }

        } catch (error: any) {
            const erro = error.message
        }

        setLoading(false)
    }

    async function createTextDiary(text: string, user: User) {
        setLoading(true)

        await authentication.createTextDiary(text, user)

        setLoading(false)
    }

    async function createHabit(id: string, day: string, hour: string, name: string, user: User) {
        setLoading(true)

        await authentication.createHabit(id, day, hour, name, user)

        setLoading(false)
    }

    async function deleteTextDiary(date: string, user: User) {
        setLoading(true)

        await authentication.deleteTextDiary(date ,user)

        setLoading(false)
    }

    async function deleteHabit(id: string, user: User) {
        setLoading(true)

        await authentication.deleteHabit(id, user)

        setLoading(false)
    }

    async function getUser(user: User) {
        setLoading(true)

        const userReceived = await authentication.getUser(user)

        setLoading(false)

        return userReceived ? userReceived : false
    }

    async function updateHabit(habit:Habit, user: User) {
        await authentication.updateHabit(habit, user)
    }

    async function updateUser(user: User) {
        setLoading(true)

        await authentication.updateUser(user)

        setLoading(false)
    }

    async function submitUser(user: User) {
        setLoading(true)

        await authentication.submitUser(user)

        setLoading(false)
    }

    async function emotionUser(emotion: string, user: User) {
        await authentication.emotionUser(emotion, user)
    }

    async function logout() {
        setLoading(true)

        await authentication.logout()

        setUser(new User({ name: '', email: '' }))

        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)

        if (userCookie) {
            authentication.getUserLogged(userCookie).then((user) => {
                setUser(user)
            })
        } else {
            Router.push('/login')
        }

        setLoading(false)
    }, [userCookie])

    const values = {
        loginGoogle,
        loginPassword,
        createUserPassword,
        createTextDiary,
        createHabit,
        deleteTextDiary,
        deleteHabit,
        updateHabit,
        updateUser,
        logout,
        getUser,
        submitUser,
        emotionUser,
        user,
        diary,
        emotion,
        habit,
        setUser,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={values}>
            {!props.loading && props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext