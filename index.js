function mostrarResultados(results) {
   const contenedor = document.querySelector(".results")
   const templateId = document.querySelector("#result-item-template")
   const resultsEl = document.querySelector(".cant-results")
   resultsEl.textContent = results.length;
   contenedor.innerHTML = "";
   
   if (results.length == 0) {
      const crearEl = document.createElement("h1")
      crearEl.textContent = "No se encontró resultados"
      contenedor.appendChild(crearEl)
   } else {
         for (const r of results) {
            const imgEl = templateId.content.querySelector(".results-item-img")
            imgEl.src = r.thumbnail
      
            const titleEl = templateId.content.querySelector(".results-item-title")
            titleEl.textContent = r.title
      
            const conditionEl = templateId.content.querySelector(".results-item-estado")
            conditionEl.textContent = r.condition
      
            const priceEl = templateId.content.querySelector(".results-item-price")
            priceEl.textContent = "$" +r.price
            
            const vendidosEl = templateId.content.querySelector(".results-item-ventas-nume")
            vendidosEl.textContent = r.sold_quantity
            
            const clone = document.importNode(templateId.content, true);
            contenedor.appendChild(clone)
         }
   }
}

function main() {
   const formEl = document.querySelector(".search-form");
   formEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const palabraABuscar = e.target.buscar.value;
      fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
         .then((response) => response.json())
         .then((data) => mostrarResultados(data.results))
      
   });
}
main()