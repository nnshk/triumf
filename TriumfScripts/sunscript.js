var animation = bodymovin.loadAnimation({
   container: document.getElementById('sunanim'),
   renderer:'svg',
   loop: true,
   autoplay: true,
   path: 'TriumfScripts/sundata.json',
   
   })
   
   
   function displayradiationtext()
   {
       document.getElementById('RadiationText').style=" transition: opacity 2s; opacity:1"; 
       animationDuration = "3s";
   }
   
   function hideradiationtext()
   {
       document.getElementById('RadiationText').style="transition: opacity 0.5s; opacity:0";
   
   }



   function displayAirplaneText()
   {
       document.getElementById('AirplaneText').style=" transition: opacity 2s; opacity:1"; 
       animationDuration = "3s";
   }
   
   function hideradiationtext()
   {
       document.getElementById('AirplaneText').style="transition: opacity 0.5s; opacity:0";
   
   }