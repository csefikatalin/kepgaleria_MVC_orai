class NagyKepView {
    #kep //szöveges típus
    constructor(kep, szuloElem){
        //MIT AKARUNK MEGJELENÍTENI ÉS HOVA?
        this.#kep=kep;
        this.szuloElem=szuloElem
        //HTML tag létrehozása
        this.#htmlOsszerak()
        //meg kell fogni a gombokat
        this.balGombElem=$("#bal")
        this.jobbGombElem=$("#jobb")
        this.nagyKepHelye=$("#nagykephelye")
        this.balGombElem.on("click",()=>{
            this.#sajatEsemenykezelo("bal")
        })
        this.jobbGombElem.on("click",()=>{
            this.#sajatEsemenykezelo("jobb")
        })
    }
    nagyKepCsere(kep){
        this.nagyKepHelye.attr("src",kep)
    }
    #sajatEsemenykezelo(esemenynev){
        console.log(esemenynev)
        const esemenyem=new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }

    #htmlOsszerak(){
        let txt="<button id='bal'>BAL</button>"
        txt+=`
            <div class="card">
            <div class="card-header">Főkép</div>
            <div class="card-body"><img id="nagykephelye" src="${this.#kep}" class="img-thumbnail" alt="Cinque Terre"></div>
            <div class="card-footer">Leírás</div>
        </div>
        `
        txt+="<button id='jobb'>JOBB</button>"
        this.szuloElem.html(txt);
    }
}
export default NagyKepView;