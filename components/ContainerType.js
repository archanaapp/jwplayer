import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import { useRouter } from "next/router";

const ContainerType = (props) => {
    const { uiDesign } = props
    const [data, setData] = useState()
    const router = useRouter();

    const baseUrl = "https://cdn.jwplayer.com";
    const playlistEndpoint = `/v2/playlists/${uiDesign.playlistId}`


    const getMovieRequest = async () => {
        const url = baseUrl + playlistEndpoint;
        const response = await fetch(url)
        const responseJson = await response.json();
        setData(responseJson)
    }

    useEffect(() => {
        getMovieRequest()
    }, [uiDesign.playlistId])

    const openDetails = (item) => {
        router.push({
            pathname: '/Details',
            query: {
                link: item?.link,
                description: item?.description,
                title: item?.title,
                image: item?.image,
                mediaid: item?.mediaid,

            }
        })

    }
    return (
        <div>

            {
                uiDesign.type == 'banner' &&
                <div className='pt-4'>
                    {<div className='slides'
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",

                        }}>
                        <Carousel>
                            {data?.playlist.map((slide) => {
                                return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={slide.image}
                                                alt="slider image"
                                                style={{ borderRadius: "5px" }}
                                                onClick={() => openDetails(slide)} />
                                            <Carousel.Caption>
                                                <h3>{slide.title}</h3>
                                            </Carousel.Caption>
                                        </Carousel.Item>

                                )
                            })}

                        </Carousel>
                    </div>
                    }
                </div>
            }

            {
                uiDesign.type == 'playlist' &&
                <div className='pt-3 ps-5 pe-5 '>
                    <p style={{ color: "#fff", fontSize: "24px", fontWeight: "600" }}>{data?.title}</p>

                    <div className='' style={{ display: "flex" }}>
                        { }
                        {
                            data?.playlist.map((item) => {
                                return (
                                    <div key={item.id} class="" style={{ margin: "05px" }} >
                                        <img src={item.image} className="imageCard"
                                            alt="Skyscrapers"
                                            onClick={() => openDetails(item)} />

                                        <p style={{ color: "#fff", fontWeight: "600", fontSize: "18px" }}>{item.title}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            }
            <style jsx>
                {`
               .slides{
                width: 750px !important,

               }
                .slides:hover {
                    border: 4px solid #fff;
                    border-radius : 5px;
                    width: 800px;
                    
                 }
                .imageCard{
                    width:170px;
                    height:270px;
                    border-radius : 5px;
                    
                }
                .imageCard:hover{
                    border: 2px solid #fff;
                    border-radius : 5px;
                    width:201px;
                    height:280px;
                }
                
                
          
             
                `}
            </style>
        </div >
    )
}

export default ContainerType;