import React, { useState } from "react";
import "./roopkund.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Roopkund = () => {
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
          Roopkund trek
        </h1>
        <p class="lead text-center" id="chadar">
          Blessed with deep virgin forests, gurgling brooks, breath-taking
          campsites and the beckoning meadows Roopkund trek is a must do trek
          for you. Get a chance to taste adventure as you climb from 8,000 ft to
          16,000 ft in a period of 8 days.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Trek Highlights</h1>
          <ul>
            <li>
              The Roopkund Base Camp Trek takes you on through the upper regions
              of the Kumaon and rewards you with stunning sights of Nanda Devi
            </li>
            <li>
              This Roopkund trek leads you to the base camp on the eastern side
              of the Nanda Devi peak which is also the home to Panchu Glacier.
            </li>
            <li>
              Throughout the Roopkund trek you can see the superb view of the
              neighboring mountains like Nanda Devi (7,816m), Trishul (7,074m),
              Panch Chuli peaks and Nanda Kot (6,861m)
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">Roopkund Trek Overview</h1>
          <p class="p1">
            Blessed with deep virgin forests, gurgling brooks, breath-taking
            campsites and the beckoning meadows Roopkund trek is a must do trek
            for you. Get a chance to taste adventure as you climb from 8,000 ft
            to 16,000 ft in a period of 8 days. The adventure starts for you
            from the second day onwards as you start trekking to Roopkund
            Glacial lake. Take the Lord Curzon trail starting Lohajung and
            follow a steady uphill trek through the Lohajung Pass and then reach
            the Bedni River.
          </p>
        </div>

        <div class="highlights">
          <h1 class="chadaroverview">Roopkund Trek Inclusions:</h1>
          <ul>
            <li>
              Roopkund trek cost includes all accommodations during the trek
            </li>
            <li>All meals during the trek</li>
            <li>Central Trekking equipment</li>
            <li> Morning, Evening Tea/Coffee with light snacks.</li>
            <li>Permits- All permits and fees (wherever applicable).</li>
            <li> Qualified and experienced Trek Guide and support staff.</li>
            <li> All camping gears complying with International standards</li>
          </ul>
        </div>
        <div class="booking">
          <h1 class="pcice">Price Per Person ₹9000</h1>
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

export default Roopkund;
