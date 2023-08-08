import { useState } from 'react';

function QuestionForm() {
  const [inputValue, setInputValue] = useState('Posez votre question ici'); // On initialise la valeur du state à 'Posez votre question ici'
  const isInputError = inputValue.includes('f');

  {
    isInputError && (
      <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
    );
  }

  // On crée une fonction pour vérifier la valeur de l'input
  function checkValue(value) {
    if (!value.includes('f')) {
      setInputValue(value);
    }
  }

  // On crée une fonction pour afficher la valeur de l'input au clic sur le bouton
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(e) => checkValue(e.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
      {/* {console.log(inputValue)}; */}
    </div>
  );
}

export default QuestionForm;
