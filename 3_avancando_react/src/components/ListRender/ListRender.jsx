import { useState } from "react"

export default function ListRender() {
    const [list] = useState(['Bruno', 'João', 'Pedro'])
    const [users, setUsers] = useState([
        {id: 1, name: "Bruno", age: "28"},
        {id: 2, name: "Erunan", age: "23"},
        {id: 3, name: "banana", age: 57}
    ])

    const deleteRadom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }


    return (
        <>
        <ul>
            {
                list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
        <ul>
            {
                users.map((item) => (
                    <li key={item.id}>Nome: {item.name}, Idade: {item.age}</li>
                ))
            }
        </ul>
        <button onClick={deleteRadom}>Delete</button>
        </>
    )
}