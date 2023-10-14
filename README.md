<!DOCTYPE html>
<html lang="en">

<head>
    <title>João Cardoso - MX2</title>
    <link rel="icon" href="Capturar.PNG">
    <link rel="apple-touch-icon" href="Capturar.PNG">

    <link rel="canonical" href="site.html" />
    <link rel="alternate" hreflang="en" href="https://joaogeneroso.com" />
    <link rel="alternate" hreflang="pt-br" href="https://joaogeneroso.com/pt-br/" />
    <link rel="alternate" hreflang="x-default" href="https://joaogeneroso.com" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet">

    <!-- <link href="https://uncuttype.wtf/typefaces/uncut-sans/uncut-sans.css" rel="stylesheet"> -->

    <link rel="stylesheet" href="./site.css" type="text/css" />

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<<body>
    <nav class="nav-container" id="header">
        <ul class="home">
            <div><a href="site.html">João Pedro R. Cardoso</a></div>
        </ul>
        <ul class="pages">
            <div><a href="site.html">work</div>
            <div><a href="D:\vscode\site\about\teste.html">about</a></div>
            <div><a href="https://computeel.org/computeel/">team</a></div>
            <div><a href="https://www.instagram.com/joaopecardoso/" target="_blank">
                    <img src="https://joaogeneroso.com/assets/icon-instagram.svg" class="icon"></a>
            </div>
            <div><a href="https://joaogeneroso.com/pt-br/" hreflang="pt-br" lang="pt-br">
                    <img src="https://joaogeneroso.com/assets/icon-translate.svg" class="icon"></a>
            </div>
        </ul>
    </nav>

    <main class="about-container">
        <section class="project-section">
            <div class="project-presentation">
                <div class="project-name link-hover">
                    <title class="project-h1">Elastic properties of group-10 transition metal dichalcogenides</title>
                    <a href="https://github.com/joaopecardoso"
                        class="project-h1-link" target="_blank">GitHub profile <img class="svg-arrow"
                            src="https://joaogeneroso.com/assets/arrow-upright.svg"></a>
                </div>
                <div class="project-info">
                    <p>In this scientific project, we propose the systematic study of the elastic and thermomechanical properties of
                         the transition metal dichalcogenides MX2 (M = Ni, Pd, Pt; X = S, Se, Te).
                            Through the Density Functional Theory, we will calculate the second order elastic constants, stability and elastic anisotropy parameters,
                                 polycrystalline mechanical moduli and thermodynamic properties.</p>
                    <p> The study investigate, at first hand, 
                            the effects of spin-orbit coupling and van der Waals interactions in the description of the 
                                elasticity tensor in weakly bound layered compounds.</p>
                </div>
            </div>
        </section>
    </main>

    <div class="projects">
        <div class="image-container">
            <img src="https://guiaanimal.net/uploads/article/image/690/AdobeStock_47432136.jpeg" alt="Nike Ibirapuera" loading="lazy">
        </div>
    </div>

    <div class="credits-container">
        <section class="credits-section">
            <div class="project-presentation">
                <div class="project-participation">
                    <p>Client: Nike</p>
                    <p>Visual Identity: Bijari (Rodrigo Araújo, Lívia Gianini, João Generoso, Luiza Vidotto, Débora
                        Pistore)</p>
                    <p>Art Direction: Rodrigo Araújo</p>
                    <p>Production: GTM Cenografia</p>
                    <p>Photography: BR+SK, Gustavo Dantas</p>
                    <p>Year: 2022</p>
                </div>
                <div class="project-info">
                    <p>My contribution: Graphic Design, Patterns, 3D Visualization</p>
                    <p></p>
                    <p>How I did it: the visual identity was prototyped in Adobe Illustrator and Photoshop, then
                        exported to
                        Blender for a 3D visualization of the spaces. This workflow allowed us to quickly
                        understand the proper scale of elements and how they worked together in the built environment,
                        as
                        well as giving a clear preview to be presented and discussed weekly with the Nike team.</p>
                </div>
            </div>
        </section>
    </div>

    <nav class="nav-bottom">
        <div class="nav-previous">
            <a href="demonumenta"><img class="svg-arrow" src="https://joaogeneroso.com/assets/arrow-left.svg"></a>
        </div>
        <div class="nav-return">
            <a href="#header"><img class="svg-arrow" src="https://joaogeneroso.com/assets/arrow-up.svg"></a>
        </div>
        <div class="nav-next">
            <a href="sumauma"><img class="svg-arrow" src="https://joaogeneroso.com/assets/arrow-right.svg"></a>
        </div>
    </nav>

    <script>
        document.querySelectorAll('.image-container').forEach(div => {
            const loadImg = div.querySelector('img');

            if (loadImg.complete) loaded();
            else loadImg.addEventListener('load', loaded);

            function loaded() { div.classList.add('loaded'); }
        });
    </script>
</body>

</html>
