const labels = [
  "2014/01/01",
  "2014/02/01",
  "2014/03/01",
  "2014/04/01",
  "2014/05/01",
  "2014/06/01",
  "2014/07/01",
  "2014/08/01",
  "2014/09/01",
  "2014/10/01",
  "2014/11/01",
  "2014/12/01",
  "2015/01/01",
  "2015/02/01",
  "2015/03/01",
  "2015/04/01",
  "2015/05/01",
  "2015/06/01",
  "2015/07/01",
  "2015/08/01",
  "2015/09/01",
  "2015/10/01",
  "2015/11/01",
  "2015/12/01",
  "2016/01/01",
  "2016/02/01",
  "2016/03/01",
  "2016/04/01",
  "2016/05/01",
  "2016/06/01",
  "2016/07/01",
  "2016/08/01",
  "2016/09/01",
  "2016/10/01",
  "2016/11/01",
  "2016/12/01",
  "2017/01/01",
  "2017/02/01",
  "2017/03/01",
  "2017/04/01",
  "2017/05/01",
  "2017/06/01",
  "2017/07/01",
  "2017/08/01",
  "2017/09/01",
  "2017/10/01",
  "2017/11/01",
  "2017/12/01",
  "2018/01/01",
  "2018/02/01",
  "2018/03/01",
  "2018/04/01",
  "2018/05/01",
  "2018/06/01",
  "2018/07/01",
  "2018/08/01",
  "2018/09/01",
  "2018/10/01",
  "2018/11/01",
  "2018/12/01",
  "2019/01/01",
  "2019/02/01",
  "2019/03/01",
  "2019/04/01",
  "2019/05/01",
  "2019/06/01",
  "2019/07/01",
  "2019/08/01",
  "2019/09/01",
  "2019/10/01",
  "2019/11/01",
  "2019/12/01",
  "2020/01/01",
  "2020/02/01",
  "2020/03/01",
  "2020/04/01",
  "2020/05/01",
  "2020/06/01",
  "2020/07/01",
  "2020/08/01",
  "2020/09/01",
  "2020/10/01",
  "2020/11/01",
  "2020/12/01",
  "2021/01/01",
  "2021/02/01",
  "2021/03/01",
  "2021/04/01",
  "2021/05/01",
  "2021/06/01",
  "2021/07/01",
  "2021/08/01",
  "2021/09/01",
  "2021/10/01",
  "2021/11/01",
  "2021/12/01",
];

const seriesData = Array(labels.length)
  .fill(1)
  .map((_, index) => index * 10 + Math.floor(Math.random() * 100));

export const mockupData = {
  labels,
  datasets: [
    {
      label: "Historisk data",
      data: seriesData.slice(0, Math.floor(seriesData.length / 1.2)),
      borderColor: "rgb(99, 99, 255)",
      backgroundColor: "rgba(99, 99, 255, 0.5)",
    },
    {
      label: "Prognos",
      data: seriesData,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const geoMockupData = [
  {
    name: "Stockholm",
    num: 123,
    organisations_num: 8,
    details: [
      {antal: 23, organisation: "Företag X"},
      {antal: 20, organisation: "Företag Y"},
      {antal: 15, organisation: "Företag Z"},
      {antal: 17, organisation: "Företag A"},
      {antal: 5, organisation: "Företag B"},
      {antal: 33, organisation: "Företag C"},
      {antal: 6, organisation: "Företag D"},
      {antal: 4, organisation: "Företag E"}
    ]
  },
  {
    name: "Uppsala",
    num: 68,
    organisations_num: 6,
    details: [
      {antal: 13, organisation: "Företag X"},
      {antal: 20, organisation: "Företag Y"},
      {antal: 15, organisation: "Företag Z"},
      {antal: 17, organisation: "Företag A"},
      {antal: 1, organisation: "Företag B"},
      {antal: 2, organisation: "Företag C"}
    ]
  },
  {
    name: "Malmö",
    num: 53,
    organisations_num: 2,
    details: [
      {antal: 20, organisation: "Företag X"},
      {antal: 33, organisation: "Företag Y"},
    ]
  },
  {
    name: "Gotland",
    num: 21,
    organisations_num: 3,
    details: [
      {antal: 6, organisation: "Företag X"},
      {antal: 8, organisation: "Företag Y"},
      {antal: 7, organisation: "Företag Z"}
    ]
  },
  {
    name: "Göteborg",
    num: 40,
    organisations_num: 9,
    details: [
      {antal: 3, organisation: "Företag X"},
      {antal: 6, organisation: "Företag Y"},
      {antal: 2, organisation: "Företag Z"},
      {antal: 3, organisation: "Företag A"},
      {antal: 5, organisation: "Företag B"},
      {antal: 9, organisation: "Företag C"},
      {antal: 6, organisation: "Företag D"},
      {antal: 4, organisation: "Företag E"},
      {antal: 2, organisation: "Företag F"}
    ]
  },
  {
    name: "Skellefteå",
    num: 5,
    organisations_num: 1,
    details: [
      {antal: 5, organisation: "Företag X"}
    ]
  },
];
