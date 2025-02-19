import { useState } from "react";
import {AddCategory, GiftCard} from "./components/index";

export default function GifExpertApp() {

    let [categories, setCategories] = useState(['Kimetsu']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gift Expert App</h1>

            <AddCategory
                onNewCategory={e => onAddCategory(e)}
            />

            {
                categories.map(category =>
                    (
                        <GiftCard
                            key={category}
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}
