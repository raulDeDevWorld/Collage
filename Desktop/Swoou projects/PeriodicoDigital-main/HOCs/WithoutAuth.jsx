import Loader from '../components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context.js'
import { onAuth } from '../firebase/utils'

export function WithoutAuth(Component) {
    return () => {
        const { user, userDB, setUserProfile, setUserData, postsIMG, setUserPostsIMG } = useUser()
        const router = useRouter()
        useEffect(() => {
            onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG)
        }, []);

        return (
            <>
                {user === undefined && <Loader />}
                {user === null && <Component {...arguments} />}
            </>
        )
    }
}
