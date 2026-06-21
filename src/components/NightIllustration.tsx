export function NightIllustration() {
    return (
      <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",borderRadius:"8px",marginTop:"16px"}}>
        <rect width="480" height="300" fill="#2a2520"/>
        <rect y="238" width="480" height="62" fill="#1e1a16"/>
        {/* okno */}
        <rect x="330" y="15" width="135" height="170" rx="5" fill="#0d1825"/>
        <rect x="334" y="19" width="127" height="162" rx="3" fill="#080e18"/>
        <line x1="397" y1="19" x2="397" y2="181" stroke="#2a2520" strokeWidth="3"/>
        <line x1="334" y1="100" x2="461" y2="100" stroke="#2a2520" strokeWidth="3"/>
        <circle cx="415" cy="52" r="22" fill="#F2EDE3" opacity="0.9"/>
        <circle cx="426" cy="44" r="17" fill="#080e18"/>
        <rect x="338" y="112" width="20" height="66" fill="#0a1218"/>
        <rect x="362" y="92" width="15" height="86" fill="#0a1218"/>
        <rect x="400" y="108" width="26" height="72" fill="#0a1218"/>
        <rect x="430" y="122" width="18" height="58" fill="#0a1218"/>
        <rect x="341" y="122" width="6" height="6" fill="#C7541F" opacity="0.8"/>
        <rect x="365" y="102" width="6" height="6" fill="#C7541F" opacity="0.6"/>
        <rect x="403" y="118" width="7" height="6" fill="#F2EDE3" opacity="0.5"/>
        <rect x="433" y="130" width="6" height="6" fill="#C7541F" opacity="0.6"/>
        {/* zegar */}
        <circle cx="65" cy="85" r="50" fill="#3a3020"/>
        <circle cx="65" cy="85" r="44" fill="#1a1510"/>
        <circle cx="65" cy="85" r="40" fill="#111008"/>
        <rect x="63" y="48" width="4" height="10" rx="1" fill="#F2EDE3" opacity="0.9"/>
        <rect x="63" y="117" width="4" height="10" rx="1" fill="#F2EDE3" opacity="0.8"/>
        <rect x="28" y="83" width="10" height="4" rx="1" fill="#F2EDE3" opacity="0.8"/>
        <rect x="97" y="83" width="10" height="4" rx="1" fill="#F2EDE3" opacity="0.8"/>
        <text x="65" y="56" textAnchor="middle" fontSize="11" fill="#F2EDE3" opacity="0.95" fontWeight="bold" fontFamily="sans-serif">12</text>
        <text x="105" y="89" textAnchor="middle" fontSize="11" fill="#F2EDE3" opacity="0.85" fontFamily="sans-serif">3</text>
        <text x="65" y="128" textAnchor="middle" fontSize="11" fill="#F2EDE3" opacity="0.85" fontFamily="sans-serif">6</text>
        <text x="25" y="89" textAnchor="middle" fontSize="11" fill="#F2EDE3" opacity="0.85" fontFamily="sans-serif">9</text>
        <line x1="65" y1="85" x2="58" y2="52" stroke="#F2EDE3" strokeWidth="4" strokeLinecap="round"/>
        <line x1="65" y1="85" x2="93" y2="73" stroke="#C7541F" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="65" cy="85" r="4" fill="#F2EDE3"/>
        {/* 23:47 */}
        <rect x="118" y="72" width="74" height="26" rx="4" fill="#C7541F" opacity="0.18" stroke="#C7541F" strokeWidth="1.2"/>
        <text x="155" y="90" textAnchor="middle" fontSize="19" fill="#C7541F" opacity="0.98" fontFamily="monospace" fontWeight="bold">23:47</text>
        {/* karteczki ściana */}
        <rect x="210" y="48" width="70" height="24" rx="2" fill="#F2EDE3" opacity="0.9" transform="rotate(-5 210 48)"/>
        <text x="217" y="61" fontSize="7.5" fill="#C7541F" fontWeight="bold" transform="rotate(-5 217 61)">sprawdzić!!</text>
        <text x="217" y="70" fontSize="6.5" fill="#14120D" opacity="0.8" transform="rotate(-5 217 70)">nie wliczone!</text>
        <rect x="285" y="43" width="72" height="24" rx="2" fill="#fffde0" opacity="0.88" transform="rotate(4 285 43)"/>
        <text x="291" y="55" fontSize="7" fill="#14120D" fontWeight="bold" transform="rotate(4 291 55)">klient chce taniej</text>
        <text x="291" y="65" fontSize="7.5" fill="#C7541F" fontWeight="bold" transform="rotate(4 291 65)">?????</text>
        {/* monitor */}
        <rect x="95" y="88" width="195" height="130" rx="8" fill="#1a1508"/>
        <rect x="101" y="94" width="183" height="118" rx="5" fill="#080c10"/>
        <rect x="105" y="98" width="171" height="13" rx="2" fill="#1e3a1e"/>
        <rect x="108" y="100" width="42" height="9" rx="1" fill="#2a4a2a"/>
        <rect x="153" y="100" width="32" height="9" rx="1" fill="#2a4a2a"/>
        <rect x="188" y="100" width="28" height="9" rx="1" fill="#2a4a2a"/>
        <rect x="219" y="100" width="28" height="9" rx="1" fill="#2a4a2a"/>
        <rect x="105" y="115" width="171" height="8" rx="1" fill="#F2EDE3" opacity="0.06"/>
        <rect x="105" y="127" width="171" height="8" rx="1" fill="#C7541F" opacity="0.2"/>
        <rect x="105" y="139" width="171" height="8" rx="1" fill="#F2EDE3" opacity="0.06"/>
        <rect x="105" y="151" width="171" height="8" rx="1" fill="#F2EDE3" opacity="0.05"/>
        <rect x="105" y="163" width="171" height="8" rx="1" fill="#C7541F" opacity="0.22"/>
        <rect x="105" y="175" width="171" height="8" rx="1" fill="#F2EDE3" opacity="0.06"/>
        <rect x="105" y="187" width="171" height="8" rx="1" fill="#F2EDE3" opacity="0.04"/>
        <line x1="152" y1="98" x2="152" y2="208" stroke="#F2EDE3" strokeWidth="0.5" opacity="0.1"/>
        <line x1="190" y1="98" x2="190" y2="208" stroke="#F2EDE3" strokeWidth="0.5" opacity="0.1"/>
        <line x1="222" y1="98" x2="222" y2="208" stroke="#F2EDE3" strokeWidth="0.5" opacity="0.1"/>
        <text x="196" y="135" fontSize="9.5" fill="#ff3333" opacity="0.98" fontFamily="monospace" fontWeight="bold">#REF!</text>
        <text x="196" y="172" fontSize="9.5" fill="#ff3333" opacity="0.98" fontFamily="monospace" fontWeight="bold">#DIV/0!</text>
        <text x="154" y="158" fontSize="8.5" fill="#ff6600" opacity="0.9" fontFamily="monospace">#NAZWA?</text>
        <rect x="183" y="218" width="22" height="10" rx="2" fill="#2a1e08"/>
        <rect x="170" y="226" width="48" height="5" rx="2" fill="#2a1e08"/>
        {/* biurko */}
        <rect x="20" y="225" width="440" height="14" rx="4" fill="#3d2e18"/>
        <rect x="38" y="239" width="16" height="55" fill="#2e2010"/>
        <rect x="390" y="239" width="16" height="55" fill="#2e2010"/>
        {/* postać */}
        <rect x="188" y="195" width="16" height="18" fill="#5a3e28"/>
        <ellipse cx="196" cy="178" rx="23" ry="25" fill="#5a3e28"/>
        <ellipse cx="196" cy="161" rx="23" ry="12" fill="#2a1e0e"/>
        <path d="M173 170 Q196 157 219 170" fill="#2a1e0e"/>
        <path d="M162 215 Q196 202 230 215 L234 228 L158 228 Z" fill="#2C3A2E"/>
        <path d="M162 215 L138 228 L146 238 L166 223 Z" fill="#2C3A2E"/>
        <path d="M230 215 L254 228 L246 238 L226 223 Z" fill="#2C3A2E"/>
        <ellipse cx="135" cy="234" rx="13" ry="9" fill="#5a3e28"/>
        <ellipse cx="257" cy="234" rx="13" ry="9" fill="#5a3e28"/>
        {/* oparcie krzesła — na wierzchu postaci */}
        <rect x="155" y="192" width="86" height="52" rx="6" fill="#1e3a1e"/>
        <rect x="161" y="198" width="74" height="40" rx="4" fill="#162e16"/>
        <line x1="175" y1="198" x2="175" y2="238" stroke="#1e3a1e" strokeWidth="2"/>
        <line x1="196" y1="198" x2="196" y2="238" stroke="#1e3a1e" strokeWidth="2"/>
        <line x1="217" y1="198" x2="217" y2="238" stroke="#1e3a1e" strokeWidth="2"/>
        {/* nogi krzesła */}
        <rect x="163" y="239" width="10" height="48" fill="#1a3018"/>
        <rect x="222" y="239" width="10" height="48" fill="#1a3018"/>
        <rect x="163" y="283" width="69" height="6" rx="2" fill="#1a3018"/>
        {/* klawiatura */}
        <rect x="150" y="218" width="110" height="9" rx="3" fill="#3a3020"/>
        {/* kubek */}
        <rect x="296" y="200" width="28" height="26" rx="4" fill="#4a3215"/>
        <rect x="298" y="200" width="24" height="7" rx="2" fill="#C7541F" opacity="0.7"/>
        <path d="M324 208 Q334 208 334 216 Q334 224 324 224" stroke="#4a3215" strokeWidth="3.5" fill="none"/>
        {/* karteczka biurko */}
        <rect x="54" y="212" width="68" height="22" rx="2" fill="#F2EDE3" opacity="0.9" transform="rotate(-4 54 212)"/>
        <text x="60" y="223" fontSize="7.5" fill="#C7541F" fontWeight="bold" transform="rotate(-4 60 223)">dopłacić z wł.</text>
        <text x="60" y="232" fontSize="7" fill="#14120D" transform="rotate(-4 60 232)">kieszeni!!!</text>
        {/* lampa */}
        <line x1="342" y1="225" x2="342" y2="168" stroke="#3a3020" strokeWidth="5"/>
        <line x1="342" y1="168" x2="372" y2="140" stroke="#3a3020" strokeWidth="4"/>
        <ellipse cx="378" cy="134" rx="28" ry="13" fill="#3a3020" transform="rotate(-25 378 134)"/>
      </svg>
    );
  }