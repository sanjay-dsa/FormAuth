import { useEffect } from "react";

const WeatherBackground = ({ condition }) => {
  useEffect(() => {
    const body = document.body;

    body.className = "";

    if (condition?.includes("Rain")) {
      body.classList.add("rain");
    } else if (condition?.includes("Cloud")) {
      body.classList.add("cloud");
    } else if (condition?.includes("Clear")) {
      body.classList.add("sunny");
    } else {
      body.classList.add("default-weather");
    }
  }, [condition]);

  return null;
};

export default WeatherBackground

body.sunny {
  background: linear-gradient(135deg, #f6d365, #fda085);
}

body.rain {
  background: linear-gradient(135deg, #4b79a1, #283e51);
}

body.cloud {
  background: linear-gradient(135deg, #bdc3c7, #2c3e50);
}

body.default-weather {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

body {
  min-height: 100vh;
  transition: all 0.5s ease;
}
