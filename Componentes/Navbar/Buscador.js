
document.addEventListener("DOMContentLoaded",

document.addEventListener("keyup", e=> {

    if(e.target.matches("#input-src")) {
        if (e.key === "Escape") e.target.value = ""

        document.getElementsById("#name").forEach(cosa => {


            cosa.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?cosa.classList.remove("filtro")
            :cosa.classList.add("filtro")

        }
            )

    }


}
)

 );