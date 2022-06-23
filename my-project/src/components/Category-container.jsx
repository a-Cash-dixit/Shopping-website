import React from "react";
import CategoryItem from "./Category-item";
export default function CategoryContainer(props){
    return(
        <div  className="flex flex-wrap -m-4">
             {props.categories.map(ele=>{
                return(
                    <CategoryItem key={ele.id} category={ele} />
                )
             })}
        </div>
    )
}