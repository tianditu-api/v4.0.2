  (function () {
    const style = document.createElement('style');
    style.innerHTML = '.el-overlay  { display:none !important; }';
    document.head.appendChild(style);

    style.innerHTML = '
      .el-button {
      pointer-events: none;
    }';
    document.head.appendChild(style);
    
  })()
