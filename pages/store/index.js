import React from "react";
import Layout from "../../components/layout";
import {getitems} from "../../services/itemServices";
import Product from "../../components/product";
import style from "../../styles/product.module.css";

export default function index({items}) {
    return(
        <Layout><h1>Store</h1>
            <div className={style.items}>
            {
                items && items.map(item=><Product item={item} showAs={'default'} key={item.id}/>)
            }
            </div>
        </Layout>
    )
}
export async function getStaticProps() {
    const res=await getitems();
    return{
        props:{
          items:res,
        },
    };

}
