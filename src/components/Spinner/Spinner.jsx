import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="inner-spinner"></div>
      </div>
      <div className="loading-text">Carregando...</div>
    </div>
  );
};

export default Spinner;
