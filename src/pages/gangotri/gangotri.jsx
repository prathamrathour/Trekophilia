import React, { useState } from "react";
import "./gangotri.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Gangotri = () => {
  const publishableKey = "pk_test_WBqax2FWVzS9QlpJScO07iuL";
  var str = 0;
  var priceForStripe = str * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
    window.location.replace("http://localhost:3000/home");
  };
  function myfunction(event) {
    console.log("hi");
    const val = (document.getElementById("myNumber") || 1).value || "1";
    console.log(val);

    return val * 100;
  }

  return (
    <div>
      <div class="nav">
        <a href="http://localhost:3000/home">Home</a>
        <a href="http://localhost:3000/aboutus">About Us</a>

        <a href="http://localhost:3000/">Log Out</a>
      </div>
      <div class="container-fluid px-0 py-10">
        <div class="jumbotron jumbotron-fluid jumbo1">
          <div class="container2"></div>
        </div>
      </div>
      <div class="paragh">
        <h1 class="display-3 text-center" class="chadartrek">
          Gangotari gaumukh trek
        </h1>
        <p class="lead text-center" id="chadar">
          The Gaumukh Tapovan trek is a thrillfest with gigantic views of the
          cow-shaped Gaumukh Glacier which is also one of the main water sources
          of the holy Ganges. The trek offers breathtaking views of the Gangotri
          peaks - Shivling, Thalay Sagar, and Meru.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Treko Highlights</h1>
          <ul>
            <li>
              Experience a maximum altitude of 14,222 ft.- and participate in
              the holy ritual of taking a dip in the Bhagirathi river
            </li>
            <li>
              Catch the glimpse of magnificent Bhagirathi group of three soaring
              peaks during your journey
            </li>
            <li>
              Witness the short trek to Bhojwassa which is studded with trees
              and is mostly barren and often compared to the Arctic Tundra
              region
            </li>
            <li>
              The Gomukh Gangotri trek takes you through many of the significant
              pilgrimage spots of Hindu devotees such as Gangotri Glaciers,
              Gaumukh, Bhagirathi Sisters, etc.
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">Gangotri Trek Overview</h1>
          <p class="p1">
            The Gaumukh Tapovan trek is a thrillfest with gigantic views of the
            cow-shaped Gaumukh Glacier which is also one of the main water
            sources of the holy Ganges. The trek offers breathtaking views of
            the Gangotri peaks - Shivling, Thalay Sagar, and Meru.
          </p>
          <p class="p2">
            The Gomukh Tapovan trek is scenic with nature's bounty and is
            decorated with fragrant flowers, snow-capped peaks, and similar
            jaw-dropping views. Take a dip in the holy Bhagirathi River, which
            is considered one of the sacred rituals. During the Gomukh glacier
            trek, one can also immerse in the divine aura of the pilgrim cities-
            Rishikesh, Uttarkashi, Gangotri, and Bhojwassa. Marvel at the sight
            of the Bhagirathi sisters to experience the summit views.
          </p>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Gangotri Trek Quick Facts:</h1>
          <ul>
            <li>Duration Of Gomukh Trek: 8D/7N</li>{" "}
            <li>Maximum altitude: 14222 ft</li>
            <li> MGomukh Tapovan trek gradient: Moderate </li>{" "}
            <li>Gomukh Trek route distance: 46 Km </li>
            <li> Temperature: Day: 18°C to 12°C and Night: 5°C to -5°C</li>
            <li> Start and End Point of the Trek: Guest House in Leh.</li>
            <li>
              {" "}
              Best time for Gangotri Gomukh trek: May end to June, September to
              October{" "}
            </li>
            <li> Last ATM: Uttarkashi</li>
          </ul>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Gomukh Tapovan Trek Inclusions:</h1>
          <ul>
            <li>
              Accommodation – Tented accommodation throughout the Gomukh trek.
            </li>
            <li>
              Meals – (Breakfast, lunch, snacks, and dinner). We provide simple,
              nutritious vegetarian food on all days of the Gangotri Gomukh
              trek.
            </li>
            <li>
              Camping charges – All trekking permits and forest camping charges
              are included.
            </li>
            <li>
              Trekking equipment – High-quality tents and sleeping bags in all
              the camps. Sleeping bags can withstand temperatures as low as -10
              ºC.
            </li>
            <li>
              Safety equipment – First aid kit, oxygen cylinders, oximeter, etc.
              will be with guide/trek leader and at the campsite as well to deal
              with emergencies.
            </li>
            <li>
              Expert trek Leaders – All our trek leaders are at least qualified
              in basic/advanced mountaineering and first aid course.
            </li>
            <li>
              Expert Trek support team – The mountain staff on the Gomukh
              Gangotri trek consists of certified guides, cooks, helpers, and
              porters.
            </li>
          </ul>
        </div>
        <div class="booking">
          <h1 class="pcice">Price Per Person ₹7000</h1>
          <h2 class="enter">Enter Number of persons </h2>
          <input
            type="number"
            id="myNumber"
            min="1"
            max="100"
            onChange={myfunction}
          />

          <StripeCheckout
            label="Pay Now"
            name="Trekophilia"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
          />
        </div>
      </div>
    </div>
  );
};

export default Gangotri;
