function toggleMenu() {
  const menu = document.getElementById("side-menu");
  // Questa riga aggiunge o toglie la classe "active" al menu
  menu.classList.toggle("active");
}

// Opzionale: Chiude il menu se clicchi fuori (sul contenuto della pagina)
document.addEventListener("click", function (event) {
  const menu = document.getElementById("side-menu");
  const btn = document.getElementById("menu-btn");

  if (!menu.contains(event.target) && !btn.contains(event.target)) {
    menu.classList.remove("active");
  }
});

// ANIMAZIONE SCROLL
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// POP-UP service
// Database descrizioni
const infoServizi = {
  // Primi 3 (uguali a Index)
  "Meccanica": "Offriamo tagliandi completi, riparazione impianti frenanti, sospensioni e interventi meccanici complessi su auto, furgoni e moto. Utilizziamo solo ricambi di alta qualità per garantire la massima sicurezza su strada.",
  "Elettronica": "Siamo dotati di strumentazioni di diagnosi all'avanguardia per individuare guasti elettrici e anomalie delle centraline. Ci occupiamo di rimappature personalizzate per ottimizzare consumi e prestazioni, sempre nel rispetto dei limiti meccanici del veicolo.",
  "Elaborazioni": "Le elaborazioni sono il cuore pulsante della nostra attività. Ci dedichiamo con passione allo studio e alla trasformazione dei veicoli per superare i limiti di serie, ma non ci fermiamo qui: con il brand <a href='FrmRacing.html' style='color: #f1c40f; text-decoration: underline; font-weight: bold;'>FRMRacing</a>, ci occupiamo dello sviluppo diretto di componenti ad alte prestazioni. Progettiamo soluzioni specifiche come assetti su misura e parti speciali, nate dall'esperienza tecnica e dai test sul campo, per offrire un'anima racing e un controllo senza compromessi a chi cerca l'eccellenza.",

  // Altri 3 (Specifici per pagina Servizi)
  "Multiveicolo": "La nostra competenza non si ferma alle auto. Siamo attrezzati per la manutenzione di furgoni, motocicli e offriamo un servizio specializzato per il tuning e la revisione di sospensioni per Mountain Bike (MTB).",
  "Elettrauto": "Gestiamo tutta la parte elettrica del tuo veicolo: dalla sostituzione batteria all'installazione di sistemi di antifurto, sensori di parcheggio e riparazione di alzacristalli o impianti di illuminazione LED/Xenon.",
  "Componenti FrmRacing": "Accedi alla nostra linea esclusiva di componenti. Sviluppiamo kit di potenziamento, distanziali, componenti ricavati dal pieno e soluzioni tecniche studiate per chi vuole trasformare radicalmente le prestazioni del proprio mezzo."
};

const modal = document.getElementById("info-modal");
const btnRacing = document.getElementById("btn-frm-racing");

document.querySelectorAll('.servizio-card').forEach(card => {
  card.addEventListener('click', () => {
    const titolo = card.querySelector('h3').innerText.trim();
    
    document.getElementById("modal-title").innerText = titolo;
    // Usiamo innerHTML per permettere il link nel testo delle Elaborazioni
    document.getElementById("modal-description").innerHTML = infoServizi[titolo] || "Dettagli in arrivo...";
    
    // GESTIONE BOTTONE GIALLO
    // Se clicchi "Elaborazioni" o "Componenti FrmRacing", mostriamo il bottone giallo
    if (titolo === "Elaborazioni" || titolo === "Componenti FrmRacing") {
      btnRacing.style.display = "inline-block";
    } else {
      btnRacing.style.display = "none";
    }
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

// Funzioni di chiusura (Assicurati che siano fuori dal ciclo forEach)
document.querySelector(".close-btn").onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};