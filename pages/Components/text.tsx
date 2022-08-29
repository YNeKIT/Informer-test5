import { Component } from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip
// } from "recharts";


// class LineChartComponent extends Component {
//   state = {
//     chartData: []
//   };

//   formatData = (data) =>
//     data.map(({ dt_txt, main }) => ({
//       // date -> Can be used as dataKey for XAxis
//       //Further you can format the date as per your need
//       date: dt_txt,
//       // temp -> Can be used as dataKey for Line
//       temp: main.temp
//     }));

//   componentDidMount() {
//     const fetchData = async () => {
     
//       // let res = await fetch(
//       //   "http://api.openweathermap.org/data/2.5/forecast?q=plovdiv&units=metric&appid=ca148f5dc67f12aafaa56d1878bb6db2#"
//       // );
//       // res = await res.json();

//       //Here i'm using dummy promise to simulate the API call
//       const promise = new Promise((res:any) => {
//         setTimeout(() => {
//           res(weatherData);
//         }, 500);
//       });
//       const res = await promise;

//       //After getting the data from the backend,
//       //format it as per how the LineChart is expecting
//       this.setState({
//         chartData: this.formatData(res.list)
//       });
//     };
//     fetchData();
//   }

//   render() {
//     const { chartData } = this.state;
//     return (
//       <LineChart width={600} height={300} data={chartData}>
//         <Line type="monotone" dataKey="temp" stroke="#8884d8" />
//         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//       </LineChart>
//     );
//   }
// }

// export default LineChartComponent;
