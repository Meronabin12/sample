import './Bootpage.css';


export default function Bootpage() {
  return (

    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">YAMAHA</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav m-auto my-2 my-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Motor Cycle</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Scooter</a>
              </li>
              <li class="nav-item">

                <a class="nav-link" href="#">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="px-2 search" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn0" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div class="p-5">
          <span><i class="fab fa-facebook"></i></span>
          <span><i class="fab fa-whatsapp"></i></span>
          <span><i class="fab fa-instagram"></i></span>
          <span><i class="fab fa-google"></i></span>
          <span><i class="fab fa-youtube"></i></span>

        </div>

      </nav>

      <div class="row">
        <div class="col-sm-5 mb-3 mb-sm-0 ">
          <div class="card">
            <div class="card-body">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="card">
            <div class="card-body">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}