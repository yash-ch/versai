import Header from "../components/header";
import HomePageBanner from "../components/homePageBanner";
import documentTitle from "../documentTitle";
import BooksCategory from "../components/BooksCategory";
import "../css/mainPage.css"
import BooksList from "../components/BooksList";
import BookFooter from "../components/footer";

export default function HomePage(){
    documentTitle("Enactus")
    return(
      <div className={"main-page"}>
          <Header/>
          <HomePageBanner/>
          <BooksCategory/>
          <BooksList/>
          <BookFooter/>
      </div>
    );
}