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
        label: props.title + "(Line)",
        data: props.data,
        fill: false,
        borderColor: props.color,
        backgroundColor: props.color,
      },
      {
        type: "bar",
        label: props.title + "(Bar)",
        data: props.data,
        fill: false,
        borderColor: "#d1d1d1fa",
        backgroundColor: "#d1d1d1fa",
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
        <Chart type="bar" data={data} />
      </div>
    );
  }
}

export default Charts;
