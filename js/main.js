const reservSelect = document.querySelectorAll(".reserv__select")
const reservList = document.querySelectorAll(".reserv__list")

reservSelect.forEach(function (element) {
	element.addEventListener("click", function (item) {
		item.stopPropagation()
		reservSelect.forEach(function (element) {
			element.parentNode.childNodes[1].classList.remove("active--flex")
		})
		item.target.parentNode.childNodes[1].classList.add("active--flex")
	})
})
document.addEventListener("click", function (event) {
	reservSelect.forEach(function (element) {
		element.parentNode.childNodes[1].classList.remove("active--flex")
	})
})

reservList.forEach(function (element) {
	element.addEventListener("click", function (item) {
		item.target.parentNode.parentNode.childNodes[0].childNodes[1].innerHTML =
			item.target.innerHTML
		reservSelect.forEach(function (element) {
			element.parentNode.childNodes[1].classList.remove("active--flex")
		})
	})
})
