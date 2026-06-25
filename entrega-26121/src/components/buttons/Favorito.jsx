function Favorito({ isFavorite, onToggle }) {
  return (
    <button 
      className="favorito-button"
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      style={{
        background: 'none',
        border: 'black',
        fontSize: '24px',
        cursor: 'pointer',
        padding: '5px'
      }}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}

export default Favorito;