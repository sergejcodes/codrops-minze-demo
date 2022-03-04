class ShApp extends MinzeElement{css=()=>"\n    :host {\n      width: 100%;\n      min-height: 100vh;\n      display: flex;\n    }\n  "}class ShSidebar extends MinzeElement{html=()=>'\n    <div class="logo">\n      <img src="assets/logo.svg">\n    </div>\n\n    <nav class="nav">\n      <div class="nav__entry nav__entry--active">\n        <img src="assets/icon-home.svg">\n      </div>\n\n      <div class="nav__entry">\n        <img src="assets/icon-view-grid.svg">\n      </div>\n\n      <div class="nav__entry">\n        <img src="assets/icon-user.svg">\n      </div>\n\n      <div class="nav__entry">\n        <img src="assets/icon-cog.svg">\n      </div>\n    </nav>\n  ';css=()=>"\n    :host {\n      width: 100px;\n      height: 100vh;\n      flex-shrink: 0;\n      background: rgb(39 39 42);\n      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);\n    }\n\n    @media (min-width: 768px) {\n      :host {\n        width: 120px;\n      }\n    }\n\n    .logo {\n      width: 100%;\n      height: 120px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-bottom: 1px solid rgb(82 82 91);\n    }\n\n    .nav {\n      padding: 32px 0;\n    }\n\n    .nav__entry {\n      width: 100%;\n      height: 64px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      opacity: 50%;\n      position: relative;\n      margin: 16px 0;\n    }\n\n    .nav__entry--active {\n      opacity: 100%;\n    }\n\n    .nav__entry--active::before {\n      content: '';\n      width: 8px;\n      height: 100%;\n      background: rgb(255 255 255);\n      border-radius: 0 9999px 9999px 0;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n    }\n  "}class ShMain extends MinzeElement{css=()=>"\n    :host {\n      height: 100vh;\n      flex-grow: 1;\n      overflow-y: scroll;\n    }\n  "}class ShHeader extends MinzeElement{html=()=>'\n    <div>\n      <h1 class="headline"><slot name="headline"></slot></h1>\n      <p class="sub-headline"><slot name="sub-headline"></slot></p>\n    </div>\n\n    <slot name="nav"></slot>\n  ';css=()=>"\n    :host {\n      width: 100%;\n      height: 120px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-bottom: 1px solid rgb(212 212 216);\n      padding: 0 24px;\n    }\n\n    @media (min-width: 768px) {\n      :host {\n        padding: 0 48px;\n      }\n    }\n\n    .headline {\n      font-size: 30px;\n      font-weight: bold;\n      margin: 0;\n    }\n\n    .sub-headline {\n      font-size: 18px;\n      margin: 0;\n    }\n\n    ::slotted(nav) {\n      display: flex;\n      gap: 16px;\n    }\n  "}class ShContent extends MinzeElement{css=()=>"\n    :host {\n      max-width: 1600px;\n      padding: 24px;\n      margin: 0 auto;\n    }\n\n    @media (min-width: 768px) {\n      :host {\n        padding: 48px;\n      }\n    }\n  "}class ShWrap extends MinzeElement{attrs=["headline","vertical","width","nowrap"];html=()=>`\n    <h2 class="headline">${this.headline??""}</h2>\n\n    <div class="wrap">\n      <slot></slot>\n    </div>\n  `;css=()=>`\n    :host {\n      width: 100%;\n      margin-bottom: 24px;\n    }\n\n    @media (min-width: 768px) {\n      :host {\n        margin-bottom: 48px;\n      }\n    }\n\n    @media (min-width: 768px) {\n      :host {\n        width: ${this.width??"100%"};\n      }\n    }\n\n    .headline {\n      margin: 0 0 24px;\n    }\n\n    .wrap {\n      display: flex;\n      flex-wrap: wrap;\n      flex-direction: ${this.vertical?"column":"row"};\n      gap: 24px;\n    }\n\n    @media (min-width: 768px) {\n      .wrap {\n        flex-wrap: ${this.nowrap?"nowrap":"wrap"};\n      }\n    }\n  `}class ShWelcome extends MinzeElement{attrs=["name"];html=()=>`\n    <div>\n      <p class="text">Welcome back</p>\n      <h2 class="headline">${this.name??""}</h2>\n    </div>\n\n    <sh-button class="button">\n      Set up automation\n    </sh-button>\n\n    <img src="assets/icon-sun.svg" class="icon">\n  `;css=()=>"\n    :host {\n      width: 100%;\n      background: rgb(228 228 231);\n      border-radius: 2px;\n      overflow: hidden;\n      position: relative;\n      padding: 24px;\n      margin-bottom: 48px;\n    }\n\n    .text {\n      font-size: 18px;\n      margin: 0;\n    }\n\n    .headline {\n      font-size: 30px;\n      margin: 0;\n    }\n\n    .button {\n      margin-top: 32px;\n    }\n\n    .icon {\n      width: 512px;\n      height: 512px;\n      opacity: 5%;\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      transform: translate(0, 50%);\n    }\n  "}class ShCard extends MinzeElement{attrs=["top-line","headline","value","background"];html=()=>`\n    <div class="top-line">${this.topLine??""}</div>\n    <div class="headline">${this.headline??""}</div>\n\n    <slot>\n      <div class="value">${this.value??""}</div>\n    </slot>\n  `;css=()=>`\n    :host {\n      width: 200px;\n      height: 180px;\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      background: ${this.background??"transparent"};\n      font-family: sans-serif;\n      border-radius: 2px;\n      padding: 24px 24px 16px;\n    }\n\n    .top-line {\n      font-size: 16px;\n      margin-bottom: 2px;\n    }\n\n    .headline {\n      font-size: 20px;\n      font-weight: bold;\n    }\n\n    .value {\n      font-size: 36px;\n      font-weight: bold;\n      margin-top: auto;\n    }\n\n    ::slotted(*) {\n      margin-top: auto;\n      margin-bottom: 12px;\n    }\n  `}class ShSwitch extends MinzeElement{reactive=[["active",!1]];toggleActive=()=>this.active=!this.active;html=()=>'\n    <div class="indicator"></div>\n  ';css=()=>`\n    :host {\n      width: 48px;\n      height: 25px;\n      display: flex;\n      background: rgb(255 255 255);\n      border: 1px solid rgb(228 228 231);\n      border-radius: 9999px;\n      cursor: pointer;\n      transition: all 0.2s ease-in-out;\n      padding: 2px;\n    }\n\n    .indicator {\n      width: 20px;\n      height: 20px;\n      background: ${this.active?"rgb(161, 161, 170)":"rgb(228 228 231)"};\n      border-radius: 9999px;\n      position: relative;\n      transform: translateX(${this.active?"calc(100% + 2px)":"0"});\n      transition: all 0.2s ease-in-out;\n    }\n  `;eventListeners=[[this,"click",this.toggleActive]]}class ShAccordion extends MinzeElement{reactive=[["open",!1]];toggleOpen=()=>this.open=!this.open;html=()=>'\n    <div class="title">\n      <slot name="title"></slot>\n\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" class="arrow">\n        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />\n      </svg>\n    </div>\n\n    <slot name="content"></slot>\n  ';css=()=>`\n    :host {\n      background: rgb(228 228 231);\n      font-family: sans-serif;\n      border-radius: 2px;\n      cursor: pointer;\n    }\n\n    .title {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      font-weight: bold;\n      user-select: none;\n      padding: 16px;\n    }\n\n    .arrow {\n      transition: transform 0.2s ease-in-out;\n      transform: ${this.open?"rotate(180deg)":"rotate(0)"};\n    }\n\n    ::slotted([slot=content]) {\n      display: ${this.open?"block":"none"};\n      padding: 16px;\n    }\n  `;eventListeners=[[".title","click",this.toggleOpen]]}class ShButton extends MinzeElement{attrs=["href","target","rel"];html=()=>`\n    <a\n      ${this.href?`href="${this.href}"`:""}\n      ${this.target?`href="${this.target}"`:""}\n      ${this.rel?`href="${this.rel}"`:""}\n    >\n      <slot></slot>\n    </a>\n  `;css=()=>"\n    :host {\n      display: inline-block;\n      background: rgb(63, 63, 70);\n      color: rgb(255 255 255);\n      cursor: pointer;\n      border-radius: 2px;\n      transition: background 0.2s ease-in-out;\n      padding: 8px 16px;\n    }\n\n    :host(:hover) {\n      background: rgb(82, 82, 91);\n    }\n  "}var n=Object.freeze({__proto__:null,ShApp:ShApp,ShSidebar:ShSidebar,ShMain:ShMain,ShHeader:ShHeader,ShContent:ShContent,ShWrap:ShWrap,ShWelcome:ShWelcome,ShCard:ShCard,ShSwitch:ShSwitch,ShAccordion:ShAccordion,ShButton:ShButton});Minze.defineAll(n);
