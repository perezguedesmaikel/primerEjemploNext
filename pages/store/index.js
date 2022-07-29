import React from "react";
import Layout from "../../components/layout";
import {getitems} from "../../services/itemServices";
import Image from "next/image";
import Product from "../../components/product";

export default function index({items}) {
    return(
        <Layout><h1>Store</h1>
            {
                items && items.map(item=><Product item={item} showAs={'default'} key={item.id}/>)
            }
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
