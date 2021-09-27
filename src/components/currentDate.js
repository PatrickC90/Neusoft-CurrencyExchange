import React from "react";


const CurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
        <div className="date">
            {year}/{month < 10 ? `0${month}` : `${month}`}/{date}
        </div>

    )
};

export default CurrentDate;