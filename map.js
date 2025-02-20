const districts = document.querySelectorAll('.district');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');


districts.forEach(district => {
    district.addEventListener('mouseover', e => {
        const info = e.target.getAttribute('data-info');
        popupContent.textContent = info;
        popup.style.display = 'block';
        popup.style.left = e.clientX + 'px';
        popup.style.top = e.clientY + 'px';
    });


    district.addEventListener('mouseout', () => {
        popup.style.display = 'none';
    });
});