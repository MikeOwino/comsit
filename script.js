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
  autostart: true,
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
      title: "Andor",
      description: "Now Playing",
      image: "https://m.media-amazon.com/images/M/MV5BZDkyZmVhZTUtMDU1Zi00ZmRkLTg2ZjgtNTM4MGY4YThjYmYxXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
      sources: [
        {
          file:
            "https://imdb-video.media-imdb.com/vi1576780313/1434659607842-pgv4ql-1653591821857.mp4?Expires=1653761794&Signature=sgcv7pfCf3HDPeuwdfUPDhlIN~G5OfQiCue2FtWh5eXRe-l~xqWcerGdQQXlenK-C0cs7FthEoxmjCIjEyIA3naeqQ1LJMr43yLxNpvYH7GOazrgwvNWVmQhVvgukUYdw21utQQWrgH3m3Tei8a4HElfa2FbxtKcDGBxgAryVbgRwpmdfJfLv~khZB9LahlFm3vmhect0rs0AguB1xhxqZDr6VuhbXJVQ06L~OArSSKWTN1OnLAmy2fG6f-fyykgx5qlnhqHdVbWE0uiIcjxGTiqek96VxQ6QjOkMtBOWcMxLuNznmaBZKV6rAdjCSQlVEgK6Ik6k~r4IXCwL7AyMw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
