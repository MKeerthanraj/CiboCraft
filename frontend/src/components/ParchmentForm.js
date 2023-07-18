import "./ParchmentForm.css";
import wok from "../assets/cooking.png";
import checkbox from "../assets/checkbox.png";
import checkmark from "../assets/checkmark.svg";
import placeHolder from "../assets/blank.svg"
import React, { useState } from "react";

function ParchmentForm() {
  const [searchSelection, setSearchSelection] = useState("Recipie");

  function setSelection(newSelection) {
    let prevSelectionImg = document.getElementById("check"+searchSelection);
    prevSelectionImg.src = placeHolder;
    setSearchSelection(newSelection);
    let newSelectionImg = document.getElementById("check"+newSelection);
    newSelectionImg.src = checkmark;
  }


  return (
    <div id="parchment">
      <div className="grid">
        <div className="row">
          <img className="wok" alt="Wok" src={wok} />
        </div>
        <div className="row pl-3 mt-3">
          <p
            style={{
              fontFamily: "Lobster,cursive",
              fontSize: "25px",
              opacity: "0.8",
            }}
          >
            Search by:
          </p>
        </div>
        <div className="searchMethodSelection row">
          <div className="col-4 d-flex justify-content-center">
            <div className="checkbox">
              <img
                src={checkmark}
                onClick={() => setSelection("Recipie")}
                style={{ cursor: "pointer" }}
                id="checkRecipie"
              />
            </div>
            <p
              style={{ fontFamily: "Cabin Sketch, cursive", fontSize: "25px" }}
            >
              Recipie
            </p>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <div className="checkbox">
              <img
                src={placeHolder}
                onClick={() => setSelection("Ingridients")}
                style={{ cursor: "pointer" }}
                id="checkIngridients"
              />
            </div>
            <p
              style={{ fontFamily: "Cabin Sketch, cursive", fontSize: "25px" }}
            >
              Ingridients
            </p>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <div className="checkbox">
              <img
                src={placeHolder}
                onClick={() => setSelection("Nutrients")}
                style={{ cursor: "pointer" }}
                id="checkNutrients"
              />
            </div>
            <p
              style={{ fontFamily: "Cabin Sketch, cursive", fontSize: "25px" }}
            >
              Nutrients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParchmentForm;
