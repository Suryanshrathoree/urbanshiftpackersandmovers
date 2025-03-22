try {
  var onSelect;
  (function () {
    const apmflightCitySearchLink = "apmflightCitySearchLink";
    const apmflightSearchLink = "apmflightSearchLink";
    const apmoneWay = "apmoneWay";
    const apmroundTrip = "apmroundTrip";
    const apmcabinclass = "apmcabinclass";
    const apmoriginTitle = "apmorigin-title";
    const apmorigin = "apmorigin";
    const apmoriginResults = "apmorigin-results";
    const apmdestinationTitle = "apmdestination-title";
    const apmdestination = "apmdestination";
    const apmdestinationResults = "apmdestination-results";
    const apmfromDate = "apmfromDate";
    const apmtoDate = "apmtoDate";
    const apmadultCount = "apmadultCount";
    const apmchildCount = "apmchildCount";
    const apminfantCount = "apminfantCount";
    const apmflightSearchBtn = "apmflightSearchBtn";
    const disabledFromDates = new Date();

    let tagsArray = [
      apmflightCitySearchLink,
      apmflightSearchLink,
      apmoneWay,
      apmroundTrip,
      apmcabinclass,
      apmoriginTitle,
      apmorigin,
      apmoriginResults,
      apmdestinationTitle,
      apmdestination,
      apmdestinationResults,
      apmfromDate,
      apmtoDate,
      apmadultCount,
      apmchildCount,
      apminfantCount,
      apmflightSearchBtn,
    ];

    let errorArray = [];
    tagsArray.forEach((tag) => {
      if (!document.getElementById(tag)) {
        errorArray.push(tag);
      }
    });

    /*--
	if (errorArray.length > 0) {
      let idsArrayString = errorArray.toString();
      alert(`${idsArrayString} id(s) not found`);
      throw new Error(`${idsArrayString} id(s) not found`);
    }
	--*/

    const flightCitySearchLink = document.getElementById(apmflightCitySearchLink);
    const flightSearchLink = document.getElementById(apmflightSearchLink);

    const oneWay = document.getElementById(apmoneWay);
    const roundTrip = document.getElementById(apmroundTrip);
    const cabinClass = document.getElementById(apmcabinclass);

    const originTitle = document.getElementById(apmoriginTitle);
    const origin = document.getElementById(apmorigin);

    const destinationTitle = document.getElementById(apmdestinationTitle);
    const destination = document.getElementById(apmdestination);

    const fromDate = document.getElementById(apmfromDate);
    const toDate = document.getElementById(apmtoDate);

    const adultCount = document.getElementById(apmadultCount);
    const childCount = document.getElementById(apmchildCount);
    const infantCount = document.getElementById(apminfantCount);

    const flightSearchBtn = document.getElementById(apmflightSearchBtn);

    const fromDatePicker = new Datepicker(fromDate, {
      autohide: true,
      minDate: disabledFromDates,
      format: "dd-mm-yyyy",
    });

    const toDatepicker = new Datepicker(toDate, {
      autohide: true,
      minDate: disabledFromDates,
      format: "dd-mm-yyyy",
    });

    fromDate.addEventListener("changeDate", () => {
      let fromDate = fromDatePicker.getDate();
      if (fromDate) {
        toDatepicker.setDate({ clear: true });
        let disabledToDates = new Date(fromDate);
        toDatepicker.setOptions({ minDate: disabledToDates });
      }
    });

    if (!origin.value) {
      originTitle.value = "";
    }
    if (!destination.value) {
      destinationTitle.value = "";
    }

    originTitle.addEventListener("keyup", () => {
      onInputChange("apmorigin");
    });

    destinationTitle.addEventListener("keyup", () => {
      onInputChange("apmdestination");
    });

    adultCount.addEventListener("change", () => {
      if (Number(adultCount.value) < Number(infantCount.value)) {
        adultCount.value = "";
        alert("The number of infants cannot be grater than the number of adults.");
        return;
      } else if (Number(adultCount.value) + Number(infantCount.value) + Number(childCount.value) > 9) {
        adultCount.value = "";
        alert("Total Passengers Cannot Exceed 9. (Adults + Children + Infants) <= 9.");
        return;
      }
    });

    childCount.addEventListener("change", () => {
      if (Number(adultCount.value) + Number(infantCount.value) + Number(childCount.value) > 9) {
        childCount.value = "";
        alert("Total Passengers Cannot Exceed 9. (Adults + Children + Infants) <= 9.");
        return;
      }
    });

    infantCount.addEventListener("change", () => {
      if (Number(adultCount.value) < Number(infantCount.value)) {
        infantCount.value = "";
        alert("The number of infants cannot be grater than the number of adults.");
        return;
      } else if (Number(adultCount.value) + Number(infantCount.value) + Number(childCount.value) > 9) {
        infantCount.value = "";
        alert("Total Passengers Cannot Exceed 9. (Adults + Children + Infants) <= 9.");
        return;
      }
    });

    oneWay.checked = true;

    if (roundTrip.checked) {
      toDate.disabled = false;
    } else {
      toDate.disabled = true;
    }

    oneWay.addEventListener("change", () => {
      toDatepicker.setDate({ clear: true });
      toDate.disabled = true;
    });

    roundTrip.addEventListener("change", () => {
      toDatepicker.setDate({ clear: true });
      toDate.disabled = false;
    });

    onSelect = (value, id, index) => {
      let inputTitleTag = document.getElementById(`${id}-title`);
      let inputValueTag = document.getElementById(id);
      let selectedliTag = document.getElementById(`${id}-item-${index}`);
      let result = document.getElementById(`${id}-results`);
      if (inputTitleTag && inputValueTag && selectedliTag) {
        inputValueTag.value = value;
        inputTitleTag.value = selectedliTag.innerHTML;
        result.style.display = "none";
      } else {
        alert(`No div with ${id} or ${id}-title or ${id}-item-${index} id`);
      }
    };
    function debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }

    function fetchData(id) {
      let inputTitleTag = document.getElementById(`${id}-title`);
      let inputValueTag = document.getElementById(id);
      let result = document.getElementById(`${id}-results`);

      if (inputTitleTag && result) {
        if (inputTitleTag.value) {
          result.innerHTML = "";
          let list = "";
          let searchLink = flightCitySearchLink ? flightCitySearchLink.value : "";
          fetch(searchLink + inputTitleTag.value, {
            method: "GET",
            headers: {
              "Access-Control-Request-Method": "GET",
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then(function (response) {
              return response.json();
            })
            .then((res) => {
              if (res.statusCode === 200) {
                let data = res.data;
                if (data.length > 0) {
                  data.forEach((d, index) => {
                    list += `<li id='${id}-item-${index}' class="selectItem" onclick="onSelect('${d.AirportCode}','${id}','${index}')">${d.City},${d.Country}-(${d.AirportCode})-${d.AirportDesc}</li>`;
                  });

                  result.innerHTML = list;
                  result.style.display = "block";
                } else {
                  list = `<li>No Match Found</li>`;
                  result.innerHTML = list;
                  result.style.display = "block";
                }
              }
              return true;
            })
            .catch(function (err) {
              console.warn("Something went wrong.", err);
              return false;
            });
        } else {
          result.style.display = "none";
          inputValueTag.value = "";
        }
      } else {
        alert(`No div with ${id} or ${id}-results id `);
      }
    }

    const onInputChange = debounce((id) => fetchData(id));

    flightSearchBtn.addEventListener("click", () => {
      if (Number(adultCount.value) < Number(infantCount.value)) {
        alert("The number of infants cannot be grater than the number of adults.");
        return;
      } else if (Number(adultCount.value) + Number(infantCount.value) + Number(childCount.value) > 9) {
        alert("Total Passengers Cannot Exceed 9. (Adults + Children + Infants) <= 9.");
        return;
      }
      if (!origin.value) {
        originTitle.value = "";
        alert("Please Select Origin");
        return;
      }
      if (!destination.value) {
        destinationTitle.value = "";
        alert("Please Select Destination");
        return;
      }

      if (!cabinClass.value) {
        cabinClass.value = "";
        alert("Please Select Cabin Class");
        return;
      }

      let formatedFromDate = fromDatePicker.getDate("yyyy-mm-dd");
      let formatedToDate = toDatepicker.getDate("yyyy-mm-dd");

      if (!formatedFromDate) {
        fromDate.value = "";
      }

      if (!fromDate.value) {
        fromDate.value = "";
        alert("Please Select From Date");
        return;
      }

      let tripType = "oneWay";
      let roundTripChecked = roundTrip.checked;
      if (roundTripChecked) {
        if (!formatedToDate) {
          fromDate.value = "";
        }
        if (!toDate.value) {
          toDate.value = "";
          alert("Please Select To Date");
          return;
        }
        tripType = "roundTrip";
      }
      if (!adultCount.value) {
        alert("Please Select Adults");
        return;
      }

      if (!formatedToDate) {
        formatedToDate = "";
      }
      let query = `adult=${adultCount.value}&child=${childCount.value}&class=${cabinClass.value}&destination=${destination.value}&from=${formatedFromDate}&infant=${infantCount.value}&origin=${origin.value}&to=${formatedToDate}&tripType=${tripType}`;
      let baseUrl = flightSearchLink.value;
      window.location = baseUrl + query;
    });
  })();
} catch (e) {
  // console.error("error ", e);
}
