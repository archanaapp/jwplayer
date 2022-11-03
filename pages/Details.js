import React from 'react'
import { useRouter } from 'next/router';
import Nav from '../components/Nav';

const Details = () => {
    const router = useRouter();
    const { link, description, title, image,mediaid } = router.query;

    const watchMovie = () =>{
        router.push({
            pathname:'/WatchMovie',
            query:{link:link,
                mediaid:mediaid}
    })
    }

    return (
        <div className='main-div ' style={{ background: `url(${image})`, height: "100vh", backgroundSize: "100% 100%" }}>
            <Nav />
            <div className='p-5'>
                <div>
                    <p className='title-div'>{title}</p>
                </div>
                <div>
                    <p className='description-div'>{description}</p>
                </div>
                <div>
                    <button className='watch-btn' onClick={watchMovie}>Start Watching</button>
                    <button className='m-3 fav-btn'>Favorite</button>
                    <button className='fav-btn'>Share</button>
                </div>
            </div>
            <style jsx>
                {`
         .title-div{
            color:#fff;
            font-size:30px;
            font-weight:700;
         }
         .description-div{
            color:#fff;
            font-size:20px;
            font-weight:600;
            width:50%;
         }
         .fav-btn{
            background: rgba(0,0,0,.80);
            color:#fff;
            width:10%;
            border-radius:5px;
            height:10%;
            border: 1px solid rgba(255,255,255,.32);  
            padding:10px 15px 10px 15px;         
            font-weight:600;      
         }
         .watch-btn{
            border:none;
            height:10%;
            background:#fff;
            border-radius:5px;
            padding:10px 15px 10px 15px;         
            font-weight:600;

         }
         `}
            </style>
        </div>
    )
}

export default Details;