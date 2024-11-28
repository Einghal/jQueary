$(document).ready(function () {
  const $inputBox = $("#input-box"); 
  const $listContainer = $("#list-container"); 

  // Lisää uusi tehtävä
  function addTask() {
      const taskText = $inputBox.val().trim(); 
      if (taskText === "") {
          alert("You must write something!"); 
      } else {
          const $li = $("<li>").text(taskText); 
          const $span = $("<span>").html("&times;"); 
          $li.append($span); 
          $listContainer.append($li); 
          saveData(); 
      }
      $inputBox.val(""); 
  }

  
  $("#add-btn").on("click", addTask);

  
  $inputBox.on("keypress", function (e) {
      if (e.which === 13) { 
          addTask();
      }
  });

  // Merkitse tehtävä tehdyksi tai poista tehtävä
  $listContainer.on("click", "li", function (e) {
      if ($(e.target).is("span")) { 
          $(this).remove(); 
      } else {
          $(this).toggleClass("checked"); 
      }
      saveData(); 
  });

  
  function saveData() {
      localStorage.setItem("data", $listContainer.html());
  }

  // Näytä tallennetut tehtävät
  function showTask() {
      const savedData = localStorage.getItem("data");
      if (savedData) {
          $listContainer.html(savedData);
      }
  }

  
  showTask();
});
