import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

function Charts(props) {
  const labels = props.date;
  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "open",
        data: props.open,
        fill: false,
        borderColor: "rgba(179, 255, 0, 1)",
        backgroundColor: "rgba(179, 255, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "close",
        data: props.close,
        fill: false,
        borderColor: "rgba(255, 115, 0,1)",
        backgroundColor: "rgba(255, 115, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "high",
        data: props.high,
        fill: false,
        borderColor: "rgba(0, 255, 0, 1)",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "low",
        data: props.low,
        fill: false,
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "bar",
        label: "volumes",
        data: props.volumes,
        fill: false,
        borderColor: "rgba(255, 2, 2, 1)",
        backgroundColor: "rgba(0, 153, 255, 0.212)",
        yAxisID: "B",
      },
    ],
  };

  if (data === undefined) {
    return <p>Error in data</p>;
  } else if (labels === undefined) {
    return <p>Error in labels</p>;
  } else {
    return (
      <div>
        <Chart
          type="bar"
          height={400}
          width={600}
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              A: {
                type: "linear",
                position: "left",
              },
              B: {
                type: "linear",
                position: "right",
                ticks: {
                  max: 1,
                  min: 0,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Charts;
