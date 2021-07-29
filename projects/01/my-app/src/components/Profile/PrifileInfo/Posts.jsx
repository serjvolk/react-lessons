import css from "./../Profile.module.css";

function Posts (props) {
    return (
       <li>{props.postMessage}</li>
    );
}
export default Posts;