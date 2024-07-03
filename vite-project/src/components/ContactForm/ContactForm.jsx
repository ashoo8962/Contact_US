import { MdMessage } from "react-icons/md"
import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from 'react-icons/hi'


const ContactForm = () => {

  const onViaCallSubmit=()=>
    {
      console.log("hello")
    }

  return (
  <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_button}>

          <Button
         
          text="VIA SUPPORT CHAT" 
          icon={<MdMessage fontSize="24px"/>}/>

          <Button 
           onClick ={onViaCallSubmit}
            text="VIA CALL " icon={<FaPhoneAlt fontSize="24px"/>}/>
          
        </div>
        < Button 
                 isOutline={true}
                 text="VIA EMAIL FORM " icon={<HiMail fontSize="24px"/>}/>

           <form action="">
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div> 

                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div> 

                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea type="text" name="text"
                    rows={8} />
                </div> 
              <div style={{
                display:"flex",
                justifyContent:"flex-end"

                }}>
                < Button text="SUBMIT" />
              </div>
          </form>  
    

                
  </div>

    <div className={styles.contact_image}>
      <img src="/images/ContactImage.svg" alt=""/>     </div>
  </section>  
  )
}

export default ContactForm
