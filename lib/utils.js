import {getitems} from "../services/itemServices";
export async function getPathsFromIds() {
    const items=await getitems();
    const ids=items.map(item=>{
        return{
            params:{
                id:item.id.toString()
            }
        }
    });
return ids;
}
export async function getItemData(id) {
   const items=await getitems();
   const product=items.find((item)=>item.id.toString()===id);
   return {
       id:id,
       data:product
   }
}