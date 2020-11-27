import React from 'react';
// import YVU_Documentation from '../../../../../public/YVU_Documentation';
export default function YVUDocumentation() {
    return (
        <div>
            <p className="yvu-documentation">
            I have updated this page to reflect the information requested in an e-mail that i received from the Google Cloud Platform.
            In my opinion, I have already satisfied all the criteria listed in the e-mail. I will give an explanation for each criterion on the list.
            <br/><br/>
            <span className="command italic">Clearly explain what your app will do with user data.</span>
            <br/>
            This application automatically uploads a video file which is stored on my computer to my Youtube account via the Youtube API. The only user data being used is my own Youtube accounts and credentials.
            <br/><br/>
            <span className="command italic">Thoroughly describe how your app enhances user functionality.</span>
            <br/>
            This application allows me to automatically upload videos to Youtube as opposed to doing so manually.
            <br/><br/>
            <span className="command italic">The Privacy Policy must clearly describe how your application accesses, uses, stores, or shares Google user data.
            Read the Limited Use Requirements for more information and guidance.</span>
            <br/>
            This application's use of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
            As i said, I am the only one who can use this application.     
            <br/><br/>
            <span className="command italic">Be a verified domain under your ownership.</span>
            <br/>
            I own this domain, https://grantnbrown.com/.
            <br/><br/>
            <span className="command italic">Be accurate, inclusive, and easily accessible to all users.</span>
            <br/>
            I am the only user, and have no problem using the application.
            <br/><br/>
            <span className="command italic">Be on an externally & publicly accessible domain that describes the content, context, or connection to the app you are submitting.</span>
            <br/>
            This page is publicly accessible and could not be more clear. PLEASE contact me if you have any additional questions.
            <br/><br/>

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
