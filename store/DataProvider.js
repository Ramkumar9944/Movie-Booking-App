// import DataContext from "./data-context";
// const DataProvider = (props) => {
//   const movieData = [
//     {
//       id: Math.round(Math.random().toString() * 100),
//       theatre: "Rohini Silver Screen: Koyambedu",
//       movie: "Leo",
//       city: "Chennai",
//     },
//     {
//       id: Math.round(Math.random().toString() * 100),
//       theatre: "AGS Cinemas : Navalur",
//       movie: "Jailer",
//       city: "Chennai",
//     },
//     {
//       id: Math.round(Math.random().toString() * 100),
//       theatre: "Vetri Cinemas : Chromepet",
//       movie: "Vadachennai 2",
//       city: "Chennai",
//     },
//     {
//       id: Math.round(Math.random().toString() * 100),
//       theatre: "S2 Thiyagaraja Theatre : Perambur",
//       movie: "Vikram",
//       city: "Chennai",
//     },
//     {
//       id: Math.round(Math.random().toString() * 100),
//       theatre: "Sathyam Cinemas : Mount Road",
//       movie: "Jigarthanda 2",
//       city: "Chennai",
//     },
//   ];
//   let id, theatre, movie, city;
//   const dataContext = () => {
//     movieData.map((data) => {
//       (id = data.id),
//         (theatre = data.theatre),
//         (movie = data.movie),
//         (city = data.city);
//     });
//   };
//   return (
//     <DataContext.Provider value={dataContext}>
//       {props.children}
//     </DataContext.Provider>
//   );
// };
// export default DataProvider;
