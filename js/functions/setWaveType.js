function setWaveType () {
    if(waveIndex % 3 === 1){
        return [0,0,0,0,0,1,1,0]
    }else
    if(waveIndex % 3 === 2){
        return [0,0,0,0,1,1,1,1]
    }else
    if(waveIndex % 3 === 0){
        return [0,0,0,0,0,0,0,0]
    }
}