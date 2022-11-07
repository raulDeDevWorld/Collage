import { useUser } from '../context/Context'
import PostOne from './PostOne'
import PostTwo from './PostTwo'
import PostThree from './PostThree'
import Form from './Form'


export default function Section({ topic, publicView }) {

    const { user, userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG } = useUser()


    return (
        <>
            {userDB[topic] !== null && publicView == false && <Form topic={topic} value={userDB.inicio}></Form>}
            {userDB[topic] == "PostOne" &&
                <PostOne topic={topic}
                    post1={`${postsIMG[`${topic}-Post1`] && postsIMG[`${topic}-Post1`]}`}
                    post2={`${postsIMG[`${topic}-Post2`] && postsIMG[`${topic}-Post2`]}`}
                    post3={`${postsIMG[`${topic}-Post3`] && postsIMG[`${topic}-Post3`]}`}
                    post4={`${postsIMG[`${topic}-Post4`] && postsIMG[`${topic}-Post4`]}`}
                />}
            {userDB[topic] == "PostTwo" &&
                <PostTwo topic={topic}
                    post1={`${postsIMG[`${topic}-Post1`] && postsIMG[`${topic}-Post1`]}`}
                    post2={`${postsIMG[`${topic}-Post2`] && postsIMG[`${topic}-Post2`]}`}
                    post3={`${postsIMG[`${topic}-Post3`] && postsIMG[`${topic}-Post3`]}`}
                    post4={`${postsIMG[`${topic}-Post4`] && postsIMG[`${topic}-Post4`]}`}
                    post5={`${postsIMG[`${topic}-Post5`] && postsIMG[`${topic}-Post5`]}`}
                />}
            {userDB[topic] == "PostThree" &&
                <PostThree topic="inicio"
                    post1={`${postsIMG[`${topic}-Post1`] && postsIMG[`${topic}-Post1`]}`}
                    post2={`${postsIMG[`${topic}-Post2`] && postsIMG[`${topic}-Post2`]}`}
                    post3={`${postsIMG[`${topic}-Post3`] && postsIMG[`${topic}-Post3`]}`}
                    post4={`${postsIMG[`${topic}-Post4`] && postsIMG[`${topic}-Post4`]}`}
                    post5={`${postsIMG[`${topic}-Post5`] && postsIMG[`${topic}-Post5`]}`}
                    post6={`${postsIMG[`${topic}-Post6`] && postsIMG[`${topic}-Post6`]}`}
                />}
        </>
    )
}