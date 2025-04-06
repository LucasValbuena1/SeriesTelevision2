import { Serie } from "./Serie.js";

export const series: Serie[] = [
  new Serie(
    1,
    "Breaking Bad",
    "AMC",
    5,
    "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
    "https://www.amc.com/shows/breaking-bad",
    "./imgs/brba.jpeg"
  ),
  new Serie(
    2,
    "Orange Is the New Black",
    "Netflix",
    6,
    "The series begins revolving around Piper Chapman, una mujer en sus treintas que vive en la ciudad de Nueva York y es condenada a 15 meses en la Penitenciaría Litchfield",
    "https://www.netflix.com/co/title/70242311",
    "./imgs/oitnw.jpeg"
  ),
  new Serie(
    3,
    "Game of Thrones",
    "HBO",
    7,
    "American fantasy drama",
    "https://www.hbo.com/game-of-thrones",
    "./imgs/GOT.jpeg"
  ),
  new Serie(
    4,
    "The Big Bang Theory",
    "CBS",
    12,
    "Leonard and Sheldon son brillantes físicos—genios en el laboratorio, pero socialmente torpes en cualquier otro ámbito. Con la llegada de la vecina Penny, sus vidas dan un giro inesperado, y entre anécdotas y relaciones, se desenvuelve una divertida historia.",
    "https://www.cbs.com/shows/big_bang_theory/about/",
    "./imgs/tbbt.jpeg"
  ),
  new Serie(
    5,
    "Sherlock",
    "BBC",
    4,
    "Sherlock muestra al detective consultor Sherlock Holmes (Benedict Cumberbatch) resolviendo misterios en el Londres actual, acompañado por el Dr. John Watson (Martin Freeman).",
    "https://www.bbc.co.uk/programmes/b018ttws",
    "./imgs/s.jpeg"
  ),
  new Serie(
    6,
    "A Very English Scandal",
    "BBC",
    2,
    "A Very English Scandal es una miniserie de comedia dramática basada en el libro homónimo de John Preston.",
    "https://www.bbc.co.uk/programmes/p065smy4",
    "./imgs/ave.jpeg"
  ),
];

//taller 1
const tableBody = document.querySelector<HTMLTableSectionElement>("tbody");
if (tableBody) {
  let rowsHtml = "";
  for (const serie of series) {
    rowsHtml += `
      <tr>
        <th scope="row">${serie.id}</th>
        <td><a href="${serie.link}" target="_blank" onclick="event.preventDefault();">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      </tr>
    `;
  }
  tableBody.innerHTML = rowsHtml;
}

//taller 1
const tableElement: HTMLTableElement | null = document.querySelector("table");
if (tableElement) {
  const tfoot = document.createElement("tfoot");
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  const averageSeasons = totalSeasons / series.length;
  tfoot.innerHTML = `<tr>
      <td colspan="3" class="fw-bold">Seasons average:</td>
      <td>${averageSeasons}</td>
    </tr>`;
  tableElement.appendChild(tfoot);
}


const rows = document.querySelectorAll<HTMLTableRowElement>("tbody tr");
rows.forEach((row, index) => {
  row.style.cursor = "pointer";
  row.addEventListener("click", () => {
    card(series[index]);
  });
});

//se pone en una funcion porque se ejecuta mas de una vez
function card(serie: Serie): void {
  const cardDetailContainer = document.getElementById("card-detail");
  if (cardDetailContainer) {
    cardDetailContainer.innerHTML = `
      <div class="card">
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.link}" target="_blank" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `;
  }
}



//DESCARGUE LAS IMAGENES LOCALMENTE PORQUE EL BUSCADOR ME BLOQUEABA LOS ENLACES
