const AutoDBBase = "http://localhost:23456" 
const AutoDBApiBase = AutoDBBase+"/api/"

function getApiAddress(aid) {
  return AutoDBApiBase+aid;
}