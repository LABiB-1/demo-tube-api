const loadCategories = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const dataArray = data.data;
    dataArray.forEach(dataArray => {
        categories = dataArray.category;
        console.log(categories);
        showCategories(categories);
    });
}

const showCategories = (categories) =>{
 
    const categoriesContainer = document.getElementById('categoriesContainer');
    const navContainer = document.createElement('div');
    navContainer.classList =`py-2 px-5`
    navContainer.innerHTML=`
    <button class="btn">${categories}</button>`
    categoriesContainer.appendChild(navContainer);
}

loadCategories();