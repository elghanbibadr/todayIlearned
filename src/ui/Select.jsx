const Select = () => {
  return (
    <div className="custom-select">
      <select>
        <option value="">Choose category:</option>
        <option value="technology">technology</option>
        <option value="science">science</option>
        <option value="finance">finance</option>
        <option value="society">society</option>
        <option value="entertainment">entertainment</option>
        <option value="health">health</option>
        <option value="history">history</option>
        <option value="news">news</option>
      </select>
    </div>
  );
};

export default Select;
