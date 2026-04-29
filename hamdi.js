   // Hamburger toggle
    

    // Slider
    const imgFill = document.querySelector('.img-fill');
    const slides = document.querySelectorAll('.cards');
    const totalSlides = slides.length;

    let currentIndex = 0;

    function showSlide(index){
        const slideWidth = slides[0].clientWidth;
        imgFill.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // Auto slider every 5 sec
    setInterval(() => {
        currentIndex++;
        if(currentIndex >= totalSlides) currentIndex = 0;
        showSlide(currentIndex);
    }, 5000);

    // Arrow functionality
    const nextArrow = document.querySelector('.slider-arrow.right');
    const prevArrow = document.querySelector('.slider-arrow.left');

    nextArrow.addEventListener('click', () => {
        currentIndex++;
        if(currentIndex >= totalSlides) currentIndex = 0;
        showSlide(currentIndex);
    });

    prevArrow.addEventListener('click', () => {
        currentIndex--;
        if(currentIndex < 0) currentIndex = totalSlides - 1;
        showSlide(currentIndex);
    });


    // meal offers js 
    const mealIcons = document.querySelectorAll(".icon-box");
    const meals = document.querySelectorAll(".meal-box");

    // default breakfast
    meals.forEach(meal => {
        if (meal.dataset.meal === "breakfast") {
            meal.classList.add("show");
        }
    });

    mealIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            e.preventDefault(); // jooji page-ka inuu kor boodo

            mealIcons.forEach(i => i.classList.remove("active"));
            icon.classList.add("active");

            const tab = icon.dataset.tab;

            meals.forEach(meal => {
                meal.classList.remove("show");
                if (meal.dataset.meal === tab) {
                    meal.classList.add("show");
                }
            });
        });
    });
    