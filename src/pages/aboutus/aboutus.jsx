import React from "react";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div>
      <div class="nav">
        <a href="http://localhost:3000/home">Home</a>
        <a href="http://localhost:3000/aboutus">About Us</a>

        <a href="http://localhost:3000/">Log Out</a>
      </div>
      <div class="element">
        <div class="about-section">
          <div class="inner-container">
            <h1 class="heading">
              About Us
              <div class="border"></div>
              <div class="aboutUs"></div>
            </h1>
            <p class="text">
              We believe in the philosophy of wholeheartedly serving our
              customers and make travel fun, in the literal sense. Our list of
              clients include customers from both India. We have sufficient
              expertise and resources at our disposal for ensuring customers
              well arranged and customized packages; in fact, many of our
              packages are budget friendly and do not include any hidden
              charges, something which puts a smile on the face of travelers.
            </p>
            <p class="text">
              There are so many amazing things and places to explore in India,
              like its never-ending list of cultures, unique lifestyle, colorful
              traditions and the vast countryside, which you can explore during
              your trekking expedition in India. Trekking in India helps you
              achieve all this in the most convenient and budget-friendly
              manner. Our holiday packages come with transportation and
              accommodation facilities to ensure that you don't have be bothered
              about trivialities; it allows you to concentrate all your energies
              on exploring the destinations you have in front of you, making the
              process rewarding and soothing.
            </p>
            <p class="text">
              <h3 class="text">
                We understand how important travelling is for you:
              </h3>
              <p class="text">
                Mark Twain, the famous American author and humorist said that
                travelling could cure many ills of society like prejudice,
                bigotry and narrow-mindedness. These are strong enough
                arguments, but there are still more compelling reasons why one
                should travel. For the 24/7 work culture, rapid globalization,
                and boom in IT today have shrunk our private space and left us
                with little time to spend with friends and family. Consequently,
                it has become more essential than ever to make the most of the
                free time one has at his disposal. The free time can be used to
                make time for family, recharge the batteries, and seek out the
                spiritual side of life. After all, life is not all about work
                and there is no point wasting it by being confined within the
                four walls of the workplace.
              </p>
            </p>
            <p class="text">
              <h3 class="text">Cancellation Policy</h3>
              <p class="text">
                If you cancel our services, we won't charge you any cancellation
                charges. But if you have booked a hotel through us, in that case
                the cancellation policies of the specific hotel will be
                applicable and you may have to pay a cancellation amount
                accordingly. Since different hotels have different policies, the
                cancellation amount may also vary.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
