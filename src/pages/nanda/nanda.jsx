import React, { useState } from "react";
import "./nanda.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Nanda = () => {
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
          NANDA DEVI TREK
        </h1>
        <p class="lead text-center" id="chadar">
          Feel the trans-Himalayan trekking experience as you trek through
          Bogudiar, Railkot, and Ghangharia with overnight stays in tents every
          night. From Pachu Glacier, you will explore the base camp for a day
          and exciting trek to Martoli, Rargari, and Munsiyari, staying at every
          location.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Trek Highlights</h1>
          <ul>
            <li>
              The Nanda Devi Base Camp Trek takes you on through the upper
              regions of the Kumaon and rewards you with stunning sights of
              Nanda Devi
            </li>
            <li>
              This Nanda Devi trek leads you to the base camp on the eastern
              side of the Nanda Devi peak which is also the home to Panchu
              Glacier.
            </li>
            <li>
              Throughout the Nanda Devi trek you can see the superb view of the
              neighboring mountains like Nanda Devi (7,816m), Trishul (7,074m),
              Panch Chuli peaks and Nanda Kot (6,861m)
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">Nanda Devi Trek Overview</h1>
          <p class="p1">
            Feel the trans-Himalayan trekking experience as you trek through
            Bogudiar, Railkot, and Ghangharia with overnight stays in tents
            every night. From Pachu Glacier, you will explore the base camp for
            a day and exciting trek to Martoli, Rargari, and Munsiyari, staying
            at every location. The second-highest peak of the country, the Nanda
            Devi is one of the most beautiful peaks in the Himalayas. This Nanda
            Devi East Base Camp trek leads you to the base camp on the eastern
            face of the peak, which is also the home to astounding Pachu
            Glacier.
          </p>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Nanda Devi Trek Quick Facts:</h1>
          <ul>
            <li> Nanda Devi East Base Camp Trek Duration: 11D/10N</li>
            <li>Maximum Altitude: 13,123 ft</li>
            <li>Nanda Devi Trek Difficulty Level: Moderate</li>
            <li>Nanda Devi Trek Distance: 110 km </li>
            <li>Temperature: Day 12°C to 20°C and Night: -4°C to 10°C</li>
            <li>
              Best time for Kuari Pass Trek: March till mid-June & mid-September
              to early November
            </li>
            <li>Nanda Devi Base Camp trek Start Point/End Point: Kathgodam</li>
            <li>Railway Station: Kathgodam is the nearest railway station </li>
            <li>ATM: Kathgodam</li>
          </ul>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Nanda Devi Trek Inclusions:</h1>
          <ul>
            <li> Accommodation- Tents or Tourist lodges on sharing basis.</li>
            <li>
              Trekking Equipment- High-quality tents and sleeping bags in all
              the camps. Sleeping bags can withstand temperatures as low as -10
              ºC.
            </li>
            <li>
              Meals- All Meals Included during the Nanda Devi trek (Vegetarian
              Only).
            </li>
            <li> Morning, Evening Tea/Coffee with light snacks.</li>
            <li>Permits- All permits and fees (wherever applicable).</li>
            <li> Qualified and experienced Trek Guide and support staff.</li>
            <li> All camping gears complying with International standards</li>
          </ul>
        </div>
        <div class="booking">
          <h1 class="pcice">Price Per Person ₹40000</h1>
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

export default Nanda;
