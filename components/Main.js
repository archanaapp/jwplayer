import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import ContainerType from './ContainerType';


const Main = () => {

    const structureJson = [
        {
            type: "banner",
            containerType: "BannerSlider",
            playlistId: "xQaFzykq"
        },
        {
            type: "playlist",
            containerType: "CardSlider",
            title: "Trending",
            playlistId: "JSKF03bk"
        },
        {
            type: "playlist",
            containerType: "CardSlider",
            title: "Favourites",
            playlistId: "dGSUzs9o"
        },
    ];

    return (
        <div>
            <Nav />
            <div>
                {
                    structureJson.map((uiDesign) => {
                        const playlist= uiDesign.playlistId;
                        const uiType = uiDesign.type

                        return (
                            <div key={uiDesign.id}>
                                {
                                   <ContainerType uiDesign ={uiDesign} />
                                }
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Main;