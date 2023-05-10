import Swal from "sweetalert2";

const MAX_HEROES = 1001;
const randomNumber = () => Math.floor(Math.random() * MAX_HEROES);

const imgHero = document.querySelector("#hero-image");
const nameHero = document.querySelector("#name");
const button = document.querySelector("#sort-button");

const ACESS_TOKEN = "6190937214316428";

const URL = `https://superheroapi.com/api.php/${ACESS_TOKEN}`;

button.addEventListener("click", (event) => {
    event.preventDefault();

    const randomId = randomNumber();

    fetch(`${URL}/${randomId}`)
        .then((res) => res.json())
        .then((data) => {
            imgHero.src = data.image.url;
            nameHero.innerHTML = data.name;
        })
        .catch((error) => {
            Swal.fire({
                title:"Hero not found",
                text: error.message,
                icon:"error",
                confirmButtonText:"Cool"
            });
        });
});

