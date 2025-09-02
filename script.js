let playarea = document.querySelector(".playarea")
let boxes = document.querySelectorAll(".box ")
let pturn = "X"
let win = document.querySelector("#win")
let reset = document.querySelector("#reset")
let count = 0
let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



function startgame(e){
    if(e.target.textContent === ""){
            e.target.textContent = pturn
            count++;
            pturn = pturn === "X" ? "O" : "X"
            win.innerText = `Player's ${pturn} chance`
            wincond()

        }  
        console.log(count);
    if (count === 9){
        win.innerText = "Match Draw"
    }
}


function wincond(){
     winner.forEach(val => {
        let ind0 = val[0]
        let ind1 = val[1]
        let ind2 = val[2]

        let val0 = boxes[ind0].innerText
        let val1 = boxes[ind1].innerText
        let val2 = boxes[ind2].innerText
        
        chkwin(val0,val1,val2)

    });
}

function chkwin(val0,val1,val2){
    if(val0 !== "" && val1 !== "" && val2 !== ""){

            if(val0 === val1 && val1 === val2){
                count = 0
                win.innerText = `${val0} is winner`
                playarea.removeEventListener("click",startgame)
            }
        }
}



reset.addEventListener("click", () => {
    boxes.forEach(item => {
        item.innerText = ""
        
    })
    win.innerText = "Player's X chance"
    pturn = "X"
    playarea.addEventListener("click", startgame)
    

})


playarea.addEventListener("click", startgame)
