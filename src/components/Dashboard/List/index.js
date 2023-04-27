import React from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import "./styles.css";
import { Tooltip } from "@mui/material";
const List = ({ coin }) => {
  return (
    <tr className="list-row">
      <td className="list-img">
        <img className="coin-logo" src={coin.image} alt={coin.name} />
      </td>
      <td>
        <div className="info-content">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <Tooltip title="Price change in 24 hrs" placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-container">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="price-icon td-icon">
              <TrendingUpRoundedIcon />
            </div>
          </td>
        ) : (
          <td className="chip-container">
            <div className="price-chip red-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="price-icon red-chip td-icon">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
      </Tooltip>
      <td>
        <Tooltip title="Current price">
          <h3
            className="coin-price td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </Tooltip>
      </td>
      <td>
        <Tooltip title="Total volume">
          <p className="total-volume td-right-align">
            {coin.total_volume.toLocaleString()}
          </p>
        </Tooltip>
      </td>
      <td>
        <Tooltip title="Market cap">
          <p className="total-volume td-right-align">
            ${coin.market_cap.toLocaleString()}
          </p>
        </Tooltip>
      </td>
    </tr>
  );
};

export default List;
