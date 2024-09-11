const loadCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const dataArray = data.data;
    dataArray.forEach(dataArray => {
        categories = dataArray.category;
        // console.log(categories);
        showCategories(categories);
    });
}
const showCategories = (categories) => {

    const categoriesContainer = document.getElementById('categoriesContainer');
    const navContainer = document.createElement('div');
    navContainer.classList = `py-2 mx-1 sm:px-5`
    navContainer.innerHTML = `
    <button class="btn">${categories}</button>`
    categoriesContainer.appendChild(navContainer);
}

const loadVideos = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    const dataArray = data.data;
    // console.log(dataArray);
    dataArray.forEach(dataArray => {
        videos = dataArray;
        // console.log(videos);
        

        authorsArray = videos.authors;
        authorsArray.forEach(authorsArray =>{
            authors = authorsArray;
            console.log(authors);
            showVideos(videos, authors);
        })

    });

}
const showVideos = (videos, authors) => {
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.innerHTML = `
            <div class="mt-10">
                <img class="w-80 h-48 rounded-lg mb-5" src="${videos.thumbnail}" alt="">
                <div class="flex gap-3">
                    <div>
                        <img class="w-10 h-10 rounded-[2.5rem]" src="${authors.profile_picture}" alt="">
                    </div>
                    <div class="w-64">
                        <h2 class="text-[#171717] font-bold text-base">${videos.title}</h2>
                        <div class="flex gap-2 mt-2">
                            <h2 class="text-[#171717B2] text-sm font-normal">${authors.profile_name}</h2>
                            <h3 class="w-4 h-4">${authors.verified}</h3>
                        </div>
                        <h3 class="mt-2 text-[#171717B2] text-sm font-normal">${videos.others.views}</h3>
                    </div>
                </div>
            </div>`;
    cardContainer.appendChild(card);
    
}


loadCategories();
loadVideos();