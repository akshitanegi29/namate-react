import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";

const About = () => {
    //consuming the context
    const {loggedInUser} = useContext(UserContext);
    return (
        <div>
            <h1 className="font-semibold text-lg"> Hola {loggedInUser}!!
            </h1>
            <h3>You are in the right place to kill your apetite :)</h3>
            <h4>Bon Apetite!</h4>
            <h1>Developers Info:</h1>
            <User name={'Akshita'} location={'Gr. Noida, UP'}/>
            <UserClass name={'Akshita'} location={'Gr. Noida, UP'}/>  
        </div>
    )
}
export default About;