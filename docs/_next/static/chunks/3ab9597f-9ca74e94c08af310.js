"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{76437:function(e,t,r){r.d(t,{rB:function(){return sH},rr:function(){return pt},sv:function(){return n$}});var n=r(89005),i=r(68893),a=r(53989),o=r(2265),s=r(63858),l=r(58118),c=r(37786),d=r(3754),h=r(99434),u=r(40739),p=r(18482),m=r(57437),g=r(93925),f=r(20920),y=r(9784),w=r(36393),x=r(86080),v=r(13421),C=r(89649),b=r(13130),_=r(58249),j=r(44785),k=r(9648),E=r(59956),A=r(10506),S=r(20402),T=r(66514),P=r(84573),N=r(82238),R=r(79314),M=r(39422),O=r(92009),I=r(47899),W=r(14340),L=r(61652),F=r(54515),U=r(11853),D=r(25032),Z=r(64728),z=r(52985),$=r(47193),H=r(69992),B=r(94023),q=r.n(B),V=r(4811),G=r(92861),K=r(76218),Y=r(87335),Q=r(57470),X=r(89651),J=r(75514),ee=r(19783),et=r(58789),er=r(85130),en=r(50607),ei=r(22594),ea=r(75752),eo=r(58900),es=r(33009),el=r(12560),ec=r(90196),ed=r(13934),eh=r(44011),eu=r(64954),ep=r(59808),em=r(24609),eg=r(75006),ef=r(24967),ey=r(51834),ew=r(78299),ex=r(26930),ev=r(59488),eC=r(54621),eb=r(27762),e_=r(29765),ej=r(24167),ek=r(5620),eE=r(74634),eA=r(70882),eS=r(22091),eT=r(2825),eP=r(68906),eN=r(84351),eR=r(63722),eM=r(62957),eO=r(49601),eI=r(99442),eW=r(5),eL=r(28781),eF=r(43408),eU=r(28257),eD=r(59226),eZ=r(60943),ez=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},e$=(e,t,r)=>(ez(e,t,"read from private field"),r?r.call(e):t.get(e)),eH=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},eB=(e,t,r,n)=>(ez(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),eq=(e,t,r)=>(ez(e,t,"access private method"),r),eV=class extends Error{constructor(e,t,r){super(e),t instanceof Error&&(this.cause=t),this.privyErrorCode=r}toString(){return`${this.type}${this.privyErrorCode?`-${this.privyErrorCode}`:""}: ${this.message}${this.cause?` [cause: ${this.cause}]`:""}`}},eG=class extends eV{constructor(e,t,r,n,i){super(r,n,i),this.type=e,this.status=t}},eK=class extends eV{constructor(e,t,r){super(e,t,r),this.type="client_error"}},eY=class extends eK{constructor(){super("Request timed out",void 0,"client_request_timeout")}},eQ=class extends eV{constructor(e,t,r){super(e,t,r),this.type="connector_error"}},eX=e=>{if(e instanceof eV)return e;if(!(e instanceof h.F))return eJ(e);if(!e.response)return new eG("api_error",null,e.message,e);let{type:t,message:r,error:n,code:i}=e.data;return new eG(t||"ApiError",e.response.status,r||n,e,i)},eJ=e=>e instanceof eV?e:e instanceof Error?new eK(e.message,e):new eK(`Internal error: ${e}`),e0=class extends eK{constructor(){super("Method called before `ready`. Ensure you wait until `ready` is true before calling.")}},e1=class extends eK{constructor(e="Embedded wallet error",t){super(e,t,"unknown_embedded_wallet_error")}},e2=class extends eK{constructor(e="User must be authenticated"){super(e,void 0,"must_be_authenticated")}},e3=class extends eK{constructor(e){super("This application is in development mode and must be upgraded to production to log in new users.",e,"max_accounts_reached")}},e4="/api/v1/sessions",e5="/api/v1/sessions/logout",e6="/api/v1/sessions/fork/recover",e7="/api/v1/oauth/init",e8="/api/v1/oauth/link",e9="/api/v1/analytics_events",te=class{constructor(e){this.meta={token:e}}async authenticate(){if(!this.api)throw new eK("Auth flow has no API instance");try{let e=await this.api.post("/api/v1/custom_jwt_account/authenticate",{token:this.meta.token});return{user:e.user,token:e.token,refresh_token:e.refresh_token,identity_token:e.identity_token,is_new_user:e.is_new_user}}catch(e){throw eX(e)}}async link(){throw Error("Unimplemented")}},tt=class{constructor(e,t){this.meta={email:e,captchaToken:t}}async authenticate(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.email||!this.meta.emailCode)throw new eK("Email and email code must be set prior to calling authenticate.");try{let e=await this.api.post("/api/v1/passwordless/authenticate",{email:this.meta.email,code:this.meta.emailCode});return{user:e.user,token:e.token,refresh_token:e.refresh_token,identity_token:e.identity_token,is_new_user:e.is_new_user}}catch(e){throw eX(e)}}async link(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.email||!this.meta.emailCode)throw new eK("Email and email code must be set prior to calling authenticate.");try{return await this.api.post("/api/v1/passwordless/link",{email:this.meta.email,code:this.meta.emailCode})}catch(e){throw eX(e)}}async sendCodeEmail(e,t){if(!this.api)throw new eK("Auth flow has no API instance");if(e&&(this.meta.email=e),t&&(this.meta.captchaToken=t),!this.meta.email)throw new eK("Email must be set when initialzing authentication.");try{return await this.api.post("/api/v1/passwordless/init",{email:this.meta.email,token:this.meta.captchaToken})}catch(e){throw eX(e)}}},tr=class extends tt{constructor(e,t,r){super(t,r),this.meta={email:t,captchaToken:r,oldAddress:e}}async link(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.email||!this.meta.emailCode||!this.meta.oldAddress)throw new eK("Email, email code, and an old email address must be set prior to calling update.");try{return await this.api.post("/api/v1/passwordless/update",{oldAddress:this.meta.oldAddress,newAddress:this.meta.email,code:this.meta.emailCode})}catch(e){throw eX(e)}}},tn=class{constructor(){this._cache={}}get(e){return this._cache[e]}put(e,t){void 0!==t?this._cache[e]=t:this.del(e)}del(e){delete this._cache[e]}getKeys(){return Object.keys(this._cache)}},ti=class{get(e){let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}put(e,t){void 0!==t?localStorage.setItem(e,JSON.stringify(t)):this.del(e)}del(e){localStorage.removeItem(e)}getKeys(){return Object.entries(localStorage).map(([e])=>e)}};function ta(){try{let e="privy:__session_storage__test",t=new ti;return t.put(e,"blobby"),t.del(e),!0}catch{return!1}}var to="u">typeof window&&window.localStorage?new ti:new tn,ts=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isClover?"Clover":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally||e.isTaho?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0,tl=(e,t)=>{if(!e.isMetaMask)return!1;if(e.isMetaMask&&!t)return!0;if(e.isBraveWallet&&!e._events&&!e._state||"MetaMask"!==ts(e))return!1;if(e.providers){for(let t of e.providers)if(!tl(t))return!1}return!0},tc=()=>!!("phantom"in window&&window?.phantom?.ethereum?.isPhantom),td=()=>{let e=window;if(!e.ethereum)return!1;if(e.ethereum.isCoinbaseWallet)return!0;if(e.ethereum.providers){for(let t of e.ethereum.providers)if(t&&t.isCoinbaseWallet)return!0}return!1},th=(e,t)=>{let r=[],n=[];for(let[i,a]of e.entries())i<t?r.push(a):n.push(a);return[r,n]},tu=e=>!!String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),tp=(e,t)=>{let r=e.slice(0),n=[];for(;r.length;)n.push(r.splice(0,t));return n},tm=(e,t=3,r=4)=>{if(!e)return"";if(t+r+2+3>=e.length)return e;let n=e.slice(0,2+t),i=e.slice(e.length-r,e.length);return`${n}...${i}`},tg=e=>new Promise(t=>setTimeout(t,e)),tf=(e,t={})=>{let r=t.delayMs||150,n=t.maxAttempts||270;return new Promise(async(i,a)=>{let o=!1,s=0;for(;!o&&s<n;){if(t.abortSignal?.aborted)return;e().then(e=>{o=!0,i(e)},(...e)=>{o=!0,a(...e)}),s+=1,await tg(r)}o||a(Error("Exceeded max attempts before resolving function"))})},ty=(e,t,r={},n={})=>{let i=new URL(t,e);for(let[e,t]of Object.entries(r))void 0!==t&&i.searchParams.set(e,t);let a=Object.entries(n);if(a.length>0){let e=new URLSearchParams;for(let[t,r]of a)e.append(t,r);i.hash=e.toString()}return i.href},tw=e=>e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),tx=e=>"string"==typeof e?e:"0x"+e.toString(16);async function tv(e,t,r,n=3e3){let i=!1,a=window;return new Promise(o=>{a.ethereum?s():(window.addEventListener("ethereum#initialized",s,{once:!0}),setTimeout(()=>{s()},n));function s(){if(i)return;i=!0,window.removeEventListener("ethereum#initialized",s);let n=e.getProviders();console.debug("Detected injected providers:",n.map(e=>e.info));let a=[];for(let e of n)t.includes("coinbase_wallet")&&"com.coinbase.wallet"===e.info.rdns||a.push({type:e.info.name.toLowerCase().replace(/\s/g,"_"),eip6963InjectedProvider:e});for(let e of function(){let e=window,t=e.ethereum;if(!t)return[];let r=[];if(t.providers?.length)for(let e of t.providers)e&&r.push(e);return r.push(e.ethereum),r}()){let t=ts(e);if(!n.some(e=>e.info.name===t)){if(tl(e,!0)&&!a.find(e=>"metamask"===e.type)){a.push({type:"metamask",legacyInjectedProvider:e});continue}if("Phantom"===t&&!a.find(e=>"phantom"===e.type)){a.push({type:"phantom",legacyInjectedProvider:e});continue}if("Coinbase Wallet"===t&&!a.find(e=>"coinbase_wallet"===e.type&&r?.coinbaseWallet?.connectionOptions!=="smartWalletOnly")){a.push({type:"coinbase_wallet",legacyInjectedProvider:e});continue}a.find(e=>"unknown_browser_extension"===e.type)||a.push({type:"unknown_browser_extension",legacyInjectedProvider:e})}}o(a)}})}function tC(e){return`eip155:${String(Number(e))}`}var tb=(e,t,r,n)=>{let i=Number(e),a=t.find(e=>e.id===i);if(!a)throw new eQ(`Unsupported chainId ${e}`,4901);return t_(a,r,n)},t_=(e,t,r)=>{let n=e.id,i=Number(e.id),a;if(e.rpcUrls.privyWalletOverride&&e.rpcUrls.privyWalletOverride.http[0])a=e.rpcUrls.privyWalletOverride.http[0];else if(t.rpcUrls&&t.rpcUrls[i])a=t.rpcUrls[i];else if(e.rpcUrls.privy?.http[0]){let t=new URL(e.rpcUrls.privy.http[0]);t.searchParams.append("privyAppId",r),a=t.toString()}else a=e.rpcUrls.public?.http[0]?e.rpcUrls.public.http[0]:e.rpcUrls.default?.http[0];if(!a)throw new eQ(`No RPC url found for ${n}`);return a},tj=(e,t)=>{let r=Number(e),n=t.find(e=>e.id===r);if(!n)throw new eQ(`Unsupported chainId ${e}`,4901);return n.blockExplorers?.default.url},tk=(e,t,r,n)=>{let i=Number(e),a=t.find(e=>e.id===i);if(!a)throw new eQ(`Unsupported chainId ${e}`,4901);return new u.c(a.rpcUrls.privyWalletOverride&&a.rpcUrls.privyWalletOverride.http[0]?a.rpcUrls.privyWalletOverride.http[0]:r.rpcUrls&&r.rpcUrls[i]?r.rpcUrls[i]:a.rpcUrls.privy?.http[0]?{url:a.rpcUrls.privy.http[0],headers:{"privy-app-id":n.appId}}:a.rpcUrls.public?.http[0]?a.rpcUrls.public.http[0]:a.rpcUrls.default?.http[0])},tE=e=>{let t={name:"string",version:"string",chainId:"uint256",verifyingContract:"address",salt:"bytes32"},r=e.types.EIP712Domain??Object.entries(e.domain).map(([e,r])=>{if(null!=r&&"string"==typeof e&&e in t)return{name:e,type:t[e]}}).filter(e=>void 0!==e);return{...e,types:{...e.types,EIP712Domain:r}}},tA=e=>{let t;try{t=new URL(e).hostname}catch{return}for(let[e,r]of Object.entries(tS))if(t.includes(r.hostname))return{walletClientType:e,entry:r}},tS={metamask:{id:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",displayName:"MetaMask",hostname:"metamask.io",mobile:{native:"metamask://",universal:"https://metamask.app.link"}},trust:{id:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",displayName:"Trust",hostname:"trustwallet.com",mobile:{universal:"https://link.trustwallet.com"}},safe:{id:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",displayName:"Safe",hostname:"safe.global",mobile:{universal:"https://app.safe.global/"}},rainbow:{id:"1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",displayName:"Rainbow",hostname:"rainbow.me",mobile:{native:"rainbow://",universal:"https://rnbwapp.com"}},uniswap:{id:"c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",displayName:"Uniswap",hostname:"uniswap.org",mobile:{universal:"https://uniswap.org/app",native:"uniswap://"}},zerion:{id:"ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",displayName:"Zerion",hostname:"zerion.io",mobile:{native:"zerion://",universal:"https://wallet.zerion.io"}},argent:{id:"bc949c5d968ae81310268bf9193f9c9fb7bb4e1283e1284af8f2bd4992535fd6",displayName:"Argent",hostname:"www.argent.xyz",mobile:{universal:"https://www.argent.xyz/app"}},spot:{id:"74f8092562bd79675e276d8b2062a83601a4106d30202f2d509195e30e19673d",displayName:"Spot",hostname:"www.spot-wallet.com",mobile:{universal:"https://spot.so"}},omni:{id:"afbd95522f4041c71dd4f1a065f971fd32372865b416f95a0b1db759ae33f2a7",displayName:"Omni",hostname:"omni.app",mobile:{universal:"https://links.omni.app"}},cryptocom:{id:"f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",displayName:"Crypto.com",hostname:"crypto.com",mobile:{universal:"https://wallet.crypto.com",native:"dfw://"}},blockchain:{id:"84b43e8ddfcd18e5fcb5d21e7277733f9cccef76f7d92c836d0e481db0c70c04",displayName:"Blockchain",hostname:"www.blockchain.com",mobile:{universal:"https://www.blockchain.com"}},safepal:{id:"0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",displayName:"SafePal",hostname:"safepal.com",mobile:{universal:"https://link.safepal.io"}},bitkeep:{id:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",displayName:"BitKeep",hostname:"bitkeep.com",mobile:{universal:"https://bkapp.vip"}},zengo:{id:"9414d5a85c8f4eabc1b5b15ebe0cd399e1a2a9d35643ab0ad22a6e4a32f596f0",displayName:"ZenGo",hostname:"zengo.com",mobile:{universal:"https://get.zengo.com/"}},"1inch":{id:"c286eebc742a537cd1d6818363e9dc53b21759a1e8e5d9b263d0c03ec7703576",displayName:"1inch",hostname:"wallet.1inch.io",mobile:{universal:"https://wallet.1inch.io/wc/"}},binance:{id:"8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",displayName:"Binance",hostname:"www.binance.com",mobile:{universal:"https://app.binance.com/cedefi"}},exodus:{id:"e9ff15be73584489ca4a66f64d32c4537711797e30b6660dbcb71ea72a42b1f4",displayName:"Exodus",hostname:"exodus.com",mobile:{universal:"https://exodus.com/m"}},mew_wallet:{id:"f5b4eeb6015d66be3f5940a895cbaa49ef3439e518cd771270e6b553b48f31d2",displayName:"MEW wallet",hostname:"mewwallet.com",mobile:{universal:"https://mewwallet.com"}},alphawallet:{id:"138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98",displayName:"AlphaWallet",hostname:"alphawallet.com",mobile:{universal:"https://aw.app"}},keyring_pro:{id:"47bb07617af518642f3413a201ec5859faa63acb1dd175ca95085d35d38afb83",displayName:"KEYRING PRO",hostname:"keyring.app",mobile:{universal:"https://keyring.app/"}},mathwallet:{id:"7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26",displayName:"MathWallet",hostname:"mathwallet.org",mobile:{universal:"https://www.mathwallet.org"}},unstoppable:{id:"8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3",displayName:"Unstoppable",hostname:"unstoppabledomains.com",mobile:{universal:"https://unstoppabledomains.com/mobile"}},obvious:{id:"031f0187049b7f96c6f039d1c9c8138ff7a17fd75d38b34350c7182232cc29aa",displayName:"Obvious",hostname:"obvious.technology",mobile:{universal:"https://wallet.obvious.technology"}},ambire:{id:"2c81da3add65899baeac53758a07e652eea46dbb5195b8074772c62a77bbf568",displayName:"Ambire",hostname:"www.ambire.com",mobile:{universal:"https://mobile.ambire.com"}},internet_money_wallet:{id:"dd43441a6368ec9046540c46c5fdc58f79926d17ce61a176444568ca7c970dcd",displayName:"Internet Money Wallet",hostname:"internetmoney.io",mobile:{universal:"https://internetmoney.io"}},coin98:{id:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",displayName:"Coin98",hostname:"coin98.com",mobile:{universal:"https://coin98.services"}},abc_wallet:{id:"b956da9052132e3dabdcd78feb596d5194c99b7345d8c4bd7a47cabdcb69a25f",displayName:"ABC Wallet",hostname:"myabcwallet.io",mobile:{universal:"https://abcwalletconnect.page.link"}},arculus_wallet:{id:"0e4915107da5b3408b38e248f7a710f4529d54cd30e9d12ff0eb886d45c18e92",displayName:"Arculus Wallet",hostname:"www.getarculus.com",mobile:{universal:"https://gw.arculus.co/app"}},haha:{id:"719bd888109f5e8dd23419b20e749900ce4d2fc6858cf588395f19c82fd036b3",displayName:"HaHa",hostname:"www.haha.me",mobile:{universal:"https://haha.me"}},cling_wallet:{id:"942d0e22a7e6b520b0a03abcafc4dbe156a1fc151876e3c4a842f914277278ef",displayName:"Cling Wallet",hostname:"clingon.io",mobile:{universal:"https://cling.carrieverse.com/apple-app-site-association"}},broearn:{id:"8ff6eccefefa7506339201bc33346f92a43118d6ff7d6e71d499d8187a1c56a2",displayName:"Broearn",hostname:"www.broearn.com",mobile:{universal:"https://www.broearn.com/link/wallet/"}},copiosa:{id:"07f99a5d9849bb049d74830012b286f8b238e72b0337933ef22b84947409db80",displayName:"Copiosa",hostname:"copiosa.io",mobile:{universal:"https://copiosa.io/action/"}},burrito_wallet:{id:"8821748c25de9dbc4f72a691b25a6ddad9d7df12fa23333fd9c8b5fdc14cc819",displayName:"Burrito Wallet",hostname:"burritowallet.com",mobile:{universal:"https://burritowallet.com/wc?uri="}},enjin_wallet:{id:"bdc9433ffdaee55d31737d83b931caa1f17e30666f5b8e03eea794bac960eb4a",displayName:"Enjin Wallet",hostname:"enjin.io",mobile:{universal:"https://deeplink.wallet.enjin.io/"}},plasma_wallet:{id:"cbe13eb482c76f1fa401ff4c84d9acd0b8bc9af311ca0620a0b192fb28359b4e",displayName:"Plasma Wallet",hostname:"plasma-wallet.com",mobile:{universal:"https://plasma-wallet.com"}},avacus:{id:"94f785c0c8fb8c4f38cd9cd704416430bcaa2137f27e1468782d624bcd155a43",displayName:"Avacus",hostname:"avacus.cc",mobile:{universal:"https://avacus.app.link"}},bee:{id:"2cca8c1b0bea04ba37dee4017991d348cdb7b826804ab2bd31073254f345b715",displayName:"Bee",hostname:"www.beewallet.app",mobile:{universal:"https://beewallet.app/wc"}},pitaka:{id:"14e5d957c6eb62d3ee8fc6239703ac2d537d7e3552154836ca0beef775f630bc",displayName:"Pitaka",hostname:"pitaka.io",mobile:{universal:"https://app.pitaka.io"}},pltwallet:{id:"576c90ceaea34f29ff0104837cf2b2e23d201be43be1433feeb18d375430e1fd",displayName:"PLTwallet",hostname:"pltwallet.io",mobile:{universal:"https://pltwallet.io/"}},minerva:{id:"49bb9d698dbdf2c3d4627d66f99dd9fe90bba1eec84b143f56c64a51473c60bd",displayName:"Minerva",hostname:"minerva.digital",mobile:{universal:"https://minerva.digital"}},kryptogo:{id:"19418ecfd44963883e4d6abca1adeb2036f3b5ffb9bee0ec61f267a9641f878b",displayName:"KryptoGO",hostname:"kryptogo.com",mobile:{universal:"https://kryptogo.page.link"}},prema:{id:"5b8e33346dfb2a532748c247876db8d596734da8977905a27b947ba1e2cf465b",displayName:"PREMA",hostname:"premanft.com",mobile:{universal:"https://premanft.com"}},slingshot:{id:"d23de318f0f56038c5edb730a083216ff0cce00c1514e619ab32231cc9ec484b",displayName:"Slingshot",hostname:"slingshot.finance",mobile:{universal:"https://app.slingshot.finance"}},kriptonio:{id:"50df7da345f84e5a79aaf617df5167335a4b6751626df2e8a38f07029b3dde7b",displayName:"Kriptonio",hostname:"kriptonio.com",mobile:{universal:"https://app.kriptonio.com/mobile"}},timeless:{id:"9751385960bca290c13b443155288f892f62ee920337eda8c5a8874135daaea8",displayName:"Timeless",hostname:"timelesswallet.xyz",mobile:{universal:"https://timelesswallet.xyz"}},secux:{id:"6464873279d46030c0b6b005b33da6be5ed57a752be3ef1f857dc10eaf8028aa",displayName:"SecuX",hostname:"secuxtech.com",mobile:{universal:"https://wsweb.secuxtech.com"}},bitizen:{id:"41f20106359ff63cf732adf1f7dc1a157176c9b02fd266b50da6dcc1e9b86071",displayName:"Bitizen",hostname:"bitizen.org",mobile:{universal:"https://bitizen.org/wallet"}},blocto:{id:"14e7176536cb3706e221daaa3cfd7b88b7da8c7dfb64d1d241044164802c6bdd",displayName:"Blocto",hostname:"blocto.io",mobile:{universal:"https://blocto.app"}},safemoon:{id:"a0e04f1086aac204d4ebdd5f985c12ed226cd0006323fd8143715f9324da58d1",displayName:"SafeMoon",hostname:"safemoon.com",mobile:{universal:"https://safemoon.com/wc"}},okx_wallet:{id:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",displayName:"OKX Wallet",hostname:"okx.com",mobile:{native:"okex://main"}},rabby_wallet:{id:"18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1",displayName:"Rabby Wallet",hostname:"rabby.io",mobile:{}}};function tT(e){return{name:e.displayName||"",universalLink:e.mobile.universal,deepLink:e.mobile.native}}var tP="WALLETCONNECT_DEEPLINK_CHOICE";function tN(e){return e.startsWith("http://")||e.startsWith("https://")}function tR(e,t){if(tN(e))return tM(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}}function tM(e,t){if(!tN(e))return tR(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}}function tO(e,t){window.open(e,t,"noreferrer noopener")}var tI=class{constructor(e){this.promise=null,this.fn=e}execute(e){return null===this.promise&&(this.promise=(async()=>{try{return await this.fn(e)}finally{this.promise=null}})()),this.promise}},tW=class{constructor(e){this._meta={},this.captchaToken=e,this.startChannelOnce=new tI(this._startChannelOnce.bind(this)),this.pollForReady=new tI(this._pollForReady.bind(this))}get meta(){return this._meta}async authenticate(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.channelToken)throw new eK("Auth flow must be initialized first");try{let e=await this.api.post("/api/v1/farcaster/authenticate",{channel_token:this.meta.channelToken,message:this.message,signature:this.signature,fid:this.fid});if(!e)throw new eK("No response from authentication");return{user:e.user,token:e.token,refresh_token:e.refresh_token,identity_token:e.identity_token,is_new_user:e.is_new_user}}catch(e){throw eX(e)}}async link(){if(!this.api)throw new eK("Auth flow has no API instance");try{return await this.api.post("/api/v1/farcaster/link",{channel_token:this.meta.channelToken,message:this.message,signature:this.signature,fid:this.fid})}catch(e){throw eX(e)}}async _startChannelOnce(){if(!this.api)throw new eK("Auth flow has no API instance");let e=await this.api.post("/api/v1/farcaster/init",{token:this.captchaToken});s.tq&&!s.gn&&e.connect_uri&&tO(e.connect_uri,"_blank"),this._meta={connectUri:e.connect_uri,channelToken:e.channel_token}}async initializeFarcasterConnect(){if(!this.api)throw new eK("Auth flow has no API instance");await this.startChannelOnce.execute()}async _pollForReady(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.channelToken)throw new eK("Auth flow must be initialized first");let e=await this.api.get("/api/v1/farcaster/status",{headers:{"farcaster-channel-token":this.meta.channelToken}});return"completed"===e.state&&(this.message=e.message,this.signature=e.signature,this.fid=e.fid,!0)}},tL="https://auth.privy.io",tF="privy:token",tU="privy-token",tD="privy:refresh_token",tZ="privy:id_token",tz="privy-id-token",t$="privy-session",tH="privy:session_transfer_token",tB="privy:caid",tq=e=>`privy:guest:${e}`,tV=e=>`privy:cross-app:${e}`,tG="privy:state_code",tK="privy:code_verifier",tY="privy:headless_oauth",tQ=e=>`privy:wallet:${e}`,tX="privy:connectors",tJ="privy:connections",t0=1;async function t1(e){let t=new TextEncoder().encode(e);return new Uint8Array(await crypto.subtle.digest("SHA-256",t))}function t2(e){return crypto.getRandomValues(new Uint8Array(e))}var t3=class{constructor(e){this.meta={guestCredential:this.getOrCreateGuestCredential(e)}}getOrCreateGuestCredential(e){let t=tq(e);if(ta()){if(to.get(t))return to.get(t);{let e=p.c(t2(32));return to.put(t,e),e}}return p.c(t2(32))}async authenticate(){if(!this.api)throw new eK("Auth flow has no API instance");try{let e=await this.api.post("/api/v1/guest/authenticate",{guest_credential:this.meta.guestCredential});return{user:e.user,token:e.token,refresh_token:e.refresh_token,identity_token:e.identity_token,is_new_user:e.is_new_user}}catch(e){throw eX(e)}}async link(){throw Error("Linking is not supported for the guest flow")}};function t4(){return p.c(t2(36))}async function t5(e,t="S256"){if("S256"!=t)return e;{let t=await t1(e);return p.c(t)}}function t6(){return!!to.get(tY)}var t7=class{constructor(e){let t="boolean"==typeof e.headless?e.headless:t6();this.meta={...e,headless:t}}addCaptchaToken(e){this.meta.captchaToken=e}isActive(){return!!(this.meta.authorizationCode&&this.meta.stateCode&&this.meta.provider)}async authenticate(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.authorizationCode||!this.meta.stateCode)throw new eK("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenticate.");if("undefined"===this.meta.authorizationCode)throw new eK("User denied confirmation during OAuth flow");let e=function(){let e=to.get(tK);if(!e)throw new eK("Authentication error.");return e}();try{let t=await this.api.post("/api/v1/oauth/authenticate",{authorization_code:this.meta.authorizationCode,state_code:this.meta.stateCode,code_verifier:e});return to.del(tK),this.meta.headless&&to.del(tY),{user:t.user,token:t.token,refresh_token:t.refresh_token,identity_token:t.identity_token,is_new_user:t.is_new_user,oauth_tokens:t.oauth_tokens}}catch(t){let e=eX(t);throw e.privyErrorCode?new eK(e.message||"Invalid code during OAuth flow.",void 0,e.privyErrorCode):"User denied confirmation during OAuth flow"===e.message?new eK("Invalid code during oauth flow.",void 0,"oauth_user_denied"):new eK("Invalid code during OAuth flow.",void 0,"unknown_auth_error")}}async link(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.authorizationCode||!this.meta.stateCode)throw new eK("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling link.");if("undefined"===this.meta.authorizationCode)throw new eK("User denied confirmation during OAuth flow");let e=to.get(tK);if(!e)throw new eK("Authentication error.");try{let t=await this.api.post(e8,{authorization_code:this.meta.authorizationCode,state_code:this.meta.stateCode,code_verifier:e});return to.del(tK),t}catch(e){throw eX(e)}}async getAuthorizationUrl(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.provider)throw new eK("Provider must be set when initializing OAuth authentication.");let e=t4();to.put(tK,e);let t=t4();to.put(tG,t);let r=await t5(e);this.meta.headless&&to.put(tY,!0);try{return await this.api.post(e7,{provider:this.meta.provider,redirect_to:window.location.href,token:this.meta.captchaToken,code_challenge:r,state_code:t})}catch(e){throw eX(e)}}},t8=({style:e,...t})=>(0,m.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",style:{height:"24px",...e},...t,children:[(0,m.jsx)("path",{d:"M17.0722 11.6888C17.0471 8.90571 19.3263 7.56847 19.429 7.50274C18.1466 5.60938 16.153 5.35154 15.4417 5.3212C13.7461 5.14678 12.1306 6.32982 11.269 6.32982C10.4074 6.32982 9.08004 5.34648 7.67246 5.37429C5.82158 5.40209 4.11595 6.45874 3.16171 8.13218C1.24068 11.4942 2.6708 16.4817 4.54423 19.2143C5.46091 20.549 6.55041 22.0531 7.98554 21.9975C9.36803 21.9419 9.88905 21.095 11.5571 21.095C13.2251 21.095 13.696 21.9975 15.1537 21.9697C16.6389 21.9393 17.5806 20.6046 18.4897 19.2648C19.5392 17.7153 19.9725 16.2137 19.9975 16.1354C19.965 16.1228 17.1022 15.0155 17.0722 11.6888Z",fill:"currentColor"}),(0,m.jsx)("path",{d:"M14.3295 3.51373C15.0909 2.58347 15.6043 1.28921 15.4641 0C14.3671 0.0455014 13.0396 0.738135 12.2532 1.66838C11.5494 2.48994 10.9307 3.80695 11.0986 5.07089C12.3183 5.16694 13.5681 4.44145 14.3295 3.51373Z",fill:"currentColor"})]}),t9=({style:e,...t})=>(0,m.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 71 55",style:{height:"24px",...e},...t,children:[(0,m.jsx)("g",{clipPath:"url(#clip0)",children:(0,m.jsx)("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",fill:"#5865F2"})}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0",children:(0,m.jsx)("rect",{width:"71",height:"55",fill:"white"})})})]}),re=({style:e,...t})=>(0,m.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"24",y:"24",viewBox:"0 0 98 96",style:{height:"24px",...e},...t,children:(0,m.jsx)("path",{d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"currentColor"})}),rt=({style:e})=>(0,m.jsx)(g.Z,{style:{color:"var(--privy-color-error)",...e}}),rr=({style:e,...t})=>(0,m.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"26px",width:"26px",...e},...t,children:[(0,m.jsx)("path",{d:"M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z",fill:"#4285F4"}),(0,m.jsx)("path",{d:"M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.575C14.74 18.235 13.48 18.625 12 18.625C9.13504 18.625 6.71004 16.69 5.84504 14.09H2.17004V16.94C3.98004 20.535 7.70004 23 12 23Z",fill:"#34A853"}),(0,m.jsx)("path",{d:"M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.59286 0.999321 10.2846 1 12C1 13.775 1.425 15.455 2.17 16.94L5.845 14.09Z",fill:"#FBBC05"}),(0,m.jsx)("path",{d:"M12 5.375C13.615 5.375 15.065 5.93 16.205 7.02L19.36 3.865C17.455 2.09 14.965 1 12 1C7.70004 1 3.98004 3.465 2.17004 7.06L5.84504 9.91C6.71004 7.31 9.13504 5.375 12 5.375Z",fill:"#EA4335"})]});function rn(e){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:26,height:26,viewBox:"0 0 140 140",x:"0px",y:"0px",fill:"none",...e,children:[(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",{id:"b",children:[(0,m.jsx)("stop",{offset:"0",stopColor:"#3771c8"}),(0,m.jsx)("stop",{stopColor:"#3771c8",offset:".128"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#60f",stopOpacity:"0"})]}),(0,m.jsxs)("linearGradient",{id:"a",children:[(0,m.jsx)("stop",{offset:"0",stopColor:"#fd5"}),(0,m.jsx)("stop",{offset:".1",stopColor:"#fd5"}),(0,m.jsx)("stop",{offset:".5",stopColor:"#ff543e"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#c837ab"})]}),(0,m.jsx)("radialGradient",{id:"c",cx:"158.429",cy:"578.088",r:"65",xlinkHref:"#a",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(0 -1.98198 1.8439 0 -1031.402 454.004)",fx:"158.429",fy:"578.088"}),(0,m.jsx)("radialGradient",{id:"d",cx:"147.694",cy:"473.455",r:"65",xlinkHref:"#b",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)",fx:"147.694",fy:"473.455"})]}),(0,m.jsx)("path",{fill:"url(#c)",d:"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z",transform:"translate(1.004 1)"}),(0,m.jsx)("path",{fill:"url(#d)",d:"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z",transform:"translate(1.004 1)"}),(0,m.jsx)("path",{fill:"#fff",d:"M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"})]})}function ri({style:e,...t}){return(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0,0,256,256",style:{height:"26px",width:"26px",...e},...t,children:(0,m.jsx)("g",{fill:"#0077b5",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",style:{mixBlendMode:"normal"},children:(0,m.jsx)("g",{transform:"scale(5.12,5.12)",children:(0,m.jsx)("path",{d:"M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"})})})})}function ra(e){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...e,children:[(0,m.jsx)("path",{fill:"#1ed760",d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"}),(0,m.jsx)("path",{d:"M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"})]})}function ro(e){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 293768 333327",width:24,height:24,...e,children:[(0,m.jsx)("path",{fill:"#26f4ee",d:"M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z"}),(0,m.jsx)("path",{fill:"#fb2c53",d:"M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z"}),(0,m.jsx)("path",{d:"M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z",fill:"#000000"})]})}var rs=({style:e,...t})=>(0,m.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"24px",width:"24px",...e},...t,children:(0,m.jsx)("path",{d:"M 14.285156 10.171875 L 23.222656 0 L 21.105469 0 L 13.34375 8.832031 L 7.148438 0 L 0 0 L 9.371094 13.355469 L 0 24.019531 L 2.117188 24.019531 L 10.308594 14.691406 L 16.851562 24.019531 L 24 24.019531 M 2.878906 1.5625 L 6.132812 1.5625 L 21.101562 22.535156 L 17.851562 22.535156",fill:"currentColor"})}),rl={google:{name:"Google",component:rr},discord:{name:"Discord",component:t9},github:{name:"Github",component:re},linkedin:{name:"LinkedIn",component:ri},twitter:{name:"Twitter",component:rs},spotify:{name:"Spotify",component:ra},instagram:{name:"Instagram",component:rn},tiktok:{name:"Tiktok",component:ro},apple:{name:"Apple",component:t8}},rc=e=>e in rl?rl[e]:{name:"Unknown",component:rt};function rd(){let e=new URL(window.location.href);e.searchParams.delete("privy_oauth_code"),e.searchParams.delete("privy_oauth_provider"),e.searchParams.delete("privy_oauth_state"),to.del(tG),window.history.replaceState({},"",e)}var rh=class{constructor(e){this.initAuthenticateOnce=new tI(this._initAuthenticateOnce.bind(this)),this.initLinkOnce=new tI(this._initLinkOnce.bind(this)),this.meta={captchaToken:e}}async initAuthenticationFlow(){if(!this.api)throw new eK("Auth flow has no API instance");this.meta.initAuthenticateResponse=await this.initAuthenticateOnce.execute()}async initLinkFlow(){if(!this.api)throw new eK("Auth flow has no API instance");this.meta.initLinkResponse=await this.initLinkOnce.execute()}async authenticate(){let e=await r.e(550).then(r.bind(r,74550));if(!this.api)throw new eK("Auth flow has no API instance");if(!e.browserSupportsWebAuthn())throw new eK("WebAuthn is not supported in this browser");this.meta.initAuthenticateResponse||(this.meta.initAuthenticateResponse=await this.initAuthenticateOnce.execute());try{let t=await e.startAuthentication(this._transformInitAuthenticateOptionsToCamelCase(this.meta.initAuthenticateResponse.options)),r=await this.api.post("/api/v1/passkeys/authenticate",{relying_party:this.meta.initAuthenticateResponse.relying_party,challenge:this.meta.initAuthenticateResponse.options.challenge,authenticator_response:this._transformAuthenticationResponseToSnakeCase(t)});return{user:r.user,token:r.token,refresh_token:r.refresh_token,is_new_user:r.is_new_user}}catch(e){throw"NotAllowedError"===e.name?new eK("Passkey request timed out or rejected by user.",void 0,"passkey_not_allowed"):eX(e)}}async link(){let e=await r.e(550).then(r.bind(r,74550));if(!this.api)throw new eK("Auth flow has no API instance");if(!e.browserSupportsWebAuthn())throw new eK("WebAuthn is not supported in this browser");this.meta.initLinkResponse||(this.meta.initLinkResponse=await this.initLinkOnce.execute());try{let t=this.meta.initLinkResponse.options,r=await e.startRegistration(this._transformInitLinkOptionsToCamelCase(t));return await this.api.post("/api/v1/passkeys/link",{relying_party:this.meta.initLinkResponse.relying_party,authenticator_response:this._transformRegistrationResponseToSnakeCase(r)})}catch(e){throw"NotAllowedError"===e.name?new eK("Passkey request timed out or rejected by user.",void 0,"passkey_not_allowed"):eX(e)}}async _initAuthenticateOnce(){if(!this.api)throw new eK("Auth flow has no API instance");return await this.api.post("/api/v1/passkeys/authenticate/init",{token:this.meta.captchaToken})}async _initLinkOnce(){if(!this.api)throw new eK("Auth flow has no API instance");return await this.api.post("/api/v1/passkeys/link/init",{})}_transformInitLinkOptionsToCamelCase(e){return{rp:e.rp,user:{id:e.user.id,name:e.user.name,displayName:e.user.display_name},challenge:e.challenge,pubKeyCredParams:e.pub_key_cred_params.map(e=>({type:e.type,alg:e.alg})),timeout:e.timeout,excludeCredentials:e.exclude_credentials?.map(e=>({id:e.id,type:e.type,transports:e.transports})),authenticatorSelection:{authenticatorAttachment:e.authenticator_selection?.authenticator_attachment,requireResidentKey:e.authenticator_selection?.require_resident_key,residentKey:e.authenticator_selection?.resident_key,userVerification:e.authenticator_selection?.user_verification},attestation:e.attestation,extensions:{appid:e.extensions?.app_id,credProps:e.extensions?.cred_props?.rk,hmacCreateSecret:e.extensions?.hmac_create_secret}}}_transformRegistrationResponseToSnakeCase(e){return{id:e.id,raw_id:e.rawId,response:{client_data_json:e.response.clientDataJSON,attestation_object:e.response.attestationObject,authenticator_data:e.response.authenticatorData},authenticator_attachment:e.authenticatorAttachment,client_extension_results:{app_id:e.clientExtensionResults.appid,cred_props:e.clientExtensionResults.credProps,hmac_create_secret:e.clientExtensionResults.hmacCreateSecret},type:e.type}}_transformInitAuthenticateOptionsToCamelCase(e){return{challenge:e.challenge,allowCredentials:e.allow_credentials?.map(e=>({id:e.id,type:e.type,transports:e.transports}))||[],timeout:e.timeout,extensions:{appid:e.extensions?.app_id,credProps:e.extensions?.cred_props,hmacCreateSecret:e.extensions?.hmac_create_secret},userVerification:e.user_verification}}_transformAuthenticationResponseToSnakeCase(e){return{id:e.id,raw_id:e.rawId,response:{client_data_json:e.response.clientDataJSON,authenticator_data:e.response.authenticatorData,signature:e.response.signature,user_handle:e.response.userHandle},authenticator_attachment:e.authenticatorAttachment,client_extension_results:{app_id:e.clientExtensionResults.appid,cred_props:e.clientExtensionResults.credProps,hmac_create_secret:e.clientExtensionResults.hmacCreateSecret},type:e.type}}},ru=({address:e,chainId:t,nonce:r})=>{let n=window.location.host,i=window.location.origin,a=new Date().toISOString();return`${n} wants you to sign in with your Ethereum account:
${e}

By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.

URI: ${i}
Version: 1
Chain ID: ${t}
Nonce: ${r}
Issued At: ${a}
Resources:
- https://privy.io`},rp=class{constructor(e,t,r){this.getNonceOnce=new tI(this._getNonceOnce.bind(this)),this.wallet=e,this.captchaToken=r,this.client=t}get meta(){return{connectorType:this.wallet.connectorType,walletClientType:this.wallet.walletClientType}}async authenticate(){if(!this.client)throw new eK("SiweFlow has no client instance");try{let{message:e,signature:t}=await this.sign(),r=await this.client.authenticateWithSiweInternal({message:e,signature:t,chainId:this.wallet.chainId,walletClientType:this.wallet.walletClientType,connectorType:this.wallet.connectorType});return{user:r.user,token:r.token,refresh_token:r.refresh_token,identity_token:r.identity_token,is_new_user:r.is_new_user}}catch(e){throw eX(e)}}async link(){if(!this.client)throw new eK("SiweFlow has no client instance");try{let{message:e,signature:t}=await this.sign();return await this.client.linkWithSiweInternal({message:e,signature:t,chainId:this.wallet.chainId,walletClientType:this.wallet.walletClientType,connectorType:this.wallet.connectorType})}catch(e){throw eX(e)}}async sign(){if(!this.client)throw new eK("SiweFlow has no client instance");if(await this.buildSiweMessage(),!this.preparedMessage)throw new eK("Could not prepare SIWE message");let e=await this.wallet.sign(this.preparedMessage);return{message:this.preparedMessage,signature:e}}async _getNonceOnce(){if(!this.client)throw new eK("SiweFlow has no client instance");return await this.client.generateSiweNonce({address:this.wallet.address,captchaToken:this.captchaToken})}async buildSiweMessage(){if(!this.client)throw new eK("SiweFlow has no client instance");let e=this.wallet.address,t=this.wallet.chainId.replace("eip155:","");return this.nonce||(this.nonce=await this.getNonceOnce.execute()),this.preparedMessage=ru({address:e,chainId:t,nonce:this.nonce}),this.preparedMessage}},rm=class{constructor(e,t){this.meta={phoneNumber:e,captchaToken:t}}async authenticate(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.phoneNumber||!this.meta.smsCode)throw new eK("phone number and sms code must be set prior to calling authenticate.");try{let e=await this.api.post("/api/v1/passwordless_sms/authenticate",{phoneNumber:this.meta.phoneNumber,code:this.meta.smsCode});return{user:e.user,token:e.token,refresh_token:e.refresh_token,identity_token:e.identity_token,is_new_user:e.is_new_user}}catch(e){throw eX(e)}}async link(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.phoneNumber||!this.meta.smsCode)throw new eK("phone number and sms code must be set prior to calling authenticate.");try{return await this.api.post("/api/v1/passwordless_sms/link",{phoneNumber:this.meta.phoneNumber,code:this.meta.smsCode})}catch(e){throw eX(e)}}async sendSmsCode(e,t){if(!this.api)throw new eK("Auth flow has no API instance");if(e&&(this.meta.phoneNumber=e),t&&(this.meta.captchaToken=t),!this.meta.phoneNumber)throw new eK("phone nNumber must be set when initialzing authentication.");try{return await this.api.post("/api/v1/passwordless_sms/init",{phoneNumber:this.meta.phoneNumber,token:this.meta.captchaToken})}catch(e){throw eX(e)}}},rg=class extends rm{constructor(e,t,r){super(t,r),this.meta={phoneNumber:t,captchaToken:r,oldPhoneNumber:e}}async link(){if(!this.api)throw new eK("Auth flow has no API instance");if(!this.meta.phoneNumber||!this.meta.smsCode||!this.meta.oldPhoneNumber)throw new eK("Phone number, sms code, and an old phone number must be set prior to calling update.");try{return await this.api.post("/api/v1/passwordless_sms/update",{old_phone_number:this.meta.oldPhoneNumber,new_phone_number:this.meta.phoneNumber,code:this.meta.smsCode})}catch(e){throw eX(e)}}},rf=class{constructor(e){this.meta={captchaToken:e}}async authenticate(){if(!this.api)throw new eK("Auth flow has no API instance");try{let e=await this.api.post("/api/v1/telegram/authenticate",{captcha_token:this.meta.captchaToken,telegram_auth_result:this.meta.telegramAuthResult,telegram_web_app_data:this.meta.telegramWebAppData});return{user:e.user,token:e.token,refresh_token:e.refresh_token,identity_token:e.identity_token,is_new_user:e.is_new_user}}catch(e){throw eX(e)}}async link(){if(!this.api)throw new eK("Auth flow has no API instance");try{return await this.api.post("/api/v1/telegram/link",{telegram_auth_result:this.meta.telegramAuthResult,telegram_web_app_data:this.meta.telegramWebAppData})}catch(e){throw eX(e)}}};function ry(e){let t={detail:"",retryable:!1};return e?.privyErrorCode==="linked_to_another_user"&&(t.detail="This account has already been linked to another user."),e?.privyErrorCode==="disallowed_login_method"&&(t.detail="Login with Telegram not allowed."),e?.privyErrorCode==="invalid_data"&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode==="cannot_link_more_of_type"&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode==="invalid_credentials"&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode==="too_many_requests"&&(t.detail="Too many requests. Please wait before trying again."),e?.privyErrorCode==="too_many_requests"&&e.message.includes("rate limit")&&(t.detail="Request limit reached for Telegram. Please wait a moment and try again."),t}function rw(){let e=new URL(window.location.href);e.searchParams.delete("id"),e.searchParams.delete("hash"),e.searchParams.delete("auth_date"),e.searchParams.delete("first_name"),e.searchParams.delete("last_name"),e.searchParams.delete("username"),e.searchParams.delete("photo_url"),window.history.replaceState({},"",e)}function rx(e){return e?new Date(1e3*e):null}function rv(e,t){return e.slice().sort((e,t)=>(t.firstVerifiedAt??t.verifiedAt).getTime()-(e.firstVerifiedAt??e.verifiedAt).getTime()).find(e=>e.type===t)}var rC=e=>e?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&!e.imported&&"ethereum"===e.chainType)||null,rb=e=>e?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&!e.imported&&"solana"===e.chainType)||null,r_=e=>e?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&e.imported&&"ethereum"===e.chainType)||null,rj=e=>e.linkedAccounts.filter(e=>"wallet"===e.type),rk=(e,t)=>!(rC(e)||rb(e))&&("all-users"===t||"users-without-wallets"===t&&!rj(e)?.length);function rE(e){if(!e)return null;let t=function(e){let t=[];for(let r of e){let e=r.type;switch(r.type){case"wallet":let n={address:r.address,type:r.type,imported:r.imported,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at),chainType:r.chain_type,chainId:r.chain_id,walletClient:"privy"===r.wallet_client_type?"privy":"unknown",walletClientType:r.wallet_client_type,connectorType:r.connector_type,recoveryMethod:r.recovery_method};t.push(n);break;case"cross_app":let i={type:r.type,subject:r.subject,embeddedWallets:r.embedded_wallets,smartWallets:r.smart_wallets,providerApp:{id:r.provider_app_id},verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(i);break;case"email":let a={address:r.address,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(a);break;case"phone":let o={number:r.phoneNumber,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(o);break;case"google_oauth":let s={subject:r.subject,email:r.email,name:r.name,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(s);break;case"spotify_oauth":let l={subject:r.subject,email:r.email,name:r.name,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(l);break;case"instagram_oauth":let c={subject:r.subject,username:r.username,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(c);break;case"twitter_oauth":let d={subject:r.subject,username:r.username,name:r.name,type:r.type,profilePictureUrl:r.profile_picture_url,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(d);break;case"discord_oauth":let h={subject:r.subject,username:r.username,email:r.email,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(h);break;case"github_oauth":let u={subject:r.subject,username:r.username,name:r.name,email:r.email,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(u);break;case"tiktok_oauth":let p={subject:r.subject,username:r.username,name:r.name,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(p);break;case"linkedin_oauth":let m={subject:r.subject,name:r.name,email:r.email,vanityName:r.vanity_name,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(m);break;case"apple_oauth":let g={subject:r.subject,email:r.email,type:r.type,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(g);break;case"custom_auth":t.push({type:r.type,customUserId:r.custom_user_id,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)});break;case"farcaster":let f={type:r.type,fid:r.fid,ownerAddress:r.owner_address,displayName:r.display_name,username:r.username,bio:r.bio,pfp:r.profile_picture_url,url:r.homepage_url,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at),signerPublicKey:r.signer_public_key};t.push(f);break;case"passkey":let y={type:r.type,enrolledInMfa:r.enrolled_in_mfa,credentialId:r.credential_id,authenticatorName:r.authenticator_name,createdWithDevice:r.created_with_device,createdWithOs:r.created_with_os,createdWithBrowser:r.created_with_browser,verifiedAt:rx(r.verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(y);break;case"telegram":let w={type:r.type,telegramUserId:r.telegram_user_id,firstName:r.first_name,lastName:r.last_name,username:r.username,photoUrl:r.photo_url,verifiedAt:rx(r.first_verified_at),firstVerifiedAt:rx(r.first_verified_at),latestVerifiedAt:rx(r.latest_verified_at)};t.push(w);break;default:console.warn(`Unrecognized account type: ${e}. Please consider upgrading the Privy SDK.`)}}return t}(e.linked_accounts),r=rv(t,"wallet"),n=rv(t,"email"),i=rv(t,"phone"),a=rv(t,"google_oauth"),o=rv(t,"twitter_oauth"),s=rv(t,"discord_oauth"),l=rv(t,"github_oauth"),c=rv(t,"spotify_oauth"),d=rv(t,"instagram_oauth"),h=rv(t,"tiktok_oauth"),u=rv(t,"linkedin_oauth"),p=rv(t,"apple_oauth"),m=rv(t,"farcaster"),g=rv(t,"telegram"),f=e.mfa_methods.map(({type:e,verified_at:t})=>({type:e,verifiedAt:rx(t)}));return{id:e.id,createdAt:rx(e.created_at),linkedAccounts:t,email:n&&{address:n?.address},phone:i&&{number:i?.number},wallet:r&&{address:r.address,chainType:r.chainType,chainId:r.chainId,walletClient:r.walletClient,walletClientType:r.walletClientType,connectorType:r.connectorType,recoveryMethod:r.recoveryMethod,imported:r.imported},google:a&&{subject:a.subject,email:a.email,name:a.name},twitter:o&&{subject:o.subject,username:o.username,name:o.name,profilePictureUrl:o.profilePictureUrl},discord:s&&{subject:s.subject,username:s.username,email:s.email},github:l&&{subject:l.subject,username:l.username,name:l.name,email:l.email},spotify:c&&{subject:c.subject,email:c.email,name:c.name},instagram:d&&{subject:d.subject,username:d.username},tiktok:h&&{subject:h.subject,username:h.username,name:h.name},linkedin:u&&{subject:u.subject,name:u.name,email:u.email,vanityName:u.vanityName},apple:p&&{subject:p.subject,email:p.email},farcaster:m&&{fid:m.fid,ownerAddress:m.ownerAddress,displayName:m.displayName,username:m.username,bio:m.bio,pfp:m.pfp,url:m.url,signerPublicKey:m.signerPublicKey},telegram:g&&{telegramUserId:g.telegramUserId,firstName:g.firstName,lastName:g.lastName,username:g.username,photoUrl:g.photoUrl},mfaMethods:f.map(e=>e.type),hasAcceptedTerms:e.has_accepted_terms??!1,isGuest:e.is_guest}}var rA,rS,rT=({style:e,...t})=>(0,m.jsxs)("svg",{width:"1024",height:"1024",viewBox:"0 0 1024 1024",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px",...e},...t,children:[(0,m.jsx)("rect",{width:"1024",height:"1024",fill:"#0052FF",rx:100,ry:100}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z",fill:"white"})]}),rP=["eth_sign","eth_populateTransactionRequest","eth_signTransaction","personal_sign","eth_signTypedData_v4"],rN=e=>rP.includes(e),rR=class extends eQ{constructor(){super("Wallet timeout"),this.type="wallet_error"}},rM=class extends eQ{constructor(){super("User rejected connection"),this.type="wallet_error"}},rO=e=>{if(e instanceof eQ)return e;if(e?.code&&e?.reason){let t=new rW(e);return e.code===v.jK.ACTION_REJECTED&&(t.details=d.M_.E4001_USER_REJECTED_REQUEST),t}return e?.code?new rW(e):new eQ("Unknown connector error",e)},rI=class extends eV{constructor(e,t,r){super(e),this.type="provider_error",this.code=t,this.data=r}},rW=class extends rI{constructor(e){super(e.message,e.code,e.data);let t=Object.values(d.M_).find(t=>t.eipCode===e.code);this.details=t||d.M_.UNKNOWN_ERROR,-32002===e.code&&(e.message?.includes("already pending for origin")?e.message?.includes("wallet_requestPermissions")?this.details=d.M_.E32002_CONNECTION_ALREADY_PENDING:this.details=d.M_.E32002_REQUEST_ALREADY_PENDING:e.message?.includes("Already processing")&&e.message.includes("eth_requestAccounts")&&(this.details=d.M_.E32002_WALLET_LOCKED))}},rL={ERROR_USER_EXISTS:{message:"User already exists for this address",detail:"Try another address!",retryable:!1},ERROR_TIMED_OUT:{message:"Wallet request timed out",detail:"Please try connecting again.",retryable:!0},ERROR_WALLET_CONNECTION:{message:"Could not log in with wallet",detail:"Please try connecting again.",retryable:!0},ERROR_USER_REJECTED_CONNECTION:{message:"You rejected the request",detail:"Please try connecting again.",retryable:!0},...d.M_},rF=class{constructor(e,t){this.removeListener=(e,t)=>{if(this.walletProvider)try{return this.walletProvider.removeListener(e,t)}catch{console.warn("Unable to remove wallet provider listener")}},this.walletTimeout=(e=new rR,t=this.rpcTimeoutDuration)=>new Promise((r,n)=>setTimeout(()=>{n(e)},t)),this.setWalletProvider=e=>{this.walletProvider&&this._subscriptions.forEach(e=>{this.removeListener(e.eventName,e.listener)}),this.walletProvider=e,this._subscriptions.forEach(e=>{this.walletProvider?.on(e.eventName,e.listener)})},this.walletProvider=e,this.rpcTimeoutDuration=t||12e4,this._subscriptions=[]}on(e,t){if(this.walletProvider)return this.walletProvider.on(e,t);this._subscriptions.push({eventName:e,listener:t})}async request(e){if(!this.walletProvider)throw new eQ(`A wallet request of type ${e.method} was made before setting a wallet provider.`);return Promise.race([this.walletProvider.request(e),this.walletTimeout()]).catch(e=>{throw rO(e)})}},rU=class extends Error{constructor(e,t,r){super(e),this.code=t,this.data=r}},rD=class extends w.Z{constructor(e,t,r,n,i,a=1){super(),this.walletProxy=e,this.address=t,this.chainId=a,this.rpcConfig=r,this.chains=n,this.provider=tk(a,this.chains,r,{appId:i}),this.rpcTimeoutDuration=nC(r,"privy"),this.appId=i}async handleSendTransaction(e){if(!e.params||!Array.isArray(e.params))throw new rU(`Invalid params for ${e.method}`,4200);let t=e.params[0];if(!await uK()||!this.address)throw new rU("Disconnected",4900);return(await u6(t)).hash}handleSwitchEthereumChain(e){let t;if(!e.params||!Array.isArray(e.params))throw new rU(`Invalid params for ${e.method}`,4200);if("string"==typeof e.params[0])t=e.params[0];else if("chainId"in e.params[0]&&"string"==typeof e.params[0].chainId)t=e.params[0].chainId;else throw new rU(`Invalid params for ${e.method}`,4200);this.chainId=Number(t),this.provider=tk(this.chainId,this.chains,this.rpcConfig,{appId:this.appId}),this.emit("chainChanged",t)}async handlePersonalSign(e){if(!e.params||!Array.isArray(e.params))throw Error("Invalid params for personal_sign");let t=e.params[0],r=e.params[1];return await u4(t,void 0,r)}async handleSignedTypedData(e){if(!e.params||!Array.isArray(e.params))throw Error("Invalid params for eth_signTypedData_v4");let t="string"==typeof e.params[1]?JSON.parse(e.params[1]):e.params[1];return await u5(tE(t))}async handleEstimateGas(e){if(!e.params||!Array.isArray(e.params))throw Error("Invalid params for eth_estimateGas");delete e.params[0].gasPrice,delete e.params[0].maxFeePerGas,delete e.params[0].maxPriorityFeePerGas;let t={...e.params[0],chainId:tx(this.chainId)};try{return await this.provider.send("eth_estimateGas",[t])}catch(e){console.warn(`Gas estimation failed with error: ${e}. Retrying gas estimation by omitting the 'from' address`);try{return delete t.from,await this.provider.send("eth_estimateGas",[t])}catch(t){throw console.warn(`Gas estimation failed with error: ${t} when omitting the 'from' address`),e}}}async request(e){switch(console.debug("Embedded1193Provider.request() called with args",e),e.method){case"eth_accounts":case"eth_requestAccounts":return this.address?[this.address]:[];case"eth_chainId":return tx(this.chainId);case"eth_estimateGas":return this.handleEstimateGas(e);case"eth_sendTransaction":return this.handleSendTransaction(e);case"wallet_switchEthereumChain":return this.handleSwitchEthereumChain(e);case"personal_sign":return this.handlePersonalSign(e);case"eth_signTypedData_v4":return this.handleSignedTypedData(e)}if(!rN(e.method))return this.provider.send(e.method,e.params);{let t=await uK();if(await u7(),!t||!this.address)throw new rU("Disconnected",4900);try{return(await this.walletProxy.rpc({address:this.address,accessToken:t,request:{method:e.method,params:e.params}})).response.data}catch(e){throw console.error(e),new rU("Disconnected",4900)}}}async connect(){let e=await uK();if(!e||!this.address)return null;try{return(await this.walletProxy.connect({address:this.address,accessToken:e})).address}catch(e){return console.error(e),null}}},rZ=class extends rF{constructor(e){super(e,e.rpcTimeoutDuration)}},rz=class extends rF{constructor(e){super(e,e.rpcTimeoutDuration)}sendAsync(e,t){throw Error("sendAsync is no longer supported by EIP-1193. Use the request method instead.")}},r$=(e,t)=>"coinbase_wallet"===t?e.message.includes("addEthereumChain"):4902===e.code||e.message?.includes("4902"),rH=class extends w.Z{constructor(e,t,r,n){super(),this.onAccountsChanged=e=>{0===e.length?this.onDisconnect():this.syncAccounts(e)},this.onChainChanged=e=>{this.wallets.forEach(t=>{t.chainId=tC(e),"privy"===this.walletClientType&&to.put(tQ(t.address),e)}),this.emit("walletsUpdated")},this.onDisconnect=()=>{this.connected=!1,this.wallets=[],this.emit("walletsUpdated")},this.onConnect=()=>{this.connected=!0,this.syncAccounts()},this.wallets=[],this.walletClientType=e,this.chains=t,this.defaultChain=r,this.rpcConfig=n,this.rpcTimeoutDuration=nC(n,e),this.connected=!1,this.initialized=!1}buildConnectedWallet(e,t,r,a){let o=async()=>!!this.wallets.find(t=>(0,n.Kn)(t.address)===(0,n.Kn)(e));return{address:(0,n.Kn)(e),chainId:t,meta:r,imported:a,switchChain:async r=>{let i,a;if(!o)throw new eQ("Wallet is not currently connected.");let s=this.wallets.find(t=>n.Kn(t.address)===n.Kn(e))?.chainId;if(!s)throw new eQ("Unable to determine current chainId.");if("number"==typeof r?(i=`0x${r.toString(16)}`,a=r):(i=r,a=Number(r)),s===tC(i))return;let l=this.chains.find(e=>e.id===a);if(!l)throw new eQ(`Unsupported chainId: ${r}`);let c=async()=>{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]})};try{return await c()}catch(e){if(r$(e,this.walletClientType))return await this.proxyProvider.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:l.name,nativeCurrency:l.nativeCurrency,rpcUrls:[l.rpcUrls.default?.http[0]??""],blockExplorerUrls:[l.blockExplorers?.default.url??""]}]}),c();throw"rainbow"===this.walletClientType&&e.message?.includes("wallet_switchEthereumChain")?new eQ(`Rainbow does not support the chainId ${t}`):e}},connectedAt:Date.now(),walletClientType:this.walletClientType,connectorType:this.connectorType,isConnected:o,getEthereumProvider:async()=>{if(!await o())throw new eQ("Wallet is not currently connected.");return this.proxyProvider},getEthersProvider:async()=>{if(!await o())throw new eQ("Wallet is not currently connected.");return new i.Q(new rZ(this.proxyProvider))},getWeb3jsProvider:async()=>{if(!await o())throw new eQ("Wallet is not currently connected.");return new rz(this.proxyProvider)},sign:async e=>{if(!await o())throw new eQ("Wallet is not currently connected.");return await this.sign(e)},disconnect:()=>{this.disconnect()}}}async syncAccounts(e){let t=e;try{if(void 0===t){let e=await tf(()=>this.proxyProvider.request({method:"eth_accounts"}),{maxAttempts:10,delayMs:500});console.debug(`eth_accounts for ${this.walletClientType}:`,e),Array.isArray(e)&&(t=e)}}catch(e){console.warn("Wallet did not respond to eth_accounts. Defaulting to prefetched accounts.",e)}if(!t||!Array.isArray(t)||t.length<=0||!t[0])return;let r=t[0],i=(0,n.Kn)(r),a=[],o;if("privy"===this.walletClientType){let e=to.get(tQ(i));this.chains.find(t=>t.id===Number(e))||(to.del(tQ(i)),e=null),o=e||`0x${this.defaultChain.id.toString(16)}`;try{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]})}catch{console.warn(`Unable to switch embedded wallet to chain ID ${o} on initialization`)}}else try{let e=await tf(()=>this.proxyProvider.request({method:"eth_chainId"}),{maxAttempts:10,delayMs:500});if(console.debug(`eth_chainId for ${this.walletClientType}:`,e),"string"==typeof e)o=e;else if("number"==typeof e)o=`0x${e.toString(16)}`;else throw Error("Invalid chainId returned from provider")}catch(e){console.warn("Failed to get chainId from provider, defaulting to 0x1",e),o="0x1"}let s=tC(o);if(!a.find(e=>(0,n.Kn)(e.address)===i)){let e={name:this.walletBranding.name,icon:"string"==typeof this.walletBranding.icon?this.walletBranding.icon:void 0,id:this.walletBranding.id};a.push(this.buildConnectedWallet((0,n.Kn)(r),s,e,"embedded_imported"===this.connectorType))}n_(a,this.wallets)||(this.wallets=a,this.emit("walletsUpdated"))}async getConnectedWallet(){let e=await this.proxyProvider.request({method:"eth_accounts"});return this.wallets.sort((e,t)=>t.connectedAt-e.connectedAt).find(t=>e.find(e=>(0,n.Kn)(e)===(0,n.Kn)(t.address)))||null}async isConnected(){let e=await this.proxyProvider.request({method:"eth_accounts"});return Array.isArray(e)&&e.length>0}async sign(e){return await this.connect({showPrompt:!1}),new i.Q(new rZ(this.proxyProvider)).getSigner().signMessage(e)}subscribeListeners(){this.proxyProvider.on("accountsChanged",this.onAccountsChanged),this.proxyProvider.on("chainChanged",this.onChainChanged),this.proxyProvider.on("disconnect",this.onDisconnect),this.proxyProvider.on("connect",this.onConnect)}unsubscribeListeners(){this.proxyProvider.removeListener("accountsChanged",this.onAccountsChanged),this.proxyProvider.removeListener("chainChanged",this.onChainChanged),this.proxyProvider.removeListener("disconnect",this.onDisconnect),this.proxyProvider.removeListener("connect",this.onConnect)}},rB=[1,11155111,137,10,8453,84532,42161,7777777,43114,56],rq=(e,t)=>e.makeWeb3Provider({options:t}),rV=class extends rH{constructor(e,t,r,n,i,a){if(super("coinbase_wallet",e,t,r),this.connectorType="coinbase_wallet",this.displayName="Coinbase Wallet",this.proxyProvider=new rF(void 0,this.rpcTimeoutDuration),this.subscribeListeners(),this.connectionOptions=n.coinbaseWallet.connectionOptions??"all",this.walletClientType="smartWalletOnly"===this.connectionOptions?"coinbase_smart_wallet":"coinbase_wallet","coinbase_smart_wallet"===this.walletClientType&&(this.displayName="Coinbase Smart Wallet"),!rA){let r=[t.id].concat(e.map(e=>e.id)),n="eoaOnly"!==this.connectionOptions?r.filter(e=>!rB.includes(e)):[];n.length>0&&console.warn(`The following configured chains are not supported by the Coinbase Smart Wallet: ${n.join(", ")}`),rA=new x.ZP({appName:i,appLogoUrl:a,appChainIds:r})}this.proxyProvider.setWalletProvider(rq(rA,this.connectionOptions))}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return e.showPrompt&&await this.promptConnection(),await this.isConnected()?this.getConnectedWallet():null}disconnect(){this.proxyProvider.walletProvider.disconnect(),this.onDisconnect()}get walletBranding(){return{name:this.displayName,icon:rT,id:"com.coinbase.wallet"}}async promptConnection(){try{let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new eQ("Unable to retrieve accounts");this.connected=!0,await this.syncAccounts([e[0]])}catch(e){throw rO(e)}}},rG=({...e})=>(0,m.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.37126 11.0323C2.37126 12.696 3.90598 13.4421 5.40654 13.4468C8.91753 13.4468 12.8021 11.2897 12.7819 7.67984C12.7673 5.07728 10.3748 2.86167 7.54357 2.88296C4.8495 2.88296 2.21821 4.6411 2.21803 7.03628C2.21803 7.67951 2.58722 8.30178 3.55231 8.37184C2.74763 9.16826 2.37126 10.1225 2.37126 11.0323ZM7.55283 8.68012C8.11562 8.68012 8.57186 8.13217 8.57186 7.45624C8.57186 6.78032 8.11562 6.23237 7.55283 6.23237C6.99003 6.23237 6.53379 6.78032 6.53379 7.45624C6.53379 8.13217 6.99003 8.68012 7.55283 8.68012ZM10.4747 8.68012C11.0375 8.68012 11.4937 8.13217 11.4937 7.45625C11.4937 6.78032 11.0375 6.23237 10.4747 6.23237C9.91186 6.23237 9.45562 6.78032 9.45562 7.45625C9.45562 8.13217 9.91186 8.68012 10.4747 8.68012Z",fill:e.color||"var(--privy-color-foreground-3)"})}),rK=class extends rH{constructor(e,t,r,n,i=!1){super("privy",t,r,n),this.connectorType="embedded",this.proxyProvider=e,i&&(this.connectorType="embedded_imported"),this.subscribeListeners()}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return await this.isConnected()?(await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[tx(e?.chainId||"0x1")]}),this.getConnectedWallet()):null}get walletBranding(){return{name:"Privy Wallet",icon:rG,id:"io.privy.wallet"}}disconnect(){this.connected=!1}async promptConnection(){}},rY=({style:e,...t})=>(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 24 24",style:{...e},...t,children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"})}),rQ=({style:e,...t})=>(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",x:0,y:0,viewBox:"0 0 318.6 318.6",width:"28",height:"28",style:{height:"28px",width:"28px",...e},...t,children:[(0,m.jsx)("style",{children:".s1{stroke-linecap:round;stroke-linejoin:round}.s2{fill:#e4761b;stroke:#e4761b}.s3{fill:#f6851b;stroke:#f6851b}"}),(0,m.jsx)("path",{fill:"#e2761b",stroke:"#e2761b",className:"s1",d:"m274.1 35.5-99.5 73.9L193 65.8z"}),(0,m.jsx)("path",{d:"m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z",className:"s1 s2"}),(0,m.jsx)("path",{d:"m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z",className:"s1 s2"}),(0,m.jsx)("path",{fill:"#d7c1b3",stroke:"#d7c1b3",className:"s1",d:"m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"}),(0,m.jsx)("path",{fill:"#233447",stroke:"#233447",className:"s1",d:"m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"}),(0,m.jsx)("path",{fill:"#cd6116",stroke:"#cd6116",className:"s1",d:"m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"}),(0,m.jsx)("path",{fill:"#e4751f",stroke:"#e4751f",className:"s1",d:"m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"}),(0,m.jsx)("path",{d:"m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z",className:"s3"}),(0,m.jsx)("path",{fill:"#c0ad9e",stroke:"#c0ad9e",className:"s1",d:"m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"}),(0,m.jsx)("path",{fill:"#161616",stroke:"#161616",className:"s1",d:"m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"}),(0,m.jsx)("path",{fill:"#763d16",stroke:"#763d16",className:"s1",d:"m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"}),(0,m.jsx)("path",{d:"m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z",className:"s3"})]}),rX=({style:e,...t})=>(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"108",height:"108",viewBox:"0 0 108 108",fill:"none",style:{height:"28px",width:"28px",...e},...t,children:[(0,m.jsx)("rect",{width:"108",height:"108",rx:"23",fill:"#AB9FF2"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46.5267 69.9229C42.0054 76.8509 34.4292 85.6182 24.348 85.6182C19.5824 85.6182 15 83.6563 15 75.1342C15 53.4305 44.6326 19.8327 72.1268 19.8327C87.768 19.8327 94 30.6846 94 43.0079C94 58.8258 83.7355 76.9122 73.5321 76.9122C70.2939 76.9122 68.7053 75.1342 68.7053 72.314C68.7053 71.5783 68.8275 70.7812 69.0719 69.9229C65.5893 75.8699 58.8685 81.3878 52.5754 81.3878C47.993 81.3878 45.6713 78.5063 45.6713 74.4598C45.6713 72.9884 45.9768 71.4556 46.5267 69.9229ZM83.6761 42.5794C83.6761 46.1704 81.5575 47.9658 79.1875 47.9658C76.7816 47.9658 74.6989 46.1704 74.6989 42.5794C74.6989 38.9885 76.7816 37.1931 79.1875 37.1931C81.5575 37.1931 83.6761 38.9885 83.6761 42.5794ZM70.2103 42.5795C70.2103 46.1704 68.0916 47.9658 65.7216 47.9658C63.3157 47.9658 61.233 46.1704 61.233 42.5795C61.233 38.9885 63.3157 37.1931 65.7216 37.1931C68.0916 37.1931 70.2103 38.9885 70.2103 42.5795Z",fill:"#FFFDF8"})]}),rJ=class extends rH{constructor(e,t,r,n,i){super(i||"unknown",e,t,r),this.connectorType="injected",this.proxyProvider=new rF(void 0,this.rpcTimeoutDuration),this.subscribeListeners(),this.providerDetail=n;let a=n.provider;this.proxyProvider.setWalletProvider(a)}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return e.showPrompt&&await this.promptConnection(),await this.isConnected()?this.getConnectedWallet():null}get walletBranding(){return{name:this.providerDetail.info.name,icon:this.providerDetail.info.icon,id:this.providerDetail.info.rdns}}disconnect(){console.warn(`Programmatic disconnect with ${this.providerDetail.info.name} is not yet supported.`)}async promptConnection(){try{let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new eQ("Unable to retrieve accounts");await this.syncAccounts([e[0]])}catch(e){throw rO(e)}}},r0=class extends rH{constructor(e,t,r,n,i){super(i??"unknown",e,t,r),this.connectorType="injected",eH(this,rS,void 0),this.proxyProvider=new rF(void 0,this.rpcTimeoutDuration),this.subscribeListeners(),this.proxyProvider.setWalletProvider(n),"metamask"===i?eB(this,rS,{name:"MetaMask",icon:rQ,id:"io.metamask"}):"phantom"===i&&eB(this,rS,{name:"Phantom",icon:rX,id:"phantom"})}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return e.showPrompt&&await this.promptConnection(),await this.isConnected()?this.getConnectedWallet():null}get walletBranding(){return e$(this,rS)??{name:"Browser Extension",icon:rY,id:"extension"}}disconnect(){console.warn("Programmatic disconnect with browser wallets is not yet supported.")}async promptConnection(){try{let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new eQ("Unable to retrieve accounts");await this.syncAccounts([e[0]])}catch(e){throw rO(e)}}};rS=new WeakMap;var r1=class extends rJ{disconnect(){console.warn("MetaMask does not support programmatic disconnect.")}async promptConnection(){try{s.tq||await this.proxyProvider.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new eQ("Unable to retrieve accounts");await this.syncAccounts([e[0]])}catch(e){throw rO(e)}}},r2=class extends rH{constructor(e,t){super(e,[],t,{}),this.connectorType="null",this.proxyProvider=new rF(void 0,12e4),this.connectorType=e}get walletBranding(){return{name:"Wallet",id:""}}async initialize(){this.initialized=!0,this.emit("initialized")}async connect(){throw Error("connect called for an uninstalled wallet via the NullConnector")}disconnect(){throw Error("disconnect called for an uninstalled wallet via the NullConnector")}promptConnection(e){throw Error(`promptConnection called for an uninstalled wallet via the NullConnector for ${e}`)}},r3=class extends r2{constructor(e){super("phantom",e)}get walletBranding(){return{name:"Phantom",icon:rX,id:"phantom"}}};function r4({src:e,...t}){return(0,m.jsx)("img",{src:e,...t,style:{display:"none"}})}var r5={appearance:{landingHeader:"Log in or sign up",theme:"light",accentColor:"#676FFF",walletList:["detected_wallets","metamask","coinbase_wallet","rainbow","wallet_connect"]},walletConnectCloudProjectId:"34357d3c125c2bcf2ce2bc3309d98715",rpcConfig:{rpcUrls:{},rpcTimeouts:{}},externalWallets:{coinbaseWallet:{connectionOptions:"all"}},captchaEnabled:!1,_render:{standalone:!1},fundingMethodConfig:{moonpay:{useSandbox:!1}}},r6=({input:e})=>{if(!e||!e.primary[0])return;let t=[e.primary[0]],r=[];for(let r of(e.primary.length>4&&console.warn("You should not specify greater than 4 login methods in `loginMethodsAndOrder.primary`"),e.primary.slice(1)))t.includes(r)?console.warn(`Duplicated login method: ${r}`):t.push(r);for(let n of e.overflow??[])t.includes(n)||r.includes(n)?console.warn(`Duplicated login method: ${n}`):r.push(n);return{primary:t,overflow:r}},r7=new Set(["coinbase_wallet","cryptocom","metamask","okx_wallet","phantom","rainbow","uniswap","zerion","wallet_connect","detected_wallets","rabby_wallet"]),r8=e=>r7.has(e),r9=(e,t,r)=>r.indexOf(e)===t,ne=({input:e,overrides:t})=>t?t.primary.concat(t.overflow??[]).filter(r8).filter(r9):e?e.filter(r8).filter(r9):r5.appearance.walletList,nt={id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://mainnet.rpc.privy.systems"]},alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}}},nr=[{id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://arbitrum-mainnet.rpc.privy.systems"]},alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}}},{id:421613,name:"Arbitrum Goerli",network:"arbitrum-goerli",nativeCurrency:{name:"Goerli Ether",symbol:"AGOR",decimals:18},rpcUrls:{default:{http:["https://goerli-rollup.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://goerli.arbiscan.io/"}},testnet:!0},{id:421614,name:"Arbitrum Sepolia",network:"arbitrum-sepolia",nativeCurrency:{name:"Arbitrum Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://arbitrum-sepolia.rpc.privy.systems"]},default:{http:["https://sepolia-rollup.arbitrum.io/rpc"]},public:{http:["https://sepolia-rollup.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Blockscout",url:"https://sepolia-explorer.arbitrum.io"}},testnet:!0},{id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},testnet:!0},{id:11155111,network:"sepolia",name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"SEP",decimals:18},rpcUrls:{privy:{http:["https://sepolia.rpc.privy.systems"]},alchemy:{http:["https://eth-sepolia.g.alchemy.com/v2"],webSocket:["wss://eth-sepolia.g.alchemy.com/v2"]},infura:{http:["https://sepolia.infura.io/v3"],webSocket:["wss://sepolia.infura.io/ws/v3"]},default:{http:["https://rpc.sepolia.org"]},public:{http:["https://rpc.sepolia.org"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://sepolia.etherscan.io"},default:{name:"Etherscan",url:"https://sepolia.etherscan.io"}},testnet:!0},nt,{id:10,name:"OP Mainnet",network:"optimism",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://optimism-mainnet.rpc.privy.systems"]},alchemy:{http:["https://opt-mainnet.g.alchemy.com/v2"],webSocket:["wss://opt-mainnet.g.alchemy.com/v2"]},infura:{http:["https://optimism-mainnet.infura.io/v3"],webSocket:["wss://optimism-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.optimism.io"]},public:{http:["https://mainnet.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://optimistic.etherscan.io"},default:{name:"Optimism Explorer",url:"https://explorer.optimism.io"}}},{id:420,name:"Optimism Goerli Testnet",network:"optimism-goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://goerli.optimism.io"]}},blockExplorers:{default:{name:"Etherscan",url:"https://goerli-optimism.etherscan.io"}},testnet:!0},{id:11155420,name:"Optimism Sepolia",network:"optimism-sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://optimism-sepolia.rpc.privy.systems"]},default:{http:["https://sepolia.optimism.io"]},public:{http:["https://sepolia.optimism.io"]},infura:{http:["https://optimism-sepolia.infura.io/v3"]}},blockExplorers:{default:{name:"Blockscout",url:"https://optimism-sepolia.blockscout.com"}},testnet:!0},{id:137,name:"Polygon Mainnet",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{privy:{http:["https://polygon-mainnet.rpc.privy.systems"]},alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}}},{id:80001,name:"Mumbai",network:"maticmum",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{default:{http:["https://matic-mumbai.chainstacklabs.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://mumbai.polygonscan.com"}},testnet:!0},{id:42220,name:"Celo Mainnet",network:"celo",nativeCurrency:{decimals:18,name:"CELO",symbol:"CELO"},rpcUrls:{default:{http:["https://forno.celo.org"]},infura:{http:["https://celo-mainnet.infura.io/v3"]},public:{http:["https://forno.celo.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/mainnet"},etherscan:{name:"CeloScan",url:"https://celoscan.io"}},testnet:!1},{id:44787,name:"Celo Alfajores Testnet",network:"celo-alfajores",nativeCurrency:{decimals:18,name:"CELO",symbol:"CELO"},rpcUrls:{default:{http:["https://alfajores-forno.celo-testnet.org"]},infura:{http:["https://celo-alfajores.infura.io/v3"]},public:{http:["https://alfajores-forno.celo-testnet.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/alfajores"},etherscan:{name:"CeloScan",url:"https://alfajores.celoscan.io/"}},testnet:!0},{id:314,name:"Filecoin - Mainnet",network:"filecoin-mainnet",nativeCurrency:{decimals:18,name:"filecoin",symbol:"FIL"},rpcUrls:{default:{http:["https://api.node.glif.io/rpc/v1"]},public:{http:["https://api.node.glif.io/rpc/v1"]}},blockExplorers:{default:{name:"Filfox",url:"https://filfox.info/en"},filscan:{name:"Filscan",url:"https://filscan.io"},filscout:{name:"Filscout",url:"https://filscout.io/en"},glif:{name:"Glif",url:"https://explorer.glif.io"}}},{id:314159,name:"Filecoin - Calibration testnet",network:"filecoin-calibration",nativeCurrency:{decimals:18,name:"testnet filecoin",symbol:"tFIL"},rpcUrls:{default:{http:["https://api.calibration.node.glif.io/rpc/v1"]},public:{http:["https://api.calibration.node.glif.io/rpc/v1"]}},blockExplorers:{default:{name:"Filscan",url:"https://calibration.filscan.io"}}},{id:8453,network:"base",name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://base-mainnet.rpc.privy.systems"]},blast:{http:["https://base-mainnet.blastapi.io"],webSocket:["wss://base-mainnet.blastapi.io"]},default:{http:["https://mainnet.base.org"]},public:{http:["https://mainnet.base.org"]}},blockExplorers:{etherscan:{name:"Basescan",url:"https://basescan.org"},default:{name:"Basescan",url:"https://basescan.org"}},testnet:!0},{id:84531,network:"base-goerli",name:"Base Goerli Testnet",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://goerli.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://goerli.basescan.org"}},testnet:!0},{id:84532,network:"base-sepolia",name:"Base Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://base-sepolia.rpc.privy.systems"]},default:{http:["https://sepolia.base.org"]},public:{http:["https://sepolia.base.org"]}},blockExplorers:{default:{name:"Blockscout",url:"https://base-sepolia.blockscout.com"}},testnet:!0},{id:80085,network:"berachain-artio",name:"Berachain Artio",nativeCurrency:{name:"BERA",symbol:"BERA",decimals:18},rpcUrls:{default:{http:["https://berachain-artio.rpc.privy.systems"]},public:{http:["https://berachain-artio.rpc.privy.systems"]}},blockExplorers:{default:{name:"Beratrail",url:"https://artio.beratrail.io"}},testnet:!0},{id:42,network:"lukso",name:"LUKSO",nativeCurrency:{name:"LUKSO",symbol:"LYX",decimals:18},rpcUrls:{default:{http:["https://rpc.mainnet.lukso.network"],webSocket:["wss://ws-rpc.mainnet.lukso.network"]}},blockExplorers:{default:{name:"LUKSO Mainnet Explorer",url:"https://explorer.execution.mainnet.lukso.network"}}},{id:59144,network:"linea-mainnet",name:"Linea Mainnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]},public:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://lineascan.build"},etherscan:{name:"Etherscan",url:"https://lineascan.build"}},testnet:!1},{id:59140,network:"linea-testnet",name:"Linea Goerli Testnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{infura:{http:["https://linea-goerli.infura.io/v3"],webSocket:["wss://linea-goerli.infura.io/ws/v3"]},default:{http:["https://rpc.goerli.linea.build"],webSocket:["wss://rpc.goerli.linea.build"]},public:{http:["https://rpc.goerli.linea.build"],webSocket:["wss://rpc.goerli.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://goerli.lineascan.build"},etherscan:{name:"Etherscan",url:"https://goerli.lineascan.build"}},testnet:!0},{id:43114,name:"Avalanche",network:"avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]},public:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://snowtrace.io"},default:{name:"SnowTrace",url:"https://snowtrace.io"}}},{id:43113,name:"Avalanche Fuji",network:"avalanche-fuji",nativeCurrency:{decimals:18,name:"Avalanche Fuji",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax-test.network/ext/bc/C/rpc"]},public:{http:["https://api.avax-test.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://testnet.snowtrace.io"},default:{name:"SnowTrace",url:"https://testnet.snowtrace.io"}},testnet:!0},{id:7777777,name:"Zora",network:"zora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]},public:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.zora.energy"}}},{id:999,name:"Zora Goerli Testnet",network:"zora-testnet",nativeCurrency:{decimals:18,name:"Zora Goerli",symbol:"ETH"},rpcUrls:{default:{http:["https://testnet.rpc.zora.energy"],webSocket:["wss://testnet.rpc.zora.energy"]},public:{http:["https://testnet.rpc.zora.energy"],webSocket:["wss://testnet.rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://testnet.explorer.zora.energy"}},testnet:!0},{id:999999999,name:"Zora Sepolia",network:"zora-sepolia",nativeCurrency:{decimals:18,name:"Zora Sepolia",symbol:"ETH"},rpcUrls:{default:{http:["https://sepolia.rpc.zora.energy"],webSocket:["wss://sepolia.rpc.zora.energy"]},public:{http:["https://sepolia.rpc.zora.energy"],webSocket:["wss://sepolia.rpc.zora.energy"]}},blockExplorers:{default:{name:"Zora Sepolia Explorer",url:"https://sepolia.explorer.zora.energy/"}},testnet:!0},{id:17e3,name:"Holesky",network:"holesky",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://ethereum-holesky.publicnode.com"]},public:{http:["https://ethereum-holesky.publicnode.com"]}},blockExplorers:{etherscan:{name:"EtherScan",url:"https://holesky.etherscan.io"},default:{name:"EtherScan",url:"https://holesky.etherscan.io"}}},{id:690,name:"Redstone",network:"redstone",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.redstonechain.com"]},public:{http:["https://rpc.redstonechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.redstone.xyz/"}}},{id:17069,name:"Garnet Holesky",network:"garnet-holesky",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.garnetchain.com"]},public:{http:["https://rpc.garnetchain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.garnetchain.com"}}},{id:17001,name:"Redstone Holesky",network:"redstone-holesky",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.holesky.redstone.xyz"]},public:{http:["https://rpc.holesky.redstone.xyz"]}},blockExplorers:{etherscan:{name:"EtherScan",url:"https://explorer.holesky.redstone.xyz"},default:{name:"EtherScan",url:"https://explorer.holesky.redstone.xyz"}}}];nr.map(e=>e.id);var nn="#FFFFFF";function ni(e,t){let r=Math.max(0,Math.min(1,e.toHsl().l+t));return(0,b.Z)({...e.toHsl(),l:r})}function na(e,t,r){let n=r?console.warn:()=>{},i,a,o,s,l,c,d,h,u,p,m,g,f,y,w;t?.loginMethods?(i=t.loginMethods.includes("email"),a=t.loginMethods.includes("sms"),s=t.loginMethods.includes("wallet"),l=t.loginMethods.includes("google"),c=t.loginMethods.includes("twitter"),d=t.loginMethods.includes("discord"),u=t.loginMethods.includes("spotify"),p=t.loginMethods.includes("instagram"),h=t.loginMethods.includes("tiktok"),g=t.loginMethods.includes("github"),m=t.loginMethods.includes("linkedin"),f=t.loginMethods.includes("apple"),y=t.loginMethods.includes("farcaster"),w=t.loginMethods.includes("telegram")):(i=e.emailAuth,a=e.smsAuth,s=e.walletAuth,l=e.googleOAuth,c=e.twitterOAuth,d=e.discordOAuth,g=e.githubOAuth,u=e.spotifyOAuth,p=e.instagramOAuth,h=e.tiktokOAuth,m=e.linkedinOAuth,f=e.appleOAuth,y=e.farcasterAuth,w=e.telegramAuth),"u">typeof window&&"function"!=typeof window.PublicKeyCredential?o=!1:e.passkeyAuth&&(o=!0);let x=[i,a].filter(Boolean),v=[l,c,d,g,u,p,h,m,f,y,w].filter(Boolean),C=[s].filter(Boolean);if(x.length+v.length+C.length===0)throw Error("You must enable at least one login method");let _=t?.appearance?.showWalletLoginFirst!==void 0?t?.appearance?.showWalletLoginFirst:e.showWalletLoginFirst;_&&0===C.length?(n("You should only enable `showWalletLoginFirst` when `wallet` logins are also enabled. `showWalletLoginFirst` has been set to false"),_=!1):_||v.length+x.length!==0||(n("You should only disable `showWalletLoginFirst` when `email`, `sms`, or social logins are also enabled. `showWalletLoginFirst` has been set to true"),_=!0);let j=t?.externalWallets?.walletConnect?.enabled??!0;t?.loginMethods&&t.loginMethodsAndOrder&&n("You should only configure one of `loginMethods` or `loginMethodsAndOrder`");let k=ne({input:t?.appearance?.walletList,overrides:t?.loginMethodsAndOrder}),E=r6({input:t?.loginMethodsAndOrder}),A=t?.intl?.defaultCountry??"US",{chains:S,defaultChain:T}=function({additionalChains:e,supportedChains:t,defaultChainFromConfig:r,hasRpcConfigDefined:n}){let i;if(e&&t&&console.warn("You should only specify one of `additionalChains` or `supportedChains`. Using `supportedChains`."),t){if(0===t.length)throw Error("`supportedChains` must contain at least one chain");t.filter(e=>e.rpcUrls.privyWalletOverride).length>0&&n&&console.warn("You have specified at least one `supportedChain` with `privyWalletOverride` but also have `rpcConfig` defined. The `rpcConfig` will be ignored. `rpcConfig` is deprecated and you should use `privyWalletOverride` in a `supportedChain`."),i=t.map(e=>e.rpcUrls.privyWalletOverride?e:nr.find(t=>t.id===e.id)??e)}else i=nr.concat(e??[]);let a=t?i[0]:nt,o=r??a;if(!i.find(e=>e.id===o.id))throw Error("`defaultChain` must be included in `supportedChains`");return{chains:i,defaultChain:o}}({additionalChains:t?.additionalChains,supportedChains:t?.supportedChains,defaultChainFromConfig:t?.defaultChain,hasRpcConfigDefined:Object.keys(t?.rpcConfig?.rpcUrls??{}).length>0}),P=!!t?.defaultChain,N=t?.customAuth?.getCustomAccessToken&&t?.customAuth?.enabled!==!1,R,M=!(e.enforceWalletUis??!0);if(R=e.legacyWalletUiConfig??!0?N?t?.embeddedWallets?.noPromptOnSignature??!0:t?.embeddedWallets?.noPromptOnSignature??M:M,t?.embeddedWallets?.waitForTransactionConfirmation===!1&&!0!==R)throw Error("Overriding `config.embeddedWallets.waitForTransactionConfirmation` requires that you disable wallet UIs in the dashboard.");let{requireUserPasswordOnCreate:O,...I}=t?.embeddedWallets??{};return{id:e.id,name:e.name,allowlistConfig:e.allowlistConfig,legacyWalletUiConfig:e.legacyWalletUiConfig,appearance:{logo:t?.appearance?.logo??e.logoUrl,landingHeader:t?.appearance?.landingHeader??r5.appearance.landingHeader,loginMessage:"string"==typeof t?.appearance?.loginMessage?t?.appearance?.loginMessage.slice(0,100):t?.appearance?.loginMessage,palette:function({backgroundTheme:e,accentHex:t}){var r;let n;switch(e){case"light":n=nn;break;case"dark":n="#1E1E1D";break;default:n=e}let i=(0,b.Z)(n),a=(0,b.Z)(t),o=(0,b.Z)("#51BA81"),s=(0,b.Z)("#FFB74D"),l=(0,b.Z)("#EC6351"),c=((r=i.getLuminance())<.8&&r>.2&&console.warn("Background color is not light or dark enough, which could lead to accessibility issues."),r>.5?"light":"dark"),d=ni(i,"light"===c?-.04:.11),h=ni(i,"light"===c?-.88:.87),u=ni(i,"light"===c?-.7:.75),p=ni(i,"light"===c?-.43:.45).desaturate("light"===c?60:20),m=ni(i,"light"===c?-.08:.25).desaturate("light"===c?60:20),g=ni(a,.15),f=ni(a,-.06),y=ni(l,.3),w=ni(s,.3),x=(0,b.Z)(a.getLuminance()>.5?"#040217":nn),v=ni(o,-.16),C=ni(o,.4);return{colorScheme:c,background:i.toHslString(),background2:d.toHslString(),foreground:h.toHslString(),foreground2:u.toHslString(),foreground3:p.toHslString(),foreground4:m.toHslString(),accent:a.toHslString(),accentLight:g.toHslString(),accentDark:f.toHslString(),foregroundAccent:x.toHslString(),success:o.toHslString(),successDark:v.toHslString(),successLight:C.toHslString(),error:l.toHslString(),errorLight:y.toHslString(),warn:s.toHslString(),warnLight:w.toHslString()}}({backgroundTheme:t?.appearance?.theme??r5.appearance.theme,accentHex:t?.appearance?.accentColor??e.accentColor??r5.appearance.accentColor}),loginGroupPriority:_?"web3-first":"web2-first",hideDirectWeb2Inputs:!!t?.appearance?.hideDirectWeb2Inputs,walletList:k},loginMethods:{wallet:s,email:i,sms:a,passkey:o,google:l,twitter:c,discord:d,github:g,spotify:u,instagram:p,tiktok:h,linkedin:m,apple:f,farcaster:y,telegram:w},loginMethodsAndOrder:E,legal:{termsAndConditionsUrl:t?.legal?.termsAndConditionsUrl??e.termsAndConditionsUrl,privacyPolicyUrl:t?.legal?.privacyPolicyUrl??e.privacyPolicyUrl,requireUsersAcceptTerms:e.requireUsersAcceptTerms??!1},walletConnectCloudProjectId:t?.walletConnectCloudProjectId??e.walletConnectCloudProjectId??r5.walletConnectCloudProjectId,rpcConfig:{rpcUrls:t?.rpcConfig?.rpcUrls??r5.rpcConfig.rpcUrls,rpcTimeouts:t?.rpcConfig?.rpcTimeouts??r5.rpcConfig.rpcTimeouts},chains:S,defaultChain:T,intl:{defaultCountry:A},shouldEnforceDefaultChainOnConnect:P,captchaEnabled:e.captchaEnabled??r5.captchaEnabled,captchaSiteKey:e.captchaSiteKey,externalWallets:{coinbaseWallet:{connectionOptions:t?.externalWallets?.coinbaseWallet?.connectionOptions??r5.externalWallets.coinbaseWallet.connectionOptions},walletConnect:{enabled:j}},embeddedWallets:{...e.embeddedWalletConfig,..."boolean"==typeof O?{requireUserOwnedRecoveryOnCreate:O}:{},...N?{createOnLogin:"all-users",requireUserOwnedRecoveryOnCreate:!1,userOwnedRecoveryOptions:["user-passcode"]}:{},waitForTransactionConfirmation:!0,priceDisplay:{primary:"fiat-currency",secondary:"native-token"},...I,noPromptOnSignature:R},mfa:{methods:e.mfaMethods??[],noPromptOnMfaRequired:t?.mfa?.noPromptOnMfaRequired??!1},customAuth:N?{enabled:!0,...t.customAuth}:void 0,loginConfig:{twitterOAuthOnMobileEnabled:e.twitterOAuthOnMobileEnabled??!1,telegramAuthConfiguration:e.telegramAuthConfiguration},headless:!!t?.headless,render:{standalone:t?._render?.standalone??r5._render.standalone},fundingConfig:e.fundingConfig,fundingMethodConfig:{...t?.fundingMethodConfig??r5.fundingMethodConfig,moonpay:{...t?.fundingMethodConfig?.moonpay??r5.fundingMethodConfig.moonpay,useSandbox:t?.fundingMethodConfig?.moonpay.useSandbox??t?.fiatOnRamp?.useSandbox??r5.fundingMethodConfig.moonpay.useSandbox}}}}var no=function(e,t=0){let r=3735928559^t,n=1103547991^t;for(let t=0,i;t<e.length;t++)r=Math.imul(r^(i=e.charCodeAt(t)),2654435761),n=Math.imul(n^i,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&(n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909)))+(r>>>0)},ns={showWalletLoginFirst:!0,allowlistConfig:{errorTitle:null,errorDetail:null,errorCtaText:null,errorCtaLink:null},walletAuth:!0,emailAuth:!0,smsAuth:!1,googleOAuth:!1,twitterOAuth:!1,discordOAuth:!1,githubOAuth:!1,linkedinOAuth:!1,appleOAuth:!1,termsAndConditionsUrl:null,privacyPolicyUrl:null,embeddedWalletConfig:{createOnLogin:"off",requireUserOwnedRecoveryOnCreate:!1,userOwnedRecoveryOptions:["user-passcode"]},fiatOnRampEnabled:!1,captchaEnabled:!1,captchaSiteKey:""},nl=na(ns,void 0,!1),nc=(0,o.createContext)({appConfig:nl,isServerConfigLoaded:!1}),nd=({children:e,legacyCreateEmbeddedWalletFlag:t,client:r,clientConfig:n})=>{let[i,a]=(0,o.useState)(null),s=(0,o.useMemo)(()=>na(i??ns,n,!!i),[i,n]);return(0,o.useEffect)(()=>{if(!i)return;let e=function(e,t){if(!e)return{legacyCreateEmbeddedWalletFlag:t};let{appearance:r,additionalChains:n,supportedChains:i,defaultChain:a,...o}=e;return{...o,...n?{additionalChains:n.map(e=>e.id)}:void 0,...i?{supportedChains:i.map(e=>e.id)}:void 0,...a?{defaultChain:a.id}:void 0,legacyCreateEmbeddedWalletFlag:t}}(n,t),a=no(JSON.stringify(e)).toString(),o=`privy:sent:${i.id}:${a}`;localStorage.getItem(o)||(r.createAnalyticsEvent({eventName:"sdk_initialize",payload:e}),localStorage.setItem(o,"t"))},[n,t,i]),(0,o.useEffect)(()=>{i||(async()=>{try{let e=await r.getServerConfig();e.customApiUrl&&r.updateApiUrl(e.customApiUrl),a(e)}catch(e){console.warn("Error generating app config: ",e)}})()},[]),(0,m.jsx)(nc.Provider,{value:{appConfig:s,isServerConfigLoaded:!!i},children:e})},nh=()=>{let{appConfig:e}=(0,o.useContext)(nc);return e},nu=()=>{let{isServerConfigLoaded:e}=(0,o.useContext)(nc);return e},np=()=>{throw Error("You need to wrap your application with the <PrivyProvider> initialized with your app id.")},nm=(0,o.createContext)({ready:!1,app:nl,currentScreen:null,lastScreen:null,navigate:np,navigateBack:np,resetNavigation:np,setModalData:np,onUserCloseViaDialogOrKeybindRef:void 0}),ng=["LANDING","CONNECT_ONLY_LANDING_SCREEN",null],nf=e=>{let t=nh(),r=e.authenticated,[n,i]=(0,o.useState)(e.initialScreen);(0,o.useEffect)(()=>{r||ng.includes(e.initialScreen)||e.setInitialScreen(null)},[r]);let a=(0,o.useRef)(null);(0,o.useEffect)(()=>{e.open||(a.current=null)},[e.open]),(0,o.useEffect)(()=>{a.current=null},[e.initialScreen]);let s={ready:!!t.id,app:t,data:e.data,setModalData:e.setModalData,currentScreen:e.initialScreen,lastScreen:n,navigate:(t,r=!0)=>{e.setInitialScreen(t),r&&i(e.initialScreen)},navigateBack:()=>{e.setInitialScreen(n)},resetNavigation:()=>{e.setInitialScreen(null),i(null)},onUserCloseViaDialogOrKeybindRef:a};return(0,m.jsxs)(nm.Provider,{value:s,children:[("string"==typeof t.appearance.logo||t.appearance.logo?.type==="img")&&(0,m.jsx)(r4,{src:"string"==typeof t.appearance.logo?t.appearance.logo:t.appearance.logo.props.src}),e.children]})},ny=()=>(0,o.useContext)(nm),nw=({style:e,...t})=>{let{app:r}=ny();return(0,m.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px",...e},...t,children:[(0,m.jsx)("rect",{width:"28",height:"28",rx:"3",fill:r?.appearance.palette.colorScheme==="dark"?"#3396ff":"#141414"}),(0,m.jsx)("g",{clipPath:"url(#clip0_1765_9946)",children:(0,m.jsx)("path",{d:"M8.09448 10.3941C11.3558 7.20196 16.6442 7.20196 19.9055 10.3941L20.2982 10.7782C20.3369 10.8157 20.3677 10.8606 20.3887 10.9102C20.4097 10.9599 20.4206 11.0132 20.4206 11.0671C20.4206 11.121 20.4097 11.1744 20.3887 11.224C20.3677 11.2737 20.3369 11.3186 20.2982 11.3561L18.9554 12.6702C18.9158 12.7086 18.8628 12.7301 18.8077 12.7301C18.7526 12.7301 18.6996 12.7086 18.66 12.6702L18.1198 12.1415C15.8448 9.91503 12.1557 9.91503 9.88015 12.1415L9.30167 12.7075C9.26207 12.7459 9.20909 12.7673 9.15395 12.7673C9.0988 12.7673 9.04582 12.7459 9.00622 12.7075L7.66346 11.3934C7.62475 11.3559 7.59397 11.3109 7.57295 11.2613C7.55193 11.2117 7.5411 11.1583 7.5411 11.1044C7.5411 11.0505 7.55193 10.9971 7.57295 10.9475C7.59397 10.8979 7.62475 10.8529 7.66346 10.8154L8.09448 10.3941ZM22.6829 13.1115L23.8776 14.2814C23.9163 14.319 23.9471 14.3639 23.9681 14.4135C23.9892 14.4632 24 14.5165 24 14.5704C24 14.6243 23.9892 14.6777 23.9681 14.7273C23.9471 14.777 23.9163 14.8219 23.8776 14.8594L18.4893 20.1332C18.4102 20.2101 18.3042 20.2531 18.1938 20.2531C18.0835 20.2531 17.9775 20.2101 17.8984 20.1332L14.0743 16.3901C14.0545 16.3708 14.0279 16.36 14.0003 16.36C13.9726 16.36 13.9461 16.3708 13.9263 16.3901L10.1021 20.1332C10.023 20.2101 9.91703 20.2531 9.8067 20.2531C9.69636 20.2531 9.59038 20.2101 9.51124 20.1332L4.12236 14.8594C4.08365 14.8219 4.05287 14.777 4.03185 14.7273C4.01083 14.6777 4 14.6243 4 14.5704C4 14.5165 4.01083 14.4632 4.03185 14.4135C4.05287 14.3639 4.08365 14.319 4.12236 14.2814L5.31767 13.1115C5.39678 13.0348 5.50265 12.9919 5.61285 12.9919C5.72305 12.9919 5.82892 13.0348 5.90803 13.1115L9.73216 16.8546C9.75194 16.874 9.7785 16.8848 9.80616 16.8848C9.83381 16.8848 9.86037 16.874 9.88015 16.8546L13.7043 13.1115C13.7834 13.0346 13.8894 12.9916 13.9997 12.9916C14.1101 12.9916 14.216 13.0346 14.2952 13.1115L18.1198 16.8546C18.1396 16.874 18.1662 16.8848 18.1938 16.8848C18.2215 16.8848 18.2481 16.874 18.2678 16.8546L22.092 13.1115C22.1711 13.0346 22.2771 12.9916 22.3874 12.9916C22.4977 12.9916 22.6037 13.0346 22.6829 13.1115Z",fill:"white"})}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_1765_9946",children:(0,m.jsx)("rect",{width:"20",height:"12.2531",fill:"white",transform:"translate(4 8)"})})})]})},nx=class extends rH{constructor(e,t,r,n,i,a,o,s){super(s||"unknown",r,n,t),this.connectorType="wallet_connect_v2",this.privyAppId=a,this.privyAppName=o,this.walletConnectCloudProjectId=e,this.rpcConfig=t,this.shouldEnforceDefaultChainOnConnect=i,this.proxyProvider=new rF(void 0,this.rpcTimeoutDuration),s&&(this.walletEntry=tS[s],this.walletClientType=s)}async initialize(){let e=await this.createProvider();if(this.provider=e,this.proxyProvider.setWalletProvider(e),this.subscribeListeners(),e.session){if(this.walletProvider?.session?.peer.metadata.url){let e=tA(this.walletProvider?.session?.peer.metadata.url);this.walletEntry=e?.entry,this.walletClientType=e?.walletClientType||"unknown"}this.connected=!0,await this.syncAccounts()}this.initialized=!0,this.emit("initialized");let{WalletConnectModal:t}=await r.e(318).then(r.bind(r,55318));this.modal=new t({projectId:this.walletConnectCloudProjectId,themeVariables:{"--wcm-z-index":"1000000"}}),this.modal.subscribeModal(e=>{e.open||this.walletProvider?.session||!this.onQrModalClosed||this.onQrModalClosed()})}async connect(e){return e.showPrompt&&await this.promptConnection(),this.getConnectedWallet()}async isConnected(){return!!this.walletProvider?.connected}get walletBranding(){return"metamask"===this.walletClientType?{name:"MetaMask",icon:rQ,id:"io.metamask"}:{name:tw(this.walletProvider?.session?.peer.metadata.name||"")||"WalletConnect",icon:this.walletProvider?.session?.peer.metadata.icons?.[0]||nw,id:this.walletProvider?.session?.peer.metadata.name.toLowerCase()||"wallet_connect_v2"}}async resetConnection(e){this.walletProvider&&this.walletProvider.connected&&(await this.walletProvider.disconnect(),this.walletProvider.signer.session=void 0,this.walletEntry=tS[e],this.walletClientType=e,this.redirectUri=void 0,this.fallbackUniversalRedirectUri=void 0,function(){try{localStorage.removeItem(tP)}catch{}}(),this.onDisconnect())}async promptConnection(){if(this.provider)return new Promise((e,t)=>{this.onQrModalClosed=()=>{t(new rM)},(async()=>{let t="",r=await Promise.race([this.walletProvider?.enable(),this.proxyProvider.walletTimeout()]);if(r?.length&&(t=r[0]),!t||""===t)throw new eQ("Unable to retrieve address");if(this.walletProvider?.session?.peer.metadata.url){let e=tA(this.walletProvider?.session?.peer.metadata.url);this.walletEntry=e?.entry,this.walletClientType=e?.walletClientType||"unknown",this.proxyProvider.rpcTimeoutDuration=nC(this.rpcConfig,this.walletClientType)}this.connected=!0,await this.syncAccounts(r),e()})().catch(e=>{if(e){t(rO(e));return}t(new eQ("Unknown error during connection"))}).finally(()=>this.modal?.closeModal())})}disconnect(){this.walletProvider?.disconnect().then(()=>this.onDisconnect()).catch(()=>console.warn("Unable to disconnect Wallet Connect provider"))}get walletProvider(){return this.proxyProvider.walletProvider}setWalletProvider(e){this.proxyProvider.setWalletProvider(e)}async createProvider(){let e={};for(let t of this.chains){let r=tb(t.id,this.chains,this.rpcConfig,this.privyAppId);r&&(e[t.id]=r)}let t=this.shouldEnforceDefaultChainOnConnect?[this.defaultChain.id]:[],r=this.chains.map(e=>e.id),n=await C.Gn.init({projectId:this.walletConnectCloudProjectId,chains:t,optionalChains:r,optionalEvents:C.gy,optionalMethods:C.lI,rpcMap:e,showQrModal:!1,metadata:{description:this.privyAppName,name:this.privyAppName,url:window.location.toString(),icons:[]}});return n.on("display_uri",e=>{if(n.signer.abortPairingAttempt(),s.tq&&this.walletEntry){let{redirect:t,href:r}=function(e,t){let r=tT(t);if(r.deepLink)return tR(r.deepLink,e);if(r.universalLink)return tM(r.universalLink,e);throw new eK(`Unsupported wallet ${t.id}`)}(e,this.walletEntry);(function({href:e,name:t}){try{localStorage.setItem(tP,JSON.stringify({href:e,name:t}))}catch{}})({href:r,name:this.walletEntry.displayName}),this.redirectUri=t;let n=function(e,t){let r=tT(t);if(r.universalLink)return tM(r.universalLink,e)}(e,this.walletEntry);n?.redirect&&(this.fallbackUniversalRedirectUri=n.redirect),tO(t,"_self")}else this.modal?.openModal({uri:e,chains:[this.defaultChain.id]})}),n.on("connect",()=>{if(this.modal?.closeModal(),n.session?.peer.metadata.url){let e=tA(n.session?.peer.metadata.url);this.walletEntry=e?.entry,this.walletClientType=e?.walletClientType||"unknown"}}),n}async enableProvider(){return this.walletProvider?.connected?Promise.resolve(this.walletProvider.accounts):await this.walletProvider?.enable()}},nv=e=>{let t=localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(e=>y.A7(e)).map(e=>n.Kn(e));return!!t?.length&&!!e?.linkedAccounts.filter(e=>"wallet"==e.type&&t.includes(e.address)).length},nC=(e,t)=>e.rpcTimeouts&&e.rpcTimeouts[t]||12e4,nb=class extends w.Z{constructor(e,t,r,n,i,a,o,s,l,c,d){super(),this.getEthereumProvider=()=>{let e=this.wallets[0],t=this.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return e&&t?t.proxyProvider:new rF},this.privyAppId=e,this.walletConnectCloudProjectId=t,this.rpcConfig=r,this.chains=n,this.defaultChain=i,this.walletConnectors=[],this.initialized=!1,this.store=a,this.walletList=o,this.shouldEnforceDefaultChainOnConnect=s,this.externalWalletConfig=l,this.privyAppName=c,this.privyAppLogo=d,this.storedConnections=nS()}get wallets(){let e=new Set,t=this.walletConnectors.flatMap(e=>e.wallets).sort((e,t)=>e.connectedAt&&t.connectedAt?t.connectedAt-e.connectedAt:0).filter(t=>{let r=`${t.address}${t.walletClientType}${t.connectorType}`;return!e.has(r)&&(e.add(r),!0)}),r=t.findIndex(e=>e.address===(this.activeWallet?this.activeWallet:"unknown"));return r>=0&&t.unshift(t.splice(r,1)[0]),t}async initialize(){if(this.initialized)return;to.get(tX)&&(to.getKeys().forEach(e=>{e.startsWith("walletconnect")&&to.del(e)}),to.del(tX));let e=tv(this.store,this.walletList,this.externalWalletConfig).then(e=>{e.forEach(({type:e,eip6963InjectedProvider:t,legacyInjectedProvider:r})=>{this.createWalletConnector("injected",e,{eip6963InjectedProvider:t,legacyInjectedProvider:r})})});this.walletList.includes("coinbase_wallet")&&this.createWalletConnector("coinbase_wallet","coinbase_wallet"),!tc()&&this.walletList.includes("phantom")&&this.createWalletConnector("phantom","phantom"),this.externalWalletConfig.walletConnect.enabled&&this.createWalletConnector("wallet_connect_v2","unknown"),await e,this.initialized=!0}findWalletConnector(e,t){return"wallet_connect_v2"===e?this.walletConnectors.find(t=>t.connectorType===e)??null:this.walletConnectors.find(r=>r.connectorType===e&&r.walletClientType===t)??null}onInitialized(e){e.wallets.forEach(e=>{let t=this.storedConnections.find(t=>t.address===e.address&&t.connectorType===e.connectorType&&t.walletClientType===e.walletClientType);t&&(e.connectedAt=t.connectedAt)}),this.saveConnectionHistory(),this.emit("walletsUpdated"),this.emit("connectorInitialized")}onWalletsUpdated(e){e.initialized&&(this.saveConnectionHistory(),this.emit("walletsUpdated"))}addEmbeddedWalletConnector(e,t,r,n){let i=this.findWalletConnector("embedded","privy");if(i)i.proxyProvider.walletProxy=e;else{let i=new rK(new rD(e,t,this.rpcConfig,this.chains,n,r.id),this.chains,r,this.rpcConfig);this.addWalletConnector(i)}}addImportedWalletConnector(e,t,r,n){let i=this.findWalletConnector("embedded_imported","privy");if(i)i.proxyProvider.walletProxy=e;else{let i=new rK(new rD(e,t,this.rpcConfig,this.chains,n,r.id),this.chains,r,this.rpcConfig,!0);this.addWalletConnector(i)}}removeEmbeddedWalletConnector(){let e=this.findWalletConnector("embedded","privy");if(e){let t=this.walletConnectors.indexOf(e);this.walletConnectors.splice(t,1),this.saveConnectionHistory(),this.storedConnections=nS(),this.emit("walletsUpdated")}}removeImportedWalletConnector(){let e=this.findWalletConnector("embedded_imported","privy");if(e){let t=this.walletConnectors.indexOf(e);this.walletConnectors.splice(t,1),this.saveConnectionHistory(),this.storedConnections=nS(),this.emit("walletsUpdated")}}async createWalletConnector(e,t,r){let n=this.findWalletConnector(e,t);if(n)return n instanceof nx&&n.resetConnection(t),n;let i="injected"!==e?"coinbase_wallet"===e?new rV(this.chains,this.defaultChain,this.rpcConfig,this.externalWalletConfig,this.privyAppName,this.privyAppLogo):"phantom"===e?new r3(this.defaultChain):new nx(this.walletConnectCloudProjectId,this.rpcConfig,this.chains,this.defaultChain,this.shouldEnforceDefaultChainOnConnect,this.privyAppId,this.privyAppName,t):"metamask"===t&&r?.eip6963InjectedProvider?new r1(this.chains,this.defaultChain,this.rpcConfig,r?.eip6963InjectedProvider,"metamask"):"metamask"===t&&r?.legacyInjectedProvider?new r0(this.chains,this.defaultChain,this.rpcConfig,r?.legacyInjectedProvider,"metamask"):"phantom"===t&&r?.legacyInjectedProvider?new r0(this.chains,this.defaultChain,this.rpcConfig,r?.legacyInjectedProvider,"phantom"):r?.legacyInjectedProvider&&"unknown_browser_extension"===t?new r0(this.chains,this.defaultChain,this.rpcConfig,r?.legacyInjectedProvider):r?.eip6963InjectedProvider?new rJ(this.chains,this.defaultChain,this.rpcConfig,r?.eip6963InjectedProvider,t):void 0;return i&&this.addWalletConnector(i),i||null}addWalletConnector(e){this.walletConnectors.push(e),e.on("initialized",()=>this.onInitialized(e)),e.on("walletsUpdated",()=>this.onWalletsUpdated(e)),e.initialize().catch(e=>{console.debug("Failed to initialize connector",e)})}saveConnectionHistory(){let e=this.wallets.map(e=>({address:e.address,connectorType:e.connectorType,walletClientType:e.walletClientType,connectedAt:e.connectedAt}));to.put(tJ,e)}async activeWalletSign(e){let t=this.wallets,r=t.length>0?t[0]:null;return r?r.sign(e):null}setActiveWallet(e){this.activeWallet=(0,n.Kn)(e),this.emit("walletsUpdated")}};function n_(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let n=e[r],i=t[r];if(n?.address!==i?.address||n?.chainId!==i?.chainId||n?.connectorType!==i?.connectorType||n?.connectedAt!==i?.connectedAt||n?.walletClientType!==i?.walletClientType||n?.isConnected!==i?.isConnected||n?.linked!==i?.linked)return!1}return!0}var nj,nk,nE,nA=e=>e&&"string"==typeof e.address&&"string"==typeof e.connectorType&&"string"==typeof e.walletClientType&&"number"==typeof e.connectedAt,nS=()=>{let e=to.get(tJ);return e&&Array.isArray(e)&&e.map(e=>nA(e)).every(Boolean)?e:[]},nT=[e4,e6,e5,e9],nP=class{constructor({appId:e,appClientId:t,client:r,defaults:n}){this.appId=e,this.appClientId=t,this.clientAnalyticsId=r.clientAnalyticsId,this.sdkVersion="1.77.0",this.client=r,this.defaults=n,this.fallbackApiUrl=r.fallbackApiUrl,this.baseFetch=_.Wg.create({baseURL:this.defaults.baseURL,timeout:this.defaults.timeout,retry:3,retryDelay:500,retryStatusCodes:[408,409,425,500,502,503,504],credentials:"include",onRequest:async({request:e,options:t})=>{let r=new Headers(t.headers);r.set("privy-app-id",this.appId),this.appClientId&&r.set("privy-client-id",this.appClientId),r.set("privy-ca-id",this.clientAnalyticsId||""),r.set("privy-client",`react-auth:${this.sdkVersion}`);let n=nT.includes(e.toString());if(!r.has("authorization")){let e=await this.client.getAccessToken({disableAutoRefresh:n});null!==e&&r.set("authorization",`Bearer ${e}`)}t.headers=r,t.retryDelay&&(t.retryDelay=3*t.retryDelay)},onRequestError:({error:e})=>{if(e instanceof DOMException&&"AbortError"===e.name)throw new eY}})}async get(e,t){try{return await this.baseFetch(e,t)}catch(e){throw eX(e)}}async post(e,t,r){try{return await this.baseFetch(e,{method:"POST",...t?{body:t}:{},...r})}catch(e){throw eX(e)}}async delete(e,t){try{return await this.baseFetch(e,{method:"DELETE",...t})}catch(e){throw eX(e)}}},nN=e=>({challenge:e.challenge,allowCredentials:e.allow_credentials?.map(e=>({id:e.id,type:e.type,transports:e.transports}))||[],timeout:e.timeout,extensions:{appid:e.extensions?.app_id,credProps:e.extensions?.cred_props,hmacCreateSecret:e.extensions?.hmac_create_secret},userVerification:e.user_verification}),nR=class{static parse(e){try{return new nR(e)}catch{return null}}constructor(e){this.value=e,this._decoded=k.t(e)}get subject(){return this._decoded.sub}get expiration(){return this._decoded.exp}get issuer(){return this._decoded.iss}get audience(){return this._decoded.aud}isExpired(e=0){return Date.now()>=(this.expiration-e)*1e3}},nM=class{constructor(){this.authenticateOnce=new tI(async e=>this._authenticate(e)),this.linkOnce=new tI(async e=>this._link(e)),this.refreshOnce=new tI(this._refresh.bind(this)),this.destroyOnce=new tI(this._destroy.bind(this)),this.forkSessionOnce=new tI(this._forkSession.bind(this))}get token(){try{let e=to.get(tF);return"string"==typeof e?new nR(e).value:null}catch(e){return console.error(e),this.destroyLocalState(),null}}get refreshToken(){try{let e=to.get(tD);return"string"==typeof e?e:null}catch(e){return console.error(e),this.destroyLocalState(),null}}get forkedToken(){try{let e=to.get(tH);return"string"==typeof e?e:null}catch(e){return console.error(e),this.destroyLocalState(),null}}getProviderAccessToken(e){try{let t=to.get(tV(e));if("string"!=typeof t)return null;{let r=new nR(t);return r.isExpired()?(to.del(tV(e)),null):r.value}}catch(e){return console.error(e),null}}get mightHaveServerCookies(){try{let e=j.Z.get(t$);return void 0!==e&&e.length>0}catch(e){console.error(e)}return!1}hasRefreshCredentials(){return this.mightHaveServerCookies||"string"==typeof this.token&&"string"==typeof this.refreshToken&&"deprecated"!==this.refreshToken}hasRecoveryCredentials(){return"string"==typeof this.forkedToken}hasActiveToken(){let e=nR.parse(this.token);return null!==e&&!e.isExpired(30)}authenticate(e){return this.authenticateOnce.execute(e)}link(e){return this.linkOnce.execute(e)}refresh(){return this.refreshOnce.execute()}forkSession(){return this.forkSessionOnce.execute()}destroy(){return this.destroyOnce.execute()}storeProviderAccessToken(e,t){"string"==typeof t?to.put(tV(e),t):to.del(tV(e))}async _authenticate(e){try{let t=await e.authenticate(),{user:r,is_new_user:n,oauth_tokens:i}=t;this.handleTokenResponse(t);let a=i?{provider:i.provider,accessToken:i.access_token,accessTokenExpiresInSeconds:i.access_token_expires_in_seconds,refreshToken:i.refresh_token,refreshTokenExpiresInSeconds:i.refresh_token_expires_in_seconds,scopes:i.scopes}:void 0,o=e instanceof tt?"email":e instanceof rm?"sms":e instanceof rp?"siwe":e instanceof t3?"guest":e instanceof te?"custom_auth":e instanceof t7?e.meta.provider:null;return o&&this.client&&this.client.createAnalyticsEvent({eventName:"sdk_authenticate",payload:{method:o,isNewUser:n}}),"siwe"===o&&this.client&&this.client.createAnalyticsEvent({eventName:"sdk_authenticate_siwe",payload:{connectorType:e.meta.connectorType,walletClientType:e.meta.walletClientType}}),{user:rE(r),isNewUser:n,oAuthTokens:a}}catch(e){throw console.warn("Error authenticating session"),eJ(e)}}async _link(e){try{let t=await e.link(),r=t.oauth_tokens,n=r?{provider:r.provider,accessToken:r.access_token,accessTokenExpiresInSeconds:r.access_token_expires_in_seconds,refreshToken:r.refresh_token,refreshTokenExpiresInSeconds:r.refresh_token_expires_in_seconds,scopes:r.scopes}:void 0;return{user:rE(t),oAuthTokens:n}}catch(e){throw console.warn("Error linking account"),eJ(e)}}async _refresh(){if(!this.api)throw new eK("Session has no API instance");if(!this.client)throw new eK("Session has no PrivyClient instance");await this.client.getAccessToken({disableAutoRefresh:!0});let e=this.token,t=this.refreshToken,r=this.forkedToken;if(this.client.useServerCookies&&!this.mightHaveServerCookies&&this.token&&window.location.origin===this.client.apiUrl)return this.destroyLocalState(),null;try{let n;if(e&&t||this.mightHaveServerCookies){let i={};e&&(i.authorization=`Bearer ${e}`),n=await this.api.post(e4,t?{refresh_token:t}:{},{headers:i}),r&&this.clearForkedToken()}else{if(!r)return null;n=await this.api.post(e6,{refresh_token:r}),this.clearForkedToken()}return this.handleTokenResponse(n),rE(n.user)}catch(e){if(e instanceof eG&&"missing_or_invalid_token"===e.privyErrorCode)return console.warn("Unable to refresh tokens - token is missing or no longer valid"),this.destroyLocalState(),null;throw eJ(e)}}handleTokenResponse(e){e.session_update_action?"set"===e.session_update_action?(this.storeRefreshToken(e.refresh_token),this.storeToken(e.token),e.identity_token&&this.storeIdentityToken(e.identity_token)):"clear"===e.session_update_action?this.destroyLocalState():"ignore"===e.session_update_action&&e.token&&(this.storeToken(e.token),e.identity_token&&this.storeIdentityToken(e.identity_token)):(this.storeRefreshToken(e.refresh_token),this.storeToken(e.token),e.identity_token&&this.storeIdentityToken(e.identity_token))}async _destroy(){try{await this.api?.post(e5,{refresh_token:this.refreshToken})}catch{console.warn("Error destroying session")}this.destroyLocalState()}async _forkSession(){if(!this.api)throw new eK("Session has no API instance");let e=this.refreshToken;try{let t=await this.api.post("/api/v1/sessions/fork",{refresh_token:e});return this.storeRefreshToken(t.refresh_token),this.storeToken(t.token),t.new_session_refresh_token}catch(e){throw eJ(e)}}destroyLocalState(){this.storeRefreshToken(null),this.storeToken(null),this.clearIdentityToken(),this.clearForkedToken()}storeToken(e){if("string"==typeof e){let t=to.get(tF);if(to.put(tF,e),!this.client?.useServerCookies){let t=nR.parse(e)?.expiration;j.Z.set(tU,e,{sameSite:"Strict",secure:!0,expires:t?new Date(1e3*t):void 0})}t!==e&&this.client?.onStoreToken?.(e)}else to.del(tF),j.Z.remove(tU),this.client?.onDeleteToken?.()}storeRefreshToken(e){"string"==typeof e?(to.put(tD,e),this.client?.useServerCookies||j.Z.set(t$,"t",{sameSite:"Strict",secure:!0,expires:30})):(to.del(tD),j.Z.remove("privy-refresh-token"),j.Z.remove(t$))}storeIdentityToken(e){if(this.client?.useServerCookies)return;to.put(tZ,e);let t=nR.parse(e)?.expiration;j.Z.set(tz,e,{sameSite:"Strict",secure:!0,expires:t?new Date(1e3*t):void 0})}clearIdentityToken(){to.del(tZ),j.Z.remove(tz)}clearForkedToken(){to.del(tH)}},nO=class{constructor(e){eH(this,nk),this.apiUrl=e.apiUrl||tL,this.fallbackApiUrl=this.apiUrl,this.useServerCookies=!!e.apiUrl&&e.apiUrl.startsWith("https://privy."),this.timeout=e.timeout||2e4,this.appId=e.appId,this.appClientId=e.appClientId,this.clientAnalyticsId=eq(this,nk,nE).call(this),nj||(nj=new nM),this.session=nj,this.api=this.generateApi(),this.session.client=this}initializeConnectorManager({walletConnectCloudProjectId:e,rpcConfig:t,chains:r,defaultChain:n,store:i,walletList:a,shouldEnforceDefaultChainOnConnect:o,externalWalletConfig:s,appName:l}){this.connectors||(this.connectors=new nb(this.appId,e,t,r,n,i,a,o,s,l))}sessionHasActiveToken(){return this.session.hasActiveToken()}generateApi(){let e=new nP({appId:this.appId,appClientId:this.appClientId,client:this,defaults:{baseURL:this.apiUrl,timeout:this.timeout}});return this.session.api=e,e}updateApiUrl(e){this.apiUrl=e||this.fallbackApiUrl,this.api=this.generateApi(),e&&(this.useServerCookies=!0)}authenticate(){if(!this.authFlow)throw new eK("No auth flow in progress.");return this.session.authenticate(this.authFlow)}async link(){if(!this.authFlow)throw new eK("No auth flow in progress.");let{oAuthTokens:e}=await this.session.link(this.authFlow);return{user:await this.getAuthenticatedUser(),oAuthTokens:e}}storeProviderAccessToken(e,t){this.session.storeProviderAccessToken(e,t)}getProviderAccessToken(e){return this.session.getProviderAccessToken(e)}async logout(){await this.session.destroy(),this.authFlow=void 0}clearProviderAcccessTokens(e){e.linkedAccounts.filter(e=>"cross_app"===e.type).forEach(e=>{this.storeProviderAccessToken(e.providerApp.id,null)})}startAuthFlow(e){return e.api=this.api,this.authFlow=e,this.authFlow}async initMfaSmsVerification(){try{await this.api.post("/api/v1/mfa/passwordless_sms/init",{action:"verify"})}catch(e){throw eX(e)}}async initMfaPasskeyVerification(){try{let e=await this.api.post("/api/v1/mfa/passkeys/init",{});return nN(e.options)}catch(e){throw eX(e)}}async acceptTerms(){try{let e=await this.api.post("/api/v1/users/me/accept_terms",{});return rE(e)}catch(e){throw eJ(e)}}async unlinkEmail(e){try{let t=await this.api.post("/api/v1/passwordless/unlink",{address:e});return await this.getAuthenticatedUser()??rE(t)}catch(e){throw eJ(e)}}async unlinkPhone(e){try{let t=await this.api.post("/api/v1/passwordless_sms/unlink",{phoneNumber:e});return await this.getAuthenticatedUser()??rE(t)}catch(e){throw eJ(e)}}async unlinkWallet(e){try{let t=await this.api.post("/api/v1/siwe/unlink",{address:e});return await this.getAuthenticatedUser()??rE(t)}catch(e){throw eJ(e)}}async unlinkOAuth(e,t){try{let r=await this.api.post("/api/v1/oauth/unlink",{provider:e,subject:t});return await this.getAuthenticatedUser()??rE(r)}catch(e){throw eJ(e)}}async unlinkFarcaster(e){try{let t=await this.api.post("/api/v1/farcaster/unlink",{fid:e});return await this.getAuthenticatedUser()??rE(t)}catch(e){throw eJ(e)}}async unlinkTelegram(e){try{let t=await this.api.post("/api/v1/telegram/unlink",{telegram_user_id:e});return await this.getAuthenticatedUser()??rE(t)}catch(e){throw eJ(e)}}async unlinkPasskey(e){try{let t=await this.api.post("/api/v1/passkeys/unlink",{credential_id:e});return await this.getAuthenticatedUser()??rE(t)}catch(e){throw eJ(e)}}async createAnalyticsEvent({eventName:e,payload:t,timestamp:r,options:n}){if(!(typeof window>"u"))try{this.clientAnalyticsId||console.warn("No client analytics id set, refusing to send analytics event"),await this.api.post(e9,{event_name:e,client_id:this.clientAnalyticsId,payload:{...t||{},clientTimestamp:r?r.toISOString():new Date().toISOString()}},{retry:-1,keepalive:n?.keepAlive??!1})}catch{}}async signMoonpayOnRampUrl(e){try{return this.api.post("/api/v1/plugins/moonpay_on_ramp/sign",e)}catch(e){throw eJ(e)}}async initCoinbaseOnRamp(e){try{return this.api.post("/api/v1/funding/coinbase_on_ramp/init",e)}catch(e){throw eJ(e)}}async getCoinbaseOnRampStatus({partnerUserId:e}){try{return this.api.get(`/api/v1/funding/coinbase_on_ramp/status?partnerUserId=${e}`)}catch(e){throw eJ(e)}}async getAuthenticatedUser(){return this.session.hasRefreshCredentials()||this.session.hasRecoveryCredentials()?this.session.refresh():null}async getAccessToken(e){return this.session.hasActiveToken()?nR.parse(this.session.token)?.audience!==this.appId?(await this.logout(),null):this.session.token:!e?.disableAutoRefresh&&this.session.hasRefreshCredentials()?(await this.session.refresh(),this.session.token):null}async getServerConfig(){try{let e={},t=this.session.token;t&&(e.authorization=`Bearer ${t}`);let r=await this.api.get(`/api/v1/apps/${this.appId}`,{baseURL:this.fallbackApiUrl,headers:e}),n=r.telegram_auth_config?{botId:r.telegram_auth_config.bot_id,botName:r.telegram_auth_config.bot_name,linkEnabled:r.telegram_auth_config.link_enabled,seamlessAuthEnabled:r.telegram_auth_config.seamless_auth_enabled}:void 0,i=r.funding_config?{methods:r.funding_config.methods,defaultRecommendedAmount:r.funding_config.default_recommended_amount,defaultRecommendedCurrency:r.funding_config.default_recommended_currency,promptFundingOnWalletCreation:r.funding_config.prompt_funding_on_wallet_creation}:void 0;return{id:r.id,name:r.name,verificationKey:r.verification_key,logoUrl:r.logo_url||void 0,accentColor:r.accent_color||void 0,showWalletLoginFirst:r.show_wallet_login_first,allowlistConfig:{errorTitle:r.allowlist_config.error_title,errorDetail:r.allowlist_config.error_detail,errorCtaText:r.allowlist_config.cta_text,errorCtaLink:r.allowlist_config.cta_link},walletAuth:r.wallet_auth,emailAuth:r.email_auth,smsAuth:r.sms_auth,googleOAuth:r.google_oauth,twitterOAuth:r.twitter_oauth,discordOAuth:r.discord_oauth,githubOAuth:r.github_oauth,spotifyOAuth:r.spotify_oauth,instagramOAuth:r.instagram_oauth,tiktokOAuth:r.tiktok_oauth,linkedinOAuth:r.linkedin_oauth,appleOAuth:r.apple_oauth,farcasterAuth:r.farcaster_auth,passkeyAuth:r.passkey_auth,telegramAuth:r.telegram_auth,termsAndConditionsUrl:r.terms_and_conditions_url,embeddedWalletConfig:{createOnLogin:r.embedded_wallet_config?.create_on_login,userOwnedRecoveryOptions:r.embedded_wallet_config.user_owned_recovery_options,requireUserOwnedRecoveryOnCreate:r.embedded_wallet_config.require_user_owned_recovery_on_create},privacyPolicyUrl:r.privacy_policy_url,requireUsersAcceptTerms:r.require_users_accept_terms,customApiUrl:r.custom_api_url,walletConnectCloudProjectId:r.wallet_connect_cloud_project_id,fiatOnRampEnabled:r.fiat_on_ramp_enabled,captchaEnabled:r.captcha_enabled,captchaSiteKey:r.captcha_site_key,twitterOAuthOnMobileEnabled:r.twitter_oauth_on_mobile_enabled,createdAt:new Date(1e3*r.created_at),updatedAt:new Date(1e3*r.updated_at),mfaMethods:r.mfa_methods,enforceWalletUis:r.enforce_wallet_uis,legacyWalletUiConfig:r.legacy_wallet_ui_config,telegramAuthConfiguration:n,fundingConfig:i}}catch(e){throw eJ(e)}}async getUsdTokenPrice(e){try{return(await this.api.get(`/api/v1/token_price?chainId=${e.id}&tokenSymbol=${e.nativeCurrency.symbol}`)).usd}catch{console.error(`Unable to fetch token price for chain with id ${e.id}`);return}}async requestFarcasterSignerStatus(e){try{return await this.api.post("/api/v1/farcaster/signer/status",{ed25519_public_key:e})}catch(e){throw console.error("Unable to fetch Farcaster signer status"),e}}async forkSession(){return await this.session.forkSession()}async generateSiweNonce({address:e,captchaToken:t}){try{return(await this.api.post("/api/v1/siwe/init",{address:e,token:t})).nonce}catch(e){throw eJ(e)}}async authenticateWithSiweInternal({message:e,signature:t,chainId:r,walletClientType:n,connectorType:i}){return await this.api.post("/api/v1/siwe/authenticate",{message:e,signature:t,chainId:r,walletClientType:n,connectorType:i})}async linkWithSiweInternal({message:e,signature:t,chainId:r,walletClientType:n,connectorType:i}){return await this.api.post("/api/v1/siwe/link",{message:e,signature:t,chainId:r,walletClientType:n,connectorType:i})}async linkWithSiwe({message:e,signature:t,chainId:r,walletClientType:n,connectorType:i}){try{let a=await this.linkWithSiweInternal({message:e,signature:t,chainId:r,walletClientType:n,connectorType:i});return rE(a)}catch(e){throw eJ(e)}}};nk=new WeakSet,nE=function(){if(typeof window>"u")return null;try{let e=to.get(tB);if("string"==typeof e&&e.length>0)return e}catch{}let e=(0,f.Z)();try{return to.put(tB,e),e}catch{return e}};var nI=(0,o.createContext)({siteKey:"",enabled:!1,appId:void 0,token:void 0,error:void 0,status:"disabled",setToken:np,setError:np,setExecuting:np,waitForResult:()=>Promise.resolve(""),ref:{current:null},remove:np,reset:np,execute:np}),nW=class extends eV{constructor(e,t,r){super(e||"Captcha failed"),this.type="Captcha",t instanceof Error&&(this.cause=t),this.privyErrorCode=r}},nL=({children:e,id:t,captchaSiteKey:r,captchaEnabled:n})=>{let i=(0,o.useRef)(null),[a,s]=(0,o.useState)(),[l,c]=(0,o.useState)(),[d,h]=(0,o.useState)(!1),u=(0,o.useMemo)(()=>n?d||a||l?!d||a||l?a&&!l?{status:"success",token:a}:l?{status:"error",error:l}:{status:"ready"}:{status:"loading"}:{status:"ready"}:{status:"disabled"},[n,a,l,d]);return(0,m.jsx)(nI.Provider,{value:{...u,ref:i,enabled:n,siteKey:r,appId:t,setToken:s,setError:c,setExecuting:h,remove(){n&&(i.current?.remove(),h(!1),c(void 0),s(void 0))},reset(){n&&(i.current?.reset(),h(!1),c(void 0),s(void 0))},execute(){n&&(h(!0),i.current?.execute())},async waitForResult(){if(!n)return"";try{return await function(e,{interval:t=100,timeout:r=5e3}={}){return new Promise((n,i)=>{let a=0,o,s=()=>{if(a>=r){i("Max attempts reached without result");return}if(o=e(),a+=t,null!=o){n(o);return}setTimeout(s,t)};s()})}(()=>i.current?.getResponse(),{interval:200,timeout:2e4})}catch{throw new nW("Captcha failed",null,"captcha_timeout")}}},children:e})},nF=()=>(0,o.useContext)(nI),nU=e=>{let{enabled:t,siteKey:r,appId:n,setError:i,setToken:a,setExecuting:s,ref:l}=nF(),[,c]=(0,o.useMemo)(()=>r?.split("t:")||[],[r]);if((0,o.useEffect)(()=>l.current?.remove,[]),!t)return null;if(!c)throw Error("Unsupported captcha site key");return(0,m.jsx)("div",{className:"hidden h-0 w-0",children:(0,m.jsx)(E.Nc,{...e,ref:l,siteKey:c,options:{action:n,size:"invisible",...e.delayedExecution?{appearance:"execute",execution:"execute"}:{appearance:"always",execution:"render"}},onUnsupported:()=>{e.onUnsupported?.(),console.warn("Browser does not support Turnstile.")},onError:()=>{e.onError?.(),i("Captcha failed"),s(!1)},onSuccess:t=>{e.onSuccess?.(t),a(t),s(!1)},onExpire:()=>{e.onExpire?.();try{l.current?.reset(),i(void 0),a(void 0)}catch{i("expired_and_failed_reset")}}})})},nD=(0,o.createContext)({isNewUserThisSession:!1,linkingOrConnectingHint:null,walletConnectionStatus:null,connectors:[],rpcConfig:{rpcUrls:{}},showFiatPrices:!0,chains:[],clientAnalyticsId:null,pendingTransaction:null,appId:"notAdded",nativeTokenSymbolForChainId:np,initializeWalletProxy:np,getAuthMeta:np,getAuthFlow:np,closePrivyModal:np,openPrivyModal:np,connectWallet:np,initLoginWithWallet:np,loginWithWallet:np,initLoginWithFarcaster:np,loginWithFarcaster:np,loginWithCode:np,initLoginWithEmail:np,initLoginWithSms:np,initUpdateEmail:np,initUpdatePhone:np,resendEmailCode:np,resendSmsCode:np,initLoginWithHeadlessOAuth:np,loginWithHeadlessOAuth:np,crossAppAuthFlow:np,initLoginWithOAuth:np,recoveryOAuthFlow:np,loginWithOAuth:np,initLoginWithPasskey:np,loginWithPasskey:np,initLinkWithPasskey:np,linkWithPasskey:np,refreshUser:np,loginWithGuestAccountFlow:np,walletProxy:null,createAnalyticsEvent:np,acceptTerms:np,getUsdTokenPrice:np,recoverEmbeddedEthereumWallet:np,getMoonpaySignedUrl:np,initCoinbaseOnRamp:np,getCoinbaseOnRampStatus:np,updateWallets:np,fundWallet:np,setReadyToTrue:np,requestFarcasterSignerStatus:np,initLoginWithTelegram:np,loginWithTelegram:np,generateSiweMessage:np,linkWithSiwe:np,embeddedSolanaWallet:null,createEmbeddedSolanaWallet:np,recoverEmbeddedSolanaWallet:np,solanaSignMessage:np}),nZ=()=>(0,o.useContext)(nD),nz=(0,o.createContext)({ready:!1,authenticated:!1,user:null,walletConnectors:null,connectWallet:np,login:np,connectOrCreateWallet:np,linkEmail:np,linkPhone:np,linkFarcaster:np,linkWallet:np,linkCrossAppAccount:np,linkGoogle:np,linkTwitter:np,linkDiscord:np,linkGithub:np,linkSpotify:np,linkInstagram:np,linkTelegram:np,linkTiktok:np,linkLinkedIn:np,linkApple:np,linkPasskey:np,updateEmail:np,updatePhone:np,logout:np,getAccessToken:np,getEthereumProvider:np,getEthersProvider:np,getWeb3jsProvider:np,unlinkEmail:np,unlinkPhone:np,unlinkWallet:np,unlinkGoogle:np,unlinkTwitter:np,unlinkDiscord:np,unlinkGithub:np,unlinkSpotify:np,unlinkInstagram:np,unlinkTiktok:np,unlinkLinkedIn:np,unlinkApple:np,unlinkCrossAppAccount:np,unlinkFarcaster:np,unlinkTelegram:np,unlinkPasskey:np,setActiveWallet:np,forkSession:np,createWallet:np,importWallet:np,signMessage:np,signTypedData:np,enrollInMfa:np,initEnrollmentWithSms:np,initEnrollmentWithTotp:np,initEnrollmentWithPasskey:np,promptMfa:np,init:np,submitEnrollmentWithSms:np,submitEnrollmentWithTotp:np,submitEnrollmentWithPasskey:np,unenroll:np,submit:np,cancel:np,sendTransaction:np,exportWallet:np,setWalletPassword:np,setWalletRecovery:np,requestFarcasterSignerFromWarpcast:np,getFarcasterSignerPublicKey:np,signFarcasterMessage:np,createGuestAccount:np,initLoginWithEmail:np,initLoginWithSms:np,otpState:{status:"initial"},loginWithCode:np,fundWallet:np,initLoginWithHeadlessOAuth:np,loginWithHeadlessOAuth:np,generateSiweMessage:np,linkWithSiwe:np,signMessageWithCrossAppWallet:np,signTypedDataWithCrossAppWallet:np,sendTransactionWithCrossAppWallet:np,isHeadlessOAuthLoading:!1,isModalOpen:!1,mfaMethods:[]}),n$=()=>(0,o.useContext)(nz),nH=e=>{let[t,r]=(0,o.useState)("auto");return(0,o.useEffect)(()=>{let t=new ResizeObserver(e=>{r(e[0]?.contentRect.height??"auto")});return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}},[e.current]),t},nB={login:{onComplete:[],onError:[],onOAuthLoginComplete:[]},logout:{onSuccess:[]},connectWallet:{onSuccess:[],onError:[]},createWallet:{onSuccess:[],onError:[]},linkAccount:{onSuccess:[],onError:[]},configureMfa:{onMfaRequired:[]},setWalletPassword:{onSuccess:[],onError:[]},setWalletRecovery:{onSuccess:[],onError:[]},signMessage:{onSuccess:[],onError:[]},signTypedData:{onSuccess:[],onError:[]},sendTransaction:{onSuccess:[],onError:[]},accessToken:{onAccessTokenGranted:[],onAccessTokenRemoved:[]},oAuthAuthorization:{onOAuthTokenGrant:[]},fundWallet:{onUserExited:[]}},nq=(0,o.createContext)(void 0),nV=()=>(0,o.useContext)(nq);function nG(e,t){if(!t)return;let r=nV().current[e];return(0,o.useEffect)(()=>{for(let[n,i]of Object.entries(t))r.hasOwnProperty(n)||console.warn(`Invalid event type "${n}" for action "${e}"`),r[n]?.push(i);return()=>{for(let[n,i]of Object.entries(t))r.hasOwnProperty(n)||console.warn(`Invalid event type "${n}" for action "${e}"`),r[n]=r[n]?.filter(e=>e!==i)}},[t])}function nK(e,t,r,...n){for(let i of e.current[t][r])i(...n)}function nY(){let e=nV();return(t,r,...n)=>nK(e,t,r,...n)}var nQ=({success:e,fail:t})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(nX,{className:e?"success":t?"fail":""}),(0,m.jsx)(nJ,{className:e?"success":t?"fail":""})]}),nX=A.ZP.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &&&.success {
    border-color: var(--privy-color-success);
    border-bottom-color: var(--privy-color-success);
  }

  &&&.fail {
    border-color: var(--privy-color-error);
    border-bottom-color: var(--privy-color-error);
  }
`,nJ=(0,A.ZP)(nX)`
  && {
    border-bottom-color: ${e=>e.color??"var(--privy-color-accent)"};
    animation: none;
    opacity: 0.5;
  }
`,n0=e=>(0,m.jsx)(n1,{color:e.color||"var(--privy-color-foreground-3)"}),n1=(0,A.ZP)(nX)`
  && {
    height: 1rem;
    width: 1rem;
    margin: 2px 0;
    border-width: 1.5px;

    /* Override default Loader to match button transitions */
    transition: border-color 200ms ease;
  }
`,n2=A.ZP.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: 100%;
    cursor: pointer;
    border-radius: var(--privy-border-radius-md);

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.016px;
  }

  && {
    padding: 12px 16px;
  }
`,n3=({children:e,loading:t,disabled:r,loadingText:n="Loading...",...i})=>(0,m.jsx)(n7,{disabled:t||r,...i,children:t?(0,m.jsxs)("span",{children:[(0,m.jsx)(n0,{}),n?(0,m.jsx)("span",{children:n}):null]}):e}),n4=({children:e,loading:t,disabled:r,...n})=>(0,m.jsx)(n5,{disabled:r,...n,children:t?(0,m.jsx)(n0,{color:"var(--privy-color-foreground-accent)"}):e}),n5=(0,A.ZP)(n2)`
  position: relative;

  && {
    background-color: var(--privy-color-accent);
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: var(--privy-color-accent-dark);
  }

  &:active {
    background-color: var(--privy-color-accent-dark);
  }

  &:disabled,
  &:hover:disabled,
  &:active:disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: var(--privy-color-foreground-accent);
    background-color: var(--privy-color-accent-dark);
  }
`,n6=({children:e,loading:t,disabled:r,loadingText:n="Loading...",...i})=>(0,m.jsx)(n7,{as:"a",disabled:t||r,...i,children:t?(0,m.jsxs)("span",{children:[(0,m.jsx)(n0,{}),n?(0,m.jsx)("span",{children:n}):null]}):e}),n7=(0,A.ZP)(n2)`
  position: relative;

  && {
    background-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-accent)"};
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-accent-dark)"};
  }

  &:active {
    background-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-accent-dark)"};
  }

  &:hover:disabled,
  &:active:disabled {
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }

  /* If an anchor tag, :disabled isn't a thing, so manually set state */
  ${e=>e.disabled?(0,A.iv)`
          &&&,
          &&&:hover,
          &&&:active {
            background-color: var(--privy-color-background-2);
            color: var(--privy-color-foreground-3);
            cursor: not-allowed;
            pointer-events: none;
          }
        `:""}

  > span {
    display: flex;
    align-items: center;
    gap: 8px;

    opacity: 1;
    animation: fadein 200ms ease;
  }
`,n8=({children:e,loading:t,disabled:r,loadingText:n="Loading...",...i})=>(0,m.jsx)(n9,{disabled:t||r,...i,children:t?(0,m.jsxs)("span",{children:[(0,m.jsx)(n0,{}),n?(0,m.jsx)("span",{children:n}):null]}):e}),n9=(0,A.ZP)(n2)`
  && {
    border-width: 1px;
    border-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-foreground-4)"};
    color: var(--privy-color-foreground);

    transition: border-color 200ms ease;
  }

  &:hover,
  &:active {
    border-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  }

  &:hover:disabled,
  &:active:disabled {
    border-color: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 8px;

    opacity: 1;
    animation: fadein 200ms ease;
  }
`,ie=A.ZP.button`
  && {
    padding: 12px 16px;
    font-weight: 500;
    text-align: center;
    color: var(--privy-color-foreground-accent);
    background-color: var(--privy-color-accent);
    border-radius: var(--privy-border-radius-sm);
    min-width: 144px;
    opacity: ${e=>e.invisible?"0":"1"};
    transition: opacity 200ms ease, background-color 200ms ease, color 200ms ease;
    user-select: none;

    ${e=>e.invisible&&(0,A.iv)`
        pointer-events: none;
      `}

    &:hover {
      background-color: var(--privy-color-accent-dark);
    }
    &:active {
      background-color: var(--privy-color-accent-dark);
    }

    &:hover:disabled,
    &:active:disabled {
      background-color: var(--privy-color-background-2);
      color: var(--privy-color-foreground-3);
      cursor: not-allowed;
    }
  }
`,it=(A.ZP.div`
  /* Set to match height of SoftCtaButton to avoid reflow if conditionally rendered */
  height: 44px;
`,({children:e,onClick:t,disabled:r,isSubmitting:n,...i})=>(0,m.jsxs)(ir,{isSubmitting:n,onClick:t,disabled:r,...i,children:[(0,m.jsx)("span",{children:e}),(0,m.jsx)("span",{children:(0,m.jsx)(n0,{})})]})),ir=A.ZP.button`
  && {
    color: var(--privy-color-accent);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    border-radius: 0px var(--privy-border-radius-mdlg) var(--privy-border-radius-mdlg) 0px;
    border: none;
    transition: color 200ms ease;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
    }

    :hover {
      color: var(--privy-color-accent-dark);
    }

    && > :first-child {
      opacity: ${e=>e.isSubmitting?0:1};
    }

    && > :last-child {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);

      /** Will map to the opposite of first span */
      opacity: ${e=>e.isSubmitting?1:0};
    }

    :disabled,
    :hover:disabled {
      color: var(--privy-color-foreground-3);
      cursor: not-allowed;
    }
  }
`,ii=A.ZP.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    background-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
  }
`,ia=({backFn:e})=>(0,m.jsx)("div",{children:(0,m.jsx)(ic,{onClick:e,children:(0,m.jsx)(T.Z,{height:"16px",width:"16px",strokeWidth:2})})}),io=({infoFn:e})=>(0,m.jsx)("div",{children:(0,m.jsx)(id,{"aria-label":"info",onClick:e,children:(0,m.jsx)(S.Z,{height:"22px",width:"22px",strokeWidth:2})})}),is=e=>(0,m.jsx)("div",{children:(0,m.jsx)(ic,{"aria-label":"close modal",onClick:e.onClose,children:(0,m.jsx)(P.Z,{height:"16px",width:"16px",strokeWidth:2})})}),il=({backFn:e,infoFn:t,onClose:r,title:n,closeable:i=!0})=>{let{closePrivyModal:a}=nZ(),o=nh();return(0,m.jsxs)(ih,{children:[(0,m.jsxs)(iu,{children:[e&&(0,m.jsx)(ia,{backFn:e}),t&&(0,m.jsx)(io,{infoFn:t})]}),n&&(0,m.jsx)(im,{id:"privy-dialog-title",children:n}),(0,m.jsx)(ip,{children:!o.render.standalone&&i&&(0,m.jsx)(is,{onClose:r||(()=>a())})})]})},ic=A.ZP.button`
  && {
    cursor: pointer;
    display: flex;
    opacity: 0.6;

    background-color: var(--privy-color-background-2);
    border-radius: var(--privy-border-radius-full);
    padding: 4px;

    > svg {
      margin: auto;
      color: var(--privy-color-foreground);
    }

    :hover {
      opacity: 1;
    }
  }
`,id=(0,A.ZP)(ic)`
  && {
    background-color: transparent;
  }
`,ih=A.ZP.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--privy-color-foreground);
  }
`,iu=A.ZP.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 8px;
`,ip=A.ZP.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,im=A.ZP.div`
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,ig=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`,iy=A.ZP.div`
  text-align: left;
  flex-grow: 1;
`,iw=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,ix=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,iv=(0,A.ZP)(ix)`
  ${e=>"light"===e.colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e.colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size: 100% 32px, 100% 16px;
  background-attachment: local, scroll;
`,iC=(0,A.iv)`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;

    padding: 12px 16px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-mdlg);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }

    svg {
      height: 24px;
      max-height: 24px;
      max-width: 24px;
    }
  }
`,ib=A.ZP.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,i_=A.ZP.button`
  ${iC}
`,ij=A.ZP.a`
  ${iC}
`,ik=A.ZP.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${e=>e.if?"display: none;":""}
`,iE=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-bottom: 16px;
  margin-top: 24px;
`,iA=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,iS=A.ZP.div`
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: var(--privy-color-foreground-3);

  && > a {
    color: var(--privy-color-accent);
  }
`;function iT(e){let{legal:{privacyPolicyUrl:t,termsAndConditionsUrl:r,requireUsersAcceptTerms:n}}=e.app;if(n&&!e.alwaysShowImplicitConsent||!r&&!t)return(0,m.jsx)(iS,{});let i=!!(t&&r);return(0,m.jsxs)(iS,{children:["By logging in I agree to the"," ",r&&(0,m.jsx)("a",{href:r,target:"_blank",children:i?"Terms":"Terms of Service"}),i&&" & ",t&&(0,m.jsx)("a",{href:t,target:"_blank",children:"Privacy Policy"})]})}var iP=()=>(0,m.jsxs)(iN,{children:[(0,m.jsx)(rG,{}),(0,m.jsx)("a",{href:"https://www.privy.io/",target:"_blank",children:"Protected by Privy"})]}),iN=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 12px;
  gap: 2px;

  font-size: 13px;

  && svg {
    height: 14px;
    width: 14px;
    margin-bottom: 2px;
    opacity: 0.5;
  }

  && a {
    color: var(--privy-color-foreground-3);
    &:hover {
      text-decoration: underline;
    }
  }

  @media all and (display-mode: standalone) {
    padding-bottom: 30px;
  }
`,iR=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 30px;
  @media (max-width: 440px) {
    padding: 10px 10px 20px;
  }
`,iM=A.ZP.div`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`,iO=A.ZP.div`
  font-size: 0.875rem;

  text-align: center;
`,iI=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  padding: 20px 0;
  @media (max-width: 440px) {
    padding: 10px 10px 20px;
  }
`,iW=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  padding: 1rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,iL=A.ZP.div`
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    z-index: 2;
    height: 25px !important;
    width: 25px !important;
    color: var(--privy-color-accent);
  }
`,iF=A.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
`,iU=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`,iD=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,iZ=A.ZP.div`
  display: flex;
  gap: 5px;
  width: 100%;
`,iz=A.ZP.button`
  && {
    background-color: transparent;
    color: var(--privy-color-foreground-3);
    padding: 0 10px;
    display: flex;
    align-items: center;

    > svg {
      z-index: 2;
      height: 20px !important;
      width: 20px !important;
    }
  }

  &&:hover {
    color: var(--privy-color-error);
  }
`,i$=A.ZP.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    z-index: 2;
    height: 20px !important;
    width: 20px !important;
  }
`,iH=A.ZP.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 400 !important;
  color: ${e=>e.isAccent?"var(--privy-color-accent)":"var(--privy-color-foreground-3)"};

  > svg {
    z-index: 2;
    height: 18px !important;
    width: 18px !important;
    display: flex !important;
    align-items: flex-end;
  }
`,iB=A.ZP.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,iq=A.ZP.p`
  text-align: left;
  width: 100%;
  color: var(--privy-color-foreground-3) !important;
`,iV=A.ZP.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: 100%;
    cursor: pointer;
    border-radius: var(--privy-border-radius-md);

    font-size: 0.875rem;
    line-height: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.016px;
  }

  && {
    color: ${e=>"dark"===e.theme?"var(--privy-color-foreground-2)":"var(--privy-color-accent)"};
    background-color: transparent;

    padding: 0.5rem 0px;
  }

  &:hover {
    text-decoration: underline;
  }
`,iG=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${({status:e})=>"success"===e?"var(--privy-color-success)":"var(--privy-color-accent)"};

  > svg {
    z-index: 2;
    height: 50px !important;
    width: auto !important;
    color: white;
  }
`,iK=A.ZP.div`
  color: var(--privy-color-error);
`,iY=({termsAndConditionsUrl:e,privacyPolicyUrl:t,onAccept:r,onDecline:n})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{closeable:!1}),(0,m.jsx)(R.Z,{width:56,height:56,fill:"var(--privy-color-accent)",style:{margin:"auto"}}),(0,m.jsx)(iM,{style:{marginTop:24},children:"One last step"}),(0,m.jsx)(iO,{children:"By signing up, you agree to our terms and privacy policy."}),(0,m.jsxs)(ix,{style:{marginTop:24},children:[e&&(0,m.jsxs)(ij,{target:"_blank",href:e,children:["View Terms ",(0,m.jsx)(N.Z,{style:{marginLeft:"auto"}})]}),t&&(0,m.jsxs)(ij,{target:"_blank",href:t,children:["View Privacy Policy ",(0,m.jsx)(N.Z,{style:{marginLeft:"auto"}})]})]}),(0,m.jsxs)(iQ,{style:{marginTop:24},children:[(0,m.jsx)(n8,{onClick:n,children:"No thanks"}),(0,m.jsx)(n3,{onClick:r,children:"Accept"})]}),(0,m.jsx)(iP,{})]}),iQ=A.ZP.div`
  display: flex;
  gap: 10px;
`,iX=A.ZP.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
    border-bottom-color: ${e=>e.color??"var(--privy-color-accent)"};
  }
`,iJ=({style:e,...t})=>(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",style:{height:"1.5rem",width:"1.5rem",...e},...t,children:(0,m.jsx)("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",clipRule:"evenodd"})}),i0=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-bottom: 16px;
`,i1=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,i2=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,i3=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,i4=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,i5=(0,A.ZP)(i3)`
  padding: 20px 0;
`,i6=(0,A.ZP)(i3)`
  gap: 16px;
`,i7=A.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,i8=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,i9=(A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`),ae=A.ZP.div`
  height: 16px;
`,at=A.ZP.div`
  height: 12px;
`,ar=A.ZP.div`
  position: relative;
`,an=A.ZP.div`
  height: ${e=>e.height??"12"}px;
`,ai=A.ZP.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`,aa=({title:e,description:t,children:r,...n})=>(0,m.jsx)(al,{...n,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h3",{children:e}),"string"==typeof t?(0,m.jsx)("p",{children:t}):t,r]})}),ao=(0,A.ZP)(aa)`
  margin-bottom: 24px;
`,as=({title:e,description:t,icon:r,children:n,...i})=>(0,m.jsxs)(ac,{...i,children:[r||null,(0,m.jsx)("h3",{children:e}),t&&"string"==typeof t?(0,m.jsx)("p",{children:t}):t,n]}),al=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,ac=(0,A.ZP)(al)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`,ad=Array(6).fill(""),ah=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
`,au=A.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  > div:last-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-md);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-md);
      padding: 8px 10px;
      height: 58px;
      width: 46px;
      text-align: center;
      font-size: 18px;
    }

    > input:focus {
      border: 1px solid var(--privy-color-accent);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-success);
    }

    > input.fail {
      border: 1px solid var(--privy-color-error);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`,ap=A.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: ${e=>e.success?"var(--privy-color-success)":e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,am=A.ZP.div`
  font-size: 13px;
  color: var(--privy-color-foreground);
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  // Equal opposing size buffer to account for auto margining when the
  // success/fail text does not show up
  padding-bottom: 32px;
`,ag=A.ZP.div`
  color: var(--privy-color-accent);
  padding: 2px 0;
  > button {
    text-decoration: underline;
  }
`,af=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,ay=A.ZP.span`
  font-weight: 500;
  word-break: break-all;
`,aw=({icon:e})=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(ax,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{}),"string"==typeof e?(0,m.jsx)("span",{style:{background:`url('${e}')`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"cover"}}):e?(0,m.jsx)(e,{style:{width:"38px",height:"38px"}}):(0,m.jsx)("span",{})]})})}),ax=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`,av=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,aC=({icon:e,name:t})=>"string"==typeof e?(0,m.jsx)("img",{alt:`${t||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):e?(0,m.jsx)(e,{}):null,ab=(0,A.F4)`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,a_=(0,A.iv)`
  ${e=>e.$isLoading?(0,A.iv)`
          width: 35%;
          animation: ${ab} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`,aj=({children:e,color:t,isLoading:r,isPulsing:n,className:i})=>(0,m.jsx)(ak,{$color:t,$isLoading:r,$isPulsing:n,className:i,children:e}),ak=A.ZP.span`
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
  border-radius: var(--privy-border-radius-sm);

  ${e=>{let t,r;"green"===e.$color&&(t="var(--privy-color-success-dark)",r="var(--privy-color-success-light)"),"red"===e.$color&&(t="var(--privy-color-error)",r="var(--privy-color-error-light)"),"gray"===e.$color&&(t="var(--privy-color-foreground-2)",r="var(--privy-color-background-2)");let n=(0,A.F4)`
      from, to {
        background-color: ${r};
      }

      50% {
        background-color: rgba(${r}, 0.8);
      }
    `;return(0,A.iv)`
      color: ${t};
      background-color: ${r};
      ${e.$isPulsing&&(0,A.iv)`
        animation: ${n} 3s linear infinite;
      `};
    `}}

  ${a_}
`,aE=({...e})=>(0,m.jsxs)("svg",{width:"146",height:"146",viewBox:"0 0 146 146",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,m.jsx)("circle",{cx:"73",cy:"73",r:"73",fill:"#0052FF"}),(0,m.jsx)("path",{d:"M73.323 123.729C101.617 123.729 124.553 100.832 124.553 72.5875C124.553 44.343 101.617 21.4463 73.323 21.4463C46.4795 21.4463 24.4581 42.0558 22.271 68.2887H89.9859V76.8864H22.271C24.4581 103.119 46.4795 123.729 73.323 123.729Z",fill:"white"})]}),aA={coinbase_wallet:{logo:rT,displayName:"Coinbase Wallet",rdns:"com.coinbase.wallet"},coinbase_smart_wallet:{logo:rT,displayName:"Coinbase Smart Wallet",rdns:"com.coinbase.wallet"},metamask:{logo:rQ,displayName:"MetaMask",rdns:"io.metamask"},phantom:{logo:rX,displayName:"Phantom"},rainbow:{logo:({style:e,...t})=>(0,m.jsxs)("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,m.jsx)("g",{clipPath:"url(#clip0_5_32)",children:(0,m.jsxs)("g",{clipPath:"url(#clip1_5_32)",children:[(0,m.jsx)("mask",{id:"mask0_5_32",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"120",height:"120",children:(0,m.jsx)("path",{d:"M78.163 0H41.837C29.79 0 23.767 0 17.283 2.04999C10.203 4.62701 4.627 10.203 2.05 17.283C0 23.767 0 29.791 0 41.837V78.163C0 90.21 0 96.232 2.05 102.717C4.627 109.797 10.203 115.373 17.283 117.949C23.767 120 29.79 120 41.837 120H78.163C90.21 120 96.232 120 102.717 117.949C109.797 115.373 115.373 109.797 117.95 102.717C120 96.232 120 90.21 120 78.163V41.837C120 29.791 120 23.767 117.95 17.283C115.373 10.203 109.797 4.62701 102.717 2.04999C96.232 0 90.21 0 78.163 0Z",fill:"black"})}),(0,m.jsx)("g",{mask:"url(#mask0_5_32)",children:(0,m.jsx)("rect",{width:"120",height:"120",fill:"url(#paint0_linear_5_32)"})}),(0,m.jsx)("path",{d:"M20 38H26C56.9279 38 82 63.0721 82 94V100H94C97.3137 100 100 97.3137 100 94C100 53.1309 66.8691 20 26 20C22.6863 20 20 22.6863 20 26V38Z",fill:"url(#paint1_radial_5_32)"}),(0,m.jsx)("path",{d:"M84 94H100C100 97.3137 97.3137 100 94 100H84V94Z",fill:"url(#paint2_linear_5_32)"}),(0,m.jsx)("path",{d:"M26 20L26 36H20L20 26C20 22.6863 22.6863 20 26 20Z",fill:"url(#paint3_linear_5_32)"}),(0,m.jsx)("path",{d:"M20 36H26C58.0325 36 84 61.9675 84 94V100H66V94C66 71.9086 48.0914 54 26 54H20V36Z",fill:"url(#paint4_radial_5_32)"}),(0,m.jsx)("path",{d:"M68 94H84V100H68V94Z",fill:"url(#paint5_linear_5_32)"}),(0,m.jsx)("path",{d:"M20 52L20 36L26 36L26 52H20Z",fill:"url(#paint6_linear_5_32)"}),(0,m.jsx)("path",{d:"M20 62C20 65.3137 22.6863 68 26 68C40.3594 68 52 79.6406 52 94C52 97.3137 54.6863 100 58 100H68V94C68 70.804 49.196 52 26 52H20V62Z",fill:"url(#paint7_radial_5_32)"}),(0,m.jsx)("path",{d:"M52 94H68V100H58C54.6863 100 52 97.3137 52 94Z",fill:"url(#paint8_radial_5_32)"}),(0,m.jsx)("path",{d:"M26 68C22.6863 68 20 65.3137 20 62L20 52L26 52L26 68Z",fill:"url(#paint9_radial_5_32)"})]})}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",{id:"paint0_linear_5_32",x1:"60",y1:"0",x2:"60",y2:"120",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#174299"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#001E59"})]}),(0,m.jsxs)("radialGradient",{id:"paint1_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26 94) rotate(-90) scale(74)",children:[(0,m.jsx)("stop",{offset:"0.770277",stopColor:"#FF4000"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#8754C9"})]}),(0,m.jsxs)("linearGradient",{id:"paint2_linear_5_32",x1:"83",y1:"97",x2:"100",y2:"97",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#FF4000"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#8754C9"})]}),(0,m.jsxs)("linearGradient",{id:"paint3_linear_5_32",x1:"23",y1:"20",x2:"23",y2:"37",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#8754C9"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#FF4000"})]}),(0,m.jsxs)("radialGradient",{id:"paint4_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26 94) rotate(-90) scale(58)",children:[(0,m.jsx)("stop",{offset:"0.723929",stopColor:"#FFF700"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#FF9901"})]}),(0,m.jsxs)("linearGradient",{id:"paint5_linear_5_32",x1:"68",y1:"97",x2:"84",y2:"97",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#FFF700"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#FF9901"})]}),(0,m.jsxs)("linearGradient",{id:"paint6_linear_5_32",x1:"23",y1:"52",x2:"23",y2:"36",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#FFF700"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#FF9901"})]}),(0,m.jsxs)("radialGradient",{id:"paint7_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26 94) rotate(-90) scale(42)",children:[(0,m.jsx)("stop",{offset:"0.59513",stopColor:"#00AAFF"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#01DA40"})]}),(0,m.jsxs)("radialGradient",{id:"paint8_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(51 97) scale(17 45.3333)",children:[(0,m.jsx)("stop",{stopColor:"#00AAFF"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#01DA40"})]}),(0,m.jsxs)("radialGradient",{id:"paint9_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(23 69) rotate(-90) scale(17 322.37)",children:[(0,m.jsx)("stop",{stopColor:"#00AAFF"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#01DA40"})]}),(0,m.jsx)("clipPath",{id:"clip0_5_32",children:(0,m.jsx)("rect",{width:"120",height:"120",fill:"white"})}),(0,m.jsx)("clipPath",{id:"clip1_5_32",children:(0,m.jsx)("rect",{width:"120",height:"120",fill:"white"})})]})]}),displayName:"Rainbow",rdns:"me.rainbow"},wallet_connect:{logo:nw,displayName:"WalletConnect"},zerion:{logo:({style:e,...t})=>(0,m.jsxs)("svg",{width:"176",height:"176",viewBox:"0 0 176 176",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_1704_1423)",children:[(0,m.jsx)("path",{d:"M126.233 176H49.7672C22.287 176 0 153.723 0 126.233V49.7673C0 22.287 22.2769 0 49.7672 0H126.233C153.713 0 176 22.277 176 49.7673V126.233C176 153.723 153.713 176 126.233 176Z",fill:"#2461ED"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M100.667 85.6591C83.4133 76.3353 62.4196 64.2443 46.6192 54.3891C41.9573 51.0306 44.3234 43.9023 49.9578 43.9023H128.138C132.499 43.9023 135.416 48.7648 133.231 52.4442C127.977 61.5174 120.308 73.0368 113.901 82.1702C110.462 87.0727 104.858 87.9149 100.667 85.6591ZM75.5031 88.6867C92.1858 97.5795 115.566 111.104 132.178 121.33C137.311 124.498 135.266 132.098 129.271 132.098C119.46 132.098 103.518 132.1 87.6592 132.103C71.9639 132.105 56.3497 132.108 46.8398 132.108C42.0476 132.108 39.5913 127.135 41.6265 123.666C48.5041 111.946 56.2338 100.116 62.6603 91.2834C65.5176 87.3433 71.3325 86.461 75.5031 88.6867Z",fill:"white"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_1704_1423",children:(0,m.jsx)("rect",{width:"176",height:"176",fill:"white"})})})]}),displayName:"Zerion",rdns:"io.zerion.wallet"},brave_wallet:{logo:({...e})=>(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 436.49 511.97",height:"24",width:"24",...e,children:[(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",{id:"brave-linear-gradient",x1:"-18.79",y1:"359.73",x2:"194.32",y2:"359.73",gradientTransform:"matrix(2.05, 0, 0, -2.05, 38.49, 992.77)",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{offset:"0",stopColor:"#f1562b"}),(0,m.jsx)("stop",{offset:"0.3",stopColor:"#f1542b"}),(0,m.jsx)("stop",{offset:"0.41",stopColor:"#f04d2a"}),(0,m.jsx)("stop",{offset:"0.49",stopColor:"#ef4229"}),(0,m.jsx)("stop",{offset:"0.5",stopColor:"#ef4029"}),(0,m.jsx)("stop",{offset:"0.56",stopColor:"#e83e28"}),(0,m.jsx)("stop",{offset:"0.67",stopColor:"#e13c26"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#df3c26"})]})}),(0,m.jsx)("path",{style:{fill:"url(#brave-linear-gradient)"},d:"M436.49,165.63,420.7,122.75l11-24.6A8.47,8.47,0,0,0,430,88.78L400.11,58.6a48.16,48.16,0,0,0-50.23-11.66l-8.19,2.89L296.09.43,218.25,0,140.4.61,94.85,50.41l-8.11-2.87A48.33,48.33,0,0,0,36.19,59.3L5.62,90.05a6.73,6.73,0,0,0-1.36,7.47l11.47,25.56L0,165.92,56.47,380.64a89.7,89.7,0,0,0,34.7,50.23l111.68,75.69a24.73,24.73,0,0,0,30.89,0l111.62-75.8A88.86,88.86,0,0,0,380,380.53l46.07-176.14Z"}),(0,m.jsx)("path",{style:{fill:"#fff"},d:"M231,317.33a65.61,65.61,0,0,0-9.11-3.3h-5.49a66.08,66.08,0,0,0-9.11,3.3l-13.81,5.74-15.6,7.18-25.4,13.24a4.84,4.84,0,0,0-.62,9l22.06,15.49q7,5,13.55,10.76l6.21,5.35,13,11.37,5.89,5.2a10.15,10.15,0,0,0,12.95,0l25.39-22.18,13.6-10.77,22.06-15.79a4.8,4.8,0,0,0-.68-8.93l-25.36-12.8L244.84,323ZM387.4,175.2l.8-2.3a61.26,61.26,0,0,0-.57-9.18,73.51,73.51,0,0,0-8.19-15.44l-14.35-21.06-10.22-13.88-19.23-24a69.65,69.65,0,0,0-5.7-6.67h-.4L321,84.25l-42.27,8.14a33.49,33.49,0,0,1-12.59-1.84l-23.21-7.5-16.61-4.59a70.52,70.52,0,0,0-14.67,0L195,83.1l-23.21,7.54a33.89,33.89,0,0,1-12.59,1.84l-42.22-8-8.54-1.58h-.4a65.79,65.79,0,0,0-5.7,6.67l-19.2,24Q77.81,120.32,73,127.45L58.61,148.51l-6.78,11.31a51,51,0,0,0-1.94,13.35l.8,2.3A34.51,34.51,0,0,0,52,179.81l11.33,13,50.23,53.39a14.31,14.31,0,0,1,2.55,14.34L107.68,280a25.23,25.23,0,0,0-.39,16l1.64,4.52a43.58,43.58,0,0,0,13.39,18.76l7.89,6.43a15,15,0,0,0,14.35,1.72L172.62,314A70.38,70.38,0,0,0,187,304.52l22.46-20.27a9,9,0,0,0,3-6.36,9.08,9.08,0,0,0-2.5-6.56L159.2,237.18a9.83,9.83,0,0,1-3.09-12.45l19.66-36.95a19.21,19.21,0,0,0,1-14.67A22.37,22.37,0,0,0,165.58,163L103.94,139.8c-4.44-1.6-4.2-3.6.51-3.88l36.2-3.59a55.9,55.9,0,0,1,16.9,1.5l31.5,8.8a9.64,9.64,0,0,1,6.74,10.76L183.42,221a34.72,34.72,0,0,0-.61,11.41c.5,1.61,4.73,3.6,9.36,4.73l19.19,4a46.38,46.38,0,0,0,16.86,0l17.26-4c4.64-1,8.82-3.23,9.35-4.85a34.94,34.94,0,0,0-.63-11.4l-12.45-67.59a9.66,9.66,0,0,1,6.74-10.76l31.5-8.83a55.87,55.87,0,0,1,16.9-1.5l36.2,3.37c4.74.44,5,2.2.54,3.88L272,162.79a22.08,22.08,0,0,0-11.16,10.12,19.3,19.3,0,0,0,1,14.67l19.69,36.95A9.84,9.84,0,0,1,278.45,237l-50.66,34.23a9,9,0,0,0,.32,12.78l.15.14,22.49,20.27a71.46,71.46,0,0,0,14.35,9.47l28.06,13.35a14.89,14.89,0,0,0,14.34-1.76l7.9-6.45a43.53,43.53,0,0,0,13.38-18.8l1.65-4.52a25.27,25.27,0,0,0-.39-16l-8.26-19.49a14.4,14.4,0,0,1,2.55-14.35l50.23-53.45,11.3-13a35.8,35.8,0,0,0,1.54-4.24Z"})]}),displayName:"Brave Wallet",rdns:"com.brave.wallet"},cryptocom:{logo:({style:e,...t})=>(0,m.jsxs)("svg",{width:"400",height:"400",viewBox:"0 0 400 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M260.543 0C300.7 0 320.773 0 342.39 6.83333C365.99 15.4233 384.577 34.01 393.167 57.61C400 79.2233 400 99.3033 400 139.457V260.543C400 300.7 400 320.773 393.167 342.39C384.577 365.99 365.99 384.577 342.39 393.163C320.773 400 300.7 400 260.543 400H139.457C99.3 400 79.2233 400 57.61 393.163C34.01 384.577 15.4233 365.99 6.83333 342.39C0 320.773 0 300.7 0 260.543V139.457C0 99.3033 0 79.2233 6.83333 57.61C15.4233 34.01 34.01 15.4233 57.61 6.83333C79.2233 0 99.3 0 139.457 0H260.543Z",fill:"white"}),(0,m.jsx)("mask",{id:"mask0_16909_31415",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"400",height:"400",children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M260.543 0C300.7 0 320.773 0 342.39 6.83333C365.99 15.4233 384.577 34.01 393.167 57.61C400 79.2233 400 99.3033 400 139.457V260.543C400 300.7 400 320.773 393.167 342.39C384.577 365.99 365.99 384.577 342.39 393.163C320.773 400 300.7 400 260.543 400H139.457C99.3 400 79.2233 400 57.61 393.163C34.01 384.577 15.4233 365.99 6.83333 342.39C0 320.773 0 300.7 0 260.543V139.457C0 99.3033 0 79.2233 6.83333 57.61C15.4233 34.01 34.01 15.4233 57.61 6.83333C79.2233 0 99.3 0 139.457 0H260.543Z",fill:"white"})}),(0,m.jsxs)("g",{mask:"url(#mask0_16909_31415)",children:[(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M199.804 39.8501L59.3756 119.957V280.18L199.804 360.297L340.23 280.18V119.957L199.804 39.8501Z",fill:"#FEFEFE"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M199.804 39.8501L59.3756 119.957V280.18L199.804 360.297L340.23 280.18V119.957L199.804 39.8501ZM144.359 109.116H254.873L268.197 164.788H131.538L144.359 109.116ZM176.201 204.291L164.148 173.197H235.711L223.913 204.291L227.339 239.028L199.804 239.154H172.522L176.201 204.291ZM211.354 275.892V264.862L236.093 241.414V204.417L268.451 183.607L305.376 211.066L255.119 297.589H235.203L211.354 275.892ZM94.2395 211.066L131.282 183.857L164.021 204.417V241.414L188.76 264.862V275.892L164.913 297.84H144.734L94.2395 211.066Z",fill:"#002D72"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M255.12 297.589H235.202L211.355 275.892V264.862L236.094 241.414V204.417L268.45 183.607L305.377 211.066L255.12 297.589ZM199.803 39.8498V109.117H254.872L268.198 164.789H199.803V173.199H235.712L223.914 204.291L227.338 239.028L199.803 239.153V360.296L340.231 280.181V119.957L199.803 39.8498Z",fill:"url(#paint0_linear_16909_31415)",style:{mixBlendMode:"multiply"}}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M188.761 275.892L164.912 297.84H144.734L94.2389 211.066L131.283 183.858L164.022 204.417V241.414L188.761 264.862V275.892ZM172.522 239.153L176.2 204.291L164.149 173.199H199.803V164.789H131.537L144.36 109.117H199.803V39.8498L59.375 119.957V280.181L199.803 360.296V239.153H172.522Z",fill:"url(#paint1_linear_16909_31415)",style:{mixBlendMode:"multiply"}})]}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",{id:"paint0_linear_16909_31415",x1:"325.255",y1:"325.727",x2:"325.255",y2:"73.6291",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#002D72"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#002D72",stopOpacity:"0.01"})]}),(0,m.jsxs)("linearGradient",{id:"paint1_linear_16909_31415",x1:"184.827",y1:"325.727",x2:"184.827",y2:"73.6291",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#002D72",stopOpacity:"0.01"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#002D72"})]})]})]}),displayName:"Crypto.com DeFi Wallet",rdns:"com.crypto.wallet"},uniswap:{logo:({style:e,...t})=>(0,m.jsxs)("svg",{width:"96",height:"96",viewBox:"0 0 96 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,m.jsx)("rect",{width:"96",height:"96",rx:"18",fill:"#FEF4FF"}),(0,m.jsxs)("g",{children:[(0,m.jsx)("path",{d:"M71.9367 18.39C72.0482 16.4526 72.3145 15.1746 72.8497 14.0075C73.0616 13.5456 73.2601 13.1675 73.2907 13.1675C73.3214 13.1675 73.2293 13.5085 73.086 13.9252C72.6969 15.0578 72.633 16.607 72.901 18.4094C73.2413 20.6963 73.4348 21.0263 75.8841 23.4967C77.0329 24.6554 78.3692 26.1168 78.8536 26.7443L79.7343 27.8851L78.8536 27.0698C77.7764 26.0728 75.2992 24.1283 74.7521 23.8503C74.3852 23.6639 74.3306 23.6671 74.1043 23.8894C73.8958 24.0943 73.8519 24.4021 73.8229 25.8572C73.7778 28.125 73.4646 29.5807 72.7087 31.0362C72.2998 31.8234 72.2354 31.6554 72.6053 30.7668C72.8816 30.1034 72.9096 29.8117 72.9076 27.6163C72.9033 23.2052 72.3727 22.1447 69.2607 20.3281C68.4724 19.8678 67.1734 19.2041 66.3742 18.8531C65.575 18.502 64.9401 18.1962 64.9633 18.1734C65.0514 18.0868 68.0863 18.961 69.3077 19.4247C71.1247 20.1145 71.4247 20.2039 71.6454 20.1207C71.7933 20.0649 71.8648 19.6398 71.9367 18.39Z",fill:"#F50DB4"}),(0,m.jsx)("path",{d:"M33.5466 11.9727C32.4688 11.808 32.4233 11.7887 32.9306 11.7119C33.9026 11.5647 36.1979 11.7653 37.7796 12.1358C41.4722 13.0004 44.8322 15.2153 48.4188 19.1488L49.3717 20.1938L50.7348 19.978C56.4773 19.0689 62.3192 19.7914 67.2054 22.0148C68.5495 22.6265 70.6689 23.8441 70.9337 24.157C71.018 24.2568 71.173 24.8987 71.2779 25.5837C71.6408 27.9534 71.4591 29.7699 70.7234 31.1265C70.3229 31.8648 70.3006 32.0988 70.5698 32.7306C70.7847 33.2348 71.3838 33.608 71.9771 33.6072C73.1913 33.6056 74.4983 31.6721 75.1038 28.9818L75.3443 27.9131L75.8209 28.4448C78.4346 31.3619 80.4876 35.34 80.8403 38.1716L80.9321 38.9099L80.4928 38.2387C79.7366 37.0838 78.9769 36.2976 78.0041 35.6635C76.2504 34.5205 74.3961 34.1315 69.4853 33.8766C65.0501 33.6464 62.5399 33.2732 60.0509 32.4737C55.816 31.1137 53.6812 29.3023 48.6508 22.8012C46.4164 19.9135 45.0354 18.3159 43.6616 17.0293C40.5401 14.1058 37.4729 12.5726 33.5466 11.9727Z",fill:"#F50DB4"}),(0,m.jsx)("path",{d:"M35.6404 25.9564C33.4522 22.9889 32.0983 18.4391 32.3914 15.0379L32.482 13.9854L32.9801 14.0749C33.9155 14.243 35.5283 14.8343 36.2835 15.2861C38.3559 16.5259 39.253 18.1582 40.1658 22.3496C40.4332 23.5773 40.7839 24.9666 40.9454 25.437C41.2052 26.194 42.1871 27.9624 42.9854 29.1109C43.5605 29.938 43.1785 30.33 41.9074 30.217C39.9662 30.0444 37.3367 28.2568 35.6404 25.9564Z",fill:"#F50DB4"}),(0,m.jsx)("path",{d:"M69.2799 48.0419C59.0538 43.9862 55.4521 40.4658 55.4521 34.5259C55.4521 33.6517 55.4827 32.9365 55.5199 32.9365C55.5572 32.9365 55.9528 33.225 56.3991 33.5776C58.4728 35.216 60.7949 35.9157 67.2233 36.8395C71.0061 37.3831 73.1349 37.8222 75.0986 38.4637C81.3402 40.5027 85.2018 44.6406 86.1227 50.2766C86.3903 51.9143 86.2334 54.9854 85.7995 56.6039C85.457 57.8824 84.4118 60.1868 84.1346 60.2751C84.0578 60.2996 83.9824 60.0094 83.9626 59.6147C83.8575 57.4983 82.7718 55.438 80.9485 53.8946C78.8754 52.1399 76.0901 50.7428 69.2799 48.0419Z",fill:"#F50DB4"}),(0,m.jsx)("path",{d:"M62.1008 49.7268C61.9727 48.9758 61.7505 48.0167 61.607 47.5954L61.3461 46.8296L61.8307 47.3655C62.5014 48.107 63.0314 49.0559 63.4806 50.3197C63.8234 51.2843 63.862 51.5711 63.8594 53.1386C63.8568 54.6774 63.814 55 63.4974 55.8682C62.9983 57.2373 62.3788 58.208 61.3392 59.2501C59.4712 61.1228 57.0696 62.1596 53.6039 62.5896C53.0015 62.6643 51.2456 62.7902 49.7019 62.8693C45.8118 63.0686 43.2515 63.4803 40.9508 64.276C40.6201 64.3905 40.3247 64.4601 40.2948 64.4305C40.2017 64.3393 41.768 63.4195 43.0618 62.8056C44.8862 61.94 46.7021 61.4676 50.7709 60.8002C52.7809 60.4704 54.8566 60.0704 55.3837 59.9112C60.3612 58.4079 62.9197 54.5286 62.1008 49.7268Z",fill:"#F50DB4"}),(0,m.jsx)("path",{d:"M66.7886 57.9275C65.4299 55.0505 65.1179 52.2726 65.8623 49.6821C65.942 49.4053 66.07 49.1787 66.1471 49.1787C66.224 49.1787 66.5447 49.3495 66.8594 49.5581C67.4855 49.9732 68.7412 50.6725 72.0866 52.4692C76.2612 54.7111 78.6414 56.4472 80.2599 58.4306C81.6775 60.1677 82.5547 62.1459 82.9769 64.5583C83.2159 65.9248 83.0759 69.2128 82.7199 70.5889C81.5975 74.9275 78.9889 78.3356 75.2682 80.3242C74.7231 80.6155 74.2337 80.8547 74.1807 80.8558C74.1278 80.8569 74.3264 80.3594 74.6222 79.7503C75.8738 77.173 76.0163 74.6661 75.07 71.8756C74.4906 70.1671 73.3092 68.0823 70.924 64.5588C68.1507 60.4623 67.4708 59.3721 66.7886 57.9275Z",fill:"#F50DB4"}),(0,m.jsx)("path",{d:"M28.3782 73.4506C32.173 70.2943 36.8948 68.0521 41.1958 67.3639C43.0494 67.0672 46.1372 67.185 47.8537 67.6178C50.605 68.3113 53.0662 69.8648 54.3462 71.7156C55.5971 73.5245 56.1338 75.1008 56.6925 78.6081C56.913 79.9916 57.1527 81.3809 57.2252 81.6954C57.6449 83.5131 58.4614 84.966 59.4733 85.6957C61.0805 86.8544 63.8479 86.9265 66.5704 85.8804C67.0325 85.7028 67.4336 85.5801 67.4618 85.6078C67.5605 85.7044 66.1896 86.6083 65.2225 87.0842C63.9212 87.7245 62.8864 87.972 61.5115 87.972C59.0181 87.972 56.948 86.7226 55.2206 84.175C54.8807 83.6736 54.1167 82.1718 53.5228 80.8378C51.699 76.7403 50.7984 75.4921 48.6809 74.126C46.8381 72.9374 44.4615 72.7245 42.6736 73.588C40.325 74.7223 39.6698 77.6786 41.3518 79.5521C42.0204 80.2967 43.2671 80.939 44.2865 81.0638C46.1936 81.2975 47.8326 79.8684 47.8326 77.9717C47.8326 76.7402 47.352 76.0374 46.1423 75.4996C44.4901 74.7652 42.7141 75.6237 42.7226 77.1526C42.7263 77.8045 43.0145 78.214 43.6779 78.5097C44.1036 78.6994 44.1134 78.7144 43.7664 78.6434C42.2504 78.3337 41.8952 76.5335 43.1141 75.3383C44.5776 73.9036 47.6037 74.5367 48.6428 76.4951C49.0794 77.3177 49.1301 78.956 48.7495 79.9452C47.8976 82.1593 45.4138 83.3237 42.8941 82.6901C41.1787 82.2587 40.4801 81.7915 38.4119 79.6931C34.8179 76.0462 33.4226 75.3396 28.2413 74.5428L27.2484 74.3902L28.3782 73.4506Z",fill:"#F50DB4"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5147 8.18128C23.517 22.5305 31.7835 28.4507 32.7022 29.7015C33.4607 30.7343 33.1752 31.6628 31.8758 32.3905C31.1532 32.7951 29.6676 33.205 28.9238 33.205C28.0825 33.205 27.7936 32.8853 27.7936 32.8853C27.3058 32.4296 27.0311 32.5093 24.5261 28.1293C21.0483 22.8137 18.1379 18.4041 18.0585 18.3303C17.8749 18.1596 17.878 18.1653 24.1715 29.2574C25.1883 31.5693 24.3737 32.4179 24.3737 32.7471C24.3737 33.417 24.1882 33.7691 23.3494 34.6907C21.951 36.2274 21.3259 37.954 20.8746 41.5274C20.3687 45.5332 18.9462 48.3629 15.0041 53.2057C12.6965 56.0406 12.3189 56.5602 11.7366 57.7028C11.0032 59.1416 10.8015 59.9475 10.7198 61.7645C10.6334 63.6855 10.8016 64.9265 11.3975 66.7632C11.9191 68.3712 12.4636 69.433 13.8555 71.5567C15.0568 73.3894 15.7484 74.7513 15.7484 75.2841C15.7484 75.708 15.8306 75.7085 17.692 75.2945C22.1466 74.3036 25.7638 72.5609 27.7981 70.4252C29.0571 69.1033 29.3527 68.3733 29.3623 66.5619C29.3686 65.377 29.3263 65.1289 29.0011 64.4473C28.4718 63.3379 27.5083 62.4154 25.3845 60.9853C22.6019 59.1115 21.4133 57.603 21.085 55.5285C20.8157 53.8263 21.1282 52.6253 22.6676 49.4472C24.2609 46.1575 24.6558 44.7557 24.9229 41.4399C25.0954 39.2977 25.3343 38.4528 25.9591 37.7747C26.6108 37.0676 27.1975 36.8281 28.8103 36.611C31.4396 36.2572 33.1139 35.5871 34.4901 34.3379C35.6839 33.2543 36.1835 32.2101 36.2602 30.6382L36.3184 29.4468L35.6512 28.6806C33.2352 25.9057 9.89667 6 9.74799 6C9.71623 6 10.5113 6.98164 11.5147 8.18128ZM17.1047 63.9381C17.6509 62.9852 17.3607 61.7601 16.447 61.1617C15.5836 60.5962 14.2424 60.8625 14.2424 61.5994C14.2424 61.8243 14.3687 61.9879 14.6532 62.1322C15.1322 62.375 15.167 62.648 14.7901 63.2061C14.4084 63.7712 14.4392 64.2681 14.877 64.6057C15.5826 65.15 16.5815 64.8507 17.1047 63.9381Z",fill:"#F50DB4"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.9777 37.236C36.7433 37.6095 35.5435 38.8981 35.172 40.2493C34.9454 41.0736 35.074 42.5196 35.4134 42.9662C35.9617 43.6874 36.492 43.8774 37.9277 43.8675C40.7388 43.8482 43.1825 42.6606 43.4666 41.176C43.6994 39.9591 42.6262 38.2726 41.1478 37.5321C40.385 37.1502 38.7626 36.9987 37.9777 37.236ZM41.2638 39.7671C41.6973 39.1604 41.5076 38.5047 40.7704 38.0611C39.3664 37.2167 37.2432 37.9155 37.2432 39.222C37.2432 39.8724 38.3504 40.5819 39.3653 40.5819C40.0408 40.5819 40.9652 40.1851 41.2638 39.7671Z",fill:"#F50DB4"})]})]}),displayName:"Uniswap Wallet",rdns:"org.uniswap.app"},okx_wallet:{displayName:"OKX Wallet",rdns:"com.okex.wallet",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII="},rabby_wallet:{logo:e=>(0,m.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,m.jsx)("rect",{width:"52",height:"52",rx:"26",fill:"#7084FF"}),(0,m.jsx)("path",{d:"M43.6781 28.2954C45.1053 25.0988 38.0498 16.168 31.3094 12.4472C27.0608 9.56481 22.6337 9.96081 21.737 11.2264C19.7693 14.0039 28.2527 16.3574 33.9263 19.1037C32.7067 19.6348 31.5574 20.5879 30.8816 21.8067C28.7664 19.4915 24.1239 17.4977 18.6765 19.1037C15.0056 20.186 11.9547 22.7374 10.7756 26.5911C10.4891 26.4635 10.1719 26.3925 9.83814 26.3925C8.56192 26.3925 7.52734 27.4298 7.52734 28.7094C7.52734 29.989 8.56192 31.0263 9.83814 31.0263C10.0747 31.0263 10.8143 30.8672 10.8143 30.8672L22.6337 30.953C17.9068 38.4713 14.1713 39.5704 14.1713 40.8729C14.1713 42.1754 17.7455 41.8224 19.0876 41.3369C25.5121 39.0127 32.4123 31.7692 33.5964 29.6841C38.5688 30.3061 42.7476 30.3796 43.6781 28.2954Z",fill:"url(#paint0_linear_81034_11443)"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.8741 19.076C33.8926 19.084 33.911 19.092 33.9294 19.1001C34.1923 18.9962 34.1498 18.6068 34.0776 18.301C33.9116 17.5981 31.0479 14.7629 28.3588 13.493C24.6934 11.762 21.9946 11.8518 21.5972 12.65C22.3407 14.1849 25.8031 15.6258 29.4193 17.1308C30.9407 17.7639 32.4893 18.4084 33.8741 19.076Z",fill:"url(#paint1_linear_81034_11443)"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M29.272 34.5374C28.5323 34.2543 27.697 33.9945 26.7477 33.7587C27.7625 31.9382 27.9754 29.2432 27.0171 27.5392C25.6721 25.1478 23.9838 23.875 20.0605 23.875C17.9027 23.875 12.093 24.6037 11.9899 29.4663C11.9791 29.9743 11.9895 30.44 12.026 30.8685L22.6335 30.9456C21.2017 33.2229 19.8609 34.9113 18.6873 36.1947C20.0979 36.5571 21.2615 36.8612 22.3297 37.1404C23.3394 37.4043 24.2638 37.646 25.2309 37.8934C26.6941 36.8249 28.0698 35.6597 29.272 34.5374Z",fill:"url(#paint2_linear_81034_11443)"}),(0,m.jsx)("path",{d:"M10.6324 30.3712C11.0658 34.065 13.1596 35.5127 17.4381 35.9411C21.7166 36.3695 24.1708 36.0821 27.4381 36.3801C30.167 36.6291 32.6036 38.0233 33.5075 37.5415C34.321 37.1079 33.8659 35.5412 32.7774 34.5361C31.3663 33.2333 29.4135 32.3274 25.9773 32.006C26.6621 30.1261 26.4702 27.4903 25.4067 26.0562C23.8689 23.9827 21.0305 23.0453 17.4381 23.4549C13.6848 23.8828 10.0885 25.7354 10.6324 30.3712Z",fill:"url(#paint3_linear_81034_11443)"}),(0,m.jsxs)("defs",{children:[(0,m.jsxs)("linearGradient",{id:"paint0_linear_81034_11443",x1:"18.249",y1:"25.4646",x2:"43.3806",y2:"32.5728",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"white"}),(0,m.jsx)("stop",{offset:"1",stopColor:"white"})]}),(0,m.jsxs)("linearGradient",{id:"paint1_linear_81034_11443",x1:"39.1432",y1:"24.9813",x2:"20.9691",y2:"6.81008",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#8697FF"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#8697FF",stopOpacity:"0"})]}),(0,m.jsxs)("linearGradient",{id:"paint2_linear_81034_11443",x1:"29.7761",y1:"35.1727",x2:"12.345",y2:"25.1792",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#8697FF"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#8697FF",stopOpacity:"0"})]}),(0,m.jsxs)("linearGradient",{id:"paint3_linear_81034_11443",x1:"19.7472",y1:"25.2716",x2:"31.5549",y2:"40.2352",gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"white"}),(0,m.jsx)("stop",{offset:"0.983895",stopColor:"#D1D8FF"})]})]})]}),displayName:"Rabby Wallet",rdns:"io.rabby.wallet"}},aS=(e,t,r)=>aA[e]?.displayName?"coinbase_wallet"===e?aA[r].displayName:aA[e].displayName:"wallet_connect_v2"===t&&"wallet_connect"===e?"Wallet Connect":void 0,aT=(e,t,r)=>aA[e]?.logo?"coinbase_wallet"===e?aA[r].logo:aA[e].logo:"wallet_connect_v2"===t&&"wallet_connect"===e?nw:void 0,aP=(e,t)=>{let r=t?.height||16,n=t?.width||16;return 8453===e?(0,m.jsx)(aE,{height:r,width:n}):(0,m.jsx)(g.Z,{height:r,width:n})};function aN(e){let t=e.toLowerCase();return!!window?.webkit?.messageHandlers?.ReactNativeWebView||!!window?.ReactNativeWebView||["fbav","fban","instagram","snapchat","linkedinapp"].some(e=>t.includes(e))}var aR=(0,o.createContext)({}),aM=({children:e})=>{let t=nh(),[r,n]=(0,o.useState)({});return nG("login",{onComplete:(e,r,i,a,o)=>{o&&"passkey"!==o.type&&"cross_app"!==o.type&&("wallet"!==o.type||"privy"!==o.walletClientType)&&(to.put(aO(t.id),o.type),"wallet"===o.type?(to.put(aI(t.id),o.walletClientType),n({accountType:o.type,walletClientType:o.walletClientType})):(to.del(aI(t.id)),n({accountType:o.type})))}}),(0,o.useEffect)(()=>{if(!t.id)return;let e=to.get(aO(t.id)),r=to.get(aI(t.id));e&&n("wallet"===e?{accountType:e,walletClientType:r}:{accountType:e})},[t.id]),(0,m.jsx)(aR.Provider,{value:r,children:e})},aO=e=>`privy:${e}:recent-login-method`,aI=e=>`privy:${e}:recent-login-wallet-client`,aW=()=>(0,o.useContext)(aR),aL=({provider:e,displayName:t,logo:r,connectOnly:n,connector:i})=>{let{navigate:a}=ny(),{connectWallet:o}=nZ(),l=aW(),c="wallet_connect_v2"===i.connectorType?e:i.walletClientType,d=window.matchMedia("(display-mode: standalone)").matches,h;return h="phantom"===i.connectorType?()=>{tc()?(o(i,c),a(n?"AWAITING_CONNECT_ONLY_CONNECTION":"AWAITING_CONNECTION")):a(s.tq?"PHANTOM_INTERSTITIAL_SCREEN":"INSTALL_PHANTOM_SCREEN")}:"coinbase_wallet"!==i.connectorType||"eoaOnly"!==i.connectionOptions||!s.tq||d||td()?()=>{aN(window.navigator.userAgent)&&!event?.isTrusted||(o(i,c),a(n?"AWAITING_CONNECT_ONLY_CONNECTION":"AWAITING_CONNECTION"))}:()=>{window.location.href=`https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`},(0,m.jsxs)(aF,{onClick:h,children:[(0,m.jsx)(aC,{icon:aT(e,i.connectorType,i.walletClientType)??r,name:i.walletClientType}),(0,m.jsx)("span",{children:aS(e,i.connectorType,i.walletClientType)||t||i.walletClientType}),l?.walletClientType===c?(0,m.jsx)(aU,{color:"gray",children:"Recent"}):(0,m.jsx)("span",{id:"connect-text",children:"Connect"})]})},aF=(0,A.ZP)(i_)`
  /* Show "Connect" on hover */
  > #connect-text {
    font-weight: 500;
    text-align: right;
    flex: none;
    order: 2;
    flex-grow: 1;
    color: var(--privy-color-accent);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  :hover > #connect-text {
    opacity: 1;
  }

  @media (max-width: 440px) {
    > #connect-text {
      display: none;
    }
  }
`,aU=(0,A.ZP)(aj)`
  margin-left: auto;
`,aD=["coinbase_wallet"],aZ=["metamask","okx_wallet","rainbow","uniswap","zerion","rabby_wallet","cryptocom"],az=[],a$=["phantom"],aH=({connectOnly:e})=>{let{connectors:t}=nZ(),{app:r}=ny(),n=aB(r.appearance.walletList,t,e,r.appearance.walletList,r.externalWallets.walletConnect.enabled);return(0,m.jsxs)(m.Fragment,{children:[...n]})},aB=(e,t,r,n,i)=>{let a=[],o=[],s=[],l=t.find(e=>"wallet_connect_v2"===e.connectorType);for(let c of e)if("detected_wallets"===c)for(let e of t.filter(({connectorType:e,walletClientType:t})=>"uniswap_wallet_extension"===t?!n.includes("uniswap"):"crypto.com_wallet_extension"===t?!n.includes("cryptocom"):"injected"===e&&!n.includes(t))){let{walletClientType:t,walletBranding:n}=e;("unknown"===t?o:a).push((0,m.jsx)(aL,{connectOnly:r,provider:t,logo:n.icon,displayName:n.name,connector:e},`${c}-${t}`))}else if(a$.includes(c)){let e=t.find(e=>"injected"===e.connectorType&&e.walletClientType===c||e.connectorType===c);e&&a.push((0,m.jsx)(aL,{connectOnly:r,provider:c,connector:e},c))}else if(aZ.includes(c)){let e=t.find(e=>"uniswap"===c?"uniswap_wallet_extension"===e.walletClientType:"cryptocom"===c?"crypto.com_wallet_extension"===e.walletClientType:"injected"===e.connectorType&&e.walletClientType===c);i&&!e&&(e=l),e&&a.push((0,m.jsx)(aL,{connectOnly:r,provider:c,connector:e},c))}else if(aD.includes(c)){let e=t.find(({connectorType:e})=>e===c);e&&a.push((0,m.jsx)(aL,{connectOnly:r,provider:c,connector:e},c))}else az.includes(c)?l&&s.push((0,m.jsx)(aL,{connectOnly:r,provider:c,connector:l},c)):"wallet_connect"===c&&l&&s.push((0,m.jsx)(aL,{connectOnly:r,provider:c,connector:l},c));return[...o,...a,...s]},aq=(e,t)=>{let r=(0,o.useRef)(()=>{});(0,o.useEffect)(()=>{r.current=e}),(0,o.useEffect)(()=>{if(null!==t){let e=setInterval(()=>r.current(),t||0);return()=>clearInterval(e)}},[t])},aV=e=>e?.privyErrorCode==="linked_to_another_user"?rL.ERROR_USER_EXISTS:e instanceof rW&&!e.details.default?e.details:e instanceof rR?rL.ERROR_TIMED_OUT:e instanceof rM?rL.ERROR_USER_REJECTED_CONNECTION:rL.ERROR_WALLET_CONNECTION,aG=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,aK=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`,aY=e=>{let t=e.walletLogo;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(aK,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:e.success,fail:e.fail}),"string"==typeof t?(0,m.jsx)("span",{style:{background:`url('${t}')`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"cover"}}):(0,m.jsx)(t,{style:{width:"38px",height:"38px"}})]})})})},aQ=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,aX=({name:e,logoUrl:t})=>{let r=`${e??"Provider app"} logo`;return"string"==typeof t?(0,m.jsx)("img",{src:t,alt:r,style:{width:"38px",height:"38px",maxHeight:"90px",maxWidth:"180px",borderRadius:"8px"}}):(0,m.jsx)("span",{})},aJ=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,a0=()=>(0,m.jsx)(a1,{children:(0,m.jsxs)(a2,{children:[(0,m.jsx)(a3,{}),(0,m.jsx)(a4,{})]})}),a1=A.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  margin: 12px;
  padding: 16px;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,a2=A.ZP.div`
  position: relative;
  height: 140px;
  width: 140px;

  opacity: 1;
  animation: fadein 200ms ease;
`,a3=A.ZP.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 140px;
  height: 140px;

  && {
    border: 4px solid var(--privy-color-accent-light);
    border-radius: 50%;
  }
`,a4=A.ZP.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 140px;
  height: 140px;
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-accent) transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,a5=["error","invalid_request_arguments","wallet_not_on_device","invalid_recovery_pin","insufficient_funds","missing_or_invalid_mfa","mfa_verification_max_attempts_reached","mfa_timeout","twilio_verification_failed"],a6=class extends Error{constructor(e,t){super(t),this.type=e}};function a7(e){let t=e.type;return"string"==typeof t&&a5.includes(t)}function a8(e){return a7(e)&&"wallet_not_on_device"===e.type}function a9(e){return!!(a7(e)&&"mfa_timeout"===e.type)}function oe(e){return!!(a7(e)&&"missing_or_invalid_mfa"===e.type)}function ot(e){return!!(a7(e)&&e.message.includes("code 429"))}function or(e){let t;return!!("string"==typeof(t=e.type)&&"client_error"===t&&"MFA canceled"===e.message)}function on({isCreatingWallet:e,skipSplashScreen:t}){return e?"EMBEDDED_WALLET_PASSWORD_CREATE_SCREEN":t?"EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN":"EMBEDDED_WALLET_PASSWORD_UPDATE_SPLASH_SCREEN"}function oi({walletAction:e,availableRecoveryMethods:t,legacySetWalletPasswordFlow:r,isResettingPassword:n,showAutomaticRecovery:i}){return i?"EMBEDDED_WALLET_SET_AUTOMATIC_RECOVERY_SCREEN":r||1===t.length?on({isCreatingWallet:"create"===e,skipSplashScreen:n}):"EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN"}function oa(e){switch(e){case"user-passcode":return"EMBEDDED_WALLET_PASSWORD_RECOVERY_SCREEN";case"google-drive":case"icloud":return"EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN";default:throw Error("Recovery method not supported")}}async function oo({api:e,provider:t}){let r=t4(),n=t4(),i=await t5(r);try{return"icloud"===t?{url:(await e.post("/api/v1/recovery/oauth/init_icloud",{client_type:"web"})).url}:{url:(await e.post("/api/v1/recovery/oauth/init",{redirect_to:window.location.href,code_challenge:i,state_code:n})).url,codeVerifier:r,stateCode:n,provider:t}}catch(e){throw eX(e)}}async function os({api:e,provider:t,stateCode:r,codeVerifier:n,authorizationCode:i}){if(!i||!r)throw new eK("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");if("undefined"===i)throw new eK("User denied confirmation during OAuth flow");try{return(await e.post("/api/v1/recovery/oauth/authenticate",{authorization_code:i,state_code:r,code_verifier:n,provider:t})).access_token}catch(t){let e=eX(t);throw e.privyErrorCode?new eK(e.message||"Invalid code during OAuth flow.",void 0,e.privyErrorCode):"User denied confirmation during OAuth flow"===e.message?new eK("Invalid code during oauth flow.",void 0,"oauth_user_denied"):new eK("Invalid code during OAuth flow.",void 0,"unknown_auth_error")}}var ol=A.ZP.div`
  height: 44px;
`,oc=A.ZP.div`
  display: flex;
  flex-direction: column;
`,od=A.ZP.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`;function oh(e){let[t,r]=(0,o.useState)(!1);return t?(0,m.jsxs)("div",{className:"gap-1.75 flex items-center",children:[(0,m.jsx)(M.Z,{color:"var(--privy-color-success)"}),(0,m.jsx)("span",{children:"Copied Address"})]}):(0,m.jsx)(D.Z,{color:"var(--privy-color-foreground-3)",onClick:async()=>{await navigator.clipboard.writeText(e.address),r(!0),setTimeout(()=>r(!1),2500)}})}function ou(e){let[t,r]=(0,o.useState)(e.dimensions.width),[n,i]=(0,o.useState)(void 0),a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(a.current&&void 0===t){let{width:e}=a.current.getBoundingClientRect();r(e)}let e=getComputedStyle(document.documentElement);i({background:e.getPropertyValue("--privy-color-background"),background2:e.getPropertyValue("--privy-color-background-2"),foreground3:e.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:e.getPropertyValue("--privy-color-foreground-accent"),accent:e.getPropertyValue("--privy-color-accent"),accentDark:e.getPropertyValue("--privy-color-accent-dark"),success:e.getPropertyValue("--privy-color-success")})},[]),(0,m.jsx)("div",{ref:a,children:t&&(0,m.jsxs)(ox,{children:[(0,m.jsx)("iframe",{style:{position:"absolute",zIndex:1},width:t,height:e.dimensions.height,allow:"clipboard-write self *",src:ty(e.origin,`/apps/${e.appId}/embedded-wallets/export`,{client_id:e.appClientId,address:e.wallet.address,width:`${t}px`,caid:e.clientAnalyticsId,phrase_export:!0,...n},{token:e.accessToken})}),(0,m.jsx)(ov,{children:"Loading..."}),!e.wallet.imported&&(0,m.jsx)(ov,{children:"Loading..."})]})})}var op=A.ZP.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`,om=A.ZP.span`
  && a {
    color: var(--privy-color-accent);
    text-decoration: underline;
  }
`,og=A.ZP.div`
  background: var(--privy-color-warn-light);
  display: flex;
  align-items: start;
  gap: 0.625rem;
  padding: 0.75rem;
  border-radius: 8px;
  && svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,of=A.ZP.div`
  && > div {
    border-radius: var(--privy-border-radius-md);
    border-width: 1px;
    border-color: var(--privy-color-foreground-4);
  }
`,oy=A.ZP.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  && svg {
    width: 0.875rem;
    height: 0.875rem;
    cursor: pointer;
  }
`,ow=A.ZP.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
`,ox=A.ZP.div`
  overflow: visible;
  position: relative;
  overflow: none;
  height: 44px;
  display: flex;
  gap: 12px;
`,ov=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`;function oC(){let{refreshUser:e,createAnalyticsEvent:t,initializeWalletProxy:r}=nZ(),n=(0,o.useRef)(!1);return{createWallet:(0,o.useCallback)(async i=>{let a=await uK();if(!a)throw t({eventName:"embedded_wallet_creation_failed",payload:{error:"Missing access token for user."}}),Error("An error has occured, please login again.");try{t({eventName:"embedded_wallet_creation_started"});let o=await r(3e4);if(!o)throw Error("walletProxy does not exist.");let s=new Promise((e,t)=>{setTimeout(()=>{t(Error("walletProxy.create timed out."))},2e4)});if(!await Promise.race([o.create({accessToken:a,recoveryPassword:i}),s]))throw Error("walletProxy.create did not send a response.");let l=await e();if(!l)throw Error("Failed to refresh user.");let c=rC(l);if(!c)throw Error("Updated user is missing embedded wallet.");return t({eventName:"embedded_wallet_creation_completed",payload:{walletAddress:c.address}}),n.current=!0,c}catch(e){if(n.current)return;throw t({eventName:"embedded_wallet_creation_failed",payload:{error:e.toString()}}),console.warn(e),e}},[])}}var ob=A.ZP.div`
  height: 44px;
`,o_=(0,A.iv)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;
  text-align: left;
  transition: color 0.1s ease-in;
`,oj=A.ZP.span`
  ${o_}
  transition: color 0.1s ease-in;
  color: ${({error:e})=>e?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  text-transform: ${({error:e})=>e?"":"capitalize"};

  &[aria-hidden='true'] {
    visibility: hidden;
  }
`,ok=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`,oE=(0,A.ZP)(n3)`
  ${e=>e.hideAnimations&&(0,A.iv)`
      && {
        transition: none;
      }
    `}
`,oA=(0,A.iv)`
  && {
    width: 100%;
    border-width: 1px;
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    background: var(--privy-color-background);
    color: var(--privy-color-foreground);

    padding: 12px;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px; /* 137.5% */
  }
`,oS=A.ZP.input`
  ${oA}

  &::placeholder {
    color: var(--privy-color-foreground-3);
    font-style: italic;
    font-size: 14px;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,oT=A.ZP.div`
  ${oA}
`,oP=A.ZP.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({centered:e})=>e?"center":"space-between"};
`,oN=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  gap: 4px;

  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,oR=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;
`,oM=A.ZP.div`
  display: flex;
  text-align: left;
  align-items: center;

  gap: 8px;
  max-width: 300px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;

  margin: 0 8px;
  color: var(--privy-color-foreground-2);

  > :first-child {
    min-width: 24px;
  }
`,oO=(A.ZP.div`
  height: var(--privy-height-modal-full);

  @media (max-width: 440px) {
    height: var(--privy-height-modal-compact);
  }
`,(0,A.ZP)(n2)`
  display: flex;
  flex: 1;
  gap: 4px;
  justify-content: center;

  && {
    background: var(--privy-color-background);
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    border-width: 1px;
  }
`),oI=A.ZP.div`
  position: absolute;
  right: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`,oW=(0,A.ZP)(Z.Z)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,oL=(0,A.ZP)($.Z)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,oF=(0,A.ZP)(z.Z)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,oU=A.ZP.progress`
  height: 4px;
  width: 100%;
  margin: 8px 0;

  /* border-radius: 9999px; */
  ::-webkit-progress-bar {
    border-radius: 8px;
    background: var(--privy-color-foreground-4);
  }

  ::-webkit-progress-value {
    border-radius: 8px;
    transition: all 0.1s ease-out;
    background: ${({label:e})=>"Strong"===e&&"#78dca6"||"Medium"===e&&"var(--privy-color-warn)"||"var(--privy-color-error)"};
  }
`,oD=({buttonHideAnimations:e,buttonLoading:t,password:r,onSubmit:n,onBack:i})=>{let[a,s]=(0,o.useState)(!0),[l,c]=(0,o.useState)(!1),[d,h]=(0,o.useState)(""),u=r===d;return(0,o.useEffect)(()=>{d&&!l&&c(!0)},[d]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{closeable:!1,backFn:i}),(0,m.jsx)(ae,{}),(0,m.jsxs)(ok,{children:[(0,m.jsxs)(oN,{children:[(0,m.jsx)(U.Z,{height:48,width:48,stroke:"var(--privy-color-background)",fill:"var(--privy-color-accent)"}),(0,m.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Confirm your password"}),(0,m.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Please re-enter your password below to continue."})]}),(0,m.jsxs)(oP,{children:[(0,m.jsx)(oS,{value:d,onChange:e=>h(e.target.value),onBlur:()=>c(!0),placeholder:"confirm your password",type:a?"password":"text",style:{paddingRight:"2.3rem"}}),(0,m.jsx)(oI,{style:{right:"0.75rem"},children:a?(0,m.jsx)(oL,{onClick:()=>s(!1)}):(0,m.jsx)(oF,{onClick:()=>s(!0)})})]}),(0,m.jsx)(oj,{"aria-hidden":!l||u,error:!0,children:"Passwords do not match"})]}),(0,m.jsx)(oE,{onClick:n,loading:t,disabled:!u,hideAnimations:e,children:"Continue"}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},oZ=({className:e,checked:t,color:r="var(--privy-color-accent)",...n})=>(0,m.jsx)("label",{children:(0,m.jsxs)(oz,{className:e,children:[(0,m.jsx)(oH,{checked:t,...n}),(0,m.jsx)(oB,{color:r,checked:t,children:(0,m.jsx)(o$,{viewBox:"0 0 24 24",children:(0,m.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})});A.ZP.label`
  && {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`;var oz=A.ZP.div`
  display: inline-block;
  vertical-align: middle;
`,o$=A.ZP.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`,oH=A.ZP.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,oB=A.ZP.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  cursor: pointer;
  border-color: ${e=>e.color};
  border-radius: 3px;
  background: ${e=>e.checked?e.color:"var(--privy-color-background)"};

  && {
    /* This is necessary to override css reset for border width */
    border-width: 1px;
  }

  ${oH}:focus + & {
    box-shadow: 0 0 0 1px ${e=>e.color};
  }

  ${o$} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }
`,oq=({buttonHideAnimations:e,buttonLoading:t,onSubmit:r,onBack:n,config:i})=>{let[a,s]=(0,o.useState)(!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{closeable:!1,backFn:n}),(0,m.jsx)(ae,{}),(0,m.jsxs)(ok,{children:[(0,m.jsxs)(oN,{children:[(0,m.jsx)(U.Z,{height:48,width:48,stroke:"var(--privy-color-background)",fill:"var(--privy-color-error)"}),(0,m.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Confirm you have saved"}),(0,m.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Losing access to your password means you will lose access to your account."})]}),(0,m.jsx)(oR,{children:(0,m.jsxs)(oM,{style:{color:"var(--privy-color-error)",cursor:"pointer"},onClick:e=>{e.preventDefault(),s(e=>!e)},children:[(0,m.jsx)(oZ,{color:"var(--privy-color-error)",readOnly:!0,checked:a}),(0,m.jsx)(m.Fragment,{children:"I understand that if I lose my password and device, I will lose access to my account and my assets."})]})})]}),(0,m.jsxs)(oV,{children:["user"===i.initiatedBy&&(0,m.jsx)(n8,{onClick:i.onCancel,disabled:t,children:"Cancel"}),(0,m.jsx)(oE,{onClick:r,loading:t,hideAnimations:e,disabled:!a,children:"Set Password"})]}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},oV=A.ZP.div`
  display: flex;
  gap: 10px;
`,oG=/[a-z]/,oK=/[A-Z]/,oY=/[0-9]/,oQ="!@#$%^&*()\\-_+.",oX=`a-zA-Z0-9${oQ}`,oJ=RegExp(`[${oQ}]`),o0=RegExp(`[${oX}]`),o1=RegExp(`^[${oX}]{6,}$`),o2=(e="")=>[...new Set(e.split("").filter(e=>!o0.test(e)).map(e=>e.replace(" ","SPACE")))],o3=()=>V.OW(4,G.k),o4=({buttonHideAnimations:e,buttonLoading:t,password:r="",config:n,isResettingPassword:i,onSubmit:a,onClose:s,onBack:l,onPasswordChange:c,onPasswordGenerate:d})=>{let[h,u]=(0,o.useState)(!1),[p,g]=(0,o.useState)(!1);(0,o.useEffect)(()=>{r&&!p&&g(!0)},[r]);let f=(0,o.useMemo)(()=>p?6>(r?.length||0)?"Password must be at least 6 characters":o1.test(r||"")?null:`Invalid characters used ( ${o2(r).join(" ")} )`:null,[r,p]),y=(0,o.useMemo)(()=>f?{value:0,label:"Weak"}:function(e=""){let t=function(e=""){return(.3*function(e){if(e.length<8)return 0;let t=0;return oG.test(e)&&(t+=1),oK.test(e)&&(t+=1),oY.test(e)&&(t+=1),oJ.test(e)&&(t+=1),Math.max(0,Math.min(1,t/3))}(e)+q()(e)/95)/2}(e);return{value:t,label:t>.9?"Strong":t>.5?"Medium":"Weak"}}(r),[r,f]),w=(0,o.useMemo)(()=>!!(!r?.length||f),[f,r]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:s,closeable:"user"===n.initiatedBy,backFn:l}),(0,m.jsx)(ae,{}),(0,m.jsxs)(ok,{children:[(0,m.jsxs)(oN,{children:[(0,m.jsx)(H.Z,{height:48,width:48,stroke:"var(--privy-color-accent)"}),(0,m.jsxs)("h3",{style:{color:"var(--privy-color-foreground)"},children:[i?"Reset":"Set"," your password"]}),(0,m.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Select a strong, memorable password to secure your account."})]}),(0,m.jsxs)(oP,{children:[(0,m.jsx)(oS,{value:r,onChange:e=>c(e.target.value),placeholder:"enter or generate a strong password",type:h?"password":"text",style:{paddingRight:"3.8rem"}}),(0,m.jsxs)(oI,{style:{width:"3.5rem"},children:[h?(0,m.jsx)(oL,{onClick:()=>u(!1)}):(0,m.jsx)(oF,{onClick:()=>u(!0)}),(0,m.jsx)(oW,{onClick:d})]})]}),(0,m.jsx)(oU,{value:0===y.value?.01:y.value,label:y.label}),(0,m.jsx)(oj,{error:!!f,children:f||`Password Strength: ${p?y.label:"--"}`}),(0,m.jsxs)(o6,{children:[(0,m.jsx)(o5,{children:(0,m.jsxs)(oR,{children:[(0,m.jsxs)(oM,{children:[(0,m.jsx)(W.Z,{width:24,height:24,fill:"var(--privy-color-accent)"}),"This password is used to secure your account."]}),(0,m.jsxs)(oM,{children:[(0,m.jsx)(W.Z,{width:24,height:24,fill:"var(--privy-color-accent)"}),"Use it to log in on a new environment, like another browser or device."]})]})}),(0,m.jsx)(oE,{onClick:a,loading:t,disabled:w,hideAnimations:e,children:"Continue"})]})]}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},o5=(0,A.ZP)(oR)`
  flex: 1;
  padding-top: 1rem;
`,o6=A.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,o7=({buttonHideAnimations:e,buttonLoading:t,appName:r,password:n,onSubmit:i,onBack:a})=>{let[s,l]=(0,o.useState)(!1),c=(0,o.useCallback)(()=>{l(!0),n&&navigator.clipboard.writeText(n)},[n]),d=(0,o.useCallback)(()=>{let e=document.createElement("a"),t=r.toLowerCase().replace(/[^a-z\s]/g,"").replace(/\s/g,"-"),i=new Blob([o8(r,n)],{type:"text/plain"}),a=URL.createObjectURL(i);e.href=a,e.target="_blank",e.download=`${t}-privy-wallet-recovery.txt`,document.body.appendChild(e),e.click(),setTimeout(()=>{e.remove(),URL.revokeObjectURL(a)},5e3)},[n]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:a,closeable:!1}),(0,m.jsx)(ae,{}),(0,m.jsxs)(ok,{children:[(0,m.jsxs)(oN,{children:[(0,m.jsx)(U.Z,{height:48,width:48,stroke:"var(--privy-color-background)",fill:"var(--privy-color-accent)"}),(0,m.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Save your password"}),(0,m.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"For your security, this password cannot be reset, so keep it somewhere safe."})]}),(0,m.jsx)(oP,{centered:!0,children:(0,m.jsx)(oT,{children:n})}),(0,m.jsxs)("div",{style:{display:"flex",margin:"12px 0",gap:"12px"},children:[(0,m.jsx)(oO,{onClick:c,children:s?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Y.Z,{style:{width:24,height:24},stroke:"var(--privy-color-accent)"}),"Copied"]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Q.Z,{style:{width:24,height:24},stroke:"var(--privy-color-accent)"}),"Copy"]})}),(0,m.jsxs)(oO,{onClick:d,children:[(0,m.jsx)(K.Z,{style:{width:24,height:24},stroke:"var(--privy-color-accent)"}),"Download"]})]})]}),(0,m.jsx)(oE,{onClick:i,loading:t,hideAnimations:e,children:"Continue"}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},o8=(e,t)=>`Your wallet recovery password for ${e} is

${t}

You will need this password to access your ${e} wallet on a new device. Please keep it somewhere safe.`,o9=({error:e,onClose:t})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{closeable:!1}),(0,m.jsx)(ae,{}),e?(0,m.jsxs)(i6,{children:[(0,m.jsx)(L.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}),(0,m.jsx)(as,{title:"Something went wrong",description:e})]}):(0,m.jsxs)(i6,{children:[(0,m.jsx)(W.Z,{fill:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,m.jsx)(as,{title:"Success"})]}),(0,m.jsx)(n3,{onClick:t,children:"Close"}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]}),se=(e,t)=>{switch(e){case"creating":return"back"===t?e:"saving";case"saving":return"back"===t?"creating":"confirming";case"confirming":return"back"===t?"saving":"finalizing";case"finalizing":return"back"===t?"confirming":"done";default:return e}},st=()=>{let[e,t]=(0,o.useReducer)(se,"creating");return{send:t,state:e}},sr=({onSubmit:e,...t})=>{let{lastScreen:r,navigate:n}=ny(),{send:i,state:a}=st(),s=(0,o.useCallback)(async()=>{"finalizing"===a&&await e(),i("next")},[a,i,e]);(0,o.useEffect)(()=>{let e;return"done"===a&&"automatic"===t.config.initiatedBy&&(e=setTimeout(()=>t.onClose?.(),1400)),()=>{e&&clearTimeout(e)}},[a,t.config.initiatedBy,t.onClose]);let l=(0,o.useCallback)(()=>{i("back")},[i]),c=(0,o.useCallback)(()=>{n("EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN")},[r,n]);return"creating"===a?(0,m.jsx)(o4,{...t,onSubmit:s,onBack:"EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN"===r?c:void 0}):"saving"===a?(0,m.jsx)(o7,{...t,onSubmit:s,onBack:l}):"confirming"===a?(0,m.jsx)(oD,{...t,onSubmit:s,onBack:l}):"finalizing"===a?(0,m.jsx)(oq,{...t,onSubmit:s,onBack:l}):"done"===a?(0,m.jsx)(o9,{...t,onSubmit:s}):null},sn=e=>{let t=(0,m.jsx)(U.Z,{height:38,width:38,stroke:"var(--privy-color-error)"});if(e instanceof eK)switch(e.privyErrorCode){case"client_request_timeout":return{title:"Timed out",detail:e.message,ctaText:"Try again",icon:t};case"insufficient_balance":return{title:"Insufficient balance",detail:e.message,ctaText:"Try again",icon:t};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t}}else{if(e instanceof a6&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:(0,m.jsx)(I.Z,{height:38,width:38,stroke:"var(--privy-color-error)"})};if(!(e instanceof eV))return e instanceof eG&&422===e.status?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:t}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t};switch(e.privyErrorCode){case"invalid_captcha":return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:t};case"disallowed_login_method":return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:t};case"allowlist_rejected":return{title:"You don't have access to this app",detail:"Have you been invited?",ctaText:"Try another account",icon:(0,m.jsx)(iJ,{style:{width:"38px",height:"38px",strokeWidth:"1",stroke:"var(--privy-color-accent)",fill:"var(--privy-color-accent)"}})};case"captcha_failure":return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:(0,m.jsx)("span",{})};case"captcha_timeout":return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:(0,m.jsx)("span",{})};case"linked_to_another_user":return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:t};case"not_supported":return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:t};case"too_many_requests":return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:t};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t}}}},si=({error:e,backFn:t,onClick:r})=>{let{reset:n}=nF(),i=sn(e);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:t}),(0,m.jsxs)(sa,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(iX,{color:"var(--privy-color-error)"}),i.icon]})}),(0,m.jsxs)(so,{children:[(0,m.jsx)("h3",{children:i.title}),(0,m.jsx)("p",{children:i.detail})]}),(0,m.jsx)(n3,{color:"var(--privy-color-error)",onClick:()=>{e instanceof eV&&"invalid_captcha"===e.privyErrorCode&&n(),r?.()},children:i.ctaText})]})]})},sa=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-bottom: 16px;
`,so=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ss=({style:e,color:t,...r})=>(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:t||"currentColor",style:{height:"1.5rem",width:"1.5rem",...e},...r,children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),sl=({color:e,...t})=>(0,m.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 115.77 122.88",xmlSpace:"preserve",...t,children:(0,m.jsx)("g",{children:(0,m.jsx)("path",{fill:e||"currentColor",className:"st0",d:"M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"})})}),sc=e=>{let[t,r]=(0,o.useState)(!1);return(0,m.jsxs)(sd,{color:e.color,onClick:()=>{r(!0),navigator.clipboard.writeText(e.text),setTimeout(()=>r(!1),1500)},justCopied:t,children:[t?(0,m.jsx)(ss,{style:{height:"14px",width:"14px"},strokeWidth:"2"}):(0,m.jsx)(sl,{style:{height:"14px",width:"14px"}}),t?"Copied":"Copy"," ",e.itemName?e.itemName:"to Clipboard"]})},sd=A.ZP.button`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${e=>e.justCopied?"var(--privy-color-foreground)":e.color||"var(--privy-color-foreground-3)"};
    font-weight: ${e=>e.justCopied?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${e=>e.justCopied?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,sh=e=>{let[t,r]=(0,o.useState)(!1);return(0,m.jsx)(su,{color:e.color,href:e.url,target:"_blank",rel:"noreferrer noopener",onClick:()=>{r(!0),setTimeout(()=>r(!1),1500)},justOpened:t,children:e.text})},su=A.ZP.a`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${e=>e.justOpened?"var(--privy-color-foreground)":e.color||"var(--privy-color-foreground-3)"};
    font-weight: ${e=>e.justOpened?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${e=>e.justOpened?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,sp=()=>(0,m.jsx)("svg",{width:"200",height:"200",viewBox:"-77 -77 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px"},children:(0,m.jsx)("rect",{width:"50",height:"50",fill:"black",rx:10,ry:10})}),sm=(e,t,r,n,i)=>{for(let a=t;a<t+n;a++)for(let t=r;t<r+i;t++){let r=e?.[t];r&&r[a]&&(r[a]=0)}return e},sg=(e,t)=>{let r=ee.create(e,{errorCorrectionLevel:t}).modules,n=tp(Array.from(r.data),r.size);return n=sm(n,0,0,7,7),n=sm(n,n.length-7,0,7,7),n=sm(n,0,n.length-7,7,7)},sf=({x:e,y:t,cellSize:r,bgColor:n,fgColor:i})=>(0,m.jsx)(m.Fragment,{children:[0,1,2].map(a=>(0,m.jsx)("circle",{r:r*(7-2*a)/2,cx:e+7*r/2,cy:t+7*r/2,fill:a%2!=0?n:i},`finder-${e}-${t}-${a}`))}),sy=({cellSize:e,matrixSize:t,bgColor:r,fgColor:n})=>{let i=[[0,0],[(t-7)*e,0],[0,(t-7)*e]];return(0,m.jsx)(m.Fragment,{children:i.map(([t,i])=>(0,m.jsx)(sf,{x:t,y:i,cellSize:e,bgColor:r,fgColor:n},`finder-${t}-${i}`))})},sw=({matrix:e,cellSize:t,color:r})=>(0,m.jsx)(m.Fragment,{children:e.map((e,n)=>e.map((e,i)=>e?(0,m.jsx)("rect",{height:t-.4,width:t-.4,x:n*t+.1*t,y:i*t+.1*t,rx:.5*t,ry:.5*t,fill:r},`cell-${n}-${i}`):(0,m.jsx)(o.Fragment,{},`circle-${n}-${i}`)))}),sx=({cellSize:e,matrixSize:t,element:r,sizePercentage:n,bgColor:i})=>{if(!r)return(0,m.jsx)(m.Fragment,{});let a=t*(n||.14),o=Math.floor(t/2-a/2),s=Math.floor(t/2+a/2);(s-o)%2!=t%2&&(s+=1);let l=(s-o)*e,c=l-.2*l,d=o*e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("rect",{x:o*e,y:o*e,width:l,height:l,fill:i}),(0,m.jsx)(r,{x:d+.1*l,y:d+.1*l,height:c,width:c})]})},sv=e=>{let t=e.outputSize,r=sg(e.url,e.errorCorrectionLevel),n=t/r.length,i=function(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}(2*n,{min:.025*t,max:.036*t});return(0,m.jsxs)("svg",{height:e.outputSize,width:e.outputSize,viewBox:`0 0 ${e.outputSize} ${e.outputSize}`,style:{height:"100%",width:"100%",padding:`${i}px`},children:[(0,m.jsx)(sw,{matrix:r,cellSize:n,color:e.fgColor}),(0,m.jsx)(sy,{cellSize:n,matrixSize:r.length,fgColor:e.fgColor,bgColor:e.bgColor}),(0,m.jsx)(sx,{cellSize:n,element:e.logo?.element,bgColor:e.bgColor,matrixSize:r.length})]})},sC=A.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>`${e.size}px`};
  width: ${e=>`${e.size}px`};
  margin: auto;
  background-color: ${e=>e.bgColor};

  && {
    border-width: 2px;
    border-color: ${e=>e.borderColor};
    border-radius: var(--privy-border-radius-md);
  }
`,sb=e=>{let{appearance:t}=nh(),r=e.bgColor||"#FFFFFF",n=e.fgColor||"#000000",i=e.size||160,a="dark"===t.palette.colorScheme?r:n;return(0,m.jsx)(sC,{size:i,bgColor:r,fgColor:n,borderColor:a,children:(0,m.jsx)(sv,{url:e.url,logo:{element:e.squareLogoElement??sp},outputSize:i,bgColor:r,fgColor:n,errorCorrectionLevel:e.errorCorrectionLevel||"Q"})})},s_=({style:e,...t})=>(0,m.jsxs)("svg",{width:"1000",height:"1000",viewBox:"0 0 1000 1000",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"24px",...e},...t,children:[(0,m.jsx)("rect",{width:"1000",height:"1000",rx:"200",fill:"#855DCD"}),(0,m.jsx)("path",{d:"M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z",fill:"white"}),(0,m.jsx)("path",{d:"M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z",fill:"white"}),(0,m.jsx)("path",{d:"M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z",fill:"white"})]}),sj="#8a63d2",sk=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,sE=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,sA="#8a63d2",sS=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,sT=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`;function sP({title:e}){let{currentScreen:t,navigateBack:r,navigate:n,data:i}=ny(),a;return a="FUNDING_MANUAL_TRANSFER_SCREEN"===t?r:t===i?.funding?.methodScreen?i.funding.comingFromSendTransactionScreen?()=>n("EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN"):void 0:i?.funding?.methodScreen?()=>n(i.funding.methodScreen):void 0,(0,m.jsx)(il,{title:e,backFn:a})}var sN=()=>(0,m.jsx)(sR,{children:(0,m.jsxs)(sM,{children:[(0,m.jsx)(sO,{}),(0,m.jsx)(sI,{})]})}),sR=A.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,sM=A.ZP.div`
  position: relative;
  height: 96px;
  width: 96px;

  opacity: 1;
  animation: fadein 200ms ease;
`,sO=A.ZP.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 96px;
  height: 96px;

  && {
    border: 4px solid #f1f2f9;
    border-radius: 50%;
  }
`,sI=A.ZP.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 96px;
  height: 96px;
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: #cbcde1 transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,sW=A.ZP.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,sL=A.ZP.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,sF=A.ZP.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */

  ${a_}
`;async function sU(e,t,r,n,i,a){!function(e){for(let t of["gasLimit","gasPrice","value","maxPriorityFeePerGas","maxFeePerGas"]){let r=e[t];if(!(typeof r>"u")&&!function(e){let t="number"==typeof e,r="bigint"==typeof e,n="string"==typeof e&&/^-?0x[a-f0-9]+$/i.test(e);return t||r||n}(r))throw Error(`Transaction request property '${t}' must be a valid number, bigint, or hex string representing a quantity`)}if("number"!=typeof e.chainId)throw Error("Transaction request property 'chainId' must be a number")}(n=Object.assign({chainId:t0},n));let o=(await r.rpc({address:t,accessToken:e,requesterAppId:a,request:{method:"eth_signTransaction",params:[n]}})).response.data;return await i.sendTransaction(o)}async function sD(e,t,r,n){let i=await n.getBalance(e),a=t.value||0,o=!i.sub((0,en.uq)(a)).sub(r).isNegative();return{balance:i,hasSufficientFunds:o}}function sZ(e){return{to:e.to,from:e.from,contractAddress:e.contractAddress,transactionIndex:e.transactionIndex,root:e.root,logsBloom:e.logsBloom,blockHash:e.blockHash,transactionHash:e.transactionHash,logs:e.logs,blockNumber:e.blockNumber,confirmations:e.confirmations,byzantium:e.byzantium,type:e.type,status:e.status,gasUsed:e.gasUsed.toHexString(),cumulativeGasUsed:e.cumulativeGasUsed.toHexString(),effectiveGasPrice:e.effectiveGasPrice?e.effectiveGasPrice.toHexString():void 0}}var sz=e=>{let{showFiatPrices:t,getUsdTokenPrice:r,chains:n}=nZ(),[i,a]=(0,o.useState)(!0),[s,l]=(0,o.useState)(void 0),[c,d]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{let i=e.chainId||t0,o=n.find(e=>e.id===Number(i));if(!o)throw new eQ(`Unsupported chain: ${i}`);(async()=>{if(!t){a(!1);return}try{a(!0);let e=await r(o);e?d(e):l(Error(`Unable to fetch token price on chain id ${o.id}`))}catch(e){l(e)}finally{a(!1)}})()},[e.chainId]),{tokenPrice:c,isTokenPriceLoading:i,tokenPriceError:s}},s$=(0,o.createContext)(null);function sH(){let e=(0,o.useContext)(s$);if(null===e)throw Error("`useWallets` was called outside the PrivyProvider component");return e}function sB(e){let t=new RegExp(/^eip155:(?<chainId>\d+)$/gm).exec(e)?.groups?.chainId;if(t)return parseInt(t);throw Error("Chain ID not compatible with CAIP-2 format.")}var sq=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),sV=e=>sq.format(e),sG=(e,t)=>{let r=sV(t*parseFloat(e));return"$0.00"!==r?r:"<$0.01"},sK=(e,t)=>{let r=sV(t*parseFloat((0,et.dF)(e)));return"$0.00"===r?"<$0.01":r},sY=(e,t,r=6,n=!1)=>{let i=parseFloat((0,et.dF)(e)).toFixed(r).replace(/0+$/,"").replace(/\.$/,"");return n?`${i} ${t}`:`${"0"===i?"<0.001":i} ${t}`},sQ=e=>e.map(en.uq).reduce((e,t)=>e.add(t),ei.O$.from(0)).toHexString(),sX=(e,t)=>{let{chains:r}=nZ(),n=`https://etherscan.io/address/${t}`,i=`${tj(e,r)}/address/${t}`;if(!i)return n;try{new URL(i)}catch{return n}return i},sJ=A.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;async function s0({api:e,requesterAppId:t,providerAppId:r}){let n=(await e.get(`/api/v1/apps/${t}/cross-app/connections`)).connections.find(e=>e.provider_app_id===r);if(!n)throw new eK("Invalid connected app");return{name:n.provider_app_name,logoUrl:n.provider_app_icon_url||void 0,apiUrl:n.provider_app_custom_api_url,readOnly:n.read_only}}async function s1({api:e,appId:t}){let r=t4(),n=t4(),i=await t5(r);try{let{url:a}=await e.post(e7,{provider:`privy:${t}`,redirect_to:window.location.href,code_challenge:i,state_code:n});return{url:a,stateCode:n,codeVerifier:r}}catch(e){throw eX(e)}}async function s2({api:e,appId:t,stateCode:r,codeVerifier:n,authorizationCode:i}){if(!i||!r)throw new eK("[Cross-App AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");if("undefined"===i)throw new eK("User denied confirmation during cross-app auth flow");try{return(await e.post(e8,{authorization_code:i,state_code:r,code_verifier:n,provider:`privy:${t}`})).oauth_tokens?.access_token}catch(t){let e=eX(t);throw e.privyErrorCode?new eK(e.message||"Invalid code during cross-app auth flow.",void 0,e.privyErrorCode):"User denied confirmation during cross-app auth flow"===e.message?new eK("Invalid code during cross-app auth flow.",void 0,"oauth_user_denied"):new eK("Invalid code during cross-app auth flow.",void 0,"unknown_auth_error")}}var s3=async({user:e,address:t,client:r,request:n,requesterAppId:i,reconnect:a})=>{r.createAnalyticsEvent({eventName:"cross_app_request_started",payload:{address:t,method:n.method}});let o=e?.linkedAccounts.find(e=>!!("cross_app"===e.type&&e.embeddedWallets.find(e=>e.address===t)));if(!e||!o)throw r.createAnalyticsEvent({eventName:"cross_app_request_error",payload:{error:"Cannot request a signature with this wallet address",address:t}}),new eK("Cannot request a signature with this wallet address");let s=r.getProviderAccessToken(o.providerApp.id),l=await s0({api:r.api,requesterAppId:i,providerAppId:o.providerApp.id});if(!s){if(l.readOnly)throw console.error("cannot transact against a read-only provider app"),new eK("Cannot transact against a read-only provider app");await a({appId:o.providerApp.id})&&(s=r.getProviderAccessToken(o.providerApp.id))}if(!s)throw r.createAnalyticsEvent({eventName:"cross_app_request_error",payload:{error:"Transactions require a valid token",address:t}}),new eK("Transactions require a valid token");let c=window.open(void 0,void 0,s5({w:400,h:680}));if(!c)throw r.createAnalyticsEvent({eventName:"cross_app_request_error",payload:{error:"Missing token",address:t}}),new eK("Failed to initialize signature request");let d=new URL(`${l.apiUrl}/oauth/transact`);return d.searchParams.set("token",s||""),d.searchParams.set("request",s4(n)),c.location=d.href,new Promise((e,i)=>{let a=setTimeout(()=>{d(),i(new eK("Request timeout")),r.createAnalyticsEvent({eventName:"cross_app_request_error",payload:{error:"Request timeout",address:t}})},12e4),s=setInterval(()=>{c.closed&&(d(),i(new eK("User rejected request")),r.createAnalyticsEvent({eventName:"cross_app_request_error",payload:{error:"User rejected request",address:t}}))},300),l=a=>{a.data&&(a.data.token?.action==="set"&&a.data.token?.value!==void 0?r.storeProviderAccessToken(o.providerApp.id,a.data.token.value):a.data.token?.action==="clear"&&r.storeProviderAccessToken(o.providerApp.id,null),"PRIVY_CROSS_APP_ACTION_RESPONSE"===a.data.type&&a.data.result&&(d(),e(a.data.result),r.createAnalyticsEvent({eventName:"cross_app_request_success",payload:{address:t,method:n.method}})),"PRIVY_CROSS_APP_ACTION_ERROR"===a.data.type&&a.data.error&&(d(),i(a.data.error),r.createAnalyticsEvent({eventName:"cross_app_request_error",payload:{error:a.data.error,address:t}})))};window.addEventListener("message",l);let d=()=>{c.close(),clearInterval(s),clearTimeout(a),window.removeEventListener("message",l)}})},s4=e=>JSON.stringify({content:{request:{request:e}},timestamp:Date.now(),callbackUrl:window.origin}),s5=({w:e,h:t})=>{let r=void 0!==window.screenLeft?window.screenLeft:window.screenX,n=void 0!==window.screenTop?window.screenTop:window.screenY,i=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,o=i/window.screen.availWidth,s=a/window.screen.availHeight;return`toolbar=0,location=0,menubar=0,height=${t},width=${e},popup=1,left=${(i-e)/2/o+r},top=${(a-t)/2/s+n}`},s6="sdk_fiat_on_ramp_completed_with_status",s7={1:"ethereum",8453:"base",10:"optimism",137:"polygon",42161:"arbitrum"},s8=e=>!!s7[e],s9=({input:e,amount:t,blockchain:r})=>{let n=new URL("https://pay.coinbase.com/buy/select-asset");return n.searchParams.set("appId",e.app_id),n.searchParams.set("sessionToken",e.session_token),n.searchParams.set("defaultExperience","buy"),n.searchParams.set("presetCryptoAmount",t),n.searchParams.set("defaultNetwork",r),n.searchParams.set("partnerUserId",e.partner_user_id),{url:n}},le=Math.floor(160),lt=e=>e?{title:"You've funded your account!",body:"It may take a few minutes for the assets to appear.",cta:"Continue"}:{title:"In Progress",body:"Go back to Coinbase Onramp to finish funding your account.",cta:""},lr=({isSucccess:e,onClickCta:t})=>{let{title:r,body:n,cta:i}=(0,o.useMemo)(()=>lt(e),[e]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(ls,{children:[(0,m.jsx)(la,{isSucccess:e}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:r}),(0,m.jsx)(lo,{children:n})]})]}),i&&(0,m.jsx)(n3,{onClick:t,children:i})]})},ln=e=>e?"var(--privy-color-success)":"var(--privy-color-foreground-4)",li=e=>e?W.Z:()=>(0,m.jsx)(ea.Z,{width:"3rem",height:"3rem",style:{backgroundColor:"var(--privy-color-foreground-4)",color:"var(--privy-color-background)",borderRadius:"100%",padding:"0.5rem",margin:"0.5rem"}}),la=({isSucccess:e})=>{if(!e){let e="var(--privy-color-foreground-4)";return(0,m.jsxs)("div",{style:{position:"relative"},children:[(0,m.jsx)(nX,{color:e,style:{position:"absolute"}}),(0,m.jsx)(nJ,{color:e}),(0,m.jsx)(rT,{style:{position:"absolute",width:"2.8rem",height:"2.8rem",top:"1.2rem",left:"1.2rem"}})]})}let t=li(e),r=ln(e);return(0,m.jsx)("div",{style:{borderColor:r,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",borderWidth:2,padding:"0.5rem",marginBottom:"0.5rem"},children:t&&(0,m.jsx)(t,{width:"4rem",height:"4rem",color:r})})},lo=A.ZP.p`
  font-size: 1rem;
  color: var(--privy-color-foreground-3);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ls=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  padding: 2rem 0;
`,ll=({children:e})=>(0,m.jsxs)(lc,{children:[(0,m.jsx)(U.Z,{width:"3rem",color:"var(--privy-color-error)"}),e]}),lc=A.ZP.div`
  display: flex;
  gap: 0.5rem;
  background-color: var(--privy-color-error-light);

  align-items: flex-start;
  text-align: left;
  padding: 0.5rem 0.75rem;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem; /* 150% */

  padding: 0.5rem 0.75rem;

  && {
    border: 1px solid var(--privy-color-error);
    border-radius: var(--privy-border-radius-sm);
  }
`,ld=({size:e=61,...t})=>(0,m.jsx)("svg",{width:e,height:e,viewBox:"0 0 61 61",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,m.jsxs)("g",{id:"moonpay_symbol_wht 2",children:[(0,m.jsx)("rect",{x:"1.3374",y:"1",width:"59",height:"59",rx:"11.5",fill:"#7715F5"}),(0,m.jsx)("path",{id:"Vector",d:"M43.8884 23.3258C45.0203 23.3258 46.1268 22.9901 47.068 22.3613C48.0091 21.7324 48.7427 20.8386 49.1759 19.7928C49.6091 18.747 49.7224 17.5962 49.5016 16.4861C49.2807 15.3759 48.7357 14.3561 47.9353 13.5557C47.1349 12.7553 46.1151 12.2102 45.0049 11.9893C43.8947 11.7685 42.7439 11.8819 41.6982 12.3151C40.6524 12.7482 39.7585 13.4818 39.1297 14.423C38.5008 15.3641 38.1651 16.4707 38.1651 17.6026C38.165 18.3542 38.3131 19.0985 38.6007 19.7929C38.8883 20.4873 39.3098 21.1182 39.8413 21.6496C40.3728 22.1811 41.0037 22.6027 41.6981 22.8903C42.3925 23.1778 43.1367 23.3259 43.8884 23.3258ZM26.3395 49.1017C23.5804 49.1017 20.8832 48.2836 18.5891 46.7507C16.295 45.2178 14.5069 43.039 13.4511 40.49C12.3952 37.9409 12.1189 35.1359 12.6572 32.4298C13.1955 29.7237 14.5241 27.238 16.4751 25.287C18.4262 23.336 20.9118 22.0074 23.6179 21.4691C26.324 20.9308 29.129 21.2071 31.6781 22.2629C34.2272 23.3189 36.406 25.1069 37.9389 27.401C39.4717 29.6952 40.2899 32.3923 40.2899 35.1514C40.2899 36.9835 39.9291 38.7975 39.2281 40.49C38.527 42.1826 37.4994 43.7205 36.204 45.0159C34.9086 46.3113 33.3707 47.3389 31.6781 48.04C29.9856 48.741 28.1715 49.1018 26.3395 49.1017Z",fill:"white"})]})}),lh=({style:e,...t})=>(0,m.jsx)("svg",{x:0,y:0,width:"65",height:"64",viewBox:"0 0 65 64",style:{height:"64px",width:"65px",...e},fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71369 17.5625V10.375C3.71369 6.44625 6.85845 3.25 10.7238 3.25H17.7953C18.6783 3.25 19.3941 2.52244 19.3941 1.625C19.3941 0.727562 18.6783 0 17.7953 0H10.7238C5.09529 0 0.516113 4.65419 0.516113 10.375V17.5625C0.516113 18.4599 1.23194 19.1875 2.1149 19.1875C2.99787 19.1875 3.71369 18.4599 3.71369 17.5625ZM17.7953 60.7501C18.6783 60.7501 19.3941 61.4777 19.3941 62.3751C19.3941 63.2726 18.6783 64.0001 17.7953 64.0001H10.7238C5.09529 64.0001 0.516113 59.3459 0.516113 53.6251V46.4376C0.516113 45.5402 1.23194 44.8126 2.1149 44.8126C2.99787 44.8126 3.71369 45.5402 3.71369 46.4376V53.6251C3.71369 57.5538 6.85845 60.7501 10.7238 60.7501H17.7953ZM63.4839 46.4376V53.6251C63.4839 59.3459 58.9048 64.0001 53.2763 64.0001H46.2047C45.3217 64.0001 44.6059 63.2726 44.6059 62.3751C44.6059 61.4777 45.3217 60.7501 46.2047 60.7501H53.2763C57.1416 60.7501 60.2864 57.5538 60.2864 53.6251V46.4376C60.2864 45.5402 61.0022 44.8126 61.8851 44.8126C62.7681 44.8126 63.4839 45.5402 63.4839 46.4376ZM63.4839 10.375V17.5625C63.4839 18.4599 62.7681 19.1875 61.8851 19.1875C61.0022 19.1875 60.2864 18.4599 60.2864 17.5625V10.375C60.2864 6.44625 57.1416 3.25 53.2763 3.25H46.2047C45.3217 3.25 44.6059 2.52244 44.6059 1.625C44.6059 0.727562 45.3217 0 46.2047 0H53.2763C58.9048 0 63.4839 4.65419 63.4839 10.375ZM43.0331 47.3022C43.7067 46.6698 43.7483 45.6022 43.1262 44.9176C42.5039 44.233 41.4536 44.1906 40.78 44.823C38.3832 47.0732 35.265 48.3125 31.9997 48.3125C28.7344 48.3125 25.6162 47.0732 23.2194 44.823C22.5457 44.1906 21.4955 44.233 20.8732 44.9176C20.251 45.6022 20.2927 46.6698 20.9663 47.3022C23.9784 50.1301 27.8968 51.6875 31.9997 51.6875C36.1026 51.6875 40.021 50.1301 43.0331 47.3022ZM35.3207 24.1249V36.1249C35.3207 38.5029 33.4173 40.4374 31.0777 40.4374H29.7249C28.8079 40.4374 28.0646 39.6819 28.0646 38.7499C28.0646 37.8179 28.8079 37.0624 29.7249 37.0624H31.0777C31.5863 37.0624 32.0001 36.6419 32.0001 36.1249V24.1249C32.0001 23.1929 32.7434 22.4374 33.6604 22.4374C34.5774 22.4374 35.3207 23.1929 35.3207 24.1249ZM46.7581 28.8437V24.0312C46.7581 23.151 46.056 22.4374 45.19 22.4374C44.324 22.4374 43.622 23.151 43.622 24.0312V28.8437C43.622 29.7239 44.324 30.4374 45.19 30.4374C46.056 30.4374 46.7581 29.7239 46.7581 28.8437ZM17.6109 28.8437C17.6109 29.7239 18.313 30.4374 19.1789 30.4374C20.0449 30.4374 20.747 29.7239 20.747 28.8437V24.0312C20.747 23.151 20.0449 22.4374 19.1789 22.4374C18.313 22.4374 17.6109 23.151 17.6109 24.0312V28.8437Z"})}),lu=({style:e,...t})=>(0,m.jsxs)("svg",{x:0,y:0,width:"65",height:"64",viewBox:"0 0 65 64",style:{height:"64px",width:"65px",...e},xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_113_33841)",children:[(0,m.jsx)("path",{d:"M39.1193 0.943398C34.636 -0.174912 29.9185 -0.334713 25.328 0.656273C24.9732 0.732859 24.7477 1.08253 24.8243 1.43729C24.9009 1.79205 25.2506 2.01756 25.6053 1.94097C30.0015 0.991934 34.53 1.14842 38.8375 2.22802C49.1385 4.80983 57.7129 12.5548 60.9786 22.6718C62.2416 26.5843 62.7781 30.7505 62.8855 35.1167C62.8945 35.4795 63.1958 35.7664 63.5586 35.7575C63.9215 35.7485 64.2083 35.4472 64.1994 35.0843C64.0905 30.6582 63.5477 26.3849 62.2536 22.3432C58.8621 11.7515 49.9005 3.63265 39.1193 0.943398Z"}),(0,m.jsx)("path",{d:"M21.9931 2.93163C22.343 2.83511 22.5484 2.47325 22.4518 2.12339C22.3553 1.77352 21.9935 1.56815 21.6436 1.66466C16.8429 2.98903 10.0898 7.56519 5.91628 13.6786C5.91465 13.681 5.91304 13.6834 5.91145 13.6858C2.24684 19.2083 -0.0503572 26.1484 0.591012 32.8828C0.591623 32.8892 0.592328 32.8956 0.593127 32.902C0.746837 34.1317 1.00488 35.3591 1.26323 36.5879C1.80735 39.1761 2.35282 41.7706 1.92765 44.4064C1.86986 44.7647 2.11347 45.102 2.47177 45.1598C2.83007 45.2176 3.16738 44.974 3.22518 44.6157C3.66961 41.8605 3.11776 39.173 2.56581 36.4851C2.31054 35.2419 2.05525 33.9987 1.89847 32.7486C1.29525 26.3851 3.46802 19.7466 7.00418 14.416C11.0189 8.5373 17.5201 4.16562 21.9931 2.93163Z"}),(0,m.jsx)("path",{d:"M30.6166 4.39985C38.8671 3.89603 47.1159 7.26314 52.6556 13.7139C52.8921 13.9893 52.8605 14.4042 52.5852 14.6406C52.3099 14.8771 51.895 14.8455 51.6585 14.5702C46.3904 8.43576 38.541 5.23144 30.6927 5.71195C30.6899 5.71212 30.6871 5.71227 30.6843 5.71241C20.7592 6.19265 11.4643 12.9257 8.04547 22.3603C7.92183 22.7016 7.54498 22.8779 7.20375 22.7543C6.86253 22.6306 6.68616 22.2538 6.80981 21.9126C10.4114 11.9735 20.1717 4.90702 30.6166 4.39985Z"}),(0,m.jsx)("path",{d:"M54.6576 16.5848C54.4553 16.2836 54.047 16.2033 53.7457 16.4057C53.4444 16.608 53.3642 17.0163 53.5665 17.3176C56.6376 21.8904 57.9074 26.8665 58.4094 32.7717C58.4401 33.1333 58.7582 33.4016 59.1199 33.3708C59.4815 33.3401 59.7497 33.022 59.719 32.6604C59.206 26.6261 57.8965 21.4076 54.6576 16.5848Z"}),(0,m.jsx)("path",{d:"M59.2796 35.4504C59.6419 35.4277 59.9539 35.703 59.9765 36.0653C60.2242 40.0279 60.2265 44.5112 59.7881 47.8243C59.7405 48.1841 59.4102 48.4372 59.0504 48.3896C58.6906 48.342 58.4376 48.0117 58.4852 47.6519C58.9077 44.4586 58.91 40.0704 58.6648 36.1473C58.6421 35.785 58.9174 35.473 59.2796 35.4504Z"}),(0,m.jsx)("path",{d:"M7.05311 25.5432C7.13829 25.1904 6.92135 24.8354 6.56855 24.7502C6.21576 24.665 5.86071 24.882 5.77553 25.2348C5.2932 27.2325 5.0428 29.2847 5.03288 31.3388C5.02266 33.4559 5.41742 35.5225 5.81234 37.5899C6.1354 39.2811 6.45855 40.9728 6.5602 42.6932C6.69373 44.9531 6.21839 47.2163 5.39698 49.3703C5.26766 49.7094 5.43774 50.0891 5.77685 50.2184C6.11596 50.3477 6.4957 50.1777 6.62502 49.8386C7.49325 47.5617 8.01954 45.1092 7.87221 42.6157C7.77126 40.9071 7.44813 39.2252 7.12512 37.5439C6.73099 35.4925 6.33704 33.442 6.34716 31.3451C6.35659 29.3933 6.59455 27.4425 7.05311 25.5432Z"}),(0,m.jsx)("path",{d:"M24.2964 10.94C24.4317 11.2768 24.2683 11.6595 23.9315 11.7947C17.1187 14.5307 12.0027 20.7047 10.959 27.9852C10.523 31.0269 10.9941 34.0398 11.465 37.052C11.7303 38.7483 11.9954 40.4443 12.0985 42.1451C12.3221 45.833 11.902 49.8839 9.50192 53.5696C9.30387 53.8737 8.89677 53.9597 8.59264 53.7617C8.28851 53.5636 8.20251 53.1565 8.40056 52.8524C10.5873 49.4944 11.0012 45.7644 10.7867 42.2246C10.6821 40.499 10.4185 38.7833 10.1552 37.0686C9.68265 33.9923 9.21067 30.9195 9.65804 27.7987C10.7724 20.025 16.221 13.4748 23.4417 10.5751C23.7785 10.4399 24.1612 10.6032 24.2964 10.94Z"}),(0,m.jsx)("path",{d:"M47.3662 14.6814C41.9915 9.64741 34.2017 7.89046 27.122 9.4433C26.7675 9.52105 26.5432 9.87147 26.6209 10.226C26.6987 10.5805 27.0491 10.8048 27.4036 10.7271C34.1075 9.25665 41.4426 10.934 46.4677 15.6406C50.7033 19.6077 53.1628 25.38 53.8066 31.6779C53.8435 32.0389 54.1661 32.3017 54.5272 32.2648C54.8883 32.2279 55.151 31.9053 55.1141 31.5442C54.4456 25.0047 51.8822 18.9111 47.3662 14.6814Z"}),(0,m.jsx)("path",{d:"M54.9766 34.6738C55.3376 34.6368 55.6604 34.8994 55.6975 35.2604C56.3216 41.337 56.0526 47.9003 55.1104 54.2496C55.0571 54.6086 54.7229 54.8565 54.3639 54.8032C54.0049 54.7499 53.7571 54.4157 53.8103 54.0567C54.7394 47.7957 55.001 41.3439 54.39 35.3947C54.353 35.0336 54.6156 34.7109 54.9766 34.6738Z"}),(0,m.jsx)("path",{d:"M32.0659 13.3553C21.9959 13.3553 13.814 21.3892 13.814 31.3219C13.814 32.3829 13.9081 33.4225 14.0876 34.4334C14.1511 34.7907 14.4922 35.029 14.8495 34.9655C15.2069 34.9021 15.4451 34.561 15.3817 34.2036C15.2155 33.2677 15.1283 32.305 15.1283 31.3219C15.1283 22.1352 22.7014 14.6696 32.0659 14.6696C36.2978 14.6696 40.1642 16.1949 43.1319 18.7152C43.4086 18.9501 43.8233 18.9163 44.0582 18.6396C44.2931 18.363 44.2593 17.9483 43.9827 17.7134C40.7847 14.9975 36.6188 13.3553 32.0659 13.3553Z"}),(0,m.jsx)("path",{d:"M45.455 20.1635C45.717 19.9123 46.133 19.921 46.3842 20.183C49.2843 23.2072 50.2126 27.9605 50.8269 31.9494C51.5188 36.4426 51.6244 40.826 51.6244 42.8585C51.6244 43.2214 51.3302 43.5156 50.9673 43.5156C50.6044 43.5156 50.3101 43.2214 50.3101 42.8585C50.3101 40.8589 50.2055 36.5497 49.5279 32.1494C48.9577 28.4462 48.1356 23.9082 45.4356 21.0927C45.1844 20.8307 45.1931 20.4147 45.455 20.1635Z"}),(0,m.jsx)("path",{d:"M51.4576 46.6219C51.4864 46.2601 51.2165 45.9435 50.8547 45.9146C50.493 45.8858 50.1763 46.1557 50.1474 46.5175C49.8247 50.5654 49.403 54.6088 48.5474 58.3439C48.4663 58.6977 48.6874 59.0502 49.0412 59.1312C49.3949 59.2123 49.7474 58.9912 49.8285 58.6374C50.7067 54.8039 51.134 50.6806 51.4576 46.6219Z"}),(0,m.jsx)("path",{d:"M15.1454 36.852C15.5015 36.7819 15.847 37.0137 15.9171 37.3698C17.3066 44.4257 16.3467 50.8355 12.6672 56.4502C12.4682 56.7537 12.0609 56.8385 11.7573 56.6396C11.4538 56.4407 11.369 56.0333 11.5679 55.7298C15.0299 50.4469 15.9617 44.3985 14.6276 37.6238C14.5575 37.2677 14.7893 36.9221 15.1454 36.852Z"}),(0,m.jsx)("path",{d:"M32.0659 17.631C25.5291 17.631 19.1165 22.691 18.462 29.0504C18.1754 31.8345 18.578 34.5769 18.9807 37.3204C19.3323 39.7159 19.684 42.1124 19.5772 44.5381C19.3328 50.0898 17.7039 54.6726 14.905 58.4471C14.6888 58.7386 14.7499 59.1502 15.0414 59.3663C15.333 59.5825 15.7445 59.5214 15.9607 59.2299C18.9293 55.2266 20.6354 50.386 20.8903 44.5959C20.9966 42.1811 20.6438 39.7923 20.2912 37.4051C19.888 34.6752 19.4851 31.9473 19.7694 29.1849C20.3444 23.5983 26.0946 18.9453 32.0659 18.9453C34.851 18.9453 42.057 20.4534 44.3492 27.9205C45.7856 32.5998 46.1774 38.9326 45.8295 45.0849C45.4816 51.2364 44.3994 57.12 42.9442 60.8928C42.8136 61.2314 42.9822 61.6118 43.3208 61.7424C43.6594 61.873 44.0398 61.7044 44.1704 61.3658C45.6929 57.4186 46.7895 51.386 47.1417 45.1591C47.4938 38.9329 47.1068 32.4249 45.6056 27.5348C43.0612 19.2461 35.0851 17.631 32.0659 17.631Z"}),(0,m.jsx)("path",{d:"M21.9529 56.4512C22.2569 56.6494 22.3426 57.0566 22.1444 57.3606C21.7369 57.9854 21.3784 58.6391 21.0199 59.2928C20.6614 59.9465 20.3028 60.6004 19.8953 61.2253C19.697 61.5293 19.2898 61.615 18.9858 61.4167C18.6819 61.2184 18.5962 60.8113 18.7944 60.5073C19.2019 59.8825 19.5604 59.2288 19.9189 58.5751C20.2774 57.9213 20.636 57.2675 21.0435 56.6426C21.2418 56.3386 21.649 56.2529 21.9529 56.4512Z"}),(0,m.jsx)("path",{d:"M27.5799 24.4525C27.8816 24.2508 27.9625 23.8426 27.7608 23.541C27.559 23.2393 27.1509 23.1583 26.8492 23.3601C24.247 25.1006 22.6505 27.494 22.6505 31.0002C22.6505 33.088 23.0203 34.7946 23.3997 36.5449C23.9674 39.1641 24.3524 41.7777 24.2832 44.468C24.1992 47.7349 23.56 50.7201 22.3313 53.564C22.1873 53.8971 22.3407 54.2839 22.6739 54.4278C23.0071 54.5718 23.3938 54.4184 23.5378 54.0852C24.8369 51.0784 25.509 47.9266 25.5971 44.5018C25.6689 41.7062 25.2732 38.9892 24.6845 36.267C24.3042 34.509 23.9648 32.9394 23.9648 31.0002C23.9648 27.9961 25.2863 25.9866 27.5799 24.4525Z"}),(0,m.jsx)("path",{d:"M30.1447 22.1436C32.8717 21.5877 35.8061 22.2746 37.966 24.0228C41.8241 27.1455 42.3372 32.8403 42.753 37.4549L42.7742 37.69C43.3115 43.6385 42.6964 49.4163 41.4575 55.2186C41.3817 55.5736 41.0326 55.7999 40.6776 55.7241C40.3227 55.6483 40.0964 55.2991 40.1722 54.9442C41.3926 49.2288 41.9873 43.5885 41.4652 37.8082C41.4479 37.6169 41.4307 37.4228 41.4133 37.2264L41.4131 37.2235C41.0438 33.0534 40.5812 27.8304 37.1392 25.0444C35.2926 23.5498 32.7599 22.9518 30.4073 23.4314C30.0517 23.5039 29.7046 23.2744 29.6321 22.9188C29.5596 22.5632 29.7891 22.2161 30.1447 22.1436Z"}),(0,m.jsx)("path",{d:"M40.5287 58.4885C40.6183 58.1368 40.4057 57.7791 40.054 57.6896C39.7023 57.6 39.3446 57.8126 39.2551 58.1643C38.8578 59.7247 38.2456 61.1333 37.4695 62.4301C37.2831 62.7415 37.3844 63.145 37.6958 63.3314C38.0072 63.5178 38.4108 63.4165 38.5972 63.1051C39.4336 61.7075 40.0977 60.1816 40.5287 58.4885Z"}),(0,m.jsx)("path",{d:"M37.3152 48.9521C37.6756 48.9948 37.9332 49.3215 37.8906 49.682C37.2699 54.9267 35.8688 59.6042 33.6205 63.6613C33.4446 63.9787 33.0446 64.0934 32.7272 63.9175C32.4097 63.7416 32.295 63.3417 32.4709 63.0242C34.6226 59.1416 35.9811 54.6339 36.5854 49.5275C36.6281 49.1671 36.9548 48.9095 37.3152 48.9521Z"}),(0,m.jsx)("path",{d:"M37.1798 30.6556C36.7242 28.2212 34.6349 26.3591 32.0985 26.3591C28.6638 26.3591 26.254 29.8212 27.1032 33.0422C28.54 38.7279 28.7759 44.2077 27.8032 49.4855L27.8025 49.4893C26.9584 54.228 25.3374 58.4908 23.1263 62.1031C22.9368 62.4127 23.0342 62.8172 23.3437 63.0067C23.6533 63.1962 24.0578 63.0988 24.2473 62.7893C26.5488 59.0292 28.2249 54.6109 29.0961 49.7218C30.106 44.2403 29.8558 38.5684 28.3765 32.7168L28.3748 32.7099C27.7378 30.3005 29.5133 27.6734 32.0985 27.6734C33.9641 27.6734 35.5393 29.0459 35.8871 30.8929C36.8436 36.4411 37.3418 41.5862 36.9871 46.016C36.9581 46.3778 37.2279 46.6945 37.5897 46.7235C37.9515 46.7525 38.2682 46.4827 38.2972 46.1209C38.6649 41.5294 38.1459 36.2576 37.1815 30.6648C37.1809 30.6617 37.1804 30.6586 37.1798 30.6556Z"}),(0,m.jsx)("path",{d:"M30.1376 59.1171C30.4604 59.283 30.5876 59.6792 30.4217 60.002L28.6804 63.3906C28.5145 63.7134 28.1184 63.8406 27.7956 63.6747C27.4728 63.5088 27.3456 63.1127 27.5114 62.7899L29.2527 59.4013C29.4186 59.0785 29.8147 58.9513 30.1376 59.1171Z"}),(0,m.jsx)("path",{d:"M32.5872 31.2892C32.5042 30.9359 32.1505 30.7168 31.7972 30.7998C31.4439 30.8828 31.2247 31.2365 31.3077 31.5898C33.5238 41.0232 33.2194 49.3066 30.5201 56.363C30.3905 56.702 30.5602 57.0819 30.8991 57.2115C31.2381 57.3412 31.618 57.1715 31.7477 56.8326C34.5622 49.475 34.8483 40.9141 32.5872 31.2892Z"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_113_33841",children:(0,m.jsx)("rect",{width:"64",height:"64",fill:"white",transform:"translate(0.483887)"})})})]}),lp=({passkeys:e,expanded:t,onUnlink:r,onExpand:n})=>{let[i,a]=(0,o.useState)([]),s=t?e.length:2,l=e=>e.authenticatorName?e.createdWithBrowser?`${e.authenticatorName} on ${e.createdWithBrowser}`:e.authenticatorName:e.createdWithBrowser?e.createdWithOs?`${e.createdWithBrowser} on ${e.createdWithOs}`:`${e.createdWithBrowser}`:"Unknown device",c=async e=>{a(t=>t.concat([e])),await r(e),a(t=>t.filter(t=>t!==e))};return(0,m.jsxs)("div",{children:[(0,m.jsx)(l_,{children:"Your passkeys"}),(0,m.jsxs)(lx,{children:[e.slice(0,s).map(e=>(0,m.jsxs)(lE,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(lj,{children:l(e)}),(0,m.jsxs)(lk,{children:["Last used: ",(e.latestVerifiedAt??e.verifiedAt).toLocaleString()]})]}),(0,m.jsx)(lS,{disabled:i.includes(e.credentialId),onClick:()=>c(e.credentialId),children:i.includes(e.credentialId)?(0,m.jsx)(n0,{}):(0,m.jsx)(el.Z,{height:"1.6em"})})]},e.credentialId)),e.length>2&&!t&&(0,m.jsx)(lw,{onClick:n,children:"View all"})]})]})},lm=()=>(0,m.jsxs)(lx,{children:[(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(ec.Z,{})}),"Log in with Touch ID, Face ID, or a security key."]}),(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(J.Z,{})}),"More secure than a password."]}),(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(es.Z,{})}),"Takes seconds to set up and use."]})]}),lg=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`,lf=A.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: ${e=>e.success?"var(--privy-color-success)":e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  display: flex;
  justify-content: flex-beginngin;
  width: 100%;
`,ly=(0,A.iv)`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,lw=A.ZP.button`
  ${ly}
`,lx=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,lv=A.ZP.div`
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  font-weight: 600;
`,lC=A.ZP.div`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 10px;
`,lb=A.ZP.div`
  height: 32px;
`,l_=A.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-beginning;
  width: 100%;
`,lj=A.ZP.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,lk=A.ZP.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64668b;
  padding: 0.2em 0;
`,lE=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e2e3f0 !important;
  width: 100%;
  height: 5em;
`,lA=(0,A.iv)`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,lS=A.ZP.button`
  ${lA}
`,lT=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,lP=A.ZP.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,lN=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,lR=A.ZP.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`,lM=A.ZP.div`
  font-size: 42px !important;
`,lO=A.ZP.input`
  font-size: 42px !important;
  text-align: right;
  background-color: var(--privy-color-background);

  // HACK: The only way this is centerable is to set a content-based width.
  // The --funding-input-length is updated via the component.
  // Note that 'ch' has 98.25% global browser adoption
  width: calc(1ch * var(--funding-input-length));

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`,lI=A.ZP.div`
  cursor: pointer;
  padding-left: 4px;
`,lW=A.ZP.div`
  font-size: 18px;
`,lL=A.ZP.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`,lF=A.ZP.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,lU=(0,A.ZP)(lw)`
  margin-top: 16px;
`,lD=(0,A.F4)`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,lZ=(0,A.ZP)(ie)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${lD} 0.3s ease-in-out;
`,lz=A.ZP.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`,l$=A.ZP.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`,lH=({address:e,showCopyIcon:t,url:r,className:n})=>r?(0,m.jsx)("a",{title:e,className:n,href:`${r}/address/${e}`,target:"_blank",children:tm(e)}):(0,m.jsxs)("button",{title:e,className:n,onClick:()=>navigator.clipboard.writeText(e).catch(console.error),children:[tm(e),t&&(0,m.jsx)(lB,{})]}),lB=(0,A.ZP)(D.Z)`
  && {
    display: inline;
  }
  stroke-width: 2;
  height: 0.875rem;
  width: 0.875rem;
  margin-left: 0.125rem;
  color: var(--privy-color-foreground-3);
`,lq=({errMsg:e,balance:t,address:r,isLoading:n,className:i,title:a,isPulsing:o,statusColor:s="green"})=>{let l;return l=s||(e?"red":"green"),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(lV,{className:i,$state:e?"error":void 0,children:[(0,m.jsxs)(oc,{children:[(0,m.jsx)(l$,{children:a||"Pay with"}),(0,m.jsx)(lH,{address:r,showCopyIcon:!!e})]}),(0,m.jsx)(aj,{isLoading:n,isPulsing:o,color:l,children:t})]}),e&&(0,m.jsx)(lz,{style:{marginTop:"0.25rem"},children:e})]})},lV=A.ZP.div`
  && {
    border-width: 1px;
  }

  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"border-color: var(--privy-color-error);":""}
`,lG=({...e})=>(0,m.jsx)(rG,{color:"black",...e}),lK=e=>{let[t,r]=(0,o.useState)(!1);return(0,m.jsx)(l1,{onClick:()=>{r(!0),navigator.clipboard.writeText(e.text),setTimeout(()=>r(!1),1500)},children:(0,m.jsxs)(l0,{children:[t?(0,m.jsx)(ss,{style:{height:"16px",width:"16px"},strokeWidth:"2"}):(0,m.jsx)(Q.Z,{style:{height:"16px",width:"16px"}}),t?"Copied":"Copy address"]})})},lY=A.ZP.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`,lQ=A.ZP.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  svg {
    margin-right: 12px;
  }
`,lX=A.ZP.div`
    line-height: 20px;
    font-size: 18px
    text-align: center;
`,lJ=A.ZP.div`
  display: flex;
  flex-direction: column;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  svg {
    margin-right: 6px;
  }
  padding: 16px;
  gap: 8px;
`,l0=A.ZP.span`
  display: flex;
  align-items: center;
  margin: auto;
`,l1=A.ZP.button`
  display: flex;
  align-items: center;
  width: 100%;

  && {
    border-radius: var(--privy-border-radius-md);
    border: 1px solid var(--privy-color-foreground-4);
    background-color: white;
    line-height: 18px;
    text-align: center;
    padding: 8px;
    font-size: 14px;
    background-color: var(--privy-color-background);
    color: ${e=>e.justCopied?"var(--privy-color-foreground-2)":"var(--privy-color-foreground-accent-dark)"};
    font-weight: ${e=>e.justCopied?"medium":"normal"};
    transition: color 350ms ease;

    :active {
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${e=>e.justCopied?"var(--privy-color-foreground-2)":"var(--privy-color-foreground-accent-dark)"};
    }

    :active {
      color: 'var(--privy-color-foreground-accent-dark)';
      font-weight: medium;
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,l2=({title:e,desc:t,icon:r})=>(0,m.jsxs)(l9,{children:[(0,m.jsx)(ct,{children:r}),(0,m.jsxs)(ce,{children:[(0,m.jsx)(l7,{children:e}),(0,m.jsx)(l8,{children:t})]})]}),l3=({app:e,signedUrl:t,onContinue:r})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l5,{children:[(0,m.jsx)(ld,{size:"3.75rem"}),(0,m.jsxs)(l6,{children:[e?.name," uses ",(0,m.jsx)("span",{style:{fontWeight:"bold"},children:"Moonpay"})," to fund your account"]}),(0,m.jsxs)(cr,{children:[(0,m.jsx)(l2,{icon:(0,m.jsx)(eu.Z,{width:"1rem"}),title:"Purchase assets to fund your account",desc:(0,m.jsxs)(m.Fragment,{children:["Connect a payment method (",(0,m.jsx)("strong",{children:"debit card recommended"}),") to purchase digital assets."]})}),(0,m.jsx)(l2,{icon:(0,m.jsx)(es.Z,{width:"1rem"}),title:"Compliance takes time",desc:"Funding a new account may take a few hours. You'll be good to go thereafter."}),(0,m.jsx)(l2,{icon:(0,m.jsx)($.Z,{width:"1rem"}),title:"Your data belongs to you",desc:"MoonPay does not sell your data and will only use it with your permission."})]}),(0,m.jsx)(cn,{className:"mobile-only"})]}),(0,m.jsx)(l4,{children:"By clicking continue, you will be taken to MoonPay in a new tab."}),(0,m.jsx)(n6,{disabled:!t,href:t??"#",target:"_blank",rel:"noopener noreferrer",onClick:r,children:"Continue to Moonpay"})]}),l4=A.ZP.span`
  display: inline-block;
  color: var(--privy-color-foreground-3);
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 0.875rem */
  margin-bottom: 0.25rem;
`,l5=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
`,l6=A.ZP.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  margin: 1.5rem 0;
  text-align: center;
  max-width: 19.5rem;
`,l7=A.ZP.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.225rem;
  width: 100%;
`,l8=A.ZP.span`
  color: var(--privy-color-foreground-2);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.225rem;
`,l9=A.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`,ce=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
  text-align: left;
  flex: 1 0 0;
`,ct=A.ZP.div`
  padding-top: 2px;
`,cr=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0 0.5rem;
`,cn=A.ZP.div`
  margin: 30px 0;
`,ci="moonpay";function ca(e){return!!e&&(void 0!==e.chain||void 0!==e.amount)}async function co(e,t,r,n,i=!1){let a=r.currencyCode?{}:{defaultCurrencyCode:"ETH_ETHEREUM"},o=r.uiConfig||{accentColor:n.accent,theme:n.colorScheme};return e.signMoonpayOnRampUrl({address:t,useSandbox:i,config:{...r,...a,...o}})}async function cs(e,t){return(0,_.Wg)(`https://api.moonpay.com/v1/transactions/ext/${e}`,{query:{apiKey:t?"pk_test_fqWjXZMSFwloh7orvJsRfjiUHXJqFzI":"pk_live_hirbpu0cVcLHrjktC9l7fbc9ctjv0SL"}})}var cl=e=>{switch(e){case"completed":return{title:"You've funded your account!",body:"It may take a few minutes for the assets to appear.",cta:"Continue"};case"waitingAuthorization":return{title:"Processing payment",body:"This may take up to a few hours. You will receive an email when the purchase is complete.",cta:"Continue"};default:return{title:"In Progress",body:"Go back to MoonPay to finish funding your account.",cta:""}}},cc=({status:e,onClickCta:t})=>{let{title:r,body:n,cta:i}=(0,o.useMemo)(()=>cl(e),[e]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(cm,{children:[(0,m.jsx)(cu,{status:e}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:r}),(0,m.jsx)(cp,{children:n})]})]}),i&&(0,m.jsx)(n3,{onClick:t,children:i})]})},cd=e=>e?({completed:"var(--privy-color-success)",failed:"var(--privy-color-error)",serviceFailure:"var(--privy-color-error)",waitingAuthorization:"var(--privy-color-accent)",pending:"var(--privy-color-foreground-4)"})[e]:"var(--privy-color-foreground-4)",ch=e=>{switch(e){case"completed":return W.Z;case"waitingAuthorization":return()=>(0,m.jsx)(ea.Z,{width:"3rem",height:"3rem",style:{backgroundColor:"var(--privy-color-foreground-4)",color:"var(--privy-color-background)",borderRadius:"100%",padding:"0.5rem",margin:"0.5rem"}});default:return}},cu=({status:e})=>{if(!e||"pending"===e){let e="var(--privy-color-foreground-4)";return(0,m.jsxs)("div",{style:{position:"relative"},children:[(0,m.jsx)(nX,{color:e,style:{position:"absolute"}}),(0,m.jsx)(nJ,{color:e}),(0,m.jsx)(ld,{size:"3rem",style:{position:"absolute",top:"1rem",left:"1rem"}})]})}let t=ch(e),r=cd(e);return(0,m.jsx)("div",{style:{borderColor:r,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",borderWidth:2,padding:"0.5rem",marginBottom:"0.5rem"},children:t&&(0,m.jsx)(t,{width:"4rem",height:"4rem",color:r})})},cp=A.ZP.p`
  font-size: 1rem;
  color: var(--privy-color-foreground-3);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,cm=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  padding: 2rem 0;
`,cg=A.ZP.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,cf=()=>{let{enabled:e,token:t}=nF(),{navigate:r,setModalData:n}=ny(),{initLoginWithPasskey:i}=nZ();return(0,m.jsx)(cw,{onClick:async()=>{e&&!t?(n({captchaModalData:{callback:e=>i(e),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSKEY_SYSTEM_DIALOGUE",onErrorNavigateTo:"ERROR_SCREEN"}}),r("CAPTCHA_SCREEN")):(await i(),r("AWAITING_PASSKEY_SYSTEM_DIALOGUE"))},children:"I have a passkey"})},cy=(0,A.iv)`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,cw=A.ZP.button`
  ${cy}
`,cx=({onClick:e,text:t})=>(0,m.jsxs)(i_,{onClick:e,children:[(0,m.jsx)(F.Z,{}),(0,m.jsx)(iy,{children:t}),(0,m.jsx)(ep.Z,{})]}),cv=A.ZP.div`
  border-radius: 50%;
  height: 68px;
  width: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--privy-color-accent);
  color: white;
  margin: 0 auto 24px auto;
`,cC=({style:e,...t})=>(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"17",height:"17",viewBox:"0 0 17 17",style:{height:"1.25rem",width:"1.25rem",...e},...t,children:(0,m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 8.67993C16.5 9.82986 15.853 10.8287 14.9032 11.3322C15.2188 12.3599 14.97 13.5237 14.1569 14.3368C13.3437 15.1499 12.18 15.3987 11.1523 15.0831C10.6488 16.0329 9.64993 16.6799 8.5 16.6799C7.35007 16.6799 6.35126 16.0329 5.84771 15.0831C4.82003 15.3987 3.65627 15.1499 2.84314 14.3368C2.03001 13.5237 1.78124 12.3599 2.09681 11.3322C1.14699 10.8287 0.5 9.82986 0.5 8.67993C0.5 7.53 1.14699 6.53119 2.0968 6.02764C1.78125 4.99996 2.03003 3.83621 2.84315 3.02309C3.65627 2.20997 4.82002 1.96119 5.8477 2.27675C6.35125 1.32692 7.35007 0.679932 8.5 0.679932C9.64992 0.679932 10.6487 1.32691 11.1523 2.27672C12.18 1.96115 13.3437 2.20993 14.1569 3.02305C14.97 3.83618 15.2188 4.99996 14.9032 6.02764C15.853 6.53119 16.5 7.53 16.5 8.67993ZM12.2659 6.68856C12.5654 6.40238 12.5761 5.92763 12.29 5.62818C12.0038 5.32873 11.529 5.31797 11.2296 5.60416C9.73022 7.03711 8.40877 8.65489 7.3018 10.4211L5.78033 8.89963C5.48744 8.60673 5.01256 8.60673 4.71967 8.89963C4.42678 9.19252 4.42678 9.66739 4.71967 9.96029L6.92031 12.1609C7.08544 12.3261 7.31807 12.4048 7.54957 12.374C7.78106 12.3432 7.98499 12.2064 8.1012 12.0038C9.23027 10.0356 10.6362 8.24613 12.2659 6.68856Z",fill:"var(--privy-color-accent)"})}),cb=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`,c_=A.ZP.div`
  &&& {
    margin-left: 7px; /* TODO: This is a total hack */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 12px;
  }
`,cj=({children:e})=>(0,m.jsxs)(ck,{children:[(0,m.jsx)(cC,{style:{width:"16px",height:"16px"}}),e]}),ck=A.ZP.div`
  display: flex;
  justify-content: flex-start;
  justify-items: center;
  text-align: left;
  gap: 8px;

  && {
    a {
      text-decoration: underline;
      color: var(--privy-color-accent);
    }

    svg {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`,cE=()=>(0,m.jsxs)(cA,{children:[(0,m.jsx)(aa,{title:"Create a Phantom wallet",description:"Follow the instructions below to get started."}),(0,m.jsx)(i3,{children:(0,m.jsx)(rX,{style:{width:"152px",height:"152px"}})}),(0,m.jsxs)(cb,{children:[(0,m.jsx)(cj,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:"Install the "}),(0,m.jsx)("a",{href:s.vU?"https://addons.mozilla.org/en-US/firefox/addon/phantom-app/":"https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en",target:"_blank",children:"Phantom browser extension"})]})}),(0,m.jsx)(c_,{}),(0,m.jsx)(cj,{children:"Set up your first wallet"}),(0,m.jsx)(c_,{}),(0,m.jsx)(cj,{children:"Store your recovery phrase in a safe place!"})]}),(0,m.jsx)(ie,{onClick:()=>window.location.reload(),children:"Reload the page to use your wallet"})]}),cA=(0,A.ZP)(i3)`
  gap: 30px;

  > :first-child > svg {
    margin-top: 20px;
  }
`,cS={apple_oauth:"apple",custom_auth:"custom",discord_oauth:"discord",email:"email",farcaster:"farcaster",github_oauth:"github",google_oauth:"google",instagram_oauth:"instagram",linkedin_oauth:"linkedin",passkey:"passkey",phone:"sms",spotify_oauth:"spotify",telegram:"telegram",tiktok_oauth:"tiktok",twitter_oauth:"twitter",wallet:"siwe",cross_app:"privy:",guest:"guest"},cT=e=>{let t=cS[e];return"wallet"===e||"phone"===e?{displayName:e,loginMethod:t}:{displayName:t,loginMethod:t}},cP=()=>{let{app:e}=ny(),t=e?.appearance?.logo,r=`${e?.name} logo`,n={maxHeight:"90px",maxWidth:"180px"};return t?"string"==typeof t?(0,m.jsx)("img",{src:t,alt:r,style:n}):"svg"===t.type||"img"===t.type?o.cloneElement(t,{alt:r,style:n}):(console.warn("`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered."),null):null},cN=e=>{let{app:t}=ny();return t?.appearance.logo?(0,m.jsx)(cR,{...e,children:(0,m.jsx)(cP,{})}):null},cR=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  flex-grow: 1;
  justify-content: center;
`,cM=(0,o.forwardRef)((e,t)=>{let[r,n]=(0,o.useState)(""),[i,a]=(0,o.useState)(!1),{authenticated:s}=n$(),{initLoginWithEmail:l}=nZ(),{navigate:c,setModalData:d,currentScreen:h}=ny(),{enabled:u,token:p}=nF(),[g,f]=(0,o.useState)(!1),{accountType:y}=aW(),w=tu(r),x=i||!w,v=e=>{a(!0),l(r,e).then(()=>{c("AWAITING_PASSWORDLESS_CODE")}).catch(e=>{d({errorModalData:{error:e,previousScreen:h||"LANDING"}}),c("ERROR_SCREEN")}).finally(()=>{a(!1)})},C=()=>{!u||p||s?v(p):(d({captchaModalData:{callback:e=>l(r,e),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSWORDLESS_CODE",onErrorNavigateTo:"ERROR_SCREEN"}}),c("CAPTCHA_SCREEN"))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(cO,{children:(0,m.jsxs)(cI,{stacked:e.stacked,children:[(0,m.jsx)(O.Z,{}),(0,m.jsx)("input",{ref:t,id:"email-input",type:"email",placeholder:"your@email.com",onFocus:()=>f(!0),onChange:e=>n(e.target.value),onKeyUp:e=>{"Enter"===e.key&&C()},value:r,autoComplete:"email"}),"email"!==y||g?e.stacked?(0,m.jsx)("span",{}):(0,m.jsx)(it,{isSubmitting:i,onClick:C,disabled:x,children:"Submit"}):(0,m.jsx)(aj,{color:"gray",children:"Recent"})]})}),e.stacked?(0,m.jsx)(n3,{loadingText:null,loading:i,disabled:x,onClick:C,children:"Submit"}):null]})}),cO=A.ZP.div`
  width: 100%;
`,cI=A.ZP.label`
  display: block;
  position: relative;
  width: 100%;

  > svg {
    position: absolute;
    margin: 13px 17px;
    height: 24px;
    width: 24px;
    color: var(--privy-color-foreground-3);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 12px 88px 12px 52px;
    padding-right: ${e=>e.stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-mdlg);
    width: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`,cW=({isEditable:e,setIsEditable:t})=>{let r=(0,o.useRef)(null);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ik,{if:!e,children:(0,m.jsx)(cM,{ref:r})}),(0,m.jsx)(ik,{if:e,children:(0,m.jsxs)(i_,{onClick:()=>{t(),setTimeout(()=>{r.current?.focus()},0)},children:[(0,m.jsx)(O.Z,{})," Continue with Email"]})})]})},cL=()=>{let[e,t]=(0,o.useState)(!1),{currentScreen:r,navigate:n,setModalData:i}=ny(),{enabled:a,token:s}=nF(),{initLoginWithFarcaster:l}=nZ(),{accountType:c}=aW();return(0,m.jsxs)(i_,{onClick:async()=>{t(!0);try{a&&!s?(i({captchaModalData:{callback:e=>l(e),userIntentRequired:!0,onSuccessNavigateTo:"AWAITING_FARCASTER_CONNECTION",onErrorNavigateTo:"ERROR_SCREEN"}}),n("CAPTCHA_SCREEN")):(await l(s),n("AWAITING_FARCASTER_CONNECTION"))}catch(e){i({errorModalData:{error:e,previousScreen:r||"LANDING"}}),n("ERROR_SCREEN")}finally{t(!1)}},disabled:!1,children:[(0,m.jsx)(s_,{})," Farcaster",e&&(0,m.jsx)("span",{children:(0,m.jsx)(n0,{})}),"farcaster"===c&&(0,m.jsx)(cF,{color:"gray",children:"Recent"})]})},cF=(0,A.ZP)(aj)`
  margin-left: auto;
`,cU=(e,t)=>(0,eg.t)(String(e),t),cD=(e,t)=>`+${(0,ef.G)(t)} ${e}`,cZ=e=>`*${e.replaceAll("-","").slice(-4)}`,cz=e=>new ey.R(e),c$=(0,ew.o)().map(e=>({code:e,callCode:(0,ef.G)(e)})),cH=e=>{let t=ex.L(e,em.Z)?.formatInternational();return t?.substring(t.indexOf(" ")+1)},cB=({value:e,onChange:t})=>(0,m.jsx)("select",{value:e,onChange:t,children:c$.map(e=>(0,m.jsxs)("option",{value:e.code,children:[e.code," +",e.callCode]},e.code))}),cq=(0,o.forwardRef)((e,t)=>{let{app:r}=ny(),[n,i]=(0,o.useState)(!1),{accountType:a}=aW(),[s,l]=(0,o.useState)(""),[c,d]=(0,o.useState)(r?.intl.defaultCountry??"US"),h=cU(s,c),u=cz(c),p=cH(c),g=(0,ef.G)(c),f=!h,[y,w]=(0,o.useState)(!1),x=g.length,v=t=>{try{let r=t.replace(/\D/g,""),n=s.replace(/\D/g,""),i=r===n?t:u.input(t);l(i),e.onChange&&e.onChange({rawPhoneNumber:i,qualifiedPhoneNumber:cD(t,c),countryCode:c,isValid:cU(t,c)})}catch(e){console.error("Error processing phone number:",e)}},C=()=>{w(!0);let t=cD(s,c);e.onSubmit({rawPhoneNumber:s,qualifiedPhoneNumber:t,countryCode:c,isValid:cU(s,c)}).finally(()=>w(!1))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(cV,{children:(0,m.jsxs)(cG,{callingCodeLength:x,stacked:e.stacked,children:[(0,m.jsx)(cB,{value:c,onChange:t=>{let r=t.target.value;d(r),l(""),e.onChange&&e.onChange({rawPhoneNumber:s,qualifiedPhoneNumber:cD(s,r),countryCode:r,isValid:cU(s,c)})}}),(0,m.jsx)("input",{ref:t,id:"phone-number-input",type:"tel",placeholder:p,onFocus:()=>i(!0),onChange:e=>{v(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&C()},value:s,autoComplete:"tel"}),"phone"!==a||n||e.hideRecent?e.stacked||e.noIncludeSubmitButton?(0,m.jsx)("span",{}):(0,m.jsx)(it,{isSubmitting:y,onClick:C,disabled:f,children:"Submit"}):(0,m.jsx)(aj,{color:"gray",children:"Recent"})]})}),e.stacked&&!e.noIncludeSubmitButton?(0,m.jsx)(n3,{loading:y,loadingText:null,onClick:C,disabled:f,children:"Submit"}):null]})}),cV=A.ZP.div`
  width: 100%;
`,cG=A.ZP.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${e=>e.callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${e=>e.callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${e=>e.callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: calc(100% - var(--country-code-dropdown-width));

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${e=>e.stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-mdlg);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`,cK=({isEditable:e,setIsEditable:t})=>{let r=(0,o.useRef)(null),{authenticated:n}=n$(),{navigate:i,setModalData:a,currentScreen:s}=ny(),{initLoginWithSms:l}=nZ(),{enabled:c,token:d}=nF();async function h({qualifiedPhoneNumber:e}){if(!c||d||n)try{await l(e,d),i("AWAITING_PASSWORDLESS_CODE")}catch(e){a({errorModalData:{error:e,previousScreen:s||"LANDING"}}),i("ERROR_SCREEN")}else a({captchaModalData:{callback:t=>l(e,t),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSWORDLESS_CODE",onErrorNavigateTo:"ERROR_SCREEN"}}),i("CAPTCHA_SCREEN")}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ik,{if:!e,children:(0,m.jsx)(cq,{ref:r,onSubmit:h})}),(0,m.jsx)(ik,{if:e,children:(0,m.jsxs)(i_,{onClick:()=>{t(),setTimeout(()=>{r.current?.focus()},0)},children:[(0,m.jsx)(I.Z,{})," Continue with SMS"]})})]})},cY={apple:{logo:(0,m.jsx)(t8,{}),displayName:"Apple"},discord:{logo:(0,m.jsx)(t9,{}),displayName:"Discord"},github:{logo:(0,m.jsx)(re,{}),displayName:"GitHub"},google:{logo:(0,m.jsx)(rr,{}),displayName:"Google"},linkedin:{logo:(0,m.jsx)(ri,{}),displayName:"LinkedIn"},spotify:{logo:(0,m.jsx)(ra,{}),displayName:"Spotify"},instagram:{logo:(0,m.jsx)(rn,{}),displayName:"Instagram"},twitter:{logo:(0,m.jsx)(rs,{}),displayName:"Twitter"},tiktok:{logo:(0,m.jsx)(ro,{}),displayName:"TikTok"}},cQ=({provider:e})=>{let{enabled:t,token:r}=nF(),{navigate:n,setModalData:i}=ny(),[a,s]=(0,o.useState)(!1),{initLoginWithOAuth:l}=nZ(),{accountType:c}=aW(),d=c?cT(c):null,{displayName:h,logo:u}=cY[e];return(0,m.jsxs)(i_,{onClick:()=>{s(!0),t&&!r?(i({captchaModalData:{callback:t=>l(e,t),userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ERROR_SCREEN"}}),n("CAPTCHA_SCREEN")):l(e)},disabled:a,children:[u," ",h,d?.loginMethod===e&&(0,m.jsx)(cX,{color:"gray",children:"Recent"})]})},cX=(0,A.ZP)(aj)`
  margin-left: auto;
`;function cJ(e){return(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 240 240",...e,children:[(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",{x1:"120",y1:"240",x2:"120",gradientUnits:"userSpaceOnUse",id:"telegram-linear-gradient",children:[(0,m.jsx)("stop",{offset:"0",stopColor:"#1d93d2"}),(0,m.jsx)("stop",{offset:"1",stopColor:"#38b0e3"})]})}),(0,m.jsx)("title",{children:"Telegram_logo"}),(0,m.jsx)("circle",{cx:"120",cy:"120",r:"120",fill:"url(#telegram-linear-gradient)"}),(0,m.jsx)("path",{d:"M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z",fill:"#c8daea"}),(0,m.jsx)("path",{d:"M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763",fill:"#a9c6d8"}),(0,m.jsx)("path",{d:"M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z",fill:"#fff"})]})}var c0=()=>{let{enabled:e,token:t}=nF(),{navigate:r,setModalData:n}=ny(),[i,a]=(0,o.useState)(!1),{initLoginWithTelegram:s}=nZ(),{accountType:l}=aW();async function c(e){try{await s(e),r("TELEGRAM_AUTH_SCREEN")}catch(e){console.error(e),a(!1)}}async function d(){if(a(!0),e&&!t){n({captchaModalData:{callback:c,userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ERROR_SCREEN"}}),r("CAPTCHA_SCREEN");return}await c()}return(0,m.jsxs)(i_,{onClick:d,disabled:i,children:[(0,m.jsx)(cJ,{}),"Telegram","telegram"===l&&(0,m.jsx)(c1,{color:"gray",children:"Recent"})]})},c1=(0,A.ZP)(aj)`
  margin-left: auto;
`,c2=({onClick:e,text:t,icon:r})=>(0,m.jsxs)(i_,{onClick:e,children:[r,(0,m.jsx)(iy,{children:t}),(0,m.jsx)(ep.Z,{})]}),c3=({connectOnly:e})=>{let{closePrivyModal:t,connectors:r}=nZ(),{app:n,onUserCloseViaDialogOrKeybindRef:i}=ny(),{appearance:{palette:{colorScheme:a}}}=nh(),{accountType:l,walletClientType:c}=aW(),d=l?cT(l):null,h=n.loginMethodsAndOrder?.primary??[],u=n.loginMethodsAndOrder?.overflow??[],p=[...h,...u],g=n.loginMethods.passkey,f=[];c&&p.includes(c)?f.push(c):l&&p.includes(d?.loginMethod)&&f.push(d?.loginMethod);let[y,w]=(0,o.useState)("default"),[x,v]=(0,o.useState)("phone"===l?"sms":"email");(0,o.useEffect)(()=>{"phone"===l&&v("sms");let e=p.indexOf("sms"),t=p.indexOf("email");e>-1&&e<t&&v("sms")},[l,h,u]);let C=()=>{t({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{w("default")},150)};i.current=C;let b=t=>"email"===t?(0,m.jsx)(cW,{isEditable:"email"===x,setIsEditable:()=>{v("email")}},t):"sms"===t?(0,m.jsx)(cK,{isEditable:"sms"===x,setIsEditable:()=>{v("sms")}},t):"apple"===t?(0,m.jsx)(cQ,{provider:"apple"},t):"discord"===t?(0,m.jsx)(cQ,{provider:"discord"},t):"farcaster"===t?(0,m.jsx)(cL,{},t):"github"===t?(0,m.jsx)(cQ,{provider:"github"},t):"google"===t?(0,m.jsx)(cQ,{provider:"google"},t):"linkedin"===t?(0,m.jsx)(cQ,{provider:"linkedin"},t):"tiktok"===t?(0,m.jsx)(cQ,{provider:"tiktok"},t):"twitter"===t&&(!s.tq||n?.loginConfig.twitterOAuthOnMobileEnabled)?(0,m.jsx)(cQ,{provider:"twitter"},t):"telegram"===t?(0,m.jsx)(c0,{},t):aB([t],r,e,p,n.externalWallets.walletConnect.enabled),_=f.flatMap(b),j=h.filter(e=>e!==c&&e!==d?.loginMethod).flatMap(b),k=u.filter(e=>e!==c&&e!==d?.loginMethod).flatMap(b),[E,A]=th([..._,...j,...k],c4({primary:j.length+_.length,overflow:k.length}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{title:n.appearance.landingHeader,onClose:C,backFn:"default"===y?void 0:()=>{w("default")}}),"default"===y&&(0,m.jsx)(c5,{}),"default"===y&&("string"==typeof n.appearance.loginMessage?(0,m.jsx)(ib,{children:n.appearance.loginMessage}):n.appearance.loginMessage),(0,m.jsx)(iw,{style:{overflow:"hidden"},children:(0,m.jsxs)(iv,{colorScheme:a,style:{maxHeight:400,overflowY:"scroll",padding:2},children:["default"===y&&(0,m.jsxs)(m.Fragment,{children:[...E,A.length>0&&(0,m.jsx)(c2,{text:"More options",icon:(0,m.jsx)(X.Z,{}),onClick:()=>w("overflow")})]}),"overflow"===y&&(0,m.jsxs)(m.Fragment,{children:[...A]}),g&&"default"===y&&(0,m.jsx)(cf,{})]})}),n&&(0,m.jsx)(iT,{app:n}),(0,m.jsx)(iP,{})]})},c4=({primary:e,overflow:t})=>e<5?e:5===e&&0===t?5:4,c5=(0,A.ZP)(cN)`
  margin-bottom: 16px;
`,c6=({...e})=>(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",...e,children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_2856_1743)",children:[(0,m.jsx)("path",{d:"M22.1673 8.24075V16.3642C22.1673 17.3256 21.3421 18.105 20.3241 18.105H17.0028M22.1673 8.24075C22.1673 7.27936 21.3421 6.5 20.3241 6.5H11.5302M22.1673 8.24075V8.42852C22.1673 9.03302 21.8352 9.59423 21.2901 9.91105L15.1463 13.4818C14.5539 13.8261 13.8067 13.8261 13.2143 13.4818L10.1621 11.5401",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M3.12913 6.64816C0.508085 12.9507 3.49251 20.1847 9.79504 22.8057L11.5068 23.5176C12.4522 23.9108 13.7783 23.2222 14.1714 22.2768L14.6054 21.2333C14.7687 20.8406 14.6438 20.3871 14.3024 20.1334L11.2872 17.8927C10.9878 17.6702 10.5843 17.6488 10.2632 17.8384L9.11575 18.5156C8.78274 18.7121 8.3597 18.6844 8.07552 18.4221C5.94293 16.4542 4.77629 13.6264 4.90096 10.7273C4.91757 10.3409 5.19796 10.023 5.57269 9.92753L6.86381 9.59869C7.22522 9.50664 7.49627 9.20696 7.55169 8.83815L8.10986 5.12321C8.17306 4.70259 7.94188 4.29293 7.54915 4.1296L6.50564 3.69564C5.56026 3.30248 4.23416 3.99103 3.84101 4.9364L3.12913 6.64816Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_2856_1743",children:(0,m.jsx)("rect",{x:"0.5",y:"0.5",width:"24",height:"24",rx:"6",fill:"white"})})})]}),c7=({connectOnly:e})=>{let{closePrivyModal:t,connectors:r}=nZ(),{data:n,onUserCloseViaDialogOrKeybindRef:i}=ny(),a=nh(),{accountType:l,walletClientType:c}=aW(),d=l?cT(l):null,h=n?.login,{email:u,sms:p,google:g,twitter:f,discord:y,github:w,spotify:x,instagram:v,tiktok:C,linkedin:b,apple:_,wallet:j,farcaster:k,telegram:E}=(0,o.useMemo)(()=>h?.loginMethods?(0,ev.W)(h.loginMethods,!0):null,[h])??a.loginMethods,{passkey:A}=a.loginMethods,S=[u&&"email",p&&"sms",g&&"google",f&&"twitter",y&&"discord",w&&"github",x&&"spotify",v&&"instagram",C&&"tiktok",b&&"linkedin",_&&"apple",k&&"farcaster",E&&"telegram"].filter(e=>!!e),T=S.length>0,P=(0,o.useMemo)(()=>j&&!T?"web3-first":j&&a?.appearance.loginGroupPriority||"web2-first",[j,T,a?.appearance.loginGroupPriority]),N=a?.appearance.hideDirectWeb2Inputs,[R,M]=(0,o.useState)("default"),[O,I]=(0,o.useState)(dr({accountType:l,sms:p,email:u}));(0,o.useEffect)(()=>{I(dr({accountType:l,sms:p,email:u}))},[u,p,l]);let W=()=>{t({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{M("default")},150)};i.current=W;let L=[];c&&j?L.push(c):d?.loginMethod&&S.includes(d.loginMethod)&&L.push(d.loginMethod);let F=t=>"email"===t?(0,m.jsx)(cW,{isEditable:"email"===O,setIsEditable:()=>{I("email")}},t):"sms"===t?(0,m.jsx)(cK,{isEditable:"sms"===O,setIsEditable:()=>{I("sms")}},t):"apple"===t?(0,m.jsx)(cQ,{provider:"apple"},t):"discord"===t?(0,m.jsx)(cQ,{provider:"discord"},t):"farcaster"===t?(0,m.jsx)(cL,{},t):"github"===t?(0,m.jsx)(cQ,{provider:"github"},t):"google"===t?(0,m.jsx)(cQ,{provider:"google"},t):"linkedin"===t?(0,m.jsx)(cQ,{provider:"linkedin"},t):"tiktok"===t?(0,m.jsx)(cQ,{provider:"tiktok"},t):"twitter"===t&&(!s.tq||a?.loginConfig.twitterOAuthOnMobileEnabled)?(0,m.jsx)(cQ,{provider:"twitter"},t):"telegram"===t?(0,m.jsx)(c0,{},t):aB([t],r,e,[],a.externalWallets.walletConnect.enabled),U=aB(a.appearance.walletList.filter(e=>e!==c),r,e,[...a.appearance.walletList,c],a.externalWallets.walletConnect.enabled),D=S.filter(e=>e!==d?.loginMethod).flatMap(F),Z=L.flatMap(F);"web3-first"===P&&"default"===R?U.unshift(...Z):"web2-first"===P&&D.unshift(...Z);let z=S.filter(e=>"email"!==e&&"sms"!==e),$=c9({priority:P,email:u,sms:p,social:z}),H=de({priority:P,email:u,sms:p,social:z}),B=dt({priority:P}),q=(0,m.jsx)(cx,{text:B,onClick:()=>M("web3-overflow")}),V=(0,m.jsx)(c2,{text:$,icon:H,onClick:()=>M("web2-overflow")}),G=N?0:1;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{title:a.appearance.landingHeader,onClose:W,backFn:"default"===R?void 0:()=>{M("default")}}),"default"===R&&(0,m.jsx)(c8,{}),"default"===R&&("string"==typeof a.appearance.loginMessage?(0,m.jsx)(ib,{children:a.appearance.loginMessage}):a.appearance.loginMessage),(0,m.jsx)(iw,{style:{overflow:"hidden",padding:2},children:(0,m.jsxs)(ix,{children:["default"===R&&"web2-first"===P&&(0,m.jsxs)(m.Fragment,{children:[...D.length>4?D.slice(0,3):D,D.length>4&&V,j&&q]}),"default"===R&&"web3-first"===P&&(0,m.jsxs)(m.Fragment,{children:[j&&(0,m.jsxs)(m.Fragment,{children:[...U.length>4?U.slice(0,3):U,U.length>4&&q]}),D.length>G&&V,D.length===G&&D[0]]}),"web2-overflow"===R&&(0,m.jsxs)(m.Fragment,{children:[..."web3-first"===P?D:D.slice(3)]}),..."web3-overflow"===R?U:[],A&&"default"===R&&(0,m.jsx)(cf,{})]})}),a&&(0,m.jsx)(iT,{app:a}),(0,m.jsx)(iP,{})]})},c8=(0,A.ZP)(cN)`
  margin-bottom: 16px;
`,c9=({priority:e,email:t,sms:r,social:n})=>"web2-first"===e?"Other socials":t&&r&&n.length>0||t&&n.length>0?"Log in with email or socials":r&&n.length>0?"Log in with sms or socials":t&&r?"Continue with email or sms":t?"Continue with email":r?"Continue with sms":"Log in with a social account",de=({priority:e,email:t,sms:r,social:n})=>"web2-first"===e||n.length>0?(0,m.jsx)(X.Z,{}):t&&r?(0,m.jsx)(c6,{}):t?(0,m.jsx)(O.Z,{}):r?(0,m.jsx)(I.Z,{}):null,dt=({priority:e})=>"web2-first"===e?"Continue with a wallet":"Other wallets",dr=({accountType:e,sms:t,email:r})=>"email"===e&&r?"email":"phone"===e&&t||t&&!r?"sms":"email",dn=({style:e,...t})=>(0,m.jsxs)("svg",{width:"164",height:"164",viewBox:"0 0 164 164",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"26px",width:"26px",...e},...t,children:[(0,m.jsx)("circle",{cx:"82",cy:"82",r:"80",stroke:"#EC6351","stroke-width":"4","stroke-linecap":"round"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81.9999 100.788C93.3288 100.788 102.513 91.6043 102.513 80.2754C102.513 68.9465 93.3288 59.7626 81.9999 59.7626C70.671 59.7626 61.4871 68.9465 61.4871 80.2754C61.4871 91.6043 70.671 100.788 81.9999 100.788ZM88.3236 71.8304C88.9093 71.2446 89.8591 71.2446 90.4449 71.8304C91.0307 72.4161 91.0307 73.3659 90.4449 73.9517L84.121 80.2756L90.445 86.5996C91.0308 87.1854 91.0308 88.1351 90.445 88.7209C89.8592 89.3067 88.9095 89.3067 88.3237 88.7209L81.9997 82.3969L75.6756 88.7209C75.0899 89.3067 74.1401 89.3067 73.5543 88.7209C72.9685 88.1351 72.9685 87.1854 73.5543 86.5996L79.8783 80.2756L73.5544 73.9517C72.9686 73.3659 72.9686 72.4161 73.5544 71.8304C74.1402 71.2446 75.09 71.2446 75.6758 71.8304L81.9997 78.1543L88.3236 71.8304Z",fill:"#EC6351"})]});function di(){let{promptMfa:e,init:t,submit:r,cancel:n,mfaMethods:i}=(0,o.useContext)(nz);return{promptMfa:e,init:t,submit:r,cancel:n,mfaMethods:i}}function da(){let{initEnrollmentWithSms:e,initEnrollmentWithTotp:t,initEnrollmentWithPasskey:r,submitEnrollmentWithSms:n,submitEnrollmentWithTotp:i,submitEnrollmentWithPasskey:a,unenroll:s,enrollInMfa:l}=(0,o.useContext)(nz);return{initEnrollmentWithSms:e,initEnrollmentWithTotp:t,initEnrollmentWithPasskey:r,submitEnrollmentWithSms:n,submitEnrollmentWithTotp:i,submitEnrollmentWithPasskey:a,unenrollWithSms:()=>s("sms"),unenrollWithTotp:()=>s("totp"),unenrollWithPasskey:()=>s("passkey"),showMfaEnrollmentModal:()=>l(!0),closeMfaEnrollmentModal:()=>l(!1)}}var ds=e=>(0,m.jsxs)(dl,{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"88",height:"89",viewBox:"0 0 88 89",...e,children:[(0,m.jsx)("rect",{y:"0.666016",width:"88",height:"88",rx:"44"}),(0,m.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M45.2463 20.9106C44.5473 20.2486 43.4527 20.2486 42.7537 20.9106C37.8798 25.5263 31.3034 28.3546 24.0625 28.3546C23.9473 28.3546 23.8323 28.3539 23.7174 28.3525C22.9263 28.3427 22.2202 28.8471 21.9731 29.5987C20.9761 32.6311 20.4375 35.8693 20.4375 39.2297C20.4375 53.5896 30.259 65.651 43.5482 69.0714C43.8446 69.1477 44.1554 69.1477 44.4518 69.0714C57.741 65.651 67.5625 53.5896 67.5625 39.2297C67.5625 35.8693 67.0239 32.6311 66.0269 29.5987C65.7798 28.8471 65.0737 28.3427 64.2826 28.3525C64.1677 28.3539 64.0527 28.3546 63.9375 28.3546C56.6966 28.3546 50.1202 25.5263 45.2463 20.9106ZM52.7249 40.2829C53.3067 39.4683 53.1181 38.3363 52.3035 37.7545C51.4889 37.1726 50.3569 37.3613 49.7751 38.1759L41.9562 49.1223L38.0316 45.1977C37.3238 44.4899 36.1762 44.4899 35.4684 45.1977C34.7605 45.9056 34.7605 47.0532 35.4684 47.761L40.9059 53.1985C41.2826 53.5752 41.806 53.7671 42.337 53.7232C42.868 53.6792 43.3527 53.4039 43.6624 52.9704L52.7249 40.2829Z"})]}),dl=A.ZP.svg`
  height: 90px;
  width: 90px;

  > rect {
    ${e=>"success"===e.color?"fill: var(--privy-color-success);":"fill: var(--privy-color-accent);"}
  }

  > path {
    fill: white;
  }
`,dc=({showIntro:e,userMfaMethods:t,appMfaMethods:r,userHasAuthSms:n,isTotpLoading:i,isPasskeyLoading:a,error:o,onClose:s,onBackToIntro:l,handleSelectMethod:c,setRemovingMfaMethod:d})=>{let h=t.reduce((e,t)=>({...e,[t]:!0}),{}),u=r.reduce((e,t)=>({...e,[t]:!0}),{});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:e?l:void 0,onClose:s},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(ek.Z,{})})}),(0,m.jsx)(iM,{children:"Choose a verification method"}),t.length>0?(0,m.jsx)(iO,{children:"To add or delete verification methods, verification is required."}):(0,m.jsx)(iO,{children:"How would you like to verify your identity? You can change this later."}),o&&(0,m.jsx)(iK,{style:{marginTop:"1.25rem"},children:o.message}),(0,m.jsxs)(iD,{children:[(u.totp||h.totp)&&(0,m.jsxs)(iZ,{children:[(0,m.jsx)(i_,{style:{justifyContent:"center"},disabled:h.totp||i,onClick:()=>c("totp"),children:i?(0,m.jsx)(nX,{style:{height:24,width:24,borderWidth:2},color:"var(--privy-color-foreground-3)"}):(0,m.jsxs)(iB,{children:[(0,m.jsxs)(i$,{children:[(0,m.jsx)(eE.Z,{}),"Authenticator App"]}),h.totp?(0,m.jsxs)(iH,{children:[(0,m.jsx)(M.Z,{}),"Added"]}):(0,m.jsx)(iH,{children:"Recommended"})]})}),h.totp&&(0,m.jsx)(iz,{onClick:()=>d("totp"),children:(0,m.jsx)(el.Z,{})})]},"totp"),(u.sms||h.sms)&&(0,m.jsxs)(iZ,{children:[(0,m.jsx)(i_,{disabled:h.sms||n,onClick:()=>c("sms"),children:(0,m.jsxs)(iB,{children:[(0,m.jsxs)(i$,{children:[(0,m.jsx)(I.Z,{}),"SMS"]}),h.sms&&(0,m.jsxs)(iH,{children:[(0,m.jsx)(M.Z,{}),"Added"]}),n&&(0,m.jsx)(iH,{children:"Disabled"})]})}),h.sms&&(0,m.jsx)(iz,{onClick:()=>d("sms"),children:(0,m.jsx)(el.Z,{})})]},"sms"),(u.passkey||h.passkey)&&(0,m.jsxs)(iZ,{children:[(0,m.jsx)(i_,{style:{justifyContent:"center"},onClick:()=>c("passkey"),disabled:h.passkey||a,children:a?(0,m.jsx)(nX,{style:{height:24,width:24,borderWidth:2},color:"var(--privy-color-foreground-3)"}):(0,m.jsxs)(iB,{children:[(0,m.jsxs)(i$,{children:[(0,m.jsx)(eA.Z,{}),"Passkey"]}),h.passkey?(0,m.jsxs)(iH,{children:[(0,m.jsx)(M.Z,{}),"Added"]}):(0,m.jsx)(iH,{isAccent:!0,children:(0,m.jsx)(ep.Z,{})})]})}),h.passkey&&(0,m.jsx)(iz,{onClick:()=>d("passkey"),children:(0,m.jsx)(el.Z,{})})]},"passkey")]}),(0,m.jsx)(iN,{})]})},dd=({onComplete:e,onClose:t,onReset:r})=>{let{user:n}=n$(),{data:i}=ny(),{initLinkWithPasskey:a,linkWithPasskey:s}=nZ(),{initEnrollmentWithPasskey:l,submitEnrollmentWithPasskey:c}=da(),[d,h]=(0,o.useState)(!1),[u,p]=(0,o.useState)(!1),[g,f]=(0,o.useState)(!1),[y,w]=(0,o.useState)(null),x=(0,o.useMemo)(()=>n?.linkedAccounts.filter(e=>"passkey"===e.type)??[],[n]),v=()=>{i?.mfaEnrollmentFlow?.onSuccess(),e()},C=async e=>{h(!0);try{await l(),await c({credentialIds:e}),f(!0)}catch(e){w(e)}finally{h(!1)}},b=async()=>{p(!0),w(null);try{await a();let e=(await s())?.linkedAccounts.filter(e=>"passkey"===e.type).map(e=>e.credentialId)??[];await C(e)}catch(e){w(e)}finally{p(!1)}};return 0===x.length||u?(0,m.jsx)(dh,{onReset:r,onClose:t,onClick:b,isCreating:u}):g?(0,m.jsx)(dp,{onClick:v,onClose:v}):y?(0,m.jsx)(si,{error:y,backFn:()=>w(null),onClick:()=>w(null)}):(0,m.jsx)(du,{passkeys:x,isSubmitting:d,isCreating:u,onReset:r,onClose:t,onSubmitEnrollment:()=>C(x.map(e=>e.credentialId)),onAddPasskey:b})},dh=({onReset:e,onClose:t,onClick:r,isCreating:n})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:e,onClose:t},"header"),(0,m.jsx)(iR,{children:(0,m.jsxs)(lg,{children:[(0,m.jsx)(lh,{}),(0,m.jsx)(lu,{})]})}),(0,m.jsx)(iM,{children:"Set up passkey verification"}),(0,m.jsxs)(iW,{children:[(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(eT.Z,{})}),"Verify with Touch ID, Face ID, PIN, or hardware key"]}),(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(es.Z,{})}),"Takes seconds to set up and use"]}),(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(eS.Z,{})}),"Use your passkey to verify transactions and login to your account"]})]}),(0,m.jsx)(n3,{style:{marginTop:"2.25rem"},onClick:r,loading:n,children:"Add a new passkey"}),(0,m.jsx)(iN,{})]}),du=({onReset:e,onClose:t,onAddPasskey:r,onSubmitEnrollment:n,passkeys:i,isSubmitting:a,isCreating:s})=>{let[l,c]=(0,o.useState)(!1),d=l?i.length:i.length>3?2:3;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:l?()=>c(!1):e,onClose:t},"header"),!l&&(0,m.jsx)(iR,{children:(0,m.jsxs)(lg,{children:[(0,m.jsx)(lh,{}),(0,m.jsx)(lu,{})]})}),(0,m.jsx)(iM,{children:"Enable your passkeys for verification"}),(0,m.jsxs)(iW,{children:[i.slice(0,d).map(e=>(0,m.jsxs)(dm,{children:[(0,m.jsx)(dg,{children:dy(e)}),(0,m.jsxs)(df,{children:["Last used: ",e.latestVerifiedAt?.toLocaleString()]})]},e.credentialId)),!l&&i.length>3&&(0,m.jsx)(dw,{onClick:()=>c(!0),children:"View All"})]}),(0,m.jsx)(n3,{style:{marginTop:"1.5rem"},onClick:n,loading:a,children:"Enable passkeys"}),i.length<5&&(0,m.jsx)(dw,{style:{marginTop:"0.5rem"},onClick:r,disabled:s,children:s?(0,m.jsx)(nX,{style:{height:"1rem",width:"1rem",borderWidth:2}}):"Add new passkey"}),(0,m.jsx)(iN,{})]})},dp=({onClick:e,onClose:t})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:t},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{status:"success",children:(0,m.jsx)(W.Z,{})})}),(0,m.jsx)(iM,{children:"Passkey verification added"}),(0,m.jsx)(iO,{children:"From now on, you'll use the passkey whenever you use your Privy wallet."}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{onClick:e,children:"Done"})}),(0,m.jsx)(iN,{})]}),dm=A.ZP.div`
  && {
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`,dg=A.ZP.div`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;

  color: var(--privy-color-foreground-1);
`,df=A.ZP.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;

  color: var(--privy-color-foreground-2);
`,dy=e=>e.authenticatorName?e.createdWithBrowser?`${e.authenticatorName} on ${e.createdWithBrowser}`:e.authenticatorName:e.createdWithBrowser?e.createdWithOs?`${e.createdWithBrowser} on ${e.createdWithOs}`:`${e.createdWithBrowser}`:"Unknown device",dw=A.ZP.button`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 0.75rem 1rem;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent);

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,dx=Array(6).fill("");function dv(e){return/^[0-9]{1}$/.test(e)}function dC(e){return 6===e.length&&e.every(dv)}var db=({onChange:e,disabled:t,errorReasonOverride:r,success:n})=>{let[i,a]=(0,o.useState)(dx),[l,c]=(0,o.useState)(null),[d,h]=(0,o.useState)(null),u=async t=>{t.preventDefault();let r=t.currentTarget.value.replace(/\s+/g,"");if(""===r)return;let n=i.reduce((e,t)=>e+Number(dv(t)),0),o=r.split(""),s=!o.every(dv),l=o.length+n>6;if(s){c("Passcode can only be numbers"),h(1);return}if(l){c("Passcode must be exactly 6 numbers"),h(1);return}c(null),h(null);let d=Number(t.currentTarget.name?.charAt(4)),u=[...r||[""]].slice(0,6-d),p=[...i.slice(0,d),...u,...i.slice(d+u.length)];a(p);let m=Math.min(Math.max(d+u.length,0),5);if(document.querySelector(`input[name=pin-${m}]`)?.focus(),dC(p))try{await e(p.join("")),document.querySelector(`input[name=pin-${m}]`)?.blur()}catch(e){h(1),c(e.message)}else try{await e(null)}catch(e){h(1),c(e.message)}},p=t=>{1===d&&(c(null),h(null));let r=[...i.slice(0,t),"",...i.slice(t+1)];a(r),t>0&&document.querySelector(`input[name=pin-${t-1}]`)?.focus(),dC(r)?e(r.join("")):e(null)},g=n?"success":r||l?"fail":"";return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(d_,{children:[(0,m.jsx)("div",{children:i.map((e,r)=>(0,m.jsx)("input",{name:`pin-${r}`,type:"text",value:i[r],onChange:u,onKeyUp:e=>{"Backspace"===e.key&&p(r)},inputMode:"numeric",autoFocus:0===r,pattern:"[0-9]",className:g,autoComplete:s.tq?"one-time-code":"off",disabled:t},r))}),(0,m.jsx)("div",{children:(0,m.jsx)(dj,{fail:!!r||!!l,children:r||l})})]})})},d_=A.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (max-width: 440px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  > div:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-md);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-md);
      padding: 8px 10px;
      height: 58px;
      width: 46px;
      text-align: center;
      font-size: 18px;
    }

    > input:disabled {
      /* Use light-theme-bg-2 instead of disabled-bg for consistency with
      the callout bubble */
      background: var(--privy-color-background-2);
    }

    > input:focus {
      border: 1px solid var(--privy-color-accent);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-success);
    }

    > input.fail {
      border: 1px solid var(--privy-color-error);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`,dj=A.ZP.div`
  line-height: 20px;
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  color: ${e=>e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
`,dk=({onComplete:e,onReset:t,onClose:r})=>{let[n,i]=(0,o.useState)(""),[a,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(null),[d,h]=(0,o.useState)("enroll"),{initEnrollmentWithSms:u,submitEnrollmentWithSms:p}=da(),{app:g,data:f}=ny();function y(){f?.mfaEnrollmentFlow?.onSuccess(),e()}async function w({qualifiedPhoneNumber:e}){try{await u({phoneNumber:e}),i(e),h("verify")}catch(e){c(e)}}async function x(e){try{if(!e)return;await p({phoneNumber:n,mfaCode:e}),s(!0)}catch(e){throw ot(e)?Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds."):oe(e)?Error("The code you entered is not valid"):a9(e)?Error("You have exceeded the time limit for code entry. Please try again in 30 seconds."):or(e)?Error("Verification canceled"):Error("Unknown error")}}return l?(0,m.jsx)(si,{error:l,backFn:()=>c(null),onClick:()=>c(null)}):"enroll"===d?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:t,onClose:r},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(e_.Z,{})})}),(0,m.jsx)(iM,{children:"Set up SMS verification"}),(0,m.jsx)(iO,{children:"We'll text a verification code to this mobile device whenever you use your Privy wallet."}),(0,m.jsxs)(iI,{children:[(0,m.jsx)(cq,{onSubmit:w,hideRecent:!0}),(0,m.jsxs)(iq,{children:["By providing your mobile number, you agree to receive text messages from ",g?.name,". Some carrier charges may apply"]})]}),(0,m.jsx)(iN,{})]}):a?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:y},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{status:"success",children:(0,m.jsx)(W.Z,{})})}),(0,m.jsx)(iM,{children:"SMS verification added"}),(0,m.jsx)(iO,{children:"From now on, you'll enter the verification code sent to your mobile device whenever you use your Privy wallet."}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{onClick:y,children:"Done"})}),(0,m.jsx)(iN,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:function(){"verify"===d?h("enroll"):t()},onClose:r},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(e_.Z,{})})}),(0,m.jsx)(iM,{children:"Enter enrollment code"}),(0,m.jsxs)(iI,{children:[(0,m.jsx)(db,{onChange:x}),(0,m.jsxs)(iO,{children:["To continue, enter the 6-digit code sent to ",(0,m.jsx)("strong",{children:cZ(n)})]})]}),(0,m.jsx)(iN,{})]})},dE=({size:e,authUrl:t})=>(0,m.jsx)(sb,{url:t,squareLogoElement:ek.Z,size:e,fgColor:"#1F1F1F"}),dA=({onComplete:e,onClose:t,onReset:r,totpInfo:n})=>{let[i,a]=(0,o.useState)("enroll"),[s,l]=(0,o.useState)(!1),{submitEnrollmentWithTotp:c}=da(),{data:d}=ny();function h(){d?.mfaEnrollmentFlow?.onSuccess(),e()}async function u(e){try{if(!e)return;await c({mfaCode:e}),l(!0)}catch(e){throw ot(e)?Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds."):oe(e)?Error("The code you entered is not valid"):a9(e)?Error("You have exceeded the time limit for code entry. Please try again in 30 seconds."):or(e)?Error("Verification canceled"):Error("Unknown error")}}return"enroll"===i?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:r,onClose:t},"header"),(0,m.jsx)(iM,{children:"Scan QR code"}),(0,m.jsx)(iO,{children:"Open your authenticator app and scan the QR code to continue."}),(0,m.jsx)(i5,{children:(0,m.jsx)(dE,{authUrl:n.authUrl,size:200})}),(0,m.jsxs)(iU,{children:[(0,m.jsx)(i3,{children:(0,m.jsx)(sc,{itemName:"secret",text:n.secret})}),(0,m.jsx)(n3,{onClick:function(){a("verify")},children:"Continue"})]}),(0,m.jsx)(iN,{})]}):s?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:h},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{status:"success",children:(0,m.jsx)(W.Z,{})})}),(0,m.jsx)(iM,{children:"Authenticator app verification added"}),(0,m.jsx)(iO,{children:"From now on, you'll enter the verification code generated by your authenticator app whenever you use your Privy wallet."}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{onClick:h,children:"Done"})}),(0,m.jsx)(iN,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:function(){"verify"===i?a("enroll"):r()},onClose:t},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(eC.Z,{})})}),(0,m.jsx)(iM,{children:"Enter enrollment code"}),(0,m.jsx)(iI,{children:(0,m.jsx)(db,{onChange:u})}),(0,m.jsxs)(iO,{children:["To continue, enter the 6-digit code generated from your ",(0,m.jsx)("strong",{children:"authenticator app"})]}),(0,m.jsx)(iN,{})]})},dS=({label:e,children:t,valueStyles:r})=>(0,m.jsxs)(dT,{children:[(0,m.jsx)("div",{children:e}),(0,m.jsx)(dP,{style:{...r},children:t})]}),dT=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,dP=A.ZP.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`,dN=({weiQuantities:e,tokenPrice:t,tokenSymbol:r})=>{let n=sQ(e),i=t?sK(n,t):void 0,a=sY(n,r);return(0,m.jsx)(dM,{children:i||a})},dR=({weiQuantities:e,tokenPrice:t,tokenSymbol:r})=>{let n=sQ(e),i=t?sK(n,t):void 0,a=sY(n,r);return(0,m.jsx)(dM,{children:i?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(dO,{children:"USD"}),"<$0.01"===i?(0,m.jsxs)(dW,{children:[(0,m.jsx)(dI,{children:"<"}),"$0.01"]}):i]}):a})},dM=A.ZP.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,dO=A.ZP.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,dI=A.ZP.span`
  font-size: 10px;
`,dW=A.ZP.span`
  display: flex;
  align-items: center;
`,dL=({gas:e,tokenPrice:t,tokenSymbol:r})=>(0,m.jsxs)(i7,{style:{paddingBottom:"12px"},children:[(0,m.jsxs)(dU,{children:[(0,m.jsx)(dZ,{children:"Est. Fees"}),(0,m.jsx)("div",{children:(0,m.jsx)(dR,{weiQuantities:[e],tokenPrice:t,tokenSymbol:r})})]}),t&&(0,m.jsx)(dD,{children:`${sY(e,r)}`})]}),dF=({transactionData:e,gas:t,tokenPrice:r,tokenSymbol:n})=>{let i=(0,en.uq)(e.value||0).add((0,en.uq)(t)).toHexString();return(0,m.jsxs)(i7,{children:[(0,m.jsxs)(dU,{children:[(0,m.jsx)(dZ,{children:"Total (including fees)"}),(0,m.jsx)("div",{children:(0,m.jsx)(dR,{weiQuantities:[e.value||0,t],tokenPrice:r,tokenSymbol:n})})]}),r&&(0,m.jsx)(dD,{children:sY(i,n)})]})},dU=A.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,dD=A.ZP.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,dZ=A.ZP.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`,dz=(0,o.createContext)(void 0),d$=(0,o.createContext)(void 0),dH=({defaultValue:e,children:t})=>{let[r,n]=(0,o.useState)(e||null);return(0,m.jsx)(dz.Provider,{value:{activePanel:r,togglePanel:e=>{n(r===e?null:e)}},children:(0,m.jsx)(dK,{children:t})})},dB=({value:e,children:t})=>{let{activePanel:r,togglePanel:n}=(0,o.useContext)(dz),i=r===e;return(0,m.jsx)(d$.Provider,{value:{onToggle:()=>n(e),value:e},children:(0,m.jsx)(dJ,{isActive:i,"data-open":i,children:t})})},dq=({children:e})=>{let{activePanel:t}=(0,o.useContext)(dz),{onToggle:r,value:n}=(0,o.useContext)(d$),i=t===n;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(dY,{onClick:r,"data-open":i,children:[(0,m.jsx)(dX,{children:e}),(0,m.jsx)(d2,{isactive:i,children:(0,m.jsx)(eP.Z,{height:"16px",width:"16px",strokeWidth:"2"})})]}),(0,m.jsx)(dQ,{})]})},dV=({children:e})=>{let{activePanel:t}=(0,o.useContext)(dz),{value:r}=(0,o.useContext)(d$);return(0,m.jsx)(d0,{"data-open":t===r,children:(0,m.jsx)(d1,{children:e})})},dG=({children:e})=>{let{activePanel:t}=(0,o.useContext)(dz),{value:r}=(0,o.useContext)(d$);return(0,m.jsx)(d1,{children:"function"==typeof e?e({isActive:t===r}):e})},dK=A.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,dY=A.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,dQ=A.ZP.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,dX=A.ZP.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,dJ=A.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,d0=A.ZP.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,d1=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,d2=A.ZP.div`
  transform: ${e=>e.isactive?"rotate(180deg)":"rotate(0deg)"};
`,d3=({walletAddress:e,chainId:t=t0})=>(0,m.jsx)(d4,{href:sX(t,e),target:"_blank",children:tm(e)}),d4=A.ZP.a`
  &:hover {
    text-decoration: underline;
  }
`,d5=({from:e,to:t,txn:r,transactionInfo:n,tokenPrice:i,gas:a,tokenSymbol:o})=>{let s=r?.value||0,l=nh();return(0,m.jsx)(dH,{...l.render.standalone?{defaultValue:"details"}:{},children:(0,m.jsxs)(dB,{value:"details",children:[(0,m.jsx)(dq,{children:(0,m.jsxs)(d6,{children:[(0,m.jsx)("div",{children:n?.title||n?.actionDescription||"Details"}),(0,m.jsx)(d7,{children:(0,m.jsx)(dN,{weiQuantities:[s],tokenPrice:i,tokenSymbol:o})})]})}),(0,m.jsxs)(dV,{children:[(0,m.jsx)(dS,{label:"From",children:(0,m.jsx)(d3,{walletAddress:e,chainId:r.chainId||t0})}),(0,m.jsx)(dS,{label:"To",children:(0,m.jsx)(d3,{walletAddress:t,chainId:r.chainId||t0})}),n&&n.action&&(0,m.jsx)(dS,{label:"Action",children:n.action}),a&&(0,m.jsx)(dL,{transactionData:r,gas:a,tokenPrice:i,tokenSymbol:o})]}),(0,m.jsx)(dG,{children:({isActive:e})=>(0,m.jsx)(dF,{transactionData:r,displayFee:e,gas:a||"0x0",tokenPrice:i,tokenSymbol:o})})]})})},d6=A.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,d7=A.ZP.div`
  flex-shrink: 0;
  padding-left: 8px;
`,d8=A.ZP.img`
  && {
    height: ${e=>"sm"===e.size?"65px":"140px"};
    width: ${e=>"sm"===e.size?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`,d9=({pendingTransaction:e})=>{let{getAccessToken:t}=n$(),{wallets:r}=sH(),{walletProxy:n,rpcConfig:i,chains:a,appId:s,nativeTokenSymbolForChainId:d}=nZ(),[h,u]=(0,o.useState)(null),[p,g]=(0,o.useState)(e),{tokenPrice:f}=sz(p),y=d(e.chainId)||"ETH",w=(0,o.useMemo)(()=>r.find(e=>"privy"===e.walletClientType),[r]);return(0,o.useEffect)(()=>{(async function(){if(!await t()||!n||!w)return p;let e=tk(p.chainId,a,i,{appId:s}),r=await (0,l.vT)(w.address,p,e),{totalGasEstimate:o}=await (0,c.gM)(r,e);return u(o.toHexString()),r})().then(g).catch(console.error)},[n]),w?(0,m.jsx)(he,{children:(0,m.jsx)(d5,{from:w.address,to:p.to,txn:p,gas:h??void 0,tokenPrice:f,tokenSymbol:y})}):null},he=A.ZP.div`
  width: 100%;
  padding: 1rem 0;
`,ht=({hasBlockingError:e,error:t,onClose:r,onBack:n,handleSubmit:i,account:a,submitSuccess:o})=>{let{pendingTransaction:s}=nZ();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:r},"header"),(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:o,fail:!!t}),t?(0,m.jsx)(U.Z,{style:{width:"38px",height:"38px"}}):(0,m.jsx)(lh,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsx)(iM,{style:{marginTop:"1rem"},children:"Verifying with passkey"}),(0,m.jsxs)(iW,{children:[(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(eT.Z,{})}),"Approve this action using your touch, face, PIN, or hardware key."]}),(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(eN.Z,{})}),"You last added a passkey on"," ",a?.firstVerifiedAt?.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),"."]})]}),s&&(0,m.jsx)(iI,{children:(0,m.jsx)(d9,{pendingTransaction:s})}),t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(iK,{style:{marginTop:"1.25rem"},children:t.message}),(0,m.jsx)(n3,{disabled:e,onClick:i,style:{marginTop:"1.25rem"},children:"Try again"})]}),n&&(0,m.jsx)(iV,{style:{marginTop:"1rem"},onClick:n,children:"Choose another method"}),(0,m.jsx)(iN,{})]})},hr=({open:e,onClose:t})=>{let{user:r}=n$(),[n,i]=(0,o.useState)(null),{init:a,cancel:s,submit:l}=di(),[c,d]=(0,o.useState)(!1),[h,u]=(0,o.useState)(!1),[p,g]=(0,o.useState)(null),[f,y]=(0,o.useState)(null);(0,o.useEffect)(()=>{e&&r?.mfaMethods&&r.mfaMethods.length>0?v(r.mfaMethods[0]):i(null)},[r?.mfaMethods,e]);let w=e=>a7(e)&&"mfa_verification_max_attempts_reached"===e.type?(d(!0),Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.")):oe(e)?(d(!1),Error("The code you entered is not valid")):a9(e)?(d(!0),Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.")):(console.error(e),d(!1),Error("Something went wrong."));async function x(e){y(null);try{if(!e||!n)return;await l(n,e),u(!0),d(!1),t()}catch(e){throw w(e)}}async function v(e){if("passkey"===e){try{i(e);let r=await a(e);if(!r)throw Error("something went wrong");g(r),await l(e,r),u(!0),d(!1),t()}catch(e){y(w(e))}return}try{i(e),await a(e)}catch(e){console.error(e)}}let C=()=>{i(null),y(null),s(),t()};if(!e||!r)return null;if("passkey"===n){let e=r.linkedAccounts.filter(e=>"passkey"===e.type&&e.enrolledInMfa).sort((e,t)=>t.firstVerifiedAt.valueOf()-e.firstVerifiedAt.valueOf())[0];return(0,m.jsx)(ht,{account:e,selectedMethod:n,submitSuccess:h,hasBlockingError:c,error:f,onClose:C,onBack:()=>{i(null),y(null)},handleSubmit:()=>x(p).catch(y)})}return n?(0,m.jsx)(hn,{submitSuccess:h,hasBlockingError:c,handleSubmitCode:x,selectedMethod:n,onClose:C,onBack:r.mfaMethods.length>1?()=>i(null):void 0}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:C},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(eT.Z,{})})}),(0,m.jsx)(iM,{children:"Verify your identity"}),(0,m.jsx)(iO,{children:"Choose a verification method"}),(0,m.jsxs)(iD,{children:[r.mfaMethods.includes("totp")&&(0,m.jsxs)(i_,{onClick:()=>v("totp"),children:[(0,m.jsx)(eE.Z,{}),"Authenticator App"]},"totp"),r.mfaMethods.includes("sms")&&(0,m.jsxs)(i_,{onClick:()=>v("sms"),children:[(0,m.jsx)(I.Z,{}),"SMS"]},"sms"),r.mfaMethods.includes("passkey")&&(0,m.jsxs)(i_,{onClick:()=>v("passkey"),children:[(0,m.jsx)(eA.Z,{}),"Passkey"]},"passkey")]}),(0,m.jsx)(iN,{})]})},hn=({selectedMethod:e,submitSuccess:t,hasBlockingError:r,onClose:n,onBack:i,handleSubmitCode:a})=>{let{app:o}=ny(),{pendingTransaction:s}=nZ();switch(e){case"sms":return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:n},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(e_.Z,{})})}),(0,m.jsx)(iM,{children:"Enter verification code"}),(0,m.jsxs)(iI,{children:[(0,m.jsx)(db,{success:t,disabled:r,onChange:a}),(0,m.jsxs)(iO,{children:["To continue, please enter the 6-digit code sent to your ",(0,m.jsx)("strong",{children:"mobile device"})]}),s&&(0,m.jsx)(d9,{pendingTransaction:s})]}),i&&(0,m.jsx)(iV,{theme:o?.appearance.palette.colorScheme,onClick:i,children:"Choose another method"}),(0,m.jsx)(n8,{onClick:n,children:"Not now"}),(0,m.jsx)(iN,{})]});case"totp":return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:n},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(eC.Z,{})})}),(0,m.jsx)(iM,{children:"Enter verification code"}),(0,m.jsxs)(iI,{children:[(0,m.jsx)(db,{success:t,disabled:r,onChange:a}),(0,m.jsxs)(iO,{children:["To continue, please enter the 6-digit code generated from your"," ",(0,m.jsx)("strong",{children:"authenticator app"})]}),s&&(0,m.jsx)(d9,{pendingTransaction:s})]}),i&&(0,m.jsx)(iV,{theme:o?.appearance.palette.colorScheme,onClick:i,children:"Choose another method"}),(0,m.jsx)(n8,{onClick:n,children:"Not now"}),(0,m.jsx)(iN,{})]});default:return null}},hi=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,ha=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`;A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`;var ho=(e,t)=>{let r=encodeURIComponent(new URL(window.location.href).href.replace(/\/$/g,"")+`?privy_token=${e}&privy_connector=injected&privy_wallet_client=phantom`);if(!tc()&&s.tq)return`${t?"phantom://":"https://phantom.app/ul/"}browse/${r}?ref=${r}`},hs=(0,A.ZP)(i3)`
  margin: 16px auto;
`,hl=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 4px;

  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,hc=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,hd=A.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,hh=(0,A.ZP)(n3)`
  ${e=>e.hideAnimations&&(0,A.iv)`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`,hu=e=>(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 20",...e,children:[(0,m.jsx)("path",{fill:"url(#icloud-gradient)",d:"M12.34 7.315a4.26 4.26 0 0 0-3.707 2.18 2.336 2.336 0 0 0-1.02-.236 2.336 2.336 0 0 0-2.3 1.963 3.217 3.217 0 0 0 1.244 6.181c.135-.001.27-.01.404-.029h8.943c.047.004.094.006.141.007.045-.001.09-.004.135-.007h.214v-.016a2.99 2.99 0 0 0 1.887-.988c.487-.55.757-1.261.757-1.998v-.006a3.017 3.017 0 0 0-.69-1.915 2.992 2.992 0 0 0-1.748-1.034 4.26 4.26 0 0 0-4.26-4.102Z"}),(0,m.jsx)("defs",{children:(0,m.jsxs)("linearGradient",{id:"icloud-gradient",x1:19.086,x2:3.333,y1:14.38,y2:14.163,gradientUnits:"userSpaceOnUse",children:[(0,m.jsx)("stop",{stopColor:"#3E82F4"}),(0,m.jsx)("stop",{offset:1,stopColor:"#93DCF7"})]})})]}),hp=({style:e,...t})=>(0,m.jsxs)("svg",{width:"16",height:"14",style:e,viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,m.jsxs)("g",{clipPath:"url(#clip0_2115_829)",children:[(0,m.jsx)("path",{d:"M2.34709 12.9404L2.3471 12.9404L2.34565 12.938L1.64031 11.7448L1.64004 11.7444L0.651257 10.0677C0.640723 10.0496 0.630746 10.0314 0.621325 10.0129H4.16461L2.39424 13.0139C2.3775 12.9901 2.36178 12.9656 2.34709 12.9404Z",fill:"#0066DA",stroke:"#6366F1"}),(0,m.jsx)("path",{d:"M8 4.48713L5.47995 0.215332C5.23253 0.358922 5.02176 0.556358 4.87514 0.80764L0.219931 8.70508C0.076007 8.95094 0.000191627 9.22937 0 9.51277H5.04009L8 4.48713Z",fill:"#00AC47"}),(0,m.jsx)("path",{d:"M13.48 13.7847C13.7274 13.6411 13.9382 13.4437 14.0848 13.1924L14.3781 12.6988L15.7801 10.3206C15.9267 10.0693 16.0001 9.79114 16.0001 9.51294H10.9596L12.0321 11.577L13.48 13.7847Z",fill:"#EA4335"}),(0,m.jsx)("path",{d:"M8.00003 4.48718L10.5201 0.215385C10.2726 0.0717949 9.98857 0 9.69533 0H6.30472C6.01148 0 5.7274 0.0807692 5.47998 0.215385L8.00003 4.48718Z",fill:"#00832D"}),(0,m.jsx)("path",{d:"M10.9599 9.51294H5.04007L2.52002 13.7847C2.76744 13.9283 3.05152 14.0001 3.34476 14.0001H12.6552C12.9484 14.0001 13.2325 13.9194 13.4799 13.7847L10.9599 9.51294Z",fill:"#2684FC"}),(0,m.jsx)("path",{d:"M13.4525 4.75636L11.1249 0.80764C10.9782 0.556358 10.7675 0.358922 10.52 0.215332L8 4.48713L10.9599 9.51277H15.9908C15.9908 9.23456 15.9175 8.95636 15.7709 8.70508L13.4525 4.75636Z",fill:"#FFBA00"})]}),(0,m.jsx)("defs",{children:(0,m.jsx)("clipPath",{id:"clip0_2115_829",children:(0,m.jsx)("rect",{width:"16",height:"14",fill:"white"})})})]}),hm=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,hg=A.ZP.div`
  padding-bottom: 24px;
`,hf={"google-drive":{name:"Google Drive",component:hp},icloud:{name:"iCloud",component:hu}},hy=A.ZP.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`,hw={"google-drive":"Google Drive",icloud:"iCloud","user-passcode":"password",privy:"Privy"},hx=({onClose:e})=>(0,m.jsxs)(hg,{children:[(0,m.jsx)(as,{title:"Why do I need to secure my account?",icon:(0,m.jsx)(S.Z,{width:48}),description:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{children:"Your app uses cryptography to secure your account. App secrets are split and encrypted so only you can access them."}),(0,m.jsx)("p",{children:"To use this app on new devices, secure account secrets using a password, your Google or your Apple account. It’s important you don’t lose access to the method you choose."})]})}),(0,m.jsx)(n3,{onClick:e,children:"Select backup method"})]}),hv=A.ZP.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${e=>e.$color??"var(--privy-color-accent)"};
  border-radius: 50%;
`,hC=A.ZP.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`,hb=["FUNDING_METHOD_SELECTION_SCREEN","FUNDING_TRANSFER_FROM_WALLET_SCREEN","FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN","FUNDING_MANUAL_TRANSFER_SCREEN","MOONPAY_PROMPT_SCREEN","MOONPAY_STATUS_SCREEN"],h_={FUNDING_METHOD_SELECTION_SCREEN:null,FUNDING_TRANSFER_FROM_WALLET_SCREEN:"external",FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN:"external",FUNDING_MANUAL_TRANSFER_SCREEN:"manual",MOONPAY_PROMPT_SCREEN:"moonpay",MOONPAY_STATUS_SCREEN:"moonpay"},hj={moonpay:"MOONPAY_PROMPT_SCREEN","coinbase-onramp":"COINBASE_ONRAMP_STATUS_SCREEN",external:"FUNDING_TRANSFER_FROM_WALLET_SCREEN"};function hk({fundingMethods:e}){if(0===e.length)throw Error("Wallet funding is not enabled");return 1===e.length?hj[e[0]]:"FUNDING_METHOD_SELECTION_SCREEN"}var hE=({img:e,submitError:t,prepareError:r,onClose:n,action:i,amount:a,title:o,subtitle:s,total:l,to:c,network:d,hasFunds:h,fee:u,from:p,cta:g,chain:f,isSubmitting:y,isPreparing:w,isTokenPriceLoading:x,isTokenContractInfoLoading:v,symbol:C,balance:b,onClick:_,spender:j})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:n}),e&&(0,m.jsx)(hP,{children:e}),(0,m.jsx)(hC,{style:{marginTop:e?"1.5rem":0},children:o}),(0,m.jsx)(cg,{children:s}),(0,m.jsxs)(sW,{style:{marginTop:"2rem"},children:[l&&(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Total"}),(0,m.jsx)(sF,{$isLoading:w||x,children:l})]}),i&&"transaction"!==i&&(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Action"}),(0,m.jsx)(sF,{children:i})]}),a?(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Amount"}),(0,m.jsxs)(sF,{$isLoading:v,children:[hT(a)," ",C]})]}):null,j?(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Spender"}),(0,m.jsx)(sF,{children:(0,m.jsx)(lH,{address:j,url:f?.blockExplorers?.default?.url,showCopyIcon:!1})})]}):null,c&&(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"To"}),(0,m.jsx)(sF,{children:(0,m.jsx)(lH,{address:c,url:f?.blockExplorers?.default?.url,showCopyIcon:!1})})]}),(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Network"}),(0,m.jsx)(sF,{children:d})]}),(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Estimated fee"}),(0,m.jsx)(sF,{$isLoading:w||x,children:u})]})]}),(0,m.jsx)(iy,{}),t?(0,m.jsx)(lz,{style:{marginTop:"2rem"},children:t.message}):r?(0,m.jsx)(lz,{style:{marginTop:"2rem"},children:hS}):null,(0,m.jsx)(hA,{$useSmallMargins:!!(r||t),address:p,balance:b,isLoading:w||x,errMsg:w||r||t||h?void 0:`Add funds on ${f?.name} to complete transaction.`}),(0,m.jsx)(n4,{style:{marginTop:"1rem"},loading:y,onClick:_,children:g}),(0,m.jsx)(iP,{})]}),hA=(0,A.ZP)(lq)`
  ${e=>e.$useSmallMargins?"margin-top: 0.5rem;":"margin-top: 2rem;"}
`,hS="There was an error preparing your transaction. Your transaction request will likely fail.",hT=e=>e.toLocaleString(),hP=A.ZP.div`
  display: flex;
  width: 100%;
  justify-content: center;
  max-height: 40px;

  > img {
    object-fit: contain;
    border-radius: var(--privy-border-radius-sm);
  }
`,hN=new Set([v.jK.CALL_EXCEPTION,v.jK.NONCE_EXPIRED,v.jK.REPLACEMENT_UNDERPRICED,v.jK.TRANSACTION_REPLACED]),hR=e=>{let t;return e.code&&-32e3!==e.code&&hN.has(e.code)&&(t=e.transactionHash),t},hM=e=>"SERVER_ERROR"===e.code?e.error?.message??e.reason??e.message??"unknown error":e.error?.code==="SERVER_ERROR"?e.error?.error?.message??e.reason??e.message??"unknown error":e.reason??e.message??"unknown error",hO=e=>({errorCode:e.code?e.code?.toString().charAt(0)+e.code?.toString().slice(1).replace("_"," ").toLowerCase():"Something went wrong.",transactionHash:hR(e),errorMessage:hM(e)}),hI=()=>(0,m.jsxs)(hD,{children:[(0,m.jsx)(hz,{}),(0,m.jsx)(hZ,{})]}),hW=({transactionError:e,chainId:t,onClose:r,onRetry:n})=>{let{chains:i}=nZ(),[a,s]=(0,o.useState)(!1),{errorCode:l,transactionHash:c,errorMessage:d}=hO(e),h=i.find(e=>e.id===t)?.blockExplorers?.default.url??"https://etherscan.io";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:r}),(0,m.jsxs)(hL,{children:[(0,m.jsx)(hI,{}),(0,m.jsx)(hF,{children:l}),(0,m.jsx)(hU,{children:"Please try again."}),(0,m.jsxs)(hB,{children:[(0,m.jsx)(hH,{children:"Error message"}),(0,m.jsx)(hV,{clickable:!1,children:d})]}),c&&(0,m.jsxs)(hB,{children:[(0,m.jsx)(hH,{children:"Transaction hash"}),(0,m.jsxs)(hq,{children:["Copy this hash to view details about the transaction on a"," ",(0,m.jsx)("u",{children:(0,m.jsx)("a",{href:h,children:"block explorer"})}),"."]}),(0,m.jsxs)(hV,{clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(c),s(!0)},children:[c,(0,m.jsx)(hY,{clicked:a})]})]}),(0,m.jsx)(h$,{onClick:()=>n({resetNonce:!!c}),children:"Retry transaction"})]}),(0,m.jsx)(iN,{})]})},hL=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,hF=A.ZP.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,hU=A.ZP.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,hD=A.ZP.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,hZ=(0,A.ZP)(eI.Z)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,hz=A.ZP.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,h$=(0,A.ZP)(n3)`
  && {
    margin-top: 24px;
  }
  transition: color 350ms ease, background-color 350ms ease;
`,hH=A.ZP.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,hB=A.ZP.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,hq=A.ZP.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`,hV=A.ZP.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${e=>e.clickable&&`cursor: pointer;
  transition: background-color 0.3s;
  padding-right: 45px;

  &:hover {
    background-color: var(--privy-color-foreground-4);
  }`}
`,hG=(0,A.ZP)(eO.Z)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,hK=(0,A.ZP)(Y.Z)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,hY=({clicked:e})=>e?(0,m.jsx)(hK,{}):(0,m.jsx)(hG,{}),hQ=(e,t)=>{if(e.gasUsed&&e.effectiveGasPrice)try{let r=ei.O$.from(e.gasUsed),n=ei.O$.from(e.effectiveGasPrice),i=r.mul(n);if(t){let e=ei.O$.from(t);i=i.add(e)}return i.toString()}catch{return}},hX=({txn:e,receipt:t,transactionInfo:r,onClose:n,tokenPrice:i,tokenSymbol:a,l1GasEstimate:o,receiptHeader:s,receiptDescription:l})=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:n}),(0,m.jsx)(aa,{title:s??"Transaction complete!",description:l??"You're all set."}),(0,m.jsx)(d5,{tokenPrice:i,from:t.from,to:t.to,gas:hQ(t,o),txn:e,transactionInfo:r,tokenSymbol:a}),(0,m.jsx)(iy,{}),(0,m.jsx)(hJ,{loading:!1,onClick:n,children:"All Done"}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]}),hJ=(0,A.ZP)(n3)`
  && {
    margin-top: 24px;
  }
  transition: color 350ms ease, background-color 350ms ease;
`,h0=(e,t)=>Intl.NumberFormat(void 0,{maximumFractionDigits:t}).format(e/Math.pow(10,t)),h1=[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],h2=async({address:e,chain:t,amount:r,rpcConfig:n,privyAppId:i})=>{if(!r)return{value:"",symbol:""};try{let a=(0,eW.v)({chain:t,transport:(0,eL.d)(t_(t,n,i))}),[o,s]=await Promise.all([a.readContract({abi:h1,address:e,functionName:"symbol"}),a.readContract({abi:h1,address:e,functionName:"decimals"})]);return{value:h0(parseFloat(r.toString()),s),symbol:o}}catch(e){return console.log(e),{value:r.toString(),symbol:""}}},h3=e=>{let t=h5(e);if(t)return{action:"approve",isErc20Ish:!0,functionName:t.functionName,spender:t.args[0],amount:t.args[1]};let r=h7(e);return r?{action:"transfer",isErc20Ish:!0,functionName:r.functionName,amount:r.args[1]}:{action:"transaction",isErc20Ish:!1}},h4=[{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],h5=e=>{try{return(0,eF.p)({abi:h4,data:e})}catch{return null}},h6=[{constant:!1,inputs:[{name:"to",type:"address"},{name:"value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],h7=e=>{try{return(0,eF.p)({abi:h6,data:e})}catch{return null}},h8=(e,t)=>{let[r,n]=(0,o.useState)(null),{getAccessToken:i,user:a}=n$(),{walletProxy:s}=nZ(),d=rC(a),h=async()=>{if(!await i()||!s||!d)return null;let r=[],n=await (0,l.vT)(d.address,e,t).catch(t=>(r.push(t),e)),{totalGasEstimate:a,l1ExecutionFeeEstimate:o}=await (0,c.gM)(n,t).catch(e=>(r.push(e),{totalGasEstimate:null,l1ExecutionFeeEstimate:null})),{balance:h,hasSufficientFunds:u}=await sD(d.address,n,a??ei.O$.from(0),t).catch(e=>(r.push(e),{balance:null,hasSufficientFunds:!1}));return{tx:n,totalGasEstimate:a,l1ExecutionFeeEstimate:o,balance:h,hasFunds:u,errors:r}};return(0,o.useEffect)(()=>{r&&n(null),h().then(n)},[e]),r},h9=new rW(new rI("There was an issue preparing your transaction",d.M_.E32603_DEFAULT_INTERNAL_ERROR.eipCode)),ue=e=>{if(!(0,y.A7)(e))return e;try{return(0,eU.ZN)(e)}catch{return e}},ut=e=>JSON.stringify(e,null,2),ur=({data:e})=>{let t=e=>"object"==typeof e&&null!==e?(0,m.jsx)(ua,{children:Object.entries(e).map(([e,r])=>(0,m.jsxs)("li",{children:[(0,m.jsxs)("strong",{children:[e,":"]})," ",t(r)]},e))}):(0,m.jsx)("span",{children:String(e)});return(0,m.jsx)("div",{children:t(e)})},un=e=>{let{types:t,primaryType:r,...n}=e.typedData;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ui,{children:(0,m.jsx)(ur,{data:n})}),(0,m.jsx)(sc,{text:ut(e.typedData),itemName:"full payload to clipboard"})," "]})},ui=A.ZP.div`
  margin-top: 1.5rem;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  padding: 12px;
  text-align: left;
  max-height: 310px;
  overflow: scroll;
  white-space: pre-wrap;
  width: 100%;

  // hide the scrollbars
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}
`,ua=A.ZP.ul`
  margin-left: 12px !important;
  white-space: nowrap;

  &:first-child {
    margin-left: 0 !important;
  }

  strong {
    font-weight: 500 !important;
  }
}
`,uo=A.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: ${e=>e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 4px;
`,us=A.ZP.span`
  display: flex;
  align-items: center;
  gap: 8px;
`,ul=A.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;
`,uc=A.ZP.div`
  flex-grow: 1;
`,ud=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,uh=(0,o.forwardRef)((e,t)=>{let[r,n]=(0,o.useState)(""),[i,a]=(0,o.useState)(!1),{authenticated:s,user:l}=n$(),{initUpdateEmail:c}=nZ(),{navigate:d,setModalData:h,currentScreen:u}=ny(),{enabled:p,token:g}=nF(),f=tu(r),y=i||!f,w=async e=>{if(!l?.email)throw Error("User is required to have an email address to update it.");a(!0);try{await c(l.email.address,r,e),d("AWAITING_PASSWORDLESS_CODE")}catch(e){h({errorModalData:{error:e,previousScreen:u||"LANDING"}})}a(!1)},x=()=>{!p||g||s?w(g):(h({captchaModalData:{callback:e=>{if(!l?.email)throw Error("User is required to have an email address to update it.");return c(l.email.address,r,e)},userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSWORDLESS_CODE",onErrorNavigateTo:"ERROR_SCREEN"}}),d("CAPTCHA_SCREEN"))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(uu,{children:(0,m.jsxs)(up,{children:[(0,m.jsx)(O.Z,{}),(0,m.jsx)("input",{ref:t,id:"email-input",type:"email",placeholder:"your@email.com",onChange:e=>n(e.target.value),onKeyUp:e=>{"Enter"===e.key&&x()},value:r,autoComplete:"email"}),e.stacked?null:(0,m.jsx)(it,{isSubmitting:i,onClick:x,disabled:y,children:"Submit"})]})}),e.stacked?(0,m.jsx)(n3,{loadingText:null,loading:i,disabled:y,onClick:x,children:"Submit"}):null]})}),uu=A.ZP.div`
  width: 100%;
`,up=A.ZP.label`
  display: block;
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;

  > svg {
    position: absolute;
    margin: 13px 17px;
    height: 24px;
    width: 24px;
    color: var(--privy-color-foreground-3);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-mdlg);
    width: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }
  }

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`,um=({style:e,...t})=>(0,m.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"38px",width:"38px",...e},...t,children:(0,m.jsx)("path",{d:"M20 13.6V20M20 26.4H20.016M36 20C36 28.8365 28.8366 36 20 36C11.1635 36 4.00001 28.8365 4.00001 20C4.00001 11.1634 11.1635 3.99999 20 3.99999C28.8366 3.99999 36 11.1634 36 20Z",stroke:"currentColor",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round"})}),ug=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 32px;
`,uf=A.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  aspect-ratio: 1;
  color: var(--privy-color-error);
  background-color: var(--privy-color-error-light);
  border-radius: 50%;
`,uy=A.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,uw=`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
  }

  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-feature-settings: normal;

  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  abbr:where([title]) {
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
    display: inline;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  legend {
    padding: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  [hidden] {
    display: none;
  }
`,ux=(0,A.vJ)`
  :root {
     // Borders
     --privy-border-radius-sm: 6px;
     --privy-border-radius-md: 12px;
     --privy-border-radius-mdlg: 16px;
     --privy-border-radius-lg: 24px;
     --privy-border-radius-full: 9999px;

     // Colors
     --privy-color-background: ${e=>e.theme.background};
     --privy-color-background-2: ${e=>e.theme.background2};

     --privy-color-foreground: ${e=>e.theme.foreground};
     --privy-color-foreground-2: ${e=>e.theme.foreground2};
     --privy-color-foreground-3: ${e=>e.theme.foreground3};
     --privy-color-foreground-4: ${e=>e.theme.foreground4};
     --privy-color-foreground-accent: ${e=>e.theme.foregroundAccent};

     --privy-color-accent: ${e=>e.theme.accent};
     --privy-color-accent-light: ${e=>e.theme.accentLight};
     --privy-color-accent-dark: ${e=>e.theme.accentDark};

     --privy-color-success: ${e=>e.theme.success};
     --privy-color-success-dark: ${e=>e.theme.successDark};
     --privy-color-success-light: ${e=>e.theme.successLight};
     --privy-color-error: ${e=>e.theme.error};
     --privy-color-error-light: ${e=>e.theme.errorLight};
     --privy-color-warn: ${e=>e.theme.warn};
     --privy-color-warn-light: ${e=>e.theme.warnLight};

     // Space
     --privy-height-modal-full: 620px;
     --privy-height-modal-compact: 480px;
  };
`,uv=A.ZP.div`
  // css normalize only the privy application to avoid conflicts
  // with consuming application
  ${uw}

  // Privy styles
  color: var(--privy-color-foreground-2);

  h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--privy-color-foreground-2);
  }

  h4 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: var(--privy-color-foreground);
  }

  p {
    font-size: 13px;
    line-height: 20px;
    color: var(--privy-color-foreground-2);
  }

  button:focus,
  input:focus,
  optgroup:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--privy-color-accent-light);
    box-shadow: 0 0 0 1px var(--privy-color-accent-light);
  }

  .mobile-only {
    @media (min-width: 441px) {
      display: none;
    }
  }

  /* Animations */

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,uC=({children:e,open:t,onClick:r,...n})=>(0,m.jsx)(eD.u,{show:t,as:o.Fragment,children:(0,m.jsxs)(eZ.V,{onClose:r,...n,as:u_,children:[(0,m.jsx)(eD.u.Child,{as:o.Fragment,enterFrom:"entering",leaveTo:"leaving",children:(0,m.jsx)(ub,{id:"privy-dialog-backdrop","aria-hidden":"true"})}),(0,m.jsx)(uj,{children:(0,m.jsx)(eD.u.Child,{as:o.Fragment,enterFrom:"entering",leaveTo:"leaving",children:(0,m.jsx)(eZ.V.Panel,{as:uk,children:e})})})]})}),ub=A.ZP.div`
  position: fixed;
  inset: 0;

  transition: backdrop-filter 100ms ease;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  &.entering,
  &.leaving {
    backdrop-filter: unset;
    -webkit-backdrop-filter: unset;
  }
`,u_=A.ZP.div`
  position: relative;
  z-index: 999999;
`,uj=A.ZP.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
`,uk=A.ZP.div`
  // reset some default dialog styles
  padding: 0;
  background: transparent;
  border: none;
  width: 100%;
  pointer-events: auto;

  outline: none;
  display: block;

  /*
   * Normally it is bad to mix media queries like this We are doing
   * this here specifically for animations to avoid weird jank.
   */
  /* Mobile animation is a bottom drawer */
  @media (max-width: 440px) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 200ms ease-in;
    position: fixed;
    bottom: 0;

    &.entering,
    &.leaving {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
      transition: transform 150ms ease-in 0ms, opacity 0ms ease 150ms;
    }
  }

  /* Tablet/Desktop animation is a fade in */
  @media (min-width: 441px) {
    opacity: 1;
    transition: opacity 100ms ease-in;

    &.entering,
    &.leaving {
      opacity: 0;
      transition-delay: 5ms;
    }

    margin: auto;
    width: 360px;
    box-shadow: 0px 8px 36px rgba(55, 65, 81, 0.15);
    border-radius: var(--privy-border-radius-lg);
  }
`,uE=A.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`,uA={LANDING:()=>{let{app:e}=ny();return e.loginMethodsAndOrder&&e.loginMethodsAndOrder.primary.length>0?(0,m.jsx)(c3,{connectOnly:!1}):(0,m.jsx)(c7,{connectOnly:!1})},CONNECT_OR_CREATE:()=>{let{app:e}=ny();return e.loginMethodsAndOrder&&e.loginMethodsAndOrder.primary.length>0?(0,m.jsx)(c3,{connectOnly:!0}):(0,m.jsx)(c7,{connectOnly:!0})},AWAITING_PASSWORDLESS_CODE:()=>{let{app:e,navigate:t,lastScreen:r,navigateBack:n,setModalData:i,onUserCloseViaDialogOrKeybindRef:a}=ny(),{closePrivyModal:l,resendEmailCode:c,resendSmsCode:d,getAuthMeta:h,loginWithCode:u,updateWallets:p,createAnalyticsEvent:g}=nZ(),{authenticated:f,logout:y,user:w}=n$(),[x,v]=(0,o.useState)(ad),[C,b]=(0,o.useState)(!1),[_,j]=(0,o.useState)(null),[k,E]=(0,o.useState)(null),[A,S]=(0,o.useState)(0);a.current=()=>null;let T=h()?.email?0:1;(0,o.useEffect)(()=>{if(A){let e=setTimeout(()=>{S(A-1)},1e3);return()=>clearTimeout(e)}},[A]),(0,o.useEffect)(()=>{if(f&&C&&w){if(e?.legal.requireUsersAcceptTerms&&!w.hasAcceptedTerms){let e=setTimeout(()=>{t("AFFIRMATIVE_CONSENT_SCREEN")},900);return()=>clearTimeout(e)}if(rk(w,e?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{i({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),g({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AwaitingPasswordlessCodeScreen"}}),y()},callAuthOnSuccessOnClose:!0}}),t("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},900);return()=>clearTimeout(e)}{p();let e=setTimeout(()=>l({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return()=>clearTimeout(e)}}},[f,C,w]),(0,o.useEffect)(()=>{if(_&&0===k){let e=setTimeout(()=>{v(ad),j(null),document.querySelector("input[name=code-0]")?.focus()},1400);return()=>clearTimeout(e)}},[_]);let P=e=>{e.preventDefault();let n=e.currentTarget.value.replace(" ","");if(""===n)return;if(isNaN(Number(n))){j("Code should be numeric"),E(1);return}j(null),E(null);let a=Number(e.currentTarget.name?.charAt(5)),o=[...n||[""]].slice(0,6-a),s=[...x.slice(0,a),...o,...x.slice(a+o.length)];v(s);let l=Math.min(Math.max(a+o.length,0),5);isNaN(Number(e.currentTarget.value))||document.querySelector(`input[name=code-${l}]`)?.focus(),s.every(e=>e&&!isNaN(+e))&&(document.querySelector(`input[name=code-${l}]`)?.blur(),u(s.join("")).then(()=>b(!0)).catch(e=>{if(e?.status===422)j("Invalid or expired verification code");else if(e instanceof eG&&"cannot_link_more_of_type"===e.privyErrorCode)j(e.message);else if(e instanceof eG&&"max_accounts_reached"===e.privyErrorCode){console.error(new e3(e).toString()),t("USER_LIMIT_REACHED_SCREEN");return}else if(e instanceof eG&&"user_does_not_exist"===e.privyErrorCode){t("ACCOUNT_NOT_FOUND_SCREEN");return}else if(e instanceof eG&&"linked_to_another_user"===e.privyErrorCode){i({errorModalData:{error:e,previousScreen:r??"AWAITING_PASSWORDLESS_CODE"}}),t("ERROR_SCREEN",!1);return}else j("Issue verifying code");E(0)}))},N=e=>{1===k&&(j(null),E(null)),v([...x.slice(0,e),"",...x.slice(e+1)]),e>0&&document.querySelector(`input[name=code-${e-1}]`)?.focus()},R=0==T?(0,m.jsx)(O.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"48px",width:"48px"}):(0,m.jsx)(I.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"40px",width:"40px"}),W=0==T?(0,m.jsxs)("p",{children:["Please check ",(0,m.jsx)(ay,{children:h()?.email})," for an email from privy.io and enter your code below."]}):(0,m.jsxs)("p",{children:["Please check ",(0,m.jsx)(ay,{children:h()?.phoneNumber})," for a message from ",e?.name||"Privy"," and enter your code below."]});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:()=>n()},"header"),(0,m.jsxs)(ah,{children:[(0,m.jsx)(as,{title:"Enter confirmation code",description:W,icon:R}),(0,m.jsxs)(i4,{children:[(0,m.jsxs)(au,{children:[(0,m.jsx)(ap,{fail:!!_,success:C,children:(0,m.jsx)("span",{children:_||(C?"Success!":"")})}),(0,m.jsx)("div",{children:x.map((e,t)=>(0,m.jsx)("input",{name:`code-${t}`,type:"text",value:x[t],onChange:P,onKeyUp:e=>{"Backspace"===e.key&&N(t)},inputMode:"numeric",autoFocus:0===t,pattern:"[0-9]",className:`${C?"success":""} ${_?"fail":""}`,autoComplete:s.tq?"one-time-code":"off"},t))})]}),(0,m.jsxs)(am,{children:[(0,m.jsxs)("span",{children:["Didn't get ",0==T?"an email":"a message","?"]}),A?(0,m.jsxs)(af,{children:[(0,m.jsx)(M.Z,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),(0,m.jsx)("span",{children:"Code sent"})]}):(0,m.jsx)(ag,{children:(0,m.jsx)("button",{onClick:async()=>{S(30),0==T?await c():await d()},children:"Resend code"})})]})]})]}),(0,m.jsx)(iP,{})]})},AWAITING_CONNECTION:()=>{let[e,t]=(0,o.useState)(!1),[r,n]=(0,o.useState)(!1),[i,a]=(0,o.useState)(void 0),{authenticated:l,logout:c}=n$(),{app:d,navigate:h,navigateBack:u,lastScreen:p,currentScreen:g,setModalData:f}=ny(),{getAuthFlow:y,walletConnectionStatus:w,closePrivyModal:x,initLoginWithWallet:v,loginWithWallet:C,updateWallets:b,createAnalyticsEvent:_}=nZ(),{walletConnectors:j}=n$(),[k,E]=(0,o.useState)(0),{user:A}=n$(),[S]=(0,o.useState)(A?.linkedAccounts.length||0),[T,P]=(0,o.useState)(""),[N,R]=(0,o.useState)(""),[M,O]=(0,o.useState)(!1),{hasTabbedAway:I}=function(){let[e,t]=(0,o.useState)(!1),r=(0,o.useCallback)(()=>{document.hidden&&t(!0)},[]);return(0,o.useEffect)(()=>(document.addEventListener("visibilitychange",r),()=>document.removeEventListener("visibilitychange",r)),[r]),{hasTabbedAway:e,reset:()=>t(!1)}}(),{enabled:W,token:L}=nF(),F=s.tq&&w?.connector?.connectorType==="wallet_connect_v2"||s.tq&&w?.connector?.connectorType==="coinbase_wallet"||s.tq&&w?.connector?.connectorType==="injected"&&w?.connector?.walletClientType==="phantom",U=w?.status==="connected",D=w?.status==="switching_to_supported_chain";(0,o.useEffect)(()=>{let e=y(),t=e instanceof rp?e:void 0;if(U&&!t&&(!W||L||l?v(w.connectedWallet,L).then(()=>{O(!0)}):(f({captchaModalData:{callback:e=>v(w.connectedWallet,e).then(()=>{O(!0)}),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_CONNECTION",onErrorNavigateTo:"ERROR_SCREEN"}}),h("CAPTCHA_SCREEN",!1))),t&&F&&U&&!t.preparedMessage){t.buildSiweMessage();return}!t||F||!U||r||(async()=>{n(!0),a(void 0);try{w?.connector?.connectorType==="wallet_connect_v2"&&w?.connector?.walletClientType==="metamask"&&await tg(2500),await z()}catch(e){console.warn("Auto-prompted signature failed",e)}finally{n(!1)}})()},[k,U,M]),(0,o.useEffect)(()=>{if(A&&e){if(d?.legal.requireUsersAcceptTerms&&!A.hasAcceptedTerms){let e=setTimeout(()=>{h("AFFIRMATIVE_CONSENT_SCREEN")},900);return()=>clearTimeout(e)}if(rk(A,d?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{f({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),_({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"ConnectionStatusScreen"}}),c()},callAuthOnSuccessOnClose:!0}}),h("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},900);return()=>clearTimeout(e)}b();let e=setTimeout(()=>x({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return()=>clearTimeout(e)}},[A,e]);let Z=e=>{if(e?.privyErrorCode==="allowlist_rejected"){h("ALLOWLIST_REJECTION_SCREEN");return}if(e?.privyErrorCode==="max_accounts_reached"){console.error(new e3(e).toString()),h("USER_LIMIT_REACHED_SCREEN");return}if(e?.privyErrorCode==="user_does_not_exist"){h("ACCOUNT_NOT_FOUND_SCREEN");return}a(aV(e))};async function z(){try{await C(),t(!0)}catch(e){Z(e)}finally{n(!1)}}(0,o.useEffect)(()=>{w?.connectError&&Z(w?.connectError)},[w]),aq(()=>{let e="wallet_connect_v2"===$&&w?.connector instanceof nx?w.connector.redirectUri:void 0;e&&P(e);let t="wallet_connect_v2"===$&&w?.connector instanceof nx?w.connector.fallbackUniversalRedirectUri:void 0;t&&R(t)},w?.connector instanceof nx&&!T?500:null);let $=w?.connector?.connectorType||"injected",H=w?.connector?.walletClientType||"unknown",B=aA[H]?.displayName||w?.connector?.walletBranding.name||"Browser Extension",q=aA[H]?.logo||w?.connector?.walletBranding.icon||(e=>(0,m.jsx)(rY,{...e})),V="Browser Extension"===B?B.toLowerCase():B,G;G=e?`Successfully connected with ${V}`:i?i.message:D?"Switching networks":U?r&&F?"Signing":"Sign to verify":`Waiting for ${V}`;let K="Don’t see your wallet? Check your other browser windows.";e?K=S===(A?.linkedAccounts.length||0)?"Wallet was already linked.":"You’re good to go!":k>=2&&i?K="Unable to connect wallet":i?K=i.detail:D?K="Switch your wallet to the requested network.":U&&F?K="Sign the message in your wallet to verify it belongs to you.":"metamask"===H&&s.tq?K="Click continue to open and connect MetaMask.":"metamask"===H?K="For the best experience, connect only one wallet at a time.":"wallet_connect"===$?K="Open your mobile wallet app to continue":"coinbase_wallet"===$&&(td()||(K=nv(A)?"Continue with the Coinbase app. Not the right wallet? Reset your connection below.":"Open the Coinbase app on your phone to continue."));let Y=j?.walletConnectors?.find(e=>"coinbase_wallet"===e.walletClientType),Q="coinbase_wallet"===H&&(nv(A)||i===rL.ERROR_USER_EXISTS);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:p&&g!==p?u:void 0}),(0,m.jsxs)(aG,{children:[(0,m.jsx)(aY,{walletLogo:q,success:e,fail:!!i}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:G}),(0,m.jsx)("p",{children:K}),U||!T||I?null:(0,m.jsxs)("p",{children:["Still here?"," ",(0,m.jsx)("a",{href:T,target:"_blank",style:{textDecoration:"underline"},children:"Try connecting again"}),N&&(0,m.jsxs)(m.Fragment,{children:[" ","or"," ",(0,m.jsx)("a",{href:N,target:"_blank",style:{textDecoration:"underline"},children:"use this different link"})]})]})]}),Q?(0,m.jsx)(n3,{onClick:()=>Y&&Y?.disconnect(),disabled:e,children:"Use a different wallet"}):i==rL.ERROR_USER_EXISTS&&g!==p?(0,m.jsx)(n3,{onClick:u,children:"Use a different wallet"}):U&&!e&&F?(0,m.jsx)(n3,{onClick:()=>{n(!0),z()},disabled:r,children:r?"Signing":"Sign with your wallet"}):!e&&i?.retryable&&k<2?(0,m.jsx)(n3,{onClick:()=>{E(k+1),a(void 0),U?(n(!0),z()):w?.connectRetry()},disabled:!e&&(!i?.retryable||k>=2),children:"Retry"}):e||i?null:(0,m.jsx)(n3,{onClick:()=>{},disabled:!0,children:"Connecting"})]}),(0,m.jsx)(iN,{})]})},AWAITING_CONNECT_ONLY_CONNECTION:()=>{let{navigateBack:e,navigate:t,lastScreen:r,currentScreen:n,data:i}=ny(),{walletConnectionStatus:a,closePrivyModal:l}=nZ(),[c,d]=(0,o.useState)(void 0),[h,u]=(0,o.useState)(0),p=a?.status==="connected",g=a?.status==="switching_to_supported_chain";(0,o.useEffect)(()=>{if(p){let e;if(i?.externalConnectWallet?.onCompleteNavigateTo){let r=i.externalConnectWallet.onCompleteNavigateTo;e=setTimeout(()=>{t(r)},1400)}else e=setTimeout(l,1400);return()=>clearTimeout(e)}},[p]);let f=e=>{d(aV(e))};(0,o.useEffect)(()=>{a?.connectError&&f(a?.connectError)},[a]);let y=a?.connector?.connectorType||"injected",w=a?.connector?.walletClientType||"unknown",x=aA[w]?.displayName||a?.connector?.walletBranding.name||"Browser Extension",v=aA[w]?.logo||a?.connector?.walletBranding.icon||(e=>(0,m.jsx)(rY,{...e})),C="Browser Extension"===x?x.toLowerCase():x,b;b=p?`Successfully connected with ${C}`:c?c.message:g?"Switching networks":`Waiting for ${C}`;let _="Don’t see your wallet? Check your other browser windows.";return p?_="You’re good to go!":h>=2&&c?_="Unable to connect wallet":c?_=c.detail:g?_="Switch your wallet to the requested network.":"metamask"===w&&s.tq?_="Click to continue to open and connect MetaMask.":"metamask"===w?_="For the best experience, connect only one wallet at a time.":"wallet_connect_v2"===y?_="Open your mobile wallet app to continue":"coinbase_wallet"===y&&(_="Open the Coinbase app on your phone to continue."),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:n===r?void 0:e}),(0,m.jsxs)(aQ,{children:[(0,m.jsx)(aY,{walletLogo:v,success:p,fail:!!c}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:b}),(0,m.jsx)("p",{children:_})]}),c==rL.ERROR_USER_EXISTS?(0,m.jsx)(n3,{onClick:e,children:"Use a different wallet"}):!p&&c?.retryable&&h<2?(0,m.jsx)(n3,{onClick:()=>{u(h+1),d(void 0),a?.connectRetry()},disabled:!p&&(!c?.retryable||h>=2),children:"Retry"}):!p&&c&&h>=2?(0,m.jsx)(n3,{onClick:e,children:"Use a different wallet"}):null]}),(0,m.jsx)(iN,{})]})},AWAITING_FARCASTER_CONNECTION:()=>{let{authenticated:e,logout:t,ready:r,user:n}=n$(),{lastScreen:i,navigate:a,navigateBack:l,setModalData:c,app:d}=ny(),{getAuthFlow:h,loginWithFarcaster:u,closePrivyModal:p,createAnalyticsEvent:g}=nZ(),[f,y]=(0,o.useState)(void 0),[w,x]=(0,o.useState)(!1),[v,C]=(0,o.useState)(!1),b=(0,o.useRef)([]),_=h(),j=_?.meta.connectUri;return(0,o.useEffect)(()=>{let e=Date.now(),t=setInterval(async()=>{let r=await _.pollForReady.execute(),n=Date.now()-e;if(r){clearInterval(t),x(!0);try{await u(),C(!0)}catch(t){let e={retryable:!1,message:"Authentication failed"};if(t?.privyErrorCode==="allowlist_rejected"){a("ALLOWLIST_REJECTION_SCREEN");return}if(t?.privyErrorCode==="max_accounts_reached"){console.error(new e3(t).toString()),a("USER_LIMIT_REACHED_SCREEN");return}if(t?.privyErrorCode==="user_does_not_exist"){a("ACCOUNT_NOT_FOUND_SCREEN");return}t?.privyErrorCode==="linked_to_another_user"?e.detail="This account has already been linked to another user.":t?.privyErrorCode==="invalid_credentials"?(e.retryable=!0,e.detail="Something went wrong. Try again."):t?.privyErrorCode==="too_many_requests"&&(e.detail="Too many requests. Please wait before trying again.");y(e)}}else n>12e4&&(clearInterval(t),y({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))},2e3);return()=>{clearInterval(t),b.current.forEach(e=>clearTimeout(e))}},[]),(0,o.useEffect)(()=>{if(r&&e&&v&&n){if(d?.legal.requireUsersAcceptTerms&&!n.hasAcceptedTerms){let e=setTimeout(()=>{a("AFFIRMATIVE_CONSENT_SCREEN")},1400);return()=>clearTimeout(e)}v&&(rk(n,d?.embeddedWallets.createOnLogin)?b.current.push(setTimeout(()=>{c({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),g({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"FarcasterConnectStatusScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),a("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},1400)):b.current.push(setTimeout(()=>p({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400)))}},[v,r,e,n]),s.tq||w?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:i?l:void 0,onClose:p},"header"),(0,m.jsx)(ae,{}),s.gn?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(sE,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:v,fail:!!f}),(0,m.jsx)(s_,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)(iM,{children:f?f.message:"Sign in with Farcaster"}),(0,m.jsx)(iO,{children:f?f.detail:"To sign in with Farcaster, please open the Warpcast app."})]}),j&&(0,m.jsx)(n3,{onClick:e=>{e.preventDefault(),window.location.href=j},children:"Open Warpcast app"})]})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(sk,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:v,fail:!!f}),(0,m.jsx)(s_,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)(iM,{children:f?f.message:"Signing in with Farcaster"}),(0,m.jsx)(iO,{children:f?f.detail:"This should only take a moment"}),(0,m.jsx)(i3,{children:j&&s.tq&&(0,m.jsx)(sh,{text:"Take me to Warpcast",url:j,color:sj})})]})]})}),(0,m.jsx)(iN,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:i?l:void 0,onClose:p},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(sk,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(iM,{children:"Sign in with Farcaster"}),(0,m.jsx)(iO,{children:"Scan with your phone's camera to continue."}),(0,m.jsx)(i5,{children:j?(0,m.jsx)(sb,{url:j,size:275,squareLogoElement:s_}):(0,m.jsx)(nX,{})}),(0,m.jsxs)(i3,{children:[(0,m.jsx)(iO,{children:"Or copy this link and paste it into a phone browser to open the Warpcast app."}),j&&(0,m.jsx)(sc,{text:j,itemName:"link",color:sj})]})]})}),(0,m.jsx)(iN,{})]})},AWAITING_FARCASTER_SIGNER:()=>{let{lastScreen:e,navigateBack:t,data:r,app:n}=ny(),{requestFarcasterSignerStatus:i,closePrivyModal:a}=nZ(),[l,c]=(0,o.useState)(void 0),[d,h]=(0,o.useState)(!1),[u,p]=(0,o.useState)(!1),g=(0,o.useRef)([]),f=r?.farcasterSigner;(0,o.useEffect)(()=>{let e=Date.now(),t=setInterval(async()=>{if(!f?.public_key){clearInterval(t),c({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});return}"approved"===f.status&&(clearInterval(t),h(!1),p(!0),g.current.push(setTimeout(()=>a({shouldCallAuthOnSuccess:!1,isSuccess:!0}),1400)));let r=await i(f?.public_key),n=Date.now()-e;"approved"===r.status?(clearInterval(t),h(!1),p(!0),g.current.push(setTimeout(()=>a({shouldCallAuthOnSuccess:!1,isSuccess:!0}),1400))):n>3e5?(clearInterval(t),c({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):"revoked"===r.status&&(clearInterval(t),c({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(t),g.current.forEach(e=>clearTimeout(e))}},[]);let y=f?.status==="pending_approval"?f.signer_approval_url:void 0;return s.tq||d?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:e?t:void 0,onClose:a},"header"),(0,m.jsx)(ae,{}),s.gn?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(sT,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:u,fail:!!l}),(0,m.jsx)(s_,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)(iM,{children:l?l.message:"Add a signer to Farcaster"}),(0,m.jsx)(iO,{children:l?l.detail:"This will allow "+n.name+" to add casts, likes, follows, and more on your behalf."})]}),y&&(0,m.jsx)(n3,{onClick:e=>{e.preventDefault(),window.location.href=y},children:"Open Warpcast app"})]})}):(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(sS,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:u,fail:!!l}),(0,m.jsx)(s_,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)(iM,{children:l?l.message:"Requesting signer from Farcaster"}),(0,m.jsx)(iO,{children:l?l.detail:"This should only take a moment"}),(0,m.jsx)(i3,{children:y&&s.tq&&(0,m.jsx)(sh,{text:"Take me to Warpcast",url:y,color:sA})})]})]})}),(0,m.jsx)(iN,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:e?t:void 0,onClose:a},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(sS,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(iM,{children:"Add a signer to Farcaster"}),(0,m.jsxs)(iO,{children:["This will allow ",n.name," to add casts, likes, follows, and more on your behalf."]}),(0,m.jsx)(i5,{children:f?.status==="pending_approval"?(0,m.jsx)(sb,{url:f.signer_approval_url,size:275,squareLogoElement:s_}):(0,m.jsx)(nX,{})}),(0,m.jsxs)(i3,{children:[(0,m.jsx)(iO,{children:"Or copy this link and paste it into a phone browser to open the Warpcast app."}),f?.status==="pending_approval"&&(0,m.jsx)(sc,{text:f.signer_approval_url,itemName:"link",color:sA})]})]})}),(0,m.jsx)(iN,{})]})},AWAITING_PASSKEY_SYSTEM_DIALOGUE:()=>{let{lastScreen:e,currentScreen:t,navigateBack:r}=ny(),{loginWithPasskey:n,closePrivyModal:i}=nZ(),[a,s]=(0,o.useState)("loading"),[l,c]=(0,o.useState)(null),d=(0,o.useRef)([]),h=e=>{d.current=[e,...d.current]};(0,o.useEffect)(()=>()=>{d.current.forEach(e=>clearTimeout(e)),d.current=[]},[]);let u=async()=>{s("loading");try{await n(),s("success")}catch(e){c(e),s("error")}};return(0,o.useEffect)(()=>{"success"===a&&h(setTimeout(()=>{i({shouldCallAuthOnSuccess:!0,isSuccess:!0})},1400))},[a]),(0,o.useEffect)(()=>{u()},[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:e&&t!==e?r:void 0}),(0,m.jsxs)(ha,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:"success"===a,fail:"error"===a}),(0,m.jsx)(lu,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:(()=>{switch(a){case"loading":return"Waiting for passkey";case"success":return"Success";case"error":return"Something went wrong"}})()}),(0,m.jsx)("p",{style:{whiteSpace:"pre-wrap"},children:(()=>{switch(a){case"loading":return`Please follow prompts to verify your passkey.
You will have to sign up with another method first to register a passkey for your account.`;case"success":return"You've successfully logged in with your passkey.";case"error":if(l instanceof eV){if("cannot_link_more_of_type"===l.privyErrorCode)return"Cannot link more passkeys to account.";if("passkey_not_allowed"===l.privyErrorCode)return`Passkey request timed out or rejected by user.
You will have to sign up with another method first to register a passkey for your account.`}return`An unknown error occurred.
You will have to sign up with another method first to register a passkey for your account.`}})()})]}),(()=>{switch(a){case"loading":case"success":return(0,m.jsx)(n3,{onClick:()=>{},disabled:!0,children:"Continue"});case"error":return(0,m.jsx)(n3,{onClick:u,disabled:!1,children:"Retry"})}})()]}),(0,m.jsx)(iN,{})]})},PHANTOM_INTERSTITIAL_SCREEN:()=>{let{forkSession:e,ready:t,authenticated:r}=n$(),[n,i]=(0,o.useState)(""),[a,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{t&&r&&e().then(i)},[t,r]);let l=ho(n,!a),c={title:"Redirecting to Phantom Mobile Wallet",description:"We'll take you to the Phantom Mobile Wallet app to continue your login experience.",footnote:""};return t&&(c.description="For the best experience, we'll automatically log you into the Phantom Mobile Wallet in-app browser.",c.footnote="Once you're done, you can always return here and refresh to view your updated account."),a&&(c.title="Still here?",c.description="You may need to install the Phantom mobile app.",c.footnote="Once you're done, you can return here or connect via Phantom's in-app browser."),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(ao,{title:c.title,description:c.description}),(0,m.jsxs)(i2,{children:[(0,m.jsx)(hs,{children:(0,m.jsx)(rX,{style:{width:"72px",height:"72px"}})}),(0,m.jsx)(n6,{href:l,onClick:()=>{setTimeout(()=>s(!0),1e3)},loading:t&&!l,children:a?"Go to App Store":"Continue"}),c.footnote?(0,m.jsx)("p",{children:c.footnote}):null]}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},LOGIN_FAILED_SCREEN:()=>{let{closePrivyModal:e}=nZ(),{navigate:t}=ny();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(dn,{style:{width:"160px",height:"160px",margin:"0 auto 20px"}}),(0,m.jsx)(ao,{title:"Could not connect with wallet",description:"Please check that Phantom multichain is enabled and try again.",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}),(0,m.jsxs)(i2,{children:[(0,m.jsx)(n3,{onClick:()=>t("LANDING"),children:"Try again"}),(0,m.jsx)(n8,{onClick:()=>e(),children:"Cancel"})]}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},AWAITING_OAUTH_SCREEN:()=>{let{authenticated:e,logout:t,ready:r,user:n}=n$(),{app:i,setModalData:a,navigate:s,resetNavigation:l}=ny(),{getAuthMeta:c,initLoginWithOAuth:d,loginWithOAuth:h,updateWallets:u,setReadyToTrue:p,closePrivyModal:g,createAnalyticsEvent:f}=nZ(),[y,w]=(0,o.useState)(!1),[x,v]=(0,o.useState)(void 0),C=c()?.provider||"google",{name:b,component:_}=rc(C),j=nY();(0,o.useEffect)(()=>{h(C).then(e=>{w(!0),p(!0),e&&j("login","onOAuthLoginComplete",e)}).catch(e=>{if(p(!1),e?.privyErrorCode==="allowlist_rejected"){v(void 0),l(),s("ALLOWLIST_REJECTION_SCREEN");return}if(e?.privyErrorCode==="max_accounts_reached"){console.error(new e3(e).toString()),v(void 0),l(),s("USER_LIMIT_REACHED_SCREEN");return}if(e?.privyErrorCode==="user_does_not_exist"){v(void 0),l(),s("ACCOUNT_NOT_FOUND_SCREEN");return}let{retryable:t,detail:r}=function(e,t){let r={detail:"",retryable:!1},n=t.charAt(0).toUpperCase()+t.slice(1);if(e?.privyErrorCode==="linked_to_another_user"&&(r.detail="This account has already been linked to another user."),e?.privyErrorCode==="invalid_credentials"&&(r.retryable=!0,r.detail="Something went wrong. Try again."),"oauth_user_denied"===e.privyErrorCode&&(r.detail=`Retry and check ${n} to finish connecting your account.`,r.retryable=!0),e?.privyErrorCode==="too_many_requests"&&(r.detail="Too many requests. Please wait before trying again."),e?.privyErrorCode==="too_many_requests"&&e.message.includes("provider rate limit")){let e=rc(t).name;r.detail=`Request limit reached for ${e}. Please wait a moment and try again.`}if(e?.privyErrorCode==="oauth_account_suspended"){let e=rc(t).name;r.detail=`Your ${e} account is suspended. Please try another login method.`}return e?.privyErrorCode==="cannot_link_more_of_type"&&(r.detail="You cannot authorize more than one account for this user."),e?.privyErrorCode==="oauth_unexpected"&&t.startsWith("privy:")&&(r.detail="Something went wrong. Please try again."),r}(e,C);v({retryable:t,detail:r,message:"Authentication failed"})}).finally(()=>{rd()})},[b,C]),(0,o.useEffect)(()=>{if(r&&e&&y&&n){if(i?.legal.requireUsersAcceptTerms&&!n.hasAcceptedTerms){let e=setTimeout(()=>{s("AFFIRMATIVE_CONSENT_SCREEN")},1400);return()=>clearTimeout(e)}if(rk(n,i?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{a({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),f({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:C,screen:"OAuthStatusScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),s("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},1400);return()=>clearTimeout(e)}{let e=setTimeout(()=>g({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return u(),()=>clearTimeout(e)}}},[r,e,y,n]);let k=y?`Successfully connected with ${b}`:x?x.message:`Verifying connection to ${b}`,E="";return E=y?"You’re good to go!":x?x.detail:"Just a few moments more",(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{}),(0,m.jsx)(ae,{}),(0,m.jsxs)(hi,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:y,fail:!!x}),(0,m.jsx)(_,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:k}),(0,m.jsx)("p",{children:E})]}),x&&x?.retryable?(0,m.jsx)(ie,{onClick:()=>{rd(),d(C),v(void 0)},disabled:!y&&!x?.retryable,children:"Retry"}):null]}),(0,m.jsx)(at,{}),(0,m.jsx)(iN,{})]})},CROSS_APP_AUTH_SCREEN:()=>{let{data:e,onUserCloseViaDialogOrKeybindRef:t}=ny(),{crossAppAuthFlow:r,updateWallets:n,closePrivyModal:i}=nZ(),[a,s]=(0,o.useState)({}),l={id:e?.crossAppAuth?.appId??"",name:e?.crossAppAuth?.name??"app",logoUrl:e?.crossAppAuth?.logoUrl},c=new eK(`There was an issue connecting your ${l.name} account. Please try again.`),d=new tI(async t=>{if(!e?.crossAppAuth?.popup){s({error:c});return}try{let n=await r({appId:t,popup:e.crossAppAuth.popup});s({data:n})}catch(t){t instanceof eK?s({error:t}):(t instanceof eG&&e?.crossAppAuth?.popup&&e.crossAppAuth.popup.close(),s({error:c}))}}),h=()=>{a.data&&(n(),e?.crossAppAuth?.onSuccess(a.data),i({shouldCallAuthOnSuccess:!0,isSuccess:!0})),e?.crossAppAuth?.onError(a.error??new eK("User canceled flow")),i({shouldCallAuthOnSuccess:!1,isSuccess:!1})};t.current=h,(0,o.useEffect)(()=>{l.id.length&&d.execute(l.id)},[l.id]),(0,o.useEffect)(()=>{if(!a.data)return;let e=setTimeout(h,1400);return()=>clearTimeout(e)},[a.data]);let{title:u,subtitle:p}=(0,o.useMemo)(()=>a.data?{title:`Successfully connected with ${l.name}`,subtitle:"You're good to go!"}:a.error?{title:"Authentication failed",subtitle:a.error.message}:{title:`Connecting to ${l.name}`,subtitle:`Please check the pop-up from ${l.name} to continue`},[a,l.name]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:h}),(0,m.jsx)(ae,{}),(0,m.jsxs)(aJ,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:!!a.data,fail:!!a.error}),(0,m.jsx)(aX,{name:l.name,logoUrl:l.logoUrl})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:u}),(0,m.jsx)("p",{children:p})]})]}),(0,m.jsx)(at,{}),(0,m.jsx)(iN,{})]})},ALLOWLIST_REJECTION_SCREEN:()=>{let{navigate:e,app:t}=ny(),r=t?.allowlistConfig.errorTitle||"You don't have access to this app",n=t?.allowlistConfig.errorDetail||"Have you been invited?",i=t?.allowlistConfig.errorCtaText||"Try another account";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{}),(0,m.jsxs)(i0,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(iX,{}),(0,m.jsx)(iJ,{style:{width:"38px",height:"38px",strokeWidth:"1",stroke:"var(--privy-color-accent)",fill:"var(--privy-color-accent)"}})]})}),(0,m.jsxs)(i1,{children:["string"==typeof r?(0,m.jsx)("h3",{children:r}):(0,m.jsx)(m.Fragment,{children:r}),"string"==typeof n?(0,m.jsx)("p",{children:n}):(0,m.jsx)(m.Fragment,{children:n})]}),t?.allowlistConfig.errorCtaLink?(0,m.jsx)(n3,{as:"a",href:t.allowlistConfig.errorCtaLink,children:i}):(0,m.jsx)(n3,{onClick:()=>{e("LANDING")},children:i})]})]})},ACCOUNT_NOT_FOUND_SCREEN:()=>{let{navigate:e,app:t}=ny();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{}),(0,m.jsxs)(iE,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(ii,{color:"var(--privy-color-warn-light)"}),(0,m.jsx)(S.Z,{height:38,width:38,strokeWidth:2,stroke:"var(--privy-color-warn)"})]})}),(0,m.jsxs)(iA,{children:[(0,m.jsx)("h3",{children:"Account not found"}),(0,m.jsxs)("p",{children:["Please try logging in again or go to ",t.name," to create an account."]})]}),(0,m.jsx)(iy,{}),(0,m.jsx)(n3,{onClick:()=>e("LANDING"),children:"Try logging in again"})]})]})},USER_LIMIT_REACHED_SCREEN:()=>{let{navigate:e}=ny();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{}),(0,m.jsxs)(ug,{children:[(0,m.jsx)(uf,{children:(0,m.jsx)(um,{})}),(0,m.jsxs)(uy,{children:[(0,m.jsx)("h3",{children:"Unable to sign in"}),(0,m.jsx)("p",{children:"This application has reached its user limit and cannot sign in new users."})]}),(0,m.jsx)(n3,{onClick:()=>{e("LANDING")},children:"Go back"})]}),(0,m.jsx)(iP,{})]})},INSTALL_PHANTOM_SCREEN:()=>{let{navigateBack:e}=ny();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:e},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(cE,{}),(0,m.jsx)(at,{}),(0,m.jsxs)(iN,{children:[(0,m.jsx)("span",{children:"Still not sure? "}),(0,m.jsx)("a",{target:"_blank",href:"https://ethereum.org/en/wallets/",children:"Learn more"})]})]})},LINK_EMAIL_SCREEN:()=>{let{app:e}=ny();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(as,{title:"Connect your email",description:`Add your email to your ${e?.name} account`,icon:(0,m.jsx)(O.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"48px",width:"48px"})}),(0,m.jsx)(i2,{children:(0,m.jsx)(cM,{stacked:!0})}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},LINK_PHONE_SCREEN:()=>{let{app:e,currentScreen:t,data:r,navigate:n,setModalData:i}=ny(),{initLoginWithSms:a}=nZ();async function o({qualifiedPhoneNumber:e}){try{await a(e),n("AWAITING_PASSWORDLESS_CODE")}catch(e){i({errorModalData:{error:e,previousScreen:r?.errorModalData?.previousScreen||t||"LINK_PHONE_SCREEN"}}),n("ERROR_SCREEN")}}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(as,{title:"Connect your phone",description:`Add your number to your ${e?.name} account`,icon:(0,m.jsx)(I.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"40px",width:"40px"})}),(0,m.jsx)(i2,{children:(0,m.jsx)(cq,{stacked:!0,onSubmit:o,hideRecent:!0})}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},LINK_WALLET_SCREEN:()=>{let{linkingOrConnectingHint:e}=nZ(),{app:t}=ny(),r=e?`Link the wallet with address ${tm(e)} ${t?.name?`to ${t.name}.`:"."}`:`Link a wallet to your ${t?.name} account`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ao,{title:"Link your wallet",description:r}),(0,m.jsx)(ix,{children:(0,m.jsx)(aH,{connectOnly:!1})}),(0,m.jsx)(iP,{})]})},LINK_PASSKEY_SCREEN:()=>{let{user:e,unlinkPasskey:t}=n$(),{linkWithPasskey:r,closePrivyModal:n}=nZ(),i=e?.linkedAccounts.filter(e=>"passkey"===e.type),[a,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(""),[d,h]=(0,o.useState)(!1),[u,p]=(0,o.useState)(!1);(0,o.useEffect)(()=>{0===i.length&&p(!1)},[i.length]);let g=async e=>(s(!0),await t(e).then(()=>h(!0)).catch(e=>{if(e instanceof eV&&"missing_or_invalid_mfa"===e.privyErrorCode){c("Cannot unlink a passkey enrolled in MFA");return}c("Unknown error occurred.")}).finally(()=>{s(!1)}));return d?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:()=>n()},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{status:"success",children:(0,m.jsx)(W.Z,{})})}),(0,m.jsx)(lv,{children:"Passkey added"}),(0,m.jsx)(lC,{children:"From now on, you can use your passkey to log in."}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{onClick:()=>n(),children:"Done"})}),(0,m.jsx)(iN,{})]}):u?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:()=>p(!1),onClose:()=>n()},"header"),(0,m.jsx)(lp,{passkeys:i,expanded:u,onUnlink:g,onExpand:()=>p(!0)}),(0,m.jsx)(iN,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:()=>n()},"header"),(0,m.jsx)(iR,{children:(0,m.jsxs)(lg,{children:[(0,m.jsx)(lh,{}),(0,m.jsx)(lu,{})]})}),(0,m.jsx)(lv,{children:"Secure your account with a passkey"}),(0,m.jsx)(lb,{}),0===i.length?(0,m.jsx)(lm,{}):(0,m.jsx)(lp,{passkeys:i,expanded:u,onUnlink:g,onExpand:()=>p(!0)}),(0,m.jsxs)(iU,{style:{marginTop:"12px"},children:[l&&(0,m.jsx)(lf,{fail:!0,children:l}),(0,m.jsx)(n3,{onClick:()=>{s(!0),r().then(()=>h(!0)).catch(e=>{if(e instanceof eV){if("cannot_link_more_of_type"===e.privyErrorCode){c("Cannot link more passkeys to account.");return}if("passkey_not_allowed"===e.privyErrorCode){c("Passkey request timed out or rejected by user.");return}}c("Unknown error occurred.")}).finally(()=>{s(!1)})},loading:a,children:"Add new passkey"})]}),(0,m.jsx)(iN,{})]})},UPDATE_EMAIL_SCREEN:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(as,{title:"Update your email",description:"Add the email address you'd like to use going forward. We'll send you a confirmation code",icon:(0,m.jsx)(O.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"48px",width:"48px"})}),(0,m.jsx)(i2,{children:(0,m.jsx)(uh,{stacked:!0})}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]}),UPDATE_PHONE_SCREEN:()=>{let{currentScreen:e,data:t,navigate:r,setModalData:n}=ny(),{user:i}=n$(),{initUpdatePhone:a}=nZ();async function o({qualifiedPhoneNumber:o}){try{if(!i?.phone?.number)throw Error("User is required to have an phone number to update it.");await a(i?.phone?.number,o),r("AWAITING_PASSWORDLESS_CODE")}catch(i){n({errorModalData:{error:i,previousScreen:t?.errorModalData?.previousScreen||e||"LINK_PHONE_SCREEN"}}),r("ERROR_SCREEN")}}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ae,{}),(0,m.jsx)(as,{title:"Update your phone number",description:"Add the phone number you'd like to use going forward. We'll send you a confirmation code",icon:(0,m.jsx)(I.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"48px",width:"48px"})}),(0,m.jsx)(i2,{children:(0,m.jsx)(cq,{stacked:!0,onSubmit:o,hideRecent:!0})}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},CONNECT_ONLY_LANDING_SCREEN:()=>{let{app:e}=ny(),{linkingOrConnectingHint:t}=nZ(),r=t?`Connect the wallet with address ${tm(t)} ${e?.name?`to ${e.name}.`:"."}`:`Connect a wallet to ${e?.name}`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(aa,{title:"Connect your wallet",description:r}),(0,m.jsx)(ix,{children:(0,m.jsx)(aH,{connectOnly:!0})}),e&&(0,m.jsx)(iT,{app:e,alwaysShowImplicitConsent:!0}),(0,m.jsx)(iP,{})]})},CONNECT_ONLY_AUTHENTICATED_SCREEN:()=>{let{app:e}=ny(),{linkingOrConnectingHint:t}=nZ(),r=t?`Connect the wallet with address ${tm(t)} ${e?.name?`to ${e.name}.`:"."}`:`Connect a wallet to ${e?.name}`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(ao,{title:"Connect your wallet",description:r}),(0,m.jsx)(ix,{children:(0,m.jsx)(aH,{connectOnly:!0})}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN:()=>{let{app:e,setModalData:t,navigate:r,data:n,onUserCloseViaDialogOrKeybindRef:i}=ny(),[a,s]=(0,o.useState)(""),{embeddedWallets:l}=nh(),{authenticated:c}=n$(),{closePrivyModal:d}=nZ(),{onSuccess:h,onFailure:u,callAuthOnSuccessOnClose:p}=n.createWallet,g=e?.embeddedWallets.requireUserOwnedRecoveryOnCreate===!0,{createWallet:f}=oC(),[y,w]=(0,o.useState)(null),x=new tI(async()=>{try{let e=await f();if(!e)return;w(e),r("EMBEDDED_WALLET_CREATED_SCREEN")}catch(e){s(e.message)}});return(0,o.useEffect)(()=>{if(!c){r("LANDING"),u(Error("User must be authenticated before creating a Privy wallet"));return}if(g)return t({...n,recoverySelection:{...n?.recoverySelection,isInAccountCreateFlow:!0}}),r(oi({walletAction:"create",showAutomaticRecovery:!1,availableRecoveryMethods:l.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:!1}));x.execute()},[g,c]),i.current=()=>null,a?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{closeable:!1}),(0,m.jsxs)(i6,{children:[(0,m.jsx)(L.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}),(0,m.jsx)(as,{title:"Something went wrong",description:a})]}),(0,m.jsx)(n3,{onClick:()=>{y?(h(y),d({shouldCallAuthOnSuccess:p})):(u(new e1("User wallet creation failed")),d({shouldCallAuthOnSuccess:!1}))},children:"Close"}),(0,m.jsx)(ob,{})]}):(0,m.jsx)(a0,{})},EMBEDDED_WALLET_CREATED_SCREEN:()=>{let{user:e}=n$(),{closePrivyModal:t,isNewUserThisSession:r,updateWallets:n}=nZ(),{app:i,data:a,onUserCloseViaDialogOrKeybindRef:s}=ny(),{onSuccess:l,onFailure:c,callAuthOnSuccessOnClose:d}=a.createWallet,h=()=>{let r=rC(e);r?(n(),l(r)):c(Error("Failed to create wallet")),t({shouldCallAuthOnSuccess:d})};return(0,o.useEffect)(()=>{let e=setTimeout(h,2500);return()=>clearTimeout(e)},[]),s.current=h,(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:h}),(0,m.jsx)(ae,{}),(0,m.jsxs)(i6,{children:[(0,m.jsx)(W.Z,{fill:"var(--privy-color-accent)",width:"64px",height:"64px"}),(0,m.jsx)(as,{title:r?`Welcome${i?.name?` to ${i?.name}`:""}`:"All set!",description:r?"You’ve successfully created an account.":"Your account is secured."})]}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_CONNECTING_SCREEN:()=>{let{authenticated:e,user:t,getAccessToken:r}=n$(),{closePrivyModal:n,createAnalyticsEvent:i,walletProxy:a}=nZ(),{navigate:s,data:l,setModalData:c,onUserCloseViaDialogOrKeybindRef:d}=ny(),h=(0,o.useMemo)(()=>Date.now(),[]),[u,p]=(0,o.useState)(!1),{onCompleteNavigateTo:g,onFailure:f,shouldForceMFA:y,address:w}=l?.connectWallet,x=e=>{u||(p(!0),f("string"==typeof e?Error(e):e))};(0,o.useEffect)(()=>{let o=w?t?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&e.address===w):rC(t),d;return e&&o?a?((async()=>{let e=await r();if(!e)return x("User must be authenticated and have a Privy wallet before it can be connected");try{await a.connect({accessToken:e,address:o.address}),y&&await a.verifyMfa({accessToken:e});let t=(Date.now()-h)/1e3;"EMBEDDED_WALLET_KEY_EXPORT_SCREEN"===g&&t<1?d=setTimeout(()=>{s(g,!1)},(1-t)*1e3):s(g,!1)}catch(e){if(a8(e)&&"privy"===o.recoveryMethod){let e=await r();if(!e)return x("User must be authenticated and have a Privy wallet before it can be recovered");try{i({eventName:"embedded_wallet_pinless_recovery_started",payload:{walletAddress:o.address}}),(await a?.recover({address:o.address,accessToken:e,recoveryMethod:o.recoveryMethod}))?.address||x(Error("Unable to recover wallet")),g?s(g):n({shouldCallAuthOnSuccess:!1}),i({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:o.address}}),s(g)}catch{x("An error has occurred, please try again.")}}else a8(e)&&"privy"!==o.recoveryMethod?(c({...l,recoverWallet:{privyWallet:o,onCompleteNavigateTo:g,onFailure:f},recoveryOAuthStatus:{provider:o.recoveryMethod,action:"recover",isInAccountCreateFlow:!1}}),s(oa(o.recoveryMethod))):x(e)}})(),()=>clearTimeout(d)):void 0:x("User must be authenticated and have a Privy wallet before it can be connected")},[e,t,a]);let v=()=>{x("User exited before wallet could be connected"),n({shouldCallAuthOnSuccess:!1})};return d.current=v,(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:v}),u?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i6,{children:[(0,m.jsx)(L.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}),(0,m.jsx)(as,{title:"Something went wrong",description:"We’re on it. Please try again later."})]}),(0,m.jsx)(n3,{onClick:()=>n({shouldCallAuthOnSuccess:!1}),children:"Close"})]}):(0,m.jsx)(a0,{}),(0,m.jsx)(ol,{})]})},EMBEDDED_WALLET_PASSWORD_RECOVERY_SCREEN:()=>{let[e,t]=(0,o.useState)(!0),{authenticated:r,getAccessToken:n}=n$(),{walletProxy:i,closePrivyModal:a,createAnalyticsEvent:s}=nZ(),{navigate:l,data:c,onUserCloseViaDialogOrKeybindRef:d}=ny(),[h,u]=(0,o.useState)(void 0),[p,g]=(0,o.useState)(""),[f,y]=(0,o.useState)(!1),{privyWallet:w,onCompleteNavigateTo:x,onSuccess:v,onFailure:C}=c.recoverWallet,b=(e="User exited before their wallet could be recovered")=>{a({shouldCallAuthOnSuccess:!1}),C("string"==typeof e?new e1(e):e)};d.current=b,(0,o.useEffect)(()=>{if(!r||!w)return b("User must be authenticated and have a Privy wallet before it can be recovered")},[r]);let _=e=>{e&&u(e)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:b}),(0,m.jsx)(ae,{}),(0,m.jsxs)(hc,{children:[(0,m.jsxs)(hl,{children:[(0,m.jsx)(eT.Z,{height:48,width:48,stroke:"var(--privy-color-accent)"}),(0,m.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Enter your password"}),(0,m.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Please provision your account on this new device. To continue, enter your recovery password."})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)(oP,{children:[(0,m.jsx)(oS,{type:e?"password":"text",onChange:e=>_(e.target.value),disabled:f,style:{paddingRight:"2.3rem"}}),(0,m.jsx)(oI,{style:{right:"0.75rem"},children:e?(0,m.jsx)(oL,{onClick:()=>t(!1)}):(0,m.jsx)(oF,{onClick:()=>t(!0)})})]}),!!p&&(0,m.jsx)(hd,{children:p})]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)(i9,{children:[(0,m.jsx)("h4",{children:"Why is this necessary?"}),(0,m.jsx)("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]}),(0,m.jsx)(hh,{loading:f||!i,disabled:!h,onClick:async()=>{y(!0);let e=await n();if(!e||!w||null===h)return b("User must be authenticated and have a Privy wallet before it can be recovered");try{s({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:w.address}}),await i?.recover({address:w.address,accessToken:e,recoveryPin:h,recoveryMethod:w.recoveryMethod}),g(""),x?l(x):a({shouldCallAuthOnSuccess:!1}),v?.(w),s({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:w.address}})}catch(e){a7(e)&&("invalid_recovery_pin"===e.type||"invalid_request_arguments"===e.type)?g("Invalid recovery password, please try again."):g("An error has occurred, please try again.")}finally{y(!1)}},warn:!1,hideAnimations:!w&&f,children:"Recover your account"})]})]}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN:()=>{let[e,t]=(0,o.useState)(!1),{navigate:r,lastScreen:n,navigateBack:i,setModalData:a,data:s,onUserCloseViaDialogOrKeybindRef:l}=ny(),{user:c}=n$(),{embeddedWallets:d}=nh(),{closePrivyModal:h}=nZ(),u=rC(c),p=null===u,{isInAccountCreateFlow:g,isResettingPassword:f}=s.recoverySelection,y=u&&"privy"!==u.recoveryMethod,w=y?(0,m.jsxs)("span",{children:["Your account is currently secured using"," ",(0,m.jsx)("strong",{children:hw[u?.recoveryMethod||"user-passcode"]}),"."]}):"Select a method for logging in on new devices and recovering your account.";function x(e){a({recoveryOAuthStatus:{provider:e,action:p?"create-wallet":"set-recovery",isInAccountCreateFlow:g}}),r("EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN")}function v(){s?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),h({shouldCallAuthOnSuccess:s?.setWalletPassword?.callAuthOnSuccessOnClose??!1})}return l.current=v,(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:v,backFn:e?()=>t(!1):n?i:void 0,infoFn:n||e?void 0:()=>t(!0)},"header"),e?(0,m.jsx)(hx,{onClose:()=>t(!1)}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(as,{title:y?"Update backup method":"Secure your account",icon:(0,m.jsx)(eR.Z,{width:48}),description:w}),(0,m.jsx)(hm,{children:d.userOwnedRecoveryOptions.filter(e=>!["icloud","google-drive"].includes(u?.recoveryMethod||"")||e!==u?.recoveryMethod).sort().map(e=>{switch(e){case"google-drive":return(0,m.jsxs)(i_,{onClick:()=>x("google-drive"),children:[(0,m.jsx)(hy,{children:(0,m.jsx)(hp,{style:{width:18}})}),"Back up to Google Drive"]},e);case"icloud":return(0,m.jsxs)(i_,{onClick:()=>x("icloud"),children:[(0,m.jsx)(hy,{children:(0,m.jsx)(hu,{style:{width:24}})}),"Back up to Apple iCloud"]},e);case"user-passcode":return(0,m.jsxs)(i_,{onClick:()=>{r(on({isCreatingWallet:p,skipSplashScreen:!0}))},children:[(0,m.jsx)(hy,{children:(0,m.jsx)(eM.Z,{style:{width:18}})}),f?"Reset your":"Set a"," password"]},e);default:return null}})})]}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_SET_AUTOMATIC_RECOVERY_SCREEN:()=>{let{user:e,getAccessToken:t}=n$(),r=rC(e),{walletProxy:n,refreshUser:i,closePrivyModal:a}=nZ(),s=nh(),l=ny(),[c,d]=(0,o.useState)(!1),[h,u]=(0,o.useState)(null),[p,g]=(0,o.useState)(null);function f(){if(!c){if(p){l.data?.setWalletPassword?.onFailure(p),a();return}if(!h){l.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),a();return}}}async function y(){d(!0);try{let e=await t();if(!e||!n||!r)return;if(!(await n.setRecovery({recoveryMethod:"privy",address:r.address,accessToken:e})).address)throw Error("Unable to set recovery on wallet");let o=await i();if(!o)throw Error("Unable to set recovery on wallet");let s=rC(o);if(!s)throw Error("Unabled to set recovery on wallet");u(!!o),setTimeout(()=>{l.data?.setWalletPassword?.onSuccess(s),a()},1400)}catch(e){g(e)}finally{d(!1)}}l.onUserCloseViaDialogOrKeybindRef.current=f;let w=!!(c||h);return p?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:f},"header"),(0,m.jsx)(hv,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:(0,m.jsx)(U.Z,{height:38,width:38,stroke:"var(--privy-color-error)"})}),(0,m.jsx)(hC,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),(0,m.jsx)(iy,{style:{minHeight:"2rem"}}),(0,m.jsx)(n4,{onClick:()=>g(null),children:"Try again"}),(0,m.jsx)(iP,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:f},"header"),(0,m.jsx)(eR.Z,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),(0,m.jsx)(hC,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),(0,m.jsx)(cg,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),(0,m.jsx)(iy,{style:{minHeight:"2rem"}}),(0,m.jsx)(n4,{loading:c,disabled:w,onClick:()=>y(),children:h?"Success":"Confirm"}),(0,m.jsx)(n2,{disabled:w,onClick:()=>{let e=oi({walletAction:"update",availableRecoveryMethods:s.embeddedWallets.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:r?.recoveryMethod==="user-passcode",showAutomaticRecovery:!1});l.navigate(e)},style:{marginTop:"0.5rem"},children:"More recovery options"}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN:()=>{let{logout:e}=n$(),{navigate:t,setModalData:r,data:n}=ny(),{recoveryOAuthFlow:i,closePrivyModal:a,createAnalyticsEvent:s}=nZ(),[l,c]=(0,o.useState)(!1),{provider:d,action:h,isInAccountCreateFlow:u}=n?.recoveryOAuthStatus,[p,g]=(0,o.useState)(void 0),[f,y]=(0,o.useState)("create-wallet"===h);if("user-passcode"===d)throw Error("RecoveryOAuthScreen should never be called with a wallet that specifies recoveryMethod: `user-passcode`");let w=hf[d].name,x=hf[d].component,v=n?.recoverWallet?.onCompleteNavigateTo,C=new tI(async(e="create-wallet")=>(y(!0),new Promise((t,r)=>{setTimeout(async()=>{try{let r=window.open();await i(d,e,r),c(!0),t()}catch{g({message:`${"recover"===e?"Recovery":"Back up"} with ${w} unsuccessful`,detail:"recover"===h?`Please verify that you are selecting the ${w} account associated with your backup.`:"",retryable:!0}),r()}},0)})));(0,o.useEffect)(()=>{"recover"!==h&&C.execute(u?"create-wallet":"set-recovery")},[]),(0,o.useEffect)(()=>{if(!l)return;let n=setTimeout(()=>{u?(r({createWallet:{onSuccess:()=>{},onFailure:t=>{s({eventName:"embedded_wallet_creation_failure_logout",payload:{error:t,screen:"RecoveryOAuthScreen"}}),e()},callAuthOnSuccessOnClose:!0}}),t("EMBEDDED_WALLET_CREATED_SCREEN")):a({shouldCallAuthOnSuccess:!1})},1400);return()=>clearTimeout(n)},[l]);let b=(0,o.useCallback)(async()=>{await C.execute("recover"),v?t(v):c(!0)},[]),_="google-drive"===d?"Google Drive":"Apple iCloud",j=l&&`Successfully ${"recover"===h?"recovered":"backed up"} with ${_}.`||p&&p.message||`${"recover"===h?"Recovering":"Backing up"} with ${_}...`,k=p?p.detail:"";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{}),f?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(hm,{children:[(0,m.jsx)(as,{title:j,icon:(0,m.jsx)(x,{style:{width:"38px",height:"38px"}}),description:k}),p&&p?.retryable?(0,m.jsx)(n3,{onClick:()=>{rd(),g(void 0),"create-wallet"===h?C.execute("create-wallet"):b()},disabled:!l&&!p?.retryable,children:"Try again"}):null]})}):(0,m.jsxs)(hm,{children:[(0,m.jsx)(as,{title:"Confirm it's really you",icon:(0,m.jsx)(x,{style:{height:42,width:48}}),description:`To confirm your identity, please log in to ${_} where your account is backed up.`}),(0,m.jsxs)(n3,{onClick:b,children:["Confirm with ",_]})]}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_KEY_EXPORT_SCREEN:()=>{let[e,t]=(0,o.useState)(null),{authenticated:r,user:n,getAccessToken:i}=n$(),{closePrivyModal:a,createAnalyticsEvent:s,clientAnalyticsId:l}=nZ(),{data:c,onUserCloseViaDialogOrKeybindRef:d}=ny(),h=rC(n),{onFailure:u,onSuccess:p,origin:g,appId:f,appClientId:y}=c.keyExport,w=e=>{a({shouldCallAuthOnSuccess:!1}),u("string"==typeof e?Error(e):e)},x=()=>{a({shouldCallAuthOnSuccess:!1}),p(),s({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:h?.address}})};return(0,o.useEffect)(()=>{if(!r||!h)return w("User must be authenticated before exporting their wallet");i().then(t,w)},[r,n]),d.current=x,(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:x}),(0,m.jsxs)(op,{children:[(0,m.jsx)(as,{title:"Transfer wallet",description:(0,m.jsxs)(om,{children:["Either copy your private key or seed phrase to transfer your wallet."," ",(0,m.jsx)("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Learn more"})]})}),(0,m.jsxs)(og,{children:[(0,m.jsx)(U.Z,{color:"var(--privy-color-warn)"}),(0,m.jsx)("p",{children:"Never share your private key or seed phrase with anyone."})]}),(0,m.jsx)(of,{children:(0,m.jsx)(ow,{children:(0,m.jsxs)(oc,{children:[(0,m.jsx)(od,{children:"Your wallet"}),(0,m.jsxs)(oy,{children:[tm(h?.address,4,4),(0,m.jsx)(oh,{address:h?.address??""})]})]})})}),(0,m.jsx)("div",{style:{width:"100%"},children:e&&!!h&&(0,m.jsx)(ou,{origin:g,appId:f,appClientId:y,accessToken:e,clientAnalyticsId:l,wallet:h,dimensions:{height:"44px"}})})]}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_SIGN_REQUEST_SCREEN:()=>{let{authenticated:e}=n$(),{initializeWalletProxy:t,closePrivyModal:r}=nZ(),{navigate:n,data:i,onUserCloseViaDialogOrKeybindRef:a}=ny(),[s,l]=(0,o.useState)(!0),[c,h]=(0,o.useState)(""),[u,p]=(0,o.useState)(),[g,f]=(0,o.useState)(null),[y,w]=(0,o.useState)(!1),x=null!==g;(0,o.useEffect)(()=>{e||n("LANDING")},[e]),(0,o.useEffect)(()=>{t(3e4).then(e=>{l(!1),e||(h("An error has occurred, please try again."),p(new rW(new rI(c,d.M_.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:v,data:C,confirmAndSign:b,onSuccess:_,onFailure:j,uiOptions:k}=i.signMessage,E={title:k.title||"Sign message",description:k.description||"Signing this message will not cost you any fees.",buttonText:k.buttonText||"Sign and continue"},A=e=>{e?_(e):j(u||new rW(new rI("The user rejected the request.",d.M_.E4001_USER_REJECTED_REQUEST.eipCode))),r({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{f(null),h(""),p(void 0)},200)};return a.current=()=>{A(g)},(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:()=>A(g)}),(0,m.jsx)(ae,{}),k.iconUrl&&"string"==typeof k.iconUrl?(0,m.jsx)(ul,{children:(0,m.jsx)(d8,{size:"sm",src:k.iconUrl,alt:"app image"})}):null,(0,m.jsx)(hC,{children:E.title}),(0,m.jsx)(cg,{children:E.description}),"personal_sign"===v&&(0,m.jsx)(ui,{children:ue(C)}),"eth_signTypedData_v4"===v&&(0,m.jsx)(un,{typedData:C}),"solana_signMessage"===v&&(0,m.jsx)(ui,{children:C}),(0,m.jsx)(uc,{}),(0,m.jsx)(uo,{fail:!0,children:c}),(0,m.jsx)(n4,{disabled:y||x||s,loading:y,onClick:async()=>{w(!0),h("");try{let e=await b();f(e),w(!1),setTimeout(()=>{A(e)},1400)}catch(e){console.error(e),h("An error has occurred, please try again."),p(new rW(new rI(c,d.M_.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),w(!1)}},children:y?"Signing...":x?(0,m.jsxs)(us,{children:[(0,m.jsx)(ss,{style:{height:"0.9rem",width:"0.9rem"},strokeWidth:2})," ",(0,m.jsx)("span",{children:"Success"})]}):E.buttonText}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN:()=>{let{data:e,onUserCloseViaDialogOrKeybindRef:t,setModalData:r,navigate:i}=ny(),{rpcConfig:a,chains:s,closePrivyModal:l,walletProxy:c}=nZ(),{getAccessToken:h,user:u}=n$(),{wallets:p}=sH(),g=nh(),[f,y]=(0,o.useState)(e?.sendTransaction?.transactionRequest),[w,x]=(0,o.useState)(null),[v,C]=(0,o.useState)(!1),[b,_]=(0,o.useState)(null),[j,k]=(0,o.useState)(null);if(!f||!e?.sendTransaction)return(0,m.jsx)(si,{error:Error("Invalid transaction request"),onClick:()=>{e?.sendTransaction?.onFailure(h9),l({shouldCallAuthOnSuccess:!1})}});let E=(0,o.useMemo)(()=>f.from?p.find(e=>(0,n.Kn)(e.address)===(0,n.Kn)(f.from)):rC(u),[f.from]),A=(0,o.useMemo)(()=>s.find(e=>Number(e.id)===Number(f.chainId)),[f.chainId]),S=A?.nativeCurrency.symbol??"ETH",{action:T,amount:P,spender:N,isErc20Ish:R}=(0,o.useMemo)(()=>h3(f.data),[f.data]);(0,o.useEffect)(()=>{f.to&&A&&R&&h2({amount:P,address:f.to,chain:A,rpcConfig:g.rpcConfig,privyAppId:g.id}).then(x).catch(console.error)},[f.to,P,A]);let{tokenPrice:M,isTokenPriceLoading:O}=sz(f),I=(0,o.useMemo)(()=>tk(Number(f.chainId),s,a,{appId:g.id}),[f.chainId,a]),W=h8(f,I),L=()=>{if(!v)return b?e?.sendTransaction?.onSuccess(b.response):j||W?.errors[0]?e?.sendTransaction?.onFailure(j??W?.errors[0]??h9):e?.sendTransaction?.onFailure(new rW(new rI("The user rejected the request",d.M_.E4001_USER_REJECTED_REQUEST.eipCode))),l({shouldCallAuthOnSuccess:!1})};t.current=L;let F=async()=>{C(!0);try{let t=await h();if(v||!t||!E||!c)return;let r=await sU(t,E.address,c,W?.tx??f,I,e.sendTransaction?.requesterAppId),n=await r.wait();_({receipt:sZ(n),response:r})}catch(e){console.warn({transaction:W?.tx??f,error:e}),k(e)}finally{C(!1)}},U=async()=>{if(!rC(u))return;if(!g.fundingConfig||0===g.fundingConfig.methods.length||!e.funding)throw Error("Funding wallet is not enabled");let t=hk({fundingMethods:g.fundingConfig?.methods});r({...e,funding:{...e?.funding,methodScreen:t}}),i(t)},D="fiat-currency"===g.embeddedWallets.priceDisplay.primary,Z=(0,en.uq)(W?.tx.value??0).add((0,en.uq)(W?.totalGasEstimate?.toBigInt()??0)).toHexString(),z=sY(Z,S),$=D&&M?sK(Z,M):void 0,H=sY(W?.totalGasEstimate?.toString()??0,S),B=D&&M?sK(W?.totalGasEstimate?.toString()??0,M):void 0,q=sY(W?.balance?.toString()??0,S,void 0,!0),V=D&&M?sK(W?.balance?.toString()??0,M):void 0,G=e.sendTransaction?.uiOptions?.transactionInfo?.title||("approve"===T?"Confirm address":`Approve ${T}`),K=e.sendTransaction?.uiOptions?.description||`${g.name} wants your permission to approve the following transaction.`,Y=e.sendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl?(0,m.jsx)("img",{src:e.sendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,alt:e.sendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText}):null,Q=W&&!W.errors[0]&&!W.hasFunds&&g.fundingConfig&&g.fundingConfig.methods.length>0,X=Q?"Add funds":e.sendTransaction?.uiOptions?.buttonText||"Approve";return b?.receipt?(0,m.jsx)(hX,{txn:W?.tx??f,onClose:L,receipt:b.receipt,transactionInfo:e.sendTransaction?.uiOptions.transactionInfo,tokenPrice:M,tokenSymbol:S,l1GasEstimate:W?.l1ExecutionFeeEstimate?.toString(),receiptHeader:e.sendTransaction?.uiOptions.successHeader,receiptDescription:e.sendTransaction?.uiOptions.successDescription}):j?(0,m.jsx)(hW,{transactionError:j,chainId:W?.tx.chainId??f.chainId,onClose:L,onRetry:({resetNonce:e})=>{k(null);let t={...W?.tx??f};e&&(t.nonce=void 0),y(t)}}):(0,m.jsx)(hE,{isSubmitting:v,submitError:j,isPreparing:!W,isTokenPriceLoading:O,isTokenContractInfoLoading:!w,prepareError:W?.errors[0],symbol:w?.symbol,chain:A,img:Y,title:G,subtitle:K,spender:N,total:f.value?$??z:void 0,fee:B??H,to:f.to,network:g.chains.find(e=>e.id===f.chainId)?.name??"",from:E?.address??"",cta:X,hasFunds:W?.hasFunds,action:T,balance:V??q,amount:w?.value??P,onClose:L,onClick:Q?U:F})},FUNDING_METHOD_SELECTION_SCREEN:()=>{let{wallets:e}=sH(),{app:t,navigate:r,data:i,setModalData:a}=ny(),s=i?.funding,l=(0,o.useRef)(null),[c,d]=(0,o.useState)(!1);(0,o.useEffect)(()=>{l.current&&l.current.style.setProperty("--funding-input-length",Math.max(s.amount.length,1).toString())},[s.amount]);let h=t.fundingConfig?.methods.slice()??[],{tokenPrice:u}=sz({chainId:s.chain.id}),p=u?sG(s.amount,u):void 0,g=e.find(e=>(0,n.Kn)(e.address)===(0,n.Kn)(s.address)),f=g&&"privy"!==g.walletClientType?aS(g.walletClientType,g.connectorType,g.walletClientType):t.name,y=parseFloat(s.amount),w=!isNaN(y)&&y>0;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(sP,{}),(0,m.jsxs)("h3",{children:["Add funds to your"," ",f?.toLowerCase().endsWith("wallet")?f:f+" wallet"]}),(0,m.jsx)(i7,{style:{marginTop:"32px"},children:(0,m.jsxs)(lN,{children:[(0,m.jsxs)(lR,{onClick:()=>l.current?.focus(),children:[(0,m.jsx)(lO,{ref:l,value:s.amount,onFocus:()=>d(!0),onBlur:()=>d(!1),onChange:e=>{let t=e.target.value;/^[0-9.]*$/.test(t)&&t.split(".").length-1<=1&&a({...i,funding:{...s,amount:t}})}}),(0,m.jsx)(lW,{children:s.chain.nativeCurrency.symbol}),!c&&(0,m.jsx)(lI,{children:(0,m.jsx)(eo.Z,{width:12,height:12})})]}),(0,m.jsx)(lL,{children:p&&w?p:""})]})}),(0,m.jsxs)(lT,{children:[s.errorMessage&&(0,m.jsx)(ll,{children:s.errorMessage}),h.sort().map(e=>{switch(e){case"moonpay":return(0,m.jsxs)(i_,{disabled:!w,onClick:()=>{r("MOONPAY_PROMPT_SCREEN")},children:[(0,m.jsx)(lP,{children:(0,m.jsx)(ld,{style:{width:24}})}),"Moonpay"]},e);case"coinbase-onramp":return s8(Number(s.chain.id))?(0,m.jsxs)(i_,{disabled:!w,onClick:()=>{r("COINBASE_ONRAMP_STATUS_SCREEN")},children:[(0,m.jsx)(lP,{children:(0,m.jsx)(rT,{style:{width:24}})}),"Coinbase Onramp"]},e):null;case"external":return(0,m.jsxs)(i_,{disabled:!w,onClick:()=>{r("FUNDING_TRANSFER_FROM_WALLET_SCREEN")},children:[(0,m.jsx)(lP,{children:(0,m.jsx)(F.Z,{style:{width:24}})}),"Transfer from wallet"]},e)}}),(0,m.jsx)(lU,{disabled:!w,onClick:()=>r("FUNDING_MANUAL_TRANSFER_SCREEN"),children:"Send funds manually"})]}),(0,m.jsx)(iP,{})]})},MOONPAY_PROMPT_SCREEN:()=>{let{app:e,data:t,navigate:r,setModalData:n}=ny(),{createAnalyticsEvent:i,getMoonpaySignedUrl:a}=nZ(),[s,l]=(0,o.useState)(null),c=t?.funding;return(0,o.useEffect)(()=>{!s&&c&&r();async function r(){if(!e.fundingConfig)return;let{signedUrl:r,externalTransactionId:i}=await a(c.address,{...e.fundingMethodConfig.moonpay,...c.moonpayConfigOverride,currencyCode:c.moonpayConfigOverride?.currencyCode??function(e){switch(e){case"eip155:42161":return"ETH_ARBITRUM";case"eip155:43114":return"AVAX_CCHAIN";case"eip155:8453":return"ETH_BASE";case"eip155:42220":return"CELO_CELO";case"eip155:137":return"MATIC_POLYGON";case"eip155:1":return"ETH_ETHEREUM";default:return console.warn(`Chain ${e} not supported by Moonpay, defaulting to Ethereum mainnet`),"ETH_ETHEREUM"}}(`eip155:${c.chain.id}`),quoteCurrencyAmount:c.moonpayConfigOverride?.quoteCurrencyAmount??parseFloat(c.amount)});l(r),n({moonpayStatus:{externalTransactionId:i},funding:t?.funding})}},[s,c]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(sP,{}),(0,m.jsx)(l3,{app:e,signedUrl:s,onContinue:()=>{i({eventName:"sdk_fiat_on_ramp_started",payload:{provider:ci}}),r("MOONPAY_STATUS_SCREEN")}}),(0,m.jsx)(iP,{})]})},MOONPAY_STATUS_SCREEN:()=>{let{app:e,data:t}=ny(),{closePrivyModal:r}=nZ(),{externalTransactionId:n}=t?.moonpayStatus,i=function(e,t=!1){let[r,n]=(0,o.useState)(null),{createAnalyticsEvent:i}=nZ(),{data:a,navigate:s,setModalData:l}=ny(),c=a?.funding,d=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let r=setInterval(async()=>{if(e)try{let[a]=await cs(e,t),o="waitingAuthorization"===a.status&&"credit_debit_card"===a.paymentMethod?"pending":a.status;if(["failed","completed","awaitingAuthorization"].includes(o)&&(i({eventName:s6,payload:{status:o,provider:ci,paymentMethod:a.paymentMethod,cardPaymentType:a.cardPaymentType,currency:a.currency?.code,baseCurrencyAmount:a.baseCurrencyAmount,quoteCurrencyAmount:a.quoteCurrencyAmount,feeAmount:a.feeAmount,extraFeeAmount:a.extraFeeAmount,networkFeeAmount:a.networkFeeAmount}}),clearInterval(r)),"failed"===o||"serviceFailure"===o){l({funding:{...c,errorMessage:"Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."}}),s("FUNDING_METHOD_SELECTION_SCREEN");return}n(o)}catch(e){e.response?.status!==404&&(d.current+=1),d.current>=3&&(i({eventName:s6,payload:{status:"serviceFailure",provider:ci}}),clearInterval(r),l({funding:{...c,errorMessage:"Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."}}),s("FUNDING_METHOD_SELECTION_SCREEN"))}},3e3);return()=>clearInterval(r)},[e,d]),r}(n||null,e.fundingMethodConfig.moonpay.useSandbox??!1);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{title:"Fund account"},"header"),(0,m.jsx)(cc,{status:i,onClickCta:r}),(0,m.jsx)(iP,{})]})},COINBASE_ONRAMP_STATUS_SCREEN:()=>{let{data:e,setModalData:t,navigate:r}=ny(),{closePrivyModal:n,createAnalyticsEvent:i,initCoinbaseOnRamp:a,getCoinbaseOnRampStatus:s}=nZ(),l=e?.funding,[c,d]=(0,o.useState)(!1),[h,u]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(c)return;d(!0);let e=async()=>{try{i({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"coinbase-onramp"}});let e=window.open(void 0,void 0,s5({w:440,h:680})),t=function(e){let t=s7[e];if(!t)throw new eK(`Unsupported chainId: ${e} for Coinbase Onramp`);return t}(l.chain.id),r=await a({addresses:[{address:l.address,blockchains:[t]}]}),{url:n}=s9({input:r,amount:l.amount,blockchain:t});if(!e)throw Error("Unable to initiate Coinbase Onramp flow.");e.location=n.toString();let o=0,c=!1;for(;o<le;){o++;let{status:t}=await s({partnerUserId:r.partner_user_id});if("success"===t){c=!0;break}if("failure"===t)throw Error("There was an error completing Coinbase Onramp flow.");if(e.closed)throw Error("User exited Coinbase Onramp flow before transaction response.");await new Promise(e=>setTimeout(e,1500))}if(!c)throw Error("Timed out waiting for transaction response from Coinbase Onramp.");i({eventName:s6,payload:{status:"success",provider:"coinbase-onramp"}}),u(!0)}catch(e){console.error(e),i({eventName:s6,payload:{status:"failure",provider:"coinbase-onramp",error:e.message}}),t({funding:{...l,errorMessage:"Something went wrong adding funds from Coinbase Onramp. Please try again or use another method to fund your wallet."}}),r("FUNDING_METHOD_SELECTION_SCREEN")}finally{d(!1)}},n=setTimeout(()=>void e(),500);return()=>clearTimeout(n)},[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{title:"Fund account"},"header"),(0,m.jsx)(lr,{isSucccess:h,onClickCta:n}),(0,m.jsx)(iP,{})]})},FUNDING_TRANSFER_FROM_WALLET_SCREEN:()=>{let{connectors:e}=nZ(),{app:t,setModalData:r,data:n,navigate:i}=ny(),[a,s]=(0,o.useState)("default"),l=aB(t.appearance.walletList,e,!0,t.appearance.walletList,t.externalWallets.walletConnect.enabled),c=(0,m.jsx)(cx,{text:"More wallets",onClick:()=>s("overflow")});return(0,o.useEffect)(()=>{r({...n,externalConnectWallet:{onCompleteNavigateTo:"FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN"}})},[]),"overflow"===a?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:()=>s("default")},"header"),(0,m.jsxs)(ix,{children:[(0,m.jsx)(cg,{style:{color:"var(--privy-color-foreground-3)",textAlign:"left"},children:"More wallets"}),l]}),(0,m.jsx)(iP,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(sP,{}),(0,m.jsx)(as,{title:"Transfer from wallet",description:"Connect a wallet to deposit funds or send funds manually to your wallet address."}),(0,m.jsxs)(ix,{children:[...l.length>3?l.slice(0,2):l,l.length>3&&c,(0,m.jsx)(cw,{onClick:()=>i("FUNDING_MANUAL_TRANSFER_SCREEN"),children:"Send funds manually"})]}),(0,m.jsx)(iP,{})]})},FUNDING_AWAITING_TRANSFER_FROM_EXTERNAL_WALLET_SCREEN:()=>{let{chains:e,rpcConfig:t,appId:r,closePrivyModal:n}=nZ(),{navigate:i,setModalData:a,app:s,data:d}=ny(),[h,u]=(0,o.useState)(null),[p,g]=(0,o.useState)(null),[f,y]=(0,o.useState)(null),[w,x]=(0,o.useState)(null),[v,C]=(0,o.useState)(!1),b=d?.funding&&(0,et.vz)(d.funding.amount,"ether").toHexString(),_=d?.funding&&d.funding.chain.id,{wallets:j}=sH(),{tokenPrice:k,isTokenPriceLoading:E}=sz({chainId:h?.chainId&&sB(h.chainId)?sB(h.chainId):void 0}),A=async e=>{for(let t of e)_&&sB(t.chainId)!==_&&await t.switchChain(_)},S=new tI(async()=>{let n=j[0];if(!n){console.error("Connected wallet wasn't found."),i("ERROR_SCREEN",!1);return}if(u(n),!_){console.error(`Chain ID not found for input ${d?.funding?.chain.id}.`),i("ERROR_SCREEN",!1);return}let a=d?.funding?.address;if(!a){console.error("Address to fund not found."),i("ERROR_SCREEN",!1);return}g(a);let o=tk(_,e,t,{appId:r}),s={from:n.address,to:p||void 0,value:b,chainId:_},h=await (0,l.vT)(n.address,s,o),{totalGasEstimate:m}=await (0,c.gM)(h,o),{balance:f,hasSufficientFunds:w}=await sD(n.address,h,m,o);if(x({gas:m.toHexString(),balance:f.toHexString()}),!w){y(new eK(`Wallet ${tm(n.address)} does not have enough funds.`,void 0,"insufficient_balance"));return}await A([n]);try{let e=await (await n.getEthersProvider()).getSigner(),{wait:t}=await e.sendTransaction(h);await t(1),C(!0)}catch(e){y(e)}});(0,o.useEffect)(()=>{S.execute()},[]),(0,o.useEffect)(()=>{f&&(a({funding:d?.funding,sendTransaction:d?.sendTransaction,errorModalData:{error:f,previousScreen:"FUNDING_TRANSFER_FROM_WALLET_SCREEN"}}),i("ERROR_SCREEN",!1))},[f]);let T=h?aS(h.walletClientType,h.connectorType,h.walletClientType)||"wallet":null,P=!h||!w||E||!d?.funding||!b,N=P?void 0:sQ([w.gas,b]),R=N&&k?sK(N,k):void 0,M=N?sY(N,"ETH"):void 0,O=w&&k?sK(w.gas,k):void 0,I=w?sY(w.gas,"ETH"):void 0;return(0,o.useEffect)(()=>{if(!v)return;let e=setTimeout(n,2500);return()=>clearTimeout(e)},[v]),P?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(sP,{}),(0,m.jsx)(sN,{}),(0,m.jsx)("div",{style:{marginTop:"1rem"}}),(0,m.jsx)(iP,{})]}):v?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(sP,{}),(0,m.jsx)(ae,{}),(0,m.jsxs)(i6,{children:[(0,m.jsx)(er.Z,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,m.jsx)(as,{title:"Success!",description:`You\u2019ve successfully added ${(0,et.bM)(b,"ether")} ETH to your ${s.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(sP,{}),(0,m.jsx)(sN,{}),(0,m.jsx)(i3,{style:{marginTop:"16px"},children:(0,m.jsx)(aC,{icon:aT(h.walletClientType,h.connectorType,h.walletClientType),name:h.walletClientType})}),(0,m.jsx)(as,{style:{marginTop:"8px",marginBottom:"12px"},title:`Confirming with ${T}`}),w&&p&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(sW,{children:[(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Total"}),(0,m.jsx)(sF,{children:R||M})]}),(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"To"}),(0,m.jsx)(sF,{children:tm(p)})]}),(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Network"}),(0,m.jsx)(sF,{children:(0,m.jsxs)(sJ,{children:[aP(d.funding.chain.id)," ",d.funding.chain.name]})})]}),(0,m.jsxs)(sL,{children:[(0,m.jsx)(od,{children:"Estimated fee"}),(0,m.jsx)(sF,{children:O||I})]})]})}),(0,m.jsx)(an,{height:24}),(0,m.jsx)(iP,{})]})},FUNDING_MANUAL_TRANSFER_SCREEN:()=>{let{wallets:e}=sH(),{app:t,data:r,setModalData:n,navigate:i,lastScreen:a}=ny(),{chains:s,rpcConfig:l,appId:c,closePrivyModal:d}=nZ(),[h,u]=(0,o.useState)("default"),[p,g]=(0,o.useState)(void 0),f=r?.funding,{tokenPrice:y}=sz({chainId:f.chain.id}),w=y?sG(f.amount,y):void 0,x=e.find(e=>tm(e.address)===tm(f.address)),v=x&&"privy"!==x.walletClientType?aS(x.walletClientType,x.connectorType,x.walletClientType):t.name;if(!f)return n({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:a||"FUNDING_METHOD_SELECTION_SCREEN"},funding:r?.funding,sendTransaction:r?.sendTransaction}),i("ERROR_SCREEN"),(0,m.jsx)(m.Fragment,{});(0,o.useEffect)(()=>{let e=tk(f.chain.id,s,l,{appId:c});function t(){e.getBalance(f.address).then(e=>g(parseFloat((0,et.bM)(e,"ether")))).catch(()=>g(void 0))}let r=setInterval(t,2e3);return t(),()=>clearInterval(r)},[]);let C=(0,o.useMemo)(()=>void 0!==p&&p>=parseFloat(f.amount),[p,f.amount]),b=(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(lq,{title:"Your wallet",errMsg:void 0,isLoading:!f||void 0===p,isPulsing:!C,balance:`${void 0!==p?p.toPrecision(2):""} ETH`,address:f.address,statusColor:C?"green":"gray"}),C&&(0,m.jsx)(lZ,{onClick:()=>d(),children:"Close"})]});return"qr-code"===h?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:()=>u("default")}),(0,m.jsxs)(i7,{style:{gap:"24px",marginBottom:"24px"},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(iM,{children:"Scan QR code"}),(0,m.jsxs)(iO,{children:["Scan this code using your mobile wallet to send funds to your ",v," ","wallet."]})]}),(0,m.jsx)(sb,{url:f.address,size:200,squareLogoElement:lG}),b]}),(0,m.jsx)(iP,{})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(sP,{}),(0,m.jsx)(as,{title:"Send funds",description:"Send funds directly to your wallet by copying your wallet address or scanning a QR code."}),(0,m.jsxs)(i7,{style:{gap:"16px"},children:[(0,m.jsxs)(lQ,{children:[(0,m.jsx)(ed.Z,{height:"20px",width:"20px",color:"var(--privy-color-accent-light)"}),(0,m.jsxs)(lX,{children:["Make sure to send on ",f.chain.name,"."]})]}),(0,m.jsxs)(lJ,{children:[(0,m.jsx)(an,{height:16}),(0,m.jsxs)(lN,{children:[(0,m.jsxs)(lR,{children:[(0,m.jsx)(lM,{children:f.amount}),(0,m.jsx)(lW,{children:f.chain.nativeCurrency.symbol})]}),(0,m.jsx)(lL,{children:w?`${w} USD`:"..."}),(0,m.jsxs)(lF,{children:[aP(f.chain.id),f.chain.name]})]}),(0,m.jsx)(an,{height:8}),(0,m.jsxs)(lY,{children:[(0,m.jsx)(lK,{text:f.address}),(0,m.jsx)(l1,{onClick:()=>u("qr-code"),children:(0,m.jsxs)(l0,{children:[(0,m.jsx)(eh.Z,{height:"16px",width:"16px"}),"Scan code"]})})]})]}),b]}),(0,m.jsx)(an,{height:16}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_PASSWORD_UPDATE_SPLASH_SCREEN:()=>{let{closePrivyModal:e}=nZ(),{data:t,setModalData:r,navigate:n,onUserCloseViaDialogOrKeybindRef:i}=ny(),{onSuccess:a,onFailure:o}=t.setWalletPassword,s=()=>{o(new e1("Exited before password was added to wallet")),e({shouldCallAuthOnSuccess:!1})};return i.current=s,(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:s}),(0,m.jsx)(ae,{}),(0,m.jsxs)(i6,{children:[(0,m.jsxs)(ar,{children:[(0,m.jsx)(X.Z,{stroke:"var(--privy-color-accent)",width:"64px",height:"64px"}),(0,m.jsx)(ai,{style:{width:24,height:24,position:"absolute",bottom:0,right:0},children:(0,m.jsx)(J.Z,{width:"12px",height:"12px",fill:"white"})})]}),(0,m.jsxs)(as,{title:"Secure Your Account",children:["Please set a password to secure your account.",(0,m.jsx)("p",{children:"Losing access to this password and this device will make your account inaccessible."})]})]}),(0,m.jsx)(n3,{onClick:()=>{r({createWallet:{onFailure:o,onSuccess:a,callAuthOnSuccessOnClose:!1,addPasswordToExistingWallet:!0}}),n("EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN")},children:"Add password"}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN:()=>{let[e,t]=(0,o.useState)(null),[r,n]=(0,o.useState)(!1),[i,a]=(0,o.useState)(null),[s,l]=(0,o.useState)(""),{authenticated:c,getAccessToken:d,user:h}=n$(),{walletProxy:u,refreshUser:p,closePrivyModal:g,createAnalyticsEvent:f}=nZ(),{app:y,navigate:w,data:x,onUserCloseViaDialogOrKeybindRef:v}=ny(),{onSuccess:C,onFailure:b}=x.createWallet,_=rC(h),j=e?.recoveryMethod==="user-passcode",k=_?.recoveryMethod==="user-passcode";(0,o.useEffect)(()=>{c||(w("LANDING"),b(new e2("User must be authenticated before setting a password on a Privy wallet")))},[c]);let E=()=>{if(i){b(i),g({shouldCallAuthOnSuccess:!1});return}if(!j){b(new e1("Exited before password was added to wallet")),g({shouldCallAuthOnSuccess:!1});return}C(e),g({shouldCallAuthOnSuccess:!1})};v.current=E;let A=async()=>{let e=await d();if(e&&_?.address&&s&&u)try{if(f({eventName:"embedded_wallet_set_recovery_started",payload:{walletAddress:_.address,existingRecoveryMethod:_.recoveryMethod,targetRecoveryMethod:"user-passcode",isResettingPassword:k}}),!(await u.setRecovery({accessToken:e,address:_.address,recoveryPassword:s,recoveryMethod:"user-passcode"})).address){a(new e1("Error setting password on privy wallet")),f({eventName:"embedded_wallet_set_recovery_failed",payload:{walletAddress:_.address,existingRecoveryMethod:_.recoveryMethod,targetRecoveryMethod:"user-passcode",isResettingPassword:k,reason:"error setting password"}});return}let r=await p(),n=rC(r);if(!n){a(new e1("Error setting password on privy wallet")),f({eventName:"embedded_wallet_set_recovery_failed",payload:{walletAddress:_.address,existingRecoveryMethod:_.recoveryMethod,targetRecoveryMethod:"user-passcode",isResettingPassword:k,reason:"wallet disconnected"}});return}t(n),f({eventName:"embedded_wallet_set_recovery_completed",payload:{walletAddress:_.address,existingRecoveryMethod:_.recoveryMethod,targetRecoveryMethod:"user-passcode",isResettingPassword:k}})}catch(e){console.warn(e),a(e instanceof Error?e:Error("Error setting password on privy wallet")),f({eventName:"embedded_wallet_set_password_failed",payload:{walletAddress:_.address,reason:e}})}},S=async()=>{j?(C(e),g({shouldCallAuthOnSuccess:!1})):(n(!0),a(null),await A(),n(!1))};return(0,m.jsx)(sr,{appName:y?.name||"privy",config:{initiatedBy:"user",onCancel:E},error:i?"An error has occurred, please try again.":void 0,buttonLoading:r,buttonHideAnimations:!1,password:s,isResettingPassword:k,onPasswordGenerate:()=>l(o3()),onPasswordChange:l,onSubmit:S,onClose:E})},EMBEDDED_WALLET_PASSWORD_CREATE_SCREEN:()=>{let{app:e,navigate:t,data:r,onUserCloseViaDialogOrKeybindRef:n}=ny(),[i,a]=(0,o.useState)(""),[s,l]=(0,o.useState)(!1),[c,d]=(0,o.useState)(),[h,u]=(0,o.useState)(null),{authenticated:p}=n$(),{closePrivyModal:g,isNewUserThisSession:f,initializeWalletProxy:y}=nZ(),{onSuccess:w,onFailure:x,callAuthOnSuccessOnClose:v}=r.createWallet,{createWallet:C}=oC(),[b,_]=(0,o.useState)(null),j=new tI(async()=>{try{let e=await C(c);if(!e)return;_(e),f?t("EMBEDDED_WALLET_CREATED_SCREEN"):(w(e),g({shouldCallAuthOnSuccess:v}))}catch(e){a(e.message)}});(0,o.useEffect)(()=>{h||y(3e4).then(e=>u(e))},[h]),(0,o.useEffect)(()=>{if(!p){t("LANDING"),x(Error("User must be authenticated before creating a Privy wallet"));return}},[p]),n.current=()=>null;let k=async()=>(l(!0),j.execute().then(()=>new Promise(e=>setTimeout(e,250))).finally(()=>l(!1)));return(0,m.jsx)(sr,{config:{initiatedBy:"automatic"},appName:e?.name||"privy",loading:!h,buttonLoading:s,buttonHideAnimations:!b&&s,isResettingPassword:!1,error:i,password:c||"",onClose:()=>{b&&b?.recoveryMethod!=="user-passcode"?(x(new e1("User created a wallet but failed to set a password for it")),g({shouldCallAuthOnSuccess:!1})):b?(w(b),g({shouldCallAuthOnSuccess:v})):(x(new e1("User wallet creation failed")),g({shouldCallAuthOnSuccess:!1}))},onPasswordChange:d,onPasswordGenerate:()=>d(o3()),onSubmit:k})},MFA_ENROLLMENT_FLOW_SCREEN:()=>{let{user:e,enrollInMfa:t}=n$(),[r,n]=(0,o.useState)(null),{unenrollWithSms:i,unenrollWithTotp:a,unenrollWithPasskey:s}=da(),{app:l,ready:c,data:d,onUserCloseViaDialogOrKeybindRef:h}=ny(),{closePrivyModal:u}=nZ(),{promptMfa:p}=di(),{initEnrollmentWithTotp:g}=da(),[f,y]=(0,o.useState)(!1),[w,x]=(0,o.useState)(null),[v,C]=(0,o.useState)(null),b=()=>{u({shouldCallAuthOnSuccess:!0}),t(!1),setTimeout(()=>{n(null),x(null)},500)},{initEnrollmentWithPasskey:_,submitEnrollmentWithPasskey:j}=da(),[k,E]=(0,o.useState)(!1),[A,S]=(0,o.useState)(null);h.current=b;let T=e?.mfaMethods.includes("sms"),P=!!e?.phone,N=e?.mfaMethods.includes("totp"),R=e?.mfaMethods.includes("passkey"),M=T||N||R,O=e?.linkedAccounts.filter(e=>"passkey"===e.type).map(e=>e.credentialId)??[];function I(){n(null),x(null)}async function W(){E(!0);try{await _(),await j({credentialIds:O})}catch(e){S(e)}finally{E(!1)}}async function L(e){if(await p().catch(S),"totp"===e){x(e),C(null),g().then(e=>{C(e)}).catch(()=>{C(null),I()});return}if("passkey"===e&&1===O.length)return await W();x(e)}if((0,o.useEffect)(()=>{M&&y(!0)},[M]),!c||!e||!l)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:b},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(ds,{})}),(0,m.jsx)(iI,{children:(0,m.jsx)(nX,{})}),(0,m.jsx)(iN,{})]});async function F(){n(null);try{await i()}catch{n(null)}}async function U(){n(null);try{await a()}catch{n(null)}}async function D(){n(null);try{await p(),await s()}catch{n(null)}}if("sms"===r)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:I,onClose:b},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(e_.Z,{})})}),(0,m.jsx)(iM,{children:"Remove SMS verification?"}),(0,m.jsxs)(iO,{children:["MFA adds an extra layer of security to your ",l?.name," account. Make sure you have other methods to secure your account."]}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{warn:!0,onClick:F,children:"Remove SMS for MFA"})}),(0,m.jsx)(iN,{})]});if("totp"===r)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:I,onClose:b},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(eC.Z,{})})}),(0,m.jsx)(iM,{children:"Remove Authenticator App verification?"}),(0,m.jsxs)(iO,{children:["MFA adds an extra layer of security to your ",l?.name," account. Make sure you have other methods to secure your account."]}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{warn:!0,onClick:U,children:"Remove Authenticator App for MFA"})}),(0,m.jsx)(iN,{})]});if("passkey"===r)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:I,onClose:b},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(ej.Z,{})})}),(0,m.jsx)(iM,{children:"Are you sure you want to remove passkey verification?"}),(0,m.jsx)(iO,{children:"This will disable any passkeys you have set up for verification. You’ll still be able to login with your passkeys if you’ve set up passkey login."}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{warn:!0,onClick:D,children:"Yes, remove"})}),(0,m.jsx)(iN,{})]});if(0===d.mfaEnrollmentFlow.mfaMethods.length&&!M)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:b},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(ek.Z,{})})}),(0,m.jsx)(iM,{children:"Add more security"}),(0,m.jsxs)(iO,{children:[l?.name," does not have any verification methods enabled."]}),(0,m.jsx)(iU,{children:(0,m.jsx)(n3,{onClick:b,children:"Close"})}),(0,m.jsx)(iN,{})]});let Z=!M&&!f;return Z?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{onClose:b},"header"),(0,m.jsx)(iR,{children:(0,m.jsx)(iG,{children:(0,m.jsx)(ek.Z,{})})}),(0,m.jsx)(iM,{children:"Transaction Protection"}),(0,m.jsx)(iO,{children:"Set up transaction protection to add an extra layer of security to your account"}),(0,m.jsxs)(iW,{children:[(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(ec.Z,{})}),"Enable 2-Step verification for your ",l?.name," wallet."]}),(0,m.jsxs)(iF,{children:[(0,m.jsx)(iL,{children:(0,m.jsx)(eb.Z,{})}),"You'll be prompted to authenticate to complete transactions."]})]}),(0,m.jsxs)(iU,{children:[(0,m.jsx)(n3,{onClick:()=>y(!0),children:"Continue"}),(0,m.jsx)(n8,{onClick:b,children:"Not now"})]}),(0,m.jsx)(iN,{})]}):"sms"===w?(0,m.jsx)(dk,{onComplete:b,onReset:I,onClose:b}):"totp"===w&&v?(0,m.jsx)(dA,{onComplete:b,onClose:b,onReset:I,totpInfo:v}):"passkey"===w?(0,m.jsx)(dd,{onComplete:b,onReset:I,onClose:b}):(0,m.jsx)(dc,{showIntro:Z,userMfaMethods:e.mfaMethods,appMfaMethods:l.mfa.methods,userHasAuthSms:P,onBackToIntro:function(){y(!1)},handleSelectMethod:L,isTotpLoading:"totp"===w&&!v,isPasskeyLoading:k,error:A,onClose:b,setRemovingMfaMethod:n})},CAPTCHA_SCREEN:()=>{let{lastScreen:e,currentScreen:t,data:r,navigateBack:n,navigate:i,setModalData:a}=ny(),{status:s,token:l,waitForResult:c,reset:d,execute:h}=nF(),u=(0,o.useRef)([]),p=e=>{u.current=[e,...u.current]},[g,f]=(0,o.useState)(!0);(0,o.useEffect)(()=>(p(setTimeout(f,1e3,!1)),()=>{u.current.forEach(e=>clearTimeout(e)),u.current=[]}),[]);let[y,w]=(0,o.useState)(""),[x,v]=(0,o.useState)("Checking that you are a human..."),[C,b]=(0,o.useState)((0,m.jsx)(n3,{onClick:()=>{},disabled:!0,children:"Continue"})),[_,j]=(0,o.useState)(!1),[k,E]=(0,o.useState)(3),A=r?.captchaModalData,S=async t=>{try{await A?.callback(t),A?.onSuccessNavigateTo&&i(A?.onSuccessNavigateTo,!1)}catch(t){if(t instanceof nW)return;a({errorModalData:{error:t,previousScreen:e||"LANDING"}}),i(A?.onErrorNavigateTo||"ERROR_SCREEN",!1)}};(0,o.useEffect)(()=>{"success"===s?p(setTimeout(async()=>{let e=await c();!e||A?.userIntentRequired||S(e)},1e3)):"ready"===s&&p(setTimeout(()=>{"ready"===s&&h()},500))},[s]),(0,o.useEffect)(()=>{if(!g)switch(s){case"success":w("Success!"),v("CAPTCHA passed successfully."),b((0,m.jsx)(n3,{onClick:()=>{j(!0),S(l)},disabled:!A?.userIntentRequired,loading:_,children:A?.userIntentRequired?"Continue":"Continuing..."}));break;case"loading":w(""),v("Checking that you are a human..."),b((0,m.jsx)(n3,{onClick:()=>{},disabled:!0,children:"Continue"}));break;case"error":w("Something went wrong"),k<=0?(v("If you use an adblocker or VPN, try disabling and re-attempting."),b(null)):(v("You did not pass CAPTCHA. Please try again."),b((0,m.jsx)(n3,{onClick:T,children:"Retry"})))}},[s,g,_]);let T=async()=>{if(k<=0)return;E(e=>e-1),d(),h();let e=await c();!e||A?.userIntentRequired||S(e)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{backFn:e&&t!==e?n:void 0}),(0,m.jsxs)(av,{children:["success"===s?(0,m.jsx)(W.Z,{fill:"var(--privy-color-success)",width:"64px",height:"64px"}):"error"===s?(0,m.jsx)(L.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}):(0,m.jsx)(aw,{}),(0,m.jsxs)(i8,{children:[y?(0,m.jsx)("h3",{children:y}):null,(0,m.jsx)("p",{children:x})]}),C]}),(0,m.jsx)(iN,{})]})},ERROR_SCREEN:()=>{let{navigate:e,navigateBack:t,data:r,lastScreen:n,currentScreen:i}=ny(),a=r?.errorModalData?.previousScreen||(n===i?void 0:n);return(0,m.jsx)(si,{error:r?.errorModalData?.error||Error(),backFn:()=>a?e(a,!1):t(),onClick:()=>e(a||"LANDING",!1)})},IN_APP_BROWSER_LOGIN_NOT_POSSIBLE:()=>{let{closePrivyModal:e}=nZ();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{},"header"),(0,m.jsx)(cv,{children:(0,m.jsx)(N.Z,{style:{width:32,height:32}})}),(0,m.jsx)(ao,{title:"Could not log in with provider",description:"It looks like you're using an in-app browser.  To log in, please try again using an external browser.",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}),(0,m.jsx)(i2,{children:(0,m.jsx)(n3,{onClick:()=>e(),children:"Close"})}),(0,m.jsx)(at,{}),(0,m.jsx)(iP,{})]})},AFFIRMATIVE_CONSENT_SCREEN:()=>{let{user:e,logout:t}=n$(),{app:r,onUserCloseViaDialogOrKeybindRef:n,setModalData:i,navigate:a}=ny(),{acceptTerms:o,closePrivyModal:s,createAnalyticsEvent:l}=nZ(),c=e=>{e?.preventDefault(),s({shouldCallAuthOnSuccess:!1}),t()};n.current=c;let d=async n=>{n.preventDefault(),await o(),e&&rk(e,r?.embeddedWallets?.createOnLogin)?(i({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),l({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AffirmativeConsentScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),a("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")):s()};return(0,m.jsx)(iY,{termsAndConditionsUrl:r?.legal.termsAndConditionsUrl,privacyPolicyUrl:r?.legal.privacyPolicyUrl,onAccept:d,onDecline:c})},TELEGRAM_AUTH_SCREEN:()=>{let{authenticated:e,logout:t,ready:r,user:n}=n$(),{app:i,setModalData:a,navigate:s,resetNavigation:l}=ny(),{initLoginWithTelegram:c,loginWithTelegram:d,updateWallets:h,setReadyToTrue:u,closePrivyModal:p,createAnalyticsEvent:g}=nZ(),[f,y]=(0,o.useState)(!1),[w,x]=(0,o.useState)(void 0);async function v(){try{await d(),y(!0),u(!0)}catch(r){if(r?.privyErrorCode==="allowlist_rejected"){x(void 0),l(),s("ALLOWLIST_REJECTION_SCREEN");return}if(r?.privyErrorCode==="max_accounts_reached"){console.error(new e3(r).toString()),x(void 0),l(),s("USER_LIMIT_REACHED_SCREEN");return}if(r?.privyErrorCode==="user_does_not_exist"){x(void 0),l(),s("ACCOUNT_NOT_FOUND_SCREEN");return}let{retryable:e,detail:t}=ry(r);x({retryable:e,detail:t,message:"Authentication failed"})}}(0,o.useEffect)(()=>{v()},[]),(0,o.useEffect)(()=>{if(!(r&&e&&f&&n))return;if(i?.legal.requireUsersAcceptTerms&&!n.hasAcceptedTerms){let e=setTimeout(()=>{s("AFFIRMATIVE_CONSENT_SCREEN")},1400);return()=>clearTimeout(e)}if(rk(n,i?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{a({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),g({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:"telegram",screen:"TelegramAuthScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),s("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},1400);return()=>clearTimeout(e)}h();let o=setTimeout(()=>p({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return()=>clearTimeout(o)},[r,e,f,n]);let C=f?"Successfully connected with Telegram":w?w.message:"Verifying connection to Telegram",b="";return b=f?"You’re good to go!":w?w.detail:"Just a few moments more",(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{}),(0,m.jsx)(ae,{}),(0,m.jsxs)(ud,{children:[(0,m.jsx)(ig,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(nQ,{success:f,fail:!!w}),(0,m.jsx)(cJ,{style:{width:"38px",height:"38px"}})]})}),(0,m.jsxs)(i8,{children:[(0,m.jsx)("h3",{children:C}),(0,m.jsx)("p",{children:b})]}),w&&w?.retryable?(0,m.jsx)(ie,{onClick:()=>{c().then(async()=>v()).catch(e=>{let{retryable:t,detail:r}=ry(e);x({retryable:t,detail:r,message:"Authentication failed"})}),x(void 0)},disabled:!f&&!w?.retryable,children:"Retry"}):null]}),(0,m.jsx)(at,{}),(0,m.jsx)(iN,{})]})}},uS=["LANDING","AWAITING_CONNECTION"],uT=({isMfaVerifying:e,onMfaVerificationComplete:t})=>{let{ready:r,isModalOpen:n}=n$(),{headless:i}=nh(),{ready:a,currentScreen:s}=ny(),{status:l,execute:c,reset:d,enabled:h}=nF(),u=n&&s&&uS.includes(s)&&!i&&"ready"===l;if((0,o.useEffect)(()=>{u&&c()},[u]),(0,o.useEffect)(()=>{!n&&h&&d()},[n,h]),(!r||!a)&&"AWAITING_OAUTH_SCREEN"!==s&&"CROSS_APP_AUTH_SCREEN"!==s&&"TELEGRAM_AUTH_SCREEN"!==s)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(il,{}),(0,m.jsx)(ae,{}),(0,m.jsx)(uE,{children:(0,m.jsx)(nX,{})}),(0,m.jsx)(at,{}),(0,m.jsx)(iN,{})]});if(!s&&e)return(0,m.jsx)(hr,{open:e,onClose:t});if(!s)return null;let p=uA[s];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ik,{if:!!e,children:(0,m.jsx)(p,{})}),(0,m.jsx)(ik,{if:!e,children:(0,m.jsx)(hr,{open:e,onClose:t})})]})},uP=({isMfaVerifying:e,onMfaVerificationComplete:t})=>{let r=(0,o.useRef)(null),n=nH(r);return(0,m.jsx)(uO,{style:{height:n},id:"privy-modal-content",children:(0,m.jsx)("div",{ref:r,children:(0,m.jsx)(uT,{isMfaVerifying:e,onMfaVerificationComplete:t})})})},uN=()=>{let{closePrivyModal:e}=nZ(),{onUserCloseViaDialogOrKeybindRef:t}=ny();return{gracefulClosePrivyModal:(0,o.useCallback)(()=>{if(!t?.current)return e({shouldCallAuthOnSuccess:!1});t.current()},[e])}},uR=({open:e})=>{let{app:t}=ny(),{gracefulClosePrivyModal:r}=uN(),[n,i]=(0,o.useState)(!1);nG("configureMfa",{onMfaRequired:()=>{t?.mfa.noPromptOnMfaRequired||i(!0)}});let a=e||n;return t.render.standalone?(0,m.jsx)(uv,{children:(0,m.jsx)(uM,{id:"privy-modal-content",children:(0,m.jsx)(uT,{isMfaVerifying:n,onMfaVerificationComplete:()=>i(!1)})})}):(0,m.jsx)(uC,{open:a,id:"privy-dialog","aria-label":"log in or sign up","aria-labelledby":"privy-dialog-title",onClick:()=>r(),children:(0,m.jsx)(uv,{children:(0,m.jsx)(uP,{isMfaVerifying:n,onMfaVerificationComplete:()=>i(!1)})})})},uM=A.ZP.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 16px;
`,uO=(0,A.ZP)(uM)`
  transition: height 150ms ease-out;
  overflow: hidden;

  // Ensure the modal gets pinned to the top if it ever gets too tall
  max-height: calc(100svh - 48px);

  border-radius: var(--privy-border-radius-lg) var(--privy-border-radius-lg) 0 0;
  box-shadow: 0px 0px 36px rgba(55, 65, 81, 0.15);

  @media (min-width: 441px) {
    box-shadow: 0px 8px 36px rgba(55, 65, 81, 0.15);
    border-radius: var(--privy-border-radius-lg);
  }
`;function uI(e){let t=(0,o.useRef)(null),r=(0,o.useRef)();return(0,o.useEffect)(()=>{r.current?.remove(),r.current=function({botUsername:e,scriptHost:t}){let r=document.createElement("script"),{origin:n}=new URL(t);return r.async=!0,r.src=`${n}/js/telegram-login.js`,r.setAttribute("data-telegram-login",e),r.setAttribute("data-request-access","write"),r.setAttribute("data-lang","en"),r}(e),t.current?.after(r.current)},[e]),(0,m.jsx)("div",{ref:t,hidden:!0})}async function uW(e,t,r,n,i,a=!1){let o=a,s=async s=>{if(o&&t&&t.length>0){s===(a?0:1)?i("configureMfa","onMfaRequired",t):n.current?.reject(new a6("missing_or_invalid_mfa","MFA verification failed, retry."));let o=await new Promise((e,t)=>{r.current={resolve:e,reject:t},setTimeout(()=>{let e=new a6("mfa_timeout","Timed out waiting for MFA code");n.current?.reject(e),t(e)},3e5)});return await e(o)}return await e()},l=null;for(let e=0;e<4;e++)try{l=await s(e),n.current?.resolve(void 0);break}catch(e){if("missing_or_invalid_mfa"===e.type)o=!0;else throw n.current?.resolve(void 0),e}if(null===l){let e=new a6("mfa_verification_max_attempts_reached","Max MFA verification attempts reached");throw n.current?.reject(e),e}return l}var uL=(uY=0,()=>`id-${uY++}`);function uF(e){return void 0!==e.error}var uU=new class{constructor(){this.callbacks={}}enqueue(e,t){this.callbacks[e]=t}dequeue(e,t){let r=this.callbacks[t];if(!r)throw Error(`cannot dequeue ${e} event: no event found for id ${t}`);switch(delete this.callbacks[t],e){case"privy:iframe:ready":case"privy:wallet:create":case"privy:wallet:import":case"privy:wallet:connect":case"privy:wallet:recover":case"privy:wallet:rpc":case"privy:wallet:set-recovery":case"privy:mfa:verify":case"privy:mfa:init-enrollment":case"privy:mfa:submit-enrollment":case"privy:mfa:unenroll":case"privy:mfa:clear":case"privy:farcaster:init-signer":case"privy:farcaster:sign":case"privy:solana-wallet:create":case"privy:solana-wallet:connect":case"privy:solana-wallet:recover":case"privy:solana-wallet:rpc":return r;default:throw Error(`invalid wallet event type ${e}`)}}},uD=new Map,uZ=(e,t)=>"bigint"==typeof t?t.toString():t,uz=(e,t)=>`${e}${JSON.stringify(t,uZ)}`;function u$(e,t,r,n){let i=r.contentWindow;if(!i)throw Error("iframe not initialized");let a=uz(e,t);if("privy:wallet:create"===e){let e=uD.get(a);if(e)return e}let o=new Promise((r,a)=>{let o=uL();uU.enqueue(o,{resolve:r,reject:a}),i.postMessage({id:o,event:e,data:t},n)}).finally(()=>{uD.delete(a)});return uD.set(a,o),o}function uH(e){let t=(0,o.useRef)(null),r=(0,o.useRef)(e.mfaMethods),n=nY(),[i,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{r.current=e.mfaMethods},[e.mfaMethods]),(0,o.useEffect)(()=>{if(!i)return;let a=t.current;if(!a)return;function o(t){var r;t&&t.origin===e.origin&&"string"==typeof(r=t.data).event&&/^privy:.+/.test(r.event)&&function(e){switch(e.event){case"privy:iframe:ready":let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data);case"privy:wallet:create":let r=uU.dequeue(e.event,e.id);return uF(e)?r.reject(new a6(e.error.type,e.error.message)):r.resolve(e.data);case"privy:wallet:import":let n=uU.dequeue(e.event,e.id);return uF(e)?n.reject(new a6(e.error.type,e.error.message)):n.resolve(e.data);case"privy:wallet:connect":let i=uU.dequeue(e.event,e.id);return uF(e)?i.reject(new a6(e.error.type,e.error.message)):i.resolve(e.data);case"privy:wallet:recover":let a=uU.dequeue(e.event,e.id);return uF(e)?a.reject(new a6(e.error.type,e.error.message)):a.resolve(e.data);case"privy:wallet:rpc":let o=uU.dequeue(e.event,e.id);return uF(e)?o.reject(new a6(e.error.type,e.error.message)):o.resolve(e.data);case"privy:wallet:set-recovery":let s=uU.dequeue(e.event,e.id);return uF(e)?s.reject(new a6(e.error.type,e.error.message)):s.resolve(e.data);case"privy:mfa:verify":let l=uU.dequeue(e.event,e.id);return uF(e)?l.reject(new a6(e.error.type,e.error.message)):l.resolve(e.data);case"privy:mfa:init-enrollment":{let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:mfa:submit-enrollment":{let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:mfa:unenroll":{let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:mfa:clear":{let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:farcaster:init-signer":{let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:farcaster:sign":{let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:solana-wallet:create":let c=uU.dequeue(e.event,e.id);return uF(e)?c.reject(new a6(e.error.type,e.error.message)):c.resolve(e.data);case"privy:solana-wallet:connect":let d=uU.dequeue(e.event,e.id);return uF(e)?d.reject(new a6(e.error.type,e.error.message)):d.resolve(e.data);case"privy:solana-wallet:recover":let h=uU.dequeue(e.event,e.id);return uF(e)?h.reject(new a6(e.error.type,e.error.message)):h.resolve(e.data);case"privy:solana-wallet:rpc":{let t=uU.dequeue(e.event,e.id);return uF(e)?t.reject(new a6(e.error.type,e.error.message)):t.resolve(e.data)}default:console.warn("Unsupported wallet proxy method:",e)}}(t.data)}let s={create:t=>u$("privy:wallet:create",t,a,e.origin),import:t=>u$("privy:wallet:import",t,a,e.origin),connect:t=>u$("privy:wallet:connect",t,a,e.origin),recover:t=>uW(r=>u$("privy:wallet:recover",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,n,!t.recoveryMethod||"privy"===t.recoveryMethod),rpc:t=>uW(r=>u$("privy:wallet:rpc",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,n),createSolana:t=>u$("privy:solana-wallet:create",t,a,e.origin),connectSolana:t=>u$("privy:solana-wallet:connect",t,a,e.origin),recoverSolana:t=>u$("privy:solana-wallet:recover",t,a,e.origin),rpcSolana:t=>u$("privy:solana-wallet:rpc",t,a,e.origin),setRecovery:t=>uW(r=>u$("privy:wallet:set-recovery",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,n),verifyMfa:t=>uW(r=>u$("privy:mfa:verify",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,n,!0),initEnrollMfa:t=>uW(r=>u$("privy:mfa:init-enrollment",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,n),submitEnrollMfa:t=>uW(r=>u$("privy:mfa:submit-enrollment",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,n),unenrollMfa:t=>uW(r=>u$("privy:mfa:unenroll",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,n,!0),clearMfa:t=>u$("privy:mfa:clear",t,a,e.origin),initFarcasterSigner:t=>u$("privy:farcaster:init-signer",t,a,e.origin),signFarcasterMessage:t=>u$("privy:farcaster:sign",t,a,e.origin)};window.addEventListener("message",o);let l=new AbortController;return tf(()=>u$("privy:iframe:ready",{},a,e.origin),{abortSignal:l.signal}).then(()=>e.onLoad(s),(...t)=>{console.warn("Privy iframe failed to load: ",...t),e.onLoadFailed()}),()=>{window.removeEventListener("message",o),l.abort()}},[i]),(0,m.jsx)("iframe",{ref:t,width:"0",height:"0",style:{display:"none",height:"0px",width:"0px"},onLoad:()=>a(!0),src:ty(e.origin,`/apps/${e.appId}/embedded-wallets`,{caid:e.clientAnalyticsId,client_id:e.appClientId})})}var uB=class{constructor(e,t){this.walletProxy=e,this.address=t}async handleSignMessage(e){if(!e.params||"string"!=typeof e.params.message)throw Error("Message must be provided as a string for Solana signMessage RPC");return await u9({message:e.params.message})}async request(e){if(console.debug("EmbeddedSolanaProvider.request() called with args",e),!await uK())throw Error("User must be authenticated to use embedded Solana wallet");if(!await u8())throw new eK("Unable to connect to Solana embedded wallet");if("signMessage"===e.method)return await this.handleSignMessage(e);throw Error("Embedded Solana provider does not yet support this RPC method.")}};async function uq({url:e,popup:t}){return t.location=e,new Promise((e,r)=>{let n=setTimeout(()=>{r(new eK("Authorization request timed out after 2 minutes.")),i()},12e4);function i(){t?.close(),window.removeEventListener("message",s)}let a,o=setInterval(()=>{t?.closed&&!a&&(i(),clearInterval(o),clearTimeout(n),r(new eK("User rejected request")))},300);function s(t){t.data&&("PRIVY_OAUTH_RESPONSE"===t.data.type&&t.data.stateCode&&t.data.authorizationCode&&(clearTimeout(n),e(t.data),i()),"PRIVY_OAUTH_ERROR"===t.data.type&&(clearTimeout(n),r(new eK(t.data.error)),i()),"PRIVY_OAUTH_USE_BROADCAST_CHANNEL"===t.data.type&&((a=new BroadcastChannel("popup-privy-oauth")).onmessage=s))}window.addEventListener("message",s)})}async function uV({url:e,popup:t,provider:r}){return t.location=e,new Promise((e,r)=>{function n(){t?.close(),window.removeEventListener("message",i)}function i(t){t.data&&("PRIVY_OAUTH_RESPONSE"===t.data.type&&t.data.stateCode&&t.data.authorizationCode&&(e(t.data),n()),"https://cdn.apple-cloudkit.com"===t.origin&&t.data.ckSession&&(e({type:"PRIVY_OAUTH_RESPONSE",ckWebAuthToken:t.data.ckSession}),n()),"PRIVY_OAUTH_ERROR"===t.data.type&&(r(t.data.error),n()))}window.addEventListener("message",i)})}var uG=e=>({id:e.id,raw_id:e.rawId,response:{client_data_json:e.response.clientDataJSON,authenticator_data:e.response.authenticatorData,signature:e.response.signature,user_handle:e.response.userHandle},authenticator_attachment:e.authenticatorAttachment,client_extension_results:{app_id:e.clientExtensionResults.appid,cred_props:e.clientExtensionResults.credProps,hmac_create_secret:e.clientExtensionResults.hmacCreateSecret},type:e.type});function uK(){return uQ?uQ.getAccessToken():Promise.resolve(to.get(tF)||null)}var uY,uQ,uX,uJ,u0,u1,u2,u3,u4=(e,t,r)=>uX(e,t,r),u5=(e,t)=>uJ(e,t),u6=(e,t)=>u0(e,t),u7=()=>u1(),u8=()=>u2(),u9=({message:e})=>u3({message:e}),pe=()=>{let e=new URLSearchParams(window.location.search).get("privy_token");if(!e)return;to.put(tH,e);let t=new URL(window.location.href);t.searchParams.delete("privy_token"),window.history.pushState({},"",t)},pt=({config:e,...t})=>{var r;if(!("string"==typeof(r=t.appId)&&25===r.length))throw new eK("Cannot initialize the Privy provider with an invalid Privy app ID");uQ||(uQ=new nO({appId:t.appId,appClientId:t.clientId,apiUrl:t.apiUrl}));let n=Object.assign({},e);return void 0!==t.createPrivyWalletOnLogin&&n.embeddedWallets?.createOnLogin===void 0&&(n.embeddedWallets||(n.embeddedWallets={}),n.embeddedWallets.createOnLogin=t.createPrivyWalletOnLogin?"users-without-wallets":"off"),void 0!==t.createPrivyWalletOnLogin&&e?.embeddedWallets?.createOnLogin&&console.warn("Both `createPrivyWalletOnLogin` and `config.embeddedWallets.createOnLogin` are set. `createPrivyWalletOnLogin` is deprecated and should be removed."),(0,m.jsx)(nd,{client:uQ,clientConfig:n,legacyCreateEmbeddedWalletFlag:t.createPrivyWalletOnLogin,children:(0,m.jsx)(pr,{...t,client:uQ})})},pr=e=>{let t=e.client,[h,u]=(0,o.useState)(!1),[p,g]=(0,o.useState)(!1),[f,y]=(0,o.useState)(!1),[w,x]=(0,o.useState)(null),[v,C]=(0,o.useState)([]),[b,_]=(0,o.useState)(null),j=(0,o.useRef)(v),[k,E]=(0,o.useState)(!1),[A,S]=(0,o.useState)(null),[T,P]=(0,o.useState)(!1),[N,R]=(0,o.useState)({status:"disconnected",connectedWallet:null,connectError:null,connector:null,connectRetry:np}),[M,O]=(0,o.useState)({status:"initial"}),[I,W]=(0,o.useState)(null),[L,F]=(0,o.useState)(null),U=nh(),D=nu(),[Z,z]=(0,o.useState)(!0),[$,H]=(0,o.useState)({}),[B,q]=(0,o.useState)(null),[V,G]=(0,o.useState)(null),[K,Y]=(0,o.useState)(!1),[Q,X]=(0,o.useState)(!1),J=(0,o.useRef)(null),ee=(0,o.useRef)(null),et=(0,o.useRef)(nB),[er,en]=(0,o.useState)(!1);t.onStoreToken=e=>{e&&nK(et,"accessToken","onAccessTokenGranted",e)},t.onDeleteToken=()=>{x(null),y(!1),nK(et,"accessToken","onAccessTokenRemoved")};let ei=(0,o.useRef)(null),ea=(0,o.useRef)(null),eo=e=>{S(e),setTimeout(()=>{u(!0)},15),t.createAnalyticsEvent({eventName:"modal_open",payload:{initialScreen:e}})},es=e=>{"off"!==U.embeddedWallets.createOnLogin&&z(!0),eo(e)};(0,o.useEffect)(()=>{let e=rb(w);e&&L&&_({address:e.address,connectedAt:Date.now(),walletClientType:"privy",connectorType:"embedded",meta:{name:"Privy Wallet",icon:rG,id:"io.privy.solana.wallet"},getProvider:async()=>new uB(L,e.address)})},[L,w]),(0,o.useEffect)(()=>{if(!w){t.connectors?.removeEmbeddedWalletConnector();return}let r=rC(w),n=r_(w);if(r||t.connectors?.removeEmbeddedWalletConnector(),n||t.connectors?.removeImportedWalletConnector(),!t.connectors){console.debug("Failed to add embedded wallet connector: Client connectors not initialized");return}if(!L){console.debug("Failed to add embedded wallet connector: Wallet proxy not initialized");return}r&&t.connectors.addEmbeddedWalletConnector(L,r.address,U.defaultChain,e.appId),n&&t.connectors.addImportedWalletConnector(L,n.address,U.defaultChain,e.appId)},[L,w]),(0,o.useEffect)(()=>{L&&V?.(L)},[L]),(0,o.useEffect)(()=>{(async()=>{if(!U.customAuth?.enabled)return;z(!0);let{getCustomAccessToken:e,isLoading:r}=U.customAuth;if(!(!p||r))try{let r=await e();if(!r&&f){await eP.logout();return}if(!r||f)return;t.startAuthFlow(new te(r));let{user:n,isNewUser:i}=await t.authenticate();if(!n){await eP.logout();return}x(n||null),E(i||!1),y(!0),X(!0)}catch(e){console.warn(e),f&&await eP.logout()}})()},[U.customAuth?.enabled,U.customAuth?.getCustomAccessToken,U.customAuth?.isLoading,p,f]),(0,o.useEffect)(()=>{Q&&L&&w&&rk(w,U.embeddedWallets.createOnLogin)&&(X(!1),ev(w,3e4).catch(console.error))},[Q&&L&&w]),(0,o.useEffect)(()=>{async function e(){let e,r=el(),n=ec();pe();let i=(0,a.M)();t.initializeConnectorManager({walletConnectCloudProjectId:U.walletConnectCloudProjectId,rpcConfig:U.rpcConfig,chains:U.chains,defaultChain:U.defaultChain,store:i,walletList:U.appearance.walletList,shouldEnforceDefaultChainOnConnect:U.shouldEnforceDefaultChainOnConnect,externalWalletConfig:U.externalWallets,appName:U.name??"Privy"}),t.connectors?.on("connectorInitialized",()=>{e&&clearTimeout(e);let r=t.connectors.walletConnectors.length,n=t.connectors.walletConnectors.reduce((e,t)=>e+(t.initialized?1:0),0);n===r?en(!0):e=setTimeout(()=>{console.debug({message:"Unable to initialize all expected connectors before timeout",initialized:n,expected:r}),en(!0)},1500)}),t.connectors?.initialize().then(()=>{ep()});let o=await t.getAuthenticatedUser(),s=!!o;if(U.customAuth?.enabled||(y(!!o),o&&nK(et,"login","onComplete",o,!1,!0,null,null),x(o)),r){ea.current=s?"link":"login";return}if(n&&!s){ea.current="login",es("TELEGRAM_AUTH_SCREEN");return}eN.setReadyToTrue(!!o)}!p&&D&&e()},[t,B,p,D]),(0,o.useEffect)(()=>{if(p){if(!w||!w.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType)){Y(!0);return}Y(!!v.find(e=>"privy"===e.walletClientType))}},[p,w,v]);let el=()=>{let e=function(){let e=new URLSearchParams(window.location.search),t=e.get("privy_oauth_code"),r=e.get("privy_oauth_state"),n=e.get("privy_oauth_provider");if(!t||!r||!n)return{inProgress:!1};let i=!1;try{i=!!window.opener.location.origin}catch{}return{inProgress:!0,authorizationCode:t,stateCode:r,provider:n,headless:t6(),popupFlow:null!==window.opener&&i}}();if(e.inProgress&&e.popupFlow){if(window.opener.location.origin!==window.location.origin){window.opener.postMessage({type:"PRIVY_OAUTH_ERROR",error:"Origins between parent and child windows do not match."});return}if("error"===e.authorizationCode){window.opener.postMessage({type:"PRIVY_OAUTH_ERROR",error:"Something went wrong. Try again."});return}window.opener.postMessage({type:"PRIVY_OAUTH_RESPONSE",stateCode:e.stateCode,authorizationCode:e.authorizationCode});return}return e.inProgress&&e.provider.startsWith("privy:")&&!e.popupFlow&&(new BroadcastChannel("popup-privy-oauth").postMessage({type:"PRIVY_OAUTH_RESPONSE",stateCode:e.stateCode,authorizationCode:e.authorizationCode}),window.close()),!!e.inProgress&&!e.headless&&(t.startAuthFlow(new t7(e)),es("AWAITING_OAUTH_SCREEN"),!0)},ec=()=>{let e;let r=(e=function(){let e=new URLSearchParams(window.location.search),t=Number(e.get("id")||""),r=e.get("hash"),n=Number(e.get("auth_date")||""),i=e.get("first_name"),a=e.get("last_name")||void 0,o=e.get("username")||void 0,s=e.get("photo_url")||void 0;if(!(!t||!i||!n||!r))return{id:t,first_name:i,last_name:a,username:o,photo_url:s,auth_date:n,hash:r}}())?(rw(),{...e,flowType:"login-url"}):(e=function(){let e=window.location.hash;if(!e||!e.startsWith("#tgWebAppData"))return;let t=new URLSearchParams(decodeURIComponent(e.replace("#tgWebAppData=",""))),r=t.get("query_id"),n=t.get("user"),i=Number(t.get("auth_date")||""),a=t.get("hash");if(!(!r||!n||!i||!a))return{query_id:r,user:n,auth_date:i,hash:a}}())?(rw(),{...e,flowType:"web-app"}):void 0;if(!r||!U.loginMethods.telegram||!U.loginConfig.telegramAuthConfiguration?.seamlessAuthEnabled)return;let n=new rf;return t.startAuthFlow(n),"login-url"===r.flowType&&(n.meta.telegramWebAppData=void 0,n.meta.telegramAuthResult={id:r.id,first_name:r.first_name,last_name:r.last_name,auth_date:r.auth_date,username:r.username,photo_url:r.photo_url,hash:r.hash}),"web-app"===r.flowType&&(n.meta.telegramAuthResult=void 0,n.meta.telegramWebAppData={query_id:r.query_id,user:r.user,auth_date:r.auth_date,hash:r.hash}),!0},ed=async(e,r,n,i)=>{eh(await t.connectors?.createWalletConnector(e,r)||null,r,n,i)};async function eh(e,t,r,n){if(!e)return R({status:"disconnected",connectedWallet:null,connectError:new eQ("Unable to connect to wallet."),connector:null,connectRetry:np}),n?.(null,r);R({status:"disconnected",connectedWallet:null,connectError:null,connector:e,connectRetry:np}),e instanceof nx&&t&&await e.resetConnection(t),R({connector:e,status:"connecting",connectedWallet:null,connectError:null,connectRetry:()=>eh(e,t,r,n)});try{let t=await e.connect({showPrompt:!0});if(U.shouldEnforceDefaultChainOnConnect&&!U.chains.find(e=>e.id===Number(t?.chainId.replace("eip155:","")))&&!(t?.connectorType==="wallet_connect_v2"&&t?.walletClientType==="metamask")){R(t=>({...t,connector:e,status:"switching_to_supported_chain",connectedWallet:null,connectError:null,connectRetry:np}));try{await t?.switchChain(U.defaultChain.id),t&&(t.chainId=tC(tx(U.defaultChain.id)))}catch{console.warn(`Unable to switch to default chain: ${U.defaultChain.id}`)}}return R(e=>({...e,status:"connected",connectedWallet:t,connectError:null,connectRetry:np})),t&&nK(et,"connectWallet","onSuccess",t),n?.(t,r)}catch(e){return e instanceof eV?(console.warn(e.cause?e.cause:e.message),nK(et,"connectWallet","onError",e.privyErrorCode||"generic_connect_wallet_error")):(console.warn(e),nK(et,"connectWallet","onError","unknown_connect_wallet_error")),R(t=>({...t,status:"disconnected",connectedWallet:null,connectError:e})),n?.(null,r)}}let eu=async(e,r)=>{if(null===e)return;let n=new rp(e,t,r);t.startAuthFlow(n)},ep=()=>{let e=new URLSearchParams(window.location.search),r=e.get("privy_connector"),n=e.get("privy_wallet_client");if(!r||!n)return;if("phantom"!==n||tc()||es("LOGIN_FAILED_SCREEN"),!t.connectors)throw new eK("Connector not initialized");eo("AWAITING_CONNECTION");let i=new URL(window.location.href);i.searchParams.delete("privy_connector"),i.searchParams.delete("privy_wallet_client"),window.history.pushState({},"",i),ed(r,n,void 0,eu)};(0,o.useEffect)(()=>{p&&f&&null===w&&t.getAuthenticatedUser().then(x)},[p,f,w,t]);let em=e=>{if(!f)throw nK(et,"linkAccount","onError","must_be_authenticated",{linkMethod:e}),new eK("User must be authenticated before linking an account.")},eg=()=>{em("siwe"),ei.current="siwe",ea.current="link",eo("LINK_WALLET_SCREEN")},ef=e=>{if(!f||!w)return!1;if("privy"===e.walletClientType)return!0;for(let t of w.linkedAccounts)if("wallet"===t.type&&t.address===e.address&&"privy"!==t.walletClientType)return!0;return!1},ey=async e=>{if(!t.connectors)throw new eK("Connector not initialized");let r=t.connectors.findWalletConnector(e.connectorType,e.walletClientType)||null;(R(t=>({...t,connector:r,status:"connected",connectedWallet:e,connectError:null,connectRetry:np})),U.captchaEnabled&&!f)?(H({captchaModalData:{callback:t=>eu(e,t),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_CONNECTION",onErrorNavigateTo:"ERROR_SCREEN"}}),es("CAPTCHA_SCREEN")):(await eu(e),es("AWAITING_CONNECTION"))},ew=async(e,r)=>{let{signedUrl:n,externalTransactionId:i}=await co(t,e,r??{},U.appearance.palette,U.fundingMethodConfig?.moonpay.useSandbox??!1);return{signedUrl:n,externalTransactionId:i}},ex=()=>{C(e=>{let r=t.connectors?.wallets.map(e=>({...e,linked:ef(e),loginOrLink:async()=>{if(!await e.isConnected())throw new eK("Wallet is not connected");if("embedded"===e.connectorType&&"privy"===e.walletClientType)throw new eK("Cannot link or login with embedded wallet");ey(e)},fund:async t=>{await eN.fundWallet(e.address,t)},unlink:async()=>{if(!f)throw new eK("User is not authenticated.");if("embedded"===e.connectorType&&"privy"===e.walletClientType)throw new eK("Cannot unlink an embedded wallet");x(await t.unlinkWallet(e.address))}}))||[];return n_(e,r)?e:r})};(0,o.useEffect)(()=>{ex()},[w?.linkedAccounts,f,p]),(0,o.useEffect)(()=>{if(p){if(!t.connectors)throw new eK("Connector not initialized");ex(),t.connectors.on("walletsUpdated",ex)}},[p]),(0,o.useEffect)(()=>{if(!v[0])return;let e=v[0],t=j.current.find(t=>t.address===e.address),r;if(r="privy"===e.walletClientType?w?.linkedAccounts.find(t=>"wallet"===t.type&&t.address===e.address&&"privy"===t.walletClientType):w?.linkedAccounts.find(t=>"wallet"===t.type&&t.address===e.address&&"privy"!==t.walletClientType),!t&&r){let e=Object.assign({},w);e.wallet=r&&{address:r.address,chainType:r.chainType,chainId:r.chainId,walletClient:r.walletClient,walletClientType:r.walletClientType,connectorType:r.connectorType,imported:r.imported},x(e)}j.current=v},[v]);let ev=async(e,t)=>{if(rC(e))throw nK(et,"createWallet","onError","embedded_wallet_already_exists"),Error("Only one Privy wallet per user is currently allowed");let[r,n]=await Promise.all([eN.initializeWalletProxy(t),uK()]);if(!r&&U.customAuth?.enabled)throw nK(et,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to connect to wallet proxy");if(!r||!n||U.embeddedWallets?.requireUserOwnedRecoveryOnCreate)return new Promise((e,t)=>{z(!0),H({createWallet:{onSuccess:t=>{nK(et,"createWallet","onSuccess",t),e(t)},onFailure:e=>{nK(et,"createWallet","onError","unknown_embedded_wallet_error"),t(e)},callAuthOnSuccessOnClose:!1}}),eo("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")});{await r.create({accessToken:n});let e=rC(await eN.refreshUser());if(!e)throw nK(et,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to create wallet");return nK(et,"createWallet","onSuccess",e),e}},eC=e=>{if(!U.chains.map(e=>e.id).includes(e))throw new eQ(`Chain ID ${e} is not supported. It must be added to the config.supportedChains property of the PrivyProvider.`,"unsupported_chain_id")},eb=(r,i,a)=>new Promise(async(o,s)=>{let{requesterAppId:h}=i||{};if(!f||!w){nK(et,"sendTransaction","onError","must_be_authenticated"),s(Error("User must be authenticated before signing with a Privy wallet"));return}let u=r.from,p=u?w?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&n.Kn(e.address)===n.Kn(u)):rC(w);if(!p){nK(et,"sendTransaction","onError","embedded_wallet_not_found"),s(Error("Must have a Privy wallet before signing"));return}z(!0);let m=t.connectors?.findWalletConnector("embedded","privy")?.proxyProvider,g=r.chainId?Number(r.chainId):m.chainId;eC(g);let y=Object.assign({},r,{chainId:g}),x=async()=>{let t=await uK();if(!t||!L){nK(et,"sendTransaction","onError","embedded_wallet_not_found"),s(Error("Must have valid access token and Privy wallet to send transaction"));return}try{if(!await eN.recoverEmbeddedEthereumWallet()){nK(et,"sendTransaction","onError","unknown_connect_wallet_error"),s(Error("Unable to connect to wallet"));return}let r=tk(y.chainId,U.chains,U.rpcConfig,{appId:e.appId}),n=await (0,l.vT)(p.address,y,r);if(U.embeddedWallets.noPromptOnSignature){let{totalGasEstimate:e}=await (0,c.gM)(n,r),{hasSufficientFunds:t}=await sD(p.address,n,e,r);if(!t)throw new rW(new rI("Wallet has insufficient funds for this transaction.",d.M_.E32603_DEFAULT_INTERNAL_ERROR.eipCode))}let i=await sU(t,p.address,L,n,r,h);nK(et,"sendTransaction","onSuccess",i),o(i)}catch(e){nK(et,"sendTransaction","onError","transaction_failure"),s(e)}};if(U.embeddedWallets.noPromptOnSignature)i&&console.warn("uiOptions defined with `noPromptOnSignature` set to true in app config"),x();else{let e=eA({address:p.address,fundWalletConfig:a,chainIdOverride:y.chainId,comingFromSendTransactionScreen:!0});H({connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN",onFailure:e=>{nK(et,"sendTransaction","onError","unknown_connect_wallet_error"),s(e)}},sendTransaction:{transactionRequest:y,onSuccess:e=>{nK(et,"sendTransaction","onSuccess",e),o(e)},onFailure:e=>{nK(et,"sendTransaction","onError","transaction_failure"),s(e)},uiOptions:i||{},fundWalletConfig:a,requesterAppId:h},funding:e}),eo("EMBEDDED_WALLET_CONNECTING_SCREEN")}});function e_(){return new Promise(async(e,t)=>{let r=await uK();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");try{await L.verifyMfa({accessToken:r}),e()}catch(e){t(e)}})}let ej=e=>e?.linkedAccounts.filter(e=>null!==e.latestVerifiedAt&&!("wallet"===e.type&&"privy"===e.walletClientType)).sort((e,t)=>t.latestVerifiedAt.getTime()-e.latestVerifiedAt.getTime())[0],ek=e=>{let t=w?.linkedAccounts.filter(t=>t.type===e).length??0,{displayName:r,loginMethod:n}=cT(e);if("passkey"===e&&t>=5||"passkey"!==e&&t>=1)throw nK(et,"linkAccount","onError","cannot_link_more_of_type",{linkMethod:n}),new eK(`User already has an account of type ${r} linked.`)},eE=()=>{if(!U.loginConfig.telegramAuthConfiguration?.linkEnabled)throw nK(et,"linkAccount","onError","cannot_link_more_of_type",{linkMethod:"telegram"}),new eK("User can't link an account because Telegram linking is disabled.")},eA=({address:e,fundWalletConfig:t,methodScreen:r,chainIdOverride:n=null,comingFromSendTransactionScreen:i=!1})=>{if(!U.fundingConfig||0===U.fundingConfig.methods.length)return;let a=ca(t)&&t.amount?t.amount:U.fundingConfig.defaultRecommendedAmount,o=ca(t)&&t.chain?t.chain.id:sB(U.fundingConfig.defaultRecommendedCurrency.chain),s=ca(t)&&t.chain?t.chain:U.chains.find(e=>e.id===o);if(n&&U.chains.find(e=>e.id===n)&&(s=U.chains.find(e=>e.id===n)),!s)throw new eK("Funding chain is not in PrivyProvider chains list");return{address:e,amount:a,chain:s,methodScreen:r,comingFromSendTransactionScreen:i,...t&&void 0!==t.config&&void 0!==t.provider?{moonpayConfigOverride:t.config}:{}}};async function eS({showAutomaticRecovery:e=!1,legacySetWalletPasswordFlow:t=!1}){S(null);let r=t?"setWalletPassword":"setWalletRecovery";if(!f||!w)throw nK(et,r,"onError","must_be_authenticated"),Error("User must be authenticated before adding recovery method to Privy wallet");let n=rC(w);if(!n||!L)throw nK(et,r,"onError","embedded_wallet_not_found"),Error("Must have a Privy wallet to add a recovery method");if(rb(w))throw Error("Cannot set user-controlled recovery for user with Solana.");try{await e_()}catch(e){throw nK(et,r,"onError","missing_or_invalid_mfa"),e}return new Promise((i,a)=>{z(!0);let o={onSuccess:e=>{nK(et,r,"onSuccess","user-passcode",e),i(e)},onFailure:e=>{nK(et,r,"onError","user_exited_set_password_flow"),a(e)},callAuthOnSuccessOnClose:!1},s="user-passcode"===n.recoveryMethod;H({setWalletPassword:o,createWallet:o,connectWallet:{onCompleteNavigateTo:oi({walletAction:"update",availableRecoveryMethods:U.embeddedWallets.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:t,isResettingPassword:s,showAutomaticRecovery:e}),shouldForceMFA:!1,onFailure:e=>{nK(et,r,"onError","unknown_connect_wallet_error"),a(e)}},recoverySelection:{isInAccountCreateFlow:!1,isResettingPassword:s}}),eo("EMBEDDED_WALLET_CONNECTING_SCREEN")})}async function eT({appId:e}){em(`privy:${e}`),ei.current=`privy:${e}`,ea.current="link";let r=window.open(void 0,void 0,s5({w:440,h:680}));return t.createAnalyticsEvent({eventName:"cross_app_auth_started",payload:{appId:e}}),new Promise(async(n,i)=>{let{name:a,logoUrl:o}=await s0({api:t.api,providerAppId:e,requesterAppId:U.id});H({crossAppAuth:{appId:e,name:a,logoUrl:o,popup:r,onSuccess:n,onError:i}}),es("CROSS_APP_AUTH_SCREEN")})}let eP={ready:p,authenticated:f,user:w,walletConnectors:t.connectors||null,connectWallet:e=>{e&&"suggestedAddress"in e&&e.suggestedAddress&&W((0,n.Kn)(e.suggestedAddress)),eo(f?"CONNECT_ONLY_AUTHENTICATED_SCREEN":"CONNECT_ONLY_LANDING_SCREEN")},importWallet:async({privateKey:e})=>{em("siwe");let[t,r]=await Promise.all([eN.initializeWalletProxy(15e3),uK()]);if(t&&r){await t.import({privateKey:e,accessToken:r});let n=r_(await eN.refreshUser());if(!n)throw nK(et,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to import wallet");return nK(et,"createWallet","onSuccess",n),n}throw new eK("User is not authenticated")},linkWallet:eg,linkCrossAppAccount:eT,linkEmail:()=>{em("email"),ek("email"),ei.current="email",ea.current="link",eo("LINK_EMAIL_SCREEN")},linkPhone:()=>{em("sms"),ek("phone"),ei.current="sms",ea.current="link",eo("LINK_PHONE_SCREEN")},linkGoogle:async()=>{em("google"),ek("google_oauth"),ea.current="link",await eN.initLoginWithOAuth("google")},linkTwitter:async()=>{em("twitter"),ek("twitter_oauth"),ea.current="link",await eN.initLoginWithOAuth("twitter")},linkDiscord:async()=>{em("discord"),ek("discord_oauth"),ea.current="link",await eN.initLoginWithOAuth("discord")},linkGithub:async()=>{em("github"),ek("github_oauth"),ea.current="link",await eN.initLoginWithOAuth("github")},linkSpotify:async()=>{em("spotify"),ek("spotify_oauth"),ea.current="link",await eN.initLoginWithOAuth("spotify")},linkInstagram:async()=>{em("instagram"),ek("instagram_oauth"),ea.current="link",await eN.initLoginWithOAuth("instagram")},linkTiktok:async()=>{em("tiktok"),ek("tiktok_oauth"),ea.current="link",await eN.initLoginWithOAuth("tiktok")},linkLinkedIn:async()=>{em("linkedin"),ek("linkedin_oauth"),ea.current="link",await eN.initLoginWithOAuth("linkedin")},linkApple:async()=>{em("apple"),ek("apple_oauth"),ea.current="link",await eN.initLoginWithOAuth("apple")},linkPasskey:async()=>{em("passkey"),ek("passkey"),await eN.initLinkWithPasskey(),eo("LINK_PASSKEY_SCREEN")},linkTelegram:async()=>{em("telegram"),ek("telegram"),eE(),ea.current="link",ei.current="telegram",await eN.initLoginWithTelegram(),eo("TELEGRAM_AUTH_SCREEN")},linkFarcaster:async()=>{em("farcaster"),ek("farcaster"),await eN.initLoginWithFarcaster(),ea.current="link",ei.current="farcaster",eo("AWAITING_FARCASTER_CONNECTION")},updateEmail:()=>{if(em("email"),!w?.email)throw new eK("User does not have an email linked to their account.");ea.current="link",ei.current="email",eo("UPDATE_EMAIL_SCREEN")},updatePhone:()=>{if(em("sms"),!w?.phone)throw new eK("User does not have a phone number linked to their account.");ea.current="link",ei.current="sms",eo("UPDATE_PHONE_SCREEN")},login:async e=>{e&&"target"in e&&e&&(e=void 0);let t="Attempted to log in, but user is already logged in. Use a `link` helper instead.";if(!p){let e=await new Promise(e=>{q(t=>e.bind(t))});if(q(null),e){console.warn(t);return}}if(w&&!w.isGuest){console.warn(t);return}ea.current="login",H({login:e}),es("LANDING")},connectOrCreateWallet:async()=>{if(p||(await new Promise(e=>{q(()=>e)}),q(null)),f){console.warn("User must be unauthenticated to `connectOrCreateWallet`");return}if(v[0]){console.warn("User must have no connected wallets to `connectOrCreateWallet`");return}es("CONNECT_OR_CREATE")},logout:async()=>{if(w&&t.clearProviderAcccessTokens(w),S(null),await t.logout(),w&&L)try{await L.clearMfa({userId:w.id})}catch{}x(null),y(!1),nK(et,"logout","onSuccess"),ea.current=null,ei.current=null,u(!1),to.del(tB),to.del(tq(U.id))},getAccessToken:()=>t.getAccessToken(),getEthereumProvider:()=>{if(!w||!w.wallet)return new rF;let e=v.find(e=>w.wallet&&e.address===w.wallet.address),r=t.connectors?.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return e&&r?r.proxyProvider:new rF},getEthersProvider:()=>{if(!w||!w.wallet)return new i.Q(new rZ(new rF));let e=v.find(e=>w.wallet&&e.address===w.wallet.address),r=t.connectors?.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return new i.Q(new rZ(e&&r?r.proxyProvider:new rF))},getWeb3jsProvider:()=>{if(!w||!w.wallet)return new rz(new rF);let e=v.find(e=>w.wallet&&e.address===w.wallet.address),r=t.connectors?.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return new rz(e&&r?r.proxyProvider:new rF)},unlinkWallet:async e=>{let r=await t.unlinkWallet(e);return x(r),r},unlinkEmail:async e=>{let r=await t.unlinkEmail(e);return x(r),r},unlinkPhone:async e=>{let r=await t.unlinkPhone(e);return x(r),r},unlinkGoogle:async e=>{let r=await t.unlinkOAuth("google",e);return x(r),r},unlinkTwitter:async e=>{let r=await t.unlinkOAuth("twitter",e);return x(r),r},unlinkDiscord:async e=>{let r=await t.unlinkOAuth("discord",e);return x(r),r},unlinkGithub:async e=>{let r=await t.unlinkOAuth("github",e);return x(r),r},unlinkSpotify:async e=>{let r=await t.unlinkOAuth("spotify",e);return x(r),r},unlinkInstagram:async e=>{let r=await t.unlinkOAuth("instagram",e);return x(r),r},unlinkTiktok:async e=>{let r=await t.unlinkOAuth("tiktok",e);return x(r),r},unlinkLinkedIn:async e=>{let r=await t.unlinkOAuth("linkedin",e);return x(r),r},unlinkApple:async e=>{let r=await t.unlinkOAuth("apple",e);return x(r),r},unlinkFarcaster:async e=>{let r=await t.unlinkFarcaster(e);return x(r),r},unlinkTelegram:async e=>{let r=await t.unlinkTelegram(e);return x(r),r},unlinkPasskey:async e=>{let r=await t.unlinkPasskey(e);return x(r),r},unlinkCrossAppAccount:async({subject:e})=>{let r=w?.linkedAccounts.find(t=>"cross_app"===t.type&&t.subject===e)?.providerApp;if(!r)throw new eK("Invalid subject");t.storeProviderAccessToken(r.id,null);let n=await t.unlinkOAuth(`privy:${r.id}`,e);return x(n),n},setActiveWallet:async e=>{let t=v.find(t=>(0,n.Kn)(t.address)===(0,n.Kn)(e)),r=w?.linkedAccounts.find(t=>"wallet"===t.type&&n.Kn(t.address)===n.Kn(e));if(t&&await t.isConnected()){if(t.linked){let e=Object.assign({},w);e.wallet=r&&{address:r.address,chainType:r.chainType,chainId:r.chainId,walletClient:r.walletClient,walletClientType:r.walletClientType,connectorType:r.connectorType,imported:r.imported},x(e)}else t.loginOrLink()}else W(e),eg()},forkSession:()=>t.forkSession(),createWallet:async()=>{if(!f||!w)throw nK(et,"createWallet","onError","must_be_authenticated"),Error("User must be authenticated before creating a Privy wallet");return ev(w,15e3)},setWalletRecovery:async e=>eS({legacySetWalletPasswordFlow:!1,showAutomaticRecovery:e?.showAutomaticRecovery??!1}),setWalletPassword:async()=>eS({legacySetWalletPasswordFlow:!0,showAutomaticRecovery:!1}),signMessage:(e,r,i)=>new Promise(async(a,o)=>{let{requesterAppId:s}=r||{};if(!f||!w){nK(et,"signMessage","onError","must_be_authenticated"),o(Error("User must be authenticated before signing with a Privy wallet"));return}let l=i?w?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&n.Kn(e.address)===n.Kn(i)):rC(w);if(!l){nK(et,"signMessage","onError","embedded_wallet_not_found"),o(Error("Must have a Privy wallet before signing"));return}if("string"!=typeof e||e.length<1){nK(et,"signMessage","onError","invalid_message"),o(Error("Message must be a non-empty string"));return}z(!0);let c=async()=>{if(!f)throw Error("User must be authenticated before signing with a Privy wallet");let r=await uK();if(!L||!r||!await eN.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_sign_message_started",payload:{walletAddress:l.address,requesterAppId:s}});let{response:n}=await L.rpc({accessToken:r,address:l.address,requesterAppId:s,request:{method:"personal_sign",params:[e,l.address]}}),i=n.data;return t.createAnalyticsEvent({eventName:"embedded_wallet_sign_message_completed",payload:{walletAddress:l.address,requesterAppId:s}}),i};if(U.embeddedWallets.noPromptOnSignature){r&&console.warn("uiOptions defined with `noPromptOnSignature` set to true in app config");try{let e=await c();nK(et,"signMessage","onSuccess",e),a(e)}catch(e){nK(et,"signMessage","onError","unable_to_sign"),o(e??new rW("Unable to sign message"))}}else H({signMessage:{method:"personal_sign",data:e,confirmAndSign:c,onSuccess:e=>{nK(et,"signMessage","onSuccess",e),a(e)},onFailure:e=>{nK(et,"signMessage","onError","unable_to_sign"),o(e)},uiOptions:r||{}},connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_SIGN_REQUEST_SCREEN",onFailure:e=>{nK(et,"signMessage","onError","unknown_connect_wallet_error"),o(e)},address:l.address}}),eo("EMBEDDED_WALLET_CONNECTING_SCREEN")}),signTypedData:(e,r)=>new Promise(async(n,i)=>{let{requesterAppId:a}=r||{};if(!f||!w){nK(et,"signTypedData","onError","must_be_authenticated"),i(Error("User must be authenticated before signing with a Privy wallet"));return}let o=rC(w);if(!o){nK(et,"signTypedData","onError","embedded_wallet_not_found"),i(Error("Must have a Privy wallet before signing"));return}z(!0);let s=tE(e),l=async()=>{if(!f)throw Error("User must be authenticated before signing with a Privy wallet");let e=await uK();if(!L||!e||!await eN.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_sign_typed_data_started",payload:{walletAddress:o.address,requesterAppId:a}});let{response:r}=await L.rpc({accessToken:e,address:o.address,requesterAppId:a,request:{method:"eth_signTypedData_v4",params:[o.address,s]}}),n=r.data;return t.createAnalyticsEvent({eventName:"embedded_wallet_sign_typed_data_completed",payload:{walletAddress:o.address,requesterAppId:a}}),n};if(U.embeddedWallets.noPromptOnSignature||U.legacyWalletUiConfig){r&&console.warn("uiOptions defined with `noPromptOnSignature` set to true in app config");try{let e=await l();nK(et,"signTypedData","onSuccess",e),n(e)}catch(e){nK(et,"signTypedData","onError","unable_to_sign"),i(e??new rW("Unable to sign message"))}}else H({signMessage:{method:"eth_signTypedData_v4",data:s,confirmAndSign:l,onSuccess:e=>{nK(et,"signTypedData","onSuccess",e),n(e)},onFailure:e=>{nK(et,"signTypedData","onError","unable_to_sign"),i(e)},uiOptions:r||{}},connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_SIGN_REQUEST_SCREEN",onFailure:e=>{nK(et,"signMessage","onError","unknown_connect_wallet_error"),i(e)}}}),eo("EMBEDDED_WALLET_CONNECTING_SCREEN")}),sendTransaction:async(e,t,r)=>sZ(await (await eb(e,t,r)).wait()),exportWallet:()=>new Promise(async(r,n)=>{if(!f||!w){n(Error("User must be authenticated before exporting their Privy wallet"));return}if(!rC(w)){n(Error("Must have a Privy wallet before exporting"));return}if(z(!0),H($),!await uK()||!L){n(Error("Must have valid access token to enroll in MFA"));return}if(!L){n(Error("Must have a Privy wallet before exporting"));return}H({keyExport:{appId:e.appId,appClientId:e.clientId,origin:t.apiUrl,onSuccess:r,onFailure:n},connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_KEY_EXPORT_SCREEN",onFailure:n,shouldForceMFA:!0}}),eo("EMBEDDED_WALLET_CONNECTING_SCREEN")}),promptMfa:e_,async init(e){switch(e){case"sms":await t.initMfaSmsVerification();return;case"passkey":return await t.initMfaPasskeyVerification();case"totp":return;default:throw Error(`Unsupported MFA method: ${e}`)}},async submit(e,t){switch(e){case"totp":case"sms":if("string"!=typeof t)throw new eK("Invalid MFA code");J.current?.resolve({mfaMethod:e,mfaCode:t,relyingParty:window.origin}),await new Promise((e,t)=>{ee.current={resolve:e,reject:t}});break;case"passkey":if("string"==typeof t)throw new eK("Invalid authenticator response");let n=uG(await (await r.e(550).then(r.bind(r,74550))).startAuthentication(t));J.current?.resolve({mfaMethod:e,mfaCode:n,relyingParty:window.origin}),await new Promise((e,t)=>{ee.current={resolve:e,reject:t}});break;default:throw J.current?.reject(new eK("Unsupported MFA method")),new eK(`Unsupported MFA method: ${e}`)}},cancel(){J.current?.reject(new eK("MFA canceled"))},async initEnrollmentWithSms(e){let t=await uK();if(!t||!L)throw Error("Must have valid access token to enroll in MFA");await L.initEnrollMfa({method:"sms",accessToken:t,phoneNumber:e.phoneNumber})},enrollInMfa:e=>new Promise((t,r)=>{if(!e){eN.closePrivyModal(),t();return}U.mfa.noPromptOnMfaRequired&&console.warn("[Privy Warning] Triggering the 'showMfaEnrollmentModal' function when 'noPromptOnMfaRequired' is set to true is unexpected. If this is intentional, ensure that you are building custom UIs for MFA verification."),H({mfaEnrollmentFlow:{mfaMethods:U.mfa.methods,onSuccess:t,onFailure:r}}),eo("MFA_ENROLLMENT_FLOW_SCREEN")}),async initEnrollmentWithTotp(){let e=await uK();if(!e||!L)throw Error("Must have valid access token to enroll in MFA");let t=await L.initEnrollMfa({method:"totp",accessToken:e});return{secret:t.secret,authUrl:t.authUrl}},async submitEnrollmentWithSms(e){let r=await uK();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");await L.submitEnrollMfa({method:"sms",accessToken:r,phoneNumber:e.phoneNumber,code:e.mfaCode}),x(await t.getAuthenticatedUser())},async submitEnrollmentWithTotp(e){let r=await uK();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");await L.submitEnrollMfa({method:"totp",accessToken:r,code:e.mfaCode}),x(await t.getAuthenticatedUser())},async initEnrollmentWithPasskey(){},async submitEnrollmentWithPasskey({credentialIds:e}){let r=await uK();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");await L.submitEnrollMfa({method:"passkey",accessToken:r,credentialIds:e}),x(await t.getAuthenticatedUser())},async unenroll(e){let r=await uK();if(!r||!L)throw Error("Must have valid access token to remove MFA");"passkey"===e?await L.submitEnrollMfa({method:"passkey",accessToken:r,credentialIds:[]}):await L.unenrollMfa({method:e,accessToken:r}),x(await t.getAuthenticatedUser())},requestFarcasterSignerFromWarpcast:async()=>{let e=await uK(),r=w?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!e)throw Error("Must have valid access token to connect with Farcaster");if(!L||!r)throw Error("Must have an embedded wallet to use Farcaster signers");if(!w?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");if(!await eN.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");let n=await L.initFarcasterSigner({address:r.address,hdWalletIndex:null,accessToken:e,mfaCode:null,mfaMethod:null,relyingParty:window.origin});"approved"===n.status&&x(await t.getAuthenticatedUser()||w||null),H({farcasterSigner:n}),eo("AWAITING_FARCASTER_SIGNER")},getFarcasterSignerPublicKey:async()=>{let e,t=await uK(),r=w?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!t)throw Error("Must have valid access token to connect with Farcaster");if(!L||!r)throw Error("Must have an embedded wallet to use Farcaster signers");if(!w?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");if(!await eN.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");if(!w.farcaster?.signerPublicKey)throw Error("Must have a Farcaster signer public key to sign");return e=w.farcaster.signerPublicKey.slice(2),Uint8Array.from(e.match(/.{1,2}/g).map(e=>parseInt(e,16)))},signFarcasterMessage:async e=>{let t=await uK(),n=w?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!t)throw Error("Must have valid access token to connect with Farcaster");if(!L||!n)throw Error("Must have an embedded wallet to use Farcaster signers");if(!w?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");if(!await eN.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");if(!w.farcaster?.signerPublicKey)throw Error("Must have a Farcaster signer public key to sign");let i=await r.e(550).then(r.bind(r,74550)),a=await L.signFarcasterMessage({address:n.address,hdWalletIndex:null,accessToken:t,mfaCode:null,mfaMethod:null,payload:{hash:i.bufferToBase64URLString(e)},fid:BigInt(w.farcaster.fid),relyingParty:window.origin});return new Uint8Array(i.base64URLStringToBuffer(a.signature))},createGuestAccount:async()=>{if(w&&!w.isGuest)throw Error("User cannot already be authenticated to create a guest account");return w?.isGuest?w:eN.loginWithGuestAccountFlow()},isHeadlessOAuthLoading:T,loginWithCode:e=>eN.loginWithCode(e),initLoginWithEmail:e=>eN.initLoginWithEmail(e),initLoginWithSms:e=>eN.initLoginWithSms(e),otpState:M,fundWallet:(e,t)=>eN.fundWallet(e,t),initLoginWithHeadlessOAuth:(e,t)=>eN.initLoginWithHeadlessOAuth(e,t),loginWithHeadlessOAuth:e=>eN.loginWithHeadlessOAuth(e),generateSiweMessage:({address:e,chainId:t})=>eN.generateSiweMessage({address:e,chainId:t}),linkWithSiwe:({message:e,signature:t,chainId:r,walletClientType:n,connectorType:i})=>(em("siwe"),eN.linkWithSiwe({message:e,signature:t,chainId:r,walletClientType:n,connectorType:i})),signMessageWithCrossAppWallet:(e,{address:r})=>s3({user:w,client:t,address:r,requesterAppId:U.id,request:{method:"personal_sign",params:[e,r]},reconnect:eT}),signTypedDataWithCrossAppWallet(e,{address:r}){let n=tE(e);return s3({user:w,client:t,address:r,requesterAppId:U.id,request:{method:"eth_signTypedData_v4",params:[r,n]},reconnect:eT})},sendTransactionWithCrossAppWallet:(e,{address:r})=>s3({user:w,client:t,address:r,requesterAppId:U.id,request:{method:"eth_sendTransaction",params:[e]},reconnect:eT}),isModalOpen:h,mfaMethods:U.mfa.methods};uX=eP.signMessage,uJ=eP.signTypedData,u0=async(...e)=>{let t=await eb(...e);return U.embeddedWallets.waitForTransactionConfirmation&&await t.wait(),t};let eN={isNewUserThisSession:k,linkingOrConnectingHint:I,pendingTransaction:null,walletConnectionStatus:N,connectors:t.connectors?.walletConnectors??[],rpcConfig:U.rpcConfig,chains:U.chains,appId:e.appId,showFiatPrices:"native-token"!==U.embeddedWallets.priceDisplay.primary,clientAnalyticsId:t.clientAnalyticsId,nativeTokenSymbolForChainId:e=>U.chains.find(t=>t.id===Number(e))?.nativeCurrency.symbol,initializeWalletProxy:async e=>{if(L)return L;let t=new Promise(e=>{G(()=>t=>e(t))}),r=new Promise(t=>setTimeout(()=>t(null),e)),n=await Promise.race([t,r]);return G(null),n},getAuthFlow:()=>t.authFlow,getAuthMeta:()=>t.authFlow?.meta,closePrivyModal:async(r={shouldCallAuthOnSuccess:!0,isSuccess:!1})=>{let n=p&&f&&w,i;if(n&&ei.current&&(i=ej(w)),"login"===ea.current?r.shouldCallAuthOnSuccess&&n&&ei.current?(nK(et,"login","onComplete",w,k,!1,ei.current,i??null),e.onSuccess?.(w,k)):nK(et,"login","onError","exited_auth_flow"):"link"===ea.current&&i&&(r.isSuccess&&n&&ei.current?nK(et,"linkAccount","onSuccess",w,ei.current,i):ei.current&&nK(et,"linkAccount","onError","exited_link_flow",{linkMethod:ei.current})),A&&hb.includes(A)&&$.funding){let t=h_[A]??null,r=tk($.funding.chain.id,U.chains,U.rpcConfig,{appId:e.appId}),n;try{n=(await r.getBalance($.funding.address)).toBigInt()}catch{console.error("Unable to pull wallet balance")}nK(et,"fundWallet","onUserExited",{address:$.funding.address,chain:$.funding.chain,fundingMethod:t,balance:n})}W(null),ea.current=null,ei.current=null,E(!1),u(!1),setTimeout(()=>{t.authFlow=void 0},200),t.createAnalyticsEvent({eventName:"modal_closed"})},solanaSignMessage:async({message:e})=>new Promise(async(r,n)=>{let i=async()=>{let r=await t.getAccessToken();if(!r)throw Error("User must be authenticated to use their embedded wallet.");if(!b)throw Error("User must have an embedded Solana wallet to sign messages for Solana.");let n=eN.walletProxy??await eN.initializeWalletProxy(15e3);if(!n)throw Error("Failed to initialize embedded wallet proxy.");let{response:i}=await n.rpcSolana({accessToken:r,publicKey:b.address,request:{method:"signMessage",params:{message:e}}});return i.data.signature};if(U.embeddedWallets.noPromptOnSignature)try{let e=await i();r({signature:e})}catch(e){n(e)}else H({signMessage:{method:"solana_signMessage",data:e,confirmAndSign:i,onSuccess:e=>{r({signature:e})},onFailure:e=>{n(e)},uiOptions:{}}}),es("EMBEDDED_WALLET_SIGN_REQUEST_SCREEN")}),openPrivyModal:eo,connectWallet:eh,initLoginWithWallet:async(e,t)=>{ei.current="siwe",eu(e,t)},loginWithWallet:async()=>{let e,r;if(!p)throw new e0;if(!(t.authFlow instanceof rp))throw new eK("Must initialize SIWE flow first.");if(f)try{({user:e}=await t.link()),ei.current="siwe"}catch(e){throw nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"siwe"}),e}else try{({user:e,isNewUser:r}=await t.authenticate()),ei.current="siwe"}catch(e){throw nK(et,"login","onError",e.privyErrorCode||"generic_connect_wallet_error"),e}x(e||w||null),E(r||!1),y(!0)},initLoginWithFarcaster:async e=>{let r=new tW(e);t.startAuthFlow(r);try{ei.current="farcaster",await r.initializeFarcasterConnect()}catch(e){throw"login"===ea.current?nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===ea.current&&nK(et,"linkAccount","onError",e.privyErrorCode||"unknown_auth_error",{linkMethod:"farcaster"}),e}},loginWithFarcaster:async()=>{let e,r;if(!p)throw new e0;if(!(t.authFlow instanceof tW))throw new eK("Must initialize Farcaster flow first.");if(f)try{({user:e}=await t.link()),ei.current="farcaster"}catch(e){throw nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"farcaster"}),e}else try{({user:e,isNewUser:r}=await t.authenticate()),ei.current="farcaster"}catch(e){throw nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}x(e||null),E(r||!1),y(!0)},async loginWithGuestAccountFlow(){let e=new t3(this.appId);t.startAuthFlow(e);try{ea.current="login",ei.current="guest";let{user:e,isNewUser:r}=await t.authenticate();if(r=r||!1,!e)throw new eK("Unable to authenticate guest account");if(rk(e,U.embeddedWallets.createOnLogin))try{await ev(e,15e3),e=await eN.refreshUser()}catch{x(e),console.warn("Unable to create embedded wallet for guest account")}else x(e);return E(r),y(!0),nK(et,"login","onComplete",e,r,!1,"guest",null),e}catch(e){throw nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}},async crossAppAuthFlow({appId:e,popup:r}){let n=`privy:${e}`;ei.current=n;let{url:i,stateCode:a,codeVerifier:o}=await s1({api:t.api,appId:e});if(!i)throw t.createAnalyticsEvent({eventName:"cross_app_auth_error",payload:{error:"Unable to open cross-app auth popup",appId:e}}),new eK("No authorization URL returned for cross-app auth.");try{let s=await uq({url:i,popup:r,provider:n}),l=s.stateCode,c=s.authorizationCode;if(l!==a)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:n,storedStateCode:a??"",returnedStateCode:l??""}}),new eK("Unexpected auth flow. This may be a phishing attempt.",void 0,"oauth_unexpected");let d=await s2({api:uQ.api,appId:e,codeVerifier:o,stateCode:l,authorizationCode:c});d&&t.storeProviderAccessToken(e,d);let h=await eN.refreshUser();if(!h)throw new eK("Unable to update user");return t.createAnalyticsEvent({eventName:"cross_app_auth_completed",payload:{appId:e}}),h}catch(e){throw t.createAnalyticsEvent({eventName:"cross_app_auth_error",payload:{error:e.toString(),provider:n}}),e}},async initLoginWithOAuth(e,r){if(ei.current=e,ta()){if("google"===e&&aN(window.navigator.userAgent)){es("IN_APP_BROWSER_LOGIN_NOT_POSSIBLE");return}}else{es("IN_APP_BROWSER_LOGIN_NOT_POSSIBLE");return}"twitter"===e&&window.opener&&window.opener.postMessage({type:"PRIVY_OAUTH_USE_BROADCAST_CHANNEL"},"*"),to.del(tY);let n=new t7({provider:e});r&&n.addCaptchaToken(r),t.startAuthFlow(n);let i=await t.authFlow.getAuthorizationUrl();i&&i.url&&("twitter"===e&&s.Dt&&(i.url=i.url.replace("x.com","twitter.com")),window.location.assign(i.url))},async initLoginWithTelegram(e){if(!p)throw new e0;ei.current="telegram";let r=new rf(e);t.startAuthFlow(r),r.meta.telegramWebAppData=void 0,r.meta.telegramAuthResult=await new Promise((e,t)=>U.loginConfig.telegramAuthConfiguration?window.Telegram?void window.Telegram.Login.auth({bot_id:U.loginConfig.telegramAuthConfiguration.botId,request_access:!0},r=>r?e(r):t(new eK("Telegram auth failed or was canceled by the client"))):t(new eK("Telegram was not initialized")):t(new eK("Telegram Auth configuration is not loaded")))},async loginWithTelegram(){let e,r;if(!(t.authFlow instanceof rf))throw new eK("Must initialize Telegram flow before calling loginWithTelegram");if(f)try{({user:e}=await t.link()),ei.current="telegram"}catch(e){throw nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"telegram"}),e}else try{let n=await t.authenticate();e=n.user,r=n.isNewUser,ei.current="telegram"}catch(e){throw"login"===ea.current?nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===ea.current&&nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"telegram"}),e}x(e),E(r||!1),y(!0)},async recoveryOAuthFlow(e,r,n){let i,a;function o(r){if(!r)throw t.createAnalyticsEvent({eventName:"recovery_oauth_error",payload:{error:"Unable to open recovery OAuth popup",provider:e}}),new eK("Recovery OAuth failed")}switch(e){case"google-drive":{let r,s,{url:l,codeVerifier:c,stateCode:d}=await oo({api:uQ.api,provider:e});o(l);try{let i=await uV({url:l,popup:n,provider:e});if(r=i.stateCode,s=i.authorizationCode,r!==d)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:e,storedStateCode:d??"",returnedStateCode:r??""}}),new eK("Unexpected auth flow. This may be a phishing attempt.",void 0,"oauth_unexpected")}catch(r){throw t.createAnalyticsEvent({eventName:"recovery_oauth_error",payload:{error:r.toString(),provider:e}}),new eK("Recovery OAuth failed")}[i,a]=await Promise.all([uK(),os({api:uQ.api,provider:e,codeVerifier:c,stateCode:r,authorizationCode:s})]);break}case"icloud":{let{url:t}=await oo({api:uQ.api,provider:e});o(t);let{ckWebAuthToken:r}=await uV({url:t,popup:n,provider:e});a=r,i=await uK()}}if(!L)throw new eK("Cannot connect to wallet proxy");if(!i)throw new eK("Unable to authorize user");switch(r){case"recover":let s=$.recoverWallet?.privyWallet?.address;if(!s)throw new eK("Recovery OAuth failed");t.createAnalyticsEvent({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:s,recoveryMethod:e}}),await L.recover({address:s,accessToken:i,recoveryAccessToken:a,recoveryMethod:e}),t.createAnalyticsEvent({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:s,recoveryMethod:e}});break;case"create-wallet":t.createAnalyticsEvent({eventName:"embedded_wallet_creation_started"}),await L.create({accessToken:i,recoveryAccessToken:a,recoveryMethod:e});let l=rC(await eN.refreshUser());if(!l)throw nK(et,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to create wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_creation_completed",payload:{walletAddress:l.address}}),nK(et,"createWallet","onSuccess",l);break;case"set-recovery":let c=rC(w);if(!c)throw nK(et,"setWalletRecovery","onError","embedded_wallet_not_found"),Error("Embedded wallet not found");t.createAnalyticsEvent({eventName:"embedded_wallet_set_recovery_started",payload:{walletAddress:c.address,existingRecoveryMethod:c.recoveryMethod,targetRecoveryMethod:e}}),await L.setRecovery({address:c.address,accessToken:i,recoveryAccessToken:a,recoveryMethod:e});let d=rC(await eN.refreshUser());if(!d)throw nK(et,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to set recovery on wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_set_recovery_completed",payload:{walletAddress:c.address,existingRecoveryMethod:c.recoveryMethod,targetRecoveryMethod:e}}),nK(et,"setWalletRecovery","onSuccess",e,d);break;default:throw new eK("Unsupported recovery action")}},async loginWithOAuth(e){let r,n,i;if(!(t.authFlow instanceof t7))throw new eK("Must initialize OAuth flow before calling loginWithOAuth");let a=to.get(tG),o=t.authFlow.meta.stateCode;if(a!==o)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:e,storedStateCode:a??"",returnedStateCode:o??""}}),new eK("Unexpected auth flow. This may be a phishing attempt.",void 0,"oauth_unexpected");if(f)try{let n=await t.link();r=n.user,i=n.oAuthTokens,ei.current=e}catch(t){throw nK(et,"linkAccount","onError",t.privyErrorCode||"failed_to_link_account",{linkMethod:e}),t}else try{let a=await t.authenticate();r=a.user,n=a.isNewUser,i=a.oAuthTokens,ei.current=e}catch(t){throw"login"===ea.current?nK(et,"login","onError",t.privyErrorCode||"unknown_auth_error"):"link"===ea.current&&nK(et,"linkAccount","onError",t.privyErrorCode||"failed_to_link_account",{linkMethod:e}),t}return x(r),E(n||!1),y(!0),i&&r&&nK(et,"oAuthAuthorization","onOAuthTokenGrant",i,{user:r}),i},async initLoginWithPasskey(e){let r=new rh(e);t.startAuthFlow(r),ea.current="login";try{ei.current="passkey",await r.initAuthenticationFlow()}catch(e){throw nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}},async loginWithPasskey(){let e,r;if(!p)throw new e0;if(!(t.authFlow instanceof rh))throw new eK("Must initialize Passkey flow first.");if("passkey"!==ei.current)throw new eK("Must init login with Passkey flow first.");try{ei.current="passkey",{user:e,isNewUser:r}=await t.authenticate()}catch(e){throw nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}x(e),E(r||!1),y(!0)},async initLinkWithPasskey(e){let r=new rh(e);t.startAuthFlow(r),ea.current="link",ei.current="passkey";try{await r.initLinkFlow()}catch(e){throw nK(et,"linkAccount","onError",e.privyErrorCode||"unknown_auth_error",{linkMethod:"passkey"}),e}},async linkWithPasskey(){let e;if(!p)throw new e0;if(!(t.authFlow instanceof rh))throw new eK("Must initialize Passkey flow first.");if("passkey"!==ei.current)throw new eK("Must init login with Passkey flow first.");try{ei.current="passkey",{user:e}=await t.link()}catch(e){throw nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"passkey"}),e}return x(e||w||null),e},async initLoginWithHeadlessOAuth(e,r){if(ta()){if("google"===e&&aN(window.navigator.userAgent))throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.")}else throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.");let n=new t7({provider:e,headless:!0});r&&n.addCaptchaToken(r);let i=await t.startAuthFlow(n).getAuthorizationUrl();i?.url&&window.location.assign(i.url)},async loginWithHeadlessOAuth(e){let r,n;P(!0),t.startAuthFlow(new t7(e));let i=to.get(tG),a=e.stateCode;if(i!==a)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:e.provider,storedStateCode:i??"",returnedStateCode:a??""}}),P(!1),new eK("Unexpected auth flow. This may be a phishing attempt.",void 0,"oauth_unexpected");if(f)try{({user:r}=await t.link()),ei.current=e.provider}catch(t){throw nK(et,"linkAccount","onError",t.privyErrorCode||"failed_to_link_account",{linkMethod:e.provider}),t}else try{({user:r,isNewUser:n}=await t.authenticate()),ei.current=e.provider}catch(t){throw"login"===ea.current?nK(et,"login","onError",t.privyErrorCode||"unknown_auth_error"):"link"===ea.current&&nK(et,"linkAccount","onError",t.privyErrorCode||"failed_to_link_account",{linkMethod:e.provider}),t}return x(r),E(n||!1),y(!0),P(!1),r??void 0},initLoginWithEmail:async(e,r)=>{let n=new tt(e,r);t.startAuthFlow(n);try{ei.current="email",await n.sendCodeEmail()}catch(e){throw"login"===ea.current?nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===ea.current&&nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"email"}),e}},initUpdateEmail:async(e,r,n)=>{let i=new tr(e,r,n);t.startAuthFlow(i),await i.sendCodeEmail()},initUpdatePhone:async(e,r,n)=>{let i=new rg(e,r,n);t.startAuthFlow(i),await i.sendSmsCode()},initLoginWithSms:async(e,r)=>{O({status:"sending-code"});let n=new rm(e,r);t.startAuthFlow(n);try{ei.current="sms",await n.sendSmsCode(),O({status:"awaiting-code-input"})}catch(e){throw O({status:"error",error:e}),"login"===ea.current?nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===ea.current&&nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"sms"}),e}},resendEmailCode:async()=>{await t.authFlow?.sendCodeEmail()},resendSmsCode:async()=>{await t.authFlow?.sendSmsCode()},loginWithCode:async e=>{let r,n;if(O({status:"submitting-code"}),!p){let e=new e0;throw O({status:"error",error:e}),e}if(t.authFlow instanceof tt)t.authFlow.meta.emailCode=e.trim();else if(t.authFlow instanceof rm)t.authFlow.meta.smsCode=e.trim();else{let e=new eK("Must initialize a passwordless code flow first");throw O({status:"error",error:e}),e}if(await uK(),"link"===ea.current)try{({user:r}=await t.link())}catch(e){throw O({status:"error",error:e}),nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:ei.current}),e}else try{({user:r,isNewUser:n}=await t.authenticate())}catch(e){throw O({status:"error",error:e}),nK(et,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}x(r||w||null),E(n||!1),y(!0),O({status:"done"})},generateSiweMessage:async({address:e,chainId:r,captchaToken:n})=>{ea.current="link",ei.current="siwe";let i=await t.generateSiweNonce({address:e,captchaToken:n});return ru({address:e,chainId:r.replace("eip155:",""),nonce:i})},linkWithSiwe:async({message:e,signature:r,chainId:n,walletClientType:i,connectorType:a})=>{let o;try{if("link"!==ea.current||"siwe"!==ei.current)throw new eK("Must ensure no other auth flow is in progress other than the SIWE signature flow.");o=await t.linkWithSiwe({message:e,signature:r,chainId:n,walletClientType:i,connectorType:a}),o=await eN.refreshUser()??o;let s=ej(o);s&&nK(et,"linkAccount","onSuccess",o,"siwe",s)}catch(e){throw nK(et,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account",{linkMethod:"siwe"}),ea.current=null,ei.current=null,e}x(o||w||null),ea.current=null,ei.current=null},refreshUser:async()=>{let e=await t.getAuthenticatedUser();return x(e),e},walletProxy:L,createAnalyticsEvent:({eventName:e,payload:r,timestamp:n})=>t.createAnalyticsEvent({eventName:e,payload:r,timestamp:n}),acceptTerms:async()=>{let e=await t.acceptTerms();return x(e),e},getUsdTokenPrice:e=>t.getUsdTokenPrice(e),recoverEmbeddedEthereumWallet:async()=>new Promise(async(e,r)=>{let n=rC(w)||r_(w),i=await uK();if(!i||!L||!n){r(Error("Must have valid access token and Privy wallet to recover wallet"));return}z(!0);try{await L.connect({accessToken:i,address:n.address}),e(!0)}catch(a){a8(a)&&"privy"===n.recoveryMethod?(t.createAnalyticsEvent({eventName:"embedded_wallet_pinless_recovery_started",payload:{walletAddress:n.address}}),(await L.recover({address:n.address,accessToken:i,recoveryMethod:n.recoveryMethod})).address||r(Error("Unable to recover wallet")),t.createAnalyticsEvent({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:n.address}}),e(!0)):a8(a)&&"privy"!==n.recoveryMethod?(H({recoverWallet:{privyWallet:n,onFailure:r,onSuccess:()=>e(!0)},recoveryOAuthStatus:{provider:n.recoveryMethod,action:"recover"}}),eo(oa(n.recoveryMethod))):r(a)}}),embeddedSolanaWallet:b,createEmbeddedSolanaWallet:async()=>{z(!0);let e=await uK(),r=rb(w),n=rC(w);if(!w||!e)throw new eK("User must be logged in to create a Solana wallet");if(r)throw new eK("User already has an embedded Solana wallet.");if(n){if("privy"===n.recoveryMethod)await eN.recoverEmbeddedEthereumWallet();else throw new eK("Cannot create an embedded Solana wallet for a user with an existing Ethereum wallet with user-controlled recovery.")}let i=await eN.initializeWalletProxy(15e3);if(!i)throw new eK("Unable to initialize wallet proxy");t.createAnalyticsEvent({eventName:"embedded_solana_wallet_creation_started"});try{await i.createSolana({accessToken:e,ethereumAddress:n?.address});let r=await eN.refreshUser(),a=rb(r);if(!a)throw new eK("Could not get Solana wallet for user");return t.createAnalyticsEvent({eventName:"embedded_solana_wallet_creation_completed",payload:{walletAddress:a.address}}),a}catch(e){throw t.createAnalyticsEvent({eventName:"embedded_solana_wallet_creation_failed"}),new eK("Failed to create Solana embedded wallet with error ",e)}},recoverEmbeddedSolanaWallet:async()=>new Promise(async(e,r)=>{let n=rb(w),i=await uK();if(!i||!L||!n){r(Error("Must have valid access token and Privy wallet to recover wallet"));return}z(!0);try{await L.connectSolana({accessToken:i,publicKey:n.address}),e(!0)}catch(a){a8(a)&&"privy"===n.recoveryMethod?(t.createAnalyticsEvent({eventName:"embedded_solana_wallet_pinless_recovery_started",payload:{walletAddress:n.address}}),(await L.recoverSolana({publicKey:n.address,accessToken:i})).publicKey||r(Error("Unable to recover wallet")),t.createAnalyticsEvent({eventName:"embedded_solana_wallet_recovery_completed",payload:{walletAddress:n.address}}),e(!0)):r(a)}}),getMoonpaySignedUrl:ew,initCoinbaseOnRamp:t.initCoinbaseOnRamp.bind(t),getCoinbaseOnRampStatus:t.getCoinbaseOnRampStatus.bind(t),setReadyToTrue:e=>{g(!0),B?.(e)},updateWallets:()=>ex(),fundWallet:async(e,t)=>{if(!U.fundingConfig||0===U.fundingConfig.methods.length)throw Error("Wallet funding is not enabled");let r=hk({fundingMethods:U.fundingConfig.methods});H({funding:eA({address:e,fundWalletConfig:t,methodScreen:r})}),eo(r)},requestFarcasterSignerStatus:async e=>{let r=await uK(),n=w?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!r)throw Error("Must have valid access token to connect with Farcaster");if(!L||!n)throw Error("Must have an embedded wallet to use Farcaster signers");if(!w?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");let i=await t.requestFarcasterSignerStatus(e);return"approved"===i.status&&x(await t.getAuthenticatedUser()||w||null),i}};u1=eN.recoverEmbeddedEthereumWallet,u2=eN.recoverEmbeddedSolanaWallet,u3=eN.solanaSignMessage;let eR=(0,o.useMemo)(()=>({wallets:v,ready:K&&er}),[v,K,er]);return(0,m.jsx)(nz.Provider,{value:eP,children:(0,m.jsx)(nq.Provider,{value:et,children:(0,m.jsx)(s$.Provider,{value:eR,children:(0,m.jsx)(nL,{...U,children:(0,m.jsxs)(nD.Provider,{value:eN,children:[(0,m.jsx)(aM,{children:(0,m.jsxs)(nf,{data:$,setModalData:H,setInitialScreen:S,initialScreen:A,authenticated:f,open:h,children:[e.children,!U.headless&&U.captchaEnabled&&p&&!f&&(0,m.jsx)(nU,{delayedExecution:!1}),(0,m.jsx)(ux,{theme:{...U.appearance.palette||{}}}),!U.render.standalone&&(0,m.jsx)(uR,{open:h})]})}),Z&&D?(0,m.jsx)(uH,{appId:e.appId,appClientId:e.clientId,clientAnalyticsId:t.clientAnalyticsId,origin:t.apiUrl,mfaMethods:w?.mfaMethods,mfaPromise:J,mfaSubmitPromise:ee,onLoad:F,onLoadFailed:()=>null}):null,U.loginMethods.telegram&&U.loginConfig.telegramAuthConfiguration&&(0,m.jsx)(ik,{if:!0,children:(0,m.jsx)(uI,{scriptHost:e.apiUrl||tL,botUsername:U.loginConfig.telegramAuthConfiguration.botName})})]})})})})})}}}]);