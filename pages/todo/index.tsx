// type Todo = {
//   readonly id: number
//   readonly text: string
//   readonly done: boolean

import { useState } from "react";
import { getSortedPostsData } from "../../lib/posts";

// }
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  place?: Place
}>

type CompletedTodo = Todo & {readonly done: true}

type Place = 'home' | 'work' | { custom: string }
// Little Duckling’s implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return '🏡Home'
  }else if (place === "work"){
      return '💼work'
  }else{
      return "🚩" + place.custom;
  }
}



export default function todo(){

    const [data, setData] = useState([
        { id: 1, text: "First todo", done: false },
        { id: 2, text: "Second todo", done: false },
    ]);

    function toggleTodo(index){
        let newData = [...data]
        newData[index]["done"] = !newData[index]["done"];
        setData(newData)
    } 

    function completeAll(){
        setData(
            data.map(todo => ({
                ...todo,
                done: true,
            }))
        )
    }

    return (
        <div className="flex-center" style={{ height: "600px" }}>
            <div className="todo-div">
                {data.map((item, index) => (
                    <p key={index}>
                        <input
                            type="checkbox"
                            name=""
                            id={item.id.toString()}
                            checked={item.done}
                            onChange={() => toggleTodo(index)}
                        />
                        <label htmlFor={item.id.toString()}>{item.text + "," + item.done}</label>
                    </p>
                ))}
                {data.every((item) => item.done) ? (
                    <h3>all done</h3>
                ) : (
                    <a href="javasript:;" onClick={() => completeAll()}>
                        Mark all as completed
                    </a>
                )}
            </div>
            <style jsx>{`
                .flex-center {
                    dispaly: flex;
                    justify-content: center;
                    align-items: center;
                }
                .todo-div {
                    padding: 10px;
                    border: 2px solid #e9d1ac;
                }
            `}</style>
        </div>
    );
}