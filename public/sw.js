if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/7112840a-a347a1fb78cc3c47.js",revision:"a347a1fb78cc3c47"},{url:"/_next/static/chunks/908-ad1a5d528930f466.js",revision:"ad1a5d528930f466"},{url:"/_next/static/chunks/framework-64ad27b21261a9ce.js",revision:"64ad27b21261a9ce"},{url:"/_next/static/chunks/main-936c405598afc18c.js",revision:"936c405598afc18c"},{url:"/_next/static/chunks/pages/4444-43a31fe12fb8346e.js",revision:"43a31fe12fb8346e"},{url:"/_next/static/chunks/pages/ApiTest-442fe42ea437f1c9.js",revision:"442fe42ea437f1c9"},{url:"/_next/static/chunks/pages/Firebase-1a24c97c26948454.js",revision:"1a24c97c26948454"},{url:"/_next/static/chunks/pages/_app-0e3102dbeceafbf3.js",revision:"0e3102dbeceafbf3"},{url:"/_next/static/chunks/pages/_error-b5c7761f867a4539.js",revision:"b5c7761f867a4539"},{url:"/_next/static/chunks/pages/index-7ffdbff5e4df4a30.js",revision:"7ffdbff5e4df4a30"},{url:"/_next/static/chunks/pages/test-c6a4968b2b12884c.js",revision:"c6a4968b2b12884c"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/93d054dc6313c057.css",revision:"93d054dc6313c057"},{url:"/_next/static/fNhBhHgSIGtEPx4EcCNoI/_buildManifest.js",revision:"3e3ec530905584155cfb974dc0a98682"},{url:"/_next/static/fNhBhHgSIGtEPx4EcCNoI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/ck.jpg",revision:"09e512ed73ce26226000d5c1fc446fa3"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/Thumbs.db",revision:"6bca69dcdd69ee992be2c7529010980a"},{url:"/icons/icons-192.png",revision:"a35eaf50d1ad5898429aae3f2ecdfbe4"},{url:"/icons/icons-512.png",revision:"60b49b57fd702ab01a5511cfcacc3b8f"},{url:"/icons/icons-540x720.png",revision:"f65604ab79bf3077485b2b0ee91d3603"},{url:"/icons/icons-720x540.png",revision:"cce4d6e5f11282d923f0c1f6c6f4beb7"},{url:"/img_01.jpg",revision:"2c60aad5045c3a52833e6bf1e37f6eef"},{url:"/loading.gif",revision:"8ddb6fbb59e42a3e1b0cf51acbc6788e"},{url:"/manifest.json",revision:"5dd0a831f57295d607df672681fe94ba"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));