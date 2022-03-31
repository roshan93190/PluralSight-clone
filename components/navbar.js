document.addEventListener("click", (e) => {
    const isdropdownbutton = e.target.matches('[data-dropdown-button]');
    
    if (!isdropdownbutton && e.target.closest('[data-dropdown]') != null) return;
    let currentdropdown;
    if (isdropdownbutton) {
        
      currentdropdown = e.target.closest('[data-dropdown]');
     
      currentdropdown.classList.toggle("active");
      currentdropdown.classList.toggle("indicate");
    }
    document.querySelectorAll("[data-dropdown].active").forEach((dropdowns) => {
      if (dropdowns === currentdropdown)
      {
          console.log(currentdropdown)
          return;
      } 
     
      dropdowns.classList.remove("active");
      dropdowns.classList.remove("indicate");
    });
  });
  

  document.addEventListener("click",(even)=>{
    let togglebutton=document.getElementsByClassName('toggle-button')[0]
    let navbarlink=document.getElementsByClassName("remain")[0]
    
    togglebutton.addEventListener("click",()=>{
      console.log("ranjan")
      navbarlink.classList.toggle('active')
    })
  })
  