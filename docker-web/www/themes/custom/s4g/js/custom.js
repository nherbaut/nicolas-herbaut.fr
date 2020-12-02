var slideUp = {
                    interval: 300,
                    reset: true,
                    distance: "100 px",
                }

                ;
                
                for (let e of document.getElementsByClassName("topa")) {
                    ScrollReveal().reveal(".topa", {
                        interval: 300,
                    });
                }

                ScrollReveal().reveal('#meta0', {
                    interval: 1500,
                    origin: "top",
                    delay: 1000,
                    distance: "300px"
                });

                ScrollReveal().reveal('#meta1', {
                    interval: 2500,
                    delay: 2500,
                    origin: "left",
                    distance: "500px"
                });

                ScrollReveal().reveal('#meta2', {
                    interval: 500,
                    delay: 3500,
                    origin: "right",
                    distance: "500px"
                });
                ScrollReveal().reveal('#meta4', {
                    interval: 500,
                    delay: 4500,
                    origin: "bottom",
                    distance: "500px"
                });
