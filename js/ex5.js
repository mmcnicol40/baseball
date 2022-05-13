console.log(" ex5 calling game stats");

 
const gstatArray = {
  "game": [
    {
      "Ttl PH Dice Roll's": 10,
      "Ttl Pitcher's Card": 5,
      "Ttl Hitter's Card": 5
    }
  ],
  "Dodgers": [
    {
      "Name": "Mitch",
      "atBats": 5,
      "Hits": 2,
      "HRs": 1
    },
    {
      "Name": "Jimmy",
      "atBats": 2,
      "Hits": 1,
      "HRs": 1
    }
  ],
  "Giants": [
    {
      "Name": "Bill",
      "atBats": 4,
      "Hits": 1,
      "HRs": 0
    }
  ]
}

  sessionStorage.setItem("gsArray",JSON.stringify(gstatArray));  
/*

            function openTab(url) {
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
             //   link.remove();
            }
            */
    
         
 



 
