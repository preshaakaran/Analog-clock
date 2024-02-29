


setInterval(()=> {
  d=new Date()
  s = d.getSeconds();
  m = d.getMinutes();
  h = d.getHours();
  hr=30*h + m/2;
  mr=6*m;
  sr=6*s;

  hours.style.transform=`rotate(${hr}deg)`;
  minutes.style.transform=`rotate(${mr}deg)`;
  seconds.style.transform=`rotate(${sr}deg)`;
  }, 1000);
