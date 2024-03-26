
import style from './productCart.module.css';
import Image from "next/image";
function ProductCart({image, name, restaurant, price}) {
    return (
        <div className={style.cart}>
            <Image src={image} alt={name} width={160} height={158}/>
            <h3>{name}</h3>
            <p>{restaurant}</p>
            <div>
                <p>{price}$</p>
                <div>
                    <Image src={'/images/icons/editIcon.svg'} alt={'edit'} width={20} height={20}/>
                    <Image src={'/images/icons/deleteIcon.svg'} alt={'delete'} width={20} height={20}/>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;