const auth = "563492ad6f91700001000001f1368adb8ad047fc8ba2d81457b0add2";

const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.search-form');
const home = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
let searchValue;


searchInput.addEventListener('input', updateInput);
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    searchPhotos(searchValue);
})

function updateInput(e){
    searchValue = e.target.value;
}

async function fetchApi(url){
    const dataFetch = await fetch(url, {
        method : "GET",
        headers: {
            Accept : 'aplication/json',
            Authorization : auth
        }
    });
    const data = await dataFetch.json();
    return data;
}

function generatePictures(data){
    data.photos.forEach(photo =>{
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `
            <img src="${photo.src.large}"></img>
            <p>${photo.photographer}</p>
        `;
        gallery.appendChild(galleryImg);
    }); 
}

async function curatedPhotos(){
    data = await fetchApi(home);
    generatePictures(data);
}

async function searchPhotos(query){
    let url = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
    const data = await fetchApi(url);
    generatePictures(data);

}

curatedPhotos();