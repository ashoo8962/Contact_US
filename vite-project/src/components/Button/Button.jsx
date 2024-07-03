import styles from './Button.module.css'
const Button = (props) => {
  // const Button = ({isOutline,icon,text,...rest}) => {

const {isOutline,icon,text,...rest}=props;

  return (
    <button  
    {...rest} className={props.isOutline ? styles.outline_btn : styles.primary_btn}>

    {props.icon}
    {props.text}
    
    </button>
  );
};

export default Button
