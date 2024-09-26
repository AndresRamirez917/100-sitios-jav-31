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

async function getData(){
const result = await fetch('https://rickandmortyapi.com/api/character');
const character = await result.json();
const jsonArr = character.results.map(elemento => Object.entries(elemento));
console.log(jsonArr)
const jsonSlice = jsonArr.slice(0, 4);
character.results.forEach(element => {
    const randInt = randomData(1, jsonArr.length);
    const randIndex = randInt;
    for(i = 0; i < jsonSlice.length; i++){
        if(element.id == i){
            const card = document.createRange().createContextualFragment(`
                
            <div class="card">
                <img src="${jsonArr[randIndex][8][1]}">
                <h2>${jsonArr[randIndex][1][1]}</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <div class="list">
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</li>
                    </ul>
                </div>
            </div>
                
                `)
                const features_row = document.querySelector('.features-row');
                features_row.append(card)
        }
    }
    function randomData(min, max){
        return Math.floor(Math.random() * (min - max + 1) + max)
    }
});
}
getData()

addNav()