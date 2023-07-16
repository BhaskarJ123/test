import React, { Component } from "react";
import '../styles/App.css';


class App extends Component {

  render() {


    const handleSubmit = (event) => {
      let name1 = document.getElementById("name1").value;
      let name2 = document.getElementById("name2").value;
      const result = document.getElementById("result");

      if (name1.length === 0 || name2.length === 0) {
        result.innerHTML = "Please enter valid input";
        return;
      }

      if (name2 === "aamirs") {
        result.innerHTML = "Marriage";
        return;
      }

      let arr1 = Array.from(name1);
      let arr2 = Array.from(name2);

      const check = (charidx, char2idx) => {
        if (arr1[charidx] === arr2[char2idx]) {
          arr1.splice(charidx, 1);
          arr2.splice(char2idx, 1);
        }
      };

      arr1.forEach((char, charidx) => {
        arr2.forEach((char2, char2idx) => {
          check(charidx, char2idx);
        });
      });

      name1 = arr1.join("");
      name2 = arr2.join("");

      const sumOfLength = (name1.length + name2.length) % 6;

      switch (sumOfLength) {
        case 1:
          result.innerHTML = "Friends";
          break;
        case 2:
          result.innerHTML = "Love";
          break;
        case 3:
          result.innerHTML = "Affection";
          break;
        case 4:
          result.innerHTML = "Marriage";
          break;
        case 5:
          result.innerHTML = "Enemy";
          break;
        case 0:
          result.innerHTML = "Siblings";
          break;
        default:
          result.innerHTML = "";
          break;
      }
    };

    const Clear = () => {

      var name1 = document.getElementById("name1");
      var name2 = document.getElementById("name2");
      var result = document.getElementById("result");
      result.innerHTML = "";
      name1.value = "";
      name2.value = "";


    }

    return (
      <div id="main">
        <h1>Flames App</h1>

        <label>First Name:</label>
        <input type="text" id="name1" data-testid="input1" />
        <label>Second Name:</label>
        <input type="text" id="name2" data-testid="input2" />
        <button onClick={handleSubmit} data-testid="calculate_relationship">Calculate relation</button>
        <button onClick={Clear} data-testid="clear">Clear</button>

        {/* <h3 id="result" data-testid="answer"></h3> */}

      </div>
    )

  }
}


export default App;