(function (window) {
  var names = ["Alice", "Bob", "Catherine", "David", "Eva", "George", "Hannah", "Isaac", "Julia", "Kevin", "Linda"];

  function selectNamesByLength(names, lengthThreshold) {
    return names.filter(function (name) {
      return name.length >= lengthThreshold;
    });
  }

  function displaySelectedNames(selectedNames, criteria) {
    console.log(`Selected names (${criteria}):`);
    selectedNames.forEach(function (name) {
      console.log(name);
    });
  }

  function processNames(names) {
    for (var i = 0; i < names.length; i++) {
      var currentName = names[i];

      if (currentName.charAt(0).toLowerCase() === 'j') {
        goodbyeSpeaker.speak(currentName);
      } else {
        helloSpeaker.speak(currentName);
      }
    }
  }

  processNames(names);

  var lengthThreshold = 7; 
  var selectedNames = selectNamesByLength(names, lengthThreshold);
  displaySelectedNames(selectedNames, `Length >= ${lengthThreshold}`);
})(window);
