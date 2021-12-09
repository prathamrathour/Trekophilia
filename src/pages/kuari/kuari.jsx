import React, { useState } from "react";
import "./kuari.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Kuari = () => {
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
          Kuari Tapovan trek
        </h1>
        <p class="lead text-center" id="chadar">
          With a visit to popular pilgrim cities such as Rishikesh, Devprayag,
          Joshimath, and Haridwar, the Kuari pass trek, situated in Garhwal
          Himalaya is a 33 KM long journey. The trek is famous for letting you
          onlook India’s second-highest peak, Mount Nanda Devi.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Treko Highlights</h1>
          <ul>
            <li>
              Experience altitude of 12,516 ft and views of the mighty
              Dronagiri, Chitrakantha, Chaukhamba and Tali top
            </li>
            <li>
              Capture the breathtaking scenic views of India’s second-highest
              peak - the Nanda Devi
            </li>
            <li>
              Through the trail you can simply treat your eyes on the
              spectacular views of Bhagirathi and Alaknanda rivers in their
              glory.
            </li>
            <li>
              The Kuari pass trek passes through the thick alpine forests of oak
              and conifer, Rhododendron and birch, teeming with a variety of
              animals like leopard pugmarks or a Himalayan black bear and birds
              life
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">Kuari Pass Trek Overview</h1>
          <p class="p1">
            With a visit to popular pilgrim cities such as Rishikesh, Devprayag,
            Joshimath, and Haridwar, the Kuari pass trek, situated in Garhwal
            Himalaya is a 33 KM long journey. The trek is famous for letting you
            onlook India’s second-highest peak, Mount Nanda Devi.
          </p>
          <p class="p2">
            The trek at an altitude of 12,516 ft. also offers you summit views
            of Dronagiri, Chitrakantha, Chaukhamba, and Tali top. The Interlude
            of meadows, beautiful forests blooming with rhododendron, and oak
            trees make your path all the more scenic. While on the trek, you can
            also admire the mesmerizing views of holy rivers such as Bhagirathi
            and Alakananda which makes the ascent even more exciting.
          </p>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Kuari Pass Trek Quick Facts:</h1>
          <ul>
            <li> Duration:6D/5N</li>
            <li>Kuari Pass Trek Distance: 33 km</li>
            <li> Kuari Pass Altitude: 12,516 ft</li>
            <li> Difficulty Level: Easy To Moderate </li>
            <li>
              Kuari PassTemperature: Day: 13°C to 18°C and Night: -3°C to 4°C
            </li>
            <li>
              Best time for Kuari Pass Trek: March till mid-June & mid-September
              to early November
            </li>
            <li>Railway Station: Haridwar is the nearest railway station</li>
            <li> ATM: Last ATM is available in Joshimath</li>
            <li>Start -End Point: Haridwar</li>
          </ul>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Kuari Trek Inclusions:</h1>
          <ul>
            <li>All veg meals from day 1st dinner to till day 6th breakfast</li>
            <li> 03 Nights Tented Accommodation on a triple sharing basis.</li>
            <li>
              02 nights Guest House / Hotel in Joshimath / Govindghat on triple
              sharing basis.
            </li>
            <li> Morning, Evening Tea/Coffee with light snacks.</li>
            <li>
              All necessary fees and permits for Indians are included in the
              Kuari Pass trek package.
            </li>
            <li> Qualified and experienced Trek Guide and support staff.</li>
            <li> All camping gears complying with International standards</li>
          </ul>
        </div>
        <div class="booking">
          <h1 class="pcice">Price Per Person ₹8700</h1>
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

export default Kuari;
