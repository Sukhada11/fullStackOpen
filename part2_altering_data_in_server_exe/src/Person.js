import App from "./App";

const Person = ({ id,name,number,handleDel }) => {
    return (
        <li key={id}>
            {name} {number} <button onClick={handleDel}>Delete</button>
        </li>
    )
}
export default Person;