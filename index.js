
const cards=document.getElementsByClassName('carda');

function cardfunc(x){
    
    let divspresent=document.getElementsByClassName('opencard');
    if(divspresent.length!=0){
    for (const element of divspresent) {
        
        element.style.cssText = "display:none";
    }
       
        
    }
    if(x==0){
        let mydiv=document.createElement('div');
        mydiv.classList.add('row');
        mydiv.classList.add('showme');
        mydiv.classList.add('opencard');
        mydiv.innerHTML = `
            <center><img style="min-width:300px;max-width:500px;height:auto" src="card1.png" alt="some image" class='img-responsive col-3'></center>
            <div class='col-9'>
                <p>1</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>
        `;
    cards[0].appendChild(mydiv);
}else if (x == 1) {
        let mydiv = document.createElement('div');
        mydiv.classList.add('row');
        mydiv.classList.add('showme');
        mydiv.classList.add('opencard');
        mydiv.innerHTML = `
            <center><img style="min-width:300px;max-width:500px;height:auto" src="card2.png" alt="some image" class='img-responsive col-3'></center>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>
        `;
        cards[1].appendChild(mydiv);
    } else if (x == 2) {
        let mydiv = document.createElement('div');
        mydiv.classList.add('row');
        mydiv.classList.add('showme');
        mydiv.classList.add('opencard');
        mydiv.innerHTML = `
            <center><img style="min-width:300px;max-width:500px;height:auto" src="card3.png" alt="some image" class='img-responsive col-3'></center>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>
        `;
        cards[2].appendChild(mydiv);
    } else if (x == 3) {
        let mydiv = document.createElement('div');
        mydiv.classList.add('row');
        mydiv.classList.add('showme');
        mydiv.classList.add('opencard');
        mydiv.innerHTML = `
            <center><img style="min-width:300px;max-width:500px;height:auto" src="card4.png" alt="some image" class='img-responsive col-3'></center>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>
        `;
        cards[3].appendChild(mydiv);
    } else if (x == 4) {
        let mydiv = document.createElement('div');
        mydiv.classList.add('row');
        mydiv.classList.add('showme');
        mydiv.classList.add('opencard');
        mydiv.innerHTML = `
            <center><img style="min-width:300px;max-width:500px;height:auto" src="card5.png" alt="some image" class='img-responsive col-3'></center>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>
        `;
        cards[4].appendChild(mydiv);
    } else if (x == 5) {
        let mydiv = document.createElement('div');
        mydiv.classList.add('row');
        mydiv.classList.add('showme');
        mydiv.classList.add('opencard');
        mydiv.innerHTML = `
            <center><img style="min-width:300px;max-width:500px;height:auto" src="card6.png" alt="some image" class='img-responsive col-3'></center>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>
        `;
        cards[5].appendChild(mydiv);
    }
};
//functions for non mobile version
const cardD=document.getElementsByClassName("cardB");
function functioncard(x){
    for (const card of cardD) {
        card.parentElement.classList.remove('active');
        
    }
    let selectedcard=document.getElementById('selectedcardB');
    
    if (x == 0) { 
        cardD[x].parentElement.classList.toggle('active');
        selectedcard.innerHTML =`<img src="card1.png" alt="some image" class='col-3'>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>`;
    }
    if (x == 1) { 
        cardD[x].parentElement.classList.toggle('active');
        selectedcard.innerHTML = `<img src="card2.png" alt="some image" class='col-3'>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>`;
    }
    if (x == 2) { 
        cardD[x].parentElement.classList.toggle('active');
        selectedcard.innerHTML = `<img src="card3.png" alt="some image" class='col-3'>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>`;
    }
    if (x == 3) {
        cardD[x].parentElement.classList.toggle('active'); 
        selectedcard.innerHTML = `<img src="card4.png" alt="some image" class='col-3'>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>`;
    }
    if (x == 4) {
        cardD[x].parentElement.classList.toggle('active'); 
        selectedcard.innerHTML = `<img src="card5.png" alt="some image" class='col-3'>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>`;
    }
    if (x == 5) {
        cardD[x].parentElement.classList.toggle('active'); 
        selectedcard.innerHTML = `<img src="card6.png" alt="some image" class='col-3'>
            <div class='col-9'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe fugit, minima ex, debitis inventore et, placeat dolor sit sequi ad amet eius quasi accusamus culpa beatae temporibus ut laudantium. </p>
                <h1>some header</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt et eaque assumenda sit alias exercitationem corporis, ea quod placeat, laudantium asperiores! Impedit iste modi veritatis non porro, ipsum corrupti inventore?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur neque nobis quos, repellat omnis, magnam asperiores dicta dolores dolorem quidem, quia autem ratione totam cupiditate amet? Accusamus, atque laboriosam.
                </p>
            </div>`;
    }
}