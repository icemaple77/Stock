import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(...registerables);

function Charts(props) {
  const labels = props.date;
  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "open",
        data: props.open,
        borderWidth: 0.5,
        borderColor: "rgba(179, 255, 0, 1)",
        backgroundColor: "rgba(179, 255, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "close",
        data: props.close,
        borderWidth: 0.5,
        borderColor: "rgba(255, 115, 0,1)",
        backgroundColor: "rgba(255, 115, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "high",
        data: props.high,
        borderWidth: 0.5,
        borderColor: "rgba(0, 255, 0, 1)",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "line",
        label: "low",
        data: props.low,
        borderWidth: 0.5,
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        yAxisID: "A",
      },
      {
        type: "bar",
        label: "volumes",
        data: props.volumes,
        borderWidth: 0.5,
        borderColor: "rgba(7, 131, 247, 1)",
        backgroundColor: "rgba(0, 153, 255, 0.2)",
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
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Charts;
