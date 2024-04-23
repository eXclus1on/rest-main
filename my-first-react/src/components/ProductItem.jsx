import PropTypes from "prop-types";

ProductItem.propTypes = {
  product: PropTypes.object,
};

function ProductItem({ product }) {
  return (
    <>
      <div key={product.id}>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
      </div>
      <div>Product Info</div>
    </>
  );
}

export default ProductItem;
