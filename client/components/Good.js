// import image from "../images/movieHouse.png";

export default ({ good, onClick }) => (
  <div class="col mb-4" key={good.id}>
    <div class="card">
      <img className="card-img-top" width="150" height="255" alt="lorem" />
      <div class="card-body">
        <h5 class="card-title">{good.name}</h5>
        <p class="card-text">{good.description}</p>
        <a href="#" class="btn btn-primary" onClick={e => onClick(e, good)}>
          Add to cart
        </a>
        {good.price}
      </div>
    </div>
  </div>
);
