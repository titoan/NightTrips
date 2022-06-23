function getTabs(){
    let tabsTitles = document.querySelectorAll('.tabs__menu li');
    tabsTitles = [...tabsTitles];

    let tabsContent = document.querySelectorAll('.tabs__content');
    tabsContent = [...tabsContent];
   
    tabsTitles.forEach((item, index)=>{        
        item.addEventListener('click', function(){
            removeClass(tabsTitles, 'active')           
            this.classList.add('active');

            tabsContent.forEach((item, ind, arr)=>{
                item.classList.remove('active');
                if(arr.indexOf(item) == index){
                   item.classList.add('active')
                }
            })
        })
    })
}

function removeClass(arr, className){
    arr.forEach((item)=>{
        item.classList.remove(className)
    })
}

getTabs();