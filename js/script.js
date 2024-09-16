document.addEventListener('DOMContentLoaded', function () {
  var dropdownBtn = document.querySelector('.dropbtn');
  var dropdownContent = document.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
  });

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
});