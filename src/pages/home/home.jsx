import React from "react";

import "./home.css";

const Home = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" type="text/css" href="home.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,700"
        rel="stylesheet"
      />
      <div class="body">
        <div class="nav">
          <a href="http://localhost:3000/home">Home</a>
          <a href="http://localhost:3000/aboutus">About Us</a>

          <a href="http://localhost:3000/">Log Out</a>
        </div>
        <div class="container-fluid px-0 py-10">
          <div class="jumbotron jumbotron-fluid jumbo">
            <div class="container1">
              <h1 class="display-3 text-center" id="trekophilia">
                Trekophilia
              </h1>

              <p class="lead text-center" id="phrase">
                The best views comes from the hardest climbs.
              </p>
            </div>
          </div>
        </div>
        <section class="container-fluid px-0">
          <div class="row align-items-center text-center">
            <div class="col-lg-6 col-md-6 content">
              <h1>Chadar – The Frozen Zanskar River Trek</h1>
              <br />
              <h4>
                An excellent trek along the frozen Zanskar river with beautiful
                winter terrain and a firsthand glimpse of the ancient culture of
                Ladakh region, this is an exciting journey for experienced
                trekkers. Icy routes, bone-chilling winds, pristine nature, and
                the experience of a lifetime, that’s what this trek is all
                about.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/chadar">
                <button>Book Now</button>
              </form>
            </div>
            <div class="col-lg-6 col-md-6 content">
              <img
                id="img"
                src="https://www.bookmundi.com/blog/wp-content/uploads/2015/10/chadar-trek-india-bookmundi.jpg"
              />
            </div>

            <div class="col-lg-6 col-md-6 order-2 order-md-1 content">
              <img
                id="img"
                src="https://dmgupcwbwy0wl.cloudfront.net/system/images/000/238/624/96768a112fd631086c1ec1cc3247893a/original/Gaumukh-tapovan-trek.jpg?1551899881"
              />
            </div>
            <div class="col-lg-6 col-md-6 order-1 order-md-2 content">
              <h1>Gangotri Gomukh trek</h1>
              <br />
              <h4>
                A journey in the Garhwal Himalayas of Uttarakhand, this trek
                takes you to the Gangotri glacier at Gomukh, the source of the
                Ganges. A true natural delight, the region features a large
                diversity of plants and animals, including rare blue mountain
                goats. The glacier is surrounded by beautiful mountains on all
                sides, a truly mesmerizing sight to behold.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/gangotri">
                <button>Book Now</button>
              </form>
            </div>
          </div>

          <div class="row align-items-center text-center">
            <div class="col-lg-6 col-md-6 content">
              <h1>Ladakh – Markha Valley trek</h1>
              <br />
              <h4>
                Markha valley trek is a very popular trek in the Ladakh region.
                You’ll be walking in a variety of terrains including dry
                mountains, streams, and small villages with fields of wheat,
                barley and mustard. Housing several old Buddhist monasteries,
                the region is a repository of ancient Tibetan culture. A trek
                through this region will be etched in your memory for a
                lifetime.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/ladhakh">
                <button>Book Now</button>
              </form>
            </div>
            <div class="col-lg-6 col-md-6 content">
              <img
                id="img"
                src="https://images.thrillophilia.com/image/upload/s--n3DLMbIJ--/c_fill,f_auto,fl_strip_profile,g_auto,h_600,q_auto,w_975/v1/images/photos/000/029/163/original/1524635869_shutterstock_652718944.jpg.jpg?1524635869"
              />
            </div>

            <div class="col-lg-6 col-md-6 order-2 order-md-1 content">
              <img
                id="img"
                src="https://indiahikes.com/wp-content/uploads/2017/02/kuari-pass-indiahikes-walking-towards-talle-forest-campsite.jpg"
              />
            </div>
            <div class="col-lg-6 col-md-6 order-1 order-md-2 content">
              <h1>Kuari Tapovan trek</h1>
              <br />
              <h4>
                A journey through the enchantingly beautiful Garhwal region of
                India, this trek has you walking in the shadows of several 7000+
                peaks. The region houses rare HImalayan fauna such as the snow
                leopard and the musk deer. The highlight of the trek is the
                Kuari pass at an altitude of 4264 m. The trek is quite easy,
                featuring a hands-on experience of the local Hindu culture.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/kuari">
                <button>Book Now</button>
              </form>
            </div>
          </div>

          <div class="row align-items-center text-center">
            <div class="col-lg-6 col-md-6 content">
              <h1>Nanda Devi trek</h1>
              <br />
              <h4>
                Rising to an altitude of 7816 m, Nanda Devi is the highest peak
                in the Garhwal region of India. Sprawled across the lap of the
                mountain, the Nanda Devi national park, housing unique Himalayan
                flora and fauna, is a place of beauty in and of itself. You’ll
                be trekking along Himalayan foothills and several small rivers,
                streams and glaciers. The place is an epitome of pristine
                natural beauty, attracting thousands of photographers, trekkers
                and mystics every year.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/nanda">
                <button>Book Now</button>
              </form>
            </div>
            <div class="col-lg-6 col-md-6 content">
              <img
                id="img"
                src="https://www.himalayanhikers.in/wp-content/uploads/2019/12/Nanda-Devi-Base-Camp-Trek4.jpg"
              />
            </div>

            <div class="col-lg-6 col-md-6 order-2 order-md-1 content">
              <img
                id="img"
                src="https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2017/09/222.jpg"
              />
            </div>
            <div class="col-lg-6 col-md-6 order-1 order-md-2 content">
              <h1>Goecha La trek</h1>
              <br />
              <h4>
                Goecha La, a trek in the heart of the beautiful Sikkim region,
                puts you face to face with Kanchenjunga, the third highest
                mountain peak on the planet. Be it beautiful rhododendron
                forests, picturesque hill stations, or clear blue Himalayan
                lakes, this trek has it all. The trek is quite challenging, but
                when you view the majestic Himalayas from Dzongri, you’ll
                definitely find it worth the effort.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/goechala">
                <button>Book Now</button>
              </form>
            </div>
          </div>

          <div class="row align-items-center text-center">
            <div class="col-lg-6 col-md-6 content">
              <h1>Valley of Flowers</h1>
              <br />
              <h4>
                Located high in the Himalayas of Uttaranchal at an altitude of
                3658 m, the valley of flowers is named quite appropriately: it
                is a huge valley blooming with more types of flowers than one
                can possibly count. It is a spectacular site surrounded by
                beautiful mountains on all sides. The valley floor is
                resplendent with flowers of all colours and the whole area has
                an intense, pleasant aroma. After an exciting trek in the
                Himalayan foothills, the valley of flowers feels like heaven on
                Earth.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/valley">
                <button>Book Now</button>
              </form>
            </div>
            <div class="col-lg-6 col-md-6 content">
              <img
                id="img"
                src="https://media.moxtain.com/trekking/valley-of-flowers/valley-of-flowers.jpg"
              />
            </div>

            <div class="col-lg-6 col-md-6 order-2 order-md-1 content">
              <img
                id="img"
                src="https://www.adventurenation.com/blog/wp-content/uploads/2016/08/Roopkund.jpg"
              />
            </div>
            <div class="col-lg-6 col-md-6 order-1 order-md-2 content">
              <h1>Roopkund trek</h1>
              <br />
              <h4>
                Roopkund is a lake at an altitude of 5029 m, famous for the
                human skeletal remains found at its bottom. A journey to the
                remote Roopkund lake takes you through pristine forests with
                rivers gushing below you. The lush greenery, the numerous birds
                of several species, the surrounding Himalayan peaks, the flat
                plains, the Hindu temples, all serve to make the trek to
                Roopkund a memorable experience.
              </h4>
              <br />
              <form method="get" action="http://localhost:3000/roopkund">
                <button>Book Now</button>
              </form>
            </div>
          </div>
        </section>

        <div class="jumbotron jumbotron-fluid jumbo2">
          <div class="container1">
            <div class="row align-items-center text-center">
              <div class="col-6 text-right inst">
                <img
                  src="https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png"
                  width="35"
                  height="35"
                />
              </div>
              <div class="col-6 text-left">
                <h3>Instagram</h3>
              </div>
            </div>
          </div>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous"
        ></script>
      </div>
    </div>
  );
};

export default Home;
