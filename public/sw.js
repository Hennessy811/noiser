if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js');
      let i = Promise.resolve();
      return (
        r[e] ||
          (i = new Promise(async i => {
            if ('document' in self) {
              const r = document.createElement('script');
              (r.src = e), document.head.appendChild(r), (r.onload = i);
            } else importScripts(e), i();
          })),
        i.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    i = (i, r) => {
      Promise.all(i.map(e)).then(e => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(i) };
  self.define = (i, a, d) => {
    r[i] ||
      (r[i] = Promise.resolve().then(() => {
        let r = {};
        const o = { uri: location.origin + i.slice(1) };
        return Promise.all(
          a.map(i => {
            switch (i) {
              case 'exports':
                return r;
              case 'module':
                return o;
              default:
                return e(i);
            }
          })
        ).then(e => {
          const i = d(...e);
          return r.default || (r.default = i), r;
        });
      }));
  };
}
define('./sw.js', ['./workbox-63c7f267'], function (e) {
  self.addEventListener('message', e => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'android-chrome-192x192.png', revision: '384f516a0c4c716dcd6296b4f1771379' },
        { url: 'android-chrome-384x384.png', revision: '1710a18c7b8a781f5d89ed623947a8f9' },
        { url: 'apple-touch-icon.png', revision: '8b86ca853271c3ef930de93fa3553794' },
        { url: 'asset-manifest.json', revision: '204789da9324369b25079223b393a54f' },
        { url: 'audio/airplane.mp3', revision: '67fb165e53dfd3b6b7c9fbd4d845175f' },
        { url: 'audio/birds.mp3', revision: '32cef3fbfbc16f56bf0deec1857b2cd8' },
        { url: 'audio/cafe.mp3', revision: '576a8d78d38e8cc6eaf1474917e54425' },
        { url: 'audio/city.mp3', revision: '084ddf4af2ea7c897b63bdef9188a094' },
        { url: 'audio/fan.mp3', revision: '47e421bb996fadec1ce6622a57508fcc' },
        { url: 'audio/fire.mp3', revision: '59169cf4faf70b236d6bac659012093b' },
        { url: 'audio/forest_rain.mp3', revision: '2ae468b741044d186d9e74ba7e42745c' },
        { url: 'audio/garden.mp3', revision: '45e8001c054dd3943f3423dc7161a0cd' },
        { url: 'audio/gravel_walk.mp3', revision: 'ffbf1a17e30ba7454d6a051c6261dfd5' },
        { url: 'audio/office.mp3', revision: '1971bbaf776054819e66663063aa550a' },
        { url: 'audio/omnious.mp3', revision: '4c1f32786054deec2b5d54e877d62be0' },
        { url: 'audio/purr.mp3', revision: 'dd7ef3ff978019b15b731899e0ed4e71' },
        { url: 'audio/railway.mp3', revision: '4f2736390c163a0a0179d4861d10cd33' },
        { url: 'audio/rain.mp3', revision: 'e62f097776200c1bd43244c47a482a9e' },
        { url: 'audio/soft_wind.mp3', revision: '89d54c72d50359178657da125cbc4b54' },
        { url: 'audio/space.mp3', revision: 'd713e5a46b68f2ea8c942d483e7a5516' },
        { url: 'audio/storm.mp3', revision: 'e6fcbbf61ba6b4c6c0867e6657eda14d' },
        { url: 'audio/summer-night.mp3', revision: '380893a6f9a78e3ee48cf866b9ba1f83' },
        { url: 'audio/waves.mp3', revision: '88a753f1ff5ead67306447e0e7b3454e' },
        { url: 'audio/white noise.mp3', revision: 'fbe0a032fbd9442bb841ffc922be0313' },
        { url: 'audio/windy_forest.mp3', revision: 'a0b6a3b99cef2a677a44789294cdb7a9' },
        { url: 'browserconfig.xml', revision: 'a493ba0aa0b8ec8068d786d7248bb92c' },
        { url: 'favicon-16x16.png', revision: 'afc4d4f2eef634d323a19f132bbbfc53' },
        { url: 'favicon-32x32.png', revision: 'be48734742db7d9b2e10cd5f067976cf' },
        { url: 'favicon.ico', revision: '7b22c2fa707bd64b5dae1e8be28175a1' },
        { url: 'index.html', revision: '9e352fba20fe830a7c6be77008714eb1' },
        { url: 'logo192.png', revision: '5a60411726275fc4f53901dc0e0a8799' },
        { url: 'logo512.png', revision: '6604f1b97a99363e21fd9047106a43bd' },
        { url: 'manifest.json', revision: 'b2e539e131fad80380359bc998659eb3' },
        { url: 'mstile-150x150.png', revision: '18195ba1e4ceeaaaaeafd5815a2d7348' },
        { url: 'robots.txt', revision: '61c27d2cd39a713f7829422c3d9edcc7' },
        { url: 'safari-pinned-tab.svg', revision: 'dc177230f65ae7015d0548e08532da9b' },
        { url: 'service-worker.js', revision: 'c60425869629bd849e34dd8f3a4c5375' },
        { url: 'site.webmanifest', revision: '57425a403714747b47dd0c0b3524a5f1' },
        { url: 'static/css/main.7012ac67.chunk.css', revision: '61136b192eb68dd9546c065e031eebf6' },
        { url: 'static/js/2.096deca0.chunk.js', revision: '97623f1fc31ce3f179ceff5421303a57' },
        { url: 'static/js/2.096deca0.chunk.js.LICENSE.txt', revision: '4d9657bcd5e5c940821d8ae615549b27' },
        { url: 'static/js/main.4e577889.chunk.js', revision: 'a1e67d9684c34b3e5fb2022a880b4ffa' },
        { url: 'static/js/runtime-main.3a9b52e3.js', revision: '6497092f955442dc123e565689ca1fff' },
      ],
      {}
    );
});
//# sourceMappingURL=sw.js.map
