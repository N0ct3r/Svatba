
/* ==================================================
   ANIMACE PŘI SCROLLOVÁNÍ
================================================== */

const observerOptions = {

    threshold: 0.15,

    rootMargin:
        "0px 0px -50px 0px"

};


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    } else {

                        entry.target
                            .classList
                            .remove("show");

                    }

                }
            );

        },

        observerOptions

    );


/* ==================================================
   VYHLEDÁNÍ ANIMOVANÝCH PRVKŮ
================================================== */

const animatedElements =
    document.querySelectorAll(
        ".reveal, " +
        ".reveal-up, " +
        ".reveal-left, " +
        ".reveal-right"
    );


/* ==================================================
   SPUŠTĚNÍ OBSERVERU
================================================== */

animatedElements.forEach(
    (element) => {

        observer.observe(element);

    }
);