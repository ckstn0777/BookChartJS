import { useEffect, useState } from "react";
import produce from "immer";
import { Bar } from "react-chartjs-2";
import { getGenre } from "../../lib/api/book/getGenre";

const data = {
  datasets: [
    {
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
      text: "장르별 책 보유 수량",
      padding: 60,
      font: {
        size: 30,
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
  responsive: false,
  maintainAspectRatio: false,
};

function BarChart() {
  const [genre, setGenre] = useState(data);

  useEffect(() => {
    async function fetchData() {
      const response = await getGenre();
      console.log(response);

      const dataes = [];
      const labels = [];
      response.forEach((pub) => {
        dataes.push(pub.count);
        labels.push(pub._id);
      });

      setGenre(
        produce((draft) => {
          draft.labels = labels;
          draft.datasets[0].data = dataes;
        })
      );
    }

    fetchData();
  }, []);

  return (
    <>
      <Bar data={genre} options={options} width={1000} height={600} />
    </>
  );
}

export default BarChart;
