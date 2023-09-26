import Modell from "../model/Modell.js";
import NagyKepView from "../view/NagyKep.js";
class Controller{
    constructor(){
        //példányosítjuk a modellt
        const MODELL= new Modell()
        //példányosítjuk a View-t
        const NAGYKEPVIEW=new NagyKepView( MODELL.getAktKep(), $(".nagykep"))
        //feliartkozunk a view eseményeire
        $(window).on("jobb",()=>{
            //meg kell hívni a modell megfelelő tagfüggvényeit
            MODELL.jobb()
            let aktKep=MODELL.getAktKep()
            console.log(aktKep)
            //ezt a képet kéne beletenni a főkép helyére
            NAGYKEPVIEW.nagyKepCsere(aktKep)
            
        })
    }
}
export default Controller;