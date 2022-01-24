var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('Satellite'),
    renderer:'svg',
    loop: true,
    autoplay: true,
    path: './SatelliteScripts/Satellitedata.json',
    
    })
    


    function displayDeepSpaceText()
    {
        document.getElementById('DeepSpaceText').style=" transition: opacity 2s; opacity:1"; 
        animationDuration = "3s";
    }
    
    function hideradiationtext()
    {
        document.getElementById('DeepSpaceText').style="transition: opacity 0.5s; opacity:0";
    
    }