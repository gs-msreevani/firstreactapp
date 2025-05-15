import {useAuth} from "../../AuthContext";

const Home = ()=>{
    const {isLoggedIn} = useAuth();
    if(!isLoggedIn){
        return null;
    }
    return (
        <h3>This is the home page</h3>
    )
}
export default Home;