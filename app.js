let currentQuestion = 0;
let answers = [];
let rocksDidattica = {};

fetch('data/rocks-didattica.json')
  .then(res => res.json())
  .then(data => { window.rocksDidattica = data; });

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.style.display='none');
  document.getElementById(id).style.display='block';
}

function showResult(rockId, score) {
  const rock = rocksDidattica[rockId];
  const div = document.getElementById('result-content');
  div.innerHTML = `
    <h3>${rock.nome}</h3>
    <p><strong>Tipo:</strong> ${rock.tipo}</p>
    <p><strong>Ambiente:</strong> ${rock.ambiente}</p>
    <p><strong>Minerali:</strong> ${rock.minerali.join(', ')}</p>
    <p><strong>Uso:</strong> ${rock.uso}</p>
    <p><strong>Dove trovarla:</strong> ${rock.dove_trovarla}</p>
    <p><strong>Compatibilità:</strong> ${score} / 6</p>
    <p><strong>Note docente:</strong> ${rock.note_docente}</p>
    <button onclick="resetRecognition()">Riprova</button>
  `;
  showScreen('result');
}

function resetRecognition() {
  currentQuestion = 0;
  answers = [];
  showScreen('quiz-screen');
}