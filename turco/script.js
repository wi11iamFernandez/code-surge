// Funzione per recuperare i viaggi dell'utente dall'API
function fetchViaggiByUtente() {
    fetch('/iscrizione/me')  // API per ottenere i viaggi dell'utente autenticato
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore durante il recupero dei viaggi.');
            }
            return response.json();
        })
        .then(data => {
            // Popola i viaggi nella pagina
            populateViaggi(data);
        })
        .catch(error => {
            console.error('Errore:', error);
            document.getElementById('viaggi-container').innerHTML = '<p>Errore durante il caricamento dei viaggi.</p>';
        });
}

// Funzione per popolare la lista dei viaggi nella pagina
function populateViaggi(viaggi) {
    const viaggiContainer = document.getElementById('viaggi-container');
    viaggiContainer.innerHTML = ''; // Pulizia del contenitore

    if (viaggi.length === 0) {
        viaggiContainer.innerHTML = '<p>Nessun viaggio trovato.</p>';
        return;
    }

    // Creazione dinamica delle card per ogni viaggio
    viaggi.forEach(viaggio => {
        const viaggioCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${viaggio.nome}</h5>
                        <p class="card-text">${viaggio.descrizione}</p>
                        <p><strong>Data Partenza:</strong> ${viaggio.data_partenza}</p>
                        <p><strong>Data Arrivo:</strong> ${viaggio.data_arrivo}</p>
                        <button class="viaggio-button btn-danger" onclick="disiscriviti(${viaggio.id})">Disiscriviti</button>
                    </div>
                </div>
            </div>
        `;
        viaggiContainer.innerHTML += viaggioCard; // Aggiunge la card al contenitore
    });
}

// Chiamata dell'API al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    fetchViaggiByUtente();  // Chiamata per recuperare i viaggi dell'utente autenticato
});

function disiscriviti(idViaggio) {
    const conferma = confirm('Sei sicuro di voler disiscriverti da questo viaggio?');
    if (!conferma) return;

    // Effettua la chiamata DELETE all'API per disiscriversi
    fetch(`/iscrizione/viaggio/{id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore durante la disiscrizione dal viaggio.');
        }
        alert('Ti sei disiscritto con successo dal viaggio.');
        // Rimuovi il viaggio dalla lista (ricarica i viaggi)
        fetchViaggiByUtente();
    })
    .catch(error => {
        console.error('Errore:', error);
        alert('Si è verificato un errore durante la disiscrizione.');
    });
}
