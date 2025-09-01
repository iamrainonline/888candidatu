import Users from "./Components/Users";
// import Counter from "./Components/Counter/Counter";
import "./App.css";
import "./Typescript/ClassesTS.tsx";
import "./Typescript/GenericFN.tsx";
import Wordle from "./Components/Wordle/Wordle.tsx";
import Counter from "./Practice/Counter.tsx";
import Selected from "./Practice/Selected.jsx";
const App: React.FC = () => {
  const apiData = [
    { name: "John", age: 45, admin: true },
    { name: "John2", age: 45, admin: true },
  ];

  const displaySomething = <T,>(item: T): T => {
    // console.log("displaySomething", typeof item);
    return item;
  };

  displaySomething("rainbow");

  return (
    <div>
      <Selected />
      {/* <Counter /> */}
      {/* <Counter /> */}
      {/* <Users data={apiData} /> */}
      {/* <Wordle /> */}
    </div>
  );
};

export default App;
