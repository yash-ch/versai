import "../css/booksCategory.scss"
import {useDispatch, useSelector} from "react-redux";
import {category} from "../actions";
import FirestoreData from "../firebase";
import {useEffect, useState} from "react";

export default function BooksCategory() {
    let bookCategoryIndex = 0;
    const [categories, setCategories] = useState([]);
    bookCategoryIndex = useSelector(state => state.bookCategory)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("okay")
        async function fetchFirebaseData() {
            const database = new FirestoreData();
            const categoriesFromFirebase = await database.getCategories();
            setCategories(categoriesFromFirebase);
        }

        fetchFirebaseData().then(r => null);
    }, [])

    return (
        <div className={"main-div"}>
            {categories.map((cat, index) => {
                return (<div key={cat} className={"category-button"}>
                        {index === bookCategoryIndex ?
                            <button className={"custom-btn selected-button "}
                                    onClick={() => {
                                        dispatch(category(index))
                                    }} key={cat}>
                                {cat}
                            </button>
                            :
                            <button className={"custom-btn btn-5 not-selected-button"}
                                    onClick={() => {
                                        dispatch(category(index))
                                    }} key={cat}>
                                {cat}
                            </button>
                        }
                    </div>
                )
            })}
        </div>
    );
}