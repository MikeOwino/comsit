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
      title: "Planes",
      description: "Now Playing",
      image: "https://i.ytimg.com/vi/SIJnzoUvR_k/maxresdefault.jpg",
      sources: [
        {
          file:
            "https://www-9ob48388.ssl0d.com/0O8X_JIOl3UWAuGtu6p7bg/1652980598/I5EXWkZmjUyMzZG-tzFHnppt_6PXGnyOAVi3tdctaR3biFq9MjSS_qNXzZtx0onEaAVJiXtCRuNRPMDttkbEdmpwjuNTZC27bivYXehbY2fKP6Wj0kLkcd7ToXX9l-FNLEKIEQumd15XRdGfQ65D591dancBeaZL6k4akABqYDE2FLzYlO6eZ-tj8RDGU9oElohT8HDZWYIz17m9Z4zN0OJLFFxosaOM9Ktuv5l7Mm0rESajZp64ELP9sUUcKVTOHReciV85iNypPxxX_AuBSvxkx3ci66LD8RHitt_Hl7I/8295151.mp4?dl=1",
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
        {
          file:
            "https://res.cloudinary.com/weknow-creators/raw/upload/v1650646028/srts/3_English_clkiga.srt",
          label: "English",
          kind: "captions",
          default: false
        },
        
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
