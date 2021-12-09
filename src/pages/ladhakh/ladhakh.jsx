import React, { useState } from "react";
import "./ladhakh.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Ladhakh = () => {
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
          Ladhakh markha valley trek
        </h1>
        <p class="lead text-center" id="chadar">
          An arid cold desert trekking area that offers the best views of Ladakh
          and Zanskar Ranges has admirers worldwide. It is also known as a
          tea-house trek, as it is filled with the local culture of Ladakh.
          Witness the 21000 feet Kang Yissay and 20086 feet Stok Kangri peaks
          also while embarking on this trek.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Treko Highlights</h1>
          <ul>
            <li>
              Get amused with the unexplored beauty of Hemis National Park and
              also the highest passes Gandala La and Kongmaru La
            </li>
            <li>
              Enjoy the sightseeing in Leh that will help you know the culture
              and Buddhist traditions prevailing in the town
            </li>
            <li>
              Capture the astounding views of Nimaling, surrounded by ponds and
              stream that will soothe your soul
            </li>
            <li>
              Witness the Greenfields, willow trees, and quaint villages that
              can be seen as you reach the altitude of 16,830ft
            </li>
            <li>
              Behold the stunning view of Kang Yatze Peak that is the reward you
              get from Markha
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">Markha Valley Trek Overview</h1>
          <p class="p1">
            An arid cold desert trekking area that offers the best views of
            Ladakh and Zanskar Ranges has admirers worldwide. It is also known
            as a tea-house trek, as it is filled with the local culture of
            Ladakh. Witness the 21000 feet Kang Yissay and 20086 feet Stok
            Kangri peaks also while embarking on this trek.
          </p>
          <p class="p2">
            Hemis National Park and Gandala La and Kongmaru La are the promising
            attractions one gets while taking the Markha Valley trek route.
            Another factor that makes this trek amusing is the waist-deep river
            crossing which helps us to cross the Markha River to reach the
            trails to Buddhist villages and rock structures. Markha Valley is in
            very close proximity to Leh which makes it more accessible for
            trekkers.
          </p>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Markha Valley Trek Quick Facts:</h1>
          <ul>
            <li> Duration: 9D/8N</li>
            <li>Markha valley trek altitude:17100ft</li>
            <li> Markha valley trek Difficulty level: Difficult</li>
            <li> Trek distance: 75kms</li>
            <li>
              Temperature: During the day: 20°C - 30°C and During the night 0°C
              - 10°C
            </li>
            <li>Best Time To Travel: July to Mid September</li>
            <li>Airport : Kushok Bakula Rimpochee Airport, Leh</li>
            <li> Basecamp: Leh</li>
            <li>Leh</li>
          </ul>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Markha Valley Trek Inclusions:</h1>
          <ul>
            <li>
              Accommodation- Camping/Home stay during the trek. Guest house in
              Leh on Day 1, day 2, and day 8 as per the itinerary.
            </li>
            <li>
              Meals- All meals while on trek ( Veg ) Starting from Day 3
              breakfast.
            </li>
            <li>
              Trek equipment- Sleeping bag, mattress, tent (twin sharing),
              kitchen & dining tent, toilet tent, utensils, and crampon (if
              required).
            </li>
            <li>
              Guide- Mountaineering qualified & professional trek Leader, guide,
              cook, and Support staff.
            </li>
            <li>Staff- Mules to carry the central luggage.</li>
            <li>
              Permits- Forest entry charges, permits & camping fee (if
              any)Permits & camping fee (if any) for Indian National
            </li>
            <li>
              Transport- from Leh guest house to Zinchen and return from Sumdo
              to Leh as per the itinerary.
            </li>
          </ul>
        </div>
        <div class="booking">
          <h1 class="pcice">Price Per Person ₹9700</h1>
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

export default Ladhakh;
