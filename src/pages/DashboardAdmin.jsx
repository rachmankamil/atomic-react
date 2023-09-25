import { useEffect, useState } from "react"

const DashboardAdmin = () => {

    const [data, setData] = useState([])

    async function getData() {
        const req = await fetch("https://63206412e3bdd81d8ef940ed.mockapi.io/api/v1/Users", {
            method: "GET"
        })
        const resp = await req.json()
        setData(resp)
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <>
        <h1>
            Ini Dashboard
        </h1>
        <table>
            <thead>
                <tr>
                    <td>
                        Avatar
                    </td>
                    <td>
                        Name
                    </td>
                    <td>
                        Password
                    </td>
                </tr>
            </thead>
            <tbody>
                {data.map((value,i)=>{
                    return (
                        <tr key={i}>
                            <td><img src={value.avatar} alt={value.name} /></td>
                            <td>{value.name}</td>
                            <td>{value.password}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default DashboardAdmin 