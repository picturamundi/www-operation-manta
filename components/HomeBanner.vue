<template>
    <div id="welcome">
<div>
  <p class="chad center">
    CHAD<br />
    <span class="arabic">---- تشاد • الحروب تويوتا ----</span>
  </p>
</div>
<div>
  <p class="wars center">THE TOYOTA WARS</p>
</div>
<p class="center">
<img
  class="toyota"
  src="images/logo2.gif"
/>
</p>
<p class="center">
<a href="/rulebook/play" class="mybutton">
  Get Started →
</a>
</p>
</div>
</template>


<style scoped>
.chad {
  color: var(--ac) !important;
  font-size: 145px;
  font-family: "Holtwood One SC", serif;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 0.35;
  /**background-color:rgb(100,70,0);**/
}
@media only screen and (max-device-width: 1000px) {
  .chad {
    font-size: 75px;
    line-height: 35px;
    /**background-color:rgb(100,70,0);**/
  }
}
.center {
  text-align: center;
  margin-right:auto;
  margin-left:auto;
  margin-top: 0px !important;
  margin-bottom: 0px;
}
.arabic {
  font-size: 42px;
  font-family: Cairo;
  color: var(--do);
  line-height: 1.7;
}
@media only screen and (max-device-width: 1000px) {
  .arabic {
    font-size: 22px;
    line-height: 20px;
  }
}
.wars {
  color: var(--ac) !important;
  font-family: "Teko";
  font-size: 74px;
  margin-top: 0px;
  line-height: 75px;
}
@media only screen and (max-device-width: 1000px) {
  .wars {
    font-size: 38px;
  }
}

.toyota {
  width: 450px;
  image-rendering: pixelated;
  margin-top: -80px;
}
@media only screen and (max-device-width: 1000px) {
  .toyota {
  width: 275px;
  }
}
.mybutton {
  display: block;
  font-size: 1.5rem;
  color: var(--ac);
  border: 4px solid #ffb300;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  margin-left:auto;
  margin-right:auto;
  margin-top: -160px;
  font-family: monospace;
  text-align:center;
  width: 535px;
  cursor: pointer;
}
@media only screen and (max-device-width: 1000px) {
  .mybutton {
    width: 280px;
    margin-top: -105px;
  }
}
</style>