import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
// import ReactPlayer from 'react-player'
import ReactJWPlayer from "react-jw-player";

const WatchMovie = () => {

    const router = useRouter();
    const { mediaid } = router.query

    let id = `https://cdn.jwplayer.com/v2/media/${mediaid}`

    return (
        <div>
            <ReactJWPlayer
                playerId="jwPlayer"
                playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
                playlist={id}
            />
        </div>
    )
}

export default WatchMovie;