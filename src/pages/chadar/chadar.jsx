import React, { useState } from "react";
import "./chadar.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Chadar = () => {
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
          Chadar Trek
        </h1>
        <p class="lead text-center" id="chadar">
          The Chadar Trek or the Zanskar Gorge trek is a winter trail over the
          frozen Zanskar River, which lies in the Indian union territory of
          Ladakh.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Treko Highlights</h1>
          <ul>
            <li>
              Get a unique experience of walking on the Frozen Zanskar river
              with the proper taste of a scenic beauty .
            </li>
            <li>
              Witness the magnificient beauty of Frozen waterfall to soothe out
              your soul .
            </li>
            <li>
              Equivalent number of staff as per the trekkers for a guided
              experience.
            </li>
            <li>
              Interact with the local people of Zanskar Village during the
              Chadar Trek 2022, to learn about the history of the place.
            </li>
            <li>
              Thrillophilia Exclusive option to opt for an alternate experience
              "Flavour of Ladakh" on a first come first basis
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">Chadar Trek Overview</h1>
          <p class="p1">
            Ladakh is the home to numerous natural wonders, but the most
            precious gift bestowed upon this magical land is the Chadar Trek.
            The trek is all about persistence & survival – of learning to
            survive in the harsh terrains at sub-zero temperatures, interacting
            with the locals & understanding their way of living, especially in
            one of the most inhabitable regions in the world, while you trek
            across a dramatic gorge with frozen waterfalls on the frozen trail
            of Zanskar spanned out like a “Chadar” it acts as a mirror for the
            sky!
          </p>
          <p class="p2">
            The primal thrill of sleeping in caves, musing over blazing bonfires
            in freezing temperatures with most definitely the ever-present sense
            of danger, yet surviving it all – makes it the “Do before you die”
            journey!
          </p>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Chadar Trek Quick Facts:</h1>
          <ul>
            <li>Chadar River Trek Duration: 9D/8N</li>{" "}
            <li>Chadar Trek Distance: 62 km</li>
            <li> Maximum Altitude: 11,123ft </li>{" "}
            <li>Difficulty Level: Difficult </li>
            <li>
              Chadar Trek Temperature: -5 to -15 degrees (during the day) and
              -15 to -25 degrees (during the night)
            </li>
            <li> Chadar Trek Best Time: Early January - Early February.</li>
            <li> Start and End Point of the Trek: Guest House in Leh.</li>
            <li>
              {" "}
              Nearest Airport: Leh airport. (Kushok Bakula Rimpochee airport){" "}
            </li>
            <li> Last ATM: Leh Market and Airport.</li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">ACCOMODATION </h1>
          <p class="p1">
            In the mainland, all accommodation is made in A Class hotels with
            all meals included in the package. Comfortable accommodation will be
            arranged for trekkers. Usually tents are used while camping and
            persons are generally accommodated in a two man tent. However, due
            to the harsh and extremely cold climate, trekkers are advised to get
            some essential items such as steam crossing sandals, insulating
            fleece jacket, rain proof jackets, insulating gloves, warm sleeping
            bags etc to protect themselves.
          </p>
          <p class="p2">
            During the trek on the Chadar, the campsites will be set up in caves
            in the area and hence having all these warm clothes and items is
            mandatory. Before setting out for the trip, every participant must
            be fully aware of the conditions that he will have to face during
            the trek and prepare accordingly.
          </p>
          <p>
            During the Chadar trek, care will be taken to ensure safety of all
            participants. However, trekkers will also have to take a few
            measures for their own safety and health. The trek is usually
            conducted in groups of at least six persons and is led by a
            professional trekker who has completed his Basic and Advanced
            Mountaineering course.
          </p>
          <p>
            In addition, these lead trekkers are also certified in Wilderness
            ‘First Aid’ in order to ensure quick medical help during the
            expedition. Furthermore, other staff such as porters, cooks, helpers
            and local guides is also sent along on the expedition to ensure
            successful and fruitful completion of the trip.Trekkers can also
            enjoy bike trip to Srinagar .
          </p>
        </div>
        <div class="booking">
          <h1 class="pcice">Price Per Person ₹8500</h1>
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

export default Chadar;
