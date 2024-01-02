import ApexChart from "react-apexcharts";

function App() {
  const chartOptions = {
    chart: {
      type: "radialBar",
    },
    fill: {
      colors: "#6CABE5",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
        },
      },
    },
    labels: ["Cricket"],
  };
  return (
    <div>
      <ApexChart type="radialBar" series={[80]} options={chartOptions} width={'400px'}/>
    </div>
  );
}

export default App;
