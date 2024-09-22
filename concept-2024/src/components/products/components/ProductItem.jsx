import styles from "./prodcut-item.module.css";

let ButtonComponent = () => {
    return <button className={styles.buttonStyle}>Click</button>;
};

const ProductItem = ({ singleProductItem, keyValue }) => {
    return (
        <div
            key={keyValue}
            style={{
                padding: "20px",
                border: "2px solid red",
                marginBottom: "12px",
            }}
        >
            <p className={styles.productTitle}>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    );
};

export default ProductItem;
