import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
// import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
// import useAxiosPublic from "./api/useAxiosPublic";
import AllGoalsData from "./api/AllGoalsData.jsx";


export type CourseGoal = {
  title: string;
  description: string;
  _id: number;
};



export default function App() {
  // const [goals, setGoals] = useState<CourseGoal[]>([]);


  // const axiosPublic = useAxiosPublic();

  const {allGoals, refetch} = AllGoalsData();
 
// console.log(allGoals)

  // const handleAddGoal = () => {
  //   setGoals((prevGoals) => {
  //     const newGoal: CourseGoal = {
  //       id: Math.random(),
  //       title: "Learn React + TS",
  //       description: "Learn it in depth",
  //     };
  //     return [...prevGoals, newGoal];
  //   });
  // };

  

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
     <NewGoal refetch={refetch}/>
      <CourseGoalList  goals={allGoals} refetch={refetch}/>
    </main>
  );
}
