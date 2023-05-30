const frame = document.querySelector('#slider');
const panel = frame.querySelector('.panel');
const btns = frame.querySelectorAll('.btns li');
const ring = frame.querySelector('#rot');
const speed = 1000;
let preventEvent = false;

//미션 - activation, slidePanel로 함수 분리 / 활성화 버튼 이벤트 방지, 모션중 이벤트 방지 (50)
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		const isOn = e.currentTarget.classList.contains('on');
		if (isOn || preventEvent) return;
		preventEvent = true;

		activation(btns, idx);
		slidePanel(panel, idx);
		moveRing(idx);
	});
});

function activation(arrEl, index) {
	for (const el of arrEl) el.classList.remove('on');
	arrEl[index].classList.add('on');
}

function slidePanel(el, index) {
	new Anime(el, {
		prop: 'margin-left',
		value: -100 * index + '%',
		duration: speed,
		callback: () => (preventEvent = false),
	});
}

function moveRing(index) {
	ring.className = '';
	ring.classList.add(`rot${index + 1}`);
}

// ex
// const plus = (n1, n2)=>{
// 	return n1 + n2;
// }
const plus = (n1, n2) => n1 + n2;

console.log(plus(2, 3));
