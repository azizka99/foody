import style from './restaurantCart.module.css';
import Image from "next/image";
function RestaurantCart({image, title, type}) {
    return (
        <div className={style.cart} >
            <Image src={image} alt={title} width={50} height={50}/>
            <div>
                <h4>{title}</h4>
                <p>{type}</p>
            </div>
            <div className={style.actions}>
                <Image src={'images/icons/deleteIcon.svg'} alt={'delete'} width={20} height={20}/>
                <Image src={'images/icons/editIcon.svg'} alt={'Edit'} width={20} height={20}/>
            </div>
        </div>
    );
}

export default RestaurantCart;