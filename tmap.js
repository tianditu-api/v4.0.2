  (function () {
    const style = document.createElement('style');
    style.innerHTML = '.el-overlay  { display:none !important; }';
    document.head.appendChild(style);

    const style2 = document.createElement('style');
    style2.innerHTML = '.el-button {pointer-events: none;}';
    document.head.appendChild(style2);
    
     const style3 = document.createElement('style');
    style3.innerHTML = 'body { display:none; }';
    document.head.appendChild(style3);
  })()
