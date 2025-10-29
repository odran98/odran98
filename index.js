import contato from "./paginas/contato/index.js";
import inicio from "./paginas/inicio/index.js";
import projetos from "./paginas/projetos/index.js";
import sobre from "./paginas/sobre/index.js";
import trikey from "./paginas/projetos/trikey/trikey.js";
import WTND from "./paginas/projetos/WTND/WTND.js";
import branchesOfFate from "./paginas/projetos/branches_of_fate/branchesOfFate.js";

const main = document.querySelector('#root');

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "":
                main.appendChild(inicio());
                break;
             case "#projetos":
                main.appendChild(projetos());
                break;
            case "#projetos/trikey":
                main.appendChild(trikey());
                break;
            case "#projetos/WhereTheNightDrowns":
                main.appendChild(WTND());
                break;
            case "#projetos/BranchesOfFate":
                main.appendChild(branchesOfFate());
                break;
             case "#sobre":
                main.appendChild(sobre());
                break;
             case "#contato":
                main.appendChild(contato());
                break;
            default:
                main.appendChild(inicio());
        }
    })
    }

window.addEventListener("load",() => {
    switch(window.location.hash){
            case "":
                main.appendChild(inicio());
                break;
             case "#projetos":
                main.appendChild(projetos());
                break;
                case "#projetos/trikey":
                main.appendChild(trikey());
                break;
                case "#projetos/WhereTheNightDrowns":
                main.appendChild(WTND());
                break;
                case "#projetos/BranchesOfFate":
                main.appendChild(branchesOfFate());
                break;
             case "#sobre":
                main.appendChild(sobre());
                break;
             case "#contato":
                main.appendChild(contato());
                break;
            default:
                main.appendChild(inicio());
        }
    init();
})