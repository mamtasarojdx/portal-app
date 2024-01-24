import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import style from "./RetailerStyle.module.css";
import BrandPopPup from "../Brand_Popup/BrandPopPup";

function Retailer() {
  return (
    <>
      {/* -------sort by---- */}
      <div classNameName="container" id={style.navbar1}>
        <div classNameName="row">
          <div id={style.sort}>
            <div classNameName="col-lg-3">
              <span className={style.sortText}>SORT BY</span>

              <span class="dropdown">
                <span id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaAngleDown />
                </span>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div classNameName="col-lg-3">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                {" "}
                <span className={style.manufacturer}>Manufacturer</span>
                <span class="dropdown">
                  <span id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaAngleDown />
                  </span>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </span>
              </div>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel"></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <BrandPopPup />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div classNameName="col-lg-3">
              <spn className={style.searchText}>Search By Account</spn>
              <img src={"/Images/Search.svg"}></img>
            </div>
            <div classNameName="col-lg-3">
              <div className={style.clearAll}>CLEAR ALL</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id={style.navbar2}>
        <div className="row">
          <div className="col-sm-3">
            <div>MY RETAILERS </div>
          </div>
          <div className="col-sm-3">
            <div>NEW ARRIVALS</div>
          </div>

          <div className="col-sm-3">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Short by
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Manufacturer
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>

                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Search By Account
                        <img src={"/Images/Search.svg"}></img>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <button type="button">clear All</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* -------1st container(Seaport Salon & Day Spa)-------- */}
      <div id={style.seaLine1}>
        <div className="container">
          <div className="row">
            {/* ----------Seaport Salon & Day Spa------- */}
            <div className="col" id={style.SalonSpa}>
              <h5 className={style.SeaPort}>Seaport Salon & Day Spa</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>

                <div className={style.diptyque5}>Estee Launder</div>

                <div className={style.diptyque6}>RMS Beauty</div>
              </div>
            </div>{" "}
            {/* -----------Earth Savers Inc.---------- */}
            <div className="col" id={style.SalonSpa2}>
              <h5 className={style.SeaPort}>Earth Savers Inc.</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>
              </div>{" "}
            </div>
            {/* --------------Grove Collaborative----------- */}
            <div className="col" id={style.SalonSpa3}>
              <h5 className={style.SeaPort}>Grove Collaborative</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>

                <div className={style.diptyque5}>Estee Launder</div>
              </div>{" "}
            </div>
            {/* ---------------Stox & Co The Spa at Mir------- */}
            <div className="col" id={style.SalonSpa4}>
              <h5 className={style.SeaPort}>Stox & Co The Spa at Mir</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>

                <div className={style.diptyque5}>Estee Launder</div>

                <div className={style.diptyque6}>RMS Beauty</div>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* --------------Beauty Kiss---- */}
        <div className="container">
          <div className="row">
            {/* ----------Beauty Kiss------- */}
            <div className="col" id={style.SalonSpa}>
              <h5 className={style.SeaPort}>Beauty Kiss</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>

                <div className={style.diptyque2}>Bobbi Brown</div>

                <div className={style.diptyque3}>Maison Margiela</div>
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>

                <div className={style.diptyque5}>Estee Launder</div>
              </div>
            </div>{" "}
            {/* -----------City Chemist: LIC---------- */}
            <div className="col" id={style.SalonSpa2}>
              <h5 className={style.SeaPort}>City Chemist: LIC</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>
              </div>
            </div>{" "}
            {/* --------------Woo Cosmetics : Nashville----------- */}
            <div className="col" id={style.SalonSpa3}>
              <h5 className={style.SeaPort}>Woo Cosmetics : Nashville</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>
              </div>
            </div>{" "}
            {/* ---------------Two Skirts------- */}
            <div className="col" id={style.SalonSpa4}>
              <h5 className={style.SeaPort}>Two Skirts</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>

                <div className={style.diptyque2}>Bobbi Brown</div>

                <div className={style.diptyque3}>Maison Margiela</div>
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>

                <div className={style.diptyque5}>Estee Launder</div>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* ----------Cos Bar Brooklyn -------- */}
        <div className="container">
          <div className="row">
            {/* ----------Cos Bar Brooklyn ------- */}
            <div className="col" id={style.SalonSpa}>
              <h5 className={style.SeaPort}>Cos Bar Brooklyn </h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>

                <div className={style.diptyque5}>Estee Launder</div>
              </div>
            </div>{" "}
            {/* -----------Concepts---------- */}
            <div className="col" id={style.SalonSpa2}>
              <h5 className={style.SeaPort}>Concepts</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>
                <div className={style.diptyque5}>Estee Launder</div>
                <div className={style.diptyque6}>RMS Beauty</div>
              </div>{" "}
            </div>
            {/* --------------Revela Salon----------- */}
            <div className="col" id={style.SalonSpa3}>
              <h5 className={style.SeaPort}>Revela Salon</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>
                <div className={style.diptyque2}>Bobbi Brown</div>
                <div className={style.diptyque3}>Maison Margiela</div>{" "}
              </div>

              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>

                <div className={style.diptyque5}>Estee Launder</div>
                <div className={style.diptyque6}>RMS Beauty</div>
              </div>
            </div>
            {/* ---------------Blow on Mane Dry Bar------- */}
            <div className="col" id={style.SalonSpa4}>
              <h5 className={style.SeaPort}>Blow on Mane Dry Bar</h5>
              <div className={style.MapImgContent}>
                <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
                <div className={style.mapContent}>
                  <img src={"/Images/Map.svg"} />
                  <span className={style.SilverDale}>Silverdale</span>
                </div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque}>Diptyque</div>

                <div className={style.diptyque2}>Bobbi Brown</div>

                <div className={style.diptyque3}>Maison Margiela</div>
              </div>
              <div className={style.bobbi}>
                <div className={style.diptyque4}>Byredo</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* -----------2nd container(Seaport Salon & Day Spa)------ */}
      <div className="container" id={style.seaLine2}>
        <div className="row">
          {/* ----------Seaport Salon & Day Spa------- */}
          <div className="col" id={style.SalonSpa}>
            <h5 className={style.SeaPort}>Seaport Salon & Day Spa</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>

            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>

              <div className={style.diptyque5}>Estee Launder</div>

              <div className={style.diptyque6}>RMS Beauty</div>
            </div>
          </div>{" "}
          {/* -----------Earth Savers Inc.---------- */}
          <div className="col" id={style.SalonSpa2}>
            <h5 className={style.SeaPort}>Earth Savers Inc.</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>
            </div>{" "}
          </div>
          {/* --------------Grove Collaborative----------- */}
          <div className="col" id={style.SalonSpa3}>
            <h5 className={style.SeaPort}>Grove Collaborative</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>

              <div className={style.diptyque5}>Estee Launder</div>
            </div>{" "}
          </div>
          {/* ---------------Stox & Co The Spa at Mir------- */}
          <div className="col" id={style.SalonSpa4}>
            <h5 className={style.SeaPort}>Stox & Co The Spa at Mir</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>

            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>

              <div className={style.diptyque5}>Estee Launder</div>

              <div className={style.diptyque6}>RMS Beauty</div>
            </div>
          </div>{" "}
          {/* --------------Beauty Kiss---- */}
          <div className="col" id={style.SalonSpa}>
            <h5 className={style.SeaPort}>Beauty Kiss</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>

              <div className={style.diptyque2}>Bobbi Brown</div>

              <div className={style.diptyque3}>Maison Margiela</div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>

              <div className={style.diptyque5}>Estee Launder</div>
            </div>{" "}
          </div>
          {/* -----------City Chemist: LIC---------- */}
          <div className="col" id={style.SalonSpa2}>
            <h5 className={style.SeaPort}>City Chemist: LIC</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>

            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>
            </div>
          </div>{" "}
          {/* --------------Woo Cosmetics : Nashville----------- */}
          <div className="col" id={style.SalonSpa3}>
            <h5 className={style.SeaPort}>Woo Cosmetics : Nashville</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>

            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>
            </div>
          </div>{" "}
          {/* ---------------Two Skirts------- */}
          <div className="col" id={style.SalonSpa4}>
            <h5 className={style.SeaPort}>Two Skirts</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>

              <div className={style.diptyque2}>Bobbi Brown</div>

              <div className={style.diptyque3}>Maison Margiela</div>
            </div>

            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>

              <div className={style.diptyque5}>Estee Launder</div>
            </div>
          </div>{" "}
          {/* ----------Cos Bar Brooklyn ------- */}
          <div className="col" id={style.SalonSpa}>
            <h5 className={style.SeaPort}>Cos Bar Brooklyn </h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>

            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>

              <div className={style.diptyque5}>Estee Launder</div>
            </div>
          </div>{" "}
          {/* -----------Concepts---------- */}
          <div className="col" id={style.SalonSpa2}>
            <h5 className={style.SeaPort}>Concepts</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>
              <div className={style.diptyque5}>Estee Launder</div>
              <div className={style.diptyque6}>RMS Beauty</div>
            </div>{" "}
          </div>
          {/* --------------Revela Salon----------- */}
          <div className="col" id={style.SalonSpa3}>
            <h5 className={style.SeaPort}>Revela Salon</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>
              <div className={style.diptyque2}>Bobbi Brown</div>
              <div className={style.diptyque3}>Maison Margiela</div>{" "}
            </div>

            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>

              <div className={style.diptyque5}>Estee Launder</div>
              <div className={style.diptyque6}>RMS Beauty</div>
            </div>
          </div>
          {/* ---------------Blow on Mane Dry Bar------- */}
          <div className="col" id={style.SalonSpa4}>
            <h5 className={style.SeaPort}>Blow on Mane Dry Bar</h5>
            <div className={style.MapImgContent}>
              <img src={"/Images/Map_Location.svg"} className={style.MapImg} />
              <div className={style.mapContent}>
                <img src={"/Images/Map.svg"} />
                <span className={style.SilverDale}>Silverdale</span>
              </div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque}>Diptyque</div>

              <div className={style.diptyque2}>Bobbi Brown</div>

              <div className={style.diptyque3}>Maison Margiela</div>
            </div>
            <div className={style.bobbi}>
              <div className={style.diptyque4}>Byredo</div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Retailer;
