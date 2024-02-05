
// function handleClick(url, countryId){
//   fetch(url ,{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({countryId}),
//   }).then(response => {
//     if(!response.ok){
//       throw new Error(`http error! Status: ${response.status}`);
//     }
//     return response.text();
//   }).then(html => {
//     document.body.innerHTML = html;
//   }).catch(e => {
//     console.error('Fetch error', e);
//   })
// }


document.addEventListener("DOMContentLoaded", ()=>{

  const ourcountries = ["IN", "AU", "CN", "JP", "KR", "TW", "ID", "SG", "MY", "CA", "US", "TH", "NP", "SA", "UAE","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR"];
  const countries = document.querySelectorAll('#world-map path');
  countries.forEach(country => {
    country.addEventListener("mouseenter", () => {
      if (ourcountries.includes(country.id.toUpperCase())) {
        country.style.cursor = "pointer";
        country.setAttribute("stroke", "white");
        country.setAttribute("stroke-width", "1.5");
      }
    });
    country.addEventListener("mouseleave", () => {
      if (ourcountries.includes(country.id.toUpperCase())) {
        country.setAttribute("stroke", "none");
        country.setAttribute("stroke-width", "0");
      }
    });
  });

  

  document.querySelector(".expertise-link").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-2").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-2");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-3").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-3");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-4").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-4");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-5").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-5");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-6").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-6");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-7").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-7");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-8").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-8");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-9").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-9");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });

  document.querySelector(".expertise-link-10").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-10");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });
  document.querySelector(".expertise-link-11").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-11");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });
  document.querySelector(".expertise-link-12").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-12");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });
  document.querySelector(".expertise-link-13").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-13");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });
  document.querySelector(".expertise-link-14").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-14");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });
  document.querySelector(".expertise-link-15").addEventListener("mouseenter", () => {
    const dropdown = document.querySelector(".dropdown-15");
    dropdown.style.visibility = "visible";
    setTimeout(() => {
        dropdown.style.opacity = "1";
    }, 10);
  });


  document.querySelector(".drop-menu").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-2").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-2");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-3").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-3");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-4").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-4");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-5").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-5");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-6").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-6");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-7").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-7");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-8").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-8");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-9").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-9");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  document.querySelector(".drop-menu-10").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-10");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });
  document.querySelector(".drop-menu-11").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-11");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });
  document.querySelector(".drop-menu-12").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-12");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });
  document.querySelector(".drop-menu-13").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-13");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });
  document.querySelector(".drop-menu-14").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-14");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });
  document.querySelector(".drop-menu-15").addEventListener("mouseleave", () => {
    const dropdown = document.querySelector(".dropdown-15");
    dropdown.style.opacity = "0";
    setTimeout(() => {
        dropdown.style.visibility = "hidden"; 
    }, 300);
  });

  const burger = document.querySelector(".burger");
  const navPart = document.querySelector(".nav-part");
  const xButton = document.querySelector(".x-button")

  burger.addEventListener("click", ()=>{
      navPart.classList.toggle("slideIn");
  })

  xButton.addEventListener("click", ()=>{
      navPart.classList.toggle("slideIn");
  })

  const dropDown = document.querySelector(".drop-down"); 
  const expertise = document.querySelector(".expertise");
  expertise.addEventListener("click", () => {
    dropDown.classList.toggle("flex");
  });

  const dropDown2 = document.querySelector(".drop-down-2"); 
  const expertise2 = document.querySelector(".expertise-2");
  expertise2.addEventListener("click", () => {
    dropDown2.classList.toggle("flex");
  });

  const dropDown3 = document.querySelector(".drop-down-3"); 
  const expertise3 = document.querySelector(".expertise-3");
  expertise3.addEventListener("click", () => {
    dropDown3.classList.toggle("flex");
  });

  const dropDown4 = document.querySelector(".drop-down-4"); 
  const expertise4 = document.querySelector(".expertise-4");
  expertise4.addEventListener("click", () => {
    dropDown4.classList.toggle("flex");
  });

  const dropDown5 = document.querySelector(".drop-down-5"); 
  const expertise5 = document.querySelector(".expertise-5");
  expertise5.addEventListener("click", () => {
    dropDown5.classList.toggle("flex");
  });

  const dropDown6 = document.querySelector(".drop-down-6"); 
  const expertise6 = document.querySelector(".expertise-6");
  expertise6.addEventListener("click", () => {
    dropDown6.classList.toggle("flex");
  });

  const dropDown7 = document.querySelector(".drop-down-7"); 
  const expertise7 = document.querySelector(".expertise-7");
  expertise7.addEventListener("click", () => {
    dropDown7.classList.toggle("flex");
  });

  const dropDown8 = document.querySelector(".drop-down-8"); 
  const expertise8 = document.querySelector(".expertise-8");
  expertise8.addEventListener("click", () => {
    dropDown8.classList.toggle("flex");
  });

  const dropDown9 = document.querySelector(".drop-down-9"); 
  const expertise9 = document.querySelector(".expertise-9");
  expertise9.addEventListener("click", () => {
    dropDown9.classList.toggle("flex");
  });

})