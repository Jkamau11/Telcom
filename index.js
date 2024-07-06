function totalPower(){
    let typicalAcPower = document.getElementById("Typical_air_conditioner_power").value;
    let acQtty = document.getElementById("qtty").value;
    let acTotalPower = (typicalAcPower * acQtty)/1000;
    let acLoad = document.getElementById("AC-load").value;
    let dcLoad = document.getElementById("DC-load").value;

    let powerConsumption = (dcLoad * 53.5)/1000;

    let bht = (10* document.getElementById("Bht").value)/10;
    // console.log(bht);

    let batteryCapacity = 100 * Math.round(((dcLoad* bht)/0.85)/100);

    let batteryChargingCoefficient = document.getElementById("chargingCoefficient").value;

    // console.log(batteryChargingCoefficient);

    let batteryChargingPower = (batteryCapacity * batteryChargingCoefficient * 53.5)/1000;
        document.getElementById("Power-consumption").innerHTML = powerConsumption + " kW" ;
        document.getElementById("Battery-Capacity").innerHTML = batteryCapacity + " Ah" ;
        document.getElementById("Battery-Charging").innerHTML = batteryChargingPower + " kW" ;
    let totalPowerDemand = acTotalPower + powerConsumption + batteryChargingPower;
        document.getElementById("Total-power").innerHTML = (totalPowerDemand).toFixed(3) + " kW" ;

    let dcPowerDemand = powerConsumption + batteryChargingPower;

    let dDg = 10 * Math.round(((totalPowerDemand/0.75))/10);
    let dgKva = dDg/0.8;
    let dRect = Math.round((dcPowerDemand/0.85)) ;

        document.getElementById("designDg").innerHTML = "" + dDg + " kW" + " or " + dgKva + " kVA";
        document.getElementById("designRect").innerHTML = "" + dRect + " kW";


    // console.log(powerConsumption);
    // console.log(batteryCapacity);
    // console.log(batteryChargingPower);
    // console.log(dDg);
    // console.log(dRect);
} ; 
 

function reset(){
        document.getElementById("Typical_air_conditioner_power").value = '';
        document.getElementById("qtty").value = '';
        document.getElementById("AC-load").value = '';
        document.getElementById("DC-load").value = '';
        document.getElementById("chargingCoefficient").value = '';
        document.getElementById("Bht").value = '';

            function totalPower(){
                let typicalAcPower = document.getElementById("Typical_air_conditioner_power").value;
                let acQtty = document.getElementById("qtty").value;
                let acTotalPower = (typicalAcPower * acQtty)/1000;
                let acLoad = document.getElementById("AC-load").value;
                let dcLoad = document.getElementById("DC-load").value;
            
                let powerConsumption = (dcLoad * 53.5)/1000;
            
                let bht = (10* document.getElementById("Bht").value)/10;
                // console.log(bht);
            
                let batteryCapacity = 100 * Math.round(((dcLoad* bht)/0.85)/100);
            
                let batteryChargingCoefficient = document.getElementById("chargingCoefficient").value;
            
                // console.log(batteryChargingCoefficient);
            
                let batteryChargingPower = (batteryCapacity * batteryChargingCoefficient * 53.5)/1000;
                    document.getElementById("Power-consumption").innerHTML = powerConsumption + " kW" ;
                    document.getElementById("Battery-Capacity").innerHTML = batteryCapacity + " Ah" ;
                    document.getElementById("Battery-Charging").innerHTML = batteryChargingPower + " kW" ;
                let totalPowerDemand = acTotalPower + powerConsumption + batteryChargingPower;
                    document.getElementById("Total-power").innerHTML = (totalPowerDemand).toFixed(3) + " kW" ;
            
                let dcPowerDemand = powerConsumption + batteryChargingPower;
            
                let dDg = 10 * Math.round(((totalPowerDemand/0.75))/10);
                let dgKva = dDg/0.8;
                let dRect = 10 * Math.round(((dcPowerDemand/0.75))/10);
            
                    document.getElementById("designDg").innerHTML = "" + dDg + " kW" + " or " + dgKva + " kVA";
                    document.getElementById("designRect").innerHTML = "" + dRect + " kW";
            }
    totalPower();
}

/*      let dataReset = document.getElementById('#rst');
        let inPuts = document.querySelectorAll('input');

        dataReset.addEventListener('click', ()=>{
        inPuts.forEach(input => input.value = 0);
    })
*/