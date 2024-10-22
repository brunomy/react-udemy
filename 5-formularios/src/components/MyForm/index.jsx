import { useState } from 'react'
import styles from './MyForm.module.scss'

export default function MyForm({user}){

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');


    function enviarForm(event){
        event.preventDefault();

        setName('');
        setEmail('');
        setBio('');
    }

    return (
        <div className={styles.form_content}>
            <form onSubmit={enviarForm}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Biografia:</span>
                    <textarea name="" value={bio} onChange={(e) => setBio(e.target.value)} ></textarea>
                </label>
                <label>
                    <span>Função:</span>
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}