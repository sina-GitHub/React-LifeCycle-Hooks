import React, {useEffect} from "react";

const Person = (props) => {
  const {name, change, children} = props;

  // runs on component creation andv every re-render
  // useEffect(() => {
  //   console.log(`Person useEffect`);
  // });

  // runs only on component creation
  // useEffect(() => {
  //   console.log(`Person useEffect`);
  // },[]);

  // runs on component creation andv every time name changed
  // we can use any data instead of name too...
  useEffect(() => {
    console.log(`Person useEffect`);
    setTimeout(() => {
      alert("warning...");
    }, 2000);
  }, [name]);

  return (
    <div style={PersonStyle}>
      <h1>My name is {name} .</h1>

      <input type="text" onChange={change} />
      {children}
    </div>
  );
};

const PersonStyle = {
  padding: "10px",
  border: "2px solid red",
  margin: "5px 0",
};

export default Person;
