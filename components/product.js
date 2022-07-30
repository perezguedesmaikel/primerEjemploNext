import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from '../styles/product.module.css';

function Product({item,showAs}) {
if(showAs==='Page'){
    const {data}=item;
    return <div>{data.title}</div>
}
    if(showAs==='ListItem'){
        return <div>list Item</div>
    }
  return <div className={style.item}><div>
      <Link href={`/store/${item.id}`}>
          <a>
              <Image src={item.image} alt={item.description} width={'500px'} height={'500px'}/>
          </a>
      </Link>
  </div>
      <div>
          <h3>
              <Link href={`/store/url-a-mi-componente`}>
                  <a>
                      {item.title}
                  </a>
              </Link>
          </h3>
      </div>

      <div>
          ${item.price}
      </div>
      <div>
          <button>Add to cart</button>
      </div>
    </div>
}
export default Product;