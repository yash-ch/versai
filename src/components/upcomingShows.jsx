import "../css/upcomingShow.scss";

const upcomingShows = [
    {name: "Benny Dayal", type: "Folk", image: "./assets/upcomingShows/img.png"},
    {name: "Vijay Yesudas", type: "Bollywood", image: "./assets/upcomingShows/img-1.png"},
    {name: "Andrea Jeremiah", type: "Folk", image: "./assets/upcomingShows/img-2.png"},
    {name: "Shilpa Rao", type: "Folk", image: "./assets/upcomingShows/img-3.png"}];

export default function UpcomingShows() {
    return (<div className={"upcoming-shows-main-div"}>
        <div style={{width: "100vw", display: "flex"}}>
            <p className={"title-upcoming-show"}>
                Upcoming Shows
            </p>
            <p className={"view-all"}>
                View All
            </p>
        </div>
        <div className={"images-main-div snaps-inline"}>
            {upcomingShows.map((item) => {
                return (
                    <div className={"images-div-design"}>
                        <div className={"images-div"}>
                            <img alt={item.name} src={item.image}/>
                            <div className={"upcoming-images-type"}>
                                {item.type}
                            </div>
                            <p className={"upcoming-images-name"}>
                                {item.name}
                            </p>
                            <div className={"upcoming-bottom-div"}>
                                <p>
                                    More Info
                                    <span>
                                    <img alt={"arrow"} src={"./assets/upcomingShows/arrow.png"}/>
                                    </span>
                                </p>
                                <div className={"upcoming-tickets"}>
                                    <div className={"upcoming-tickets-line"}/>
                                    <div className={"ticket-div"}/>
                                </div>
                            </div>
                        </div>
                    </div>);
            })}
        </div>
    </div>);
}