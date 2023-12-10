import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1> Hola Foodies!
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