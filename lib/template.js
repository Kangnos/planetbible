module.exports = {
    HTML: function (title, description) {
        return `
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
          <div class="MainpagelinkDiv">
              <a href="/" class="Mainpagelink">ThePlanetsHeaven</a>
          </div>
      </head>
      <body>
          ${description}
      </body>

      <style>
      .Mainpagelink{
        color: white;
        font-size: 50px;
        font-family: Arial, Helvetica, sans-serif;
    }
        body{
            background-color: black;
        }
        .BigTitle{
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 10px;
            font-size: 60px;
        }
        .bgimg{
            width: 100%px;
            height: 100%hv;
            position: absolute;
        }
        div{
            color: white;
        }
        .planet_explain{
            margin-left: 10px;
            font-size: 30px;
            font-weight: bold;
        }
        .tooltip{
            color: white;
        }
        .imageZone{
            margin-left: 10px;
        }
        .planetImage{
            border: 3px solid white;
            padding: 4px;
        }
        
        .planetImageInfo{
            margin-top: 10px;
            font-size: 19px;
        }
        .moreInfo{
            color: aqua; 
            font-weight: bold;
        }
      </style>
      `;
    }
}
