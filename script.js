const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: false,
  displaytitle: true,
  displaydescription: true,
  fullscreen: "true",
  primary: "html5",
  stretching: "uniform",
  aspectratio: "16:9",
  renderCaptionsNatively: false,
  autostart: false,
  abouttext: "Github",
  aboutlink: "https://github.com/mikeyhodl/comsit",

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
      title: "Pets",
      description: "Now Playing",
      image: "https://res.cloudinary.com/weknow-creators/image/upload/v1653727178/SagjlE_dtip3s.jpg",
      sources: [
        {
          file:
            "https://de18.seedr.cc/ff_get/1172697768/Pets%20United%20(2020)%20%20[1080p%20x265%2010bit%20FS91%20Joy].mkv?st=wqlT7uPh-NvUwMrfPgzdQw&e=1653813107",
          label: "1080p",
          default: true
        },
      ],
      captions: [
        // {
        //   file:
        //     "https://raw.githubusercontent.com/Foilz/jwplayer/main/%5BBengali%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
        //   label: "Bangla",
        //   kind: "captions"
        // },
        // {
        //   file:
        //     "https://res.cloudinary.com/weknow-creators/raw/upload/v1650646028/srts/3_English_clkiga.srt",
        //   label: "English",
        //   kind: "captions",
        //   default: false
        // },
        
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
