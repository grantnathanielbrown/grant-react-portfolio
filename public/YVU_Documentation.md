This is documentation describing the YouTube Video Uploader (YVU), a collection of scripts that work in tandem in order to download, merge, and upload videos with the help of the Reddit/YouTube APIs and the Melt command line tool.

TERMS OF SERVICE

- I am the only one who can use this application. It is not designed for the public.

PRIVACY POLICY

- This application does not access user data or channels outside of my own.

The following commands are run in a crontab.

<!-- Node script that uses a reddit api wrapper in order to download GIFS-->
1. /usr/local/bin/node /Users/grant/Desktop/YVU/built/reddit_video_download_script.js
<!-- Command line tool that merges videos together -->
2. /usr/local/bin/melt /Users/grant/Desktop/YVU/downloaded_gifs/*.mp4 -consumer avformat:/Users/grant/Desktop/YVU/merged_videos_output/merged_reddit_gifs.mp4 acodec=libmp3lame vcodec=libx264

<!-- Upload the merged video -->
3. node upload.js /Users/grant/Desktop/YVU/merged_videos_output/merged_reddit_gifs.mp4

<!-- Clean up the input and output folders -->
4. rm /Users/grant/Desktop/YVU/downloaded_gifs/* ; rm /Users/grant/Desktop/YVU/merged_videos_output/*