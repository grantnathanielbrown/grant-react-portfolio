import React from 'react';
// import YVU_Documentation from '../../../../../public/YVU_Documentation';
export default function YVUDocumentation() {
    return (
        <div >
            <p className="yvu-documentation">
            <span className="centered-span">This is documentation describing the YouTube Video Uploader (YVU), a collection of scripts that work in tandem in order to download, merge, and upload videos with the help of the Reddit/YouTube APIs and the Melt command line tool.</span>
            <br/>
            <span className="centered-span">TERMS OF SERVICE</span>
            <br/>
            - I am the only one who can use this application. It is not designed for the public.
            <br/><br/>
            <span className="centered-span">PRIVACY POLICY</span>
            <br/>
            - This application does not access user data or channels outside of my own.
            <br/><br/>
            <span className="centered-span">The following commands are run as a cronjob.</span>
            <br/>
            1. Node script that uses a Reddit API wrapper in order to download GIFS
            <br/><br/>
            <span className="command">/usr/local/bin/node /Users/grant/Desktop/YVU/built/reddit_video_download_script.js</span>
            <br/><br/>
            2. Command line tool that merges videos together 
            <br/><br/>
            <span className="command">/usr/local/bin/melt /Users/grant/Desktop/YVU/downloaded_gifs/*.mp4 -consumer avformat:/Users/grant/Desktop/YVU/merged_videos_output/merged_reddit_gifs.mp4 acodec=libmp3lame vcodec=libx264</span>
            <br/><br/>
            3. Upload the merged video 
            <br/><br/>
            <span className="command">/usr/local/bin/node upload.js /Users/grant/Desktop/YVU/merged_videos_output/merged_reddit_gifs.mp4</span>
            <br/><br/>
            4. Clean up the input and output folders 
            <br/><br/>
            <span className="command">rm /Users/grant/Desktop/YVU/downloaded_gifs/* ; rm /Users/grant/Desktop/YVU/merged_videos_output/*</span>
            <br/><br/>
            <a className="command centered-span" href="https://github.com/grantnathanielbrown/YVU">Please feel free to view the code contained in the GitHub repository.<i class="fab fa-github fa-4x"></i></a>
            </p>
        </div>
    )
}
