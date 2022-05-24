const FoodCartCard = ({ info }) => {
  return (
    <div>
      <h3>{info.name}</h3>
      <p>$ {info.price}</p>
      <button>-</button>
      <p>1</p>
      <button>+</button>
    </div>
  );
};

export default FoodCartCard;
