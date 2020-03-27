module.exports = {
    HTML:function(title, body){
      return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The PlanetsHeaven</title>
        </head>
        <body>

            <div class="titleDiv">
                <h1 class="title"><a href="/" style="color: white">PlanetHeaven</a></h1>
                <h4 class="suptitle">Click planet what you want to know about</h4>
            </div>
            <!-- <div style="color: white; font-size: 30px; font-weight: bold;">
                recomend to watch on desktop.
            </div> -->
            <div class="Boss_container">
                <img src="https://i.pinimg.com/originals/ea/1d/97/ea1d9797c9bf3dda7a23b238e5e4b364.jpg" alt="" class="bgimg">
                <div class="Main_container">
                    <div class ="planet">
                        <a href="/planet/Mercury" title="Mercury" class="AtagPlanet">
                            Mercury
                        </a>
                    </div>
                    <div class ="planet">
                        <a href="/planet/Venus" title="Venuus" class="AtagPlanet">
                            Venus
                        </a>
                    </div>
                    <div class ="planet">
                        <a href="/planet/Earth" title="Earth" class="AtagPlanet">
                            Earth
                        </a>
                    </div>
                    <div class="planet">
                        <a href="/planet/Moon" title="Moon" class="AtagMoon">
                            Moon
                        </a>
                    </div>
                    <div class ="planet">
                        <a href="/planet/Mars" title="Mars" class="AtagPlanet">
                            Mars
                        </a>
                    </div>
                    <div class ="planet">
                        <a href="/planet/Jupiter" title="Jupiter" class="AtagPlanet">
                            Jupiter
                        </a>
                    </div>
                    <div class="planet">
                        <a href="/planet/Europa" title="Europa" class="AtagMoon">
                            Europa
                        </a>
                    </div>
                    <div class="planet">
                        <a href="/planet/Ganymede" title="Ganymede" class="AtagMoon">
                            Ganymede
                        </a>
                    </div>
                    <div class="planet">
                        <a href="/planet/Io" title="Io" class="AtagMoon">
                            Io
                        </a>
                    </div>
                    <div class="planet">
                        <a href="/planet/Callisto" title="Callisto" class="AtagMoon">
                            Callisto
                        </a>
                    </div>
                    <div class ="planet">
                        <a href="/planet/Saturn" title="Saturn" class="AtagPlanet">
                            Saturn
                        </a>
                    </div>
                    <div class="planet">
                        <a href="/planet/Titan" title="Titan" class="AtagMoon">
                            Titan
                        </a>
                    </div>
                    <div class="planet">
                        <a href="/planet/Mimas" title="Mimas" class="AtagMoon">
                            Mimas
                        </a>
                    </div>
                    <div class ="planet">
                        <a href="/planet/Uranus" title="Uranus" class="AtagPlanet">
                            Uranus
                        </a>
                    </div>
                    <div class="planetNeptune">
                        <a href="/planet/Neptune" title="Neptune" class="AtagPlanet">
                            Neptune
                        </a>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="index_style.css">
        </body>
        </html>
      `;
    }
  }