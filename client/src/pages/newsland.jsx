import React from 'react';
import { json, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';

export default function Newsland() {
  const {currentUser}=useSelector(state=>state.user);

  const user=currentUser;
  

  const {state}=useLocation();
  const handleClick= async()=>{
    const res = await fetch("http://localhost:3001/server/auth/save-news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user._id,
        email: user.email,
        title: state.data.title,
        image: state.data.urlToImage,
        description: state.data.description,
        link:state.data.url,
      }),
    });
      const boom = await res.json();
     console.log(boom);
     
      
    
  }
  
  return (
    <div>
      <Navbar />
      <div className="container my-2 mx-auto px-4 bg-slate-300">
        <h1 className="text-2xl font-bold">{state.data.title}</h1>
        <p>{state.data.description}</p>
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded"
        >
          Save
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded">
          Link
        </button>
        <div className="flex justify-center">
          <img
            className="max-w-md mx-auto"
            src={state.data.urlToImage}
            alt=""
          />
        </div>
        <p>{state.data.content}</p>
        <p></p>
        <p>
          
          Lorem ipsum dolor sit amet. At voluptas dolores qui fugiat itaque aut
          fuga voluptates. In voluptatem necessitatibus cum voluptas fugit non
          excepturi ratione et dolorum voluptas aut earum sunt et voluptatem
          dolor ab fugit doloribus. Sit voluptate internos cum praesentium
          aliquid sed quibusdam eveniet rem odit quia quo itaque repudiandae aut
          odio odio! Ad placeat facilis sed nesciunt libero vel molestiae
          adipisci. Qui autem magni sed deserunt repellendus et magni vero. Ut
          internos dignissimos est consequatur rerum sit quasi odit non
          explicabo voluptatem 33 odio dolorem ut molestiae suscipit qui
          distinctio quia. Ut aspernatur sequi sed aliquam rerum in laudantium
          illo nam temporibus veritatis est laboriosam eaque et facere possimus
          est error itaque. Sit dolores esse non velit quam cum eius voluptate
          sit quasi dicta aut quisquam labore est eligendi dolorem. Est
          accusantium iste et error maiores et voluptatibus saepe sit minima
          doloribus et alias laboriosam. Aut voluptas totam est inventore omnis
          et iure unde et repellendus sunt. Sit soluta consequatur At officiis
          quidem in explicabo rerum. Et inventore error est quaerat consequatur
          aut soluta dolores ut autem aspernatur eum magnam repudiandae eum
          repellat tenetur 33 modi accusamus. Vel magnam facilis ut sequi
          officiis ex velit dolorem hic enim iure ut quibusdam nesciunt! Ea
          atque quam et ducimus voluptate ut rerum ipsam ut molestiae ipsa. Ab
          sint quasi ad reprehenderit sapiente a recusandae illum At delectus
          consequatur et quia assumenda eos corrupti quos. Qui ducimus nemo sed
          obcaecati autem aut adipisci voluptates est obcaecati ducimus sit
          consequatur dolorum aut expedita dolor. Eos odio molestiae sed quia
          voluptatum et molestiae rerum ex eius impedit et soluta nemo ad
          dignissimos accusamus et unde voluptatibus. Qui omnis consequatur in
          quam asperiores nam galisum libero sed repellat quisquam. Et culpa
          sunt eum blanditiis incidunt et ipsum repudiandae sed dolor delectus?
          Lorem ipsum dolor sit amet. At voluptas dolores qui fugiat itaque aut
          fuga voluptates. In voluptatem necessitatibus cum voluptas fugit non
          excepturi ratione et dolorum voluptas aut earum sunt et voluptatem
          dolor ab fugit doloribus. Sit voluptate internos cum praesentium
          aliquid sed quibusdam eveniet rem odit quia quo itaque repudiandae aut
          odio odio! Ad placeat facilis sed nesciunt libero vel molestiae
          adipisci. Qui autem magni sed deserunt repellendus et magni vero. Ut
          internos dignissimos est consequatur rerum sit quasi odit non
          explicabo voluptatem 33 odio dolorem ut molestiae suscipit qui
          distinctio quia. Ut aspernatur sequi sed aliquam rerum in laudantium
          illo nam temporibus veritatis est laboriosam eaque et facere possimus
          est error itaque. Sit dolores esse non velit quam cum eius voluptate
          sit quasi dicta aut quisquam labore est eligendi dolorem. Est
          accusantium iste et error maiores et voluptatibus saepe sit minima
          doloribus et alias laboriosam. Aut voluptas totam est inventore omnis
          et iure unde et repellendus sunt. Sit soluta consequatur At officiis
          quidem in explicabo rerum. Et inventore error est quaerat consequatur
          aut soluta dolores ut autem aspernatur eum magnam repudiandae eum
          repellat tenetur 33 modi accusamus. Vel magnam facilis ut sequi
          officiis ex velit dolorem hic enim iure ut quibusdam nesciunt! Ea
          atque quam et ducimus voluptate ut rerum ipsam ut molestiae ipsa. Ab
          sint quasi ad reprehenderit sapiente a recusandae illum At delectus
          consequatur et quia assumenda eos corrupti quos. Qui ducimus nemo sed
          obcaecati autem aut adipisci voluptates est obcaecati ducimus sit
          consequatur dolorum aut expedita dolor. Eos odio molestiae sed quia
          voluptatum et molestiae rerum ex eius impedit et soluta nemo ad
          dignissimos accusamus et unde voluptatibus. Qui omnis consequatur in
          quam asperiores nam galisum libero sed repellat quisquam. Et culpa
          sunt eum blanditiis incidunt et ipsum repudiandae sed dolor delectus?
        </p>
      </div>
    </div>
  );
}
