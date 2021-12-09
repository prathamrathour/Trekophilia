import React, { useState } from "react";
import "./goechala.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Goechala = () => {
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
          GoechaLa Pass Trek
        </h1>
        <p class="lead text-center" id="chadar">
          GoechaLa trek is nestled at a height of 16,207 ft, with a closer look
          at the third-highest peak-Mt. Kanchenjunga. It is a dream and desire
          for hundreds of adventure lovers. Bounded by the mesmerizing flora and
          fauna, which are so vibrant and colorful to cheer up one's mood.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Treko Highlights</h1>
          <ul>
            <li>
              The still lake of Samiti with the views of Pandim Peak with melt
              your heart away, along with mystical settings of Thangshing.
            </li>
            <li>
              Not to be missed Sunrise view from Dzongri Top of Kanchenjunga,
              where the mountain looks beautiful as the sun rises and changes
              the colour.
            </li>
            <li>
              The southeast face of Mt. Kanchenjunga, the world's third highest
              mountain, can be viewed from the goechala pass
            </li>
            <li>
              Experience the cuddling features of thick rhododendron forests of
              Kanchenjunga National Park, where the forst doesn't end at 10,000
              ft.
            </li>
            <li>
              Pha Khola, Tshushay Khola and Mentogang Khola - the suspension
              bridges over the Prekchu river will leave you in surprise
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">GoeChala Trek Overview</h1>
          <p class="p1">
            GoechaLa trek is nestled at a height of 16,207 ft, with a closer
            look at the third-highest peak-Mt. Kanchenjunga. It is a dream and
            desire for hundreds of adventure lovers. Bounded by the mesmerizing
            flora and fauna, which are so vibrant and colorful to cheer up one's
            mood.
          </p>
          <p class="p2">
            The GoechaLa pass trek is a bundle of big summits, making it an
            absolute adventure to embark on. The trail link with the famous
            Kanchenjunga National Park, where one can witness the true nature,
            enough to revitalize your senses. To watch the mountains clearly,
            April and May are the ideal months. Since the sky is completely
            clear during this time and the sunset-sunrise views can be captured.
          </p>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">GoeChala Trek Quick Facts:</h1>
          <ul>
            <li> GoechaLa Trek duration: 10D/9N</li>{" "}
            <li>Maximum altitude: 16207 ft</li>
            <li> Difficulty Level: Difficult </li>{" "}
            <li> GoechaLa Trek Distance: 90 Km </li>
            <li>
              Temperature Range: April - June: 15 to 22 Degrees (Days); -1 to 7
              Degrees (Nights), September – Nov: 10 to 15 Degrees (Days); -5 to
              5 Degrees (Nights)
            </li>
            <li>
              GoechaLa Trek Best Time: April end - May And September - November
            </li>
            <li>
              Railway Station: New Jalpaiguri (NJP) is the nearest railway
              station, which is 150 km away from Yuksom
            </li>
            <li> Starting and Ending point: Yuksom</li>
          </ul>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Goechala Trek Inclusions:</h1>
          <ul>
            <li>
              2 Nights Guest House / Homestay accommodation in Yuksom on a
              Quad/Triple Sharing basis.
            </li>
            <li>
              7 Nights Tented accommodation while on the trek on a triple
              sharing basis.
            </li>
            <li>
              All Veg Meals from 2nd Day Lunch to till 9th Day Lunch while on
              Trek
            </li>
            <li>
              Morning, evening tea/coffee served with light snacks while on the
              trek.
            </li>
            <li>
              Trekking Equipment likes Sleeping bags, Sleeping mattresses,
              Sleeping tents, utensils.
            </li>
            <li>
              Expert trek Leaders – All our trek leaders are at least qualified
              in basic/advanced mountaineering and first aid course.
            </li>
            <li>
              All fees and permits for Indians are included in the Goechala trek
              package.
            </li>
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

export default Goechala;
