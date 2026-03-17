/* ==========================================
   1. GESTIONE MENU LATERALE
   ========================================== */
function toggleMenu() {
  const menu = document.getElementById("side-menu");
  menu.classList.toggle("active");
}

// Chiude il menu se clicchi fuori (sul contenuto della pagina)
document.addEventListener("click", function (event) {
  const menu = document.getElementById("side-menu");
  const btn = document.getElementById("menu-btn");

  if (menu && btn) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
      menu.classList.remove("active");
    }
  }
});

/* ==========================================
   2. ANIMAZIONE REVEAL ALLO SCROLL
   ========================================== */
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

/* ==========================================
   3. POP-UP SERVIZI (MODAL)
   ========================================== */
const infoServizi = {
  "Meccanica": "Offriamo tagliandi completi, riparazione impianti frenanti, sospensioni e interventi meccanici complessi su auto, furgoni e moto. Utilizziamo solo ricambi di alta qualità per garantire la massima sicurezza su strada.",
  "Elettronica": "Siamo dotati di strumentazioni di diagnosi all'avanguardia per individuare guasti elettrici e anomalie delle centraline. Ci occupiamo di rimappature personalizzate per ottimizzare consumi e prestazioni, sempre nel rispetto dei limiti meccanici del veicolo.",
  "Elaborazioni": "Le elaborazioni sono il cuore pulsante della nostra attività. Ci dedichiamo con passione allo studio e alla trasformazione dei veicoli per superare i limiti di serie, ma non ci fermiamo qui: con il brand <a href='FrmRacing.html' style='color: #f1c40f; text-decoration: underline; font-weight: bold;'>FRMRacing</a>, ci occupiamo dello sviluppo diretto di componenti ad alte prestazioni.",
  "Multiveicolo": "La nostra competenza non si ferma alle auto. Siamo attrezzati per la manutenzione di furgoni, motocicli e offriamo un servizio specializzato per il tuning e la revisione di sospensioni per Mountain Bike (MTB).",
  "Elettrauto": "Gestiamo tutta la parte elettrica del tuo veicolo: dalla sostituzione batteria, sensori di parcheggio e riparazione di alzacristalli o impianti di illuminazione LED/Xenon.",
  "Componenti FRMRacing": "La nostra linea esclusiva, nata dalla pista e sviluppata per la strada. Progettiamo e realizziamo internamente componenti aftermarket di alta qualità — dai kit di potenziamento agli elementi ricavati dal pieno — specializzati nell'ottimizzazione della Suzuki Swift Sport ZC33S. Ogni pezzo è studiato per massimizzare prestazioni e affidabilità.",
"Gommista": `
    <div style="text-align: left; width: 100%; background: #1a1a1a !important; display: flex; flex-direction: column; gap: 0 !important;">
      
      <div style="padding: 0 30px 15px 30px; margin: 0 !important; background: #1a1a1a !important; border: none !important; outline: none !important; box-shadow: none !important;">
        <p style="font-size: 1.1rem; line-height: 1.3; color: #primary; margin: 0 !important;">
          Attrezzatura professionale di precisione per la cura dei tuoi pneumatici.
        </p>
      </div>
      
      <div style="margin: 0 !important; padding: 0 !important; background: #1a1a1a !important; border: none !important; outline: none !important; box-shadow: none !important;">
        <div style="width: 100%; height: 500px; background: #1a1a1a !important; display: flex; align-items: center; justify-content: center; margin: 0 !important; padding: 0 !important; border: none !important;">
            <img src="img/Servizi/smontagomme.jpeg" alt="Smontagomme professionale" 
                 style="max-width: 100%; max-height: 100%; object-fit: contain; display: block; border: none !important; outline: none !important; box-shadow: none !important; margin: 0 auto !important;">
        </div>
        <div style="padding: 20px 30px 25px 30px; background: #1a1a1a !important;">
            <h4 style="color: #f1c40f; font-size: 1.4rem; margin: 0 0 5px 0; text-transform: uppercase;">Smontagomme Professionale</h4>
            <p style="font-size: 1.1rem; opacity: 0.9; margin: 0; line-height: 1.4;">
Smontagomme ad alte prestazioni, progettato per operare anche su
            <strong>pneumatici Run Flat</strong> e a profilo ribassato.<br />
            Supporta cerchi da 10 a 24 pollici. Riduce al minimo il graffio
            del cerchione.            </p>
        </div>
      </div>

      <div style="margin: 0 !important; padding: 0 !important; background: #1a1a1a !important; border: none !important;">
        <div style="width: 100%; height: 500px; background: #1a1a1a !important; display: flex; align-items: center; justify-content: center; margin: 0 !important; padding: 0 !important;">
            <img src="img/Servizi/bilanciamentogomme2.jpeg" alt="Bilanciatrice digitale" 
                 style="max-width: 100%; max-height: 100%; object-fit: contain; display: block; border: none !important; outline: none !important; box-shadow: none !important; margin: 0 auto !important;">
        </div>
        <div style="padding: 20px 30px 25px 30px; background: #1a1a1a !important;">
            <h4 style="color: #f1c40f; font-size: 1.4rem; margin: 0 0 5px 0; text-transform: uppercase;">Bilanciatrice Digitale</h4>
            <p style="font-size: 1.1rem; opacity: 0.9; margin: 0; line-height: 1.4;">
               Bilanciatrice elettronica di ultima generazione con
            <strong>rilevamento automatico dei parametri</strong>. <br />
            </p>
        </div>
      </div>
    </div>
  `
};

const modal = document.getElementById("info-modal");
const btnRacing = document.getElementById("btn-frm-racing");

// Apertura Modal al click sulla card
document.querySelectorAll('.servizio-card').forEach(card => {
  card.addEventListener('click', () => {
    const titolo = card.querySelector('h3').innerText.trim();
    
    document.getElementById("modal-title").innerText = titolo;
    document.getElementById("modal-description").innerHTML = infoServizi[titolo] || "La nostra linea esclusiva, nata dalla pista e sviluppata per la strada. Progettiamo e realizziamo internamente componenti aftermarket di alta qualità — dai kit di potenziamento agli elementi ricavati dal pieno — specializzati nell'ottimizzazione della Suzuki Swift Sport ZC33S. Ogni pezzo è studiato per massimizzare prestazioni e affidabilità.";
    
    // Mostra/Nascondi bottone racing
    if (titolo === "Elaborazioni" || titolo === "Componenti FRMRacing") {
      btnRacing.style.display = "inline-block";
    } else {
      btnRacing.style.display = "none";
    }
    
    // Visualizzazione con Flex per centratura perfetta (come da tuo CSS)
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Blocca lo scroll sotto
  });
});

/* ==========================================
   4. LOGICA DI CHIUSURA (CLICK ESTERNO)
   ========================================== */
window.addEventListener("click", (event) => {
  // Se l'utente clicca esattamente sullo sfondo (modal) e non sul contenuto
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Riattiva lo scroll
  }
});