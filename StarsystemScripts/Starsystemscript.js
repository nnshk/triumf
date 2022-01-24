var animation7 = bodymovin.loadAnimation({
    container: document.getElementById('Starsystem'),
    renderer:'svg',
    loop: true,
    autoplay: true,
    path: './StarsystemScripts/Starsystemdata.json',
    
    })
    

    function displayLowEarthText()
    {
        document.getElementById('LowEarthText').style=" transition: opacity 2s; opacity:1"; 
        animationDuration = "3s";
    }
    
    function hideradiationtext()
    {
        document.getElementById('LowEarthText').style="transition: opacity 0.5s; opacity:0";
    
    }

    