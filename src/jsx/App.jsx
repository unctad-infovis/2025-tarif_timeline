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
          <div className="title"><h3>America First Trade Policy</h3></div>
          <div className="descr">
            <ul>
              <li>
                <a href="https://www.whitehouse.gov/presidential-actions/2025/01/america-first-trade-policy/" target="_blank" rel="noreferrer">America First Trade Policy</a>
                : recomends the use of tariff for US economic interests, national security, industrial competitiveness.
              </li>
              <li>Market access and value chains implications for developing countries.</li>
              <li>Led the way to new tariffs across the board, for specific countries and sector.</li>
            </ul>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">February 13, 2025</div>
          <div className="title"><h3>Fair and reciprocal plan</h3></div>
          <div className="descr">
            <ul>
              <li>Announced intention to determine the equivalent of a “reciprocal tariff” for each trading partner, moving away from WTO MFN.</li>
              <li>Reciprocal tariffs to cover tariffs, Non-Tariff Barriers, subsidies, exchange rates effects, and discriminatory taxes.</li>
            </ul>
          </div>
        </li>
        <li style={{ '--accent-color': '#009edb' }}>
          <div className="date">March 12, 2025</div>
          <div className="title"><h3>Worldwide 25% tariffs on steel and aluminum</h3></div>
          <div className="descr">
            <ul>
              <li>Tariffs on steel reinstated, increased to 25%. Tariff on aluminum also at 25%.</li>
              <li>No exceptions, but no additional reciprocal tariffs on steel and aluminum.</li>
            </ul>
          </div>
        </li>
        <li style={{ '--accent-color': '#009edb' }}>
          <div className="date">March 24, 2025</div>
          <div className="title"><h3>Tariffs related to Venezuelan oil</h3></div>
          <div className="descr">

            <ul>
              <li>25% tariff on all imports from any countries that import Venezuelan oil.</li>
              <li>Additional to other tariffs.</li>
            </ul>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 2, 2025</div>
          <div className="title"><h3>Announcement of reciprocal tariffs worldwide</h3></div>
          <div className="descr">
            <ul>
              <li>US announced national emergency on trade deficit.</li>
              <li>To be addressed by tariffs on all imports from all partners.</li>
            </ul>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 3, 2025</div>
          <div className="title"><h3>Automobiles and autoparts</h3></div>
          <div className="descr">
            <ul>
              <li>25% on all automobiles and parts, from May 3, 2025.</li>
              <li>For Canada, Mexico, parts with US content parts are exempted.</li>
            </ul>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 5, 2025</div>
          <div className="title"><h3>Additional 10% reciprocal tariffs become effective</h3></div>
          <div className="descr">
            <ul>
              <li>10% tariff across the board</li>
              <li>Products in annex II are exempted</li>
            </ul>
          </div>
        </li>
        <li style={{ '--accent-color': '#ffcb05' }}>
          <div className="date">April 9, 2025</div>
          <div className="title"><h3>Additional specific-country tariffs become effective – then paused</h3></div>
          <div className="descr">
            <ul>
              <li>57 trading partners imposed with “reciprocal tariffs” ranging 11-50%.</li>
              <li>List includes LDCs, SIDS, African countries, small vulnerable economies.</li>
              <li>Tariff based on formula using US bilateral trade deficit.</li>
              <li>Some products, including energy, minerals, pharmaceuticals, semiconductors, are exempted.</li>
            </ul>
          </div>
        </li>
      </ul>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
