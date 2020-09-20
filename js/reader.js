$(function () {
	// browser activate speech synthesis
	window.speechSynthesis;

	// Language functionality
	const language = {
		spanish: 'Spanish Female',
		portuguese: 'Brazilian Portuguese Female',
		english: 'US English Female',
	};
	let selectedLang;

	setLanguage('spanish');

	$('#btnSpanish').click(() => {
		clearButtons();
		setLanguage('spanish');
		cancelVoice();
	});

	$('#btnPortuguese').click(() => {
		clearButtons();
		setLanguage('portuguese');
		cancelVoice();
	});

	$('#btnEnglish').click(() => {
		clearButtons();
		setLanguage('english');
		cancelVoice();
	});

	// Reader functionality
	let isPlaying = false;

	$('.play').click((e) => {
		e.preventDefault();

		if (!isPlaying) {
			const text_to_read = $('#text_input').val();

			play(text_to_read);

			isPlaying = true;
		} else {
			responsiveVoice.resume();
		}
	});

	$('.pause').click(() => responsiveVoice.pause());

	$('.restart').click(() => {
		const text_to_read = $('#text_input').val();
		play(text_to_read);
	});

	$('.clean').click(cancelVoice);

	$('#text_input').click(cancelVoice);

	// Reader functions
	function cancelVoice() {
		responsiveVoice.cancel();
		isPlaying = false;
	}

	function play(text) {
		responsiveVoice.speak(text, selectedLang, {
			rate: 1,
		});
	}

	// Language functions
	function setLanguage(lang) {
		switch (lang) {
			case 'spanish':
				$('#btnSpanish').removeClass('btn-secondary').addClass('btn-primary');
				selectedLang = language.spanish;
				break;

			case 'portuguese':
				$('#btnPortuguese')
					.removeClass('btn-secondary')
					.addClass('btn-primary');
				selectedLang = language.portuguese;
				break;

			case 'english':
				$('#btnEnglish').removeClass('btn-secondary').addClass('btn-primary');
				selectedLang = language.english;
				break;
		}
	}

	function clearButtons() {
		$('#btnSpanish, #btnPortuguese, #btnEnglish')
			.removeClass('btn-primary')
			.addClass('btn-secondary');
	}
});
