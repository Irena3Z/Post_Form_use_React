import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
            <MyInput 
                value={filter.query}
                onChange={e=> setFilter({...filter, query: e.target.value})}
                placeholder="meklēt.."
                type= "text"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Kārtot"
                options={[
                    {value: 'title', name: 'Pēc nosaukuma'},
                    {value: 'body', name: 'Pēc satura'},
                ]}
            />
        </div>
    )

}

export default PostFilter;