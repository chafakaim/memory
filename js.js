
let backs=document.querySelectorAll('.image .back');
let images=document.querySelectorAll('.image');
// cree un tableau comptenent tout les image
let tab=['elephant.png','giraffe.png','hippo.png','monkey.png','panda.png','parrot.png','penguin.png','pig.png','rabbit.png','snake.png']
let i=0;
let tabindex=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let tabend=['','','','','','','','','','','','','','','','','',''];
// generer un nombre aleatoiere entre 0 17
let k=17;
let j=0;
while(tabindex !== []){
    let rand=Math.round(Math.random() *k);
    console.log(tabindex[rand],rand);
     tabend[j]=tabindex[rand];
    tabindex.splice(rand,1);
    k--;
    j++;
    console.log(tabend);
}
// piocher dans le tableau des index puis rempire un autre avec cette valeur

// en doit garentire que le random ne ce repete pas et que une case qui est deja remplie ne se fait pas ecrasé











let im=[];
// distribuer les image sur les back
backs.forEach(element => {
    let img=document.createElement('img');
    img.setAttribute('src',`./image/${tab[i]}`);
    element.appendChild(img);
    i++;
    console.log(backs.length -1)
    if(i === backs.length/2){
        i=0;
    }   
    
    
    // gestion du click
});
// if click sur l'une des box en lui ajoute la class active et on souvgarde son image dan on memeoir 
function additemsfortab(e,i){
    e=e.target.parentNode;
    let face=e.querySelector('.face');
    let back=e.querySelector('.back');
    if(face.classList.contains('active')){
        return;
    }
    face.classList.add('active');
    back.classList.add('active');

    // souvgarde de l'image
    let src=back.querySelector('img').getAttribute('src');

    if(im.length === 2){
        for(let i=0;i<2;i++){
            if(im[0]['img'] === im[1]['img']){
                console.log('break');
                break;
            }else{   
             images[im[i]['index']].querySelector('.face').classList.remove('active');
            }
        }
        im=[];
        im=[...im,{'img':src,'index':i}];
    }else{
        im=[...im,{'img':src,'index':i}];
        console.log(im)
    } 
}
images.forEach((element , i) => {
    element.addEventListener('click',(e)=>{
        additemsfortab(e,i);
    });
});
// il click une deuxiemem fois en ajoute la deuxieme photo en memoir en compare les deux 
