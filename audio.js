document.addEventListener('DOMContentLoaded', function () {
    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#4F4A85',
        progressColor: '#383351',
        url: '/audio.mp3',
    })
});

console.log("working");