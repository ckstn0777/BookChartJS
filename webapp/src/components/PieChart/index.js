import { useEffect, useState } from "react";
import produce from "immer";
import { Pie } from "react-chartjs-2";
import { getPulisher } from "../../lib/api/book/getPulisher";

const data = {
  datasets: [
    {
      backgroundColor: [
        "#e65100",
        "#e65100",
        "#f57c00",
        "#fb8c00",
        "#ff9800",
        "#ffa726",
        "#ffb74d",
        "#ffcc80",
        "#ffe0b2",
        "#fff3e0",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderWidth: 1,
      borderColor: "white",
      hoverBorderWidth: 3,
      hoverBorderColor: "grey",
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "출판사별 책 보유 수량",
      padding: 60,
      font: {
        size: 30,
      },
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "#000",
      },
    },
    tooltips: {
      enabled: true,
    },
  },
  layout: {
    padding: {
      top: 80,
    },
  },
  // layout: {
  //   padding: {
  //     top: 200,
  //   },
  // },
  responsive: false,
  maintainAspectRatio: false,
};

function PieChart() {
  const [publisher, setPublisher] = useState(data);

  useEffect(() => {
    async function fetchData() {
      const response = await getPulisher();
      console.log(response);

      const dataes = [];
      const labels = [];
      response.forEach((pub) => {
        dataes.push(pub.count);
        labels.push(pub._id);
      });

      // const nextState = produce(publisher, (draft) => {});

      setPublisher(
        produce((draft) => {
          draft.labels = labels;
          draft.datasets[0].data = dataes;
        })
      );
      // data.labels = labels;
      // data.datasets[0].data = dataes;
      // console.log(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Pie data={publisher} options={options} width={1000} height={600} />
      {/* <p>{JSON.stringify(publisher)}</p> */}
    </>
  );
}

export default PieChart;
