const insert=document.getElementById("insert")

window.addEventListener('keydown',event=>{
    insert.innerHTML=`
    <div class="key">
       ${event.key===" "?"Space":event.key}
      
    </div>
    <div class="key">
       ${event.keyCode}
       <small>event.Keycode</small>
    </div>
    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
    `
})