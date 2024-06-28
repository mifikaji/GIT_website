document.addEventListener('DOMContentLoaded', () =>{
	let cans = document.getElementById("cans");

	cans.addEventListener('mouseover', function() {
		cans.classList.add('cans_over');
	})
	cans.addEventListener('mouseout', function() {
		cans.classList.remove('cans_over');
	}
	);

	let ice = document.getElementById("ice");

	ice.addEventListener('mouseover', function() {
		ice.classList.add('ice_over');
	})
	ice.addEventListener('mouseout', function() {
		ice.classList.remove('ice_over');
	}
	);

	let buben = document.getElementById("buben");

	buben.addEventListener('mouseover', function() {
		buben.classList.add('buben_over');
	})
	buben.addEventListener('mouseout', function() {
		buben.classList.remove('buben_over');
	}
	);

	let pencils = document.getElementById("pencils");

	pencils.addEventListener('mouseover', function() {
		pencils.classList.add('pencils_over');
	})
	pencils.addEventListener('mouseout', function() {
		pencils.classList.remove('pencils_over');
	}
	);

	let notebook = document.getElementById("notebook");

	notebook.addEventListener('mouseover', function() {
		notebook.classList.add('notebook_over');
	})
	notebook.addEventListener('mouseout', function() {
		notebook.classList.remove('notebook_over');
	}
	);

	let palo = document.getElementById("palo");

	palo.addEventListener('mouseover', function() {
		palo.classList.add('palo_over');
	})
	palo.addEventListener('mouseout', function() {
		palo.classList.remove('palo_over');
	}
	);

	let bag1 = document.getElementById("bag1");

	bag1.addEventListener('mouseover', function() {
		bag1.classList.add('bag1_over');
	})
	bag1.addEventListener('mouseout', function() {
		bag1.classList.remove('bag1_over');
	}
	);

	let bag2 = document.getElementById("bag2");

	bag2.addEventListener('mouseover', function() {
		bag2.classList.add('bag2_over');
	})
	bag2.addEventListener('mouseout', function() {
		bag2.classList.remove('bag2_over');
	}
	);

	let package = document.getElementById("package");

	package.addEventListener('mouseover', function() {
		package.classList.add('package_over');
	})
	package.addEventListener('mouseout', function() {
		package.classList.remove('package_over');
	}
	);

	let package2 = document.getElementById("package2");

	package2.addEventListener('mouseover', function() {
		package2.classList.add('package2_over');
	})
	package2.addEventListener('mouseout', function() {
		package2.classList.remove('package2_over');
	}
	);


	// корзина
	let counter = document.querySelector('.counter h1');
	let cartCount = 0;
	let add = document.querySelectorAll('.add')

	add.forEach(function(plus) {
		plus.addEventListener('click', function () {
			cartCount++;
			counter.textContent = '' + cartCount + '';
		});
	});
})