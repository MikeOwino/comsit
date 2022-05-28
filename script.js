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
            "https://imdb-video.media-imdb.com/vi2376319257/1434659607842-pgv4ql-1600202805262.mp4?Expires=1653818299&Signature=lgIsBIXwDaW1qSmdysRoHjxSbj6xVt0Kj2YZEUWkIwlFde9uRXlkbmZIqpGoQq7XNH62u6V96wq2hlTm0ut~guqITz7943WoQO-py1wrfh6-AKYa4OEqJN6LdKSVcs2fS~kL8FHJlGSFvV2jju50eMYkydsotxDGAdTRnyMWqC34~MDM5jUnq3MWANtfeWzdHmp4BaRBxP0njnNqh3XL57Amon1cNXUDNc31lBiBnWsbB2vetRNHpJaqxTr5UPn7NgksNp1vQG5hKPXS93slo3T~8u2zTjrxEhBRMDcNPeF0lLvgWQqwMxQHDUA5-dLHfxkWlAT9Pk2po50S0rmlBg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
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
