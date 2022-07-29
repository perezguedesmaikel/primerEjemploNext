import React from "react";
import Layout from "../../components/layout";
import {getitems} from "../../services/itemServices";
import Image from "next/image";

export default function index({items}) {
    return(
        <Layout><h1>Store</h1>
            {
                items && items.map(item=><div key={item.id}><Image src={item.image} width={'200px'} height={'200px'}/>{item.title}</div>)
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
