let board = [

[5,3,0,0,7,0,0,0,0],
[6,0,0,1,9,5,0,0,0],
[0,9,8,0,0,0,0,6,0],

[8,0,0,0,6,0,0,0,3],
[4,0,0,8,0,3,0,0,1],
[7,0,0,0,2,0,0,0,6],

[0,6,0,0,0,0,2,8,0],
[0,0,0,4,1,9,0,0,5],
[0,0,0,0,8,0,0,7,9]

];


let selectedCell=null;
let selectedNumber=null;



function createBoard(){

    let boardDiv=document.getElementById("board");

    boardDiv.innerHTML="";


    for(let i=0;i<9;i++){

        for(let j=0;j<9;j++){


            let cell=document.createElement("div");

            cell.classList.add("cell");


            if(board[i][j]!==0){

                cell.innerHTML=board[i][j];
                cell.classList.add("fixed");

            }


            if(j==2 || j==5)
                cell.style.borderRight="3px solid black";


            if(i==2 || i==5)
                cell.style.borderBottom="3px solid black";



            cell.onclick=function(){

                if(!cell.classList.contains("fixed")){

                    selectedCell=cell;

                    document.querySelectorAll(".cell")
                    .forEach(c=>c.classList.remove("selected"));

                    cell.classList.add("selected");

                }

            }



            boardDiv.appendChild(cell);

        }

    }

}



function selectNumber(num){

    selectedNumber=num;


    if(selectedCell){

        selectedCell.innerHTML=num;


        let cells=[...document.querySelectorAll(".cell")];

        let index=cells.indexOf(selectedCell);


        let row=Math.floor(index/9);
        let col=index%9;


        if(check(row,col,num)){

            document.getElementById("message")
            .innerHTML="Correct Move!";

        }
        else{

            document.getElementById("message")
            .innerHTML="Wrong Number!";

            selectedCell.innerHTML="";

        }

    }

}





function check(row,col,num){


    for(let i=0;i<9;i++){

        if(i!=col && board[row][i]==num)
            return false;


        if(i!=row && board[i][col]==num)
            return false;

    }



    let boxRow=Math.floor(row/3)*3;
    let boxCol=Math.floor(col/3)*3;


    for(let i=boxRow;i<boxRow+3;i++){

        for(let j=boxCol;j<boxCol+3;j++){

            if(i!=row && j!=col && board[i][j]==num)
                return false;

        }

    }


    board[row][col]=num;

    return true;

}



function newGame(){

location.reload();

}



createBoard();