import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth } from '../firebase/utils'

export function WithAuth(Component) {
    return () => {
        const { user, userDB, setUserProfile, setUserData, postsIMG, setUserPostsIMG } = useUser()
        const router = useRouter()

        useEffect(() => {
            onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG)
            if(user === null) router.replace('/')
        }, [user])
        return (
            <>
                {user === undefined && <Loader />}
                {user && <Component {...arguments} />}
            </>
        )
    }
}
