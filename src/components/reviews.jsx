import "../css/upcomingShow.scss";
import "../css/reviews.scss";

let reviews = [
    {name : "Hellen Jummy", location : "PALO ALTO, CA", image : "./assets/reviews/user.png"},
    {name : "Isaac Oluwatemilorun", location : "PALO ALTO, CA", image : "./assets/reviews/user-1.png"},
    {name : "Yash Chauhan", location : "PALO ALTO, CA", image : "./assets/reviews/user-2.png"}];

export default function Reviews() {
    return (<div className={"upcoming-shows-main-div"}>
        <div style={{width: "100vw", display: "flex"}}>
            <p className={"title-upcoming-show"}>
                Reviews
            </p>
            <p className={"view-all"}>
                View All
            </p>
        </div>
        <div className={"review-main-div snaps-inline"}>
            {reviews.map((item) => {
                return (
                    <div className={"review-upper-box"}>
                        <div className={"review-box"}>
                            <div className={"review-box-user"}>
                                <img alt={item.name} src={item.image}/>
                                <div className={"review-box-user-location-name"}>
                                    <p className={"review-box-user-name"}>
                                        {item.name}
                                    </p>
                                    <p className={"review-box-user-location"}>
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                                <p className={"review-text"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae.
                                    Vestibulum pellentesque eget laoreet adipiscing.
                                </p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>);
}