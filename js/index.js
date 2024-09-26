function addNav(){
    const arr = [["#mainheader", "home"], ["#features", "features"], ["#contact", "contact"], ["#tutorial", "tutorial"]];
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; i++){
            const li = document.createRange().createContextualFragment(`
                
                <li><a href="${arr[i][0]}">${arr[i][1]}</a></li>
                
                `)
                const lista = document.querySelector('.lista');
                lista.append(li)
        }
    }
}

addNav()