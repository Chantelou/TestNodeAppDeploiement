
const showMenu = () => {
  let menu = document.getElementById("menu")

  if(menu){
      menu.innerHTML =`

       <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container">
                <a class="navbar-brand " href="#"><img src=" https://demo.themefisher.com/airspace-bootstrap/images/logo.png" alt="logo" srcset=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarScroll">
                  <ul class="navbar-nav  mx-5  my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item ">
                      <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="about.html">A propos</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="contact.html">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

      `;
  }
}

module.export = showMenu();