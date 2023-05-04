import Router from "next/router"
import { useEffect, useState } from "react"
import { createContext } from "react"
import Cookie from 'js-cookie'

import { User } from "../core/User"
import { AuthenticationProvider } from "../provider/AuthProvider"
import { ProviderUser } from "../core/ProviderUser"

interface AuthContextProps {
    loginGoogle: () => Promise<void>
    loginPassword(email: string, password: string): Promise<void>
    createUserPassword(name: string, state: string, email: string, password: string, birthdate: string): Promise<void>
    updateUser(user: User): Promise<void>
    logout(): Promise<void>
    getUser(user: User): Promise<User | false>
    submitUser(user: User): Promise<void>
    user: User
    setUser: (value: any) => void
    loading: boolean
    setLoading: any
}

const AuthContext = createContext<AuthContextProps>({
    loginGoogle: () => Promise.resolve(),
    loginPassword: () => Promise.resolve(),
    createUserPassword: () => Promise.resolve(),
    updateUser: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    getUser: (user: User) => Promise.resolve(user),
    submitUser: () => Promise.resolve(),
    user: new User({
        email: '',
        name: ''
    }),
    setUser: () => { },
    loading: false,
    setLoading: {}
})

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(new User({ email: '', name: '' }))
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

    async function getUser(user: User) {
        setLoading(true)

        const userReceived = await authentication.getUser(user)

        setLoading(false)

        return userReceived ? userReceived : false
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

    async function logout() {
        setLoading(true)

        await authentication.logout()

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
        updateUser,
        logout,
        getUser,
        submitUser,
        user,
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