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
      title: "The bad guys",
      description: "Now Playing",
      image: "https://m.media-amazon.com/images/M/MV5BOWIyZTdkYjktZjkxMC00YjRlLWJmMjItNjg2M2IyYzJjMTY2XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
      sources: [
        {
          file:
            "https://imdb-video.media-imdb.com/vi1050657305/1434659607842-pgv4ql-1651759497734.mp4?Expires=1652436594&Signature=oxEkPn~k7~EYg7P~5u9yEmkjwXcLQhTPlanbzW4j6lWEjVmci2Za2OHFeT37Yg1Gog3syWOi3eicRCi8CAZ7tvD-VVxZkSKWDSxtU5OZyqPhl~T8c-jFNikrthWwPevCvnn~tUGrSPwv7qr67GnQ2Yz22hbs3WnBKfwsQCPy9vlRJTDwmfuw~7ms4ah8yE178CkuxjIbWasxgJzmhkIKPGxhx3q~VmDxNlUt-kOZTm4ILvt2upiB1EcpxJvOBkKWXvhXs9N6X62mQIyCh4SMF1BuoRWQ9MLiwFoxbcJ3NnzP7aFlJWUp7sX1C~WsUTmnFF7VO0d7iSdlkuJqiVLIMQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
