const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  fullscreen: "true",
  primary: "html5",
  stretching: "uniform",
  aspectratio: "16:9",
  renderCaptionsNatively: false,
  autostart: false,
  abouttext: "Github",
  aboutlink: "https://github.com/Foilz",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      " "
  },

  // advertising: {
  //   client: "vast",
  //   schedule: {
  //     myAds: {
  //       offset: "pre",
  //       tag: "https://syndication.exdynsrv.com/splash.php?idzone=4648050"
  //     }
  //   }
  // },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "sing 2",
      description: "Now Playing",
      image: "https://res.cloudinary.com/weknow-creators/image/upload/v1650643747/images/SING-2_yywdkw.jpg",
      sources: [
        {
          file:
            "https://nw9.seedr.cc/ff_get/1151072069/Sing.2.2021.1080p.WEBRip.x264-RARBG.mp4?st=3qwIKHTr9Ssz3bTgMuj1mA&e=1650731422",
          label: "1080p",
          default: true
        },
        // {
        //   file:
        //     "https://nw10.seedr.cc/ff_get/1145388475/The%20Batman%20(2022)%201080p%20HDRip%20x264%20-%20ProLover.mp4?st=ZHIGknmC90L9KMV5uZU-nA&e=1649879564",
        //   label: "720p"
        // },
        // {
        //   file:
        //     "https://nw4.seedr.cc/ff_get/1145388970/Reign.of.Chaos.2022.720p.WEBRip.800MB.x264-GalaxyRG.mkv?st=9sQwwURm0JJN-OIzoEmRJQ&e=1649879680",
        //   label: "480p"
        // },
        // {
        //   file:
        //     "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.360p.webm",
        //   label: "360p"
        // },
        // {
        //   file:
        //     "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.240p.webm",
        //   label: "240p"
        // },
        // {
        //   file:
        //     "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.160p.webm",
        //   label: "160p"
        // }
      ],
      captions: [
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BBengali%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Bangla",
        //   kind: "captions"
        // },
        {
          file:
            "https://res.cloudinary.com/weknow-creators/raw/upload/v1650645498/srts/3_English_ocviti.srt",
          label: "English",
          kind: "captions",
          default: true
        },
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BGerman%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "German",
        //   kind: "captions"
        // },
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BHungarian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Hungarian",
        //   kind: "captions"
        // },
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BItalian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Italian",
        //   kind: "captions"
        // },
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BMalayalam%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Malayalam",
        //   kind: "captions"
        // },
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BPortugu%C3%AAs%20(Portugal)%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Portuguese",
        //   kind: "captions"
        // },
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BRussian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Russian",
        //   kind: "captions"
        // },
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BSpanish%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Spanish",
        //   kind: "captions"
        // }
      ],
      tracks: [
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/mosaic.vtt",
        //   kind: "thumbnails"
        // }
      ]
    }
  ]
});

playerInstance.on("ready", function () {
  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);
});