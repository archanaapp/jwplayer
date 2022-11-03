import React from 'react'
import Image from 'next/image'

const Nav = () => {
    return (
        <div className='header'>
            <div className='header-container ps-5 pe-5 ' style={{ background: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)" }}>
                <div className=''>
                    <Image className='logo ' src="/images/jwp-logo.png" alt="jwp-logo" width="120" height="45" />
                </div>
                <div className='menu flex'>
                    <ul className='menuList' style={{ listStyle: "none" }}>
                        <li>Home</li>
                        <li>Flims</li>
                        <li>Courses</li>
                        <li>Live</li>
                    </ul>
                </div>
                <div className='p-2'>
                    <input
                        className='searchInput'
                        placeholder="Search ..."
                        type="text"
                    />
                </div>
                <div  className='p-2'>
                    <button className='signin'>
                        Sign In
                    </button>
                </div>
                <div  className='p-2'>
                    <button className='signUp'>
                        Sign Up
                    </button>
                </div>
            </div>
            <style jsx>
                {`
                    .header{
                        position: static;
                        width: 100%;
                        height: 60px;
                        font-size: 16px;
                    }
                    .header-container{
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        height: 100%;
                    }
                    .logo{
                        width: auto;
                        max-height: 46px;
                        vertical-align: middle;
                        cursor: pointer;
                    }
                    .menu{
                        display: inline-block;
                        flex: 1;
                        align-items: center;
                    }
                    li{
                        float:left;
                        display:inline;
                        padding: 10px 30px 10px 30px;
                        color:#fff;
                        font-size: 18px;
                        font-weight: 600;
                        cursor: pointer;
                    }
                    .searchInput{
                        background: rgba(0,0,0,.54);
                        border: 1px solid rgba(255,255,255,.32);
                        border-radius: 4px;
                        font-weight: 700;
                        font-size: 16px;
                        cursor: pointer;
                        padding: 5px 10px 5px 10px;
                        width:170px;

                    }
                    .signin{
                        font-size: 16px;
                        background: rgba(0,0,0,.54);
                        border: 1px solid rgba(255,255,255,.32);
                        border-radius: 4px;
                        font-weight: 700;
                        color:#fff;
                        cursor: pointer;
                        padding: 5px 10px 5px 10px;
                    }
                    .signUp{
                        color: #000;
                        background-color:#fff;
                        font-weight: 700;
                        font-size: 16px;
                        border-radius:4px;
                        cursor: pointer;
                        border: none;
                        padding: 5px 10px 5px 10px;

                    }
                `}
            </style>
        </div>
    )
}

export default Nav;