import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    if (container.current.querySelector("script")) return; // Prevent multiple scripts

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "gridColor": "rgba(0, 0, 0, 0.06)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{
        height: "361px",
        width: "100%",
        border: "1px solid rgba(255, 255, 255, 0.1)", // 10% opacity white
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        overflow: "hidden",
      }}
    />
  );
}

export default memo(TradingViewWidget);
