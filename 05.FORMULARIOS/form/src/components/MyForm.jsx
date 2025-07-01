import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    // 6 CONTROLLED INPUTS

    // 3 GERENCIAMENTO DE DADOS
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const [bio, setBio] = useState(user ? user.bio : "")
    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    //    console.log(name)
    //    console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário...");
        console.log(name, email, bio, role);
        // VALIDACAO E ENVIO

        // 7 LIMPAR FORMULÁRIO
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    return (
        <div>
            {/* 5 ENVIO DE FORM */}
            {/* 1 CRIAÇÃO DE FORM */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} value={name} />
                </div>
                {/* 2 LABEL ENVOLVENDO O INPUT */}
                <label>
                    <span>E-mail</span>
                    {/* 4 SIMPLIFICAÇÃO DE MANIPULAÇÃO DE STATE */}
                    <input type="email" name="email" placeholder='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                {/* 8 TEXTAREA */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* 9 SELECT */}
                <label>
                    <span>Função no Sistema</span>
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm