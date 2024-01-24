import React from "react";
import style from "./brandStyle.module.css";

function BrandPopPup() {
  return (
    <>
      {/* -----line 1----- */}
      <div className={style.modalContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Byredo</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Bobbi Brown</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Maison Margiela</span>
              </div>
            </div>
          </div>
        </div>

        {/* -----line 2----- */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Susanne kaufmann</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Kevyn Aucoin</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Susanne kaufmann</span>
              </div>
            </div>
          </div>
        </div>

        {/* -----line 3----- */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Diptyque</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>RMS Beauty</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>By Terry</span>
              </div>
            </div>
          </div>
        </div>

        {/* -----line 4----- */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Smashbox</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Evelom</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={style.Text1}>
                <input type="radio"></input>
                <span className={style.spanByRedo}>Bumble and Bumble</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.modalBtn}>
          <button type="button" className={style.cancelBtn}>
            CANCEL
          </button>
          <button type="button" className={style.submitBtn}>
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

export default BrandPopPup;
