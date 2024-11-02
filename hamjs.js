let ham1 = document.getElementById('ham1');
let ham2 = document.getElementById('ham2');
let ham3 = document.getElementById('ham3');
let ham4 = document.getElementById('ham4');
let ham5 = document.getElementById('ham5');
let ham6 = document.getElementById('ham6');
let ham7 = document.getElementById('ham7');
let ham8 = document.getElementById('ham8');
let ham9 = document.getElementById('ham9');
let scbox = document.getElementById('scbox');
let score = 0;
scbox.innerText = 0;

ham1.addEventListener("click", () => {
    score += 10;
    scbox.innerText = score;
    ham1.style.display = "none";
    ham7.style.display = "block";


    ham7.addEventListener("click", () => {
        score += 10;
        scbox.innerText = score;
        ham7.style.display = "none";
        ham5.style.display = "block";


        ham5.addEventListener("click", () => {
            score += 10;
            scbox.innerText = score;
            ham5.style.display = "none";
            ham9.style.display = "block";


            ham9.addEventListener("click", () => {
                score += 10;
                scbox.innerText = score;
                ham9.style.display = "none";
                ham3.style.display = "block";


                ham3.addEventListener("click", () => {
                    score += 10;
                    scbox.innerText = score;
                    ham3.style.display = "none";
                    ham1.style.display = "block";


                    ham1.addEventListener("click", () => {
                        ham1.style.display = "none";
                        ham5.style.display = "block";
                        ham9.style.display = "none";


                        ham5.addEventListener("click", () => {
                            ham5.style.display = "none";
                            ham2.style.display = "block";



                            ham2.addEventListener("click", () => {
                                score += 10;
                                scbox.innerText = score;
                                ham2.style.display = "none";
                                ham7.style.display = "block";


                                ham7.addEventListener("click", () => {
                                    ham7.style.display = "none";
                                    ham4.style.display = "block";


                                    ham4.addEventListener("click", () => {
                                        score += 10;
                                        scbox.innerText = score;
                                        ham4.style.display = "none";
                                        ham6.style.display = "block";


                                        ham6.addEventListener("click", () => {
                                            score += 10;
                                            scbox.innerText = score;
                                            ham6.style.display = "none";
                                            ham8.style.display = "block";


                                            ham8.addEventListener("click", () => {
                                                score += 10;
                                                scbox.innerText = score;
                                                ham8.style.display = "none";
                                                ham5.style.display = "block";

                                                
                                                ham5.addEventListener("click", () => {
                                                    ham5.style.display = "none";
                                                    ham2.style.display = "block";



                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
scbox.innerText = score;


function reset() {
    ham1.style.display = "block";
    ham2.style.display = "none";
    ham3.style.display = "none";
    ham4.style.display = "none";
    ham5.style.display = "none";
    ham6.style.display = "none";
    ham7.style.display = "none";
    ham8.style.display = "none";
    ham9.style.display = "none";
    scbox.innerText = 0;

}