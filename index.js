

// FAQ DROP DOWN on FAQ section of netflix page

const faqs = document.querySelectorAll(".faq");


// Netflix website cloned/redsigned by JOSHUA MAWUDEM GAKPETOR of BBnS & big. jgm9940@gmail.com || bbns.big@gmail.com


faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    });
});