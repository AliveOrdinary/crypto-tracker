import React from "react";
import "./styles.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const Grid = ({ coin }) => {
  return (
    <div
      className={`grid-container ${
        coin.price_change_percentage_24h < 0 && "grid-container-red"
      }`}
    >
      <div className="info-flex">
        <img className="coin-logo" src={coin.image} alt={coin.name} />
        <div className="info-content">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      <div className="chip-container">
        {coin.price_change_percentage_24h > 0 ? (
          <>
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="price-icon">
              <TrendingUpRoundedIcon />
            </div>
          </>
        ) : (
          <>
            <div className="price-chip red-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="price-icon red-chip">
              <TrendingDownRoundedIcon />
            </div>
          </>
        )}
      </div>
      <div className="info-container">
        <h3
          className="coin-price"
          style={{
            color:
              coin.price_change_percentage_24h < 0
                ? "var(--red)"
                : "var(--green)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="total-volume">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="total-volume">
          Market Cap :${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Grid;
