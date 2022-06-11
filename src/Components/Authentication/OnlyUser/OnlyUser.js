import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import { Navigate } from "react-router-dom"
import auth from "../../../firebase.init"
import Spinner from "../../General/Loading/Loading"

const OnlyUser = ({ children }) => {
    const [user] = useAuthState(auth)
    const {
        isLoading,
        data: userData,
    } = useQuery(["userData", user], () =>
        fetch("https://air-cruise.herokuapp.com/users/" + user.email, {
            headers: {
                authorization_email: user.email,
                authorization_token: `Bearer ${localStorage.getItem(
                    "authorization_token"
                )}`,
            },
        }).then((res) => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    if (userData?.roles === 'admin') {
        toast('This is a only user page')
        return <Navigate to={'/'} />
    } else {
        return children
    }
}


export default OnlyUser