import React, { useState } from "react";
import "./valley.css";
import StripeCheckout from "react-stripe-checkout";
import { render } from "@testing-library/react";

const Valley = () => {
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
          VALLEY OF FLOWERS
        </h1>
        <p class="lead text-center" id="chadar">
          Valley of Flowers "Foolon ki Ghati" is one of those beautiful trekking
          expeditions that can be enjoyed during the monsoon season. It is
          flawlessly nestled in the West Himalayan region of Uttarakhand and
          lies at a lofty height of 3600 m above sea level. With an opportunity
          to spot the very rare blue Primula, the Valley Of Flowers trek is one
          of the best-known treks in the world.
        </p>
        <div class="highlights">
          <h1 class="highlightitle">Trek Highlights</h1>
          <ul>
            <li>
              Very true to its name, the trek to Valley of Flowers floors you
              with infinite flowers in full bloom and can actually be renamed as
              a floral fairytale romance!
            </li>
            <li>
              Attain peace of mind at Hemkund Sahib, a Sikh Gurudwara nestled
              beside a high-altitude dazzling lake largely known as Hemkund,
              whose literal meaning is “Lake of Snow”.
            </li>
            <li>
              Privileged as a UNESCO World Heritage site, the floral fragrance
              from the carpeting flowers entices you throughout the trek
            </li>
            <li>
              To ensure a worry free trek much efforts are put in for your
              safety and proper sanitization of all equipment
            </li>
            <li>
              Witness the heavenly land where the fairies flutter joyfully in
              the absence of humans, according to the locals.
            </li>
          </ul>
        </div>
        <div class="overview">
          <h1 class="chadaroverview">Valley of Flowers trek Overview</h1>
          <p class="p1">
            Valley of Flowers "Foolon ki Ghati" is one of those beautiful
            trekking expeditions that can be enjoyed during the monsoon season.
            It is flawlessly nestled in the West Himalayan region of Uttarakhand
            and lies at a lofty height of 3600 m above sea level. With an
            opportunity to spot the very rare blue Primula, the Valley Of
            Flowers trek is one of the best-known treks in the world.
          </p>
          <p class="p2">
            The Valley of Flowers is also believed to be the place from where
            Hanuman brought the magical herb to resuscitate Lakshman in the
            Hindu epic Ramayan. Just as you set your foot into the valley, the
            intoxicating mix of fragrances emitted from the flowers makes you
            feel in a paradise. The hidden lake at the height of 14,400 ft,
            creates a hidden coop for numerous species of wildflowers like the
            saxifrages, sedums, lilies, poppy, calendulas, daisies, geranium,
            zinnia, and petunia.
          </p>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Valley of FLower Trek Quick Facts:</h1>
          <ul>
            <li> Start Point/End Point: Haridwar</li>
            <li>Duration: 6D/5N</li>
            <li> Maximum Altitude: 14,400 ft</li>
            <li> Trek distance: 47kms</li>
            <li>Temperature: Day 12°C-20°C and Night: 4°C-10°C</li>
            <li>Valley of Flowers Trek Best Time: June end to mid-September</li>
          </ul>
        </div>
        <div class="highlights">
          <h1 class="chadaroverview">Markha Valley Trek Inclusions:</h1>
          <ul>
            <li>
              Accommodations- 02 Nights Hotel accommodation on a triple/quad
              sharing basis at Govindghat. 03 Nights Hotel accommodation on a
              triple/quad sharing basis at Ghangaria.
            </li>
            <li>
              Meals- All veg nutritious meals from dinner at Govindghat on Day
              1st to breakfast at Govindghat on Day 6th. Morning evening tea
              served with light snacks are also included in the Valley of
              Flowers trekking package.
            </li>
            <li>
              Safety equipment- First aid kit, oxygen cylinders, oximeter, etc.
              will be with guide/trek leader and at the campsite as well to deal
              with emergencies.
            </li>
            <li>
              Guide- Mountaineering qualified & professional trek Leader, guide,
              cook, and Support staff.
            </li>
            <li>
              Expert trek Leaders- All our trek leaders are at least qualified
              in basic/advanced mountaineering and first aid course.
            </li>
            <li>
              Permits- Forest entry charges, permits & camping fee (if
              any)Permits & camping fee (if any) for Indian National
            </li>
            <li>
              Expert Trek support team- The mountain staff on Valley of Flowers
              trek consists of certified guides, cooks, helpers, and porters.
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

export default Valley;
