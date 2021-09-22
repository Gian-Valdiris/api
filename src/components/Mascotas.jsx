
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Button, Card} from 'antd';
import 'antd/dist/antd.css'
export const Mascotas = () => {

  
  const url = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available';
  const [mascotas, setMascotas] = useState([])
  
  useEffect(() => {
    fetch(url).then(res=>res.json()).then(data=>{
      const dataMascotas=[]
      data.forEach(i=>{
        dataMascotas.push(i);
      })
      setMascotas(dataMascotas);
    })

  }, [])
  const handleDelete=(id)=>{
    
    // hacer la peticion para eliminar la mascota
    fetch(`https://petstore.swagger.io/v2/pet/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
    .catch(console.log)

  }
  
  return (
    <div className="container"> 
      {
        mascotas.map(i=>(
          <div key={JSON.stringify(i)}>
            <Card.Meta  title="Mascota" default size="small" description={i.name} className="card" />
              <Button type="danger" onClick={()=>{
                handleDelete(i.id);
              }}>
                delete
              </Button>
          </div>

        ))
      }
      
    </div>
  )
}
