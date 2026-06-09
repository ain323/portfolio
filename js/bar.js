document.querySelectorAll(".mini-box").forEach(function(box,index){
        const level = box.dataset.level;

        setTimeout(function(){
        box.style.setProperty("--level",level + "%");
        },index * 1000);
});


const level = box.dataset.level;
const option = {
    root: null,
    threshold: 0.5
};

const observer = newinter