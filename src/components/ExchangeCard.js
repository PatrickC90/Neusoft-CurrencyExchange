import React from "react";
//Import style
import '../styles/exchangecard.scss';

//Import icon
import russia from "../img/russia.png";
import deleteButton from "../img/delete.png";

const ExchangeCard = ({ ratesList, setRatesList, toCurrency, fromCurrency }) => {





    return (




        <div className="card-holder">

            <div className="exchange-card">
                <img src={deleteButton} alt="del" className="remove" />
                <div className="currency-tab">

                    <img src={russia} alt="symbol" className="flag" />
                    <p>$</p>
                    <input type="number"></input>
                </div>
                <div className="second">
                    <h3 >EURO</h3>
                    <p>Euro converted</p>
                </div>
            </div>



        </div>

    )

};

export default ExchangeCard;