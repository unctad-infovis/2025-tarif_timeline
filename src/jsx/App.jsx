import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2025-tarif_timeline';

function App() {
  // Data states.
  // const [data, setData] = useState(false);

  useEffect(() => {
    // const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2025-tarif_timeline.json' : './assets/data/data.json';
    try {
      // fetch(data_file)
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw Error(response.statusText);
      //     }
      //     return response.text();
      //   })
      //   .then(body => setData(JSON.parse(body)));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      <ul>
        <li style={{ '--accent-color': '#009edb' }}>
          <div className="date">January 20, 2025</div>
          <div className="title" />
          <div className="descr">
            <p>
              The U.S. administration issued its
              {' '}
              <a href="https://www.whitehouse.gov/presidential-actions/2025/01/america-first-trade-policy/" target="_blank" rel="noreferrer">America First Trade Policy</a>
              , (AFTP) which outlines the Trump administration’s trade policy. AFTP prioritizes U.S. economic interests, national security, and industrial competitiveness by reducing U.S. trade deficits through higher imports tariffs.
            </p>
            <p>This policy carries significant implications for developing countries in terms of their participation in international trade, and access to the U.S. market.</p>
            <p>
              Following the AFTP, the U.S. Executive has introduced new tariffs across the board as well as on specific sectors.
            </p>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">February 13, 2025</div>
          <div className="title"><h3>Fair and Reciprocal Plan</h3></div>
          <div className="descr">
            <p>
              The Presidential Memorandum on “
              <a href="https://www.whitehouse.gov/articles/2025/02/reciprocal-trade-and-tariffs/" target="_blank" rel="noreferrer">Reciprocal Trade and Tariffs</a>
              ” introduced the “Fair and Reciprocal Plan,” which seeks to determine the equivalent of a reciprocal tariff for each trading partner. The Plan outlined a country-specific approach to “reciprocal tariffs,” moving away from the Most Favored Nation (MFN) tariff system under the World Trade Organization (WTO).
            </p>
            <p>The Memorandum called for a review of the “non-reciprocal trading relationships” with all U.S. trading partners. This review includes examining tariffs that U.S. products face in foreign markets, non-tariff barriers such as subsidies and exchange rates, and so-called “discriminatory taxes.”</p>
          </div>
        </li>
        <li style={{ '--accent-color': '#009edb' }}>
          <div className="date">March 12, 2025</div>
          <div className="title"><h3>Worldwide 25% tariffs on steel and aluminum</h3></div>
          <div className="descr">
            <p>
              The U.S. Executive reinstated Section 232 tariffs on all
              {' '}
              <a href="https://www.whitehouse.gov/fact-sheets/2025/02/fact-sheet-president-donald-j-trump-restores-section-232-tariffs/" target="_blank" rel="noreferrer">steel imports</a>
              {' '}
              and increased the aluminum tariff from 10% to 25% on all imports, with no exceptions. Argentina, Australia, Brazil, Canada, Japan, Mexico, South Korea, the European Union, Ukraine, and the United Kingdom had previously received exemptions to the Section 232 tariff.
            </p>
            <p>Section 232 tariffs of 25% on steel and aluminum will not be subject to additional reciprocal tariffs launched on April 5, 2025.</p>
          </div>
        </li>
        <li style={{ '--accent-color': '#009edb' }}>
          <div className="date">March 24, 2025</div>
          <div className="title"><h3>Tariffs related to Venezuelan oil</h3></div>
          <div className="descr"><p>Under the IEEPA and the Section 301 of the U.S. Trade Act of 1974, the Executive announced a 25% tariff on imports from countries that import Venezuelan oil. The United States may impose this 25% tariff on all goods imported from any country that imports Venezuelan oil, either directly or indirectly. These duties will be in addition to any tariffs already imposed under IEEPA, section 232 of the Trade Expansion of 1962, section 301 of the Trade Act of 1974, or any other relevant authority.</p></div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 2, 2025</div>
          <div className="title"><h3>Announcement of reciprocal tariffs worldwide</h3></div>
          <div className="descr">
            The U.S. declared a national emergency due to the growing goods trade deficit, identifying the rebalancing of trade flows as a primary policy goal. This rebalancing would be achieved
            {' '}
            <strong>“by imposing an additional ad valorem duty on all imports from all trading partners”.</strong>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 3, 2025</div>
          <div className="title"><h3>Automobiles and autoparts</h3></div>
          <div className="descr">
            <p>
              All automobiles and auto parts (starting May 3, 2025) are subject to 25% duties based on Section 232 (
              <a href="https://www.whitehouse.gov/presidential-actions/2025/03/adjusting-imports-of-automobiles-and-autombile-parts-into-the-united-states/" target="_blank" rel="noreferrer">Proclamation 10908 of March 26, 2025 (Adjusting Imports of Automobiles and Automobile Parts Into the United States)</a>
              ).
            </p>
            <p>For automobiles from Mexico and Canada, the U.S. content will be duty free and that value will be deducted from the 25% tariff to be paid, so autos may face a reduced import duty depending on the content of U.S. originating parts.</p>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 5, 2025</div>
          <div className="title"><h3>Additional 10% reciprocal tariffs become effective</h3></div>
          <div className="descr"><p>A 10% additional ad valorem duty to U.S. imports is applied across the board, except for the products included in Annex I of the April 2, 2025 Executive Order.</p></div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 9, 2025</div>
          <div className="title"><h3>Additional specific-country tariffs become effective</h3></div>
          <div className="descr">
            <p>
              Additional import duties on 57 trading partners listed in Annex I of the April 2, 2025 Executive Order (
              <a href="https://www.whitehouse.gov/presidential-actions/2025/04/regulating-imports-with-a-reciprocal-tariff-to-rectify-trade-practices-that-contribute-to-large-and-persistent-annual-united-states-goods-trade-deficits/" target="_blank" rel="noreferrer">Regulating Imports with a Reciprocal Tariff to Rectify Trade Practices that Contribute to Large and Persistent Annual United States Goods Trade Deficits</a>
              ) became effective. These additional tariffs ranged from 11% for Cameroon to 50% for Lesotho. On April 9, 2025,
              {' '}
              <a href="https://truthsocial.com/@realDonaldTrump/posts/114309144289505174" target="_blank" rel="noreferrer">President Trump</a>
              {' '}
              announced a “90-day pause, and a substantially lowered Reciprocal Tariff during this period, of 10%, also effective immediately.”
            </p>
            <p>The “reciprocal tariffs” had been calculated by dividing the U.S. trade deficit with each country, by the total U.S. imports from that country, and then dividing the result by two. These tariffs are based on 2024 deficits trade in trade in goods. The tariff rates imposed by each one of the U.S. trading partners do not consider the balance of trade in services. </p>
            <p>For Canada and Mexico, imports that comply with the USMCA rules of origin continue to enjoy duty free treatment. For goods that do not comply with USMCA rules of origin a 25% tariff will apply, in line with IEEPA. If the IEEPA related tariffs are lifted, non-USMCA products from Canada and Mexico will face a 12% reciprocal tariff.</p>
            <p>Energy products from Canada will face a 10% import duty. </p>
            <p>Annex II introduced a list of products that were exempt from reciprocal tariffs such as minerals, coal, oil, pharmaceuticals, semiconductors, and lumber, although, in the future, sector-specific tariffs may still be applied to them.</p>
          </div>
        </li>
      </ul>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
